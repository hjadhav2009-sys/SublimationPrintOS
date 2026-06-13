import { useEffect, useMemo, useState } from "react";
import {
  clearRealEsrganTestOutput,
  discoverRealEsrganEngine,
  getRealEsrganExpectedLayout,
  runRealEsrganSafeTest
} from "../app/engineApi";
import { commandErrorMessage } from "../app/foundationApi";
import { openManagedFolder } from "../app/shellApi";
import {
  getActiveUpscaleProcessingJob,
  getUpscaleProcessingStatus,
  getUpscaleProcessingJob,
  getUpscaleQueueAssetHealth,
  repairInterruptedUpscaleProcessingJob,
  repairMissingRawQueueItems,
  repairStaleProcessingItems,
  requestCancelUpscaleProcessingJob,
  startUpscaleProcessingJob
} from "../app/upscaleProcessingApi";
import {
  clearUpscaleQueue,
  getUpscaleIntakeSummary,
  getUpscaleQueue,
  importImagesFromFolderDialog,
  importImagesWithDialog,
  removeUpscaleQueueItem
} from "../app/upscaleQueueApi";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import type {
  EngineDiscoveryStatus,
  EngineExpectedLayout,
  EngineTestRunResult,
  ImageImportItemResult,
  ImageImportResult,
  UpscaleIntakeSummary,
  UpscaleProcessingJobStatus,
  UpscaleProcessingPlanInput,
  UpscaleProcessingQualityMode,
  UpscaleProcessingStatus,
  UpscaleProcessingTileSize,
  UpscaleQueueAssetHealth,
  UpscaleQueueAssetHealthItem,
  UpscaleQueueItem,
  UpscaleQueueResponse
} from "../types/app";

const missingRawMessage =
  "Raw image copy is missing from AppData. Re-import the original image or remove this queue item.";
const jobOutputFormatOptions: Array<UpscaleProcessingPlanInput["output_format"]> = [
  "png",
  "jpg",
  "webp"
];

type OutputTargetOption =
  | "scale_2"
  | "scale_4"
  | "scale_8"
  | "scale_10"
  | "target_8k"
  | "custom_long_edge";

type ProcessingPresetId =
  | "quick_test"
  | "production_fast"
  | "production_quality"
  | "large_output_safe"
  | "ultra_detail";

interface ProcessingPreset {
  id: ProcessingPresetId;
  name: string;
  label: string;
  targetOption: OutputTargetOption;
  qualityMode: UpscaleProcessingQualityMode;
  tileSize: UpscaleProcessingTileSize;
  outputFormat: UpscaleProcessingPlanInput["output_format"];
}

const processingPresets: ProcessingPreset[] = [
  {
    id: "quick_test",
    name: "Quick Test",
    label: "Fast first check",
    targetOption: "scale_2",
    qualityMode: "safe",
    tileSize: "auto",
    outputFormat: "png"
  },
  {
    id: "production_fast",
    name: "Production Fast",
    label: "Best daily production default",
    targetOption: "scale_4",
    qualityMode: "balanced",
    tileSize: "auto",
    outputFormat: "png"
  },
  {
    id: "production_quality",
    name: "Production Quality",
    label: "Sharper output, may be slower",
    targetOption: "scale_4",
    qualityMode: "balanced",
    tileSize: 256,
    outputFormat: "png"
  },
  {
    id: "large_output_safe",
    name: "Large Output Safe",
    label: "For 8x or 8K on low-spec systems",
    targetOption: "scale_8",
    qualityMode: "safe",
    tileSize: "auto",
    outputFormat: "png"
  },
  {
    id: "ultra_detail",
    name: "Ultra Detail",
    label: "Slow. Use only for special images.",
    targetOption: "scale_8",
    qualityMode: "ultra",
    tileSize: 128,
    outputFormat: "png"
  }
];

const processingPresetById = new Map(
  processingPresets.map((preset) => [preset.id, preset])
);

