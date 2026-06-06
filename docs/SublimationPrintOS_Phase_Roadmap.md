# SublimationPrintOS — Phase Roadmap

> **Version:** 1.0 | **Date:** 2026-06-06 | **Status:** Approved

---

## 1. Overview

SublimationPrintOS is built in 7 phases over approximately 18 months. Each phase delivers a functional milestone that can be tested independently. Phases are sequential with overlap allowed between adjacent phases (e.g., Phase 1 design work can begin while Phase 0 is in final testing).

---

## 2. Phase Summary Table

| Phase | Name | Duration | Start Date | End Date | Core Deliverables | Team Size | Priority |
|-------|------|----------|------------|----------|-------------------|-----------|----------|
| 0 | Foundation & Installation | 6 weeks | Week 1 | Week 6 | Installer, SQLite DB, Settings, Real-ESRGAN integration, basic UI shell | 3 devs | P0 |
| 1 | Upscale Factory & Design Store | 8 weeks | Week 5 | Week 12 | AI upscaling, quality checks, design gallery, metadata, search, approval workflow | 4 devs | P0 |
| 2 | Design Studio | 10 weeks | Week 10 | Week 19 | Canva-like editor, templates, shapes, text, image editing, layers | 5 devs | P0 |
| 3 | Order Basket & Print Sheet Builder | 8 weeks | Week 17 | Week 24 | Production cart, auto-nesting, manual layout, marks, mirroring | 4 devs | P0 |
| 4 | Export System & Color Management | 6 weeks | Week 22 | Week 27 | Multi-format export, ICC profiles, soft proofing, PDF/X compliance | 3 devs | P0 |
| 5 | Hardware Integration | 8 weeks | Week 26 | Week 33 | Printer discovery, cutter integration, RIP hot folders, press timer | 4 devs | P1 |
| 6 | Reports, Testing & Polish | 6 weeks | Week 32 | Week 37 | Production reports, diagnostics, bonus features, performance optimization | 3 devs | P1 |

**Total Duration:** 37 weeks (approximately 9 months core development + 3 months testing/beta = 12 months total)

---

## 3. Phase 0: Foundation & Installation (Weeks 1–6)

### Goal
Establish the technical foundation, installer, database, settings system, and AI upscaling engine integration. Deliver a working shell that can install, launch, and run basic upscaling.

### Deliverables

| # | Deliverable | Owner | Acceptance Criteria |
|---|-------------|-------|---------------------|
| 0.1 | Windows Installer (.exe) | DevOps | Silent install, portable mode, dependency bundling, desktop shortcut creation |
| 0.2 | SQLite Database Schema | Backend | All tables created, migrations working, FTS5 enabled, 50K design test load |
| 0.3 | AppData Folder Structure | Backend | Auto-creation on first run, write permissions verified, folder hierarchy correct |
| 0.4 | Settings & Preferences System | Frontend | Company profile, defaults (page size, margins, DPI), theme (dark/light), language selection |
| 0.5 | Real-ESRGAN ncnn Vulkan Integration | AI/Backend | GPU detection, model loading, 2x/4x upscale, CPU fallback, batch queue (basic) |
| 0.6 | Basic UI Shell (Tauri/Electron) | Frontend | Module navigation, sidebar, status bar, dark mode, responsive layout |
| 0.7 | Auto-Update Framework | DevOps | Check on launch, offline package support, rollback capability |
| 0.8 | Health Check Dashboard | Backend | System compatibility check, GPU driver check, disk/RAM verification |
| 0.9 | Crash Recovery | Backend | Auto-save interval, crash detection, restore dialog on relaunch |
| 0.10 | Keyboard Shortcuts Framework | Frontend | Global shortcuts, customizable bindings, cheat sheet generation |

### Milestone: Alpha 0
- **Date:** End of Week 6
- **Criteria:** Installer works on clean Windows 10/11 machine. App launches. Settings can be configured. Real-ESRGAN can upscale a single image. No crashes on basic operations.
- **Demo:** Install on fresh VM → launch → set company name → upscale a test image → show settings.

---

## 4. Phase 1: Upscale Factory & Design Store (Weeks 5–12)

### Goal
Deliver the complete image intake, AI upscaling, quality control, and design gallery system. This is the first user-facing production module.

