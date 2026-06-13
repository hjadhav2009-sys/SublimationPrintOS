use sha2::{Digest, Sha256};
use std::fs::{self, File};
use std::io::{BufReader, Read};
use std::path::Path;

pub fn sha256_file(path: &Path, label: &str) -> Result<String, String> {
    ensure_regular_file_metadata(path, label)?;

    let file = File::open(path)
        .map_err(|error| format!("Unable to open {label} for SHA-256 hashing: {error}"))?;
    let mut reader = BufReader::new(file);
    let mut hasher = Sha256::new();
    let mut buffer = [0_u8; 64 * 1024];

    loop {
        let bytes_read = reader
            .read(&mut buffer)
            .map_err(|error| format!("Unable to read {label} for SHA-256 hashing: {error}"))?;
        if bytes_read == 0 {
            break;
        }
        hasher.update(&buffer[..bytes_read]);
    }

    Ok(format!("{:x}", hasher.finalize()))
}

pub fn mime_type_for_extension(extension: &str) -> &'static str {
    match extension {
        "png" => "image/png",
        "jpg" | "jpeg" => "image/jpeg",
        "webp" => "image/webp",
        "tif" | "tiff" => "image/tiff",
        "bmp" => "image/bmp",
        _ => "application/octet-stream",
    }
}

pub fn ensure_regular_file_metadata(path: &Path, label: &str) -> Result<(), String> {
    let metadata =
        fs::symlink_metadata(path).map_err(|error| format!("{label} could not be inspected: {error}"))?;
    if metadata.file_type().is_symlink() {
        return Err(format!("{label} is a symlink and was blocked"));
    }
    if !metadata.is_file() {
        return Err(format!("{label} is not a regular file"));
    }
    Ok(())
}