export function UpscaleTestPage() {
  const [queueResponse, setQueueResponse] =
    useState<UpscaleQueueResponse | null>(null);
  const [intakeSummary, setIntakeSummary] =
    useState<UpscaleIntakeSummary | null>(null);
  const [importResult, setImportResult] = useState<ImageImportResult | null>(
    null
  );
  const [isQueueBusy, setIsQueueBusy] = useState(false);
  const [queueMessage, setQueueMessage] = useState<string | null>(null);
  const [queueMessageVariant, setQueueMessageVariant] = useState<
    "success" | "warning"
  >("success");
  const [queueError, setQueueError] = useState<string | null>(null);

  const [processingStatus, setProcessingStatus] =
    useState<UpscaleProcessingStatus | null>(null);
  const [isProcessingBusy, setIsProcessingBusy] = useState(false);
  const [processingMessage, setProcessingMessage] = useState<string | null>(
    null
  );
  const [processingMessageVariant, setProcessingMessageVariant] = useState<
    "success" | "warning"
  >("success");
  const [processingError, setProcessingError] = useState<string | null>(null);
  const [activeJob, setActiveJob] =
    useState<UpscaleProcessingJobStatus | null>(null);
  const [jobBanner, setJobBanner] = useState<string | null>(null);
  const [selectedQueueItemId, setSelectedQueueItemId] = useState<string | null>(
    null
  );
  const [smoothPreviewMode, setSmoothPreviewMode] = useState(true);
  const [selectedPresetId, setSelectedPresetId] =
    useState<ProcessingPresetId>("quick_test");
  const [presetTouched, setPresetTouched] = useState(false);
  const [targetOption, setTargetOption] =
    useState<OutputTargetOption>("scale_2");
  const [customLongEdge, setCustomLongEdge] = useState(7680);
  const [qualityMode, setQualityMode] =
    useState<UpscaleProcessingQualityMode>("safe");
  const [tileSize, setTileSize] =
    useState<UpscaleProcessingTileSize>("auto");
  const [jobOutputFormat, setJobOutputFormat] =
    useState<UpscaleProcessingPlanInput["output_format"]>("png");

  const [assetHealth, setAssetHealth] =
    useState<UpscaleQueueAssetHealth | null>(null);
  const [isHealthBusy, setIsHealthBusy] = useState(false);
  const [healthMessage, setHealthMessage] = useState<string | null>(null);
  const [healthMessageVariant, setHealthMessageVariant] = useState<
    "success" | "warning"
  >("success");
  const [healthError, setHealthError] = useState<string | null>(null);

  const [discovery, setDiscovery] = useState<EngineDiscoveryStatus | null>(null);
  const [layout, setLayout] = useState<EngineExpectedLayout | null>(null);
  const [testResult, setTestResult] = useState<EngineTestRunResult | null>(null);
  const [isEngineBusy, setIsEngineBusy] = useState(false);
  const [engineMessage, setEngineMessage] = useState<string | null>(null);
  const [engineErrorMessage, setEngineErrorMessage] = useState<string | null>(
    null
  );

  const queueHealthById = useMemo(() => {
    const healthMap = new Map<string, UpscaleQueueAssetHealthItem>();
    for (const item of assetHealth?.items ?? []) {
      healthMap.set(item.queue_item_id, item);
    }
    return healthMap;
  }, [assetHealth]);
  const activeItems = useMemo(
    () => queueResponse?.items ?? [],
    [queueResponse]
  );
  const selectedQueueItem = useMemo(
    () =>
      activeItems.find((item) => item.id === selectedQueueItemId) ??
      activeItems.find(canProcessQueueItem) ??
      activeItems[0] ??
      null,
    [activeItems, selectedQueueItemId]
  );
  const selectedPreset =
    processingPresetById.get(selectedPresetId) ?? processingPresets[0];

  useEffect(() => {
    void refreshQueue();
    void refreshActiveJob();
  }, []);

  useEffect(() => {
    if (activeItems.length === 0) {
      setSelectedQueueItemId(null);
      return;
    }

    if (!selectedQueueItemId || !activeItems.some((item) => item.id === selectedQueueItemId)) {
      setSelectedQueueItemId(
        activeItems.find(canProcessQueueItem)?.id ?? activeItems[0].id
      );
    }
  }, [activeItems, selectedQueueItemId]);

  useEffect(() => {
    if (presetTouched) {
      return;
    }

    const defaultPresetId =
      (processingStatus?.completed ?? 0) > 0 ? "production_fast" : "quick_test";
    const preset = processingPresetById.get(defaultPresetId);
    if (!preset || selectedPresetId === defaultPresetId) {
      return;
    }

    setSelectedPresetId(defaultPresetId);
    applyProcessingPreset(preset);
  }, [processingStatus?.completed, presetTouched, selectedPresetId]);

  useEffect(() => {
    if (!activeJob || !isActiveJobRunning(activeJob)) {
      return;
    }

    const timer = window.setInterval(() => {
      void pollActiveJob(activeJob.job_id);
    }, 2000);

    return () => window.clearInterval(timer);
  }, [activeJob?.job_id, activeJob?.status]);

  useEffect(() => {
    const handleDiscoverEvent = () => {
      void handleDiscover();
    };

    window.addEventListener("spos:discover-engine", handleDiscoverEvent);
    return () =>
      window.removeEventListener("spos:discover-engine", handleDiscoverEvent);
  }, []);

  const refreshQueue = async (messageOverride?: string) => {
    setQueueError(null);

    try {
      const [queue, summary, status, health] = await Promise.all([
        getUpscaleQueue(false),
        getUpscaleIntakeSummary(),
        getUpscaleProcessingStatus(),
        getUpscaleQueueAssetHealth()
      ]);
      setQueueResponse(queue);
      setIntakeSummary(summary);
      setProcessingStatus(status);
      setAssetHealth(health);
      setQueueMessageVariant("success");
      setQueueMessage(messageOverride ?? queue.message);
      return queue;
    } catch (error: unknown) {
      setQueueError(commandErrorMessage(error));
      return null;
    }
  };

  const refreshActiveJob = async () => {
    try {
      const job = await getActiveUpscaleProcessingJob();
      setActiveJob(job);
      return job;
    } catch (error: unknown) {
      setProcessingError(commandErrorMessage(error));
      return null;
    }
  };

  const pollActiveJob = async (jobId: string) => {
    try {
      const job = await getUpscaleProcessingJob(jobId);
      setActiveJob(job);
      if (!isActiveJobRunning(job)) {
        await refreshQueue(job.message);
      }
    } catch (error: unknown) {
      setProcessingError(commandErrorMessage(error));
    }
  };

  const handleImportImages = async () => {
    setIsQueueBusy(true);
    setQueueMessage(null);
    setQueueError(null);

    try {
      const result = await importImagesWithDialog();
      setImportResult(result);
      const queue = await refreshQueue();
      if (queue) {
        setQueueMessageVariant(importNoticeVariant(result));
        setQueueMessage(buildImportNotice(result, queue));
      }
    } catch (error: unknown) {
      setQueueError(commandErrorMessage(error));
    } finally {
      setIsQueueBusy(false);
    }
  };

  const handleImportFolder = async () => {
    setIsQueueBusy(true);
    setQueueMessage(null);
    setQueueError(null);

    try {
      const result = await importImagesFromFolderDialog();
      setImportResult(result);
      const queue = await refreshQueue();
      if (queue) {
        setQueueMessageVariant(importNoticeVariant(result));
        setQueueMessage(buildImportNotice(result, queue));
      }
    } catch (error: unknown) {
      setQueueError(commandErrorMessage(error));
    } finally {
      setIsQueueBusy(false);
    }
  };

  const handleStartFreshQueue = async () => {
    const confirmed = window.confirm(
      "Start fresh? This hides current queued/failed rows but does not delete raw image files or outputs."
    );
    if (!confirmed) {
      return;
    }

    setIsQueueBusy(true);
    setQueueMessage(null);
    setQueueError(null);

    try {
      const queue = await clearUpscaleQueue();
      setQueueResponse(queue);
      await refreshQueue(
        "Fresh queue started. Current queued and failed rows are hidden; files were not deleted."
      );
    } catch (error: unknown) {
      setQueueError(commandErrorMessage(error));
    } finally {
      setIsQueueBusy(false);
    }
  };

  const handleRemoveQueueItem = async (queueItemId: string) => {
    setIsQueueBusy(true);
    setQueueMessage(null);
    setQueueError(null);

    try {
      const queue = await removeUpscaleQueueItem(queueItemId);
      setQueueResponse(queue);
      await refreshQueue("Queue item removed. Files were not deleted.");
    } catch (error: unknown) {
      setQueueError(commandErrorMessage(error));
    } finally {
      setIsQueueBusy(false);
    }
  };

  const handleCheckQueueFiles = async () => {
    setIsHealthBusy(true);
    setHealthMessage(null);
    setHealthError(null);

    try {
      const health = await getUpscaleQueueAssetHealth();
      setAssetHealth(health);
      setHealthMessageVariant(health.ok ? "success" : "warning");
      setHealthMessage(health.message);
    } catch (error: unknown) {
      setHealthError(commandErrorMessage(error));
    } finally {
      setIsHealthBusy(false);
    }
  };

  const handleRepairMissingRaw = async () => {
    const confirmed = window.confirm(
      "Mark missing raw and invalid queue rows as failed? This does not delete raw image files or outputs."
    );
    if (!confirmed) {
      return;
    }

    setIsHealthBusy(true);
    setHealthMessage(null);
    setHealthError(null);

    try {
      const health = await repairMissingRawQueueItems();
      setAssetHealth(health);
      setHealthMessageVariant(health.ok ? "success" : "warning");
      setHealthMessage(health.message);
      await refreshQueue();
    } catch (error: unknown) {
      setHealthError(commandErrorMessage(error));
    } finally {
      setIsHealthBusy(false);
    }
  };

  const handleRepairStaleProcessing = async () => {
    const confirmed = window.confirm(
      "Mark interrupted processing items as failed?"
    );
    if (!confirmed) {
      return;
    }

    setIsProcessingBusy(true);
    setProcessingMessage(null);
    setProcessingError(null);

    try {
      const status = await repairStaleProcessingItems();
      setProcessingStatus(status);
      setProcessingMessageVariant("success");
      setProcessingMessage(status.message);
      await refreshQueue();
    } catch (error: unknown) {
      setProcessingError(commandErrorMessage(error));
    } finally {
      setIsProcessingBusy(false);
    }
  };

  function applyProcessingPreset(preset: ProcessingPreset) {
    setTargetOption(preset.targetOption);
    setQualityMode(preset.qualityMode);
    setTileSize(preset.tileSize);
    setJobOutputFormat(preset.outputFormat);
  }

  const handlePresetChange = (presetId: ProcessingPresetId) => {
    const preset = processingPresetById.get(presetId);
    if (!preset) {
      return;
    }

    if (
      preset.id === "ultra_detail" &&
      !window.confirm(
        "Ultra detail can be very slow. Use only for special images. Continue?"
      )
    ) {
      return;
    }

    setPresetTouched(true);
    setSelectedPresetId(preset.id);
    applyProcessingPreset(preset);
  };

  const handleStartProcessingJob = async (
    queueItemId: string,
    plan: UpscaleProcessingPlanInput
  ) => {
    setIsProcessingBusy(true);
    setProcessingMessage(null);
    setProcessingError(null);
    setJobBanner(null);

    try {
      const result = await startUpscaleProcessingJob(queueItemId, plan);
      setProcessingMessageVariant(result.ok ? "success" : "warning");
      setProcessingMessage(result.message);
      if (result.ok) {
        setJobBanner(result.message);
        const job = await getUpscaleProcessingJob(result.job_id);
        setActiveJob(job);
      } else if (result.job_id) {
        const job = await getUpscaleProcessingJob(result.job_id);
        setActiveJob(job);
      } else {
        await refreshQueue(result.message);
      }
    } catch (error: unknown) {
      setProcessingError(commandErrorMessage(error));
    } finally {
      setIsProcessingBusy(false);
    }
  };

  const handleStartSelectedProcessingJob = async () => {
    if (!selectedQueueItem) {
      setProcessingMessageVariant("warning");
      setProcessingMessage("Import or select an image before processing.");
      return;
    }

    await handleStartProcessingJob(
      selectedQueueItem.id,
      buildProcessingPlanInput(
        targetOption,
        customLongEdge,
        qualityMode,
        tileSize,
        jobOutputFormat,
        selectedPreset
      )
    );
  };

  const handleRequestCancelJob = async () => {
    if (!activeJob || !isActiveJobRunning(activeJob)) {
      return;
    }

    const confirmed = window.confirm(
      "Stop current processing? The raw image will remain safe. Partial temporary files may be cleaned."
    );
    if (!confirmed) {
      return;
    }

    setIsProcessingBusy(true);
    setProcessingMessage(null);
    setProcessingError(null);

    try {
      const job = await requestCancelUpscaleProcessingJob(activeJob.job_id);
      setActiveJob(job);
      setProcessingMessageVariant("warning");
      setProcessingMessage(job.message);
      await refreshQueue(job.message);
    } catch (error: unknown) {
      setProcessingError(commandErrorMessage(error));
    } finally {
      setIsProcessingBusy(false);
    }
  };

  const handleOpenUpscaledFolder = async () => {
    setProcessingError(null);

    try {
      const result = await openManagedFolder("upscaled");
      setProcessingMessageVariant(result.ok ? "success" : "warning");
      setProcessingMessage(result.message);
    } catch (error: unknown) {
      setProcessingError(commandErrorMessage(error));
    }
  };

  const handleRepairInterruptedJob = async () => {
    if (!activeJob || !isActiveJobRunning(activeJob)) {
      return;
    }

    const confirmed = window.confirm(
      "Use Repair Stuck Job only if the app was closed or Windows crashed and no Real-ESRGAN process is running."
    );
    if (!confirmed) {
      return;
    }

    setIsProcessingBusy(true);
    setProcessingError(null);
    setProcessingMessage(null);

    try {
      const jobId = activeJob.job_id;
      const result = await repairInterruptedUpscaleProcessingJob();
      const repairedJob = await getUpscaleProcessingJob(jobId);
      setActiveJob(repairedJob);
      setProcessingMessageVariant(result.repaired_jobs > 0 ? "warning" : "success");
      setProcessingMessage(result.message);
      await refreshQueue(result.message);
    } catch (error: unknown) {
      setProcessingError(commandErrorMessage(error));
    } finally {
      setIsProcessingBusy(false);
    }
  };

  const handleDiscover = async () => {
    setIsEngineBusy(true);
    setEngineErrorMessage(null);
    setEngineMessage(null);

    try {
      const status = await discoverRealEsrganEngine();
      setDiscovery(status);
      setEngineMessage(status.message);
    } catch (error: unknown) {
      setEngineErrorMessage(commandErrorMessage(error));
    } finally {
      setIsEngineBusy(false);
    }
  };

  const handleShowLayout = async () => {
    setIsEngineBusy(true);
    setEngineErrorMessage(null);
    setEngineMessage(null);

    try {
      const expectedLayout = await getRealEsrganExpectedLayout();
      setLayout(expectedLayout);
      setEngineMessage("Expected engine layout loaded");
    } catch (error: unknown) {
      setEngineErrorMessage(commandErrorMessage(error));
    } finally {
      setIsEngineBusy(false);
    }
  };

  const handleSafeTest = async () => {
    setIsEngineBusy(true);
    setEngineErrorMessage(null);
    setEngineMessage(null);

    try {
      const result = await runRealEsrganSafeTest();
      setTestResult(result);
      setEngineMessage(result.message);
      const status = await discoverRealEsrganEngine();
      setDiscovery(status);
    } catch (error: unknown) {
      setEngineErrorMessage(commandErrorMessage(error));
    } finally {
      setIsEngineBusy(false);
    }
  };

  const handleClearOutput = async () => {
    setIsEngineBusy(true);
    setEngineErrorMessage(null);
    setEngineMessage(null);

    try {
      const status = await clearRealEsrganTestOutput();
      setDiscovery(status);
      setTestResult(null);
      setEngineMessage("Safe test output cleared if it existed");
    } catch (error: unknown) {
      setEngineErrorMessage(commandErrorMessage(error));
    } finally {
      setIsEngineBusy(false);
    }
  };

  const handleOpenEngineFolder = async () => {
    setIsEngineBusy(true);
    setEngineErrorMessage(null);
    setEngineMessage(null);

    try {
      const result = await openManagedFolder("engine");
      if (result.ok) {
        setEngineMessage(result.message);
      } else {
        setEngineErrorMessage(result.message);
      }
    } catch (error: unknown) {
      setEngineErrorMessage(commandErrorMessage(error));
    } finally {
      setIsEngineBusy(false);
    }
  };

  const hasQueueHealthIssue =
    (assetHealth?.missing_raw ?? 0) > 0 || (assetHealth?.invalid_path ?? 0) > 0;
  const jobIsActive = Boolean(activeJob && isActiveJobRunning(activeJob));
  const canStopActiveJob = Boolean(
    activeJob &&
      (activeJob.status === "pending" || activeJob.status === "running")
  );
  const selectedPlan = buildProcessingPlanInput(
    targetOption,
    customLongEdge,
    qualityMode,
    tileSize,
    jobOutputFormat,
    selectedPreset
  );
  const factoryStatus = factoryStatusLabel(discovery, activeJob, processingStatus);
  const progressPercent = progressPercentForJob(activeJob);
  const showHeavyWarning =
    matchesLargeTarget(targetOption) ||
    activeJob?.size_category === "heavy" ||
    activeJob?.size_category === "very heavy";

  return (
    <section className="page upscale-factory">
      <header className="factory-header">
        <div>
          <h2>Upscale Factory</h2>
          <p>Local AI image upscaling for sublimation and marketplace images</p>
        </div>
        <Badge variant={factoryBadgeVariant(factoryStatus)}>{factoryStatus}</Badge>
      </header>

      <div className="factory-toolbar">
        <Button
          disabled={isQueueBusy || jobIsActive}
          onClick={() => void handleImportImages()}
          variant="primary"
        >
          Import Images
        </Button>
        <Button
          disabled={isQueueBusy || jobIsActive}
          onClick={() => void handleImportFolder()}
          variant="secondary"
        >
          Import Folder
        </Button>
        <Button
          disabled={isQueueBusy || jobIsActive || !queueResponse?.summary.total}
          onClick={() => void handleStartFreshQueue()}
          variant="secondary"
        >
          Start Fresh Queue
        </Button>
        <Button
          disabled={isEngineBusy}
          onClick={() => void handleDiscover()}
          variant="secondary"
        >
          Discover Engine
        </Button>
        <Button
          disabled={isEngineBusy}
          onClick={() => void handleOpenEngineFolder()}
          variant="secondary"
        >
          Open Engine Folder
        </Button>
        <Button onClick={() => void handleOpenUpscaledFolder()} variant="secondary">
          Open Upscaled Folder
        </Button>
      </div>

      <div className="factory-message-stack">
        {(assetHealth?.missing_raw ?? 0) > 0 ? (
          <div className="notice notice-warning">
            Some queued files are missing from AppData. Use Queue Health &
            Recovery when processing is idle.
          </div>
        ) : null}
        {queueError ? <div className="notice notice-warning">{queueError}</div> : null}
        {queueMessage ? (
          <div
            className={`notice ${
              queueMessageVariant === "warning"
                ? "notice-warning"
                : "notice-success"
            }`}
          >
            {queueMessage}
          </div>
        ) : null}
        {processingError ? (
          <div className="notice notice-warning">{processingError}</div>
        ) : null}
        {processingMessage ? (
          <div
            className={`notice ${
              processingMessageVariant === "warning"
                ? "notice-warning"
                : "notice-success"
            }`}
          >
            {processingMessage}
          </div>
        ) : null}
        {engineErrorMessage ? (
          <div className="notice notice-warning">{engineErrorMessage}</div>
        ) : null}
        {engineMessage ? (
          <div className="notice notice-success">{engineMessage}</div>
        ) : null}
      </div>

      <div className="factory-workspace">
        <main className="factory-main">
          <section className="factory-panel">
            <div className="factory-panel-header">
              <div>
                <h3>Selected Image Review</h3>
                <p>Completed images are saved in: AppData/assets/upscaled/YYYYMMDD</p>
              </div>
              <div className="factory-review-actions">
                <label className="settings-checkbox factory-checkbox">
                  <input
                    checked={smoothPreviewMode}
                    onChange={(event) =>
                      setSmoothPreviewMode(event.currentTarget.checked)
                    }
                    type="checkbox"
                  />
                  <span>Smooth Preview Mode</span>
                </label>
                <Button disabled variant="ghost">
                  Expand Preview
                </Button>
              </div>
            </div>

            {importResult ? <ImportResultDetails result={importResult} /> : null}

            {activeItems.length > 0 ? (
              <div
                className={`factory-review-grid ${
                  smoothPreviewMode ? "factory-review-grid-smooth" : ""
                }`}
              >
                {activeItems.map((item) => (
                  <QueueItemCard
                    disabled={isQueueBusy || isProcessingBusy}
                    health={queueHealthById.get(item.id)}
                    item={item}
                    key={item.id}
                    onRemove={handleRemoveQueueItem}
                    onSelect={setSelectedQueueItemId}
                    processingLocked={jobIsActive}
                    selected={item.id === selectedQueueItem?.id}
                  />
                ))}
              </div>
            ) : (
              <div className="empty-state">No ready images in queue.</div>
            )}
          </section>

          <section className="factory-panel factory-progress-panel">
            <div className="factory-panel-header">
              <div>
                <h3>Processing Progress</h3>
                <p>{progressTextForJob(activeJob)}</p>
              </div>
              <Badge variant={activeJob?.status === "failed" ? "warning" : "info"}>
                {activeJob?.status ?? "idle"}
              </Badge>
            </div>
            <div className="factory-progress-track">
              <div
                className="factory-progress-fill"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            {showHeavyWarning ? (
              <div className="notice notice-warning">
                This may take several minutes. Use Quick Test or Production Fast
                first.
              </div>
            ) : null}
            {activeJob && isLongRunningFourXJob(activeJob) ? (
              <div className="notice notice-warning">
                This is taking longer than expected. You can stop processing
                safely.
              </div>
            ) : null}
            {jobBanner && activeJob && isActiveJobRunning(activeJob) ? (
              <div className="notice notice-success">{jobBanner}</div>
            ) : null}
            {activeJob ? (
              <ActiveJobCard
                job={activeJob}
                imageName={imageNameForJob(activeJob, activeItems)}
                onOpenUpscaledFolder={handleOpenUpscaledFolder}
                onRepairInterruptedJob={handleRepairInterruptedJob}
                onRequestCancelJob={handleRequestCancelJob}
              />
            ) : null}
            <div className="summary-grid">
              <SummaryItem label="Completed" value={processingStatus?.completed ?? 0} />
              <SummaryItem label="Failed" value={processingStatus?.failed ?? 0} />
              <SummaryItem
                label="Before size"
                value={dimensionsLabel(activeJob?.source_width, activeJob?.source_height)}
              />
              <SummaryItem
                label="After size"
                value={dimensionsLabel(activeJob?.target_width, activeJob?.target_height)}
              />
              <SummaryItem
                label="Time elapsed"
                value={activeJob ? elapsedJobTime(activeJob) : "0s"}
              />
              <SummaryItem
                label="Output path"
                value={activeJob?.output_relative_path ?? "Not created yet"}
              />
            </div>
          </section>
        </main>

        <aside className="factory-side-panel">
          <div className="factory-side-heading">
            <span>Upscale Pro Recommended</span>
            <strong>{selectedPreset.name}</strong>
            <p>{selectedPreset.label}</p>
          </div>

          <label className="settings-field">
            <span>Processing Preset</span>
            <select
              disabled={jobIsActive}
              value={selectedPresetId}
              onChange={(event) =>
                handlePresetChange(event.currentTarget.value as ProcessingPresetId)
              }
            >
              {processingPresets.map((preset) => (
                <option key={preset.id} value={preset.id}>
                  {preset.name}
                </option>
              ))}
            </select>
          </label>

          <label className="settings-field">
            <span>Output Target</span>
            <select
              disabled={jobIsActive}
              value={targetOption}
              onChange={(event) =>
                setTargetOption(event.currentTarget.value as OutputTargetOption)
              }
            >
              <option value="scale_2">2x quick test</option>
              <option value="scale_4">4x standard</option>
              <option value="scale_8">8x large</option>
              <option value="scale_10">10x large</option>
              <option value="target_8k">8K long edge</option>
              <option value="custom_long_edge">Custom long edge</option>
            </select>
          </label>

          {targetOption === "custom_long_edge" ? (
            <label className="settings-field">
              <span>Long Edge</span>
              <input
                disabled={jobIsActive}
                min={1000}
                max={10000}
                onChange={(event) =>
                  setCustomLongEdge(Number(event.currentTarget.value))
                }
                type="number"
                value={customLongEdge}
              />
            </label>
          ) : null}

          <label className="settings-field">
            <span>Quality Mode</span>
            <select
              disabled={jobIsActive}
              value={qualityMode}
              onChange={(event) =>
                setQualityMode(
                  event.currentTarget.value as UpscaleProcessingQualityMode
                )
              }
            >
              <option value="safe">Safe laptop mode</option>
              <option value="balanced">Balanced</option>
              <option value="ultra">Ultra quality</option>
            </select>
          </label>

          <label className="settings-field">
            <span>Tile Size</span>
            <select
              disabled={jobIsActive}
              value={tileSize}
              onChange={(event) =>
                setTileSize(parseTileSize(event.currentTarget.value))
              }
            >
              <option value="auto">Auto</option>
              <option value={64}>64</option>
              <option value={128}>128</option>
              <option value={256}>256</option>
              <option value={512}>512</option>
            </select>
          </label>

          <label className="settings-field">
            <span>Output Format</span>
            <select
              disabled={jobIsActive}
              value={jobOutputFormat}
              onChange={(event) =>
                setJobOutputFormat(
                  event.currentTarget.value as UpscaleProcessingPlanInput["output_format"]
                )
              }
            >
              {jobOutputFormatOptions.map((format) => (
                <option key={format} value={format}>
                  {format.toUpperCase()}
                </option>
              ))}
            </select>
          </label>

          <div className="factory-plan-stats">
            <MetaItem
              label="Estimated Size"
              value={activeJob?.size_category ?? estimatedSizeLabel(targetOption)}
            />
            <MetaItem
              label="AI Passes"
              value={String(activeJob?.pass_count ?? estimatedPassCountForControls(targetOption, qualityMode))}
            />
            <MetaItem
              label="Tile"
              value={
                activeJob?.resolved_tile_size
                  ? String(activeJob.resolved_tile_size)
                  : tileSize === "auto"
                    ? "auto"
                    : String(tileSize)
              }
            />
          </div>

          {selectedPlan.output_format === "webp" && selectedPlan.mode !== "scale" ? (
            <div className="notice notice-warning">
              Exact 8K/custom final resize works with PNG or JPG in Phase 1.
            </div>
          ) : null}

          <div className="factory-side-actions">
            <Button
              disabled={
                isProcessingBusy ||
                jobIsActive ||
                !selectedQueueItem ||
                !canProcessQueueItem(selectedQueueItem)
              }
              onClick={() => void handleStartSelectedProcessingJob()}
              variant="primary"
            >
              Start Processing
            </Button>
            {activeJob && isActiveJobRunning(activeJob) ? (
              <Button
                disabled={isProcessingBusy || !canStopActiveJob}
                onClick={() => void handleRequestCancelJob()}
                variant="secondary"
              >
                {activeJob.status === "cancel_requested"
                  ? "Stopping..."
                  : "Stop Processing"}
              </Button>
            ) : null}
            {activeJob && isActiveJobRunning(activeJob) ? (
              <Button
                disabled={isProcessingBusy}
                onClick={() => void handleRepairInterruptedJob()}
                variant="ghost"
              >
                Repair Stuck Job
              </Button>
            ) : null}
            <Button onClick={() => void handleOpenUpscaledFolder()} variant="secondary">
              Open Output Folder
            </Button>
          </div>

          {activeJob && isActiveJobRunning(activeJob) ? (
            <p className="field-note">
              Use Repair Stuck Job only if the app was closed or Windows crashed
              and no Real-ESRGAN process is running.
            </p>
          ) : null}
          {activeJob?.output_relative_path ? (
            <div className="notice notice-success">
              Output saved: {activeJob.output_relative_path}
            </div>
          ) : null}
        </aside>
      </div>

      <details className="factory-secondary" open={hasQueueHealthIssue}>
        <summary>Queue Health & Recovery</summary>
        <div className="summary-grid">
          <SummaryItem label="Healthy" value={assetHealth?.healthy ?? 0} />
          <SummaryItem label="Missing Raw" value={assetHealth?.missing_raw ?? 0} />
          <SummaryItem label="Invalid Path" value={assetHealth?.invalid_path ?? 0} />
          <SummaryItem label="Processing" value={processingStatus?.processing ?? 0} />
        </div>
        <div className="settings-actions">
          <Button
            disabled={isHealthBusy}
            onClick={() => void handleCheckQueueFiles()}
            variant="secondary"
          >
            Check Queue Files
          </Button>
          <Button
            disabled={isHealthBusy || jobIsActive || !hasQueueHealthIssue}
            onClick={() => void handleRepairMissingRaw()}
            variant="secondary"
          >
            Mark Missing Raw as Failed
          </Button>
          <Button
            disabled={isProcessingBusy || jobIsActive || !processingStatus?.processing}
            onClick={() => void handleRepairStaleProcessing()}
            variant="ghost"
          >
            Repair Stale Processing
          </Button>
        </div>
        {healthError ? <div className="notice notice-warning">{healthError}</div> : null}
        {healthMessage ? (
          <div
            className={`notice ${
              healthMessageVariant === "warning"
                ? "notice-warning"
                : "notice-success"
            }`}
          >
            {healthMessage}
          </div>
        ) : null}
      </details>

      <details className="factory-secondary">
        <summary>Engine Setup Details</summary>
        <div className="summary-grid">
          <SummaryItem label="Engine" value={discovery?.ok ? "Ready" : "Missing"} />
          <SummaryItem
            label="Binary"
            value={discovery?.binary?.exists ? "Found" : "Missing"}
          />
          <SummaryItem
            label="Model Files"
            value={discovery?.models.model_files_count ?? 0}
          />
          <SummaryItem
            label="Help Command"
            value={discovery?.can_run_basic_command ? "Available" : "Not available"}
          />
        </div>
        <div className="settings-actions">
          <Button
            disabled={isEngineBusy}
            onClick={() => void handleShowLayout()}
            variant="secondary"
          >
            Show Expected Layout
          </Button>
          <Button
            disabled={isEngineBusy}
            onClick={() => void handleSafeTest()}
            variant="secondary"
          >
            Run Safe Test
          </Button>
          <Button
            disabled={isEngineBusy}
            onClick={() => void handleClearOutput()}
            variant="ghost"
          >
            Clear Test Output
          </Button>
        </div>
        {layout ? <ExpectedLayoutDetails layout={layout} /> : null}
        {discovery ? <EngineDiscoveryDetails discovery={discovery} /> : null}
        {testResult ? <SafeTestDetails testResult={testResult} /> : null}
      </details>

      <div className="kv-list factory-path-footer">
        <PathRow
          label="Raw asset folder"
          value={intakeSummary?.raw_asset_dir ?? "Not loaded yet"}
        />
      </div>
    </section>
  );
}

