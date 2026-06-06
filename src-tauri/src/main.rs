mod app_paths;
mod commands;
mod database;
mod diagnostics;
mod logging;
mod migrations;
mod recovery;
mod settings;
mod storage;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            commands::get_app_version,
            commands::get_phase_info,
            commands::ping_backend,
            commands::initialize_foundation,
            commands::get_storage_status,
            commands::get_database_status,
            commands::run_database_health_check,
            commands::get_required_app_folders,
            commands::get_app_settings,
            commands::save_app_settings,
            commands::reset_app_settings,
            commands::get_settings_summary,
            commands::validate_app_settings,
            commands::initialize_logging,
            commands::record_frontend_event,
            commands::get_recent_logs,
            commands::get_diagnostics_summary,
            commands::create_diagnostic_report,
            commands::clear_log_files,
            commands::initialize_recovery,
            commands::update_recovery_heartbeat,
            commands::mark_recovery_clean_shutdown,
            commands::get_recovery_status,
            commands::create_recovery_snapshot,
            commands::dismiss_previous_recovery_warning,
            commands::clear_recovery_snapshots
        ])
        .run(tauri::generate_context!())
        .expect("error while running SublimationPrintOS");
}
