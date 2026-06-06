use crate::app_paths::{path_to_string, AppPaths};
use crate::database::insert_audit_log;
use chrono::Utc;
use rusqlite::{params, Connection};
use serde::{Deserialize, Serialize};
use serde_json::Value;
use std::collections::HashSet;
use std::fs::{self, File, OpenOptions};
use std::io::{BufRead, BufReader, Write};
use std::path::{Path, PathBuf};

pub const APP_LOG_FILE: &str = "app.log";
pub const ERRORS_LOG_FILE: &str = "errors.log";
pub const DATABASE_LOG_FILE: &str = "database.log";
pub const SETTINGS_LOG_FILE: &str = "settings.log";
pub const DIAGNOSTICS_LOG_FILE: &str = "diagnostics.log";
pub const LOG_FILE_NAMES: &[&str] = &[
    APP_LOG_FILE,
    ERRORS_LOG_FILE,
    DATABASE_LOG_FILE,
    SETTINGS_LOG_FILE,
    DIAGNOSTICS_LOG_FILE,
];

const ALLOWED_LEVELS: &[&str] = &["debug", "info", "warn", "error"];
const ALLOWED_MODULES: &[&str] = &[
    "app",
    "foundation",
    "database",
    "storage",
    "settings",
    "health",
    "diagnostics",
    "frontend",
];
const MAX_EVENT_LENGTH: usize = 80;
const MAX_MESSAGE_LENGTH: usize = 500;
const MAX_METADATA_JSON_LENGTH: usize = 4000;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AppLogEntry {
    pub timestamp: String,
    pub level: String,
    pub module: String,
    pub event: String,
    pub message: String,
    pub metadata: Option<Value>,
}

