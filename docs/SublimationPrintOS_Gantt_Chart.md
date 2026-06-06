# SublimationPrintOS — Gantt Chart

> **Version:** 1.0 | **Date:** 2026-06-06 | **Status:** Approved

---

## 1. Project Timeline Overview

**Total Duration:** 37 Weeks (approximately 9 months)  
**Start Date:** Week 1 (June 2026)  
**Target GA Release:** Week 37 (March 2027)  
**Team Size:** 3–5 developers per phase (rotating based on module needs)

---

## 2. Gantt Chart by Phase

### Phase 0: Foundation & Installation (Weeks 1–6)

| Task | Owner | Week 1 | Week 2 | Week 3 | Week 4 | Week 5 | Week 6 | Milestone |
|------|-------|--------|--------|--------|--------|--------|--------|-----------|
| Project setup & dev environment | DevOps | ████ | | | | | | |
| Windows installer prototype | DevOps | | ████ | ████ | | | | |
| SQLite schema design & migrations | Backend | ████ | ████ | | | | | |
| AppData folder structure & permissions | Backend | | | ████ | ████ | | | |
| Real-ESRGAN ncnn integration | AI/Backend | ████ | ████ | ████ | ████ | | | |
| GPU detection & CPU fallback | AI/Backend | | | | ████ | ████ | | |
| Basic UI shell (Tauri/Electron) | Frontend | ████ | ████ | ████ | ████ | ████ | | |
| Settings system (company, defaults, theme) | Frontend | | | ████ | ████ | ████ | | |
| Auto-update framework | DevOps | | | | | ████ | ████ | |
| Health check dashboard | Backend | | | | | ████ | ████ | |
| Crash recovery & auto-save | Backend | | | | | | ████ | |
| Keyboard shortcuts framework | Frontend | | | | | | ████ | |
| **M0: Alpha 0** | All | | | | | | | **Week 6** |
| Smoke testing & bug fixes | QA | | | | | | ████ | |

### Phase 1: Upscale Factory & Design Store (Weeks 5–12)

| Task | Owner | W5 | W6 | W7 | W8 | W9 | W10 | W11 | W12 | Milestone |
|------|-------|----|----|----|----|----|-----|-----|-----|-----------|
| Image intake (single/multi/folder/ZIP) | Frontend | | | ████ | ████ | | | | | |
| Hot folder monitoring | Backend | | | | ████ | ████ | | | | |
| Batch queue management UI | Frontend | | | | | ████ | ████ | | | |
| AI upscale engine (complete) | AI/Backend | | | | | ████ | ████ | ████ | | |
| Before/after review UI | Frontend | | | | | | ████ | ████ | | |
| Quality pre-checks (blur/artifacts) | AI/Backend | | | | | | ████ | ████ | | |
| Approve/reject workflow | Frontend | | | | | | | ████ | ████ | |
| Design Store gallery (grid/list/masonry) | Frontend | | | ████ | ████ | ████ | | | | |
| Virtual scrolling & lazy loading | Frontend | | | | ████ | ████ | ████ | | | |
| Search & filter backend | Backend | | | | | ████ | ████ | ████ | | |
| Metadata management | Frontend | | | | | | ████ | ████ | ████ | |
| Approval workflow | Frontend | | | | | | | ████ | ████ | |
| Version control | Backend | | | | | | | ████ | ████ | |
| Bulk operations | Frontend | | | | | | | | ████ | |
| Output configuration | Frontend | | | | | | | ████ | ████ | |
| Processing logs | Backend | | | | | | | | ████ | |
| **M1: Alpha 1** | All | | | | | | | | | **W12** |
| Performance testing (10K designs) | QA | | | | | | | | ████ | |
| Integration testing | QA | | | | | | | | ████ | |

### Phase 2: Design Studio (Weeks 10–19)