function ImportResultDetails({ result }: { result: ImageImportResult }) {
  return (
    <details className="secondary-details">
      <summary>Last Import Result</summary>
      <div className="summary-grid">
        <SummaryItem label="Selected" value={result.summary.selected} />
        <SummaryItem label="Imported" value={result.summary.imported} />
        <SummaryItem label="Queued" value={result.summary.queued} />
        <SummaryItem label="Duplicates" value={result.summary.duplicates} />
        <SummaryItem label="Skipped" value={result.summary.skipped} />
        <SummaryItem label="Errors" value={result.summary.errors} />
      </div>
      {result.summary.duplicates > 0 ? (
        <div className="notice notice-warning">
          Duplicate means this image is already in the active queue. No new
          queue row was created.
        </div>
      ) : null}
      {result.items.length > 0 ? (
        <div className="import-result-list">
          {result.items.map((item, index) => (
            <ImportResultRow item={item} key={`${item.original_name}-${index}`} />
          ))}
        </div>
      ) : null}
    </details>
  );
}

function ImportResultRow({ item }: { item: ImageImportItemResult }) {
  return (
    <div className="import-result-row">
      <div>
        <strong>{item.original_name}</strong>
        <p className="muted-text">{item.source_path_preview}</p>
        <p className="muted-text">{item.message}</p>
      </div>
      <Badge variant={badgeVariantForImportStatus(item.status)}>
        {item.status}
      </Badge>
    </div>
  );
}

