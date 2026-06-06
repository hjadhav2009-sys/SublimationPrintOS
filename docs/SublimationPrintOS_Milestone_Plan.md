# SublimationPrintOS — Milestone Plan

> **Version:** 1.0 | **Date:** 2026-06-06 | **Status:** Approved

---

## 1. Milestone Overview

| Milestone | Phase | Target Date | Duration | Key Deliverable | Success Criteria |
|-----------|-------|-------------|----------|-----------------|------------------|
| M0: Foundation Complete | 0 | Week 6 | 6 weeks | Working installer + AI shell | Install on clean VM, launch, upscale 1 image |
| M1: Upscale & Store Ready | 1 | Week 12 | 6 weeks | Full Design Store + batch upscale | 100 images uploaded, 50 upscaled, browsed in store |
| M2: Design Studio Ready | 2 | Week 19 | 7 weeks | Canva-like editor with templates | Create keychain design with text, image, effects |
| M3: Production Pipeline Ready | 3 | Week 24 | 5 weeks | Order Basket + Print Sheet Builder | 50-item order nested on A3 with 85%+ efficiency |
| M4: Export & Color Ready | 4 | Week 27 | 3 weeks | Multi-format export + ICC profiles | Export PDF/X-4 with embedded ICC, all marks |
| M5: Hardware Connected | 5 | Week 33 | 6 weeks | Printer + Cutter + Press Timer | Send job to printer, contour to cutter, timer alarm |
| M6: GA Release | 6 | Week 37 | 4 weeks | Production reports + polish + docs | Beta program complete, 0 critical bugs, docs ready |

---

## 2. M0: Foundation Complete (Week 6)

### Objective
Establish the technical foundation that all subsequent phases build upon. Deliver a working installer, database, settings system, and basic AI upscaling integration.

### Deliverables
- Windows installer (.exe) with silent mode and portable mode
- SQLite database with complete schema and migrations
- AppData folder auto-creation and permission verification
- Settings & preferences system (company profile, defaults, themes, languages)
- Real-ESRGAN ncnn Vulkan integration (GPU detection, model loading, basic upscale)
- Basic UI shell (module navigation, sidebar, status bar, dark mode)
- Auto-update framework (check, download, install, rollback)
- Health check dashboard (system compatibility, GPU driver, disk/RAM)
- Crash recovery (auto-save interval, restore dialog)
- Keyboard shortcuts framework

### Acceptance Criteria
1. Installer completes successfully on clean Windows 10/11 VM in under 5 minutes
2. App launches from desktop shortcut in under 10 seconds
3. Settings can be configured (company name, default page size, theme, language)
4. Real-ESRGAN can upscale a single 1920x1080 image to 4x in under 30 seconds on GPU
5. CPU fallback works when GPU is unavailable (upscale completes in under 2 minutes)
6. Auto-save creates recovery file every 2 minutes
7. Health check passes on recommended hardware configuration
8. Update check connects to server (or simulates offline package)
9. No crashes during 1-hour smoke test

### Demo Script
1. Install on fresh Windows 11 VM
2. Launch app → show dark mode UI shell
3. Open Settings → set company name "PrintMaster Delhi" → set default page A4
4. Upload test image (1920x1080 JPG)
5. Select 4x upscale → start processing → show GPU usage
6. Simulate GPU failure → show CPU fallback → complete upscale
7. Show auto-save recovery dialog on forced crash
8. Run health check → show green status

### Risks & Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| Real-ESRGAN ncnn build fails | High | Pre-build binary in Week 2, test on target hardware Week 3 |
| Installer permission issues | Medium | Test on standard (non-admin) Windows account Week 4 |
| SQLite WAL mode conflicts | Low | Test concurrent read/write scenarios Week 3 |

---

## 3. M1: Upscale & Store Ready (Week 12)

### Objective
Deliver the complete image intake, AI upscaling, quality control, and design gallery system. This is the first user-facing production module and the primary value proposition.

