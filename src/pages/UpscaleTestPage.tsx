import { useEffect, useState } from "react";
import {
  clearRealEsrganTestOutput,
  discoverRealEsrganEngine,
  getRealEsrganExpectedLayout,
  runRealEsrganSafeTest
} from "../app/engineApi";
import { commandErrorMessage } from "../app/foundationApi";
import { openManagedFolder } from "../app/shellApi";
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
  UpscaleQueueItem,
  UpscaleQueueResponse
} from "../types/app";

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

  const [discovery, setDiscovery] = useState<EngineDiscoveryStatus | null>(null);
  const [layout, setLayout] = useState<EngineExpectedLayout | null>(null);
  const [testResult, setTestResult] = useState<EngineTestRunResult | null>(null);
  const [isEngineBusy, setIsEngineBusy] = useState(false);
  const [engineMessage, setEngineMessage] = useState<string | null>(null);
  const [engineErrorMessage, setEngineErrorMessage] = useState<string | null>(
    null
  );

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
      const [queue, summary] = await Promise.all([
        getUpscaleQueue(false),
        getUpscaleIntakeSummary()
      ]);
      setQueueResponse(queue);
      setIntakeSummary(summary);
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

  const handleClearQueue = async () => {
    const confirmed = window.confirm(
      "Clear the upscale queue? Raw files will remain in AppData."
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
      await refreshQueue("Upscale queue cleared. Raw files remain in AppData.");
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
      await refreshQueue("Queue item removed. Raw image was not deleted.");
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
      setQueueMessage("Queue item settings updated");
    } catch (error: unknown) {
      setQueueError(commandErrorMessage(error));
    } finally {
      setIsQueueBusy(false);
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

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Workspace</p>
          <h2>Upscale Factory</h2>
          <p>
            Import local images into a safe queue. AI processing comes in the
            next step.
          </p>
        </div>
        <Badge variant="success">Intake ready</Badge>
      </div>

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
        title="Image Intake"
        status={<Badge variant="info">Phase 1 foundation</Badge>}
      >
        <p>
          Native dialogs copy supported local images into AppData and register
          queue rows. No source files are changed and no AI processing runs.
        </p>
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
          <Button
            disabled={isQueueBusy}
            onClick={() => void refreshQueue()}
            variant="secondary"
          >
            Refresh Queue
          </Button>
          <Button
            disabled={isQueueBusy || !queueResponse?.summary.total}
            onClick={() => void handleClearQueue()}
            variant="ghost"
          >
            Clear Queue
          </Button>
        </div>
      </Card>

      {importResult ? <ImportResultCard result={importResult} /> : null}

      <Card
        className="queue-summary-card"
        title="Current Queue Summary"
        status={
          <Badge variant={queueResponse?.summary.queued ? "success" : "info"}>
            {queueResponse?.summary.queued
              ? `${queueResponse.summary.queued} queued`
              : "No queued images"}
          </Badge>
        }
      >
        <p>
          This is the total current queue. It does not reset when you import
          another file.
        </p>
        <div className="summary-grid">
          <SummaryItem label="Queued" value={queueResponse?.summary.queued ?? 0} />
          <SummaryItem label="Removed" value={queueResponse?.summary.removed ?? 0} />
          <SummaryItem label="Errors" value={queueResponse?.summary.error ?? 0} />
          <SummaryItem label="Total" value={queueResponse?.summary.total ?? 0} />
        </div>
        <div className="kv-list">
          <div className="kv-row">
            <span>Raw asset folder</span>
            <span className="path-value">
              {intakeSummary?.raw_asset_dir ?? "Not loaded yet"}
            </span>
          </div>
        </div>
      </Card>

      <Card
        title="Current Upscale Queue"
        status={<Badge variant="warning">Processing not implemented</Badge>}
      >
        <p>
          These are the current active queue rows. Last Import Result above only
          describes the most recent import action.
        </p>
        {queueResponse && queueResponse.items.length > 0 ? (
          <>
            <p className="queue-count-label">
              Showing {queueResponse.items.length} active queued item(s).
            </p>
            <div className="queue-table">
              <div className="queue-row queue-row-header">
                <span>Image</span>
                <span>Status</span>
                <span>Size</span>
                <span>Scale</span>
                <span>Format</span>
                <span>Source</span>
                <span>Created</span>
                <span>Action</span>
              </div>
              {queueResponse.items.map((item) => (
                <QueueRow
                  disabled={isQueueBusy}
                  item={item}
                  key={item.id}
                  onRemove={handleRemoveQueueItem}
                  onUpdate={handleQueueItemSettingsChange}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="empty-state">
            No active queued images. Imported raw files may still exist in
            AppData if they were imported earlier.
          </div>
        )}
      </Card>

      <div className="page-heading compact-heading">
        <div>
          <p className="eyebrow">Engine Setup</p>
          <h2>Real-ESRGAN Foundation</h2>
          <p>
            Engine discovery is ready. Batch AI processing will come in a later
            prompt.
          </p>
        </div>
        <Badge variant={discovery?.ok ? "success" : "warning"}>
          {discovery?.ok ? "Engine ready" : "Discovery needed"}
        </Badge>
      </div>

      {engineErrorMessage ? (
        <div className="notice notice-warning">{engineErrorMessage}</div>
      ) : null}
      {engineMessage ? (
        <div className="notice notice-success">{engineMessage}</div>
      ) : null}

      <Card title="Engine controls" status={<Badge variant="info">Phase 0</Badge>}>
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
            onClick={() => void handleOpenEngineFolder()}
            variant="secondary"
          >
            Open Engine Folder
          </Button>
          <Button
            disabled={isEngineBusy}
            onClick={() => void handleClearOutput()}
            variant="ghost"
          >
            Clear Test Output
          </Button>
        </div>
      </Card>

      {layout ? (
        <Card
          eyebrow="Backend-managed paths"
          title="Expected Layout"
          status={<Badge variant="neutral">No downloads</Badge>}
        >
          <div className="kv-list">
            <PathRow label="Engine directory" value={layout.engine_dir} />
            <PathRow label="Binary" value={layout.expected_binary_path} />
            <PathRow label="Models folder" value={layout.expected_models_dir} />
            <PathRow label="version.json" value={layout.expected_version_json} />
            <PathRow label="Safe input" value={layout.expected_test_input_path} />
            <PathRow label="Safe output" value={layout.expected_test_output_path} />
          </div>
          <div className="check-list">
            {layout.instructions.map((instruction) => (
              <div className="check-row" key={instruction}>
                <strong>{instruction}</strong>
                <Badge variant="info">Instruction</Badge>
              </div>
            ))}
          </div>
        </Card>
      ) : null}

      <Card
        eyebrow="Discovery status"
        title="Local Engine"
        status={
          <Badge variant={discovery?.ok ? "success" : "warning"}>
            {discovery?.message ?? "Not checked yet"}
          </Badge>
        }
      >
        <div className="summary-grid">
          <SummaryItem
            label="Binary"
            value={discovery?.binary?.exists ? "Found" : "Missing"}
          />
          <SummaryItem
            label="Models folder"
            value={discovery?.models.models_dir_exists ? "Found" : "Missing"}
          />
          <SummaryItem
            label="Model files"
            value={discovery?.models.model_files_count ?? 0}
          />
          <SummaryItem
            label="Help command"
            value={
              discovery?.can_run_basic_command ? "Available" : "Not available"
            }
          />
        </div>
        <div className="kv-list">
          <PathRow
            label="Engine directory"
            value={discovery?.engine_dir ?? "Not loaded"}
          />
          <PathRow
            label="Binary path"
            value={discovery?.binary?.path ?? "Not loaded"}
          />
          <PathRow
            label="Models directory"
            value={discovery?.models.models_dir ?? "Not loaded"}
          />
          <div className="kv-row">
            <span>version.json</span>
            <span>{discovery?.version_json_exists ? "Found" : "Missing"}</span>
          </div>
        </div>
        {!discovery?.binary?.exists ? (
          <div className="notice notice-warning">
            Real-ESRGAN binary is missing. Place the ncnn Vulkan binary in the
            engine directory. The app does not download binaries in Phase 1.
          </div>
        ) : null}
        {discovery?.detected_version_text ? (
          <pre className="preview-box">{discovery.detected_version_text}</pre>
        ) : null}
      </Card>

      {testResult ? (
        <Card
          eyebrow="Fixed safe command"
          title="Safe Test Result"
          status={
            <Badge variant={testResult.ok ? "success" : "warning"}>
              {testResult.message}
            </Badge>
          }
        >
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
        </Card>
      ) : null}
    </section>
  );
}

function ImportResultCard({ result }: { result: ImageImportResult }) {
  return (
    <Card
      title="Last Import Result"
      status={<Badge variant={result.ok ? "success" : "warning"}>{result.message}</Badge>}
    >
      <p>
        This shows only the latest import action. Existing queued images remain
        in the queue below.
      </p>
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
    </Card>
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

function QueueRow({
  disabled,
  item,
  onRemove,
  onUpdate
}: {
  disabled: boolean;
  item: UpscaleQueueItem;
  onRemove: (queueItemId: string) => Promise<void>;
  onUpdate: (
    item: UpscaleQueueItem,
    desiredScaleFactor: UpscaleQueueItem["desired_scale_factor"],
    desiredOutputFormat: UpscaleQueueItem["desired_output_format"]
  ) => Promise<void>;
}) {
  return (
    <div className="queue-row">
      <span>
        <strong>{item.original_name}</strong>
        <small className="path-value">{item.relative_path}</small>
      </span>
      <span>
        <Badge variant={item.status === "queued" ? "success" : "warning"}>
          {item.status}
        </Badge>
      </span>
      <span>{formatSize(item.size_bytes)}</span>
      <span>
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
      </span>
      <span>
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
      </span>
      <span>{item.source_kind}</span>
      <span className="path-value">{item.created_at}</span>
      <span>
        <Button
          disabled={disabled || item.status !== "queued"}
          onClick={() => void onRemove(item.id)}
          variant="ghost"
        >
          Remove
        </Button>
      </span>
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