| Task | Owner | W10 | W11 | W12 | W13 | W14 | W15 | W16 | W17 | W18 | W19 | Milestone |
|------|-------|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----------|
| Canvas engine prototype | Frontend | ████ | ████ | | | | | | | | | |
| Canvas engine optimization | Frontend | | ████ | ████ | ████ | | | | | | | |
| Zoom & navigation | Frontend | | | ████ | ████ | | | | | | | |
| Object manipulation (select/move/resize) | Frontend | | | | ████ | ████ | | | | | | |
| Align & distribute | Frontend | | | | | ████ | ████ | | | | | |
| Group & boolean operations | Frontend | | | | | | ████ | ████ | | | | |
| Layers panel | Frontend | | | | | | | ████ | ████ | | | |
| Text tool (point/area) | Frontend | | | | | | | | ████ | ████ | | |
| Text formatting & effects | Frontend | | | | | | | | | ████ | ████ | |
| Text styles & variable data | Frontend | | | | | | | | | | ████ | |
| Shape tools (rect/ellipse/star) | Frontend | | | | ████ | ████ | | | | | | |
| Shape properties (fill/stroke/effects) | Frontend | | | | | ████ | ████ | | | | | |
| Image handling (place/crop/resize) | Frontend | | | | | | ████ | ████ | | | | |
| Image adjustments & filters | Frontend | | | | | | | ████ | ████ | | | |
| Advanced image (blur/sharpen/liquify) | Frontend | | | | | | | | ████ | ████ | | |
| Color & background tools | Frontend | | | | | | | | | ████ | ████ | |
| Pen & vector tools | Frontend | | | | | | | | | | ████ | |
| Templates (100+ built-in) | Frontend | | | | ████ | ████ | ████ | ████ | | | | |
| Project management (undo/redo/save) | Frontend | | | | | | | ████ | ████ | | | |
| Font management | Frontend | | | | | | | | | ████ | ████ | |
| **M2: Alpha 2** | All | | | | | | | | | | | **W19** |
| Canvas performance test (500 objects) | QA | | | | | | | | | | ████ | |
| Usability testing (5 users) | QA | | | | | | | | | | ████ | |

### Phase 3: Order Basket & Print Sheet Builder (Weeks 17–24)

| Task | Owner | W17 | W18 | W19 | W20 | W21 | W22 | W23 | W24 | Milestone |
|------|-------|-----|-----|-----|-----|-----|-----|-----|-----|-----------|
| Order Basket UI | Frontend | ████ | ████ | | | | | | | |
| Basket organization (sort/filter/draft) | Frontend | | ████ | ████ | | | | | | |
| Basket import/export (CSV/network) | Backend | | | ████ | ████ | | | | | |
| Production flags (priority/due date) | Frontend | | | | ████ | ████ | | | | |
| Print Sheet page setup | Frontend | | | | | ████ | ████ | | | |
| Auto-nesting (shelf algorithm) | Backend | | | | | ████ | ████ | | | |
| Auto-nesting (guillotine/skyline) | Backend | | | | | | ████ | ████ | | |
| Auto-nesting (true-shape) | Backend | | | | | | | ████ | ████ | |
| Manual nesting UI | Frontend | | | | | | ████ | ████ | | |
| Multi-page management | Frontend | | | | | | | ████ | ████ | |
| Quantity management | Backend | | | | | | | ████ | ████ | |
| Cut guides generation | Frontend | | | | | | | | ████ | |
| Safe guides generation | Frontend | | | | | | | | ████ | |
| Registration marks | Frontend | | | | | | | | ████ | |
| Color bars & trim marks | Frontend | | | | | | | | ████ | |
| Page information (numbers/QR/metadata) | Frontend | | | | | | | | ████ | |
| Mirroring (object & page level) | Frontend | | | | | | | | ████ | |
| Optimization suggestions | Backend | | | | | | | | ████ | |
| Real-time metrics (waste/efficiency) | Frontend | | | | | | | | ████ | |
| **M3: Beta 1** | All | | | | | | | | | **W24** |
| Nesting stress test (100 items) | QA | | | | | | | | ████ | |
| Integration test (basket → nest → export) | QA | | | | | | | | ████ | |

### Phase 4: Export System & Color Management (Weeks 22–27)

