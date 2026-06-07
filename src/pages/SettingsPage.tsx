import { useEffect, useMemo, useState } from "react";
import {
  commandErrorMessage,
  getDatabaseStatus,
  getRequiredAppFolders,
  getStorageStatus
} from "../app/foundationApi";
import { openManagedFolder } from "../app/shellApi";
import {
  getAppSettings,
  resetAppSettings,
  saveAppSettings,
  validateAppSettings
} from "../app/settingsApi";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import type {
  AppFolderDescriptor,
  AppPreferences,
  AppSettings,
  DatabaseStatus,
  ProductionDefaults,
  RouteId,
  SettingsValidationError,
  SettingsValidationResult,
  StorageStatus,
  UpscaleDefaults
} from "../types/app";

const themeOptions: Array<{ value: AppPreferences["theme"]; label: string }> = [
  { value: "dark", label: "Dark" },
  { value: "light", label: "Light" }
];

const languageOptions: Array<{
  value: AppPreferences["language"];
  label: string;
}> = [
  { value: "en", label: "English" },
  { value: "hi", label: "Hindi" },
  { value: "mr", label: "Marathi" }
];

const startupPageOptions: Array<{ value: RouteId; label: string }> = [
  { value: "dashboard", label: "Home" },
  { value: "settings", label: "Settings" },
  { value: "health", label: "System Health" },
  { value: "upscale", label: "Upscale Factory" },
  { value: "logs", label: "Logs & Diagnostics" },
  { value: "updates", label: "Offline Updates" },
  { value: "shortcuts", label: "Keyboard Shortcuts" }
];

const unitOptions: Array<{
  value: ProductionDefaults["default_unit"];
  label: string;
}> = [
  { value: "mm", label: "Millimeters" },
  { value: "inch", label: "Inches" },
  { value: "px", label: "Pixels" }
];

const dpiOptions: Array<{
  value: ProductionDefaults["default_dpi"];
  label: string;
}> = [
  { value: 300, label: "300 DPI" },
  { value: 600, label: "600 DPI" }
];

const pagePresetOptions: Array<{
  value: ProductionDefaults["default_page_preset"];
  label: string;
}> = [
  { value: "A4", label: "A4" },
  { value: "A3", label: "A3" },
  { value: "13x19", label: "13 x 19 in" },
  { value: "custom", label: "Custom" }
];

const scaleFactorOptions: Array<{
  value: UpscaleDefaults["default_scale_factor"];
  label: string;
}> = [
  { value: 2, label: "2x" },
  { value: 4, label: "4x" },
  { value: 8, label: "8x" }
];

const outputFormatOptions: Array<{
  value: UpscaleDefaults["default_output_format"];
  label: string;
}> = [
  { value: "png", label: "PNG" },
  { value: "jpg", label: "JPG" },
  { value: "tiff", label: "TIFF" },
  { value: "webp", label: "WebP" }
];

