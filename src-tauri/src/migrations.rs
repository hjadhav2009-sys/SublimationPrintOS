use chrono::Utc;
use rusqlite::{params, Connection};

pub const CURRENT_SCHEMA_VERSION: i64 = 4;

pub fn run_migrations(connection: &mut Connection) -> Result<i64, String> {
    ensure_migration_table(connection)?;

    if !migration_applied(connection, 1)? {
        apply_foundation_migration(connection)?;
    }
    if !migration_applied(connection, 2)? {
        apply_upscale_queue_migration(connection)?;
    }
    if !migration_applied(connection, 3)? {
        apply_upscale_processing_migration(connection)?;
    }
    if !migration_applied(connection, 4)? {
        apply_upscale_processing_jobs_migration(connection)?;
    }

    Ok(CURRENT_SCHEMA_VERSION)
}

fn ensure_migration_table(connection: &Connection) -> Result<(), String> {
    connection
        .execute_batch(
            "
            CREATE TABLE IF NOT EXISTS schema_migrations (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                version INTEGER NOT NULL UNIQUE,
                name TEXT NOT NULL,
                applied_at TEXT NOT NULL
            );
            ",
        )
        .map_err(|error| format!("Unable to create schema_migrations table: {error}"))
}

fn migration_applied(connection: &Connection, version: i64) -> Result<bool, String> {
    connection
        .query_row(
            "SELECT EXISTS(SELECT 1 FROM schema_migrations WHERE version = ?1)",
            params![version],
            |row| row.get::<_, i64>(0),
        )
        .map(|exists| exists == 1)
        .map_err(|error| format!("Unable to check migration version {version}: {error}"))
}