### Deliverables
- Complete image intake (single/multi/folder/ZIP/clipboard/hot folder)
- Full batch queue management (add/remove/reorder/pause/resume/cancel/progress)
- Before/after review (split view, side-by-side, zoom, quality score)
- Quality pre-checks (blur, artifacts, banding, noise, resolution, duplicates)
- Approve/reject workflow with reasons and batch actions
- Design Store gallery (grid/list/masonry, virtual scroll, lazy load, 3 thumbnail sizes)
- Search & filter (name, SKU, category, tag, color, size, date, status)
- Metadata management (SKU, name, category, tags, notes, dominant colors, usage count)
- Approval workflow (designer submit → manager approve → owner sign-off)
- Version control (auto-save versions, comparison, rollback)
- Bulk operations (categorize, tag, delete, export)
- Output configuration (PNG/JPG/TIFF/WEBP, quality, color space, DPI, filename patterns)
- Processing logs (per-image, per-batch, exportable)

### Acceptance Criteria
1. Upload 100 images via drag-and-drop in under 2 minutes
2. Batch upscale 50 images (4x) in under 10 minutes on GPU
3. Before/after split view renders in under 1 second
4. Design Store scrolls smoothly at 60 FPS with 10,000 designs
5. Search returns results in under 200ms for 50,000 designs
6. Approve 40 images and reject 10 with reasons in under 5 minutes
7. Auto-detect 5 duplicate images using MD5 hash
8. Auto-detect 3 similar images using pHash with 90% threshold
9. Export 50 approved images as PNG 300 DPI in under 5 minutes
10. Processing log contains all actions with timestamps

### Demo Script
1. Open Upscale Factory → drag 50 images onto window
2. Set 4x upscale, PNG output, 300 DPI
3. Start batch → show queue with progress bars, ETA, thumbnails
4. Review first image → show before/after split view → drag slider
5. Approve 40 images → reject 10 (select reasons: "too blurry", "wrong color")
6. Open Design Store → show grid view with 10,000 designs → scroll smoothly
7. Search "Diwali" → filter by category "Keychain" → sort by popularity
8. Select 5 designs → bulk add tag "Festival 2026" → bulk export as ZIP
9. Show version history of one design → compare versions → rollback

### Risks & Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| Virtual scrolling performance | High | Prototype with 10K items Week 8, optimize Week 10 |
| pHash accuracy | Medium | Tune threshold with 100 test images Week 9 |
| Batch queue memory leak | High | Stress test 1,000 images Week 11 |

---

## 4. M2: Design Studio Ready (Week 19)

### Objective
Deliver a Canva-like design editor that enables designers to create print-ready designs with templates, shapes, text, images, effects, and layers. This is the most complex UI module.

### Deliverables
- Canvas engine (infinite canvas, multiple artboards, rulers, guides, grid, smart guides, snap)
- Zoom & navigation (25%-1600%, presets, fit, actual size, mouse wheel, pan)
- Object manipulation (select, move, resize, rotate, nudge, align, distribute, flip, lock, hide)
- Group & boolean (group/ungroup, merge, union, subtract, intersect, exclude, crop)
- Layers panel (toggle, list, thumbnails, visibility, lock, opacity, reorder, folders, solo, isolation)
- Text tool (point/area text, font family, size, bold/italic/underline, color, alignment, spacing)
- Text effects (shadow, stroke, glow, text on path, vertical text, columns, bullets, spell check)
- Text styles (save/load presets, find/replace, variable data CSV merge)
- Shape tools (rectangle, rounded rect, ellipse, polygon, star, line, arrow, connector)
- Shape properties (fill, gradient, pattern, stroke, effects)
- Image handling (place, drag-drop, clipboard, linked/embedded, crop, resize)
- Image adjustments (brightness, contrast, saturation, hue, exposure, highlights, shadows)
- Image filters (levels, curves, color balance, invert, posterize, threshold)
- Advanced image (sharpen, blur, noise reduction, liquify, puppet warp)
- Color & background (color replacement, match color, remove background, canvas size)
- Pen & vector tools (Bezier pen, anchor points, path operations, shape builder)
- Templates (100+ built-in: keychain, mug, car hanger, festival, etc.)
- Project management (undo/redo 500 steps, auto-save, crash recovery, recent files)
- Font management (system fonts, upload TTF/OTF, Google Fonts offline cache)