#[derive(Debug, Clone, Serialize)]
pub struct RecentLogEntry {
    pub source: String,
    pub timestamp: String,
    pub level: String,
    pub module: String,
    pub event: String,
    pub message: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct LogCommandResult {
    pub ok: bool,
    pub message: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct RecentLogsResult {
    pub ok: bool,
    pub entries: Vec<RecentLogEntry>,
    pub message: String,
}

pub fn logs_dir(paths: &AppPaths) -> PathBuf {
    paths.app_data_dir.join("logs")
}

pub fn diagnostics_dir(paths: &AppPaths) -> PathBuf {
    paths.app_data_dir.join("diagnostics")
}

pub fn initialize_logging_for_paths(paths: &AppPaths) -> Result<(), String> {
    ensure_log_files(paths)?;

    write_log_entry(
        paths,
        &new_log_entry(
            "info",
            "diagnostics",
            "logging_initialized",
            "Logging initialized",
            Some(serde_json::json!({
                "log_files": LOG_FILE_NAMES
            })),
        )?,
    )?;

    write_audit_log_event(
        paths,
        "logging_initialized",
        "Logging initialized",
        Some(serde_json::json!({
            "log_files": LOG_FILE_NAMES
        })),
    )
}

pub fn record_frontend_event_for_paths(
    paths: &AppPaths,
    level: String,
    module: String,
    event: String,
    message: String,
    metadata: Option<Value>,
) -> Result<LogCommandResult, String> {
    ensure_log_files(paths)?;
    let entry = new_log_entry(&level, &module, &event, &message, metadata)?;
    write_log_entry(paths, &entry)?;

    Ok(LogCommandResult {
        ok: true,
        message: "Log entry recorded".to_string(),
    })
}

pub fn get_recent_logs_for_paths(paths: &AppPaths, limit: i64) -> Result<RecentLogsResult, String> {
    let normalized_limit = validate_limit(limit)?;
    let mut entries = Vec::new();
    let mut corrupted_lines = 0usize;
    let mut missing_files = 0usize;

    for file_name in LOG_FILE_NAMES {
        let log_path = logs_dir(paths).join(file_name);
        if !log_path.exists() {
            missing_files += 1;
            continue;
        }

        let (mut file_entries, corrupted) = read_log_file(&log_path, file_name)?;
        entries.append(&mut file_entries);
        corrupted_lines += corrupted;
    }

    let mut audit_entries = read_recent_audit_logs(paths, normalized_limit)?;
    entries.append(&mut audit_entries);
    entries.sort_by(|left, right| right.timestamp.cmp(&left.timestamp));
    entries.truncate(normalized_limit as usize);

    let message = if corrupted_lines > 0 || missing_files > 0 {
        format!(
            "Loaded recent logs with {corrupted_lines} corrupted line(s) ignored and {missing_files} missing log file(s)"
        )
    } else {
        "Loaded recent logs".to_string()
    };

    Ok(RecentLogsResult {
        ok: true,
        entries,
        message,
    })
}

pub fn clear_log_files_for_paths(paths: &AppPaths, confirm: String) -> Result<(), String> {
    if confirm != "CLEAR_LOCAL_LOGS" {
        return Err("Clear logs confirmation did not match".to_string());
    }

    fs::create_dir_all(logs_dir(paths))
        .map_err(|error| format!("Unable to create logs directory: {error}"))?;

    for file_name in LOG_FILE_NAMES {
        let log_path = logs_dir(paths).join(file_name);
        OpenOptions::new()
            .create(true)
            .write(true)
            .truncate(true)
            .open(&log_path)
            .map_err(|error| {
                format!(
                    "Unable to truncate log file {}: {error}",
                    path_to_string(&log_path)
                )
            })?;
    }

    write_audit_log_event(
        paths,
        "logs_cleared",
        "Local log files cleared",
        Some(serde_json::json!({
            "log_files": LOG_FILE_NAMES
        })),
    )?;

    write_log_entry(
        paths,
        &new_log_entry(
            "info",
            "diagnostics",
            "logs_cleared",
            "Local log files cleared",
            None,
        )?,
    )
}

pub fn write_log_entry(paths: &AppPaths, entry: &AppLogEntry) -> Result<(), String> {
    fs::create_dir_all(logs_dir(paths))
        .map_err(|error| format!("Unable to create logs directory: {error}"))?;

    let mut targets = vec![APP_LOG_FILE.to_string()];
    if entry.level == "error" {
        targets.push(ERRORS_LOG_FILE.to_string());
    }

    match entry.module.as_str() {
        "database" => targets.push(DATABASE_LOG_FILE.to_string()),
        "settings" => targets.push(SETTINGS_LOG_FILE.to_string()),
        "diagnostics" | "health" => targets.push(DIAGNOSTICS_LOG_FILE.to_string()),
        _ => {}
    }

    let mut unique_targets = HashSet::new();
    for file_name in targets {
        if unique_targets.insert(file_name.clone()) {
            append_json_line(&logs_dir(paths).join(file_name), entry)?;
        }
    }

    Ok(())
}

pub fn write_audit_log_event(
    paths: &AppPaths,
    event_type: &str,
    message: &str,
    metadata: Option<Value>,
) -> Result<(), String> {
    let connection = open_logging_connection(paths)?;
    let metadata_json = match metadata {
        Some(value) => Some(
            serde_json::to_string(&value)
                .map_err(|error| format!("Unable to serialize audit metadata: {error}"))?,
        ),
        None => None,
    };

    insert_audit_log(&connection, event_type, message, metadata_json)
}

pub fn count_recent_errors_for_paths(paths: &AppPaths) -> Result<usize, String> {
    let errors_path = logs_dir(paths).join(ERRORS_LOG_FILE);
    let mut count = if errors_path.exists() {
        read_log_file(&errors_path, ERRORS_LOG_FILE)?.0.len()
    } else {
        0
    };

    let connection = open_logging_connection(paths)?;
    let audit_count = connection
        .query_row(
            "
            SELECT COUNT(*)
            FROM audit_logs
            WHERE lower(event_type) LIKE '%error%'
               OR lower(message) LIKE '%error%'
            ",
            [],
            |row| row.get::<_, i64>(0),
        )
        .map_err(|error| format!("Unable to count audit log errors: {error}"))?;

    count += usize::try_from(audit_count).unwrap_or(0);
    Ok(count)
}

pub fn new_log_entry(
    level: &str,
    module: &str,
    event: &str,
    message: &str,
    metadata: Option<Value>,
) -> Result<AppLogEntry, String> {
    let level = validate_allowed("level", level, ALLOWED_LEVELS)?;
    let module = validate_allowed("module", module, ALLOWED_MODULES)?;
    let event = validate_text("event", event, MAX_EVENT_LENGTH)?;
    let message = validate_text("message", message, MAX_MESSAGE_LENGTH)?;
    validate_metadata(&metadata)?;

    Ok(AppLogEntry {
        timestamp: Utc::now().to_rfc3339(),
        level,
        module,
        event,
        message,
        metadata,
    })
}

fn ensure_log_files(paths: &AppPaths) -> Result<(), String> {
    fs::create_dir_all(logs_dir(paths))
        .map_err(|error| format!("Unable to create logs directory: {error}"))?;
    fs::create_dir_all(diagnostics_dir(paths))
        .map_err(|error| format!("Unable to create diagnostics directory: {error}"))?;

    for file_name in LOG_FILE_NAMES {
        let log_path = logs_dir(paths).join(file_name);
        OpenOptions::new()
            .create(true)
            .append(true)
            .open(&log_path)
            .map_err(|error| {
                format!(
                    "Unable to create log file {}: {error}",
                    path_to_string(&log_path)
                )
            })?;
    }

    Ok(())
}

fn append_json_line(path: &Path, entry: &AppLogEntry) -> Result<(), String> {
    let line = serde_json::to_string(entry)
        .map_err(|error| format!("Unable to serialize log entry: {error}"))?;
    let mut file = OpenOptions::new()
        .create(true)
        .append(true)
        .open(path)
        .map_err(|error| format!("Unable to open log file {}: {error}", path_to_string(path)))?;

    writeln!(file, "{line}")
        .map_err(|error| format!("Unable to write log file {}: {error}", path_to_string(path)))
}

fn read_log_file(path: &Path, source: &str) -> Result<(Vec<RecentLogEntry>, usize), String> {
    let file = File::open(path)
        .map_err(|error| format!("Unable to open log file {}: {error}", path_to_string(path)))?;
    let reader = BufReader::new(file);
    let mut entries = Vec::new();
    let mut corrupted_lines = 0usize;

    for line in reader.lines() {
        let line = line.map_err(|error| {
            format!("Unable to read log file {}: {error}", path_to_string(path))
        })?;
        if line.trim().is_empty() {
            continue;
        }

        match serde_json::from_str::<AppLogEntry>(&line) {
            Ok(entry) => entries.push(RecentLogEntry {
                source: source.to_string(),
                timestamp: entry.timestamp,
                level: entry.level,
                module: entry.module,
                event: entry.event,
                message: entry.message,
            }),
            Err(_) => corrupted_lines += 1,
        }
    }

    Ok((entries, corrupted_lines))
}

fn read_recent_audit_logs(paths: &AppPaths, limit: i64) -> Result<Vec<RecentLogEntry>, String> {
    let connection = open_logging_connection(paths)?;
    let mut statement = connection
        .prepare(
            "
            SELECT event_type, message, created_at
            FROM audit_logs
            ORDER BY id DESC
            LIMIT ?1
            ",
        )
        .map_err(|error| format!("Unable to prepare audit log query: {error}"))?;
    let rows = statement
        .query_map(params![limit], |row| {
            let event_type = row.get::<_, String>(0)?;
            let message = row.get::<_, String>(1)?;
            let created_at = row.get::<_, String>(2)?;
            Ok((event_type, message, created_at))
        })
        .map_err(|error| format!("Unable to read audit logs: {error}"))?;

    let mut entries = Vec::new();
    for row in rows {
        let (event_type, message, created_at) =
            row.map_err(|error| format!("Unable to parse audit log row: {error}"))?;
        let lower_event = event_type.to_lowercase();
        let lower_message = message.to_lowercase();
        let level = if lower_event.contains("error") || lower_message.contains("error") {
            "error"
        } else if lower_event.contains("warn") || lower_message.contains("warn") {
            "warn"
        } else {
            "info"
        };
        let module = if lower_event.contains("database") || lower_event.contains("migration") {
            "database"
        } else if lower_event.contains("setting") {
            "settings"
        } else if lower_event.contains("diagnostic") || lower_event.contains("log") {
            "diagnostics"
        } else {
            "foundation"
        };

        entries.push(RecentLogEntry {
            source: "audit_logs".to_string(),
            timestamp: created_at,
            level: level.to_string(),
            module: module.to_string(),
            event: event_type,
            message,
        });
    }

    Ok(entries)
}

fn open_logging_connection(paths: &AppPaths) -> Result<Connection, String> {
    let connection = Connection::open(&paths.database_path).map_err(|error| {
        format!(
            "Unable to open logging database at {}: {error}",
            path_to_string(&paths.database_path)
        )
    })?;

    connection
        .execute_batch("PRAGMA foreign_keys = ON;")
        .map_err(|error| format!("Unable to enable SQLite foreign keys for logging: {error}"))?;

    Ok(connection)
}

fn validate_limit(limit: i64) -> Result<i64, String> {
    if (1..=200).contains(&limit) {
        Ok(limit)
    } else {
        Err("Log limit must be between 1 and 200".to_string())
    }
}

fn validate_allowed(field: &str, value: &str, allowed: &[&str]) -> Result<String, String> {
    let normalized = value.trim().to_lowercase();
    if allowed.contains(&normalized.as_str()) {
        Ok(normalized)
    } else {
        Err(format!("Invalid {field}; allowed values: {}", allowed.join(", ")))
    }
}

fn validate_text(field: &str, value: &str, max_length: usize) -> Result<String, String> {
    let trimmed = value.trim();
    if trimmed.is_empty() {
        return Err(format!("{field} is required"));
    }

    if trimmed.chars().count() > max_length {
        return Err(format!("{field} must be {max_length} characters or fewer"));
    }

    Ok(trimmed.to_string())
}

fn validate_metadata(metadata: &Option<Value>) -> Result<(), String> {
    let Some(value) = metadata else {
        return Ok(());
    };

    if !value.is_object() {
        return Err("metadata must be an object or null".to_string());
    }

    let serialized = serde_json::to_string(value)
        .map_err(|error| format!("Unable to serialize metadata for validation: {error}"))?;
    if serialized.chars().count() > MAX_METADATA_JSON_LENGTH {
        return Err(format!(
            "metadata must serialize to {MAX_METADATA_JSON_LENGTH} characters or fewer"
        ));
    }

    Ok(())
}