### Deliverables

| # | Deliverable | Owner | Acceptance Criteria |
|---|-------------|-------|---------------------|
| 1.1 | Image Intake (Single/Multi/Folder/ZIP/Clipboard) | Frontend | All upload methods work, format validation, thumbnail generation |
| 1.2 | Hot Folder Monitoring | Backend | Folder watch, recursive option, auto-queue, filter by extension |
| 1.3 | Batch Queue Management | Frontend | Add/remove/reorder/pause/resume/cancel, progress bar, ETA, thumbnail preview |
| 1.4 | AI Upscale Engine (Complete) | AI/Backend | 2x/4x/8x, custom scale, GPU multi-device, tile processing, background processing |
| 1.5 | Before/After Review | Frontend | Split view slider, side-by-side, zoom/pan, quality score display |
| 1.6 | Quality Pre-Checks (Auto) | AI/Backend | Blur detection, artifact detection, banding, noise, resolution check, duplicate detection |
| 1.7 | Approve/Reject Workflow | Frontend | Per-image approve/reject, batch actions, reason selection, notes |
| 1.8 | Design Store Gallery | Frontend | Grid/List/Masonry views, virtual scrolling, lazy loading, thumbnail sizes |
| 1.9 | Design Store Search & Filter | Backend | Real-time name search, SKU search, category/tag/color/size/date/status filters |
| 1.10 | Design Metadata Management | Frontend | SKU, name, category, tags, notes, dominant colors, usage count, print history |
| 1.11 | Approval Workflow | Frontend | Designer submit → Manager approve/reject with reason → Owner final sign-off |
| 1.12 | Version Control | Backend | Auto-save versions, side-by-side comparison, rollback to any version |
| 1.13 | Bulk Operations | Frontend | Multi-select, bulk categorize, bulk tag, bulk delete, bulk export |
| 1.14 | Output Configuration | Frontend | Format (PNG/JPG/TIFF/WEBP), quality, color space, bit depth, DPI, filename patterns |
| 1.15 | Processing Logs | Backend | Per-image and per-batch logs, exportable, searchable |

### Milestone: Alpha 1
- **Date:** End of Week 12
- **Criteria:** Designer can upload 100 images, batch upscale them, review before/after, approve/reject, and browse the Design Store with 10,000+ designs smoothly.
- **Demo:** Upload folder of 50 images → batch upscale 4x → review split view → approve 40 → reject 10 with reasons → browse Design Store → search "Diwali" → filter by category → export approved as PNG.

---

## 5. Phase 2: Design Studio (Weeks 10–19)

### Goal
Deliver a Canva-like design editor with templates, shapes, text, image editing, layers, and effects. This is the most complex UI module.

### Deliverables

| # | Deliverable | Owner | Acceptance Criteria |
|---|-------------|-------|---------------------|
| 2.1 | Canvas Engine (Fabric.js/Konva.js) | Frontend | Infinite canvas, multiple artboards, rulers, guides, grid, smart guides, snap |
| 2.2 | Zoom & Navigation | Frontend | 25%–1600%, presets, fit to screen/selection, actual size, mouse wheel, pan |
| 2.3 | Object Manipulation | Frontend | Select, move, resize, rotate, nudge, align, distribute, flip, lock, hide, opacity |
| 2.4 | Group & Boolean Operations | Frontend | Group/ungroup, merge, union, subtract, intersect, exclude, crop |
| 2.5 | Layers Panel | Frontend | Toggle, list, thumbnails, visibility, lock, opacity, reorder, folders, solo/isolation |
| 2.6 | Text Tool | Frontend | Point/area text, font family, size, bold/italic/underline, color, alignment, spacing |
| 2.7 | Text Effects | Frontend | Shadow, stroke, glow, text on path, vertical text, columns, bullets, spell check |
| 2.8 | Text Styles | Frontend | Save/load presets, find/replace, variable data (CSV merge) |
| 2.9 | Shape Tools | Frontend | Rectangle, rounded rect, ellipse, polygon, star, line, arrow, connector |
| 2.10 | Shape Properties | Frontend | Fill (solid/gradient/pattern), stroke, effects (shadow/glow/bevel), boolean |
| 2.11 | Image Handling | Frontend | Place, drag-drop, clipboard, linked/embedded, crop, resize, resolution display |
| 2.12 | Image Adjustments | Frontend | Brightness, contrast, saturation, hue, vibrance, exposure, highlights, shadows |
| 2.13 | Image Filters | Frontend | Levels, curves, color balance, selective color, invert, posterize, threshold |
| 2.14 | Advanced Image | Frontend | Sharpen, blur, noise reduction, dust/scratches, liquify, puppet warp |
| 2.15 | Color & Background | Frontend | Color replacement, match color, select color range, remove background, canvas size |
| 2.16 | Pen & Vector Tools | Frontend | Bezier pen, anchor points, path operations, variable stroke width, shape builder |
| 2.17 | Templates | Frontend | 100+ built-in templates (keychain, mug, car hanger, festival, etc.) |
| 2.18 | Project Management | Frontend | Undo/redo (500 steps), auto-save, crash recovery, recent files, pin favorites |
| 2.19 | Export from Studio | Frontend | PNG/PDF with marks, save to Design Store, export with metadata |
| 2.20 | Font Management | Frontend | System fonts, upload TTF/OTF, Google Fonts offline cache |

