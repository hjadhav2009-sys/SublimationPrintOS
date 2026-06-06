# SublimationPrintOS — Non-Functional Requirements Specification

> **Version:** 1.0  
> **Date:** 2026-06-06  
> **Scope:** Pure Sublimation Production System  
> **Status:** Approved for Development

---

## 1. Performance Requirements

### 1.1 Response Time

| Operation | Target | Maximum | Measurement Method |
|-----------|--------|---------|-------------------|
| Application cold start | ≤ 5 seconds | ≤ 10 seconds | Stopwatch from double-click to main window visible |
| Module switch (Design Store → Design Studio) | ≤ 500ms | ≤ 1 second | Stopwatch from click to fully rendered |
| Design Store thumbnail load (first 50) | ≤ 1 second | ≤ 2 seconds | Network panel / profiler |
| Design Store scroll (virtual scrolling) | 60 FPS | ≥ 30 FPS | Chrome DevTools FPS meter |
| Canvas zoom (100% → 400%) | ≤ 200ms | ≤ 500ms | Stopwatch |
| Canvas pan | 60 FPS | ≥ 30 FPS | Chrome DevTools FPS meter |
| Object select (single click) | ≤ 50ms | ≤ 100ms | Stopwatch |
| Object drag (move on canvas) | 60 FPS | ≥ 30 FPS | Visual smoothness test |
| Undo/Redo operation | ≤ 100ms | ≤ 250ms | Stopwatch |
| Layer panel render (1,000 layers) | ≤ 500ms | ≤ 1 second | Profiler |
| Text tool activation | ≤ 200ms | ≤ 500ms | Stopwatch |
| Image place (10MB file) | ≤ 1 second | ≤ 3 seconds | Stopwatch |
| Filter apply (blur, sharpen) | ≤ 500ms | ≤ 2 seconds | Stopwatch |
| Export single A4 page (300 DPI PNG) | ≤ 5 seconds | ≤ 15 seconds | Stopwatch |
| Export multi-page PDF (10 pages) | ≤ 30 seconds | ≤ 60 seconds | Stopwatch |

### 1.2 Throughput

| Metric | Target | Stress Target |
|--------|--------|---------------|
| Concurrent designs in Design Store | 50,000 | 100,000 |
| Concurrent layers in Design Studio | 1,000 | 2,000 |
| Concurrent objects on single artboard | 500 | 1,000 |
| Batch upscale queue size | 1,000 images | 5,000 images |
| Upscale processing speed (GPU) | 10 images/minute (4×, A4) | 5 images/minute under load |
| Upscale processing speed (CPU fallback) | 2 images/minute (4×, A4) | 1 image/minute under load |
| Nesting calculation (100 items, shelf) | ≤ 2 seconds | ≤ 5 seconds |
| Nesting calculation (500 items, true-shape) | ≤ 10 seconds | ≤ 30 seconds |
| Print sheet pages per job | 100 pages | 500 pages |
| Export batch size | 100 pages | 500 pages |

### 1.3 Resource Utilization

| Resource | Normal Operation | Peak Operation | Idle |
|----------|-----------------|----------------|------|
| CPU | ≤ 15% | ≤ 80% (during upscale/nesting) | ≤ 2% |
| RAM | ≤ 2 GB | ≤ 8 GB (during large batch upscale) | ≤ 500 MB |
| GPU VRAM | ≤ 2 GB | ≤ 6 GB (during 8× upscale) | ≤ 500 MB |
| Disk I/O | ≤ 50 MB/s writes | ≤ 200 MB/s (during export) | ≤ 1 MB/s |
| Network | 0 KB/s (offline) | 0 KB/s (offline) | 0 KB/s |

### 1.4 Scalability
- The system shall support single-user desktop operation only (no multi-user server mode required).
- Database shall scale to 100,000 designs without performance degradation (FTS5 indexing).
- Canvas engine shall maintain 60 FPS with up to 500 objects on screen.
- Memory usage shall not grow unbounded; garbage collection shall run automatically.
- Background processing shall not degrade foreground UI performance below 30 FPS.

---

## 2. Reliability & Availability

### 2.1 Uptime
- Target availability: 99.9% (measured as percentage of time application is responsive during business hours).
- Maximum unplanned downtime: 4 hours per month.
- Planned maintenance (updates): shall support silent background download and install on restart.

### 2.2 Fault Tolerance
- **Crash Recovery:** If application crashes during design editing, auto-save shall recover work to within 5 minutes of crash (configurable interval: 1–10 minutes).
- **Power Loss:** If system loses power during export, partial files shall be discarded and job marked as failed; retry shall be possible from queue.
- **GPU Failure:** If GPU driver crashes during upscale, system shall auto-fallback to CPU processing for that job and notify user.
- **Disk Full:** If disk fills during export, system shall pause operation, alert user, and resume when space is freed (no data corruption).
- **Database Corruption:** If SQLite database corrupts, system shall attempt auto-repair on launch; if failed, offer restore from latest backup.
- **RIP Communication Failure:** If hot folder write fails (network drive disconnected), system shall queue job and retry every 30 seconds for 10 minutes before marking failed.