### Acceptance Criteria
1. Canvas renders at 60 FPS with 500 objects on screen
2. Zoom from 25% to 1600% in under 500ms
3. Smart guides appear within 50ms of dragging object near alignment
4. Text tool creates editable text box in under 200ms
5. Apply "Keychain Round 50mm" template in under 1 second
6. Add Hindi text "Happy Diwali" with 3 different fonts
7. Place 10MB image, crop to circle, add drop shadow in under 5 seconds
8. Undo 100 steps in under 2 seconds
9. Auto-save triggers every 2 minutes without UI freeze
10. Export design as PNG with bleed marks in under 3 seconds

### Demo Script
1. Open Design Studio → create new project → select A4
2. Apply "Keychain Round 50mm" template → show auto-fit guides
3. Place upscaled image from Design Store → drag to center → smart guides snap
4. Add text "Happy Diwali" → change font to Hindi → apply drop shadow effect
5. Add shape (star) → fill with gradient → add stroke → group with text
6. Duplicate group 5 times → align horizontally → distribute evenly
7. Zoom to 400% → pan → show pixel-perfect alignment
8. Undo 10 steps → redo 5 steps → show history panel
9. Save to Design Store → show in gallery with thumbnail
10. Export as PNG with bleed marks → open in image viewer

### Risks & Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| Canvas engine performance with 500+ objects | High | Benchmark prototype Week 12, optimize rendering Week 15 |
| Hindi font rendering issues | Medium | Test with 20 popular Hindi fonts Week 14 |
| Template system complexity | Medium | Simplify to shape masks + guides Week 13 |
| Undo history memory usage | Medium | Compress history states, limit to 500 Week 16 |

---

## 5. M3: Production Pipeline Ready (Week 24)

### Objective
Deliver the production cart system and print sheet layout engine. This connects design to physical production.

### Deliverables
- Order Basket (add from store, remove, quantity, substrate, size, notes)
- Basket organization (sort, filter, save draft, load draft, duplicate, rename)
- Basket import/export (CSV, local network share, barcode/QR)
- Production flags (priority, due date, status, notes)
- Print Sheet page setup (A4/A3/roll/custom, DPI, margins, gaps, bleed, safe zone)
- Auto-nesting (shelf, guillotine, skyline, maximal rectangles, true-shape)
- Manual nesting (drag, snap, rotate, scale, nudge, align, distribute)
- Multi-page management (auto-generate, manual add/delete/reorder, duplicate, master page)
- Quantity management (auto-calculate, fill sheet, remainder handling)
- Cut guides (solid/dashed/dotted, contour, bounding box)
- Safe guides (style, color, width, offset)
- Registration marks (L-corner, crosshair, circle, QR, vendor-specific)
- Color bars (CMYK + RGB + grayscale)
- Trim/corner/center marks
- Page information (numbers, job ID, date, QR, substrate, press settings)
- Mirroring (object-level, page-level horizontal/vertical/both, normal+mirrored)
- Optimization suggestions ("Rotate 90° to save 1 sheet")
- Real-time metrics (waste %, efficiency %, sheet count)

### Acceptance Criteria
1. Load order of 50 designs into basket in under 30 seconds
2. Auto-nest 50 items on A3 using shelf algorithm in under 2 seconds
3. Auto-nest 50 items using true-shape in under 10 seconds
4. Achieve 85%+ nesting efficiency on typical keychain order
5. Manual drag of 1 item with 60 FPS smoothness
6. Add all marks (cut, safe, registration, color bars, trim) in under 5 seconds
7. Mirror 10-page job horizontally in under 3 seconds
8. Generate 100-page job with auto-page-creation in under 1 minute
9. Real-time waste percentage updates within 100ms of any change
10. Export 10-page PDF with all marks in under 30 seconds

