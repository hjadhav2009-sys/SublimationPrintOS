# SublimationPrintOS — Use Case Diagrams

> **Version:** 1.0 | **Date:** 2026-06-06 | **Status:** Approved

---

## 1. System Boundary Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        SUBLIMATIONPRINTOS SYSTEM                             │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────────┐│
│  │                         ACTORS                                           ││
│  │                                                                          ││
│  │   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐ ││
│  │   │  Admin   │  │ Designer │  │  Worker  │  │ QC Worker│  │  System  │ ││
│  │   │ (Rajesh) │  │ (Priya)  │  │  (Amit)  │  │ (Sneha)  │  │(AutoProc)│ ││
│  │   └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘ ││
│  │        │             │             │             │             │       ││
│  └────────┼─────────────┼─────────────┼─────────────┼─────────────┼───────┘│
│           │             │             │             │             │        │
│  ┌────────┼─────────────┼─────────────┼─────────────┼─────────────┼───────┐│
│  │        │             │             │             │             │       ││
│  │   ┌────┴─────────────┴─────────────┴─────────────┴─────────────┴───┐   ││
│  │   │                    USE CASES                                    │   ││
│  │   │                                                                  │   ││
│  │   │  [UC-001] Upload Images ────────────────► Designer, System      │   ││
│  │   │  [UC-002] AI Upscale ───────────────────► Designer, System      │   ││
│  │   │  [UC-003] Quality Pre-Check ───────────► Designer, System      │   ││
│  │   │  [UC-004] Approve/Reject Designs ───────► Designer             │   ││
│  │   │  [UC-005] Create/Edit Designs ──────────► Designer             │   ││
│  │   │  [UC-006] Manage Design Store ────────────► Designer, Admin       │   ││
│  │   │  [UC-007] Build Order Basket ───────────► Worker               │   ││
│  │   │  [UC-008] Auto-Nest Designs ────────────► Worker, System        │   ││
│  │   │  [UC-009] Manual Nest Adjust ───────────► Worker               │   ││
│  │   │  [UC-010] Add Marks & Guides ───────────► Worker               │   ││
│  │   │  [UC-011] Mirror for Sublimation ───────► Worker               │   ││
│  │   │  [UC-012] Export Print Sheets ──────────► Worker, System        │   ││
│  │   │  [UC-013] Send to Printer ──────────────► Worker, System        │   ││
│  │   │  [UC-014] Send to Cutter ───────────────► Worker, System        │   ││
│  │   │  [UC-015] Press Timer ──────────────────► Worker, System        │   ││
│  │   │  [UC-016] Quality Check ────────────────► QC Worker             │   ││
│  │   │  [UC-017] View Production Reports ──────► Admin                 │   ││
│  │   │  [UC-018] Configure System Settings ────► Admin                 │   ││
│  │   │  [UC-019] Manage Users & Permissions ───► Admin                 │   ││
│  │   │  [UC-020] Run Diagnostics ──────────────► Admin, System         │   ││
│  │   │                                                                  │   ││
│  │   └──────────────────────────────────────────────────────────────────┘   ││
│  │                                                                         ││
│  └─────────────────────────────────────────────────────────────────────────┘│
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Module: Upscale Factory Use Cases