### 2.3 Data Integrity
- All file writes shall use atomic write-then-rename pattern to prevent partial writes.
- Database transactions shall be ACID compliant (SQLite WAL mode).
- Checksums (SHA-256) shall be stored for all design files and verified on load.
- Backup files shall be verified (checksum) after creation.
- Export files shall be verified (open and read header) before marking job complete.

### 2.4 Error Handling
- All errors shall be logged with timestamp, stack trace, user action context, and system state.
- User-facing errors shall display friendly message + error code + "Report Issue" button.
- Critical errors shall trigger auto-save before displaying error dialog.
- Network errors (optional cloud sync) shall be silently queued and retried; never block UI.

---

## 3. Security Requirements

### 3.1 Data Security
- All user data stored locally in AppData; no remote server communication required for core functionality.
- Optional cloud sync (P3) shall use HTTPS/TLS 1.3 with certificate pinning.
- Database shall support optional encryption (SQLCipher) with user-provided password.
- Project files shall support optional password protection (AES-256 encryption).
- Export files (PDF) shall support optional password protection.
- Clipboard data shall be cleared on application exit (configurable).

### 3.2 Access Control
- Role-based access: Admin (full), Designer (design modules), Worker (production modules), Viewer (read-only).
- Admin settings shall require password re-entry after configurable timeout (default: 15 minutes).
- Project-level password protection shall prevent open/edit without password.
- Settings changes shall be logged in audit trail (who, what, when).

### 3.3 Application Security
- Installer shall be digitally signed (Code Signing Certificate).
- Auto-update packages shall be verified via SHA-256 checksum and digital signature before installation.
- Plugin system (P3) shall run in sandboxed environment with limited file system access.
- No execution of arbitrary user scripts without explicit admin approval.
- Crash reports shall not include design content or file paths; only stack traces and system specs.

---

## 4. Usability Requirements

### 4.1 Learnability
- First-time user shall complete first print job within 30 minutes using onboarding checklist.
- All P0 features shall be discoverable without reading manual (icons + tooltips + context menus).
- Help tooltips shall appear on hover for all toolbar buttons (delay: 500ms).
- "What's This?" help (Shift+F1) shall explain any UI element when clicked.

### 4.2 Efficiency
- Power user shall perform common workflow (add to basket → nest → export → send to print) in ≤ 10 clicks.
- Keyboard shortcuts shall be available for all P0 operations (customizable).
- Batch operations (bulk tag, bulk export, batch approve) shall reduce repetitive actions by ≥ 80%.
- Recent files and pinned projects shall be accessible within 2 clicks from launch.

### 4.3 Accessibility
- Minimum font size: 12px (configurable to 24px).
- High contrast mode shall meet WCAG 2.1 AA standards (contrast ratio ≥ 4.5:1).
- All UI elements shall be keyboard navigable (Tab order, arrow keys, Enter/Space activation).
- Screen reader support for all modal dialogs and status messages (ARIA labels).
- Color shall not be sole indicator of status (icons + text + color).
- Animation duration shall be ≤ 300ms; disable option shall exist for users with vestibular disorders.

### 4.4 Localization
- UI shall support English (P0) and Hindi (P1) at launch.
- Additional languages (P3): Tamil, Telugu, Marathi, Gujarati, Bengali, Kannada, Malayalam, Punjabi, Urdu.
- Date format shall follow locale setting (DD/MM/YYYY for India, MM/DD/YYYY for US, etc.).
- All user-facing text shall be externalized in JSON language files for easy translation.
- Number formatting shall follow locale (1,000.00 vs 1.000,00).
- Measurement units shall be independently selectable from language (e.g., Hindi UI with inch units).

---

## 5. Maintainability Requirements

### 5.1 Code Organization
- Modular architecture: each major module (Design Studio, Upscale Factory, etc.) shall be independently buildable and testable.
- Plugin API (P3) shall allow third-party extensions without modifying core code.
- Configuration shall be stored in JSON files (human-readable, version-controllable).
- Database schema shall support migrations (versioned SQL scripts, forward and backward).

### 5.2 Logging & Diagnostics
- Log levels: Debug, Info, Warning, Error, Fatal.
- Log rotation: maximum 100 MB per file, keep last 10 files.
- Logs shall include: timestamp, thread ID, module name, function name, message, context data.
- Diagnostic report shall be generatable in one click (system info, recent logs, error summary).
- All P0 features shall have corresponding unit tests (≥ 80% code coverage for P0 paths).

### 5.3 Update & Recovery
- Auto-update shall support delta patches (only changed files) to minimize download size.
- Update rollback shall be possible within 7 days of installation.
- Factory reset shall preserve user settings backup (optional) before wiping data.
- Database repair tool shall be accessible from Help menu (no command line required).

---

## 6. Portability & Compatibility

### 6.1 Platform Support
- Primary: Windows 10 (64-bit) and Windows 11 (64-bit).
- Minimum Windows version: Windows 10 version 1903 (May 2019 Update).
- No macOS or Linux support in Phase 0–6 (future roadmap P3).
- Windows 7/8 explicitly not supported (security and API limitations).