function ActiveJobCard({
  imageName,
  job,
  onOpenUpscaledFolder,
  onRepairInterruptedJob,
  onRequestCancelJob
}: {
  imageName: string;
  job: UpscaleProcessingJobStatus;
  onOpenUpscaledFolder: () => Promise<void>;
  onRepairInterruptedJob: () => Promise<void>;
  onRequestCancelJob: () => Promise<void>;
}) {
  const canRepair = isActiveJobRunning(job);
  const canStop = job.status === "pending" || job.status === "running";

  return (
    <div className="active-job-card">
      <div className="queue-card-header">
        <div className="queue-card-title">
          <strong>{imageName}</strong>
          <span>{job.progress_label || job.stage}</span>
        </div>
        <Badge variant={job.status === "failed" ? "warning" : "info"}>
          {job.status}
        </Badge>
      </div>
      <div className="queue-card-meta">
        <MetaItem label="Preset" value={job.preset_label ?? "Custom"} />
        <MetaItem label="Target" value={job.target_label} />
        <MetaItem label="Quality" value={qualityModeLabel(job.quality_mode)} />
        <MetaItem label="Tile Size" value={job.tile_size} />
        <MetaItem label="Resolved Tile" value={String(job.resolved_tile_size || "unknown")} />
        <MetaItem label="AI Passes" value={String(job.pass_count || 0)} />
        <MetaItem label="Size Category" value={job.size_category} />
        <MetaItem
          label="Source"
          value={dimensionsLabel(job.source_width, job.source_height)}
        />
        <MetaItem
          label="Target Size"
          value={dimensionsLabel(job.target_width, job.target_height)}
        />
        <MetaItem
          label="Target MP"
          value={job.target_megapixels ? job.target_megapixels.toFixed(1) : "0"}
        />
        <MetaItem label="Stage" value={job.stage || "pending"} />
        <MetaItem label="Elapsed" value={elapsedJobTime(job)} />
        <MetaItem
          label="Engine PID"
          value={job.engine_pid ? String(job.engine_pid) : "Not running"}
        />
        <MetaItem
          label="Output"
          value={job.output_relative_path ?? "Not created yet"}
        />
      </div>
      {canRepair ? (
        <div className="notice notice-warning">
          Large jobs may take time. If Windows was closed or the app was
          restarted while this job was running, use Repair Stuck Job.
        </div>
      ) : null}
      {job.error ? <div className="notice notice-warning">{job.error}</div> : null}
      {job.output_relative_path ? (
        <div className="notice notice-success">
          Output saved: {job.output_relative_path}
        </div>
      ) : null}
      <div className="queue-card-actions">
        {canRepair ? (
          <Button
            disabled={!canStop}
            onClick={() => void onRequestCancelJob()}
            variant="secondary"
          >
            {job.status === "cancel_requested" ? "Stopping..." : "Stop Processing"}
          </Button>
        ) : null}
        <Button onClick={() => void onOpenUpscaledFolder()} variant="secondary">
          Open Upscaled Folder
        </Button>
        {canRepair ? (
          <Button
            onClick={() => void onRepairInterruptedJob()}
            variant="ghost"
          >
            Repair Stuck Job
          </Button>
        ) : null}
      </div>
    </div>
  );
}