### Milestone: Alpha 2
- **Date:** End of Week 19
- **Criteria:** Designer can create a new project, apply a keychain template, add text in Hindi, place an image, apply effects, and export as PNG with bleed marks.
- **Demo:** New project → select "Keychain Round 50mm" template → add Hindi text "Happy Diwali" → place upscaled image → add drop shadow → flip horizontal → export PNG with bleed.

---

## 6. Phase 3: Order Basket & Print Sheet Builder (Weeks 17–24)

### Goal
Deliver the production cart system and print sheet layout engine with auto-nesting, manual adjustments, and all production marks.

### Deliverables

| # | Deliverable | Owner | Acceptance Criteria |
|---|-------------|-------|---------------------|
| 3.1 | Order Basket UI | Frontend | Add from store, remove, quantity input, +1/-1, quick presets, substrate selection |
| 3.2 | Basket Organization | Frontend | Sort, filter, save draft, load draft, duplicate basket, rename, clear all |
| 3.3 | Basket Import/Export | Backend | CSV export/import, local network share, barcode/QR generation |
| 3.4 | Production Flags | Frontend | Priority (urgent/normal/low), due date, status (draft/confirmed/in production), notes |
| 3.5 | Print Sheet Page Setup | Frontend | A4/A3/roll/custom, unit switching, DPI, margins, gaps, bleed, safe zone |
| 3.6 | Auto-Nesting (Shelf) | Backend | Basic rectangle packing, single design fill, mixed designs, efficiency calculation |
| 3.7 | Auto-Nesting (Advanced) | Backend | Guillotine, skyline, maximal rectangles, true-shape (irregular), genetic algorithm |
| 3.8 | Manual Nesting | Frontend | Drag placement, snap to grid/guides/objects, rotate, scale, nudge, align, distribute |
| 3.9 | Multi-Page Management | Frontend | Auto-generate on overflow, manual add/delete/reorder, duplicate page, master page |
| 3.10 | Quantity Management | Frontend | Auto-calculate max copies, fill sheet, remainder handling, per-page limits |
| 3.11 | Cut Guides | Frontend | Solid/dashed/dotted, color, width, offset, per-object/global, contour/bounding box |
| 3.12 | Safe Guides | Frontend | Style, color, width, offset, per-object/global |
| 3.13 | Registration Marks | Frontend | L-corner, crosshair, circle, square, barcode, QR, vendor-specific (Summa/Graphtec) |
| 3.14 | Color Bars | Frontend | CMYK + RGB + grayscale, position, size, custom patches |
| 3.15 | Trim/Corner/Center Marks | Frontend | Length, width, color, offset |
| 3.16 | Page Information | Frontend | Page numbers, job ID watermark, date/time, QR code, substrate, press settings |
| 3.17 | Mirroring | Frontend | Object-level flip, page-level mirror (horizontal/vertical/both), normal+mirrored export |
| 3.18 | Optimization Suggestions | Backend | "Rotate 90° to save 1 sheet", auto-suggest improvements |
| 3.19 | Real-Time Metrics | Frontend | Waste percentage, efficiency %, sheet count, live update on any change |
| 3.20 | Integration with Export | Frontend | One-click send to Export System with all marks and settings preserved |

