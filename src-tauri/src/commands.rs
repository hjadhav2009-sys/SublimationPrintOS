use serde::Serialize;

#[derive(Serialize)]
pub struct PhaseInfo {
    phase: String,
    name: String,
    status: String,
    local_first: bool,
}

#[tauri::command]
pub fn get_app_version() -> String {
    env!("CARGO_PKG_VERSION").to_string()
}

#[tauri::command]
pub fn get_phase_info() -> PhaseInfo {
    PhaseInfo {
        phase: "Phase 0".to_string(),
        name: "Foundation".to_string(),
        status: "Scaffold only".to_string(),
        local_first: true,
    }
}

#[tauri::command]
pub fn ping_backend() -> String {
    "pong".to_string()
}