### 6.2 Hardware Requirements

| Component | Minimum | Recommended | Optimal |
|-----------|---------|-------------|---------|
| CPU | Intel i3 / AMD Ryzen 3 (4 cores) | Intel i5 / AMD Ryzen 5 (6 cores) | Intel i7 / AMD Ryzen 7 (8+ cores) |
| RAM | 8 GB | 16 GB | 32 GB |
| GPU | Integrated (Intel UHD / AMD Vega) | NVIDIA GTX 1660 / AMD RX 580 | NVIDIA RTX 3060 / AMD RX 6600 |
| VRAM | 2 GB shared | 4 GB dedicated | 8 GB dedicated |
| Storage | 256 GB SSD | 512 GB SSD | 1 TB NVMe SSD |
| Display | 1366×768 | 1920×1080 | 2560×1440 |
| Input | Mouse + Keyboard | Mouse + Keyboard + Second Monitor | Touchscreen + Stylus + Second Monitor |

### 6.3 Software Dependencies
- VC++ Redistributable 2015–2022 (bundled and auto-installed).
- .NET 6.0 Runtime or later (bundled and auto-installed if using .NET backend).
- GPU drivers: NVIDIA 471+ or AMD 21.10+ or Intel 30.0+.
- No internet connection required for core functionality (offline-first).
- Optional: Internet for license validation, update check, crash reporting (user opt-in).

### 6.4 Peripheral Support
- Printers: USB and network (TCP/IP) connected sublimation printers.
- Cutters: USB, serial (RS-232), and network connected cutting plotters.
- Barcode scanners: USB HID keyboard emulation.
- Webcams: USB UVC-compliant cameras (for QC photo capture).
- Optional: Bluetooth/WiFi heat press temperature sensors (P3).

---

## 7. Environmental Requirements

### 7.1 Operating Conditions
- Temperature: 10°C to 35°C (50°F to 95°F).
- Humidity: 20% to 80% non-condensing.
- Dust: Standard office/shop environment (no special clean room required).

### 7.2 Power
- Standard desktop PC power supply (no UPS required, but recommended for production environments).
- Laptop operation supported (battery mode shall trigger power-saving: reduce background processing priority).

---

## 8. Compliance & Standards

### 8.1 Data Privacy
- GDPR compliant: all data stored locally; no personal data transmitted without explicit consent.
- Telemetry opt-out shall be available at install and in settings.
- Crash reports shall be anonymized (no file names, no design content, no customer data).
- Audit log shall track all admin actions (who, what, when) for compliance.

### 8.2 Industry Standards
- ICC profile support per ICC.1:2010 (Profile version 4.3.0.0).
- PDF export per ISO 32000-2 (PDF 2.0).
- PDF/X compliance: PDF/X-1a, PDF/X-3, PDF/X-4 per ISO 15930.
- Color spaces: sRGB (IEC 61966-2-1), Adobe RGB (1998), ProPhoto RGB.
- Barcodes: QR Code per ISO/IEC 18004, Data Matrix per ISO/IEC 16022.
- SVG export per SVG 1.1 (W3C Recommendation).

---

## 9. Testability Requirements

### 9.1 Test Environments
- Development: Windows 11, 16 GB RAM, NVIDIA RTX 3060.
- CI/CD: Windows Server 2022 (virtual machine), 8 GB RAM, no GPU (CPU fallback tests).
- QA: Windows 10, 8 GB RAM, integrated GPU (minimum spec testing).
- Production: Representative customer hardware (tested via beta program).

### 9.2 Automated Testing
- Unit tests: ≥ 80% coverage for P0 features, ≥ 60% for P1 features.
- Integration tests: all module-to-module interactions (Design Store → Order Basket → Print Sheet → Export).
- End-to-end tests: complete workflow from upload to export (automated UI testing).
- Performance tests: benchmark suite run on every release candidate.
- Load tests: 10,000 designs in Design Store, 100-page nesting job.
- Stress tests: 24-hour continuous operation, memory leak detection.

### 9.3 Manual Testing
- Usability testing: 5 first-time users per major release.
- Accessibility testing: keyboard-only navigation, screen reader compatibility.
- Hardware compatibility: tested with 3 printer models and 2 cutter models per release.
- Color accuracy: visual comparison with reference prints (Delta E ≤ 2.0 target).

---

## 10. Documentation Requirements

### 10.1 User Documentation
- Quick Start Guide (PDF, ≤ 20 pages, P0).
- User Manual (PDF, comprehensive, ≤ 200 pages, P1).
- Contextual Help (in-app tooltips and "What's This?", P0).
- Video Tutorials (embedded in app, P2).
- Keyboard Shortcut Reference (printable, P1).
- FAQ (in-app searchable, P1).

### 10.2 Technical Documentation
- API Documentation (for plugin developers, P3).
- Database Schema Reference (for IT administrators, P2).
- Troubleshooting Guide (in-app wizard + PDF, P1).
- Release Notes (per version, P0).
- Known Issues List (updated per release, P0).

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-06-06 | Product Team | Initial non-functional requirements |