```
┌─────────────────────────────────────────────────────────────────┐
│                    UPSCALE FACTORY MODULE                        │
│                                                                  │
│  Actor: Designer (Priya)                                         │
│  Actor: System (Auto-Process)                                      │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                                                             ││
│  │  [UC-UF-001] Upload Single Image                          ││
│  │       │                                                     ││
│  │       ▼                                                     ││
│  │  [UC-UF-002] Upload Multiple Images                       ││
│  │       │                                                     ││
│  │       ▼                                                     ││
│  │  [UC-UF-003] Monitor Hot Folder                            ││
│  │       │                                                     ││
│  │       ▼                                                     ││
│  │  [UC-UF-004] Configure Batch Queue                         ││
│  │       │                                                     ││
│  │       ▼                                                     ││
│  │  [UC-UF-005] Select Upscale Model (2x/4x/8x)              ││
│  │       │                                                     ││
│  │       ▼                                                     ││
│  │  [UC-UF-006] Configure Output Format (PNG/JPG/TIFF)       ││
│  │       │                                                     ││
│  │       ▼                                                     ││
│  │  [UC-UF-007] Start Batch Processing                        ││
│  │       │                                                     ││
│  │       ▼                                                     ││
│  │  [UC-UF-008] Monitor Progress (GPU/CPU, ETA, %)           ││
│  │       │                                                     ││
│  │       ▼                                                     ││
│  │  [UC-UF-009] Review Before/After (Split View)             ││
│  │       │                                                     ││
│  │       ├──► [UC-UF-010] Approve Image ──► Move to Store    ││
│  │       │                                                     ││
│  │       └──► [UC-UF-011] Reject Image ──► Archive + Reason  ││
│  │                                                             ││
│  │  [UC-UF-012] Re-process Rejected with Different Settings  ││
│  │                                                             ││
│  │  [UC-UF-013] Auto-Quality Check (Blur/Artifacts/Noise)     ││
│  │       │                                                     ││
│  │       ├──► Pass ──► Queue for Review                       ││
│  │       │                                                     ││
│  │       └──► Fail ──► Flag for Manual Review                 ││
│  │                                                             ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  <<include>> Auto-Detect GPU/CPU Fallback                        │
│  <<include>> Generate Processing Log                             │
│  <<extend>> Custom Scale Factor (1.5x, 3x, etc.)                 │
│  <<extend>> Pre-Process Filters (Denoise, Sharpen)              │
│  <<extend>> Post-Process Filters (Color Correction)              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 3. Module: Design Studio Use Cases

```
┌─────────────────────────────────────────────────────────────────┐
│                    DESIGN STUDIO MODULE                          │
│                                                                  │
│  Actor: Designer (Priya)                                         │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                                                             ││
│  │  [UC-DS-001] Create New Project                            ││
│  │       │                                                     ││
│  │       ├──► [UC-DS-002] Set Canvas Size (A4/A3/Custom)     ││
│  │       │                                                     ││
│  │       ├──► [UC-DS-003] Apply Template (Keychain/Mug/etc.) ││
│  │       │                                                     ││
│  │       └──► [UC-DS-004] Import Image from Store/Upload      ││
│  │                                                             ││
│  │  [UC-DS-005] Add Text Element                              ││
│  │       │                                                     ││
│  │       ├──► [UC-DS-006] Format Text (Font, Size, Color)   ││
│  │       │                                                     ││
│  │       ├──► [UC-DS-007] Apply Text Effects (Shadow/Stroke)  ││
│  │       │                                                     ││
│  │       └──► [UC-DS-008] Text on Path/Circle               ││
│  │                                                             ││
│  │  [UC-DS-009] Add Shape (Rectangle/Circle/Star)            ││
│  │       │                                                     ││
│  │       ├──► [UC-DS-010] Apply Fill (Solid/Gradient/Pattern)││
│  │       │                                                     ││
│  │       └──► [UC-DS-011] Apply Stroke (Width/Color/Dash)   ││
│  │                                                             ││
│  │  [UC-DS-012] Manipulate Objects                            ││
│  │       │                                                     ││
│  │       ├──► [UC-DS-013] Move/Resize/Rotate                ││
│  │       │                                                     ││
│  │       ├──► [UC-DS-014] Align & Distribute                ││
│  │       │                                                     ││
│  │       ├──► [UC-DS-015] Flip Horizontal/Vertical          ││
│  │       │                                                     ││
│  │       ├──► [UC-DS-016] Group/Ungroup                     ││
│  │       │                                                     ││
│  │       └──► [UC-DS-017] Lock/Hide Objects                 ││
│  │                                                             ││
│  │  [UC-DS-018] Manage Layers                                 ││
│  │       │                                                     ││
│  │       ├──► [UC-DS-019] Reorder Layers (Drag)             ││
│  │       │                                                     ││
│  │       ├──► [UC-DS-020] Group in Folders                  ││
│  │       │                                                     ││
│  │       ├──► [UC-DS-021] Apply Layer Effects               ││
│  │       │                                                     ││
│  │       └──► [UC-DS-022] Mask/Clipping Mask                ││
│  │                                                             ││
│  │  [UC-DS-023] Edit Image (Filters/Adjustments)             ││
│  │       │                                                     ││
│  │       ├──► [UC-DS-024] Brightness/Contrast/Saturation    ││
│  │       │                                                     ││
│  │       ├──► [UC-DS-025] Blur/Sharpen/Noise Reduction      ││
│  │       │                                                     ││
│  │       └──► [UC-DS-026] Crop/Resize/Canvas Size          ││
│  │                                                             ││
│  │  [UC-DS-027] Undo/Redo (Up to 500 steps)                  ││
│  │                                                             ││
│  │  [UC-DS-028] Auto-Save Project                            ││
│  │                                                             ││
│  │  [UC-DS-029] Export Design (PNG/PDF with Marks)           ││
│  │                                                             ││
│  │  [UC-DS-030] Save to Design Store                         ││
│  │                                                             ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  <<include>> Smart Guides (Auto-Align)                           │
│  <<include>> Snap to Grid/Objects/Page                           │
│  <<include>> Zoom & Pan (25% to 1600%)                          │
│  <<extend>> Variable Data Printing (CSV Merge)                   │
│  <<extend>> Advanced Filters (Liquify, Puppet Warp)              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 4. Module: Design Store Use Cases

