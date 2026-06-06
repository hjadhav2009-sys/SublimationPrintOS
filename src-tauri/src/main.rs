mod app_paths;
mod commands;
mod database;
mod migrations;
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
            commands::validate_app_settings
        ])
        .run(tauri::generate_context!())
        .expect("error while running SublimationPrintOS");
}
