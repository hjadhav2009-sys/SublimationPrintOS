mod app_paths;
mod commands;
mod database;
mod diagnostics;
mod engine;
mod health;
mod logging;
mod migrations;
mod recovery;
mod settings;
mod shell_actions;
mod storage;
mod updates;

use tauri::menu::{Menu, MenuItem, PredefinedMenuItem, Submenu};
use tauri::{Emitter, Manager, WindowEvent};

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let dashboard = MenuItem::with_id(app, "menu_dashboard", "Home", true, None::<&str>)?;
            let settings = MenuItem::with_id(app, "menu_settings", "Settings", true, None::<&str>)?;
            let health = MenuItem::with_id(app, "menu_health", "System Health", true, None::<&str>)?;
            let logs = MenuItem::with_id(app, "menu_logs", "Logs & Diagnostics", true, None::<&str>)?;
            let recovery_snapshot = MenuItem::with_id(
                app,
                "menu_create_recovery_snapshot",
                "Create Recovery Snapshot",
                true,
                None::<&str>,
            )?;
            let quit = MenuItem::with_id(app, "menu_quit", "Quit", true, None::<&str>)?;
            let upscale_factory =
                MenuItem::with_id(app, "menu_upscale_factory", "Upscale Factory", true, None::<&str>)?;
            let discover_engine = MenuItem::with_id(
                app,
                "menu_discover_engine",
                "Discover Real-ESRGAN Engine",
                true,
                None::<&str>,
            )?;
            let advanced_health = MenuItem::with_id(
                app,
                "menu_run_advanced_health",
                "Run Advanced Health Check",
                true,
                None::<&str>,
            )?;
            let offline_updates =
                MenuItem::with_id(app, "menu_offline_updates", "Offline Updates", true, None::<&str>)?;
            let shortcuts =
                MenuItem::with_id(app, "menu_shortcuts", "Keyboard Shortcuts", true, None::<&str>)?;
            let alpha_checklist =
                MenuItem::with_id(app, "menu_alpha_checklist", "Alpha 0 Checklist", true, None::<&str>)?;
            let about = MenuItem::with_id(app, "menu_about", "About SublimationPrintOS", true, None::<&str>)?;

            let file_menu = Submenu::with_items(
                app,
                "File",
                true,
                &[
                    &dashboard,
                    &settings,
                    &health,
                    &logs,
                    &PredefinedMenuItem::separator(app)?,
                    &recovery_snapshot,
                    &PredefinedMenuItem::separator(app)?,
                    &quit,
                ],
            )?;
            let tools_menu = Submenu::with_items(
                app,
                "Tools",
                true,
                &[
                    &upscale_factory,
                    &discover_engine,
                    &advanced_health,
                    &offline_updates,
                ],
            )?;
            let help_menu =
                Submenu::with_items(app, "Help", true, &[&shortcuts, &alpha_checklist, &about])?;
            let menu = Menu::with_items(app, &[&file_menu, &tools_menu, &help_menu])?;
            app.set_menu(menu)?;
            Ok(())
        })
        .on_menu_event(|app, event| {
            let id = event.id().as_ref();
            match id {
                "menu_dashboard" => emit_menu_event(app, "dashboard"),
                "menu_settings" => emit_menu_event(app, "settings"),
                "menu_health" => emit_menu_event(app, "health"),
                "menu_logs" => emit_menu_event(app, "logs"),
                "menu_upscale_factory" => emit_menu_event(app, "upscale"),
                "menu_discover_engine" => emit_menu_event(app, "discover_engine"),
                "menu_run_advanced_health" => emit_menu_event(app, "run_advanced_health"),
                "menu_offline_updates" => emit_menu_event(app, "updates"),
                "menu_shortcuts" => emit_menu_event(app, "shortcuts"),
                "menu_alpha_checklist" => emit_menu_event(app, "alphaChecklist"),
                "menu_about" => emit_menu_event(app, "about"),
                "menu_create_recovery_snapshot" => {
                    emit_menu_event(app, "create_recovery_snapshot");
                }
                "menu_quit" => {
                    let _ = commands::mark_recovery_clean_shutdown(app.clone());
                    app.exit(0);
                }
                _ => {}
            }
        })
        .on_window_event(|window, event| {
            if matches!(event, WindowEvent::CloseRequested { .. }) {
                let _ = commands::mark_recovery_clean_shutdown(window.app_handle().clone());
            }
        })
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
            commands::clear_recovery_snapshots,
            commands::discover_realesrgan_engine,
            commands::get_realesrgan_expected_layout,
            commands::run_realesrgan_safe_test,
            commands::clear_realesrgan_test_output,
            commands::run_advanced_health_check,
            commands::open_managed_folder,
            commands::get_managed_folder_paths,
            commands::get_offline_update_status,
            commands::validate_offline_update_package,
            commands::stage_offline_update_package,
            commands::clear_staged_update,
            commands::create_sample_update_manifest
        ])
        .run(tauri::generate_context!())
        .expect("error while running SublimationPrintOS");
}

fn emit_menu_event(app: &tauri::AppHandle, action: &str) {
    let _ = app.emit("spos-menu-event", action);
}