### Milestone: Beta 1
- **Date:** End of Week 24
- **Criteria:** Worker can load an order of 50 designs, auto-nest them on A3 paper, review efficiency, manually adjust 5 items, add all marks, mirror the sheet, and export.
- **Demo:** Load basket with 20 keychains + 10 mugs + 5 car hangers → select A3 → auto-nest with true-shape → see 87% efficiency → drag 2 items to fill gaps → add cut marks + registration + color bars → mirror horizontal → export as PDF.

---

## 7. Phase 4: Export System & Color Management (Weeks 22–27)

### Goal
Deliver complete multi-format export with production standards compliance and color accuracy tools.

### Deliverables

| # | Deliverable | Owner | Acceptance Criteria |
|---|-------------|-------|---------------------|
| 4.1 | PNG Export | Backend | 8-bit/16-bit, transparency, interlaced, compression |
| 4.2 | JPG Export | Backend | Quality 0-100, progressive/baseline, chroma subsampling |
| 4.3 | TIFF Export | Backend | Compression (none/LZW/ZIP/JPEG), bit depth 8/16/32 |
| 4.4 | WEBP Export | Backend | Quality 0-100, lossless mode |
| 4.5 | PDF Export | Backend | Single/multi-page, compression, downsample, color space, bleed/crop/registration marks |
| 4.6 | PDF Compliance | Backend | PDF/A, PDF/X-1a, PDF/X-3, PDF/X-4 compliance validation |
| 4.7 | ZIP Export | Backend | Bundle all files, folder structure, compression level, password protection |
| 4.8 | Export Presets | Frontend | Save/load named configurations, duplicate, delete, import/export presets |
| 4.9 | Export Scope | Frontend | Current page, all pages, selected pages, selected objects only |
| 4.10 | Filename Patterns | Backend | {job_id}, {page}, {date}, {time}, {mirrored}, {substrate}, auto-increment |
| 4.11 | ICC Profile Management | Backend | Upload, organize, validate, embed, strip, per substrate/printer/ink/paper |
| 4.12 | Soft Proofing | Frontend | Toggle, profile selection, paper color simulation, ink limit simulation |
| 4.13 | Gamut Warning | Frontend | Highlight out-of-gamut colors, toggle, color selection, opacity adjustment |
| 4.14 | Rendering Intent | Backend | Perceptual, relative colorimetric, saturation, absolute colorimetric, auto |
| 4.15 | Color Separation | Frontend | CMYK/RGB/Lab channel preview, UCR, GCR, total ink limit |
| 4.16 | Ink Coverage | Frontend | Visual density map, percentage per channel, total coverage |
| 4.17 | Rich Black | Frontend | Custom CMYK recipe, pure black override for text |
| 4.18 | Color Measurement | Backend | X-Rite/i1 integration (P3), spot read, scan read, comparison, report |
| 4.19 | Monitor Calibration | Frontend | Reminder, wizard, color temperature/brightness/contrast compensation |
| 4.20 | Batch Color Correction | Backend | Apply color correction to multiple designs, consistency check |

### Milestone: Beta 2
- **Date:** End of Week 27
- **Criteria:** Worker can export a 10-page job as PDF/X-4 with embedded ICC profile, all marks, and mirrored pages. Designer can soft-proof a design and see gamut warnings.
- **Demo:** Load 10-page nest → export as PDF/X-4 → verify with Acrobat Preflight → open in RIP software → soft-proof ceramic mug profile → see 3 out-of-gamut areas highlighted → adjust colors → re-export.

---

## 8. Phase 5: Hardware Integration (Weeks 26–33)

### Goal
Connect to physical printers, cutters, and heat presses. Enable direct production workflow from software to physical output.

### Deliverables

