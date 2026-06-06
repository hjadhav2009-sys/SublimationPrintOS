use crate::app_paths::AppPaths;
use chrono::Utc;
use rusqlite::{params, Connection, OptionalExtension, Transaction};
use serde::{de::DeserializeOwned, Deserialize, Serialize};

const SETTINGS_COMPANY_KEY: &str = "settings.company";
const SETTINGS_APP_KEY: &str = "settings.app";
const SETTINGS_PRODUCTION_KEY: &str = "settings.production";
const SETTINGS_UPSCALE_KEY: &str = "settings.upscale";
const SETTINGS_UPDATES_KEY: &str = "settings.updates";

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CompanySettings {
    pub company_name: String,
    pub operator_name: String,
    pub default_workspace_name: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AppPreferences {
    pub theme: String,
    pub language: String,
    pub startup_page: String,
    pub autosave_interval_minutes: i64,
    pub recent_files_limit: i64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ProductionDefaults {
    pub default_unit: String,
    pub default_dpi: i64,
    pub default_page_preset: String,
    pub default_margin_mm: f64,
    pub default_gap_mm: f64,
    pub default_bleed_mm: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UpscaleDefaults {
    pub default_scale_factor: i64,
    pub default_output_format: String,
    pub preserve_transparency: bool,
    pub use_gpu_when_available: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UpdatePreferences {
    pub check_updates_on_startup: bool,
    pub allow_offline_update_package: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AppSettings {
    pub company: CompanySettings,
    pub app: AppPreferences,
    pub production: ProductionDefaults,
    pub upscale: UpscaleDefaults,
    pub updates: UpdatePreferences,
    pub updated_at: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
pub struct SettingsSaveResult {
    pub ok: bool,
    pub settings: AppSettings,
    pub message: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct SettingsValidationError {
    pub field: String,
    pub message: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct SettingsValidationResult {
    pub ok: bool,
    pub errors: Vec<SettingsValidationError>,
    pub message: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct SettingsSummary {
    pub company_name: String,
    pub theme: String,
    pub language: String,
    pub default_unit: String,
    pub default_dpi: i64,
    pub default_scale_factor: i64,
    pub updated_at_latest: Option<String>,
}

#[derive(Debug, Clone)]
struct LoadedGroup<T> {
    value: T,
    updated_at: String,
}

pub fn get_app_settings_for_paths(paths: &AppPaths) -> Result<AppSettings, String> {
    let connection = open_settings_connection(paths)?;

    let company = load_or_insert_group(
        &connection,
        SETTINGS_COMPANY_KEY,
        default_company_settings(),
    )?;
    let app = load_or_insert_group(&connection, SETTINGS_APP_KEY, default_app_preferences())?;
    let production = load_or_insert_group(
        &connection,
        SETTINGS_PRODUCTION_KEY,
        default_production_defaults(),
    )?;
    let upscale = load_or_insert_group(
        &connection,
        SETTINGS_UPSCALE_KEY,
        default_upscale_defaults(),
    )?;
    let updates = load_or_insert_group(
        &connection,
        SETTINGS_UPDATES_KEY,
        default_update_preferences(),
    )?;

    let settings = AppSettings {
        company: company.value,
        app: app.value,
        production: production.value,
        upscale: upscale.value,
        updates: updates.value,
        updated_at: latest_timestamp(&[
            company.updated_at,
            app.updated_at,
            production.updated_at,
            upscale.updated_at,
            updates.updated_at,
        ]),
    };

    let validation = validate_app_settings_data(&settings);
    if !validation.ok {
        return Err(format!(
            "Stored settings are invalid: {}",
            validation
                .errors
                .iter()
                .map(|error| format!("{}: {}", error.field, error.message))
                .collect::<Vec<_>>()
                .join("; ")
        ));
    }

    Ok(settings)
}

pub fn save_app_settings_for_paths(
    paths: &AppPaths,
    settings: AppSettings,
) -> Result<SettingsSaveResult, String> {
    let normalized_settings = normalize_app_settings(settings);
    let validation = validate_app_settings_data(&normalized_settings);

    if !validation.ok {
        return Ok(SettingsSaveResult {
            ok: false,
            settings: normalized_settings,
            message: "Settings validation failed".to_string(),
        });
    }

    let mut connection = open_settings_connection(paths)?;
    save_settings_groups(&mut connection, &normalized_settings)?;
    let saved_settings = get_app_settings_for_paths(paths)?;

    Ok(SettingsSaveResult {
        ok: true,
        settings: saved_settings,
        message: "Settings saved".to_string(),
    })
}

pub fn reset_app_settings_for_paths(paths: &AppPaths) -> Result<AppSettings, String> {
    let default_settings = default_app_settings();
    let mut connection = open_settings_connection(paths)?;
    save_settings_groups(&mut connection, &default_settings)?;
    get_app_settings_for_paths(paths)
}

pub fn validate_app_settings_for_payload(settings: AppSettings) -> SettingsValidationResult {
    validate_app_settings_data(&normalize_app_settings(settings))
}

pub fn get_settings_summary_for_paths(paths: &AppPaths) -> Result<SettingsSummary, String> {
    let settings = get_app_settings_for_paths(paths)?;

    Ok(SettingsSummary {
        company_name: settings.company.company_name,
        theme: settings.app.theme,
        language: settings.app.language,
        default_unit: settings.production.default_unit,
        default_dpi: settings.production.default_dpi,
        default_scale_factor: settings.upscale.default_scale_factor,
        updated_at_latest: settings.updated_at,
    })
}

fn open_settings_connection(paths: &AppPaths) -> Result<Connection, String> {
    let connection = Connection::open(&paths.database_path).map_err(|error| {
        format!(
            "Unable to open settings database at {}: {error}",
            paths.database_path.to_string_lossy()
        )
    })?;

    connection
        .execute_batch("PRAGMA foreign_keys = ON;")
        .map_err(|error| format!("Unable to enable SQLite foreign keys: {error}"))?;

    Ok(connection)
}

fn load_or_insert_group<T>(
    connection: &Connection,
    key: &str,
    default_value: T,
) -> Result<LoadedGroup<T>, String>
where
    T: Clone + DeserializeOwned + Serialize,
{
    let row = connection
        .query_row(
            "SELECT value_json, updated_at FROM settings_store WHERE key = ?1",
            params![key],
            |row| Ok((row.get::<_, String>(0)?, row.get::<_, String>(1)?)),
        )
        .optional()
        .map_err(|error| format!("Unable to read settings group {key}: {error}"))?;

    if let Some((value_json, updated_at)) = row {
        let value = serde_json::from_str::<T>(&value_json)
            .map_err(|error| format!("Unable to parse settings group {key}: {error}"))?;
        return Ok(LoadedGroup { value, updated_at });
    }

    let updated_at = Utc::now().to_rfc3339();
    upsert_group(connection, key, &default_value, &updated_at)?;

    Ok(LoadedGroup {
        value: default_value,
        updated_at,
    })
}

fn save_settings_groups(
    connection: &mut Connection,
    settings: &AppSettings,
) -> Result<(), String> {
    let transaction = connection
        .transaction()
        .map_err(|error| format!("Unable to start settings transaction: {error}"))?;
    let updated_at = Utc::now().to_rfc3339();

    upsert_group_tx(
        &transaction,
        SETTINGS_COMPANY_KEY,
        &settings.company,
        &updated_at,
    )?;
    upsert_group_tx(&transaction, SETTINGS_APP_KEY, &settings.app, &updated_at)?;
    upsert_group_tx(
        &transaction,
        SETTINGS_PRODUCTION_KEY,
        &settings.production,
        &updated_at,
    )?;
    upsert_group_tx(
        &transaction,
        SETTINGS_UPSCALE_KEY,
        &settings.upscale,
        &updated_at,
    )?;
    upsert_group_tx(
        &transaction,
        SETTINGS_UPDATES_KEY,
        &settings.updates,
        &updated_at,
    )?;

    transaction
        .commit()
        .map_err(|error| format!("Unable to commit settings transaction: {error}"))
}

fn upsert_group<T>(
    connection: &Connection,
    key: &str,
    value: &T,
    updated_at: &str,
) -> Result<(), String>
where
    T: Serialize,
{
    let value_json = serde_json::to_string(value)
        .map_err(|error| format!("Unable to serialize settings group {key}: {error}"))?;

    connection
        .execute(
            "
            INSERT INTO settings_store (key, value_json, updated_at)
            VALUES (?1, ?2, ?3)
            ON CONFLICT(key) DO UPDATE SET
                value_json = excluded.value_json,
                updated_at = excluded.updated_at
            ",
            params![key, value_json, updated_at],
        )
        .map_err(|error| format!("Unable to save settings group {key}: {error}"))?;

    Ok(())
}

fn upsert_group_tx<T>(
    transaction: &Transaction,
    key: &str,
    value: &T,
    updated_at: &str,
) -> Result<(), String>
where
    T: Serialize,
{
    let value_json = serde_json::to_string(value)
        .map_err(|error| format!("Unable to serialize settings group {key}: {error}"))?;

    transaction
        .execute(
            "
            INSERT INTO settings_store (key, value_json, updated_at)
            VALUES (?1, ?2, ?3)
            ON CONFLICT(key) DO UPDATE SET
                value_json = excluded.value_json,
                updated_at = excluded.updated_at
            ",
            params![key, value_json, updated_at],
        )
        .map_err(|error| format!("Unable to save settings group {key}: {error}"))?;

    Ok(())
}

fn default_app_settings() -> AppSettings {
    AppSettings {
        company: default_company_settings(),
        app: default_app_preferences(),
        production: default_production_defaults(),
        upscale: default_upscale_defaults(),
        updates: default_update_preferences(),
        updated_at: None,
    }
}

fn default_company_settings() -> CompanySettings {
    CompanySettings {
        company_name: "SublimationPrintOS Demo".to_string(),
        operator_name: "Owner".to_string(),
        default_workspace_name: "Main Workspace".to_string(),
    }
}

fn default_app_preferences() -> AppPreferences {
    AppPreferences {
        theme: "dark".to_string(),
        language: "en".to_string(),
        startup_page: "dashboard".to_string(),
        autosave_interval_minutes: 2,
        recent_files_limit: 20,
    }
}

fn default_production_defaults() -> ProductionDefaults {
    ProductionDefaults {
        default_unit: "mm".to_string(),
        default_dpi: 300,
        default_page_preset: "A4".to_string(),
        default_margin_mm: 10.0,
        default_gap_mm: 3.0,
        default_bleed_mm: 2.0,
    }
}

fn default_upscale_defaults() -> UpscaleDefaults {
    UpscaleDefaults {
        default_scale_factor: 4,
        default_output_format: "png".to_string(),
        preserve_transparency: true,
        use_gpu_when_available: true,
    }
}

fn default_update_preferences() -> UpdatePreferences {
    UpdatePreferences {
        check_updates_on_startup: false,
        allow_offline_update_package: true,
    }
}

fn normalize_app_settings(mut settings: AppSettings) -> AppSettings {
    settings.company.company_name = settings.company.company_name.trim().to_string();
    settings.company.operator_name = settings.company.operator_name.trim().to_string();
    settings.company.default_workspace_name = settings
        .company
        .default_workspace_name
        .trim()
        .to_string();
    settings.updated_at = None;
    settings
}

fn validate_app_settings_data(settings: &AppSettings) -> SettingsValidationResult {
    let mut errors = Vec::new();

    validate_required_text(
        &mut errors,
        "company.company_name",
        &settings.company.company_name,
        80,
    );
    validate_required_text(
        &mut errors,
        "company.operator_name",
        &settings.company.operator_name,
        80,
    );
    validate_required_text(
        &mut errors,
        "company.default_workspace_name",
        &settings.company.default_workspace_name,
        80,
    );

    validate_allowed(
        &mut errors,
        "app.theme",
        &settings.app.theme,
        &["dark", "light"],
    );
    validate_allowed(
        &mut errors,
        "app.language",
        &settings.app.language,
        &["en", "hi", "mr"],
    );
    validate_allowed(
        &mut errors,
        "app.startup_page",
        &settings.app.startup_page,
        &[
            "dashboard",
            "settings",
            "health",
            "upscale",
            "logs",
            "updates",
            "shortcuts",
        ],
    );
    validate_i64_range(
        &mut errors,
        "app.autosave_interval_minutes",
        settings.app.autosave_interval_minutes,
        1,
        10,
    );
    validate_i64_range(
        &mut errors,
        "app.recent_files_limit",
        settings.app.recent_files_limit,
        5,
        100,
    );

    validate_allowed(
        &mut errors,
        "production.default_unit",
        &settings.production.default_unit,
        &["mm", "inch", "px"],
    );
    validate_i64_allowed(
        &mut errors,
        "production.default_dpi",
        settings.production.default_dpi,
        &[300, 600],
    );
    validate_allowed(
        &mut errors,
        "production.default_page_preset",
        &settings.production.default_page_preset,
        &["A4", "A3", "13x19", "custom"],
    );
    validate_f64_range(
        &mut errors,
        "production.default_margin_mm",
        settings.production.default_margin_mm,
        0.0,
        100.0,
    );
    validate_f64_range(
        &mut errors,
        "production.default_gap_mm",
        settings.production.default_gap_mm,
        0.0,
        50.0,
    );
    validate_f64_range(
        &mut errors,
        "production.default_bleed_mm",
        settings.production.default_bleed_mm,
        0.0,
        20.0,
    );

    validate_i64_allowed(
        &mut errors,
        "upscale.default_scale_factor",
        settings.upscale.default_scale_factor,
        &[2, 4, 8],
    );
    validate_allowed(
        &mut errors,
        "upscale.default_output_format",
        &settings.upscale.default_output_format,
        &["png", "jpg", "tiff", "webp"],
    );

    let ok = errors.is_empty();
    SettingsValidationResult {
        ok,
        errors,
        message: if ok {
            "Settings are valid".to_string()
        } else {
            "Settings validation failed".to_string()
        },
    }
}

fn validate_required_text(
    errors: &mut Vec<SettingsValidationError>,
    field: &str,
    value: &str,
    max_length: usize,
) {
    if value.trim().is_empty() {
        errors.push(SettingsValidationError {
            field: field.to_string(),
            message: "Required".to_string(),
        });
        return;
    }

    if value.chars().count() > max_length {
        errors.push(SettingsValidationError {
            field: field.to_string(),
            message: format!("Must be {max_length} characters or fewer"),
        });
    }
}

fn validate_allowed(
    errors: &mut Vec<SettingsValidationError>,
    field: &str,
    value: &str,
    allowed: &[&str],
) {
    if !allowed.contains(&value) {
        errors.push(SettingsValidationError {
            field: field.to_string(),
            message: format!("Must be one of: {}", allowed.join(", ")),
        });
    }
}

fn validate_i64_range(
    errors: &mut Vec<SettingsValidationError>,
    field: &str,
    value: i64,
    minimum: i64,
    maximum: i64,
) {
    if value < minimum || value > maximum {
        errors.push(SettingsValidationError {
            field: field.to_string(),
            message: format!("Must be between {minimum} and {maximum}"),
        });
    }
}

fn validate_i64_allowed(
    errors: &mut Vec<SettingsValidationError>,
    field: &str,
    value: i64,
    allowed: &[i64],
) {
    if !allowed.contains(&value) {
        errors.push(SettingsValidationError {
            field: field.to_string(),
            message: format!("Must be one of: {:?}", allowed),
        });
    }
}

fn validate_f64_range(
    errors: &mut Vec<SettingsValidationError>,
    field: &str,
    value: f64,
    minimum: f64,
    maximum: f64,
) {
    if !value.is_finite() || value < minimum || value > maximum {
        errors.push(SettingsValidationError {
            field: field.to_string(),
            message: format!("Must be between {minimum} and {maximum}"),
        });
    }
}

fn latest_timestamp(values: &[String]) -> Option<String> {
    values.iter().max().cloned()
}
