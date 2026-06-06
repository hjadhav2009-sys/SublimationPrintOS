use crate::app_paths::{path_to_string, AppPaths};
use crate::migrations::run_migrations;
use chrono::Utc;
use rusqlite::{params, Connection};
use serde::Serialize;

#[derive(Debug, Clone, Serialize)]
pub struct DatabaseStatus {
    pub ok: bool,
    pub database_path: String,
    pub database_exists: bool,
    pub can_open: bool,
    pub schema_version: Option<i64>,
    pub journal_mode: Option<String>,
    pub wal_mode: bool,
    pub integrity_check: Option<String>,
    pub message: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct DatabaseHealthCheckItem {
    pub key: String,
    pub label: String,
    pub status: String,
    pub message: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct DatabaseHealthCheck {
    pub ok: bool,
    pub database_path: String,
    pub checks: Vec<DatabaseHealthCheckItem>,
    pub message: String,
}

pub fn initialize_database(paths: &AppPaths) -> Result<i64, String> {
    let mut connection = open_database(paths)?;
    configure_connection(&connection)?;
    let schema_version = run_migrations(&mut connection)?;
    upsert_app_meta(&connection, schema_version)?;
    insert_audit_log(
        &connection,
        "foundation_initialized",
        "Foundation initialized",
        Some(
            serde_json::json!({
                "schema_version": schema_version,
                "local_first": true
            })
            .to_string(),
        ),
    )?;

    Ok(schema_version)
}

pub fn get_database_status_for_paths(paths: &AppPaths) -> DatabaseStatus {
    if !paths.database_path.exists() {
        return DatabaseStatus {
            ok: false,
            database_path: path_to_string(&paths.database_path),
            database_exists: false,
            can_open: false,
            schema_version: None,
            journal_mode: None,
            wal_mode: false,
            integrity_check: None,
            message: "Database file does not exist yet".to_string(),
        };
    }

    let connection = match Connection::open(&paths.database_path) {
        Ok(connection) => connection,
        Err(error) => {
            return DatabaseStatus {
                ok: false,
                database_path: path_to_string(&paths.database_path),
                database_exists: true,
                can_open: false,
                schema_version: None,
                journal_mode: None,
                wal_mode: false,
                integrity_check: None,
                message: format!("Unable to open database: {error}"),
            };
        }
    };

    let schema_version = current_schema_version(&connection).ok().flatten();
    let journal_mode = query_journal_mode(&connection).ok();
    let wal_mode = journal_mode
        .as_ref()
        .map(|mode| mode.eq_ignore_ascii_case("wal"))
        .unwrap_or(false);
    let integrity_check = integrity_check(&connection).ok();
    let integrity_ok = integrity_check
        .as_ref()
        .map(|result| result.eq_ignore_ascii_case("ok"))
        .unwrap_or(false);
    let ok = schema_version.is_some() && wal_mode && integrity_ok;
    let message = if ok {
        "Database ready".to_string()
    } else {
        "Database exists but one or more checks did not pass".to_string()
    };

    DatabaseStatus {
        ok,
        database_path: path_to_string(&paths.database_path),
        database_exists: true,
        can_open: true,
        schema_version,
        journal_mode,
        wal_mode,
        integrity_check,
        message,
    }
}

pub fn run_database_health_check_for_paths(paths: &AppPaths) -> DatabaseHealthCheck {
    let mut checks = Vec::new();

    if !paths.database_path.exists() {
        checks.push(check(
            "database_exists",
            "SQLite database exists",
            "fail",
            "app.db does not exist yet",
        ));
        return DatabaseHealthCheck {
            ok: false,
            database_path: path_to_string(&paths.database_path),
            checks,
            message: "Database health check failed".to_string(),
        };
    }

    let connection = match Connection::open(&paths.database_path) {
        Ok(connection) => {
            checks.push(check(
                "database_opens",
                "SQLite opens successfully",
                "pass",
                "Database connection opened",
            ));
            connection
        }
        Err(error) => {
            checks.push(check(
                "database_opens",
                "SQLite opens successfully",
                "fail",
                &format!("Unable to open database: {error}"),
            ));
            return DatabaseHealthCheck {
                ok: false,
                database_path: path_to_string(&paths.database_path),
                checks,
                message: "Database health check failed".to_string(),
            };
        }
    };

    match integrity_check(&connection) {
        Ok(result) if result.eq_ignore_ascii_case("ok") => checks.push(check(
            "integrity_check",
            "SQLite integrity_check",
            "pass",
            "integrity_check returned ok",
        )),
        Ok(result) => checks.push(check(
            "integrity_check",
            "SQLite integrity_check",
            "fail",
            &format!("integrity_check returned {result}"),
        )),
        Err(error) => checks.push(check(
            "integrity_check",
            "SQLite integrity_check",
            "fail",
            &error,
        )),
    }

    match foreign_key_violations(&connection) {
        Ok(0) => checks.push(check(
            "foreign_key_check",
            "SQLite foreign_key_check",
            "pass",
            "No foreign key violations",
        )),
        Ok(count) => checks.push(check(
            "foreign_key_check",
            "SQLite foreign_key_check",
            "fail",
            &format!("{count} foreign key violation(s) found"),
        )),
        Err(error) => checks.push(check(
            "foreign_key_check",
            "SQLite foreign_key_check",
            "fail",
            &error,
        )),
    }

    checks.push(table_check(
        &connection,
        "schema_migrations_table",
        "schema_migrations table",
        "schema_migrations",
    ));
    checks.push(table_check(
        &connection,
        "app_meta_table",
        "app_meta table",
        "app_meta",
    ));

    match current_schema_version(&connection) {
        Ok(Some(version)) => checks.push(check(
            "schema_version",
            "Schema version present",
            "pass",
            &format!("Schema version {version}"),
        )),
        Ok(None) => checks.push(check(
            "schema_version",
            "Schema version present",
            "warn",
            "No schema version has been recorded",
        )),
        Err(error) => checks.push(check(
            "schema_version",
            "Schema version present",
            "fail",
            &error,
        )),
    }

    let ok = checks.iter().all(|item| item.status == "pass");
    let message = if ok {
        "Database health check passed".to_string()
    } else {
        "Database health check found warnings or failures".to_string()
    };

    DatabaseHealthCheck {
        ok,
        database_path: path_to_string(&paths.database_path),
        checks,
        message,
    }
}

fn open_database(paths: &AppPaths) -> Result<Connection, String> {
    Connection::open(&paths.database_path).map_err(|error| {
        format!(
            "Unable to open database at {}: {error}",
            path_to_string(&paths.database_path)
        )
    })
}

fn configure_connection(connection: &Connection) -> Result<(), String> {
    connection
        .execute_batch(
            "
            PRAGMA foreign_keys = ON;
            PRAGMA synchronous = NORMAL;
            ",
        )
        .map_err(|error| format!("Unable to configure SQLite PRAGMAs: {error}"))?;

    connection
        .query_row("PRAGMA journal_mode = WAL;", [], |row| row.get::<_, String>(0))
        .map_err(|error| format!("Unable to enable WAL journal mode: {error}"))?;

    Ok(())
}

fn upsert_app_meta(connection: &Connection, schema_version: i64) -> Result<(), String> {
    let updated_at = Utc::now().to_rfc3339();
    let meta = [
        ("app.name", "SublimationPrintOS".to_string()),
        ("app.phase", "Phase 0".to_string()),
        ("app.schema_version", schema_version.to_string()),
        ("app.local_first", "true".to_string()),
    ];

    for (key, value) in meta {
        connection
            .execute(
                "
                INSERT INTO app_meta (key, value, updated_at)
                VALUES (?1, ?2, ?3)
                ON CONFLICT(key) DO UPDATE SET
                    value = excluded.value,
                    updated_at = excluded.updated_at
                ",
                params![key, value, updated_at],
            )
            .map_err(|error| format!("Unable to upsert app metadata {key}: {error}"))?;
    }

    Ok(())
}

pub fn insert_audit_log(
    connection: &Connection,
    event_type: &str,
    message: &str,
    metadata_json: Option<String>,
) -> Result<(), String> {
    connection
        .execute(
            "
            INSERT INTO audit_logs (event_type, message, metadata_json, created_at)
            VALUES (?1, ?2, ?3, ?4)
            ",
            params![event_type, message, metadata_json, Utc::now().to_rfc3339()],
        )
        .map_err(|error| format!("Unable to insert audit log {event_type}: {error}"))?;
    Ok(())
}

fn current_schema_version(connection: &Connection) -> Result<Option<i64>, String> {
    if !table_exists(connection, "schema_migrations")? {
        return Ok(None);
    }

    connection
        .query_row("SELECT MAX(version) FROM schema_migrations", [], |row| {
            row.get::<_, Option<i64>>(0)
        })
        .map_err(|error| format!("Unable to read schema version: {error}"))
}

fn query_journal_mode(connection: &Connection) -> Result<String, String> {
    connection
        .query_row("PRAGMA journal_mode;", [], |row| row.get::<_, String>(0))
        .map_err(|error| format!("Unable to read SQLite journal mode: {error}"))
}

fn integrity_check(connection: &Connection) -> Result<String, String> {
    connection
        .query_row("PRAGMA integrity_check;", [], |row| row.get::<_, String>(0))
        .map_err(|error| format!("Unable to run SQLite integrity_check: {error}"))
}

fn foreign_key_violations(connection: &Connection) -> Result<usize, String> {
    let mut statement = connection
        .prepare("PRAGMA foreign_key_check;")
        .map_err(|error| format!("Unable to prepare foreign_key_check: {error}"))?;
    let rows = statement
        .query_map([], |_| Ok(()))
        .map_err(|error| format!("Unable to run foreign_key_check: {error}"))?;

    let mut count = 0;
    for row in rows {
        row.map_err(|error| format!("Unable to read foreign_key_check row: {error}"))?;
        count += 1;
    }

    Ok(count)
}

fn table_exists(connection: &Connection, table_name: &str) -> Result<bool, String> {
    connection
        .query_row(
            "SELECT EXISTS(SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?1)",
            params![table_name],
            |row| row.get::<_, i64>(0),
        )
        .map(|exists| exists == 1)
        .map_err(|error| format!("Unable to check table {table_name}: {error}"))
}

fn table_check(
    connection: &Connection,
    key: &str,
    label: &str,
    table_name: &str,
) -> DatabaseHealthCheckItem {
    match table_exists(connection, table_name) {
        Ok(true) => check(key, label, "pass", &format!("{table_name} exists")),
        Ok(false) => check(key, label, "fail", &format!("{table_name} is missing")),
        Err(error) => check(key, label, "fail", &error),
    }
}

fn check(key: &str, label: &str, status: &str, message: &str) -> DatabaseHealthCheckItem {
    DatabaseHealthCheckItem {
        key: key.to_string(),
        label: label.to_string(),
        status: status.to_string(),
        message: message.to_string(),
    }
}