function QueueItemCard({
  disabled,
  health,
  item,
  onRemove,
  onSelect,
  processingLocked,
  selected
}: {
  disabled: boolean;
  health: UpscaleQueueAssetHealthItem | undefined;
  item: UpscaleQueueItem;
  onRemove: (queueItemId: string) => Promise<void>;
  onSelect: (queueItemId: string) => void;
  processingLocked: boolean;
  selected: boolean;
}) {
  const canRemove = item.status === "queued" || item.status === "failed";
  const workerMessage = queueItemWorkerMessage(item, health);

  return (
    <article
      className={`queue-item-card factory-review-card ${
        selected ? "factory-review-card-selected" : ""
      }`}
    >
      <header className="queue-card-header">
        <div className="queue-card-title">
          <strong>{item.original_name}</strong>
          <span className="path-value">{item.relative_path}</span>
        </div>
        <Badge variant={badgeVariantForQueueStatus(item.status)}>
          {queueStatusLabel(item.status)}
        </Badge>
      </header>

      <div className="queue-card-meta">
        <MetaItem label="Size" value={formatSize(item.size_bytes)} />
        <MetaItem label="Source" value={item.source_kind} />
        <MetaItem
          label={item.status === "completed" ? "Saved Output" : "Output"}
          value={item.output_relative_path ?? "Not created"}
        />
        <MetaItem
          label="Output Target"
          value={`${item.desired_scale_factor}x ${item.desired_output_format.toUpperCase()}`}
        />
      </div>

      {workerMessage ? (
        <div
          className={`queue-card-message ${
            item.status === "failed" || health?.health === "missing_raw"
              ? "notice-warning"
              : "notice-success"
          }`}
        >
          {workerMessage}
        </div>
      ) : null}

      <div className="queue-card-actions">
        <Button
          onClick={() => onSelect(item.id)}
          variant={selected ? "primary" : "secondary"}
        >
          {selected ? "Selected" : "Select"}
        </Button>
        <Button
          disabled={disabled || !canRemove || processingLocked}
          onClick={() => void onRemove(item.id)}
          variant="ghost"
        >
          Remove
        </Button>
      </div>
    </article>
  );
}