### Demo Script
1. Open Order Basket → add 20 keychains + 10 mugs + 5 car hangers from Design Store
2. Set quantities: keychains 150 each, mugs 50 each, car hangers 30 each
3. Select substrates: metal for keychains, ceramic for mugs, acrylic for hangers
4. Confirm order → load in Print Sheet Builder
5. Select A3 paper → set margins 5mm → gaps 2mm → bleed 3mm
6. Choose true-shape nesting → auto-compute → show 87% efficiency, 12 sheets
7. Review layout → drag 2 items to fill gaps → efficiency jumps to 91%
8. Add cut guides (dashed, red) → safe guides (dotted, blue) → registration marks (L-corner, all corners)
9. Add color bars (top edge) → page numbers (bottom-right) → QR codes (bottom-left)
10. Mirror entire job horizontally → show "_mirrored" suffix
11. Export as PDF/X-4 → open in Adobe Acrobat → verify all marks

### Risks & Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| True-shape nesting algorithm too slow | High | Implement shelf first (fast), add true-shape as option Week 20 |
| Multi-page memory usage | Medium | Test with 500-page job Week 22, optimize page rendering |
| Vendor-specific registration marks | Low | Start with generic L-corner, add vendor marks Week 23 |

---

## 6. M4: Export & Color Ready (Week 27)

### Objective
Deliver complete multi-format export with production standards compliance and color accuracy tools.

### Deliverables
- PNG export (8/16-bit, transparency, interlaced)
- JPG export (quality 0-100, progressive/baseline, chroma subsampling)
- TIFF export (compression, bit depth 8/16/32)
- WEBP export (quality, lossless)
- PDF export (single/multi-page, compression, downsample, color space)
- PDF compliance (PDF/A, PDF/X-1a, PDF/X-3, PDF/X-4)
- ZIP export (bundle, folder structure, compression, password)
- Export presets (save/load named configurations)
- Export scope (current page, all pages, selected pages, selected objects)
- Filename patterns ({job_id}, {page}, {date}, {time}, {mirrored}, {substrate})
- ICC profile management (upload, organize, validate, embed, strip)
- Soft proofing (toggle, profile selection, paper color simulation)
- Gamut warning (highlight out-of-gamut, toggle, color, opacity)
- Rendering intent (perceptual, relative colorimetric, saturation, absolute, auto)
- Color separation (CMYK/RGB/Lab channel preview, UCR, GCR)
- Ink coverage (visual density map, percentage per channel, total)
- Rich black (custom CMYK recipe, pure black override)
- Monitor calibration (reminder, wizard, compensation)

### Acceptance Criteria
1. Export 10-page A3 job as PNG 300 DPI in under 30 seconds
2. Export same job as PDF/X-4 in under 20 seconds
3. PDF passes Adobe Acrobat Preflight for PDF/X-4 compliance
4. Soft proofing toggle updates canvas in under 500ms
5. Gamut warning highlights out-of-gamut colors within 1 second
6. ICC profile embeds correctly and is readable by RIP software
7. Color separation shows Cyan channel in under 1 second
8. Ink coverage report generates in under 2 seconds for 10-page job
9. Export preset saves and loads in under 1 second
10. ZIP export of 100-page job completes in under 2 minutes

### Demo Script
1. Load 10-page nest from previous milestone
2. Export as PNG 300 DPI → show progress bar → open folder
3. Export as PDF/X-4 → run Preflight → show compliance report
4. Select ceramic mug ICC profile → enable soft proofing → show color shift
5. Enable gamut warning → show 3 red-highlighted areas → adjust colors → warnings disappear
6. Switch rendering intent to "Perceptual" → show difference vs "Relative Colorimetric"
7. View Cyan channel only → show ink coverage map → total 45% cyan
8. Save export preset "Standard Production" → load in new job → apply instantly
9. Export as ZIP with password → verify contents

### Risks & Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| PDF/X-4 compliance validation | Medium | Test with 3 RIP software packages Week 25 |
| ICC profile compatibility | Medium | Test with 10 profiles from major manufacturers Week 26 |
| Color separation performance | Low | Pre-render separations in background Week 26 |

---

## 7. M5: Hardware Connected (Week 33)

### Objective
Connect to physical printers, cutters, and heat presses. Enable direct production workflow from software to physical output.

