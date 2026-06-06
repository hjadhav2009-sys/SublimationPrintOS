import { useEffect, useState } from "react";
import {
  clearRealEsrganTestOutput,
  discoverRealEsrganEngine,
  getRealEsrganExpectedLayout,
  runRealEsrganSafeTest
} from "../app/engineApi";
import { commandErrorMessage } from "../app/foundationApi";
import { openManagedFolder } from "../app/shellApi";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import type {
  EngineDiscoveryStatus,
  EngineExpectedLayout,
  EngineTestRunResult
} from "../types/app";

export function UpscaleTestPage() {
  const [discovery, setDiscovery] = useState<EngineDiscoveryStatus | null>(null);
  const [layout, setLayout] = useState<EngineExpectedLayout | null>(null);
  const [testResult, setTestResult] = useState<EngineTestRunResult | null>(null);
  const [isBusy, setIsBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleDiscoverEvent = () => {
      void handleDiscover();
    };

    window.addEventListener("spos:discover-engine", handleDiscoverEvent);
    return () => window.removeEventListener("spos:discover-engine", handleDiscoverEvent);
  }, []);

  const handleDiscover = async () => {
    setIsBusy(true);
    setErrorMessage(null);
    setMessage(null);

    try {
      const status = await discoverRealEsrganEngine();
      setDiscovery(status);
      setMessage(status.message);
    } catch (error: unknown) {
      setErrorMessage(commandErrorMessage(error));
    } finally {
      setIsBusy(false);
    }
  };

  const handleShowLayout = async () => {
    setIsBusy(true);
    setErrorMessage(null);
    setMessage(null);

    try {
      const expectedLayout = await getRealEsrganExpectedLayout();
      setLayout(expectedLayout);
      setMessage("Expected engine layout loaded");
    } catch (error: unknown) {
      setErrorMessage(commandErrorMessage(error));
    } finally {
      setIsBusy(false);
    }
  };

  const handleSafeTest = async () => {
    setIsBusy(true);
    setErrorMessage(null);
    setMessage(null);

    try {
      const result = await runRealEsrganSafeTest();
      setTestResult(result);
      setMessage(result.message);
      const status = await discoverRealEsrganEngine();
      setDiscovery(status);
    } catch (error: unknown) {
      setErrorMessage(commandErrorMessage(error));
    } finally {
      setIsBusy(false);
    }
  };

  const handleClearOutput = async () => {
    setIsBusy(true);
    setErrorMessage(null);
    setMessage(null);

    try {
      const status = await clearRealEsrganTestOutput();
      setDiscovery(status);
      setTestResult(null);
      setMessage("Safe test output cleared if it existed");
    } catch (error: unknown) {
      setErrorMessage(commandErrorMessage(error));
    } finally {
      setIsBusy(false);
    }
  };

  const handleOpenEngineFolder = async () => {
    setIsBusy(true);
    setErrorMessage(null);
    setMessage(null);

    try {
      const result = await openManagedFolder("engine");
      if (result.ok) {
        setMessage(result.message);
      } else {
        setErrorMessage(result.message);
      }
    } catch (error: unknown) {
      setErrorMessage(commandErrorMessage(error));
    } finally {
      setIsBusy(false);
    }
  };

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Upscale Test</p>
          <h2>Real-ESRGAN Engine Test</h2>
          <p>
            This is only Phase 0 engine discovery and safe test-run. Full
            Upscale Factory comes later.
          </p>
        </div>
        <Badge variant={discovery?.ok ? "success" : "warning"}>
          {discovery?.ok ? "Engine ready" : "Discovery needed"}
        </Badge>
      </div>

      {errorMessage ? (
        <div className="notice notice-warning">{errorMessage}</div>
      ) : null}
      {message ? <div className="notice notice-success">{message}</div> : null}

      <Card title="Engine controls" status={<Badge variant="info">Phase 0</Badge>}>
        <div className="settings-actions">
          <Button disabled={isBusy} onClick={() => void handleDiscover()} variant="primary">
            Discover Engine
          </Button>
          <Button disabled={isBusy} onClick={() => void handleShowLayout()} variant="secondary">
            Show Expected Layout
          </Button>
          <Button disabled={isBusy} onClick={() => void handleSafeTest()} variant="secondary">
            Run Safe Test
          </Button>
          <Button disabled={isBusy} onClick={() => void handleOpenEngineFolder()} variant="secondary">
            Open Engine Folder
          </Button>
          <Button disabled={isBusy} onClick={() => void handleClearOutput()} variant="ghost">
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
          <div className="summary-item">
            <span>Binary</span>
            <strong>{discovery?.binary?.exists ? "Found" : "Missing"}</strong>
          </div>
          <div className="summary-item">
            <span>Models folder</span>
            <strong>
              {discovery?.models.models_dir_exists ? "Found" : "Missing"}
            </strong>
          </div>
          <div className="summary-item">
            <span>Model files</span>
            <strong>{discovery?.models.model_files_count ?? 0}</strong>
          </div>
          <div className="summary-item">
            <span>Help command</span>
            <strong>
              {discovery?.can_run_basic_command ? "Available" : "Not available"}
            </strong>
          </div>
        </div>
        <div className="kv-list">
          <PathRow label="Engine directory" value={discovery?.engine_dir ?? "Not loaded"} />
          <PathRow label="Binary path" value={discovery?.binary?.path ?? "Not loaded"} />
          <PathRow label="Models directory" value={discovery?.models.models_dir ?? "Not loaded"} />
          <div className="kv-row">
            <span>version.json</span>
            <span>{discovery?.version_json_exists ? "Found" : "Missing"}</span>
          </div>
        </div>
        {!discovery?.binary?.exists ? (
          <div className="notice notice-warning">
            Real-ESRGAN binary is missing. Place the ncnn Vulkan binary in the
            engine directory. The app does not download binaries in Phase 0.
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
            <PathRow label="Output file" value={testResult.output_file ?? "Not created"} />
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

function PathRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="kv-row">
      <span>{label}</span>
      <span className="path-value">{value}</span>
    </div>
  );
}