function ExpectedLayoutDetails({ layout }: { layout: EngineExpectedLayout }) {
  return (
    <div className="kv-list">
      <PathRow label="Engine directory" value={layout.engine_dir} />
      <PathRow label="Binary" value={layout.expected_binary_path} />
      <PathRow label="Models folder" value={layout.expected_models_dir} />
      <PathRow label="version.json" value={layout.expected_version_json} />
      <PathRow label="Safe input" value={layout.expected_test_input_path} />
      <PathRow label="Safe output" value={layout.expected_test_output_path} />
    </div>
  );
}

function EngineDiscoveryDetails({
  discovery
}: {
  discovery: EngineDiscoveryStatus;
}) {
  return (
    <div className="kv-list">
      <PathRow label="Engine directory" value={discovery.engine_dir} />
      <PathRow
        label="Binary path"
        value={discovery.binary?.path ?? "Not loaded"}
      />
      <PathRow label="Models directory" value={discovery.models.models_dir} />
      <div className="kv-row">
        <span>Help command</span>
        <span>{discovery.can_run_basic_command ? "Available" : "Not available"}</span>
      </div>
      <div className="kv-row">
        <span>version.json</span>
        <span>{discovery.version_json_exists ? "Found" : "Missing"}</span>
      </div>
      {discovery.detected_version_text ? (
        <pre className="preview-box">{discovery.detected_version_text}</pre>
      ) : null}
    </div>
  );
}