```
┌─────────────────────────────────────────────────────────────────┐
│                    DESIGN STORE MODULE                           │
│                                                                  │
│  Actor: Designer (Priya)                                         │
│  Actor: Admin (Rajesh)                                           │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                                                             ││
│  │  [UC-DST-001] Browse Designs (Grid/List/Masonry)          ││
│  │       │                                                     ││
│  │       ├──► [UC-DST-002] Search by Name/SKU               ││
│  │       │                                                     ││
│  │       ├──► [UC-DST-003] Filter by Category/Tags/Color    ││
│  │       │                                                     ││
│  │       ├──► [UC-DST-004] Sort by Date/Name/Popularity     ││
│  │       │                                                     ││
│  │       └──► [UC-DST-005] View Full-Screen Preview        ││
│  │                                                             ││
│  │  [UC-DST-006] Manage Design Metadata                      ││
│  │       │                                                     ││
│  │       ├──► [UC-DST-007] Edit SKU/Name/Category/Tags    ││
│  │       │                                                     ││
│  │       ├──► [UC-DST-008] Add Notes/Seasonal Tags        ││
│  │       │                                                     ││
│  │       └──► [UC-DST-009] Assign to Collection/Folder    ││
│  │                                                             ││
│  │  [UC-DST-010] Approval Workflow (Admin)                   ││
│  │       │                                                     ││
│  │       ├──► [UC-DST-011] Submit for Approval             ││
│  │       │                                                     ││
│  │       ├──► [UC-DST-012] Approve with Notes              ││
│  │       │                                                     ││
│  │       └──► [UC-DST-013] Reject with Mandatory Reason   ││
│  │                                                             ││
│  │  [UC-DST-014] Bulk Operations                             ││
│  │       │                                                     ││
│  │       ├──► [UC-DST-015] Bulk Categorize/Tag             ││
│  │       │                                                     ││
│  │       ├──► [UC-DST-016] Bulk Export as ZIP              ││
│  │       │                                                     ││
│  │       └──► [UC-DST-017] Bulk Delete with Confirmation   ││
│  │                                                             ││
│  │  [UC-DST-018] Duplicate Detection                         ││
│  │       │                                                     ││
│  │       ├──► [UC-DST-019] Auto-Detect Duplicates (MD5)  ││
│  │       │                                                     ││
│  │       └──► [UC-DST-020] Visual Similar Detection (pHash)││
│  │                                                             ││
│  │  [UC-DST-021] Version Control                             ││
│  │       │                                                     ││
│  │       ├──► [UC-DST-022] View Version History            ││
│  │       │                                                     ││
│  │       └──► [UC-DST-023] Rollback to Previous Version    ││
│  │                                                             ││
│  │  [UC-DST-024] Analytics (Admin)                            ││
│  │       │                                                     ││
│  │       ├──► [UC-DST-025] Most/Least Printed Designs      ││
│  │       │                                                     ││
│  │       └──► [UC-DST-026] Print History per Design        ││
│  │                                                             ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  <<include>> Auto-Generate Thumbnails (3 sizes)                 │
│  <<include>> Lazy Load & Virtual Scroll                          │
│  <<extend>> Import from Folder (Bulk)                            │
│  <<extend>> Replace Image (Keep Metadata)                        │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 5. Module: Order Basket Use Cases

```
┌─────────────────────────────────────────────────────────────────┐
│                    ORDER BASKET MODULE                           │
│                                                                  │
│  Actor: Worker (Amit)                                            │
│  Actor: Admin (Rajesh)                                             │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                                                             ││
│  │  [UC-OB-001] Add Design to Basket (from Store)            ││
│  │       │                                                     ││
│  │       ├──► [UC-OB-002] Set Quantity (Type or +/-)       ││
│  │       │                                                     ││
│  │       ├──► [UC-OB-003] Select Substrate (Metal/Ceramic) ││
│  │       │                                                     ││
│  │       ├──► [UC-OB-004] Select Size Variant              ││
│  │       │                                                     ││
│  │       └──► [UC-OB-005] Add Custom Instructions/Notes    ││
│  │                                                             ││
│  │  [UC-OB-006] Manage Basket Contents                        ││
│  │       │                                                     ││
│  │       ├──► [UC-OB-007] Remove Item                      ││
│  │       │                                                     ││
│  │       ├──► [UC-OB-008] Duplicate Item                   ││
│  │       │                                                     ││
│  │       ├──► [UC-OB-009] Merge Duplicate SKUs             ││
│  │       │                                                     ││
│  │       └──► [UC-OB-010] Sort/Filter Basket               ││
│  │                                                             ││
│  │  [UC-OB-011] Order Management                             ││
│  │       │                                                     ││
│  │       ├──► [UC-OB-012] Set Priority (Urgent/Normal/Low) ││
│  │       │                                                     ││
│  │       ├──► [UC-OB-013] Set Due Date                     ││
│  │       │                                                     ││
│  │       ├──► [UC-OB-014] Add General Order Notes          ││
│  │       │                                                     ││
│  │       └──► [UC-OB-015] Set Status (Draft/Confirmed)    ││
│  │                                                             ││
│  │  [UC-OB-016] Save & Load                                  ││
│  │       │                                                     ││
│  │       ├──► [UC-OB-017] Save as Draft                    ││
│  │       │                                                     ││
│  │       ├──► [UC-OB-018] Load from Draft                  ││
│  │       │                                                     ││
│  │       ├──► [UC-OB-019] Save as Template                 ││
│  │       │                                                     ││
│  │       └──► [UC-OB-020] Load Template                    ││
│  │                                                             ││
│  │  [UC-OB-021] Export/Share                                 ││
│  │       │                                                     ││
│  │       ├──► [UC-OB-022] Export as CSV                    ││
│  │       │                                                     ││
│  │       ├──► [UC-OB-023] Import from CSV/Excel           ││
│  │       │                                                     ││
│  │       └──► [UC-OB-024] Share via Local Network        ││
│  │                                                             ││
│  │  [UC-OB-025] Generate Barcode/QR per Basket             ││
│  │                                                             ││
│  │  [UC-OB-026] Print Preview of Nested Layout             ││
│  │                                                             ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  <<include>> Auto-Calculate Total Pieces & Unique SKUs           │
│  <<include>> Validate Substrate Compatibility                    │
│  <<extend>> Customer Assignment (Name/Phone/Notes)                │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 6. Module: Print Sheet Builder Use Cases

