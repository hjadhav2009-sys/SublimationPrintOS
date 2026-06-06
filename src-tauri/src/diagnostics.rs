use crate::app_paths::{path_to_string, AppPaths};
use crate::database::get_database_status_for_paths;
use crate::logging::{
    count_recent_errors_for_paths, diagnostics_dir, get_recent_logs_for_paths, logs_dir,
    new_log_entry, write_audit_log_event, write_log_entry, LOG_FILE_NAMES,
};
use crate::settings::get_settings_summary_for_paths;
use crate::storage::get_storage_status_for_paths;
use chrono::{DateTime, Utc};
use serde::Serialize;
use std::fs;
use std::path::Path;
use std::time::SystemTime;

#[derive(Debug, Clone, Serialize)]
pub struct DiagnosticLogFileStatus {
    pub file_name: String,
    pub exists: bool,
    pub size_bytes: u64,
    pub last_modified: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
pub struct DiagnosticsSummary {
    pub ok: bool,
    pub app_data_dir: String,
    pub database_path: String,
    pub logs_dir: String,
    pub diagnostics_dir: String,
    pub log_files: Vec<DiagnosticLogFileStatus>,
    pub schema_version: Option<i64>,
    pub settings_available: bool,
    pub recent_error_count: usize,
    pub message: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct DiagnosticReportResult {
    pub ok: bool,
    pub report_dir: String,
    pub files_written: Vec<String>,
    pub message: String,
}

pub fn get_diagnostics_summary_for_paths(paths: &AppPaths) -> Result<DiagnosticsSummary, String> {
    let database_status = get_database_status_for_paths(paths);
    let log_files = log_file_statuses(paths);
    let all_log_files_exist = log_files.iter().all(|status| status.exists);
    let settings_available = get_settings_summary_for_paths(paths).is_ok();
    let recent_error_count = count_recent_errors_for_paths(paths)?;
    let logs_path = logs_dir(paths);
    let diagnostics_path = diagnostics_dir(paths);
    let ok = logs_path.is_dir()
        && diagnostics_path.is_dir()
        && all_log_files_exist
        && database_status.can_open
        && settings_available;

    Ok(DiagnosticsSummary {
        ok,
        app_data_dir: path_to_string(&paths.app_data_dir),
        database_path: path_to_string(&paths.database_path),
        logs_dir: path_to_string(&logs_path),
        diagnostics_dir: path_to_string(&diagnostics_path),
        log_files,
        schema_version: database_status.schema_version,
        settings_available,
        recent_error_count,
        message: if ok {
            "Diagnostics ready".to_string()
        } else {
            "Diagnostics foundation needs initialization or attention".to_string()
        },
    })
}

pub fn create_diagnostic_report_for_paths(
    paths: &AppPaths,
) -> Result<DiagnosticReportResult, String> {
    let report_dir = diagnostics_dir(paths).join(format!(
        "report-{}",
        Utc::now().format("%Y%m%d-%H%M%S")
    ));
    fs::create_dir_all(&report_dir).map_err(|error| {
        format!(
            "Unable to create diagnostics report directory {}: {error}",
            path_to_string(&report_dir)
        )
    })?;

    let report_event_metadata = serde_json::json!({
        "report_dir": path_to_string(&report_dir),
        "safe_files_only": true
    });
    write_audit_log_event(
        paths,
        "diagnostic_report_created",
        "Diagnostic report folder created",
        Some(report_event_metadata.clone()),
    )?;
    write_log_entry(
        paths,
        &new_log_entry(
            "info",
            "diagnostics",
            "diagnostic_report_created",
            "Diagnostic report folder created",
            Some(report_event_metadata),
        )?,
    )?;

    let diagnostics_summary = get_diagnostics_summary_for_paths(paths)?;
    let database_status = get_database_status_for_paths(paths);
    let storage_status = get_storage_status_for_paths(paths);
    let settings_summary = match get_settings_summary_for_paths(paths) {
        Ok(summary) => serde_json::json!({
            "ok": true,
            "summary": summary
        }),
        Err(error) => serde_json::json!({
            "ok": false,
            "message": error
        }),
    };
    let recent_logs = get_recent_logs_for_paths(paths, 50)?;
    let system_summary = serde_json::json!({
        "app_name": "SublimationPrintOS",
        "phase": "Phase 0",
        "generated_at": Utc::now().to_rfc3339(),
        "local_only": true,
        "safety_exclusions": [
            "assets/raw",
            "assets/upscaled",
            "assets/approved",
            "assets/rejected",
            "assets/thumbnails",
            "app.db",
            "environment variables",
            "secrets"
        ]
    });

    let mut files_written = Vec::new();
    write_json_file(&report_dir, "system-summary.json", &system_summary, &mut files_written)?;
    write_json_file(
        &report_dir,
        "diagnostics-summary.json",
        &diagnostics_summary,
        &mut files_written,
    )?;
    write_json_file(
        &report_dir,
        "database-status.json",
        &database_status,
        &mut files_written,
    )?;
    write_json_file(
        &report_dir,
        "storage-status.json",
        &storage_status,
        &mut files_written,
    )?;
    write_json_file(
        &report_dir,
        "settings-summary.json",
        &settings_summary,
        &mut files_written,
    )?;
    write_json_file(&report_dir, "recent-logs.json", &recent_logs, &mut files_written)?;
    write_text_file(&report_dir, "README.txt", report_readme_text(), &mut files_written)?;

    Ok(DiagnosticReportResult {
        ok: true,
        report_dir: path_to_string(&report_dir),
        files_written,
        message: "Diagnostic report folder created".to_string(),
    })
}

fn log_file_statuses(paths: &AppPaths) -> Vec<DiagnosticLogFileStatus> {
    LOG_FILE_NAMES
        .iter()
        .map(|file_name| log_file_status(file_name, &logs_dir(paths).join(file_name)))
        .collect()
}

fn log_file_status(file_name: &str, path: &Path) -> DiagnosticLogFileStatus {
    match fs::metadata(path) {
        Ok(metadata) => DiagnosticLogFileStatus {
            file_name: file_name.to_string(),
            exists: metadata.is_file(),
            size_bytes: metadata.len(),
            last_modified: metadata.modified().ok().map(system_time_to_rfc3339),
        },
        Err(_) => DiagnosticLogFileStatus {
            file_name: file_name.to_string(),
            exists: false,
            size_bytes: 0,
            last_modified: None,
        },
    }
}

fn write_json_file<T>(
    report_dir: &Path,
    file_name: &str,
    value: &T,
    files_written: &mut Vec<String>,
) -> Result<(), String>
where
    T: Serialize,
{
    let content = serde_json::to_string_pretty(value)
        .map_err(|error| format!("Unable to serialize {file_name}: {error}"))?;
    write_report_file(report_dir, file_name, content.as_bytes(), files_written)
}

fn write_text_file(
    report_dir: &Path,
    file_name: &str,
    content: &str,
    files_written: &mut Vec<String>,
) -> Result<(), String> {
    write_report_file(report_dir, file_name, content.as_bytes(), files_written)
}

fn write_report_file(
    report_dir: &Path,
    file_name: &str,
    content: &[u8],
    files_written: &mut Vec<String>,
) -> Result<(), String> {
    let path = report_dir.join(file_name);
    fs::write(&path, content)
        .map_err(|error| format!("Unable to write report file {file_name}: {error}"))?;
    files_written.push(file_name.to_string());
    Ok(())
}

fn report_readme_text() -> &'static str {
    "SublimationPrintOS Phase 0 diagnostic report.\n\nThis folder contains only safe text and JSON diagnostic files.\nIt intentionally excludes user images, design files, thumbnails, app.db, environment variables, secrets, and cloud telemetry.\nZIP export and open-folder actions are not implemented in this phase.\n"
}

fn system_time_to_rfc3339(system_time: SystemTime) -> String {
    DateTime::<Utc>::from(system_time).to_rfc3339()
}