| Task | Owner | W22 | W23 | W24 | W25 | W26 | W27 | Milestone |
|------|-------|-----|-----|-----|-----|-----|-----|-----------|
| PNG export (8/16-bit, transparency) | Backend | ████ | ████ | | | | | |
| JPG export (quality, progressive) | Backend | | ████ | ████ | | | | |
| TIFF/WEBP export | Backend | | | ████ | ████ | | | |
| PDF export (single/multi-page) | Backend | | | | ████ | ████ | | |
| PDF/X compliance validation | Backend | | | | | ████ | ████ | |
| ZIP export (bundle, password) | Backend | | | | | | ████ | |
| Export presets | Frontend | | | | ████ | ████ | | |
| Filename patterns | Backend | | | | | ████ | ████ | |
| ICC profile management | Backend | | | | ████ | ████ | | |
| Soft proofing | Frontend | | | | | ████ | ████ | |
| Gamut warning | Frontend | | | | | | ████ | |
| Rendering intent | Backend | | | | | | ████ | |
| Color separation (CMYK/RGB/Lab) | Frontend | | | | | | ████ | |
| Ink coverage & rich black | Frontend | | | | | | | ████ | |
| Monitor calibration wizard | Frontend | | | | | | | ████ | |
| **M4: Beta 2** | All | | | | | | | **W27** |
| PDF Preflight testing | QA | | | | | | ████ | |
| Color accuracy test (Delta E) | QA | | | | | | ████ | |

### Phase 5: Hardware Integration (Weeks 26–33)

| Task | Owner | W26 | W27 | W28 | W29 | W30 | W31 | W32 | W33 | Milestone |
|------|-------|-----|-----|-----|-----|-----|-----|-----|-----|-----------|
| Printer discovery (network/USB) | Backend | ████ | ████ | | | | | | | |
| Printer status & ink levels | Backend | | ████ | ████ | | | | | | |
| Printer queue management | Frontend | | | ████ | ████ | | | | | |
| Direct print (Windows spooler) | Backend | | | | ████ | ████ | | | | |
| Hot folder output | Backend | | | | | ████ | ████ | | | |
| RIP integration (Caldera/Wasatch) | Backend | | | | | | ████ | ████ | | |
| Printer calibration & maintenance | Frontend | | | | | | | ████ | ████ | |
| Cutter discovery (network/USB/serial) | Backend | | | ████ | ████ | | | | | |
| Cutter status & settings | Frontend | | | | ████ | ████ | | | | |
| Contour path generation | Backend | | | | | ████ | ████ | | | |
| Cutter vendor integration | Backend | | | | | | ████ | ████ | | |
| Cutter queue & maintenance | Frontend | | | | | | | ████ | ████ | |
| Press timer UI | Frontend | | | | | | | | ████ | |
| Press timer integration | Backend | | | | | | | | ████ | |
| Multiple simultaneous timers | Frontend | | | | | | | | ████ | |
| Barcode scanner integration | Backend | | | | | | | | ████ | |
| Webcam QC capture | Frontend | | | | | | | | ████ | |
| **M5: Beta 3** | All | | | | | | | | | **W33** |
| Hardware compatibility test (3 printers, 2 cutters) | QA | | | | | | | | ████ | |
| End-to-end production test | QA | | | | | | | | ████ | |

### Phase 6: Reports, Testing & Polish (Weeks 32–37)

| Task | Owner | W32 | W33 | W34 | W35 | W36 | W37 | Milestone |
|------|-------|-----|-----|-----|-----|-----|-----|-----------|
| Daily/weekly/monthly reports | Frontend | ████ | ████ | | | | | |
| Design popularity & substrate reports | Frontend | | ████ | ████ | | | | |
| Ink/paper/waste reports | Frontend | | | ████ | ████ | | | |
| Efficiency & productivity reports | Frontend | | | | ████ | ████ | | |
| Dashboard widgets & customization | Frontend | | | | | ████ | ████ | |
| Print test patterns | Frontend | | | ████ | ████ | | | |
| System performance benchmark | Backend | | | ████ | ████ | | | |
| Database integrity test | Backend | | | | ████ | ████ | | |
| GPU stress test | Backend | | | | | ████ | ████ | |
| Load & stress tests (10K designs) | QA | | | | | ████ | ████ | |
| Power loss recovery test | QA | | | | | | ████ | |
| Health dashboard & troubleshooting | Frontend | | | | | | ████ | ████ | |
| Self-test on launch | Backend | | | | | | | ████ | |
| Dark mode & UI polish | Frontend | | | | | ████ | ████ | |
| Animated transitions & loading skeletons | Frontend | | | | | | ████ | |
| Onboarding checklist & daily tips | Frontend | | | | | | | ████ | |
| Performance optimization | All | | | | | ████ | ████ | |
| Documentation (user manual, API docs) | Tech Writers | | | ████ | ████ | ████ | ████ | |
| Beta program (100+ machines) | QA/PM | | | | ████ | ████ | ████ | |
| Bug fixes & stabilization | All | | | | | | ████ | ████ | |
| **M6: GA Release** | All | | | | | | | **W37** |
| Final release candidate testing | QA | | | | | | | ████ | |
| Release approval & packaging | DevOps | | | | | | | ████ | |