fn apply_foundation_migration(connection: &mut Connection) -> Result<(), String> {
    let transaction = connection
        .transaction()
        .map_err(|error| format!("Unable to start migration transaction: {error}"))?;

    transaction
        .execute_batch(
            "
            CREATE TABLE IF NOT EXISTS app_meta (
                key TEXT PRIMARY KEY,
                value TEXT NOT NULL,
                updated_at TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS audit_logs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                event_type TEXT NOT NULL,
                message TEXT NOT NULL,
                metadata_json TEXT,
                created_at TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS settings_store (
                key TEXT PRIMARY KEY,
                value_json TEXT NOT NULL,
                updated_at TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS file_assets (
                id TEXT PRIMARY KEY,
                original_name TEXT NOT NULL,
                relative_path TEXT NOT NULL,
                asset_type TEXT NOT NULL,
                mime_type TEXT,
                size_bytes INTEGER,
                sha256 TEXT,
                created_at TEXT NOT NULL,
                updated_at TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS background_jobs (
                id TEXT PRIMARY KEY,
                job_type TEXT NOT NULL,
                status TEXT NOT NULL,
                payload_json TEXT,
                error_message TEXT,
                created_at TEXT NOT NULL,
                updated_at TEXT NOT NULL
            );
            ",
        )
        .map_err(|error| format!("Unable to apply foundation migration schema: {error}"))?;

    let applied_at = Utc::now().to_rfc3339();
    transaction
        .execute(
            "INSERT INTO schema_migrations (version, name, applied_at) VALUES (?1, ?2, ?3)",
            params![1, "foundation tables", applied_at],
        )
        .map_err(|error| format!("Unable to record foundation migration: {error}"))?;

    let metadata_json = serde_json::json!({
        "version": 1,
        "name": "foundation tables"
    })
    .to_string();

    transaction
        .execute(
            "
            INSERT INTO audit_logs (event_type, message, metadata_json, created_at)
            VALUES (?1, ?2, ?3, ?4)
            ",
            params![
                "migration_applied",
                "Applied migration 1: foundation tables",
                metadata_json,
                Utc::now().to_rfc3339()
            ],
        )
        .map_err(|error| format!("Unable to record migration audit log: {error}"))?;

    transaction
        .commit()
        .map_err(|error| format!("Unable to commit foundation migration: {error}"))
}

fn apply_upscale_queue_migration(connection: &mut Connection) -> Result<(), String> {
    let transaction = connection
        .transaction()
        .map_err(|error| format!("Unable to start migration transaction: {error}"))?;

    transaction
        .execute_batch(
            "
            CREATE TABLE IF NOT EXISTS upscale_queue_items (
                id TEXT PRIMARY KEY,
                file_asset_id TEXT NOT NULL,
                status TEXT NOT NULL,
                desired_scale_factor INTEGER NOT NULL,
                desired_output_format TEXT NOT NULL,
                source_kind TEXT NOT NULL,
                notes TEXT,
                created_at TEXT NOT NULL,
                updated_at TEXT NOT NULL,
                FOREIGN KEY(file_asset_id) REFERENCES file_assets(id)
            );

            CREATE INDEX IF NOT EXISTS idx_upscale_queue_status
                ON upscale_queue_items(status);
            CREATE INDEX IF NOT EXISTS idx_upscale_queue_created_at
                ON upscale_queue_items(created_at);
            CREATE INDEX IF NOT EXISTS idx_upscale_queue_file_asset_id
                ON upscale_queue_items(file_asset_id);
            ",
        )
        .map_err(|error| format!("Unable to apply upscale queue migration schema: {error}"))?;

    let applied_at = Utc::now().to_rfc3339();
    transaction
        .execute(
            "INSERT INTO schema_migrations (version, name, applied_at) VALUES (?1, ?2, ?3)",
            params![2, "upscale queue foundation", applied_at],
        )
        .map_err(|error| format!("Unable to record upscale queue migration: {error}"))?;

    let metadata_json = serde_json::json!({
        "version": 2,
        "name": "upscale queue foundation"
    })
    .to_string();

    transaction
        .execute(
            "
            INSERT INTO audit_logs (event_type, message, metadata_json, created_at)
            VALUES (?1, ?2, ?3, ?4)
            ",
            params![
                "migration_applied",
                "Applied migration 2: upscale queue foundation",
                metadata_json,
                Utc::now().to_rfc3339()
            ],
        )
        .map_err(|error| format!("Unable to record migration audit log: {error}"))?;

    transaction
        .commit()
        .map_err(|error| format!("Unable to commit upscale queue migration: {error}"))
}

fn apply_upscale_processing_migration(connection: &mut Connection) -> Result<(), String> {
    let transaction = connection
        .transaction()
        .map_err(|error| format!("Unable to start migration transaction: {error}"))?;

    let columns = [
        ("output_file_asset_id", "TEXT"),
        ("output_relative_path", "TEXT"),
        ("processing_started_at", "TEXT"),
        ("processing_completed_at", "TEXT"),
        ("processing_error", "TEXT"),
        ("processing_duration_ms", "INTEGER"),
        ("engine_command_preview", "TEXT"),
        ("engine_stdout_preview", "TEXT"),
        ("engine_stderr_preview", "TEXT"),
    ];

    for (column_name, column_type) in columns {
        if !table_column_exists(&transaction, "upscale_queue_items", column_name)? {
            let sql = format!("ALTER TABLE upscale_queue_items ADD COLUMN {column_name} {column_type}");
            transaction
                .execute(&sql, [])
                .map_err(|error| format!("Unable to add upscale queue column {column_name}: {error}"))?;
        }
    }

    transaction
        .execute_batch(
            "
            CREATE INDEX IF NOT EXISTS idx_upscale_queue_output_file_asset_id
                ON upscale_queue_items(output_file_asset_id);
            ",
        )
        .map_err(|error| format!("Unable to create upscale processing indexes: {error}"))?;

    let applied_at = Utc::now().to_rfc3339();
    transaction
        .execute(
            "INSERT INTO schema_migrations (version, name, applied_at) VALUES (?1, ?2, ?3)",
            params![3, "upscale processing foundation", applied_at],
        )
        .map_err(|error| format!("Unable to record upscale processing migration: {error}"))?;

    let metadata_json = serde_json::json!({
        "version": 3,
        "name": "upscale processing foundation"
    })
    .to_string();

    transaction
        .execute(
            "
            INSERT INTO audit_logs (event_type, message, metadata_json, created_at)
            VALUES (?1, ?2, ?3, ?4)
            ",
            params![
                "migration_applied",
                "Applied migration 3: upscale processing foundation",
                metadata_json,
                Utc::now().to_rfc3339()
            ],
        )
        .map_err(|error| format!("Unable to record migration audit log: {error}"))?;

    transaction
        .commit()
        .map_err(|error| format!("Unable to commit upscale processing migration: {error}"))
}

fn apply_upscale_processing_jobs_migration(connection: &mut Connection) -> Result<(), String> {
    let transaction = connection
        .transaction()
        .map_err(|error| format!("Unable to start migration transaction: {error}"))?;

    transaction
        .execute_batch(
            "
            CREATE TABLE IF NOT EXISTS upscale_processing_jobs (
                id TEXT PRIMARY KEY,
                queue_item_id TEXT NOT NULL,
                status TEXT NOT NULL,
                stage TEXT,
                progress_label TEXT,
                plan_json TEXT,
                output_relative_path TEXT,
                error_message TEXT,
                stdout_preview TEXT,
                stderr_preview TEXT,
                started_at TEXT,
                completed_at TEXT,
                created_at TEXT NOT NULL,
                updated_at TEXT NOT NULL,
                FOREIGN KEY(queue_item_id) REFERENCES upscale_queue_items(id)
            );

            CREATE INDEX IF NOT EXISTS idx_upscale_processing_jobs_status
                ON upscale_processing_jobs(status);
            CREATE INDEX IF NOT EXISTS idx_upscale_processing_jobs_queue_item_id
                ON upscale_processing_jobs(queue_item_id);
            CREATE INDEX IF NOT EXISTS idx_upscale_processing_jobs_updated_at
                ON upscale_processing_jobs(updated_at);
            ",
        )
        .map_err(|error| format!("Unable to apply upscale processing jobs migration schema: {error}"))?;

    let applied_at = Utc::now().to_rfc3339();
    transaction
        .execute(
            "INSERT INTO schema_migrations (version, name, applied_at) VALUES (?1, ?2, ?3)",
            params![4, "upscale processing jobs", applied_at],
        )
        .map_err(|error| format!("Unable to record upscale processing jobs migration: {error}"))?;

    let metadata_json = serde_json::json!({
        "version": 4,
        "name": "upscale processing jobs"
    })
    .to_string();

    transaction
        .execute(
            "
            INSERT INTO audit_logs (event_type, message, metadata_json, created_at)
            VALUES (?1, ?2, ?3, ?4)
            ",
            params![
                "migration_applied",
                "Applied migration 4: upscale processing jobs",
                metadata_json,
                Utc::now().to_rfc3339()
            ],
        )
        .map_err(|error| format!("Unable to record migration audit log: {error}"))?;

    transaction
        .commit()
        .map_err(|error| format!("Unable to commit upscale processing jobs migration: {error}"))
}

fn table_column_exists(
    connection: &Connection,
    table_name: &str,
    column_name: &str,
) -> Result<bool, String> {
    let mut statement = connection
        .prepare(&format!("PRAGMA table_info({table_name})"))
        .map_err(|error| format!("Unable to inspect table {table_name}: {error}"))?;
    let rows = statement
        .query_map([], |row| row.get::<_, String>(1))
        .map_err(|error| format!("Unable to read table {table_name} columns: {error}"))?;

    for row in rows {
        let existing = row.map_err(|error| format!("Unable to parse table column: {error}"))?;
        if existing == column_name {
            return Ok(true);
        }
    }

    Ok(false)
}
