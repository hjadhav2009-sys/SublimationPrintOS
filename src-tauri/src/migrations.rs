use chrono::Utc;
use rusqlite::{params, Connection};

pub const CURRENT_SCHEMA_VERSION: i64 = 1;

pub fn run_migrations(connection: &mut Connection) -> Result<i64, String> {
    ensure_migration_table(connection)?;

    if !migration_applied(connection, CURRENT_SCHEMA_VERSION)? {
        apply_foundation_migration(connection)?;
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
            params![CURRENT_SCHEMA_VERSION, "foundation tables", applied_at],
        )
        .map_err(|error| format!("Unable to record foundation migration: {error}"))?;

    let metadata_json = serde_json::json!({
        "version": CURRENT_SCHEMA_VERSION,
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