function SafeTestDetails({ testResult }: { testResult: EngineTestRunResult }) {
  return (
    <div className="processing-result">
      <div className="kv-list">
        <PathRow label="Command preview" value={testResult.command_preview} />
        <div className="kv-row">
          <span>Attempted</span>
          <span>{testResult.attempted ? "Yes" : "No"}</span>
        </div>
        <div className="kv-row">
          <span>Exit code</span>
          <span>{testResult.exit_code ?? "Not available"}</span>
        </div>
        <PathRow
          label="Output file"
          value={testResult.output_file ?? "Not created"}
        />
      </div>
      {testResult.stdout_preview ? (
        <pre className="preview-box">{testResult.stdout_preview}</pre>
      ) : null}
      {testResult.stderr_preview ? (
        <pre className="preview-box">{testResult.stderr_preview}</pre>
      ) : null}
    </div>
  );
}

function SummaryItem({
  label,
  value
}: {
  label: string;
  value: number | string;
}) {
  return (
    <div className="summary-item">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="meta-item">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function PathRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="kv-row">
      <span>{label}</span>
      <span className="path-value">{value}</span>
    </div>
  );
}

function badgeVariantForImportStatus(status: ImageImportItemResult["status"]) {
  if (status === "queued") {
    return "success";
  }

  if (status === "error") {
    return "warning";
  }

  return "info";
}

function badgeVariantForQueueStatus(status: UpscaleQueueItem["status"]) {
  if (status === "queued" || status === "completed") {
    return "success";
  }

  if (status === "processing") {
    return "info";
  }

  if (status === "failed") {
    return "warning";
  }

  return "neutral";
}

function canProcessQueueItem(item: UpscaleQueueItem) {
  return item.status === "queued" || item.status === "failed";
}

function queueStatusLabel(status: UpscaleQueueItem["status"]) {
  switch (status) {
    case "queued":
      return "Ready";
    case "processing":
      return "Processing";
    case "completed":
      return "Done";
    case "failed":
      return "Needs Attention";
    case "removed":
      return "Removed";
    default:
      return status;
  }
}

function queueItemWorkerMessage(
  item: UpscaleQueueItem,
  health: UpscaleQueueAssetHealthItem | undefined
) {
  if (
    item.status === "failed" &&
    (health?.health === "missing_raw" ||
      health?.health === "invalid_path" ||
      item.processing_error === missingRawMessage)
  ) {
    return "Raw file missing. Re-import original image or remove this row.";
  }

  if (
    item.status === "failed" &&
    item.processing_error &&
    /engine|real-esrgan|model/i.test(item.processing_error)
  ) {
    return "Engine issue. Discover engine, then retry.";
  }

  if (item.status === "failed") {
    return item.processing_error ?? "Image needs attention.";
  }

  if (item.status === "queued") {
    return health?.health === "missing_raw"
      ? "Raw file missing. Re-import original image or remove this row."
      : "Ready to process.";
  }

  if (item.status === "processing") {
    return "Processing now.";
  }

  if (item.status === "completed") {
    return "Done.";
  }

  return null;
}