export function SettingsPage() {
  const [storageStatus, setStorageStatus] = useState<StorageStatus | null>(null);
  const [databaseStatus, setDatabaseStatus] = useState<DatabaseStatus | null>(
    null
  );
  const [requiredFolders, setRequiredFolders] = useState<AppFolderDescriptor[]>(
    []
  );
  const [settings, setSettings] = useState<AppSettings | null>(null);
  const [lastSavedSettings, setLastSavedSettings] = useState<AppSettings | null>(
    null
  );
  const [validation, setValidation] =
    useState<SettingsValidationResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const isDirty = useMemo(() => {
    if (!settings || !lastSavedSettings) {
      return false;
    }

    return JSON.stringify(settings) !== JSON.stringify(lastSavedSettings);
  }, [settings, lastSavedSettings]);

  const validationByField = useMemo(() => {
    const grouped = new Map<string, SettingsValidationError>();
    validation?.errors.forEach((error) => grouped.set(error.field, error));
    return grouped;
  }, [validation]);

  useEffect(() => {
    let isMounted = true;

    async function loadSettings() {
      setIsLoading(true);
      try {
        const { loadedSettings, storage, database, folders } =
          await loadSettingsAndFoundationStatus();

        if (isMounted) {
          setStorageStatus(storage);
          setDatabaseStatus(database);
          setRequiredFolders(folders);
          setSettings(loadedSettings);
          setLastSavedSettings(loadedSettings);
          setValidation(null);
          setMessage(null);
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

    void loadSettings();

    return () => {
      isMounted = false;
    };
  }, []);

  async function loadSettingsAndFoundationStatus() {
    const loadedSettings = await getAppSettings();
    const [storage, database, folders] = await Promise.all([
      getStorageStatus(),
      getDatabaseStatus(),
      getRequiredAppFolders()
    ]);

    return { loadedSettings, storage, database, folders };
  }

  async function handleReload() {
    setIsSaving(true);
    setMessage(null);
    setErrorMessage(null);

    try {
      const { loadedSettings, storage, database, folders } =
        await loadSettingsAndFoundationStatus();
      setStorageStatus(storage);
      setDatabaseStatus(database);
      setRequiredFolders(folders);
      setSettings(loadedSettings);
      setLastSavedSettings(loadedSettings);
      setValidation(null);
      setMessage("Settings reloaded from local database");
    } catch (error: unknown) {
      setErrorMessage(commandErrorMessage(error));
    } finally {
      setIsSaving(false);
    }
  }

  async function handleSave() {
    if (!settings) {
      return;
    }

    setIsSaving(true);
    setMessage(null);
    setErrorMessage(null);

    try {
      const validationResult = await validateAppSettings(settings);
      setValidation(validationResult);

      if (!validationResult.ok) {
        setErrorMessage(validationResult.message);
        return;
      }

      const saveResult = await saveAppSettings(settings);
      setSettings(saveResult.settings);

      if (saveResult.ok) {
        setLastSavedSettings(saveResult.settings);
        setMessage(saveResult.message);
      } else {
        setErrorMessage(saveResult.message);
      }
    } catch (error: unknown) {
      setErrorMessage(commandErrorMessage(error));
    } finally {
      setIsSaving(false);
    }
  }

  async function handleReset() {
    const confirmed = window.confirm("Reset local settings to default values?");
    if (!confirmed) {
      return;
    }

    setIsSaving(true);
    setMessage(null);
    setErrorMessage(null);

    try {
      const resetSettings = await resetAppSettings();
      setSettings(resetSettings);
      setLastSavedSettings(resetSettings);
      setValidation(null);
      setMessage("Settings reset to Phase 0 defaults");
    } catch (error: unknown) {
      setErrorMessage(commandErrorMessage(error));
    } finally {
      setIsSaving(false);
    }
  }

  async function handleOpenAppData() {
    setMessage(null);
    setErrorMessage(null);

    try {
      const result = await openManagedFolder("app_data");
      if (result.ok) {
        setMessage(result.message);
      } else {
        setErrorMessage(result.message);
      }
    } catch (error: unknown) {
      setErrorMessage(commandErrorMessage(error));
    }
  }

  function updateCompanyField(
    field: keyof AppSettings["company"],
    value: string
  ) {
    updateSettings((current) => ({
      ...current,
      company: {
        ...current.company,
        [field]: value
      }
    }));
  }

  function updateAppField<K extends keyof AppSettings["app"]>(
    field: K,
    value: AppSettings["app"][K]
  ) {
    updateSettings((current) => ({
      ...current,
      app: {
        ...current.app,
        [field]: value
      }
    }));
  }

  function updateProductionField<K extends keyof AppSettings["production"]>(
    field: K,
    value: AppSettings["production"][K]
  ) {
    updateSettings((current) => ({
      ...current,
      production: {
        ...current.production,
        [field]: value
      }
    }));
  }

  function updateUpscaleField<K extends keyof AppSettings["upscale"]>(
    field: K,
    value: AppSettings["upscale"][K]
  ) {
    updateSettings((current) => ({
      ...current,
      upscale: {
        ...current.upscale,
        [field]: value
      }
    }));
  }

  function updateUpdatesField<K extends keyof AppSettings["updates"]>(
    field: K,
    value: AppSettings["updates"][K]
  ) {
    updateSettings((current) => ({
      ...current,
      updates: {
        ...current.updates,
        [field]: value
      }
    }));
  }

  function updateSettings(update: (current: AppSettings) => AppSettings) {
    setMessage(null);
    setValidation(null);

    setSettings((current) => {
      if (!current) {
        return current;
      }

      return update(current);
    });
  }

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Settings</p>
          <h2>Local preferences saved in SQLite.</h2>
          <p>
            Phase 0 settings are stored locally in SQLite. These controls only
            manage foundation defaults and do not activate production workflows.
          </p>
        </div>
        <div className="topbar-badges">
          {isDirty ? <Badge variant="warning">Unsaved changes</Badge> : null}
          <Badge variant={settings ? "success" : "info"}>
            {settings ? "SQLite-backed" : "Loading"}
          </Badge>
        </div>
      </div>

      <Card
        eyebrow="Read-only foundation"
        title="Local Storage"
        status={
          <Badge
            variant={
              storageStatus?.ok && databaseStatus?.ok
                ? "success"
                : errorMessage
                  ? "warning"
                  : "info"
            }
          >
            {storageStatus?.ok && databaseStatus?.ok
              ? "Ready"
              : errorMessage
                ? "Needs attention"
                : "Status loading"}
          </Badge>
        }
      >
        <div className="kv-list">
          <div className="kv-row">
            <span>AppData path</span>
            <span className="path-value">
              {storageStatus?.app_data_dir ?? "Not loaded yet"}
            </span>
          </div>
          <div className="kv-row">
            <span>Database path</span>
            <span className="path-value">
              {databaseStatus?.database_path ?? "Not loaded yet"}
            </span>
          </div>
          <div className="kv-row">
            <span>Schema version</span>
            <span>{databaseStatus?.schema_version ?? "Not available"}</span>
          </div>
          <div className="kv-row">
            <span>Required folders</span>
            <span>{requiredFolders.length || "Not loaded yet"}</span>
          </div>
          <div className="kv-row">
            <span>Settings updated</span>
            <span>{settings?.updated_at ?? "Not saved yet"}</span>
          </div>
        </div>
        <div className="page-actions align-left">
          <Button
            disabled={isSaving || isLoading}
            onClick={() => void handleOpenAppData()}
            variant="secondary"
          >
            Open AppData
          </Button>
        </div>
      </Card>

      {errorMessage ? (
        <div className="notice notice-warning">{errorMessage}</div>
      ) : null}
      {message ? <div className="notice notice-success">{message}</div> : null}

      <div className="settings-actions">
        <Button
          disabled={!settings || isSaving || isLoading || !isDirty}
          onClick={() => void handleSave()}
          variant="primary"
        >
          Save Settings
        </Button>
        <Button
          disabled={!settings || isSaving || isLoading}
          onClick={() => void handleReload()}
          variant="secondary"
        >
          Reload
        </Button>
        <Button
          disabled={!settings || isSaving || isLoading}
          onClick={() => void handleReset()}
          variant="ghost"
        >
          Reset Defaults
        </Button>
      </div>

      {isLoading ? <div className="notice">Loading local settings...</div> : null}

      {settings ? (
        <div className="settings-grid">
          <Card eyebrow="SQLite row: settings.company" title="Company Settings">
            <div className="settings-form-grid">
              <TextField
                error={validationByField.get("company.company_name")?.message}
                label="Company name"
                maxLength={80}
                value={settings.company.company_name}
                onChange={(value) => updateCompanyField("company_name", value)}
              />
              <TextField
                error={validationByField.get("company.operator_name")?.message}
                label="Operator name"
                maxLength={80}
                value={settings.company.operator_name}
                onChange={(value) => updateCompanyField("operator_name", value)}
              />
              <TextField
                error={
                  validationByField.get("company.default_workspace_name")
                    ?.message
                }
                label="Default workspace"
                maxLength={80}
                value={settings.company.default_workspace_name}
                onChange={(value) =>
                  updateCompanyField("default_workspace_name", value)
                }
              />
            </div>
          </Card>

          <Card eyebrow="SQLite row: settings.app" title="App Defaults">
            <div className="settings-form-grid">
              <SelectField
                error={validationByField.get("app.theme")?.message}
                label="Theme"
                options={themeOptions}
                value={settings.app.theme}
                onChange={(value) =>
                  updateAppField("theme", value as AppPreferences["theme"])
                }
              />
              <p className="field-note">
                Theme switching will be applied globally in a later prompt.
              </p>
              <SelectField
                error={validationByField.get("app.language")?.message}
                label="Language"
                options={languageOptions}
                value={settings.app.language}
                onChange={(value) =>
                  updateAppField("language", value as AppPreferences["language"])
                }
              />
              <SelectField
                error={validationByField.get("app.startup_page")?.message}
                label="Startup page"
                options={startupPageOptions}
                value={settings.app.startup_page}
                onChange={(value) => updateAppField("startup_page", value as RouteId)}
              />
              <NumberField
                error={
                  validationByField.get("app.autosave_interval_minutes")
                    ?.message
                }
                label="Autosave interval"
                max={10}
                min={1}
                suffix="minutes"
                value={settings.app.autosave_interval_minutes}
                onChange={(value) =>
                  updateAppField("autosave_interval_minutes", value)
                }
              />
              <NumberField
                error={validationByField.get("app.recent_files_limit")?.message}
                label="Recent files limit"
                max={100}
                min={5}
                value={settings.app.recent_files_limit}
                onChange={(value) => updateAppField("recent_files_limit", value)}
              />
            </div>
          </Card>

          <Card
            eyebrow="SQLite row: settings.production"
            title="Production Defaults"
          >
            <div className="settings-form-grid">
              <SelectField
                error={validationByField.get("production.default_unit")?.message}
                label="Default unit"
                options={unitOptions}
                value={settings.production.default_unit}
                onChange={(value) =>
                  updateProductionField(
                    "default_unit",
                    value as ProductionDefaults["default_unit"]
                  )
                }
              />
              <SelectField
                error={validationByField.get("production.default_dpi")?.message}
                label="Default DPI"
                options={dpiOptions}
                value={settings.production.default_dpi}
                onChange={(value) =>
                  updateProductionField(
                    "default_dpi",
                    Number(value) as ProductionDefaults["default_dpi"]
                  )
                }
              />
              <SelectField
                error={
                  validationByField.get("production.default_page_preset")
                    ?.message
                }
                label="Page preset"
                options={pagePresetOptions}
                value={settings.production.default_page_preset}
                onChange={(value) =>
                  updateProductionField(
                    "default_page_preset",
                    value as ProductionDefaults["default_page_preset"]
                  )
                }
              />
              <NumberField
                error={
                  validationByField.get("production.default_margin_mm")
                    ?.message
                }
                label="Margin"
                max={100}
                min={0}
                suffix="mm"
                value={settings.production.default_margin_mm}
                onChange={(value) =>
                  updateProductionField("default_margin_mm", value)
                }
              />
              <NumberField
                error={validationByField.get("production.default_gap_mm")?.message}
                label="Gap"
                max={50}
                min={0}
                suffix="mm"
                value={settings.production.default_gap_mm}
                onChange={(value) => updateProductionField("default_gap_mm", value)}
              />
              <NumberField
                error={
                  validationByField.get("production.default_bleed_mm")?.message
                }
                label="Bleed"
                max={20}
                min={0}
                suffix="mm"
                value={settings.production.default_bleed_mm}
                onChange={(value) =>
                  updateProductionField("default_bleed_mm", value)
                }
              />
            </div>
          </Card>

          <Card eyebrow="SQLite row: settings.upscale" title="Upscale Defaults">
            <div className="settings-form-grid">
              <SelectField
                error={
                  validationByField.get("upscale.default_scale_factor")?.message
                }
                label="Scale factor"
                options={scaleFactorOptions}
                value={settings.upscale.default_scale_factor}
                onChange={(value) =>
                  updateUpscaleField(
                    "default_scale_factor",
                    Number(value) as UpscaleDefaults["default_scale_factor"]
                  )
                }
              />
              <SelectField
                error={
                  validationByField.get("upscale.default_output_format")
                    ?.message
                }
                label="Output format"
                options={outputFormatOptions}
                value={settings.upscale.default_output_format}
                onChange={(value) =>
                  updateUpscaleField(
                    "default_output_format",
                    value as UpscaleDefaults["default_output_format"]
                  )
                }
              />
              <CheckboxField
                checked={settings.upscale.preserve_transparency}
                label="Preserve transparency"
                onChange={(value) =>
                  updateUpscaleField("preserve_transparency", value)
                }
              />
              <CheckboxField
                checked={settings.upscale.use_gpu_when_available}
                label="Use GPU when available"
                onChange={(value) =>
                  updateUpscaleField("use_gpu_when_available", value)
                }
              />
            </div>
          </Card>

          <Card eyebrow="SQLite row: settings.updates" title="Update Settings">
            <div className="settings-form-grid">
              <CheckboxField
                checked={settings.updates.check_updates_on_startup}
                label="Check updates on startup"
                onChange={(value) =>
                  updateUpdatesField("check_updates_on_startup", value)
                }
              />
              <CheckboxField
                checked={settings.updates.allow_offline_update_package}
                label="Allow offline update package"
                onChange={(value) =>
                  updateUpdatesField("allow_offline_update_package", value)
                }
              />
            </div>
          </Card>
        </div>
      ) : null}
    </section>
  );
}

interface TextFieldProps {
  error?: string;
  label: string;
  maxLength?: number;
  value: string;
  onChange: (value: string) => void;
}

function TextField({
  error,
  label,
  maxLength,
  value,
  onChange
}: TextFieldProps) {
  return (
    <label className="settings-field">
      <span>{label}</span>
      <input
        maxLength={maxLength}
        type="text"
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
      />
      {error ? <small>{error}</small> : null}
    </label>
  );
}

interface SelectOption<T extends string | number> {
  value: T;
  label: string;
}

interface SelectFieldProps<T extends string | number> {
  error?: string;
  label: string;
  options: Array<SelectOption<T>>;
  value: T;
  onChange: (value: string) => void;
}

function SelectField<T extends string | number>({
  error,
  label,
  options,
  value,
  onChange
}: SelectFieldProps<T>) {
  return (
    <label className="settings-field">
      <span>{label}</span>
      <select
        value={String(value)}
        onChange={(event) => onChange(event.currentTarget.value)}
      >
        {options.map((option) => (
          <option key={String(option.value)} value={String(option.value)}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? <small>{error}</small> : null}
    </label>
  );
}

interface NumberFieldProps {
  error?: string;
  label: string;
  max: number;
  min: number;
  suffix?: string;
  value: number;
  onChange: (value: number) => void;
}

function NumberField({
  error,
  label,
  max,
  min,
  suffix,
  value,
  onChange
}: NumberFieldProps) {
  return (
    <label className="settings-field">
      <span>{label}</span>
      <div className="number-input">
        <input
          max={max}
          min={min}
          step="1"
          type="number"
          value={value}
          onChange={(event) => onChange(Number(event.currentTarget.value))}
        />
        {suffix ? <span>{suffix}</span> : null}
      </div>
      {error ? <small>{error}</small> : null}
    </label>
  );
}

interface CheckboxFieldProps {
  checked: boolean;
  label: string;
  onChange: (value: boolean) => void;
}

function CheckboxField({ checked, label, onChange }: CheckboxFieldProps) {
  return (
    <label className="settings-checkbox">
      <input
        checked={checked}
        type="checkbox"
        onChange={(event) => onChange(event.currentTarget.checked)}
      />
      <span>{label}</span>
    </label>
  );
}