---

## 3. Critical Path

```
Week 1:  Project Setup ──► Week 6:  M0 Alpha 0 ──► Week 12: M1 Alpha 1 ──► Week 19: M2 Alpha 2
   │                          │                        │                        │
   │                          ▼                        ▼                        ▼
   │                     Installer              Upscale + Store          Design Studio
   │                     Works                Works Smoothly             Works
   │
   ▼
Week 24: M3 Beta 1 ──► Week 27: M4 Beta 2 ──► Week 33: M5 Beta 3 ──► Week 37: M6 GA
   │                        │                        │                        │
   ▼                        ▼                        ▼                        ▼
Nesting Works           Export + Color          Hardware Connected      Production Ready
85%+ Efficiency         PDF/X-4 Compliant       Printer + Cutter        0 Critical Bugs
```

---

## 4. Resource Allocation

| Phase | Duration | Frontend Devs | Backend Devs | AI/ML Dev | DevOps | QA | Tech Writers |
|-------|----------|---------------|--------------|-----------|--------|----|--------------|
| 0 | 6 weeks | 1 | 1 | 1 | 1 | 0 | 0 |
| 1 | 8 weeks | 2 | 1 | 1 | 0 | 1 | 0 |
| 2 | 10 weeks | 3 | 1 | 0 | 0 | 1 | 0 |
| 3 | 8 weeks | 2 | 1 | 0 | 0 | 1 | 0 |
| 4 | 6 weeks | 1 | 1 | 0 | 0 | 1 | 0 |
| 5 | 8 weeks | 1 | 2 | 0 | 0 | 1 | 0 |
| 6 | 6 weeks | 1 | 1 | 0 | 1 | 2 | 1 |
| **Total** | **52 weeks** | **11** | **8** | **2** | **2** | **7** | **1** |

*(Note: Some developers work across multiple phases. Total unique headcount: 5 developers + 1 DevOps + 1 QA lead + 1 tech writer = 8 people)*

---

## 5. Risk Buffers

| Phase | Planned Duration | Risk Buffer | Total Duration | Buffer Strategy |
|-------|---------------|-------------|----------------|-----------------|
| 0 | 5 weeks | 1 week | 6 weeks | Installer testing |
| 1 | 7 weeks | 1 week | 8 weeks | AI model tuning |
| 2 | 9 weeks | 1 week | 10 weeks | Canvas performance |
| 3 | 7 weeks | 1 week | 8 weeks | Nesting algorithm |
| 4 | 5 weeks | 1 week | 6 weeks | PDF compliance |
| 5 | 7 weeks | 1 week | 8 weeks | Hardware compatibility |
| 6 | 4 weeks | 2 weeks | 6 weeks | Beta bug fixes |

---

## 6. Key Dates

| Date | Event | Description |
|------|-------|-------------|
| Week 6 | Alpha 0 | Foundation complete, installer works, basic AI upscale |
| Week 12 | Alpha 1 | Upscale + Design Store complete, 10K designs browsable |
| Week 19 | Alpha 2 | Design Studio complete, templates + effects working |
| Week 24 | Beta 1 | Production pipeline ready, nesting + marks + mirroring |
| Week 27 | Beta 2 | Export + color management ready, PDF/X-4 compliant |
| Week 33 | Beta 3 | Hardware integration complete, printer + cutter + timer |
| Week 35 | RC 1 | Release candidate, beta program feedback incorporated |
| Week 37 | GA Release | General availability, all docs complete, 0 critical bugs |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-06-06 | Product Team | Initial Gantt chart |