| # | Deliverable | Owner | Acceptance Criteria |
|---|-------------|-------|---------------------|
| 5.1 | Printer Discovery | Backend | Network (SNMP/mDNS/Bonjour/WSD), USB auto-detect, manual IP entry |
| 5.2 | Printer Status | Frontend | Online/offline/busy/error, paper out, paper jam, ink low, cover open |
| 5.3 | Ink Level Display | Frontend | Cyan, magenta, yellow, black, light cyan, light magenta, others if supported |
| 5.4 | Printer Queue | Frontend | View, add, remove, reorder, pause, resume, cancel, priority, progress |
| 5.5 | Direct Print | Backend | Send to Windows spooler, bypass RIP for supported printers |
| 5.6 | Hot Folder Output | Backend | Auto-save to watched folder, subfolder by date/job, filename pattern |
| 5.7 | RIP Integration | Backend | Caldera VisualRIP+, Wasatch SoftRIP, Onyx Thrive, Ergosoft, JDF export |
| 5.8 | Printer Calibration | Frontend | Nozzle check pattern, head alignment, cleaning cycle, calibration wizard |
| 5.9 | Maintenance Log | Backend | Track all maintenance actions, alert when due, schedule configuration |
| 5.10 | Cutter Discovery | Backend | Network, USB, serial auto-detect, manual configuration |
| 5.11 | Cutter Status | Frontend | Online/offline/busy/error, blade worn, mat worn |
| 5.12 | Cut Settings | Frontend | Blade pressure, speed, offset, overcut, corner action |
| 5.13 | Contour Path | Backend | Auto-detect from transparency, manual draw/edit, offset, smooth, simplify |
| 5.14 | Cutter Vendor Integration | Backend | Summa GoSign, Graphtec Cutting Master, Zünd Cut Center, Roland, Mimaki, GCC |
| 5.15 | Contour Export | Backend | SVG, DXF, PLT, AI, PDF export with registration marks and weed lines |
| 5.16 | Cutter Queue | Frontend | View, add, remove, reorder, pause, resume, cancel |
| 5.17 | Cutter Maintenance | Backend | Log, alert, schedule, blade replacement tracking |
| 5.18 | Press Timer | Frontend | Countdown display, audio/visual alarm, repeat until acknowledged, custom sound |
| 5.19 | Press Timer Integration | Backend | Auto-load substrate profile settings (temp/time/pressure), manual override |
| 5.20 | Multiple Timers | Frontend | Support 3+ simultaneous press timers, independent controls |
| 5.21 | Barcode Scanner | Backend | USB HID integration, scan to load job, scan to start timer |
| 5.22 | Webcam QC | Frontend | Capture photo of printed output, compare to original design, log defects |

### Milestone: Beta 3
- **Date:** End of Week 33
- **Criteria:** Worker can send a print job directly to an Epson printer, monitor ink levels, send contour to Summa cutter, and use the press timer for a mug job.
- **Demo:** Export nest → send to Epson printer → monitor queue (3 jobs ahead) → ink level shows 45% cyan → job prints → send contour SVG to Summa → cutter processes → load mug → scan barcode → press timer auto-loads 180°C/180s → alarm sounds → press complete.

---

## 9. Phase 6: Reports, Testing & Polish (Weeks 32–37)

### Goal
Deliver production reporting, comprehensive testing tools, bonus features, and performance optimization. Prepare for GA release.

### Deliverables