```
┌─────────────────────────────────────────────────────────────────┐
│                 PRINT SHEET BUILDER MODULE                     │
│                                                                  │
│  Actor: Worker (Amit)                                            │
│  Actor: System (Auto-Process)                                      │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                                                             ││
│  │  [UC-PS-001] Load Order from Basket                        ││
│  │       │                                                     ││
│  │       ├──► [UC-PS-002] Select Paper Size (A4/A3/Roll)   ││
│  │       │                                                     ││
│  │       ├──► [UC-PS-003] Set DPI (300/600/Custom)         ││
│  │       │                                                     ││
│  │       ├──► [UC-PS-004] Set Margins (Top/Bottom/Left/Right)││
│  │       │                                                     ││
│  │       └──► [UC-PS-005] Set Gaps (Horizontal/Vertical)  ││
│  │                                                             ││
│  │  [UC-PS-006] Configure Bleed & Safe Zone                   ││
│  │       │                                                     ││
│  │       ├──► [UC-PS-007] Bleed Size per Design or Global    ││
│  │       │                                                     ││
│  │       └──► [UC-PS-008] Safe Zone Display & Config       ││
│  │                                                             ││
│  │  [UC-PS-009] Auto-Nesting                                  ││
│  │       │                                                     ││
│  │       ├──► [UC-PS-010] Select Algorithm (Shelf/Guillotine/True-Shape)││
│  │       │                                                     ││
│  │       ├──► [UC-PS-011] Set Time/Iteration Limit         ││
│  │       │                                                     ││
│  │       ├──► [UC-PS-012] Set Target Efficiency            ││
│  │       │                                                     ││
│  │       └──► [UC-PS-013] Review Efficiency % & Sheet Count││
│  │                                                             ││
│  │  [UC-PS-014] Manual Nesting Adjustments                    ││
│  │       │                                                     ││
│  │       ├──► [UC-PS-015] Drag Individual Items            ││
│  │       │                                                     ││
│  │       ├──► [UC-PS-016] Rotate Items (Free/Snap)         ││
│  │       │                                                     ││
│  │       ├──► [UC-PS-017] Scale Items (Uniform/Non-Uniform)││
│  │       │                                                     ││
│  │       ├──► [UC-PS-018] Nudge with Arrow Keys            ││
│  │       │                                                     ││
│  │       ├──► [UC-PS-019] Align & Distribute Selected      ││
│  │       │                                                     ││
│  │       └──► [UC-PS-020] Copy Pattern to Next/All Pages   ││
│  │                                                             ││
│  │  [UC-PS-021] Quantity Management                           ││
│  │       │                                                     ││
│  │       ├──► [UC-PS-022] Single Design Fill Sheet         ││
│  │       │                                                     ││
│  │       ├──► [UC-PS-023] Mixed Designs per Sheet        ││
│  │       │                                                     ││
│  │       ├──► [UC-PS-024] Auto-Calculate Max Copies      ││
│  │       │                                                     ││
│  │       └──► [UC-PS-025] Handle Remainder Quantities    ││
│  │                                                             ││
│  │  [UC-PS-026] Add Production Marks                        ││
│  │       │                                                     ││
│  │       ├──► [UC-PS-027] Cut Guides (Solid/Dashed/Contour)││
│  │       │                                                     ││
│  │       ├──► [UC-PS-028] Safe Guides                      ││
│  │       │                                                     ││
│  │       ├──► [UC-PS-029] Registration Marks (Vendor-Specific)││
│  │       │                                                     ││
│  │       ├──► [UC-PS-030] Color Bars (CMYK/RGB)          ││
│  │       │                                                     ││
│  │       ├──► [UC-PS-031] Trim/Corner Marks              ││
│  │       │                                                     ││
│  │       └──► [UC-PS-032] Page Numbers & QR Codes        ││
│  │                                                             ││
│  │  [UC-PS-033] Mirroring                                     ││
│  │       │                                                     ││
│  │       ├──► [UC-PS-034] Object-Level Flip H/V/Both     ││
│  │       │                                                     ││
│  │       ├──► [UC-PS-035] Page-Level Mirror Horizontal   ││
│  │       │                                                     ││
│  │       ├──► [UC-PS-036] Page-Level Mirror Vertical     ││
│  │       │                                                     ││
│  │       └──► [UC-PS-037] Export Normal + Mirrored       ││
│  │                                                             ││
│  │  [UC-PS-038] Page Management                               ││
│  │       │                                                     ││
│  │       ├──► [UC-PS-039] Auto-Generate Pages on Overflow  ││
│  │       │                                                     ││
│  │       ├──► [UC-PS-040] Manual Add/Delete/Reorder      ││
│  │       │                                                     ││
│  │       ├──► [UC-PS-041] Duplicate Page Layout         ││
│  │       │                                                     ││
│  │       └──► [UC-PS-042] Master Page Template            ││
│  │                                                             ││
│  │  [UC-PS-043] Optimization Suggestions                      ││
│  │       │                                                     ││
│  │       └──► [UC-PS-044] "Rotate 90 to Save 1 Sheet"      ││
│  │                                                             ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  <<include>> Snap to Grid/Guides/Objects                         │
│  <<include>> Real-Time Waste % & Efficiency Display               │
│  <<extend>> Genetic Algorithm / Simulated Annealing (P2)         │
│  <<extend>> True-Shape Nesting (Irregular Shapes)               │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 7. Module: Export System Use Cases

```
┌─────────────────────────────────────────────────────────────────┐
│                     EXPORT SYSTEM MODULE                         │
│                                                                  │
│  Actor: Worker (Amit)                                            │
│  Actor: System (Auto-Process)                                      │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                                                             ││
│  │  [UC-EX-001] Select Export Format                          ││
│  │       │                                                     ││
│  │       ├──► [UC-EX-002] PNG (8-bit/16-bit, Transparency)   ││
│  │       │                                                     ││
│  │       ├──► [UC-EX-003] JPG (Quality 0-100)              ││
│  │       │                                                     ││
│  │       ├──► [UC-EX-004] TIFF (Compression/Bit Depth)     ││
│  │       │                                                     ││
│  │       ├──► [UC-EX-005] PDF (Single/Multi-Page)           ││
│  │       │                                                     ││
│  │       ├──► [UC-EX-006] WEBP (Quality/Lossless)          ││
│  │       │                                                     ││
│  │       └──► [UC-EX-007] ZIP (Bundle All)                 ││
│  │                                                             ││
│  │  [UC-EX-008] Configure Export Options                     ││
│  │       │                                                     ││
│  │       ├──► [UC-EX-009] Include/Exclude Bleed            ││
│  │       │                                                     ││
│  │       ├──► [UC-EX-010] Include/Exclude Cut Marks        ││
│  │       │                                                     ││
│  │       ├──► [UC-EX-011] Include/Exclude Safe Guides      ││
│  │       │                                                     ││
│  │       ├──► [UC-EX-012] Include/Exclude Registration     ││
│  │       │                                                     ││
│  │       ├──► [UC-EX-013] Include/Exclude Color Bars       ││
│  │       │                                                     ││
│  │       ├──► [UC-EX-014] Include/Exclude Page Info        ││
│  │       │                                                     ││
│  │       ├──► [UC-EX-015] Set DPI (150/300/600/Custom)     ││
│  │       │                                                     ││
│  │       ├──► [UC-EX-016] Embed/Strip ICC Profile          ││
│  │       │                                                     ││
│  │       ├──► [UC-EX-017] Preserve/Fill Transparency       ││
│  │       │                                                     ││
│  │       └──► [UC-EX-018] Custom Filename Pattern          ││
│  │                                                             ││
│  │  [UC-EX-019] PDF-Specific Options                         ││
│  │       │                                                     ││
│  │       ├──► [UC-EX-020] PDF/A Compliance                 ││
│  │       │                                                     ││
│  │       ├──► [UC-EX-021] PDF/X-1a/X-3/X-4 Compliance     ││
│  │       │                                                     ││
│  │       ├──► [UC-EX-022] Password Protection              ││
│  │       │                                                     ││
│  │       └──► [UC-EX-023] Permission Restrictions          ││
│  │                                                             ││
│  │  [UC-EX-024] Export Scope                                   ││
│  │       │                                                     ││
│  │       ├──► [UC-EX-025] Current Page Only                ││
│  │       │                                                     ││
│  │       ├──► [UC-EX-026] All Pages                      ││
│  │       │                                                     ││
│  │       ├──► [UC-EX-027] Selected Pages                 ││
│  │       │                                                     ││
│  │       └──► [UC-EX-028] Selected Objects Only          ││
│  │                                                             ││
│  │  [UC-EX-029] Export Presets                                ││
│  │       │                                                     ││
│  │       ├──► [UC-EX-030] Save Preset                    ││
│  │       │                                                     ││
│  │       ├──► [UC-EX-031] Load Preset                    ││
│  │       │                                                     ││
│  │       └──► [UC-EX-032] Delete Preset                  ││
│  │                                                             ││
│  │  [UC-EX-033] Monitor Export Progress                      ││
│  │                                                             ││
│  │  [UC-EX-034] Open Output Folder After Export              ││
│  │                                                             ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  <<include>> Verify Export Integrity (Checksum)                  │
│  <<include>> Overwrite Protection / Auto-Rename                   │
│  <<extend>> Export to Hot Folder (Auto-Send to RIP)               │
│  <<extend>> Direct Print Queue Integration                        │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 8. Module: Hardware Integration Use Cases

