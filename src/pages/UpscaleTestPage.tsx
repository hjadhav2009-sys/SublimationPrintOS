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
import { Card } from "../components/ui/Card";
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

  useEffect(() => {
    void refreshQueue();
    void refreshActiveJob();
  }, []);

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
      "Use this only if the app was closed, frozen, or the job is no longer actually running. This will unlock processing."
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
  const activeItems = queueResponse?.items ?? [];
  const jobIsActive = Boolean(activeJob && isActiveJobRunning(activeJob));

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Workspace</p>
          <h2>Upscale Factory</h2>
        </div>
        <Badge variant="success">Worker queue</Badge>
      </div>

      {(assetHealth?.missing_raw ?? 0) > 0 ? (
        <div className="notice notice-warning">
          Some queued files are missing from AppData. Click Mark Missing Raw as
          Failed or Start Fresh Queue.
        </div>
      ) : null}

      {queueError ? (
        <div className="notice notice-warning">{queueError}</div>
      ) : null}
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

      <Card
        title="1. Import Images"
        status={<Badge variant="info">AppData copy</Badge>}
      >
        <div className="settings-actions">
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
        </div>
        <p>Last import only shows the latest action. Current queue is below.</p>
        {importResult ? <ImportResultDetails result={importResult} /> : null}
      </Card>

      <Card
        title="2. Engine Status"
        status={
          <Badge variant={discovery?.ok ? "success" : "warning"}>
            {discovery?.ok ? "Engine Ready" : "Engine Missing"}
          </Badge>
        }
      >
        <div className="summary-grid">
          <SummaryItem
            label="Engine"
            value={discovery?.ok ? "Ready" : "Missing"}
          />
          <SummaryItem
            label="Binary"
            value={discovery?.binary?.exists ? "Found" : "Missing"}
          />
          <SummaryItem
            label="Model Files"
            value={discovery?.models.model_files_count ?? 0}
          />
        </div>
        <div className="settings-actions">
          <Button
            disabled={isEngineBusy}
            onClick={() => void handleDiscover()}
            variant="primary"
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
        </div>
        {engineErrorMessage ? (
          <div className="notice notice-warning">{engineErrorMessage}</div>
        ) : null}
        {engineMessage ? (
          <div className="notice notice-success">{engineMessage}</div>
        ) : null}
      </Card>

      <Card
        title="3. Queue Health"
        status={
          <Badge variant={assetHealth?.ok ? "success" : "warning"}>
            {assetHealth?.ok ? "Files Healthy" : "Needs Check"}
          </Badge>
        }
      >
        <div className="summary-grid">
          <SummaryItem label="Healthy" value={assetHealth?.healthy ?? 0} />
          <SummaryItem label="Missing Raw" value={assetHealth?.missing_raw ?? 0} />
          <SummaryItem
            label="Invalid Path"
            value={assetHealth?.invalid_path ?? 0}
          />
        </div>
        <div className="settings-actions">
          <Button
            disabled={isHealthBusy}
            onClick={() => void handleCheckQueueFiles()}
            variant="primary"
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
        </div>
        {hasQueueHealthIssue ? (
          <div className="notice notice-warning">
            Some queue rows point to raw files that are missing from AppData.
            This can happen if AppData folders were manually deleted. Re-import
            those images or remove the broken rows.
          </div>
        ) : null}
        {healthError ? (
          <div className="notice notice-warning">{healthError}</div>
        ) : null}
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
      </Card>

      <Card
        title="4. Process Images"
        status={
          <Badge variant={processingStatus?.processing ? "warning" : "info"}>
            {processingStatus?.processing
              ? `${processingStatus.processing} Processing`
              : "Ready"}
          </Badge>
        }
      >
        <p>Completed images are saved in AppData/assets/upscaled/YYYYMMDD.</p>
        <div className="settings-actions worker-primary-actions">
          <Button
            disabled={isQueueBusy || jobIsActive || !queueResponse?.summary.total}
            onClick={() => void handleStartFreshQueue()}
            variant="ghost"
          >
            Start Fresh Queue
          </Button>
          <Button
            disabled={isProcessingBusy}
            onClick={() => void handleOpenUpscaledFolder()}
            variant="secondary"
          >
            Open Upscaled Folder
          </Button>
        </div>
        <div className="summary-grid">
          <SummaryItem label="Ready" value={processingStatus?.queued ?? 0} />
          <SummaryItem
            label="Processing"
            value={processingStatus?.processing ?? 0}
          />
          <SummaryItem label="Done" value={processingStatus?.completed ?? 0} />
          <SummaryItem
            label="Needs Attention"
            value={processingStatus?.failed ?? 0}
          />
        </div>
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
        {jobBanner && activeJob && isActiveJobRunning(activeJob) ? (
          <div className="notice notice-success">{jobBanner}</div>
        ) : null}
        {activeJob ? (
          <ActiveJobCard
            job={activeJob}
            imageName={imageNameForJob(activeJob, activeItems)}
            onOpenUpscaledFolder={handleOpenUpscaledFolder}
            onRepairInterruptedJob={handleRepairInterruptedJob}
          />
        ) : null}
        <div className="settings-actions secondary-actions">
          <Button
            disabled={isProcessingBusy || jobIsActive || !processingStatus?.processing}
            onClick={() => void handleRepairStaleProcessing()}
            variant="ghost"
          >
            Repair Stale Processing
          </Button>
        </div>

        {activeItems.length > 0 ? (
          <div className="queue-card-list">
            {activeItems.map((item) => (
              <QueueItemCard
                disabled={isQueueBusy || isProcessingBusy}
                health={queueHealthById.get(item.id)}
                item={item}
                key={item.id}
                onStartProcessing={handleStartProcessingJob}
                onRemove={handleRemoveQueueItem}
                processingLocked={jobIsActive}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">No ready images in queue.</div>
        )}
      </Card>

      <Card
        title="Engine Setup Details"
        status={<Badge variant="neutral">Secondary</Badge>}
      >
        <details className="secondary-details">
          <summary>Expected layout and safe test</summary>
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
      </Card>

      <div className="kv-list">
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

type OutputTargetOption =
  | "scale_2"
  | "scale_4"
  | "scale_8"
  | "scale_10"
  | "target_8k"
  | "custom_long_edge";

function ActiveJobCard({
  imageName,
  job,
  onOpenUpscaledFolder,
  onRepairInterruptedJob
}: {
  imageName: string;
  job: UpscaleProcessingJobStatus;
  onOpenUpscaledFolder: () => Promise<void>;
  onRepairInterruptedJob: () => Promise<void>;
}) {
  const canRepair = isActiveJobRunning(job);

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
        <MetaItem label="Target" value={job.target_label} />
        <MetaItem label="Quality" value={qualityModeLabel(job.quality_mode)} />
        <MetaItem label="Tile Size" value={job.tile_size} />
        <MetaItem label="Stage" value={job.stage || "pending"} />
        <MetaItem label="Elapsed" value={elapsedJobTime(job)} />
        <MetaItem
          label="Output"
          value={job.output_relative_path ?? "Not created yet"}
        />
      </div>
      {canRepair ? (
        <div className="notice notice-warning">
          Large jobs may take time. If Windows was closed or the app was
          restarted while this job was running, use Mark Interrupted Job as
          Failed.
        </div>
      ) : null}
      {job.error ? <div className="notice notice-warning">{job.error}</div> : null}
      {job.output_relative_path ? (
        <div className="notice notice-success">
          Output saved: {job.output_relative_path}
        </div>
      ) : null}
      <div className="queue-card-actions">
        <Button onClick={() => void onOpenUpscaledFolder()} variant="secondary">
          Open Upscaled Folder
        </Button>
        {canRepair ? (
          <Button
            onClick={() => void onRepairInterruptedJob()}
            variant="ghost"
          >
            Mark Interrupted Job as Failed
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
  onStartProcessing,
  processingLocked
}: {
  disabled: boolean;
  health: UpscaleQueueAssetHealthItem | undefined;
  item: UpscaleQueueItem;
  onStartProcessing: (
    queueItemId: string,
    plan: UpscaleProcessingPlanInput
  ) => Promise<void>;
  onRemove: (queueItemId: string) => Promise<void>;
  processingLocked: boolean;
}) {
  const [targetOption, setTargetOption] =
    useState<OutputTargetOption>("scale_2");
  const [customLongEdge, setCustomLongEdge] = useState(7680);
  const [qualityMode, setQualityMode] =
    useState<UpscaleProcessingQualityMode>("safe");
  const [tileSize, setTileSize] =
    useState<UpscaleProcessingTileSize>("auto");
  const [jobOutputFormat, setJobOutputFormat] =
    useState<UpscaleProcessingPlanInput["output_format"]>("png");
  const canProcess = canProcessQueueItem(item);
  const canRemove = item.status === "queued" || item.status === "failed";
  const workerMessage = queueItemWorkerMessage(item, health);
  const plan = buildProcessingPlanInput(
    targetOption,
    customLongEdge,
    qualityMode,
    tileSize,
    jobOutputFormat
  );
  const isLargeTarget = matchesLargeTarget(targetOption);
  const controlsDisabled = disabled || processingLocked;

  return (
    <article className="queue-item-card">
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
          label="Output"
          value={item.output_relative_path ?? "Not created"}
        />
      </div>

      <div className="queue-card-controls large-output-controls">
        <label className="settings-field">
          <span>Output Target</span>
          <select
            disabled={controlsDisabled || !canProcess}
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
              disabled={controlsDisabled || !canProcess}
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
            disabled={controlsDisabled || !canProcess}
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
            disabled={controlsDisabled || !canProcess}
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
            disabled={controlsDisabled || !canProcess}
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
      </div>
      <p className="field-note">
        Safe laptop mode may take longer but prevents crashes on low-spec
        systems.
      </p>
      {isLargeTarget ? (
        <div className="notice notice-warning">
          Large output may take several minutes. The app will keep running the
          job in the background.
        </div>
      ) : null}
      {isLargeTarget && qualityMode === "ultra" ? (
        <div className="notice notice-warning">
          Ultra quality uses extra Real-ESRGAN passes and can be slow.
        </div>
      ) : null}
      {plan.output_format === "webp" && plan.mode !== "scale" ? (
        <div className="notice notice-warning">
          Exact 8K/custom final resize works with PNG or JPG in Phase 1.
        </div>
      ) : null}

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
          disabled={controlsDisabled || !canProcess}
          onClick={() => void onStartProcessing(item.id, plan)}
          variant="primary"
        >
          Start Processing
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
  outputFormat: UpscaleProcessingPlanInput["output_format"]
): UpscaleProcessingPlanInput {
  if (targetOption === "target_8k") {
    return {
      mode: "target_8k",
      scale: null,
      target_long_edge_px: null,
      quality_mode: qualityMode,
      output_format: outputFormat,
      tile_size: tileSize
    };
  }

  if (targetOption === "custom_long_edge") {
    return {
      mode: "target_long_edge",
      scale: null,
      target_long_edge_px: customLongEdge,
      quality_mode: qualityMode,
      output_format: outputFormat,
      tile_size: tileSize
    };
  }

  return {
    mode: "scale",
    scale: scaleForTargetOption(targetOption),
    target_long_edge_px: null,
    quality_mode: qualityMode,
    output_format: outputFormat,
    tile_size: tileSize
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