| # | Deliverable | Owner | Acceptance Criteria |
|---|-------------|-------|---------------------|
| 6.1 | Daily Production Report | Frontend | Jobs completed, pieces count, sheets count, efficiency, time |
| 6.2 | Weekly/Monthly Reports | Frontend | Aggregated metrics, trend graphs, export as PDF/Excel/CSV |
| 6.3 | Design Popularity Report | Frontend | Most/least printed, ranking, trend over time, graph |
| 6.4 | Substrate Usage Report | Frontend | Which substrates used, count, sheets, trend, graph |
| 6.5 | Ink Consumption Report | Frontend | Estimated per channel, total, trend, graph |
| 6.6 | Paper Consumption Report | Frontend | Sheets, meters, trend, graph |
| 6.7 | Waste Report | Frontend | Material wasted, percentage, by design, by substrate, trend |
| 6.8 | Efficiency Report | Frontend | Nesting efficiency trends, by algorithm, by page size, benchmark |
| 6.9 | Worker Productivity | Frontend | Output per worker, count, time, efficiency (optional P3) |
| 6.10 | Machine Utilization | Frontend | Printer/cutter uptime, downtime, graph |
| 6.11 | Defect Rate Report | Frontend | Quality trends, by type, by design, by substrate, graph |
| 6.12 | Dashboard Widgets | Frontend | Today count, efficiency, queue status, recent jobs, top designs, machine status |
| 6.13 | Dashboard Customization | Frontend | Drag to reorder, add/remove widgets, resize |
| 6.14 | Print Test Patterns | Frontend | Color bars, gradients, resolution, alignment, nozzle check, head alignment |
| 6.15 | System Performance Test | Backend | Benchmark CPU, GPU, disk, RAM, compare to previous runs |
| 6.16 | Database Integrity Test | Backend | Standard and deep check, auto-repair, report generation |
| 6.17 | GPU Stress Test | Backend | Standard and extended, temperature monitoring, stability verification |
| 6.18 | Load & Stress Tests | Backend | 100/500/1000/5000/10000 designs, 100-page nesting, memory leak detection |
| 6.19 | Power Loss Recovery Test | Backend | Simulate crash during save, verify recovery, no data corruption |
| 6.20 | Health Dashboard | Frontend | Overall score (green/yellow/red), per-component status, recommendations |
| 6.21 | Troubleshooting Wizard | Frontend | Step-by-step fixes for printer, cutter, export, upscale, database, network |
| 6.22 | Self-Test on Launch | Backend | Quick or full check, skippable, report generation |
| 6.23 | Dark Mode Polish | Frontend | Complete dark theme, auto-switch by time, high contrast mode |
| 6.24 | Animated Transitions | Frontend | Fade/slide/zoom, configurable duration, disable option |
| 6.25 | Loading Skeletons | Frontend | Shimmer/pulse for all async operations |
| 6.26 | Onboarding Checklist | Frontend | Welcome, setup, first design, first print, completion, skip/resume |
| 6.27 | Achievement Badges | Frontend | First design, first print, 100 designs, 1000 prints, perfect nesting (P3) |
| 6.28 | Daily Tips | Frontend | Production tip on startup, category, previous tips, disable |
| 6.29 | Voice Commands (P3) | Frontend | Start/stop timer, next job, mirror, export, zoom (offline recognition) |
| 6.30 | Performance Optimization | Backend | 60 FPS canvas, virtual scrolling, lazy loading, memory optimization, startup < 3s |

### Milestone: General Availability (GA)
- **Date:** End of Week 37
- **Criteria:** All P0 features complete and tested. All P1 features complete. P2 features at 80%. No critical bugs. Installer works on 100+ customer machines via beta program. Documentation complete.
- **Demo:** Full end-to-end workflow: upload 50 images → upscale 4x → approve 45 → design 10 with templates → add to basket → auto-nest on A3 → add all marks → mirror → export PDF/X-4 → send to printer → send contour to cutter → press timer → complete job → view daily report.

---

## 10. Post-GA Roadmap (Version 2.0+)

| Quarter | Focus | Key Features |
|---------|-------|--------------|
| Q1 2027 | P2 Completion | Advanced filters, AI colorization, style transfer, more templates |
| Q2 2027 | P3 Features | Voice commands, multi-monitor support, touchscreen optimization, cloud sync |
| Q3 2027 | Enterprise | Multi-PC license server, floating licenses, advanced analytics, API access |
| Q4 2027 | Ecosystem | Plugin SDK, third-party integrations, marketplace for templates |

---

## 11. Risk Mitigation in Roadmap

| Risk | Mitigation Strategy |
|------|---------------------|
| Real-ESRGAN integration delays | Start in Phase 0, have CPU fallback ready by Week 4 |
| Canvas engine performance issues | Prototype in Week 8, benchmark with 500 objects by Week 12 |
| Nesting algorithm inefficiency | Implement 3 algorithms (shelf, guillotine, true-shape) for comparison |
| RIP integration complexity | Start with hot folder (simplest), add APIs in Phase 5.2 |
| Hardware compatibility | Maintain test lab with 3 printer models and 2 cutter models |
| Scope creep (3,000 features) | Strict P0-first policy; P2/P3 only after P0+P1 complete |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-06-06 | Product Team | Initial phase roadmap |
