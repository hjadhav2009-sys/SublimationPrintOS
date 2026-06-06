mod commands;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            commands::get_app_version,
            commands::get_phase_info,
            commands::ping_backend
        ])
        .run(tauri::generate_context!())
        .expect("error while running SublimationPrintOS");
}