```
┌─────────────────────────────────────────────────────────────────┐
│              HARDWARE INTEGRATION MODULE                         │
│                                                                  │
│  Actor: Worker (Amit)                                            │
│  Actor: Admin (Rajesh)                                           │
│  Actor: System (Auto-Process)                                    │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                                                             ││
│  │  PRINTER SUBSYSTEM                                          ││
│  │  ─────────────────                                          ││
│  │                                                             ││
│  │  [UC-HW-001] Discover Printers (Network/USB)               ││
│  │       │                                                     ││
│  │       ├──► [UC-HW-002] Auto-Detect via SNMP/mDNS/USB    ││
│  │       │                                                     ││
│  │       └──► [UC-HW-003] Manual IP Entry                ││
│  │                                                             ││
│  │  [UC-HW-004] Monitor Printer Status                        ││
│  │       │                                                     ││
│  │       ├──► [UC-HW-005] Online/Offline/Busy/Error       ││
│  │       │                                                     ││
│  │       ├──► [UC-HW-006] Ink Levels (C/M/Y/K/LC/LM)     ││
│  │       │                                                     ││
│  │       ├──► [UC-HW-007] Paper Loaded/Remaining           ││
│  │       │                                                     ││
│  │       └──► [UC-HW-008] Temperature/Humidity (if avail) ││
│  │                                                             ││
│  │  [UC-HW-009] Manage Print Queue                            ││
│  │       │                                                     ││
│  │       ├──► [UC-HW-010] Add/Remove/Reorder Jobs        ││
│  │       │                                                     ││
│  │       ├──► [UC-HW-011] Pause/Resume/Cancel           ││
│  │       │                                                     ││
│  │       └──► [UC-HW-012] Set Job Priority               ││
│  │                                                             ││
│  │  [UC-HW-013] Send to Print                                 ││
│  │       │                                                     ││
│  │       ├──► [UC-HW-014] Direct Print (Bypass RIP)        ││
│  │       │                                                     ││
│  │       ├──► [UC-HW-015] Hot Folder (RIP Pickup)         ││
│  │       │                                                     ││
│  │       └──► [UC-HW-016] RIP API (Caldera/Wasatch/Onyx)  ││
│  │                                                             ││
│  │  [UC-HW-017] Printer Maintenance (Admin)                   ││
│  │       │                                                     ││
│  │       ├──► [UC-HW-018] Nozzle Check Pattern           ││
│  │       │                                                     ││
│  │       ├──► [UC-HW-019] Head Alignment Pattern         ││
│  │       │                                                     ││
│  │       ├──► [UC-HW-020] Head Cleaning Cycle            ││
│  │       │                                                     ││
│  │       ├──► [UC-HW-021] Firmware Check/Update          ││
│  │       │                                                     ││
│  │       └──► [UC-HW-022] Maintenance Log & Alerts       ││
│  │                                                             ││
│  │  CUTTER SUBSYSTEM                                           ││
│  │  ────────────────                                           ││
│  │                                                             ││
│  │  [UC-HW-023] Discover Cutters (Network/USB/Serial)       ││
│  │                                                             ││
│  │  [UC-HW-024] Monitor Cutter Status                         ││
│  │       │                                                     ││
│  │       ├──► [UC-HW-025] Online/Offline/Busy/Error       ││
│  │       │                                                     ││
│  │       └──► [UC-HW-026] Blade Status (Worn/Broken)     ││
│  │                                                             ││
│  │  [UC-HW-027] Configure Cut Settings                        ││
│  │       │                                                     ││
│  │       ├──► [UC-HW-028] Blade Pressure/Speed/Offset    ││
│  │       │                                                     ││
│  │       ├──► [UC-HW-029] Overcut & Corner Action        ││
│  │       │                                                     ││
│  │       └──► [UC-HW-030] Media Size/Type/Origin         ││
│  │                                                             ││
│  │  [UC-HW-031] Contour Cut Path                              ││
│  │       │                                                     ││
│  │       ├──► [UC-HW-032] Auto-Detect from Transparency  ││
│  │       │                                                     ││
│  │       ├──► [UC-HW-033] Manual Draw/Edit Contour       ││
│  │       │                                                     ││
│  │       ├──► [UC-HW-034] Offset/Smooth/Simplify         ││
│  │       │                                                     ││
│  │       └──► [UC-HW-035] Export as SVG/DXF/PLT          ││
│  │                                                             ││
│  │  [UC-HW-036] Send to Cutter                                ││
│  │       │                                                     ││
│  │       ├──► [UC-HW-037] Direct Send (Summa/Graphtec)  ││
│  │       │                                                     ││
│  │       └──► [UC-HW-038] Hot Folder                       ││
│  │                                                             ││
│  │  [UC-HW-039] Cutter Maintenance (Admin)                  ││
│  │                                                             ││
│  │  PRESS TIMER SUBSYSTEM                                      ││
│  │  ─────────────────────                                      ││
│  │                                                             ││
│  │  [UC-HW-040] Start Press Timer                             ││
│  │       │                                                     ││
│  │       ├──► [UC-HW-041] Select Substrate Profile       ││
│  │       │                                                     ││
│  │       ├──► [UC-HW-042] Auto-Load Time/Temp/Pressure   ││
│  │       │                                                     ││
│  │       └──► [UC-HW-043] Manual Override                ││
│  │                                                             ││
│  │  [UC-HW-044] Monitor Timer                                 ││
│  │       │                                                     ││
│  │       ├──► [UC-HW-045] Visual Countdown Display       ││
│  │       │                                                     ││
│  │       └──► [UC-HW-046] Audio/Visual Alarm on Complete ││
│  │                                                             ││
│  │  [UC-HW-047] Alarm Acknowledgment                          ││
│  │       │                                                     ││
│  │       ├──► [UC-HW-048] Stop Alarm                       ││
│  │       │                                                     ││
│  │       └──► [UC-HW-049] Log Actual vs Target Time      ││
│  │                                                             ││
│  │  [UC-HW-050] Multiple Simultaneous Timers                  ││
│  │                                                             ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  <<include>> Auto-Detect Hardware on Launch                        │
│  <<include>> Status Polling (Every 30 seconds)                    │
│  <<extend>> IoT Heat Press Sensor (Bluetooth/WiFi)               │
│  <<extend>> Barcode Scanner Integration                            │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 9. Module: Settings & System Use Cases

```
┌─────────────────────────────────────────────────────────────────┐
│                 SETTINGS & SYSTEM MODULE                         │
│                                                                  │
│  Actor: Admin (Rajesh)                                             │
│  Actor: Designer (Priya)                                           │
│  Actor: Worker (Amit)                                              │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                                                             ││
│  │  COMPANY PROFILE (Admin)                                   ││
│  │  ────────────────────────                                  ││
│  │  [UC-SET-001] Set Company Name/Address/Phone/Email      ││
│  │  [UC-SET-002] Upload/Preview/Remove Company Logo        ││
│  │                                                             ││
│  │  DEFAULTS (Admin)                                            ││
│  │  ────────────────                                            ││
│  │  [UC-SET-003] Set Default Page Size & Orientation       ││
│  │  [UC-SET-004] Set Default Margins & Gaps                ││
│  │  [UC-SET-005] Set Default DPI                           ││
│  │  [UC-SET-006] Set Default Export Folder               ││
│  │  [UC-SET-007] Set Default Mirror/Marks/Guides/ColorBars││
│  │                                                             ││
│  │  APPEARANCE (All Users)                                     ││
│  │  ─────────────────────                                      ││
│  │  [UC-SET-008] Select Theme (Dark/Light/High Contrast)   ││
│  │  [UC-SET-009] Customize Accent/Background/Text Color  ││
│  │  [UC-SET-010] Adjust UI Font Size                       ││
│  │                                                             ││
│  │  LOCALIZATION (All Users)                                   ││
│  │  ────────────────────────                                   ││
│  │  [UC-SET-011] Select UI Language                        ││
│  │  [UC-SET-012] Set Date/Time Format                      ││
│  │  [UC-SET-013] Set Measurement Unit (mm/inch/px)        ││
│  │                                                             ││
│  │  KEYBOARD SHORTCUTS (All Users)                            ││
│  │  ──────────────────────────────                              ││
│  │  [UC-SET-014] Customize Shortcuts                       ││
│  │  [UC-SET-015] Reset to Default                          ││
│  │  [UC-SET-016] Import/Export Shortcuts                   ││
│  │  [UC-SET-017] Print Cheat Sheet                         ││
│  │                                                             ││
│  │  PRESETS (All Users)                                        ││
│  │  ──────────────────                                         ││
│  │  [UC-SET-018] Save/Load/Delete Export Presets           ││
│  │  [UC-SET-019] Save/Load/Delete Print Presets            ││
│  │  [UC-SET-020] Save/Load/Delete Substrate Presets        ││
│  │                                                             ││
│  │  USER MANAGEMENT (Admin)                                   ││
│  │  ────────────────────────                                  ││
│  │  [UC-SET-021] Create User Profiles (Admin/Designer/Worker)││
│  │  [UC-SET-022] Set Password Protection (Admin/Project) ││
│  │  [UC-SET-023] Configure Auto-Lock Timeout               ││
│  │                                                             ││
│  │  BACKUP & MAINTENANCE (Admin)                             ││
│  │  ─────────────────────────────                              ││
│  │  [UC-SET-024] Configure Backup Schedule (Daily/Weekly)││
│  │  [UC-SET-025] Set Backup Location                     ││
│  │  [UC-SET-026] Run Manual Backup Now                   ││
│  │  [UC-SET-027] Restore from Backup                     ││
│  │  [UC-SET-028] Database Integrity Check                ││
│  │  [UC-SET-029] Database Repair/Compact/Vacuum          ││
│  │                                                             ││
│  │  UPDATES (Admin)                                            ││
│  │  ────────────────                                           ││
│  │  [UC-SET-030] Check for Updates (Auto/Manual)         ││
│  │  [UC-SET-031] Install Update (Online/Offline Package) ││
│  │  [UC-SET-032] Rollback to Previous Version            ││
│  │  [UC-SET-033] Configure Update Channel (Stable/Beta)  ││
│  │                                                             ││
│  │  SYSTEM HEALTH (Admin)                                    ││
│  │  ───────────────────────                                  ││
│  │  [UC-SET-034] Run Health Check Dashboard              ││
│  │  [UC-SET-035] View System Info (CPU/RAM/GPU/Disk)     ││
│  │  [UC-SET-036] View Performance Monitor                ││
│  │  [UC-SET-037] Clear Cache/Temp Files                  ││
│  │                                                             ││
│  │  LOGGING (Admin)                                            ││
│  │  ────────────────                                           ││
│  │  [UC-SET-038] Set Log Level (Debug/Info/Warning/Error)││
│  │  [UC-SET-039] Export/Clear Logs                       ││
│  │  [UC-SET-040] Configure Telemetry (Opt-Out)           ││
│  │                                                             ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  <<include>> Auto-Save Settings on Change                        │
│  <<include>> Reset to Factory Defaults                            │
│  <<extend>> Cloud Sync Settings (OneDrive/Dropbox)                 │
│  <<extend>> Multi-PC License Management                           │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 10. Complete Workflow Use Case (End-to-End)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    COMPLETE PRODUCTION WORKFLOW                              │
│                                                                              │
│  Actor: Designer (Priya) ─────── Actor: Worker (Amit) ─────── System        │
│                                                                              │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    │
│  │  STEP 1 │───►│  STEP 2 │───►│  STEP 3 │───►│  STEP 4 │───►│  STEP 5 │    │
│  │ INTAKE  │    │  DESIGN │    │  ORDER  │    │  NEST   │    │ EXPORT  │    │
│  └─────────┘    └─────────┘    └─────────┘    └─────────┘    └─────────┘    │
│       │              │              │              │              │          │
│       ▼              ▼              ▼              ▼              ▼          │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    │
│  │Upload   │    │Open in  │    │Select   │    │Auto-    │    │Add Marks│    │
│  │Images   │    │Studio   │    │Designs  │    │Arrange  │    │& Mirror │    │
│  │         │    │         │    │         │    │         │    │         │    │
│  │AI Upscale│   │Apply    │    │Set Qty  │    │Manual   │    │Export   │    │
│  │         │    │Template │    │& Substrate│   │Adjust   │    │PNG/PDF  │    │
│  │         │    │         │    │         │    │         │    │         │    │
│  │QC Check │    │Add Text/│    │Confirm  │    │Review   │    │Send to  │    │
│  │Approve  │    │Effects  │    │Order    │    │Efficiency│   │Print/   │    │
│  │         │    │         │    │         │    │         │    │HotFolder│    │
│  └─────────┘    └─────────┘    └─────────┘    └─────────┘    └─────────┘    │
│       │              │              │              │              │          │
│       ▼              ▼              ▼              ▼              ▼          │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    │
│  │Move to  │    │Save to  │    │Load in  │    │Generate │    │Monitor  │    │
│  │Design   │    │Store    │    │Basket   │    │Pages    │    │Queue    │    │
│  │Store    │    │         │    │         │    │         │    │         │    │
│  └─────────┘    └─────────┘    └─────────┘    └─────────┘    └─────────┘    │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────────┐│
│  │  STEP 6: PRODUCE                                                       ││
│  │  ─────────────────                                                       ││
│  │  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐              ││
│  │  │ Print   │───►│ Cut     │───►│ Press   │───►│ QC      │              ││
│  │  │ Sheets  │    │ Contours│    │ Timer   │    │ Check   │              ││
│  │  │         │    │         │    │         │    │         │              ││
│  │  │ Monitor │    │ Send to │    │ Alarm   │    │ Log     │              ││
│  │  │ Ink/    │    │ Cutter  │    │ on Done │    │ Defects │              ││
│  │  │ Status  │    │         │    │         │    │         │              ││
│  │  └─────────┘    └─────────┘    └─────────┘    └─────────┘              ││
│  │       │              │              │              │                   ││
│  │       ▼              ▼              ▼              ▼                   ││
│  │  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐              ││
│  │  │ Mark Job│    │ Mark Job│    │ Mark Job│    │ Mark Job│              ││
│  │  │ Complete│    │ Complete│    │ Complete│    │ Complete│              ││
│  │  └─────────┘    └─────────┘    └─────────┘    └─────────┘              ││
│  │                                                                             │
│  │  ┌─────────────────────────────────────────────────────────────────────┐  ││
│  │  │  STEP 7: REPORT (Admin)                                             │  ││
│  │  │  View Daily/Weekly/Monthly Production Reports                     │  ││
│  │  │  Export as PDF/Excel                                               │  ││
│  │  └─────────────────────────────────────────────────────────────────────┘  ││
│  └─────────────────────────────────────────────────────────────────────────┘│
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-06-06 | Product Team | Initial use case diagrams |