### Deliverables
- Printer discovery (network SNMP/mDNS/Bonjour/WSD, USB)
- Printer status (online/offline/busy/error, ink levels, paper loaded)
- Printer queue (view, add, remove, reorder, pause, resume, cancel, priority)
- Direct print (Windows spooler, bypass RIP)
- Hot folder output (auto-save to watched folder, subfolder, filename pattern)
- RIP integration (Caldera VisualRIP+, Wasatch SoftRIP, Onyx Thrive, JDF)
- Printer calibration (nozzle check, head alignment, cleaning cycle, wizard)
- Maintenance log (track actions, alert when due, schedule)
- Cutter discovery (network, USB, serial)
- Cutter status (online/offline/busy/error, blade worn)
- Cut settings (blade pressure, speed, offset, overcut, corner action)
- Contour path (auto-detect from transparency, manual draw, offset, smooth)
- Cutter vendor integration (Summa GoSign, Graphtec Cutting Master, Zünd, Roland, Mimaki)
- Contour export (SVG, DXF, PLT, AI, PDF)
- Cutter queue (view, add, remove, reorder, pause, resume, cancel)
- Cutter maintenance (log, alert, schedule)
- Press timer (countdown, audio/visual alarm, repeat until acknowledged, custom sound)
- Press timer integration (auto-load substrate settings, manual override)
- Multiple simultaneous timers (3+ independent)
- Barcode scanner integration (USB HID, scan to load job)
- Webcam QC capture (photo of printed output, compare to original, log defects)

### Acceptance Criteria
1. Discover Epson printer on network in under 10 seconds
2. Display ink levels (C/M/Y/K) within 5 seconds of selection
3. Send 10-page PDF to printer queue in under 5 seconds
4. Hot folder write completes in under 2 seconds per page
5. Caldera RIP picks up hot folder file within 30 seconds
6. Send contour SVG to Summa cutter in under 3 seconds
7. Press timer counts down accurately (±1 second over 180 seconds)
8. Alarm sounds within 1 second of timer completion
9. Alarm repeats every 10 seconds until acknowledged
10. Scan barcode to load correct job settings in under 2 seconds

### Demo Script
1. Open Hardware Hub → auto-discover Epson printer + Summa cutter
2. Select printer → show ink levels (C: 45%, M: 60%, Y: 70%, K: 80%)
3. Load 10-page nest → send to printer queue → show queue position 1
4. Monitor print progress → show "Page 3 of 10" → ink level updates
5. Export contour paths → send to Summa cutter → show cut preview
6. Load mug job → scan barcode → auto-load press settings: 180°C, 180s, medium pressure
7. Start press timer → show large countdown display
8. Timer completes → alarm sounds → screen flashes → press any key to stop
9. Take webcam photo of pressed mug → compare to original → log "Perfect match"

### Risks & Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| Printer discovery fails on some networks | High | Test with 3 network configurations Week 28 |
| RIP hot folder timing issues | Medium | Implement file lock detection, retry logic Week 29 |
| Cutter driver compatibility | High | Test with Summa + Graphtec in lab Week 30 |
| Press timer accuracy | Medium | Use high-precision timer API, test 100 times Week 31 |

---

## 8. M6: GA Release (Week 37)

### Objective
Deliver production reporting, comprehensive testing tools, bonus features, and performance optimization. Complete beta program and prepare for general availability.

### Deliverables
- Daily/weekly/monthly production reports (jobs, pieces, sheets, efficiency)
- Design popularity report (most/least printed, ranking, trend)
- Substrate usage, ink consumption, paper consumption, waste reports
- Efficiency report (by algorithm, page size, design count)
- Worker productivity, machine utilization, defect rate reports
- Dashboard widgets (today count, efficiency, queue, recent jobs, top designs)
- Dashboard customization (drag reorder, add/remove, resize)
- Print test patterns (color bars, gradients, resolution, alignment, nozzle check)
- System performance test (benchmark CPU, GPU, disk, RAM)
- Database integrity test (standard/deep, auto-repair)
- GPU stress test (standard/extended, temperature monitoring)
- Load/stress tests (100-10000 designs, 100-page nesting)
- Power loss recovery test (simulate crash, verify recovery)
- Health dashboard (overall score, per-component status, recommendations)
- Troubleshooting wizard (printer, cutter, export, upscale, database, network)
- Self-test on launch (quick/full, skippable, report)
- Dark mode polish, animated transitions, loading skeletons
- Onboarding checklist, daily tips, keyboard shortcut overlay
- Performance optimization (60 FPS, virtual scroll, lazy load, <3s startup)
- Complete documentation (user manual, API docs, troubleshooting guide)
- Beta program (100+ customer machines, feedback collection, bug fixes)

