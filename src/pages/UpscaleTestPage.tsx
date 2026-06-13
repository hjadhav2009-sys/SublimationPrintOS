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
  getUpscaleProcessingStatus,
  getUpscaleQueueAssetHealth,
  processAllQueuedUpscaleItems,
  processNextUpscaleQueueItem,
  processUpscaleQueueItem,
  repairMissingRawQueueItems,
  repairStaleProcessingItems,
  retryFailedUpscaleQueueItem
} from "../app/upscaleProcessingApi";
import {
  clearUpscaleQueue,
  getUpscaleIntakeSummary,
  getUpscaleQueue,
  importImagesFromFolderDialog,
  importImagesWithDialog,
  removeUpscaleQueueItem,
  updateUpscaleQueueItemSettings
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
  UpscaleProcessBatchResult,
  UpscaleProcessItemResult,
  UpscaleProcessingStatus,
  UpscaleQueueAssetHealth,
  UpscaleQueueAssetHealthItem,
  UpscaleQueueItem,
  UpscaleQueueResponse
} from "../types/app";

const missingRawMessage =
  "Raw image copy is missing from AppData. Re-import the original image or remove this queue item.";
const scaleOptions: Array<UpscaleQueueItem["desired_scale_factor"]> = [2, 4, 8];
const outputFormatOptions: Array<UpscaleQueueItem["desired_output_format"]> = [
  "png",
  "jpg",
  "tiff",
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
  const [lastProcessResult, setLastProcessResult] =
    useState<UpscaleProcessItemResult | null>(null);
  const [lastBatchResult, setLastBatchResult] =
    useState<UpscaleProcessBatchResult | null>(null);
  const [isProcessingBusy, setIsProcessingBusy] = useState(false);
  const [processingMessage, setProcessingMessage] = useState<string | null>(
    null
  );
  const [processingMessageVariant, setProcessingMessageVariant] = useState<
    "success" | "warning"
  >("success");
  const [processingError, setProcessingError] = useState<string | null>(null);

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
  }, []);

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

  const handleQueueItemSettingsChange = async (
    item: UpscaleQueueItem,
    desiredScaleFactor: UpscaleQueueItem["desired_scale_factor"],
    desiredOutputFormat: UpscaleQueueItem["desired_output_format"]
  ) => {
    setIsQueueBusy(true);
    setQueueMessage(null);
    setQueueError(null);

    try {
      const updated = await updateUpscaleQueueItemSettings(
        item.id,
        desiredScaleFactor,
        desiredOutputFormat
      );
      setQueueResponse((current) =>
        current
          ? {
              ...current,
              items: current.items.map((queueItem) =>
                queueItem.id === updated.id ? updated : queueItem
              )
            }
          : current
      );
      setQueueMessageVariant("success");
      setQueueMessage("Queue item settings updated");
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

  const handleProcessFirstReady = async () => {
    await runBatchProcessing(() => processNextUpscaleQueueItem());
  };

  const handleProcessAllReady = async () => {
    const confirmed = window.confirm(
      "Process up to 20 ready images now? This may take time."
    );
    if (!confirmed) {
      return;
    }

    await runBatchProcessing(() => processAllQueuedUpscaleItems(20));
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

  const handleProcessQueueItem = async (queueItemId: string) => {
    await runItemProcessing(() => processUpscaleQueueItem(queueItemId));
  };

  const handleRetryFailedItem = async (queueItemId: string) => {
    await runItemProcessing(() => retryFailedUpscaleQueueItem(queueItemId));
  };

  const runItemProcessing = async (
    action: () => Promise<UpscaleProcessItemResult>
  ) => {
    setIsProcessingBusy(true);
    setProcessingMessage(null);
    setProcessingError(null);
    setLastBatchResult(null);

    try {
      const result = await action();
      setLastProcessResult(result);
      setProcessingMessageVariant(result.ok ? "success" : "warning");
      setProcessingMessage(result.message);
      await refreshQueue();
    } catch (error: unknown) {
      setProcessingError(commandErrorMessage(error));
    } finally {
      setIsProcessingBusy(false);
    }
  };

  const runBatchProcessing = async (
    action: () => Promise<UpscaleProcessBatchResult>
  ) => {
    setIsProcessingBusy(true);
    setProcessingMessage(null);
    setProcessingError(null);
    setLastProcessResult(null);

    try {
      const result = await action();
      setLastBatchResult(result);
      setProcessingMessageVariant(result.ok ? "success" : "warning");
      setProcessingMessage(buildBatchNotice(result));
      await refreshQueue();
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
            disabled={isQueueBusy}
            onClick={() => void handleImportImages()}
            variant="primary"
          >
            Import Images
          </Button>
          <Button
            disabled={isQueueBusy}
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
            disabled={isHealthBusy || !hasQueueHealthIssue}
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
        <div className="settings-actions worker-primary-actions">
          <Button
            disabled={isProcessingBusy || !processingStatus?.queued}
            onClick={() => void handleProcessFirstReady()}
            variant="primary"
          >
            Process First Ready Image
          </Button>
          <Button
            disabled={isProcessingBusy || !processingStatus?.queued}
            onClick={() => void handleProcessAllReady()}
            variant="secondary"
          >
            Process All Ready Images
          </Button>
          <Button
            disabled={isQueueBusy || !queueResponse?.summary.total}
            onClick={() => void handleStartFreshQueue()}
            variant="ghost"
          >
            Start Fresh Queue
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
        {lastBatchResult ? <BatchResultSummary result={lastBatchResult} /> : null}
        {lastProcessResult ? (
          <ProcessResultSummary result={lastProcessResult} />
        ) : null}
        <div className="settings-actions secondary-actions">
          <Button
            disabled={isProcessingBusy || !processingStatus?.processing}
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
                onProcess={handleProcessQueueItem}
                onRemove={handleRemoveQueueItem}
                onRetry={handleRetryFailedItem}
                onUpdate={handleQueueItemSettingsChange}
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

function QueueItemCard({
  disabled,
  health,
  item,
  onProcess,
  onRemove,
  onRetry,
  onUpdate
}: {
  disabled: boolean;
  health: UpscaleQueueAssetHealthItem | undefined;
  item: UpscaleQueueItem;
  onProcess: (queueItemId: string) => Promise<void>;
  onRemove: (queueItemId: string) => Promise<void>;
  onRetry: (queueItemId: string) => Promise<void>;
  onUpdate: (
    item: UpscaleQueueItem,
    desiredScaleFactor: UpscaleQueueItem["desired_scale_factor"],
    desiredOutputFormat: UpscaleQueueItem["desired_output_format"]
  ) => Promise<void>;
}) {
  const canProcess = canProcessQueueItem(item);
  const canRemove = item.status === "queued" || item.status === "failed";
  const workerMessage = queueItemWorkerMessage(item, health);

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

      <div className="queue-card-controls">
        <label className="settings-field">
          <span>Scale</span>
          <select
            disabled={disabled || item.status !== "queued"}
            value={item.desired_scale_factor}
            onChange={(event) =>
              void onUpdate(
                item,
                Number(event.currentTarget.value) as UpscaleQueueItem["desired_scale_factor"],
                item.desired_output_format
              )
            }
          >
            {scaleOptions.map((scale) => (
              <option key={scale} value={scale}>
                {scale}x
              </option>
            ))}
          </select>
        </label>
        <label className="settings-field">
          <span>Format</span>
          <select
            disabled={disabled || item.status !== "queued"}
            value={item.desired_output_format}
            onChange={(event) =>
              void onUpdate(
                item,
                item.desired_scale_factor,
                event.currentTarget.value as UpscaleQueueItem["desired_output_format"]
              )
            }
          >
            {outputFormatOptions.map((format) => (
              <option key={format} value={format}>
                {format.toUpperCase()}
              </option>
            ))}
          </select>
        </label>
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
          disabled={disabled || !canProcess}
          onClick={() => void onProcess(item.id)}
          variant="primary"
        >
          Process This Image
        </Button>
        {item.status === "failed" ? (
          <Button
            disabled={disabled}
            onClick={() => void onRetry(item.id)}
            variant="secondary"
          >
            Retry
          </Button>
        ) : null}
        <Button
          disabled={disabled || !canRemove}
          onClick={() => void onRemove(item.id)}
          variant="ghost"
        >
          Remove
        </Button>
      </div>
    </article>
  );
}

function BatchResultSummary({ result }: { result: UpscaleProcessBatchResult }) {
  return (
    <div className="processing-result">
      <div className="summary-grid">
        <SummaryItem label="Attempted" value={result.attempted} />
        <SummaryItem label="Completed" value={result.completed} />
        <SummaryItem label="Failed" value={result.failed} />
      </div>
      {result.results.length > 0 ? (
        <div className="compact-list">
          {result.results.map((item) => (
            <div className="compact-list-row" key={item.queue_item_id}>
              <span>{item.queue_item_id}</span>
              <Badge variant={item.ok ? "success" : "warning"}>
                {queueStatusLabel(item.status)}
              </Badge>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function ProcessResultSummary({ result }: { result: UpscaleProcessItemResult }) {
  return (
    <div className="processing-result">
      <div className="kv-list">
        <div className="kv-row">
          <span>Status</span>
          <span>{queueStatusLabel(result.status)}</span>
        </div>
        <PathRow
          label="Output"
          value={result.output_relative_path ?? "Not created"}
        />
        <div className="kv-row">
          <span>Duration</span>
          <span>{formatDuration(result.duration_ms)}</span>
        </div>
      </div>
      {result.error ? (
        <div className="notice notice-warning">{result.error}</div>
      ) : null}
      {result.stdout_preview ? (
        <pre className="preview-box">{result.stdout_preview}</pre>
      ) : null}
      {result.stderr_preview ? (
        <pre className="preview-box">{result.stderr_preview}</pre>
      ) : null}
    </div>
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

function buildImportNotice(
  result: ImageImportResult,
  queue: UpscaleQueueResponse
) {
  return `Last import selected ${result.summary.selected} file(s). ${result.summary.queued} queued. Current queue has ${queue.items.length} active item(s).`;
}

function buildBatchNotice(result: UpscaleProcessBatchResult) {
  const summary = `Batch summary: ${result.attempted} attempted, ${result.completed} completed, ${result.failed} failed.`;

  if (
    result.message === "No ready images in queue." ||
    result.message === "Engine is not ready. Queue items were not changed." ||
    result.message.startsWith("Processed ") ||
    result.message.startsWith("Batch summary:")
  ) {
    return result.message;
  }

  return `${result.message} ${summary}`;
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

function formatDuration(durationMs: number | null) {
  if (durationMs === null) {
    return "Not available";
  }

  if (durationMs < 1000) {
    return `${durationMs} ms`;
  }

  return `${(durationMs / 1000).toFixed(1)} s`;
}