function buildProcessingPlanInput(
  targetOption: OutputTargetOption,
  customLongEdge: number,
  qualityMode: UpscaleProcessingQualityMode,
  tileSize: UpscaleProcessingTileSize,
  outputFormat: UpscaleProcessingPlanInput["output_format"],
  preset: ProcessingPreset
): UpscaleProcessingPlanInput {
  if (targetOption === "target_8k") {
    return {
      mode: "target_8k",
      scale: null,
      target_long_edge_px: null,
      quality_mode: qualityMode,
      output_format: outputFormat,
      tile_size: tileSize,
      preset_id: preset.id,
      preset_label: preset.name
    };
  }

  if (targetOption === "custom_long_edge") {
    return {
      mode: "target_long_edge",
      scale: null,
      target_long_edge_px: customLongEdge,
      quality_mode: qualityMode,
      output_format: outputFormat,
      tile_size: tileSize,
      preset_id: preset.id,
      preset_label: preset.name
    };
  }

  return {
    mode: "scale",
    scale: scaleForTargetOption(targetOption),
    target_long_edge_px: null,
    quality_mode: qualityMode,
    output_format: outputFormat,
    tile_size: tileSize,
    preset_id: preset.id,
    preset_label: preset.name
  };
}

function scaleForTargetOption(
  targetOption: OutputTargetOption
): UpscaleProcessingPlanInput["scale"] {
  switch (targetOption) {
    case "scale_2":
      return 2;
    case "scale_4":
      return 4;
    case "scale_8":
      return 8;
    case "scale_10":
      return 10;
    default:
      return null;
  }
}

function parseTileSize(value: string): UpscaleProcessingTileSize {
  if (value === "auto") {
    return "auto";
  }
  const numericValue = Number(value);
  return numericValue === 64 ||
    numericValue === 128 ||
    numericValue === 256 ||
    numericValue === 512
    ? numericValue
    : "auto";
}

function matchesLargeTarget(targetOption: OutputTargetOption) {
  return (
    targetOption === "scale_8" ||
    targetOption === "scale_10" ||
    targetOption === "target_8k" ||
    targetOption === "custom_long_edge"
  );
}

function factoryStatusLabel(
  discovery: EngineDiscoveryStatus | null,
  activeJob: UpscaleProcessingJobStatus | null,
  processingStatus: UpscaleProcessingStatus | null
) {
  if (activeJob && isActiveJobRunning(activeJob)) {
    return "Processing";
  }

  if (activeJob?.output_relative_path || (processingStatus?.completed ?? 0) > 0) {
    return "Output Ready";
  }

  return discovery?.ok ? "Engine Ready" : "Engine Missing";
}

function factoryBadgeVariant(status: string): "success" | "info" | "warning" {
  if (status === "Engine Ready" || status === "Output Ready") {
    return "success";
  }

  if (status === "Processing") {
    return "info";
  }

  return "warning";
}

function progressTextForJob(job: UpscaleProcessingJobStatus | null) {
  if (!job) {
    return "No processing running";
  }

  if (job.status === "completed") {
    return "Completed";
  }

  if (job.status === "failed") {
    return job.stage === "cancelled" ? "Cancelled" : "Failed";
  }

  if (job.stage === "real_esrgan") {
    return job.progress_label || "Real-ESRGAN pass 1 of 1";
  }

  if (job.stage === "final_resize") {
    return "Final resize";
  }

  if (job.status === "cancel_requested") {
    return "Stopping processing safely";
  }

  return "Processing image locally";
}

function progressPercentForJob(job: UpscaleProcessingJobStatus | null) {
  if (!job) {
    return 0;
  }

  if (job.status === "completed") {
    return 100;
  }

  if (job.status === "failed") {
    return job.stage === "cancelled" ? 38 : 100;
  }

  if (job.status === "cancel_requested") {
    return 42;
  }

  if (job.stage === "final_resize") {
    return 82;
  }

  if (job.stage === "real_esrgan") {
    return 58;
  }

  return 22;
}

function dimensionsLabel(width: number | undefined, height: number | undefined) {
  if (!width || !height) {
    return "Not available";
  }

  return `${width} x ${height}`;
}

function estimatedSizeLabel(targetOption: OutputTargetOption) {
  if (targetOption === "scale_2") {
    return "small / medium";
  }

  if (targetOption === "scale_4") {
    return "medium / heavy";
  }

  return "heavy / very heavy";
}

function estimatedPassCountForControls(
  targetOption: OutputTargetOption,
  qualityMode: UpscaleProcessingQualityMode
) {
  if (
    qualityMode === "ultra" &&
    (targetOption === "scale_8" || targetOption === "scale_10")
  ) {
    return 2;
  }

  return 1;
}

function isLongRunningFourXJob(job: UpscaleProcessingJobStatus) {
  if (!isActiveJobRunning(job) || !job.started_at || !job.target_label.startsWith("4x")) {
    return false;
  }

  const started = Date.parse(job.started_at);
  if (!Number.isFinite(started)) {
    return false;
  }

  return Date.now() - started > 5 * 60 * 1000;
}

function isActiveJobRunning(job: UpscaleProcessingJobStatus) {
  return (
    job.status === "pending" ||
    job.status === "running" ||
    job.status === "cancel_requested"
  );
}

function imageNameForJob(
  job: UpscaleProcessingJobStatus,
  items: UpscaleQueueItem[]
) {
  return (
    items.find((item) => item.id === job.queue_item_id)?.original_name ??
    job.queue_item_id
  );
}

function qualityModeLabel(value: string) {
  switch (value) {
    case "safe":
      return "Safe laptop mode";
    case "balanced":
      return "Balanced";
    case "ultra":
      return "Ultra quality";
    default:
      return value;
  }
}

function elapsedJobTime(job: UpscaleProcessingJobStatus) {
  if (!job.started_at) {
    return "Not started";
  }
  const end = job.completed_at ? Date.parse(job.completed_at) : Date.now();
  const started = Date.parse(job.started_at);
  if (!Number.isFinite(started) || !Number.isFinite(end) || end < started) {
    return "Not available";
  }
  const seconds = Math.floor((end - started) / 1000);
  if (seconds < 60) {
    return `${seconds}s`;
  }
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return `${minutes}m ${remainder}s`;
}

function buildImportNotice(
  result: ImageImportResult,
  queue: UpscaleQueueResponse
) {
  return `Last import selected ${result.summary.selected} file(s). ${result.summary.queued} queued. Current queue has ${queue.items.length} active item(s).`;
}

function importNoticeVariant(result: ImageImportResult) {
  return result.summary.errors > 0 || result.summary.duplicates > 0
    ? "warning"
    : "success";
}

function formatSize(sizeBytes: number | null) {
  if (sizeBytes === null) {
    return "Unknown";
  }

  return `${(sizeBytes / (1024 * 1024)).toFixed(2)} MB`;
}
