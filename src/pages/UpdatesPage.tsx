import { useEffect, useMemo, useState } from "react";
import { commandErrorMessage } from "../app/foundationApi";
import { openManagedFolder } from "../app/shellApi";
import {
  clearStagedUpdate,
  createSampleUpdateManifest,
  getOfflineUpdateStatus,
  stageOfflineUpdatePackage,
  validateOfflineUpdatePackage
} from "../app/updatesApi";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import type {
  OfflineUpdatePackage,
  OfflineUpdateStatus,
  OpenFolderKey
} from "../types/app";

export function UpdatesPage() {
  const [status, setStatus] = useState<OfflineUpdateStatus | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isBusy, setIsBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const selectedPackageStatus = useMemo(
    () =>
      status?.packages.find((item) => item.folder_name === selectedPackage) ??
      null,
    [selectedPackage, status]
  );

  useEffect(() => {
    let isMounted = true;

    async function load() {
      setIsLoading(true);
      try {
        const updateStatus = await getOfflineUpdateStatus();
        if (isMounted) {
          setStatus(updateStatus);
          setMessage(updateStatus.message);
          setErrorMessage(null);
        }
      } catch (error: unknown) {
        if (isMounted) {
          setErrorMessage(commandErrorMessage(error));
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void load();

    return () => {
      isMounted = false;
    };
  }, []);

  async function refreshStatus(messageOverride?: string) {
    setIsBusy(true);
    setErrorMessage(null);
    setMessage(null);

    try {
      const updateStatus = await getOfflineUpdateStatus();
      setStatus(updateStatus);
      setMessage(messageOverride ?? updateStatus.message);
    } catch (error: unknown) {
      setErrorMessage(commandErrorMessage(error));
    } finally {
      setIsBusy(false);
      setIsLoading(false);
    }
  }

  async function handleCreateSampleManifest() {
    setIsBusy(true);
    setErrorMessage(null);
    setMessage(null);

    try {
      const updateStatus = await createSampleUpdateManifest();
      setStatus(updateStatus);
      setMessage(updateStatus.message);
      if (!selectedPackage) {
        setSelectedPackage("sample-phase0-update");
      }
    } catch (error: unknown) {
      setErrorMessage(commandErrorMessage(error));
    } finally {
      setIsBusy(false);
    }
  }

  async function handleSelectPackage(folderName: string) {
    setIsBusy(true);
    setErrorMessage(null);
    setMessage(null);

    try {
      const packageStatus = await validateOfflineUpdatePackage(folderName);
      setSelectedPackage(folderName);
      setMessage(
        packageStatus.manifest_valid
          ? `Selected valid package ${folderName}`
          : `Selected package ${folderName}; manifest needs attention`
      );
      const updateStatus = await getOfflineUpdateStatus();
      setStatus(updateStatus);
    } catch (error: unknown) {
      setErrorMessage(commandErrorMessage(error));
    } finally {
      setIsBusy(false);
    }
  }

  async function handleStageSelectedPackage() {
    if (!selectedPackage) {
      setErrorMessage("Select an offline update package first");
      return;
    }

    setIsBusy(true);
    setErrorMessage(null);
    setMessage(null);

    try {
      const result = await stageOfflineUpdatePackage(selectedPackage);
      if (result.ok) {
        setMessage(result.message);
      } else {
        setErrorMessage(result.message);
      }
      const updateStatus = await getOfflineUpdateStatus();
      setStatus(updateStatus);
    } catch (error: unknown) {
      setErrorMessage(commandErrorMessage(error));
    } finally {
      setIsBusy(false);
    }
  }

  async function handleClearStagedUpdate() {
    const confirmed = window.confirm(
      "Clear staged offline update metadata?"
    );
    if (!confirmed) {
      return;
    }

    setIsBusy(true);
    setErrorMessage(null);
    setMessage(null);

    try {
      const updateStatus = await clearStagedUpdate();
      setStatus(updateStatus);
      setMessage(updateStatus.message);
    } catch (error: unknown) {
      setErrorMessage(commandErrorMessage(error));
    } finally {
      setIsBusy(false);
    }
  }

  async function handleOpenManagedFolder(key: OpenFolderKey) {
    setIsBusy(true);
    setErrorMessage(null);
    setMessage(null);

    try {
      const result = await openManagedFolder(key);
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
  }

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Updates</p>
          <h2>Offline Update Shell</h2>
          <p>
            Phase 0 can inspect and stage offline update metadata only. It does
            not install updates.
          </p>
        </div>
        <Badge variant={status?.ok ? "success" : "info"}>
          {status?.ok ? "Local update folders ready" : "Offline shell"}
        </Badge>
      </div>

      {errorMessage ? (
        <div className="notice notice-warning">{errorMessage}</div>
      ) : null}
      {message ? <div className="notice notice-success">{message}</div> : null}
      {isLoading ? (
        <div className="notice">Loading offline update status...</div>
      ) : null}

      <Card
        eyebrow="Backend-managed folders"
        title="Update Folders"
        status={
          <Badge variant={status?.ok ? "success" : "warning"}>
            {status?.message ?? "Not loaded yet"}
          </Badge>
        }
      >
        <div className="kv-list">
          <PathRow label="Updates root" value={status?.updates_dir} />
          <PathRow label="Downloaded" value={status?.downloaded_dir} />
          <PathRow label="Staged" value={status?.staged_dir} />
          <PathRow label="Rollback" value={status?.rollback_dir} />
        </div>
      </Card>

      <Card eyebrow="Local-only actions" title="Offline Update Actions">
        <div className="settings-actions">
          <Button
            disabled={isBusy}
            onClick={() => void refreshStatus()}
            variant="primary"
          >
            Refresh Update Status
          </Button>
          <Button
            disabled={isBusy}
            onClick={() => void handleCreateSampleManifest()}
            variant="secondary"
          >
            Create Sample Manifest
          </Button>
          <Button
            disabled={isBusy || !selectedPackage}
            onClick={() => void handleStageSelectedPackage()}
            variant="secondary"
          >
            Stage Selected Package
          </Button>
          <Button
            disabled={isBusy}
            onClick={() => void handleClearStagedUpdate()}
            variant="ghost"
          >
            Clear Staged Update
          </Button>
        </div>
        <div className="settings-actions">
          <Button
            disabled={isBusy}
            onClick={() => void handleOpenManagedFolder("updates")}
            variant="secondary"
          >
            Open Updates Folder
          </Button>
          <Button
            disabled={isBusy}
            onClick={() => void handleOpenManagedFolder("updates_downloaded")}
            variant="secondary"
          >
            Open Downloaded Folder
          </Button>
          <Button
            disabled={isBusy}
            onClick={() => void handleOpenManagedFolder("updates_staged")}
            variant="secondary"
          >
            Open Staged Folder
          </Button>
          <Button
            disabled={isBusy}
            onClick={() => void handleOpenManagedFolder("updates_rollback")}
            variant="secondary"
          >
            Open Rollback Folder
          </Button>
        </div>
      </Card>

      <Card
        eyebrow="Downloaded packages"
        title="Package List"
        status={
          <Badge variant={selectedPackageStatus ? "info" : "neutral"}>
            {selectedPackageStatus
              ? `Selected: ${selectedPackageStatus.folder_name}`
              : "No package selected"}
          </Badge>
        }
      >
        {status && status.packages.length > 0 ? (
          <div className="package-list">
            {status.packages.map((updatePackage) => (
              <PackageRow
                isBusy={isBusy}
                isSelected={updatePackage.folder_name === selectedPackage}
                key={updatePackage.folder_name}
                updatePackage={updatePackage}
                onSelect={handleSelectPackage}
              />
            ))}
          </div>
        ) : (
          <p>
            No folder-based offline update packages were found under the
            downloaded updates folder.
          </p>
        )}
      </Card>

      <Card title="Safety Notice" status={<Badge variant="warning">Shell only</Badge>}>
        <div className="check-list">
          <div className="check-row">
            <strong>
              Phase 0 never executes update packages and never replaces app files.
            </strong>
            <Badge variant="success">Enforced</Badge>
          </div>
          <div className="check-row">
            <strong>
              Staging copies only update-manifest.json, optional README.txt, and
              stage-info.json.
            </strong>
            <Badge variant="info">Metadata only</Badge>
          </div>
          <div className="check-row">
            <strong>
              Payload folders, installers, downloads, ZIP extraction, and app
              binary replacement are intentionally excluded.
            </strong>
            <Badge variant="warning">Not implemented</Badge>
          </div>
        </div>
      </Card>
    </section>
  );
}

function PackageRow({
  isBusy,
  isSelected,
  updatePackage,
  onSelect
}: {
  isBusy: boolean;
  isSelected: boolean;
  updatePackage: OfflineUpdatePackage;
  onSelect: (folderName: string) => Promise<void>;
}) {
  return (
    <div className="package-row">
      <div>
        <div className="package-row-heading">
          <strong>{updatePackage.folder_name}</strong>
          <Badge variant={updatePackage.manifest_valid ? "success" : "warning"}>
            {updatePackage.manifest_valid ? "Manifest valid" : "Needs attention"}
          </Badge>
          {isSelected ? <Badge variant="info">Selected</Badge> : null}
        </div>
        <div className="package-meta">
          <span className="path-value">{updatePackage.folder_path}</span>
          <span>Manifest: {updatePackage.manifest_exists ? "Found" : "Missing"}</span>
          <span>Version: {updatePackage.manifest?.version ?? "Not available"}</span>
          <span>Channel: {updatePackage.manifest?.channel ?? "Not available"}</span>
        </div>
        {updatePackage.errors.length > 0 ? (
          <div className="notice notice-warning">
            {updatePackage.errors.join("; ")}
          </div>
        ) : null}
        {updatePackage.warnings.length > 0 ? (
          <div className="notice">
            {updatePackage.warnings.join("; ")}
          </div>
        ) : null}
      </div>
      <Button
        disabled={isBusy}
        onClick={() => void onSelect(updatePackage.folder_name)}
        variant={isSelected ? "primary" : "secondary"}
      >
        Select
      </Button>
    </div>
  );
}

function PathRow({ label, value }: { label: string; value?: string }) {
  return (
    <div className="kv-row">
      <span>{label}</span>
      <span className="path-value">{value ?? "Not loaded yet"}</span>
    </div>
  );
}