### Acceptance Criteria
1. Generate daily production report in under 2 seconds
2. Dashboard renders with 10 widgets in under 1 second
3. Health check completes in under 30 seconds
4. Self-test on launch completes in under 10 seconds (quick mode)
5. App cold start in under 3 seconds (optimized from 5s)
6. Canvas maintains 60 FPS with 500 objects
7. Design Store scrolls at 60 FPS with 100,000 designs
8. Beta program receives 0 critical bug reports in final 2 weeks
9. All P0 features complete and tested
10. All P1 features complete
11. P2 features at 80% completion
12. Documentation complete and reviewed

### Demo Script
1. Open Dashboard → show today: 45 jobs, 2,300 pieces, 89% efficiency
2. Drag widgets to reorder → add "Machine Status" widget → resize
3. Generate weekly report → export as Excel → show trend graph
4. Run health check → show green for all components → export report
5. Simulate power loss during export → relaunch app → show recovery dialog → restore 99% of work
6. Run GPU stress test → show temperature graph → pass after 10 minutes
7. Complete onboarding checklist → earn "First Design" badge
8. Press "?" → show keyboard shortcut overlay → search "mirror" → show Ctrl+Shift+M
9. Show daily tip: "Tip: Use true-shape nesting for irregular designs to save 15% paper"
10. Full end-to-end: upload → upscale → design → basket → nest → export → print → cut → press → report

### Risks & Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| Beta program finds critical bug | High | Reserve 2 weeks (Week 35-36) for bug fixes only |
| Performance targets not met | Medium | Profile and optimize in Week 34, cut P2 features if needed |
| Documentation incomplete | Low | Start documentation in Week 30, review in Week 35 |

---

## 9. Milestone Dependencies

```
Week:  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37
       |--M0--|        |--M1--|              |--M2--|              |--M3--|     |M4|  |-----M5-----|  |--M6--|
              |--M1--|              |--M2--|              |--M3--|     |M4|  |-----M5-----|  |--M6--|

M0 ──► M1 ──► M2 ──► M3 ──► M4 ──► M5 ──► M6
       │      │      │      │      │      │
       │      │      │      │      │      └─ Beta program, docs, polish, reports
       │      │      │      │      └─ Hardware integration, printer, cutter, timer
       │      │      │      └─ Export formats, color management, ICC profiles
       │      │      └─ Order basket, nesting, print sheet builder, marks
       │      └─ Design studio, templates, shapes, text, effects, layers
       └─ Upscale factory, design store, quality checks, approval workflow
```

---

## 10. Entry & Exit Criteria per Milestone

| Milestone | Entry Criteria | Exit Criteria |
|-----------|---------------|---------------|
| M0 | Project kickoff, team assembled, dev environment ready | Installer works, DB ready, AI shell runs, settings save, no crashes in 1h test |
| M1 | M0 complete, UI framework stable, Real-ESRGAN integrated | 100 images uploaded, 50 upscaled, store browses 10K designs smoothly, search <200ms |
| M2 | M1 complete, canvas engine prototype working | Keychain design created with text/image/effects, exports correctly, undo/redo works |
| M3 | M2 complete, order basket UI ready | 50-item order nested at 85%+ efficiency, all marks added, mirrored, exported as PDF |
| M4 | M3 complete, export framework ready | PDF/X-4 compliant, soft proofing works, ICC embeds correctly, color separation viewable |
| M5 | M4 complete, hardware test lab ready | Job sent to printer, contour to cutter, timer alarm sounds, barcode scan works |
| M6 | M5 complete, beta program running | 0 critical bugs in 2 weeks, all docs complete, performance targets met, GA approved |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-06-06 | Product Team | Initial milestone plan |
