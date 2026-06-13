use crate::app_paths::{path_to_string, AppPaths};
use crate::logging::{new_log_entry, write_audit_log_event, write_log_entry};
use chrono::{DateTime, Utc};
use serde::Serialize;
use std::fs::{self, File};
use std::path::{Path, PathBuf};
use std::process::{Command, Stdio};
use std::thread;
use std::time::{Duration, Instant, SystemTime};

const WINDOWS_BINARY_NAME: &str = "realesrgan-ncnn-vulkan.exe";
const UNIX_BINARY_NAME: &str = "realesrgan-ncnn-vulkan";
const VERSION_JSON_NAME: &str = "version.json";
const MODELS_DIR_NAME: &str = "models";
const TEST_INPUT_NAME: &str = "test-input.png";
const TEST_OUTPUT_NAME: &str = "test-output.png";
const HELP_TIMEOUT_SECONDS: u64 = 5;
const TEST_TIMEOUT_SECONDS: u64 = 60;

#[derive(Debug, Clone, Serialize)]
pub struct EngineBinaryStatus {
    pub exists: bool,
    pub path: String,
    pub file_name: String,
    pub size_bytes: Option<u64>,
    pub last_modified: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
pub struct EngineModelStatus {
    pub models_dir_exists: bool,
    pub models_dir: String,
    pub model_files_count: usize,
    pub has_param_file: bool,
    pub has_bin_file: bool,
    pub sample_files: Vec<String>,
}

#[derive(Debug, Clone, Serialize)]
pub struct EngineDiscoveryStatus {
    pub ok: bool,
    pub engine_dir: String,
    pub binary: Option<EngineBinaryStatus>,
    pub models: EngineModelStatus,
    pub version_json_exists: bool,
    pub can_run_basic_command: bool,
    pub detected_version_text: Option<String>,
    pub message: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct EngineTestRunResult {
    pub ok: bool,
    pub attempted: bool,
    pub command_preview: String,
    pub exit_code: Option<i32>,
    pub stdout_preview: String,
    pub stderr_preview: String,
    pub output_file: Option<String>,
    pub message: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct EngineExpectedLayout {
    pub engine_dir: String,
    pub expected_binary_path: String,
    pub expected_models_dir: String,
    pub expected_version_json: String,
    pub expected_test_input_path: String,
    pub expected_test_output_path: String,
    pub instructions: Vec<String>,
}

#[derive(Debug, Clone)]
pub struct EnginePaths {
    pub engine_dir: PathBuf,
    pub binary_path: PathBuf,
    pub models_dir: PathBuf,
    pub version_json: PathBuf,
    pub test_input: PathBuf,
    pub test_output: PathBuf,
}

struct CommandRunResult {
    exit_code: Option<i32>,
    stdout_preview: String,
    stderr_preview: String,
    timed_out: bool,
}

pub fn engine_paths(paths: &AppPaths) -> EnginePaths {
    let engine_dir = paths
        .app_data_dir
        .join("models")
        .join("realesrgan");
    EnginePaths {
        binary_path: engine_dir.join(expected_binary_file_name()),
        models_dir: engine_dir.join(MODELS_DIR_NAME),
        version_json: engine_dir.join(VERSION_JSON_NAME),
        test_input: engine_dir.join(TEST_INPUT_NAME),
        test_output: engine_dir.join(TEST_OUTPUT_NAME),
        engine_dir,
    }
}

pub fn discover_realesrgan_engine_for_paths(
    paths: &AppPaths,
) -> Result<EngineDiscoveryStatus, String> {
    let status = discover_realesrgan_engine_for_paths_internal(paths)?;
    write_log_entry(
        paths,
        &new_log_entry(
            "info",
            "diagnostics",
            "realesrgan_discovery_checked",
            "Real-ESRGAN discovery checked",
            Some(serde_json::json!({
                "ok": status.ok,
                "binary_exists": status.binary.as_ref().map(|binary| binary.exists).unwrap_or(false),
                "models_dir_exists": status.models.models_dir_exists
            })),
        )?,
    )?;
    write_audit_log_event(
        paths,
        "realesrgan_discovery_checked",
        "Real-ESRGAN discovery checked",
        Some(serde_json::json!({
            "ok": status.ok,
            "can_run_basic_command": status.can_run_basic_command
        })),
    )?;

    Ok(status)
}

pub fn get_realesrgan_expected_layout_for_paths(
    paths: &AppPaths,
) -> Result<EngineExpectedLayout, String> {
    let engine_paths = engine_paths(paths);
    Ok(EngineExpectedLayout {
        engine_dir: path_to_string(&engine_paths.engine_dir),
        expected_binary_path: path_to_string(&engine_paths.binary_path),
        expected_models_dir: path_to_string(&engine_paths.models_dir),
        expected_version_json: path_to_string(&engine_paths.version_json),
        expected_test_input_path: path_to_string(&engine_paths.test_input),
        expected_test_output_path: path_to_string(&engine_paths.test_output),
        instructions: vec![
            "Place Real-ESRGAN ncnn Vulkan binary in models/realesrgan/.".to_string(),
            "Place model files inside models/realesrgan/models/.".to_string(),
            "Optional safe test input should be named test-input.png.".to_string(),
            "The app will not download binaries automatically in Phase 0.".to_string(),
        ],
    })
}

pub fn run_realesrgan_safe_test_for_paths(
    paths: &AppPaths,
) -> Result<EngineTestRunResult, String> {
    let engine_paths = engine_paths(paths);
    let command_preview = format!(
        "{} -i {} -o {} -s 2",
        path_to_string(&engine_paths.binary_path),
        TEST_INPUT_NAME,
        TEST_OUTPUT_NAME
    );

    if !engine_paths.binary_path.is_file() {
        return Ok(not_attempted_result(
            command_preview,
            "Real-ESRGAN binary is missing",
        ));
    }

    if !engine_paths.models_dir.is_dir() {
        return Ok(not_attempted_result(
            command_preview,
            "Real-ESRGAN models directory is missing",
        ));
    }

    if !engine_paths.test_input.is_file() {
        return Ok(not_attempted_result(
            command_preview,
            "Safe test input test-input.png is missing",
        ));
    }

    if engine_paths.test_output.exists() {
        fs::remove_file(&engine_paths.test_output).map_err(|error| {
            format!(
                "Unable to remove previous safe test output {}: {error}",
                path_to_string(&engine_paths.test_output)
            )
        })?;
    }

    write_log_entry(
        paths,
        &new_log_entry(
            "info",
            "diagnostics",
            "realesrgan_safe_test_started",
            "Real-ESRGAN safe test started",
            Some(serde_json::json!({
                "scale": 2,
                "input": TEST_INPUT_NAME,
                "output": TEST_OUTPUT_NAME
            })),
        )?,
    )?;
    write_audit_log_event(
        paths,
        "realesrgan_safe_test_started",
        "Real-ESRGAN safe test started",
        None,
    )?;

    let run_result = run_fixed_command(
        &engine_paths.binary_path,
        &engine_paths.engine_dir,
        &["-i", TEST_INPUT_NAME, "-o", TEST_OUTPUT_NAME, "-s", "2"],
        TEST_TIMEOUT_SECONDS,
        4000,
    )?;
    let output_exists = engine_paths.test_output.is_file();
    let ok = !run_result.timed_out
        && run_result.exit_code == Some(0)
        && output_exists;
    let event = if ok {
        "realesrgan_safe_test_completed"
    } else {
        "realesrgan_safe_test_failed"
    };
    let message = if ok {
        "Real-ESRGAN safe test completed"
    } else if run_result.timed_out {
        "Real-ESRGAN safe test timed out"
    } else {
        "Real-ESRGAN safe test failed"
    };

    write_log_entry(
        paths,
        &new_log_entry(
            if ok { "info" } else { "warn" },
            "diagnostics",
            event,
            message,
            Some(serde_json::json!({
                "exit_code": run_result.exit_code,
                "output_exists": output_exists
            })),
        )?,
    )?;
    write_audit_log_event(
        paths,
        event,
        message,
        Some(serde_json::json!({
            "exit_code": run_result.exit_code,
            "output_exists": output_exists
        })),
    )?;

    Ok(EngineTestRunResult {
        ok,
        attempted: true,
        command_preview,
        exit_code: run_result.exit_code,
        stdout_preview: run_result.stdout_preview,
        stderr_preview: run_result.stderr_preview,
        output_file: output_exists.then(|| path_to_string(&engine_paths.test_output)),
        message: message.to_string(),
    })
}

pub fn clear_realesrgan_test_output_for_paths(
    paths: &AppPaths,
) -> Result<EngineDiscoveryStatus, String> {
    let engine_paths = engine_paths(paths);
    if engine_paths.test_output.exists() {
        fs::remove_file(&engine_paths.test_output).map_err(|error| {
            format!(
                "Unable to delete safe test output {}: {error}",
                path_to_string(&engine_paths.test_output)
            )
        })?;
    }

    discover_realesrgan_engine_for_paths(paths)
}

pub fn discover_realesrgan_engine_for_paths_internal(
    paths: &AppPaths,
) -> Result<EngineDiscoveryStatus, String> {
    let engine_paths = engine_paths(paths);
    fs::create_dir_all(&engine_paths.engine_dir).map_err(|error| {
        format!(
            "Unable to create Real-ESRGAN engine directory {}: {error}",
            path_to_string(&engine_paths.engine_dir)
        )
    })?;

    let binary_status = binary_status(&engine_paths.binary_path);
    let binary_exists = binary_status.exists;
    let models = model_status(&engine_paths.models_dir)?;
    let version_json_exists = engine_paths.version_json.is_file();
    let version_text = if version_json_exists {
        fs::read_to_string(&engine_paths.version_json)
            .ok()
            .map(|content| preview_text(&content, 2000))
    } else {
        None
    };

    let mut can_run_basic_command = false;
    let mut detected_version_text = version_text;
    if binary_exists {
        match run_fixed_command(
            &engine_paths.binary_path,
            &engine_paths.engine_dir,
            &["-h"],
            HELP_TIMEOUT_SECONDS,
            2000,
        ) {
            Ok(result) => {
                can_run_basic_command = !result.timed_out && result.exit_code.is_some();
                if detected_version_text.is_none() {
                    detected_version_text = first_non_empty_preview(
                        &result.stdout_preview,
                        &result.stderr_preview,
                    );
                }
            }
            Err(error) => {
                detected_version_text = Some(format!("Help command could not run: {error}"));
            }
        }
    }

    let model_files_ready = models.models_dir_exists && models.has_param_file && models.has_bin_file;
    let ok = binary_exists && model_files_ready && can_run_basic_command;
    let message = if ok {
        "Real-ESRGAN engine discovered".to_string()
    } else if !binary_exists {
        "Real-ESRGAN binary is missing. Place the ncnn Vulkan binary in the engine directory.".to_string()
    } else if !models.models_dir_exists {
        "Real-ESRGAN models directory is missing.".to_string()
    } else if !model_files_ready {
        "Real-ESRGAN model files are missing. Place model files inside the managed models folder.".to_string()
    } else {
        "Real-ESRGAN binary exists but basic help command did not complete successfully.".to_string()
    };

    Ok(EngineDiscoveryStatus {
        ok,
        engine_dir: path_to_string(&engine_paths.engine_dir),
        binary: Some(binary_status),
        models,
        version_json_exists,
        can_run_basic_command,
        detected_version_text,
        message,
    })
}

fn binary_status(path: &Path) -> EngineBinaryStatus {
    match fs::metadata(path) {
        Ok(metadata) => EngineBinaryStatus {
            exists: metadata.is_file(),
            path: path_to_string(path),
            file_name: expected_binary_file_name().to_string(),
            size_bytes: Some(metadata.len()),
            last_modified: metadata.modified().ok().map(system_time_to_rfc3339),
        },
        Err(_) => EngineBinaryStatus {
            exists: false,
            path: path_to_string(path),
            file_name: expected_binary_file_name().to_string(),
            size_bytes: None,
            last_modified: None,
        },
    }
}

fn model_status(models_dir: &Path) -> Result<EngineModelStatus, String> {
    if !models_dir.is_dir() {
        return Ok(EngineModelStatus {
            models_dir_exists: false,
            models_dir: path_to_string(models_dir),
            model_files_count: 0,
            has_param_file: false,
            has_bin_file: false,
            sample_files: Vec::new(),
        });
    }

    let mut sample_files = Vec::new();
    let mut model_files_count = 0usize;
    let mut has_param_file = false;
    let mut has_bin_file = false;
    for entry in fs::read_dir(models_dir)
        .map_err(|error| format!("Unable to read models directory: {error}"))?
    {
        let entry = entry.map_err(|error| format!("Unable to inspect model file: {error}"))?;
        let path = entry.path();
        let metadata = fs::symlink_metadata(&path)
            .map_err(|error| format!("Unable to inspect model file metadata: {error}"))?;
        let file_type = metadata.file_type();
        if file_type.is_symlink() || !file_type.is_file() {
            continue;
        }

        model_files_count += 1;
        if sample_files.len() < 8 {
            sample_files.push(entry.file_name().to_string_lossy().into_owned());
        }

        match path
            .extension()
            .and_then(|extension| extension.to_str())
            .map(|extension| extension.to_lowercase())
            .as_deref()
        {
            Some("param") => has_param_file = true,
            Some("bin") => has_bin_file = true,
            _ => {}
        }
    }

    Ok(EngineModelStatus {
        models_dir_exists: true,
        models_dir: path_to_string(models_dir),
        model_files_count,
        has_param_file,
        has_bin_file,
        sample_files,
    })
}

fn run_fixed_command(
    executable: &Path,
    current_dir: &Path,
    args: &[&str],
    timeout_seconds: u64,
    preview_limit: usize,
) -> Result<CommandRunResult, String> {
    let stdout_path = current_dir.join(".spos-engine-stdout.tmp");
    let stderr_path = current_dir.join(".spos-engine-stderr.tmp");
    let stdout_file = File::create(&stdout_path)
        .map_err(|error| format!("Unable to create engine stdout temp file: {error}"))?;
    let stderr_file = File::create(&stderr_path)
        .map_err(|error| format!("Unable to create engine stderr temp file: {error}"))?;

    let mut command = Command::new(executable);
    command
        .args(args)
        .current_dir(current_dir)
        .stdin(Stdio::null())
        .stdout(Stdio::from(stdout_file))
        .stderr(Stdio::from(stderr_file));

    #[cfg(windows)]
    {
        use std::os::windows::process::CommandExt;
        command.creation_flags(0x08000000);
    }

    let mut child = command
        .spawn()
        .map_err(|error| format!("Unable to start Real-ESRGAN command: {error}"))?;
    let started_at = Instant::now();
    let mut timed_out = false;
    let exit_code = loop {
        if let Some(status) = child
            .try_wait()
            .map_err(|error| format!("Unable to monitor Real-ESRGAN command: {error}"))?
        {
            break status.code();
        }

        if started_at.elapsed() >= Duration::from_secs(timeout_seconds) {
            timed_out = true;
            let _ = child.kill();
            let status = child
                .wait()
                .map_err(|error| format!("Unable to stop timed out Real-ESRGAN command: {error}"))?;
            break status.code();
        }

        thread::sleep(Duration::from_millis(100));
    };

    let stdout_preview = fs::read_to_string(&stdout_path)
        .map(|content| preview_text(&content, preview_limit))
        .unwrap_or_default();
    let stderr_preview = fs::read_to_string(&stderr_path)
        .map(|content| preview_text(&content, preview_limit))
        .unwrap_or_default();
    let _ = fs::remove_file(stdout_path);
    let _ = fs::remove_file(stderr_path);

    Ok(CommandRunResult {
        exit_code,
        stdout_preview,
        stderr_preview,
        timed_out,
    })
}

fn not_attempted_result(command_preview: String, message: &str) -> EngineTestRunResult {
    EngineTestRunResult {
        ok: false,
        attempted: false,
        command_preview,
        exit_code: None,
        stdout_preview: String::new(),
        stderr_preview: String::new(),
        output_file: None,
        message: message.to_string(),
    }
}

fn expected_binary_file_name() -> &'static str {
    if cfg!(windows) {
        WINDOWS_BINARY_NAME
    } else {
        UNIX_BINARY_NAME
    }
}

fn first_non_empty_preview(stdout: &str, stderr: &str) -> Option<String> {
    let stdout = stdout.trim();
    if !stdout.is_empty() {
        return Some(stdout.to_string());
    }

    let stderr = stderr.trim();
    if !stderr.is_empty() {
        return Some(stderr.to_string());
    }

    None
}

fn preview_text(value: &str, limit: usize) -> String {
    value.chars().take(limit).collect()
}

fn system_time_to_rfc3339(system_time: SystemTime) -> String {
    DateTime::<Utc>::from(system_time).to_rfc3339()
}
