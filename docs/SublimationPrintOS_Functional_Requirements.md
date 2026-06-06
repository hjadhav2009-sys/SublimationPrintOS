# SublimationPrintOS — Functional Requirements Specification

> **Version:** 1.0  
> **Date:** 2026-06-06  
> **Scope:** Pure Sublimation Production System  
> **Status:** Approved for Development

---

## 1. Introduction

### 1.1 Purpose
This document defines the complete functional requirements for SublimationPrintOS, an offline Windows desktop production operating system for dye-sublimation printing businesses. It specifies what the system shall do, how it shall behave, and what outputs it shall produce.

### 1.2 Scope Boundaries

**IN SCOPE (Functional):**
- Image intake, AI upscaling, and quality pre-checks
- Canva-like design studio with templates, shapes, text, and image editing
- Design store (gallery) with metadata, search, and approval workflow
- Order basket (production cart) with quantities and substrates
- Auto-nesting and manual print sheet layout
- Export with mirroring, marks, color bars, and registration
- Hardware integration (printers, cutters, heat presses)
- Color management and ICC profiles
- Production reporting and diagnostics
- Installation, settings, and system maintenance

**OUT OF SCOPE (Explicitly Excluded):**
- Inventory management (stock levels, reorder points, suppliers)
- Customer Relationship Management (CRM, leads, follow-ups)
- Return Merchandise Authorization (RTO, returns, refunds)
- Shipping and logistics tracking
- Revenue accounting, profit calculation, GST invoicing
- Salesperson management and commission tracking
- Loyalty points or reward programs

### 1.3 Definitions & Acronyms

| Term | Definition |
|------|------------|
| SKU | Stock Keeping Unit — unique identifier for a design variant |
| RIP | Raster Image Processor — software that prepares files for printing |
| ICC | International Color Consortium — color profile standard |
| DPI | Dots Per Inch — print resolution |
| P0 | Must Have — MVP cannot ship without this |
| P1 | Should Have — strong competitive value |
| P2 | Nice to Have — polish and power features |
| P3 | Future — Version 3.0+ roadmap |
| Upscale | AI-powered resolution enhancement (Real-ESRGAN) |
| Nesting | Optimal arrangement of designs on print sheets to minimize waste |
| Gang Sheet | Single print sheet containing multiple designs or copies |
| Substrate | Physical material being printed on (metal, ceramic, polyester, etc.) |
| Bleed | Extra image area beyond cut line to ensure full coverage |
| Safe Zone | Inner margin where critical content must stay |
| Contour Cut | Cutting along the actual shape outline (not just rectangle) |
| Hot Folder | Watched directory that triggers automatic processing |
| Mirroring | Flipping image horizontally for sublimation transfer printing |

---

## 2. System Overview

### 2.1 System Context

```
┌─────────────────────────────────────────────────────────────────┐
│                        SUBLIMATIONPRINTOS                        │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐  │
│  │   DESIGN    │  │   UPSCALE   │  │      PRINT SHEET        │  │
│  │   STUDIO    │  │   FACTORY   │  │       BUILDER           │  │
│  │  (Canva-like)│  │(AI Enhance) │  │   (Nesting & Layout)    │  │
│  └──────┬──────┘  └──────┬──────┘  └───────────┬─────────────┘  │
│         │                │                     │                │
│  ┌──────▼──────┐  ┌──────▼──────┐  ┌──────────▼─────────────┐  │
│  │ DESIGN STORE│  │   QUALITY   │  │      EXPORT SYSTEM      │  │
│  │  (Gallery)  │  │   CONTROL   │  │  (PNG/JPG/PDF/ZIP)      │  │
│  └──────┬──────┘  └─────────────┘  └───────────┬─────────────┘  │
│         │                                      │                │
│  ┌──────▼──────┐                    ┌──────────▼─────────────┐  │
│  │ORDER BASKET │                    │   HARDWARE HUB         │  │
│  │(Production  │                    │  (Printers/Cutters)    │  │
│  │   Cart)     │                    └────────────────────────┘  │
│  └─────────────┘                                                │
└─────────────────────────────────────────────────────────────────┘
```

### 2.2 User Roles

| Role | Permissions | Primary Modules |
|------|-------------|-----------------|
| **Admin** | Full access to all settings, user management, system configuration, presets, and diagnostics. | All modules + Settings + System |
| **Designer** | Create/edit designs, manage Design Store, upload assets, run upscaling, quality checks. | Design Studio + Upscale Factory + Design Store |
| **Worker** | Load orders, run nesting, send to print, monitor queues, perform QC. | Order Basket + Print Sheet + Hardware Hub + Notifications |
| **Viewer** | View-only access to designs, job status, and reports. No edit or export. | Design Store (view) + Dashboard (read-only) |

### 2.3 Core Workflow

```
Step 1: INTAKE
    → Upload raw images / designs → Upscale Factory
    → AI enhancement (Real-ESRGAN ncnn Vulkan)
    → Quality pre-check (blur, artifacts, resolution, duplicates)
    → Approve → Move to Design Store

Step 2: DESIGN (Optional)
    → Open in Design Studio
    → Add text, shapes, backgrounds, effects
    → Apply templates (keychain, mug, car hanger, etc.)
    → Save back to Design Store

Step 3: ORDER
    → Select designs from Design Store
    → Add to Order Basket with quantities
    → Choose substrate per line item
    → Confirm order → Proceed to Nesting

Step 4: NEST
    → Select paper size (A4, A3, 13×19, roll)
    → Set margins, gaps, bleed, DPI
    → Choose auto-nesting algorithm (Shelf, Guillotine, True-Shape)
    → Review visual layout, efficiency %, sheet count
    → Manual adjust if needed

Step 5: EXPORT
    → Add cut marks, safe guides, registration marks, color bars
    → Apply page mirroring (horizontal/vertical/both)
    → Generate page numbers, QR codes, job metadata
    → Export as PNG/JPG/PDF/ZIP at 300/600 DPI
    → Embed ICC profile

Step 6: PRODUCE
    → Send to printer queue (direct or RIP hot folder)
    → Monitor print progress, ink levels, status
    → Send contour cut paths to cutter (Summa/Graphtec/Zünd)
    → Press timer alarm for heat press stage
    → Mark job complete
```

---

## 3. Module-Level Functional Requirements

### 3.1 Module: Upscale Factory (Phase 0)

#### 3.1.1 Image Intake
- **UF-001:** The system shall support single file upload via file picker dialog (JPG, PNG, TIFF, BMP, WEBP, GIF).
- **UF-002:** The system shall support multiple file upload (drag-and-drop and file picker).
- **UF-003:** The system shall support folder upload (recursive scan optional).
- **UF-004:** The system shall support ZIP/RAR/7Z archive extraction and batch processing.
- **UF-005:** The system shall support clipboard paste (Ctrl+V) of images from system clipboard.
- **UF-006:** The system shall support screenshot paste (Print Screen → Ctrl+V).
- **UF-007:** The system shall support hot folder monitoring (user-configurable path, recursive optional).
- **UF-008:** The system shall auto-detect file format and reject unsupported formats with visible alert.
- **UF-009:** The system shall display thumbnail preview immediately upon intake.
- **UF-010:** The system shall show file metadata (dimensions, DPI, file size, color space) in intake panel.

#### 3.1.2 AI Upscaling Engine
- **UF-011:** The system shall integrate Real-ESRGAN ncnn Vulkan for offline GPU-accelerated upscaling.
- **UF-012:** The system shall support 2×, 4×, and 8× upscale factors.
- **UF-013:** The system shall support custom scale factors (1.5×, 3×, etc.).
- **UF-014:** The system shall support custom output width/height constraints.
- **UF-015:** The system shall auto-select GPU device if multiple GPUs present; allow manual override.
- **UF-016:** The system shall fallback to CPU processing if GPU error, out-of-memory, or driver crash.
- **UF-017:** The system shall process large images in tiles (configurable tile size and overlap).
- **UF-018:** The system shall support batch queue management (add, remove, reorder, pause, resume, cancel).
- **UF-019:** The system shall display real-time progress bar, percentage, ETA, and time elapsed per image.
- **UF-020:** The system shall process in background while user works in other modules.

#### 3.1.3 Quality Pre-Checks (Auto)
- **UF-021:** The system shall detect and score image blur using Laplacian variance; flag below threshold.
- **UF-022:** The system shall detect JPEG compression artifacts and score blockiness.
- **UF-023:** The system shall detect color banding/posterization in smooth gradients.
- **UF-024:** The system shall detect image noise levels and flag excessive noise.
- **UF-025:** The system shall check source resolution against target print size and warn if insufficient.
- **UF-026:** The system shall detect duplicate files using MD5/SHA hash.
- **UF-027:** The system shall detect similar images using perceptual hash (pHash) with configurable threshold.
- **UF-028:** The system shall detect already-upscaled images and warn user.
- **UF-029:** The system shall validate export size requirements post-upscale.
- **UF-030:** The system shall flag transparent edges and suggest fill color.

#### 3.1.4 Manual Review & Approval
- **UF-031:** The system shall display before/after split view with draggable slider.
- **UF-032:** The system shall display before/after side-by-side comparison.
- **UF-033:** The system shall allow zoom and pan in preview for pixel-level inspection.
- **UF-034:** The system shall display auto-calculated quality score (sharpness metric).
- **UF-035:** The system shall allow manual approve/reject per image with optional text notes.
- **UF-036:** The system shall allow reject with category selection (blur, artifacts, low-res, wrong color, other).
- **UF-037:** The system shall support batch approve/reject of filtered results.
- **UF-038:** The system shall auto-move approved images to Design Store with metadata.
- **UF-039:** The system shall archive rejected images to Rejected folder with reason log.
- **UF-040:** The system shall allow re-processing of rejected images with different model or scale.

#### 3.1.5 Output Configuration
- **UF-041:** The system shall support PNG (lossless), JPG (compressed), TIFF (high bit-depth), WEBP, BMP output.
- **UF-042:** The system shall support JPG quality slider (0–100) with presets.
- **UF-043:** The system shall support color space selection: sRGB, Adobe RGB, ProPhoto RGB, CMYK, Grayscale.
- **UF-044:** The system shall support 8-bit and 16-bit output depth.
- **UF-045:** The system shall preserve or fill transparency (white/black/custom).
- **UF-046:** The system shall support configurable output DPI.
- **UF-047:** The system shall support custom filename patterns with auto-increment, date stamp, job ID.
- **UF-048:** The system shall support organized output subfolders (by date, by batch ID).
- **UF-049:** The system shall preserve or strip EXIF metadata per user choice.
- **UF-050:** The system shall generate processing logs per image and per batch, exportable to file.

---

### 3.2 Module: Design Store (Phase 1)

#### 3.2.1 Gallery & Browsing
- **DS-001:** The system shall display designs in Grid View (large thumbnails), List View (compact details), and Masonry View (Pinterest-style staggered).
- **DS-002:** The system shall implement virtual scrolling for smooth performance with 10,000+ designs.
- **DS-003:** The system shall implement lazy loading for thumbnails on demand.
- **DS-004:** The system shall support thumbnail size slider (small/medium/large/extra-large).
- **DS-005:** The system shall support category filtering (product type: keychain, mug, shirt, etc.).
- **DS-006:** The system shall support multi-select tag filtering.
- **DS-007:** The system shall support color filtering (dominant color detection).
- **DS-008:** The system shall support size filtering (design dimensions).
- **DS-009:** The system shall support date filtering (upload date, last printed date).
- **DS-010:** The system shall support status filtering (approved, pending, archived).

#### 3.2.2 Search & Discovery
- **DS-011:** The system shall support real-time search by design name.
- **DS-012:** The system shall support exact SKU search.
- **DS-013:** The system shall support tag-based search.
- **DS-014:** The system shall support favorites/starred designs.
- **DS-015:** The system shall display recently used designs (last 50).
- **DS-016:** The system shall display most printed designs (frequency sorted).
- **DS-017:** The system shall display least printed and never printed designs.
- **DS-018:** The system shall support visual duplicate detection (pHash) to find similar designs.
- **DS-019:** The system shall support design preview modal (click to enlarge).
- **DS-020:** The system shall support full-screen preview at maximum resolution.

#### 3.2.3 Metadata Management
- **DS-021:** The system shall allow editing of design metadata: SKU, name, category, tags, notes.
- **DS-022:** The system shall auto-extract dominant colors and display color palette.
- **DS-023:** The system shall track usage count (how many times printed).
- **DS-024:** The system shall track print history (list of jobs using this design).
- **DS-025:** The system shall support seasonal tagging (Diwali, Holi, Eid, Christmas, etc.).
- **DS-026:** The system shall support collection/folder organization (user-defined groups).
- **DS-027:** The system shall support bulk category assignment (multi-select → change category).
- **DS-028:** The system shall support bulk tag assignment (add/remove tags in bulk).
- **DS-029:** The system shall support bulk delete with confirmation dialog.
- **DS-030:** The system shall support bulk export as ZIP with metadata JSON.

#### 3.2.4 Version Control & Approval
- **DS-031:** The system shall maintain version history for each design (auto-save on edit).
- **DS-032:** The system shall allow side-by-side version comparison.
- **DS-033:** The system shall allow rollback to any previous version.
- **DS-034:** The system shall support design approval workflow: Designer → Manager → Owner.
- **DS-035:** The system shall require mandatory rejection reason when design is rejected.
- **DS-036:** The system shall log approval history (who, when, notes).
- **DS-037:** The system shall support design lock (prevent edits) once approved.
- **DS-038:** The system shall support design unlock by admin only.
- **DS-039:** The system shall support design archive (hide from main view but retain in storage).
- **DS-040:** The system shall support design unarchive.

#### 3.2.5 Thumbnail & Asset Management
- **DS-041:** The system shall auto-generate thumbnails at 3 sizes (200×200 gallery, 800×800 preview, 50×50 icon) on design change.
- **DS-042:** The system shall support thumbnail regeneration on demand.
- **DS-043:** The system shall support design replace (swap image file while keeping metadata).
- **DS-044:** The system shall support design rename.
- **DS-045:** The system shall support design notes/annotations (internal text only).
- **DS-046:** The system shall support watermark overlay in preview mode (configurable).
- **DS-047:** The system shall support import from folder (bulk import with auto-metadata extraction).
- **DS-048:** The system shall support export with metadata (PNG + JSON sidecar).
- **DS-049:** The system shall support batch resize (resize multiple designs to same dimensions).
- **DS-050:** The system shall support batch format convert (PNG ↔ JPG ↔ TIFF).

---

### 3.3 Module: Design Studio (Phase 1)

#### 3.3.1 Canvas & Workspace
- **ST-001:** The system shall provide an infinite canvas with scroll beyond visible area.
- **ST-002:** The system shall support multiple artboards (pages) in one project file.
- **ST-003:** The system shall support artboard duplication, reordering, renaming, and deletion.
- **ST-004:** The system shall support rulers (top and left) with mm/inch/pixel units.
- **ST-005:** The system shall support draggable guide lines from rulers.
- **ST-006:** The system shall support guide lock, hide/show, clear all.
- **ST-007:** The system shall support smart guides (dynamic magenta alignment lines with distance display).
- **ST-008:** The system shall support grid display (dots and lines) with customizable spacing.
- **ST-009:** The system shall support grid snap and snap tolerance adjustment.
- **ST-010:** The system shall support snap to objects, object centers, object edges, page center, page edges.

#### 3.3.2 Zoom & Navigation
- **ST-011:** The system shall support zoom presets: 25%, 50%, 100%, 200%, 400%, Fit to Screen, Fit to Selection.
- **ST-012:** The system shall support incremental zoom (Ctrl++, Ctrl+−).
- **ST-013:** The system shall support zoom to 800%, 1600% for pixel precision.
- **ST-014:** The system shall support canvas rotation (view only, not content) with reset.
- **ST-015:** The system shall support pan with middle mouse button and spacebar+drag.
- **ST-016:** The system shall support actual size view (1:1 pixel mapping).
- **ST-017:** The system shall display zoom percentage in status bar.
- **ST-018:** The system shall support zoom dropdown in toolbar.
- **ST-019:** The system shall maintain zoom level per artboard.
- **ST-020:** The system shall support mouse wheel zoom (Ctrl+scroll).

#### 3.3.3 Object Manipulation
- **ST-021:** The system shall support single click selection and Shift+click multi-selection.
- **ST-022:** The system shall support marquee (box drag) selection and lasso (freehand) selection.
- **ST-023:** The system shall support Select All (Ctrl+A), Deselect All (Esc), Invert Selection.
- **ST-024:** The system shall support select same type, same color, same stroke, same size, same font.
- **ST-025:** The system shall support lock position, lock size, lock rotation, lock all properties.
- **ST-026:** The system shall support hide/show objects individually and globally.
- **ST-027:** The system shall support object opacity slider (0–100%) with exact input.
- **ST-028:** The system shall support object naming/rename in properties panel.
- **ST-029:** The system shall support position X/Y input, width/height input, rotation input.
- **ST-030:** The system shall support rotation presets: 0°, 45°, 90°, 180° with snap increments.

#### 3.3.4 Transform & Align
- **ST-031:** The system shall support uniform scaling (lock aspect ratio) and non-uniform scaling.
- **ST-032:** The system shall support scale from center, scale from corner.
- **ST-033:** The system shall support flip horizontal, flip vertical, flip both (object level).
- **ST-034:** The system shall support nudge with arrow keys (1px default, Shift+arrow 10px, custom distance).
- **ST-035:** The system shall support align left, center horizontally, right, top, center vertically, bottom.
- **ST-036:** The system shall support align to page edges and page center.
- **ST-037:** The system shall support distribute horizontal and vertical (equal spacing).
- **ST-038:** The system shall support distribute spacing value display in mm/px.
- **ST-039:** The system shall support bring to front, bring forward, send to back, send backward.
- **ST-040:** The system shall support layer order drag reorder in Layers panel.

#### 3.3.5 Group & Boolean
- **ST-041:** The system shall support group objects (Ctrl+G) and ungroup (Ctrl+Shift+G).
- **ST-042:** The system shall support enter group (edit inside) and exit group.
- **ST-043:** The system shall support merge objects (flatten into single object).
- **ST-044:** The system shall support boolean union, subtract, intersect, exclude.
- **ST-045:** The system shall support crop to selection, crop to content, crop to bleed, crop to safe zone.
- **ST-046:** The system shall support expand object (stroke to fill path).
- **ST-047:** The system shall support simplify path (reduce anchor points).
- **ST-048:** The system shall support smooth path (round sharp corners).
- **ST-049:** The system shall support offset path (inset/outset outline).
- **ST-050:** The system shall support rasterize object (vector to raster conversion).

#### 3.3.6 Layers Panel
- **ST-051:** The system shall provide a Layers panel toggle (show/hide sidebar).
- **ST-052:** The system shall display scrollable list of all objects with thumbnails.
- **ST-053:** The system shall display layer type icon (text, image, shape).
- **ST-054:** The system shall support layer visibility toggle (eye icon) and lock toggle.
- **ST-055:** The system shall support layer opacity slider and value display.
- **ST-056:** The system shall support layer multi-select (Ctrl, Shift) and drag reorder.
- **ST-057:** The system shall support layer group folders (create, expand/collapse, rename, lock, hide, delete).
- **ST-058:** The system shall support layer solo mode (show only selected layer).
- **ST-059:** The system shall support layer isolation mode (edit one layer, dim others).
- **ST-060:** The system shall support layer mask (add, apply, remove, invert) and clipping mask.

#### 3.3.7 Text & Typography
- **ST-061:** The system shall support text tool (T) for point text and area text (bounded box).
- **ST-062:** The system shall support text on path, text on circle, text on wave, text on custom path.
- **ST-063:** The system shall support vertical text orientation.
- **ST-064:** The system shall support font family dropdown with preview rendering in dropdown.
- **ST-065:** The system shall support font size input (pt/px/mm) and slider.
- **ST-066:** The system shall support font size presets: 8, 10, 12, 14, 16, 18, 24, 36, 48, 72.
- **ST-067:** The system shall support bold (Ctrl+B), italic (Ctrl+I), underline (Ctrl+U), strikethrough.
- **ST-068:** The system shall support font color picker with eyedropper, hex input, RGB, CMYK, HSL.
- **ST-069:** The system shall support recent colors palette (last 20 used).
- **ST-070:** The system shall support text alignment: left, center, right, justify, force justify.

#### 3.3.8 Text Spacing & Effects
- **ST-071:** The system shall support line spacing (leading): auto, fixed, percentage.
- **ST-072:** The system shall support letter spacing (tracking): tight, normal, loose.
- **ST-073:** The system shall support kerning pair adjustment and auto-kerning.
- **ST-074:** The system shall support paragraph spacing, indent, hanging indent.
- **ST-075:** The system shall support text transform: uppercase, lowercase, title case, sentence case, toggle.
- **ST-076:** The system shall support bullets and numbering (with custom characters).
- **ST-077:** The system shall support baseline shift, subscript, superscript.
- **ST-078:** The system shall support text columns with gutter and balance.
- **ST-079:** The system shall support text overflow indicator, hidden, scroll, ellipsis.
- **ST-080:** The system shall support spell check with language selection and custom dictionary.

#### 3.3.9 Text Styles
- **ST-081:** The system shall support text styles panel (save and apply presets).
- **ST-082:** The system shall support text style save, load, update, delete.
- **ST-083:** The system shall support text style override (temporary deviation).
- **ST-084:** The system shall support find and replace within text (next, previous, replace all, one by one).
- **ST-085:** The system shall support variable data printing (CSV merge: names, numbers into text layers).
- **ST-086:** The system shall support auto-fit text to box and auto-fit box to text.
- **ST-087:** The system shall support font upload (TTF/OTF) from local files.
- **ST-088:** The system shall support Google Fonts offline cache (download and store locally).
- **ST-089:** The system shall support text anti-aliasing modes: none, crisp, strong, smooth.
- **ST-090:** The system shall support text rendering intent for print optimization.

#### 3.3.10 Shapes & Graphics
- **ST-091:** The system shall support rectangle, rounded rectangle (individual corner radius), ellipse, polygon, star tools.
- **ST-092:** The system shall support line tool with stroke width, color, cap, join, miter limit.
- **ST-093:** The system shall support dashed and dotted line patterns with custom dash/gap.
- **ST-094:** The system shall support arrowheads (start, end, both) with style and size.
- **ST-095:** The system shall support connector tool (snap-to-object, straight/elbow/curved).
- **ST-096:** The system shall support shape fill: solid, gradient (linear, radial, angular, diamond, reflected), pattern.
- **ST-097:** The system shall support gradient color stops (add/remove, position, color, opacity).
- **ST-098:** The system shall support pattern fill: built-in library, custom upload, scale, rotation, offset.
- **ST-099:** The system shall support shape stroke: color, width, position (inside/center/outside), gradient, pattern.
- **ST-100:** The system shall support shape effects: drop shadow, inner shadow, outer glow, inner glow, bevel, emboss, satin, color overlay, gradient overlay, pattern overlay.

#### 3.3.11 Image Handling
- **ST-101:** The system shall support image place (File > Place), drag-and-drop, clipboard paste.
- **ST-102:** The system shall support linked (external file) and embedded (in project) placement.
- **ST-103:** The system shall support image relink, relink all, replace, replace and keep transform.
- **ST-104:** The system shall display image resolution (DPI) and effective resolution (scaled).
- **ST-105:** The system shall warn if image resolution below print threshold and suggest upscaling.
- **ST-106:** The system shall support image crop tool with aspect ratio lock and presets (1:1, 4:3, 16:9).
- **ST-107:** The system shall support crop to shape (circle, star, custom path) and non-destructive crop.
- **ST-108:** The system shall support image adjustments: brightness, contrast, saturation, hue, vibrance, exposure, highlights, shadows, whites, blacks.
- **ST-109:** The system shall support image filters: levels, curves, color balance, selective color, channel mixer, photo filter, invert, posterize, threshold, gradient map.
- **ST-110:** The system shall support black and white, sepia, duotone, tritone, quadtone conversions.

#### 3.3.12 Image Filters & Effects
- **ST-111:** The system shall support sharpen (unsharp mask) with amount, radius, threshold.
- **ST-112:** The system shall support blur: Gaussian, motion, radial, surface, smart, average.
- **ST-113:** The system shall support noise reduction and noise addition (film grain).
- **ST-114:** The system shall support dust and scratches removal, despeckle, median filter.
- **ST-115:** The system shall support high pass filter, maximum/minimum filters.
- **ST-116:** The system shall support custom filter (user-defined kernel matrix).
- **ST-117:** The system shall support filter preset save, load, delete.
- **ST-118:** The system shall support filter reset to original.
- **ST-119:** The system shall support filter before/after split view.
- **ST-120:** The system shall support filter history and non-destructive filter application.

#### 3.3.13 Advanced Image Tools
- **ST-121:** The system shall support content-aware scale and content-aware fill.
- **ST-122:** The system shall support healing brush, spot healing brush, clone stamp with source point.
- **ST-123:** The system shall support dodge, burn, and sponge tools with range and exposure.
- **ST-124:** The system shall support red-eye removal, teeth whitening, skin smoothing, blemish removal.
- **ST-125:** The system shall support liquify: forward warp, reconstruct, freeze mask, thaw mask.
- **ST-126:** The system shall support puppet warp, perspective warp, vanishing point.
- **ST-127:** The system shall support lens correction, chromatic aberration fix, vignette removal/addition.
- **ST-128:** The system shall support lens flare, lighting effects, texture overlay.
- **ST-129:** The system shall support film grain, halftone, crosshatch, watercolor, oil paint, dry brush, cutout, neon glow.
- **ST-130:** The system shall support edge detection, find edges, image trace/vectorize with color modes.

#### 3.3.14 Color & Background
- **ST-131:** The system shall support color replacement with tolerance and preserve luminance.
- **ST-132:** The system shall support match color to another image.
- **ST-133:** The system shall support replace color globally.
- **ST-134:** The system shall support select color range with fuzziness and invert.
- **ST-135:** The system shall support select focus area, select subject, select sky.
- **ST-136:** The system shall support remove background (auto-detect) with refine edges.
- **ST-137:** The system shall support transparent, white, black, custom color, gradient, pattern backgrounds.
- **ST-138:** The system shall support canvas size change with anchor point and relative/absolute modes.
- **ST-139:** The system shall support trim (remove transparent edges) and trim based on color.
- **ST-140:** The system shall support flatten layers, merge visible, merge down, merge selected.

#### 3.3.15 Pen & Vector Tools
- **ST-141:** The system shall support pen tool (Bezier curves) with add/delete/convert anchor points.
- **ST-142:** The system shall support direct select tool (move individual anchor points).
- **ST-143:** The system shall support path operations: close, open, join, average, simplify, smooth, offset.
- **ST-144:** The system shall support outline stroke, reverse direction, add/remove arrowheads.
- **ST-145:** The system shall support path effects: scribble, roughen, zig zag, twist, pucker & bloat, tweak.
- **ST-146:** The system shall support path blend (create intermediate paths with steps and options).
- **ST-147:** The system shall support compound paths (make/release) and clipping masks.
- **ST-148:** The system shall support path to guide conversion and guide to path conversion.
- **ST-149:** The system shall support variable stroke width (width tool, profiles, presets).
- **ST-150:** The system shall support shape builder tool (interactive merge, delete, intersect, exclude, divide, trim).

#### 3.3.16 Project Management
- **ST-151:** The system shall support undo (Ctrl+Z) and redo (Ctrl+Y) with configurable step limit (20–500).
- **ST-152:** The system shall support undo history panel with visual list and snapshots.
- **ST-153:** The system shall support auto-save interval (configurable minutes) and crash recovery.
- **ST-154:** The system shall support project save (Ctrl+S), save as (Ctrl+Shift+S), open (Ctrl+O), new (Ctrl+N).
- **ST-155:** The system shall support recent files list (last 20) with pin to top.
- **ST-156:** The system shall support project thumbnail preview (auto-generated).
- **ST-157:** The system shall support project search (by name, date).
- **ST-158:** The system shall support project auto-versioning (incremental saves).
- **ST-159:** The system shall support project backup on save (.backup file).
- **ST-160:** The system shall support project export as template and import template.

---

### 3.4 Module: Order Basket (Phase 2)

#### 3.4.1 Basket Management
- **OB-001:** The system shall support add design to basket (one-click from Design Store).
- **OB-002:** The system shall support remove from basket with confirmation.
- **OB-003:** The system shall support quantity input (type exact number) and increment/decrement (+1/−1 buttons).
- **OB-004:** The system shall support quick quantity presets (10, 50, 100, 500, 1000).
- **OB-005:** The system shall support substrate selection per item (metal, wood, acrylic, ceramic, polyester, etc.).
- **OB-006:** The system shall support size selection per item (if design has multiple size variants).
- **OB-007:** The system shall support color variant per item (if applicable).
- **OB-008:** The system shall support custom instructions per line item (text notes).
- **OB-009:** The system shall display basket subtotal (total pieces count) and item count (unique SKUs).
- **OB-010:** The system shall support duplicate item (clone line item) and merge duplicates (auto-merge same SKU+size+substrate).

#### 3.4.2 Organization & Status
- **OB-011:** The system shall support basket sort by name, quantity, substrate.
- **OB-012:** The system shall support basket filter by category.
- **OB-013:** The system shall support save as draft (incomplete order for later).
- **OB-014:** The system shall support load from draft.
- **OB-015:** The system shall support clear all with confirmation.
- **OB-016:** The system shall support basket export as CSV and import from CSV/Excel.
- **OB-017:** The system shall support duplicate entire basket as new order.
- **OB-018:** The system shall support rename order (custom name).
- **OB-019:** The system shall record date created and last modified timestamps.
- **OB-020:** The system shall support customer assignment (basic name/phone/notes — no CRM).

#### 3.4.3 Production Flags
- **OB-021:** The system shall support priority flag per order: Urgent, Normal, Low.
- **OB-022:** The system shall support due date (calendar deadline).
- **OB-023:** The system shall support general order notes and tags.
- **OB-024:** The system shall support status tracking: Draft → Confirmed → In Production → Completed.
- **OB-025:** The system shall support print preview of how order will look when nested.
- **OB-026:** The system shall support save as template (order structure for reuse).
- **OB-027:** The system shall support load template.
- **OB-028:** The system shall support basket share via local network (send to another PC on LAN).
- **OB-029:** The system shall support barcode generation per basket (unique code for tracking).
- **OB-030:** The system shall support QR code generation per basket.

---

### 3.5 Module: Print Sheet Builder (Phase 2)

#### 3.5.1 Page Setup
- **PS-001:** The system shall support custom page size (A4, A3, A2, A5, Letter, Legal, Tabloid, 13×19, roll widths, custom).
- **PS-002:** The system shall support unit switching globally (mm, inch, pixel, cm, pt, pica).
- **PS-003:** The system shall support DPI selection: 150, 300, 600, and custom input.
- **PS-004:** The system shall support margin control: top, bottom, left, right (independent or linked).
- **PS-005:** The system shall support gap between designs (horizontal and vertical, independent or linked).
- **PS-006:** The system shall support bleed size configuration per design or globally.
- **PS-007:** The system shall support safe zone display and configuration.
- **PS-008:** The system shall support artboard background color and border display.
- **PS-009:** The system shall support multiple artboards (pages) with auto-generation on overflow.
- **PS-010:** The system shall support artboard duplication, reordering, and deletion.

#### 3.5.2 Auto-Nesting
- **PS-011:** The system shall support shelf algorithm (basic rectangle packing) — P0.
- **PS-012:** The system shall support guillotine algorithm (cut-based packing) — P1.
- **PS-013:** The system shall support skyline algorithm — P1.
- **PS-014:** The system shall support maximal rectangles algorithm — P1.
- **PS-015:** The system shall support true-shape nesting (irregular shapes: hearts, stars, custom outlines) — P1.
- **PS-016:** The system shall support genetic algorithm optimization — P2.
- **PS-017:** The system shall support simulated annealing optimization — P2.
- **PS-018:** The system shall support algorithm selection and auto-select based on job type.
- **PS-019:** The system shall support time limit and iteration limit for optimization.
- **PS-020:** The system shall support target efficiency threshold (stop when reached).

#### 3.5.3 Manual Nesting
- **PS-021:** The system shall support manual placement mode (drag each item individually).
- **PS-022:** The system shall support snap to grid, guides, objects, page edges, page center.
- **PS-023:** The system shall support individual item rotation (free and snap to 15°, 30°, 45°, 90°).
- **PS-024:** The system shall support individual item scale (uniform and non-uniform).
- **PS-025:** The system shall support nudge with arrow keys (1px, 10px, custom).
- **PS-026:** The system shall support align and distribute selected items.
- **PS-027:** The system shall support bring forward, send backward, group, ungroup.
- **PS-028:** The system shall support lock, hide, delete, duplicate individual items.
- **PS-029:** The system shall support copy/paste placement pattern to next page or all pages.
- **PS-030:** The system shall support mirror placement pattern (horizontal/vertical).

#### 3.5.4 Quantity & Fill
- **PS-031:** The system shall support single design per sheet mode (fill with copies).
- **PS-032:** The system shall support multiple designs per sheet mode (mixed SKUs).
- **PS-033:** The system shall support auto-fill remaining space with smaller designs.
- **PS-034:** The system shall support auto-calculate max copies of one design per sheet.
- **PS-035:** The system shall support auto-center and auto-distribute single design copies.
- **PS-036:** The system shall support quantity-based placement (place N copies of each design).
- **PS-037:** The system shall support quantity auto-calculate from order quantity.
- **PS-038:** The system shall support quantity manual override.
- **PS-039:** The system shall support remainder handling (leftover quantities on additional sheet).
- **PS-040:** The system shall support per-page and total quantity limits.

#### 3.5.5 Marks & Guides Generation
- **PS-041:** The system shall generate cut guides (solid, dashed, dotted) with configurable color, width, offset.
- **PS-042:** The system shall support per-object cut guides and global cut guides.
- **PS-043:** The system shall support contour cut guides (follow shape exactly) and bounding box guides.
- **PS-044:** The system shall generate safe guides with configurable style, color, width, offset.
- **PS-045:** The system shall generate registration marks (L-corner, crosshair, circle, square, barcode, QR).
- **PS-046:** The system shall support registration mark positions: corners, top only, bottom only, left only, right only, custom.
- **PS-047:** The system shall support vendor-specific registration marks (Summa, Graphtec, Zünd, Roland, Mimaki, Mutoh).
- **PS-048:** The system shall generate color bars (CMYK + RGB + Grayscale) with configurable position and size.
- **PS-049:** The system shall generate trim marks, corner marks, center marks.
- **PS-050:** The system shall support custom mark sizes, colors, and positions.

#### 3.5.6 Page Information & Metadata
- **PS-051:** The system shall auto-number pages ("Page X of Y").
- **PS-052:** The system shall support page numbering position, font, size, color.
- **PS-053:** The system shall embed job ID watermark (visible or invisible).
- **PS-054:** The system shall print date/time stamp on sheet (configurable format and position).
- **PS-055:** The system shall generate unique QR code per sheet for tracking.
- **PS-056:** The system shall print job name, customer name, substrate name on sheet.
- **PS-057:** The system shall print press settings (temp/time/pressure) on sheet.
- **PS-058:** The system shall print operator name, shift info, machine ID on sheet.
- **PS-059:** The system shall print batch ID, total pieces, pieces per page, waste percentage.
- **PS-060:** The system shall support custom footer/header text with configurable position and font.

#### 3.5.7 Mirroring & Export Preparation
- **PS-061:** The system shall support object-level mirror (horizontal, vertical, both).
- **PS-062:** The system shall support export-level page mirroring (entire sheet — critical for sublimation).
- **PS-063:** The system shall support normal + mirrored together (both versions on same output).
- **PS-064:** The system shall support normal + mirrored separate files.
- **PS-065:** The system shall auto-append _mirrored / _normal suffix to filenames.
- **PS-066:** The system shall support rotate entire sheet layout (all items together).
- **PS-067:** The system shall support scale entire sheet layout (all items proportionally).
- **PS-068:** The system shall support crop to content, crop to bleed, crop to safe zone.
- **PS-069:** The system shall display real-time waste percentage and efficiency metrics.
- **PS-070:** The system shall suggest optimization improvements ("Rotate 90° to save 1 sheet").

---

### 3.6 Module: Export System (Phase 2)

#### 3.6.1 Format Export
- **EX-001:** The system shall export to PNG (8-bit and 16-bit, with/without transparency, interlaced).
- **EX-002:** The system shall export to JPG (quality 0–100, progressive/baseline, chroma subsampling).
- **EX-003:** The system shall export to TIFF (compression: none, LZW, ZIP, JPEG; bit depth: 8, 16, 32).
- **EX-004:** The system shall export to BMP (24-bit, 32-bit with alpha).
- **EX-005:** The system shall export to WEBP (quality 0–100, lossless mode).
- **EX-006:** The system shall export to PDF (single page or multi-page, compression, downsample, color space).
- **EX-007:** The system shall export to ZIP (bundle all files with folder structure and compression level).
- **EX-008:** The system shall support single page export, all pages export, selected pages export.
- **EX-009:** The system shall support selected objects export only.
- **EX-010:** The system shall support export presets (save/load named configurations).

#### 3.6.2 Export Options
- **EX-011:** The system shall include/exclude bleed area per export.
- **EX-012:** The system shall include/exclude cut marks per export.
- **EX-013:** The system shall include/exclude safe guides per export.
- **EX-014:** The system shall include/exclude registration marks per export.
- **EX-015:** The system shall include/exclude color bars per export.
- **EX-016:** The system shall include/exclude page info/metadata text per export.
- **EX-017:** The system shall support export at 300 DPI (standard), 600 DPI (high), 150 DPI (draft), 72 DPI (screen), custom.
- **EX-018:** The system shall embed ICC color profile or strip it.
- **EX-019:** The system shall preserve transparency or fill with white/black/custom color.
- **EX-020:** The system shall support custom file naming patterns: {job_id}, {page}, {date}, {time}, {mirrored}, {substrate}.

#### 3.6.3 PDF Specific
- **EX-021:** The system shall support PDF/A compliance (archive standard).
- **EX-022:** The system shall support PDF/X compliance (print standard: PDF/X-1a, PDF/X-3, PDF/X-4).
- **EX-023:** The system shall support PDF password protection.
- **EX-024:** The system shall support PDF print/copy/edit permission restrictions.
- **EX-025:** The system shall support PDF image compression level.
- **EX-026:** The system shall support PDF downsample (reduce image resolution).
- **EX-027:** The system shall support PDF color space (RGB/CMYK).
- **EX-028:** The system shall support PDF bleed marks, crop marks, registration marks inclusion.
- **EX-029:** The system shall support ZIP export with password protection.
- **EX-030:** The system shall support ZIP compression level (store, fast, normal, maximum).

---

### 3.7 Module: Hardware Integration — Printers (Phase 3)

#### 3.7.1 Discovery & Status
- **HP-001:** The system shall auto-discover network printers (SNMP, mDNS, Bonjour, WSD).
- **HP-002:** The system shall auto-detect USB-connected printers.
- **HP-003:** The system shall support manual IP address entry for printer discovery.
- **HP-004:** The system shall display printer list with status: online, offline, error, busy, idle.
- **HP-005:** The system shall display detailed status: paper out, paper jam, ink low, cover open, maintenance required.
- **HP-006:** The system shall display ink levels: cyan, magenta, yellow, black, light cyan, light magenta, orange, green, white, fluorescent, metallic.
- **HP-007:** The system shall display paper size loaded and paper type loaded.
- **HP-008:** The system shall estimate paper remaining (sheets or meters for rolls).
- **HP-009:** The system shall display printer temperature and humidity (if supported).
- **HP-010:** The system shall support printer queue view, add, remove, reorder, pause, resume, cancel.

#### 3.7.2 Direct Print & RIP Integration
- **HP-011:** The system shall support direct print from software (bypass external RIP for supported printers).
- **HP-012:** The system shall support Windows print spooler integration.
- **HP-013:** The system shall support hot folder output (auto-save to watched folder for RIP pickup).
- **HP-014:** The system shall auto-detect installed RIP software (Caldera, Wasatch, Onyx, Ergosoft, Roland, Mimaki, Mutoh, SAi Flexi).
- **HP-015:** The system shall support Caldera VisualRIP+ direct API and hot folder.
- **HP-016:** The system shall support Wasatch SoftRIP SDK and hot folder.
- **HP-017:** The system shall support Onyx Thrive direct connection and hot folder.
- **HP-018:** The system shall support Ergosoft RIP direct API and hot folder.
- **HP-019:** The system shall support JDF metadata export for RIP workflow.
- **HP-020:** The system shall support printer profile per substrate, per paper, per ink, per combination.

#### 3.7.3 Maintenance & Calibration
- **HP-021:** The system shall support custom ICC profile upload and management.
- **HP-022:** The system shall support printer calibration wizard (step-by-step).
- **HP-023:** The system shall support nozzle check pattern print and auto-detect missing nozzles.
- **HP-024:** The system shall support head alignment pattern (horizontal, vertical, bi-directional).
- **HP-025:** The system shall support head cleaning and deep cleaning initiation.
- **HP-026:** The system shall support ink pad reset (waste ink counter).
- **HP-027:** The system shall support firmware version check and update.
- **HP-028:** The system shall maintain printer maintenance log (history of all maintenance actions).
- **HP-029:** The system shall alert when maintenance is due (configurable intervals).
- **HP-030:** The system shall support maintenance schedule configuration.

---

### 3.8 Module: Hardware Integration — Cutters (Phase 3)

#### 3.8.1 Discovery & Control
- **HC-001:** The system shall auto-discover network cutters (SNMP, mDNS).
- **HC-002:** The system shall auto-detect USB and serial cutters.
- **HC-003:** The system shall display cutter status: online, offline, error, busy, idle.
- **HC-004:** The system shall display blade status: worn, broken.
- **HC-005:** The system shall display mat status: worn (if applicable).
- **HC-006:** The system shall support blade pressure setting (light, medium, heavy, custom).
- **HC-007:** The system shall support cutting speed setting (slow, medium, fast, custom).
- **HC-008:** The system shall support blade offset setting (auto-detect or manual).
- **HC-009:** The system shall support overcut setting (auto or manual).
- **HC-010:** The system shall support corner action (miter, round, bevel).

#### 3.8.2 Contour & Weeding
- **HC-011:** The system shall support weed border addition (rectangular border around job).
- **HC-012:** The system shall support internal weed lines.
- **HC-013:** The system shall support weed box (rectangular weed area).
- **HC-014:** The system shall support registration mark type selection for cutter alignment.
- **HC-015:** The system shall support media size and type setting.
- **HC-016:** The system shall support media origin point setting and auto-detection.
- **HC-017:** The system shall support cutter queue management (view, add, remove, reorder, pause, resume, cancel).
- **HC-018:** The system shall support direct send of contour path from software.
- **HC-019:** The system shall support preview cut path before sending.
- **HC-020:** The system shall support mirror, scale, rotate before sending to cutter.

#### 3.8.3 Vendor Integration
- **HC-021:** The system shall support Summa GoSign direct integration and hot folder.
- **HC-022:** The system shall support Graphtec Cutting Master direct integration and hot folder.
- **HC-023:** The system shall support Zünd Cut Center direct integration and hot folder.
- **HC-024:** The system shall support Roland CutStudio direct integration and hot folder.
- **HC-025:** The system shall support Mimaki FineCut direct integration and hot folder.
- **HC-026:** The system shall support GCC GreatCut direct integration and hot folder.
- **HC-027:** The system shall support USCutter VinylMaster direct integration and hot folder.
- **HC-028:** The system shall support contour path auto-detect from transparent PNG edges.
- **HC-029:** The system shall support manual contour drawing and editing.
- **HC-030:** The system shall support contour offset (inset/outset), smooth, simplify.

#### 3.8.4 Export & Advanced
- **HC-031:** The system shall export contour path as SVG, DXF, PLT, AI, PDF.
- **HC-032:** The system shall support contour line color, width, and layer assignment.
- **HC-033:** The system shall support perforation cut (perf length and gap configurable).
- **HC-034:** The system shall support blade type selection (standard, deep cut, fabric, etc.).
- **HC-035:** The system shall support blade depth setting.
- **HC-036:** The system shall support multi-tool support (pen, scoring, engraving).
- **HC-037:** The system shall support kiss cut (top layer only), die cut (through all), half cut, crease.
- **HC-038:** The system shall maintain cutter maintenance log.
- **HC-039:** The system shall alert when cutter maintenance is due.
- **HC-040:** The system shall support cutter maintenance schedule configuration.

---

### 3.9 Module: Color Management (Phase 4)

#### 3.9.1 ICC Profiles
- **CM-001:** The system shall support ICC profile selection per substrate, per printer, per ink, per paper, per combination.
- **CM-002:** The system shall support custom ICC profile upload (from colorimeter or manufacturer).
- **CM-003:** The system shall support ICC profile download from manufacturer URLs.
- **CM-004:** The system shall support ICC profile management (organize, rename, delete, preview).
- **CM-005:** The system shall support ICC profile info display (profile details, color space, date).
- **CM-006:** The system shall support ICC profile validation (integrity check).
- **CM-007:** The system shall support ICC profile embedding in exports.
- **CM-008:** The system shall support ICC profile stripping from exports.
- **CM-009:** The system shall support soft proofing (simulate print colors on screen).
- **CM-010:** The system shall support soft proofing toggle, profile selection, paper color simulation, ink limit simulation.

#### 3.9.2 Gamut & Rendering
- **CM-011:** The system shall support gamut warning (highlight out-of-gamut colors for sublimation).
- **CM-012:** The system shall support gamut warning toggle, color selection, opacity adjustment.
- **CM-013:** The system shall support color blindness preview (protanopia, deuteranopia, tritanopia, achromatopsia).
- **CM-014:** The system shall support rendering intent: perceptual, relative colorimetric, saturation, absolute colorimetric, auto.
- **CM-015:** The system shall support black point compensation and white point adaptation.
- **CM-016:** The system shall support monitor calibration reminder and date tracking.
- **CM-017:** The system shall support monitor calibration wizard.
- **CM-018:** The system shall support color temperature, brightness, and contrast compensation.
- **CM-019:** The system shall support custom color profile creation from test print.
- **CM-020:** The system shall support color profile comparison (side-by-side).

#### 3.9.3 Separation & Ink
- **CM-021:** The system shall support Delta E color difference display and threshold setting.
- **CM-022:** The system shall support spot color support (Pantone, custom spots) with library.
- **CM-023:** The system shall support color separation preview (CMYK, RGB, Lab channels individually).
- **CM-024:** The system shall support undercolor removal (UCR) and gray component replacement (GCR).
- **CM-025:** The system shall support total ink limit setting and display.
- **CM-026:** The system shall support total ink limit warning and auto-reduce.
- **CM-027:** The system shall support ink coverage preview (visual density map per channel).
- **CM-028:** The system shall support ink coverage percentage per channel and total.
- **CM-029:** The system shall support rich black definition (custom CMYK recipe) and pure black override.
- **CM-030:** The system shall support color replacement table (map input to output colors).

#### 3.9.4 Measurement & Batch
- **CM-031:** The system shall support batch color correction (apply to multiple designs).
- **CM-032:** The system shall support color consistency check (ensure batch uniformity).
- **CM-033:** The system shall support color measurement device integration (X-Rite, i1).
- **CM-034:** The system shall support color measurement device calibration.
- **CM-035:** The system shall support spot color read and scan read.
- **CM-036:** The system shall support color measurement comparison to target.
- **CM-037:** The system shall support color measurement report export.
- **CM-038:** The system shall support paper white simulation (built-in and custom).
- **CM-039:** The system shall support ink limit per channel (cyan, magenta, yellow, black, light cyan, light magenta).
- **CM-040:** The system shall support ink limit warning per channel.

---

### 3.10 Module: Notifications & Alerts (Phase 3)

#### 3.10.1 Press Timer
- **NT-001:** The system shall provide press timer alarm for heat press operations.
- **NT-002:** The system shall support configurable press time per substrate profile.
- **NT-003:** The system shall play audio alarm when press time completes.
- **NT-004:** The system shall provide visual alarm (screen flash) when press time completes.
- **NT-005:** The system shall repeat alarm until acknowledged by user.
- **NT-006:** The system shall support custom alarm sound upload.
- **NT-007:** The system shall support alarm volume adjustment (independent of system volume).
- **NT-008:** The system shall display countdown timer on screen during pressing.
- **NT-009:** The system shall log actual press time vs. target time.
- **NT-010:** The system shall support multiple simultaneous press timers (if multiple presses in use).

#### 3.10.2 Job & System Alerts
- **NT-011:** The system shall play job complete chime with custom sound support.
- **NT-012:** The system shall play distinctive error alert tone.
- **NT-013:** The system shall play warning caution tone.
- **NT-014:** The system shall play low ink alert tone.
- **NT-015:** The system shall support independent volume control per alert type.
- **NT-016:** The system shall provide notification center (centralized alert history).
- **NT-017:** The system shall support toast notifications (brief popup with configurable duration, position, animation).
- **NT-018:** The system shall support Windows native desktop notifications.
- **NT-019:** The system shall support notification grouping (stack similar alerts).
- **NT-020:** The system shall support notification history search, filter, export, and clear.

#### 3.10.3 Do Not Disturb & Voice
- **NT-021:** The system shall support Do Not Disturb mode (silence non-critical alerts).
- **NT-022:** The system shall support DND schedule (auto-enable at specific times).
- **NT-023:** The system shall support DND exceptions (allow critical alerts through).
- **NT-024:** The system shall support scheduled quiet hours.
- **NT-025:** The system shall support voice announcement (TTS) for alerts: "Job 2842 complete".
- **NT-026:** The system shall support voice command recognition (offline, no cloud):
  - Start/stop press timer
  - Next/previous job
  - Mirror page horizontal/vertical
  - Show preview, zoom in/out, zoom fit
  - Export as PDF, export mirrored PDF
  - Undo, redo, save, open, new, close
  - Open modules (Design Store, Upscale, Print Sheet)
  - Search designs, add to basket, remove from basket
  - Run nesting, send to print, show queue, pause/resume/cancel print

---

### 3.11 Module: Settings & System (Phase 0 Foundation)

#### 3.11.1 Company & Defaults
- **SS-001:** The system shall support company profile: name, address, phone, email, logo upload/preview/replace/remove.
- **SS-002:** The system shall support default page size preset (A4/A3/roll/portrait/landscape).
- **SS-003:** The system shall support default margins (top, bottom, left, right, linked or independent).
- **SS-004:** The system shall support default gaps (horizontal, vertical, linked or independent).
- **SS-005:** The system shall support default DPI (300 or 600).
- **SS-006:** The system shall support default export folder (browse, auto-create).
- **SS-007:** The system shall support default mirror setting (on/off).
- **SS-008:** The system shall support default cut mark, safe guide, registration mark, color bar, page numbering settings.
- **SS-009:** The system shall support theme selection: dark, light, high contrast, custom.
- **SS-010:** The system shall support accent color, background color, text color customization.

#### 3.11.2 Localization & Input
- **SS-011:** The system shall support UI language: English, Hindi, Tamil, Telugu, Marathi, Gujarati, Bengali, Kannada, Malayalam, Punjabi, Urdu.
- **SS-012:** The system shall support date format: DD/MM/YYYY, MM/DD/YYYY, YYYY-MM-DD.
- **SS-013:** The system shall support time format: 12-hour, 24-hour.
- **SS-014:** The system shall support currency symbol display (₹, $, €, £) — display only, no accounting.
- **SS-015:** The system shall support measurement unit default: mm, inch, pixel, cm, pt, pica.
- **SS-016:** The system shall support keyboard shortcuts editor (customize all shortcuts).
- **SS-017:** The system shall support keyboard shortcuts reset, import, export, and printable cheat sheet.
- **SS-018:** The system shall support export preset manager (save/load named configs).
- **SS-019:** The system shall support print preset manager (save/load named print configs).
- **SS-020:** The system shall support substrate preset manager (save/load substrate profiles).

#### 3.11.3 User & Security
- **SS-021:** The system shall support user profile: Worker Mode (limited access) and Admin Mode (full access).
- **SS-022:** The system shall support password protection for admin settings.
- **SS-023:** The system shall support password protection for individual projects.
- **SS-024:** The system shall support auto-lock timeout after inactivity (configurable minutes).
- **SS-025:** The system shall support backup schedule: daily, weekly, monthly.
- **SS-026:** The system shall support backup location selection (local, external drive, network share).
- **SS-027:** The system shall support log level: debug, info, warning, error.
- **SS-028:** The system shall support update channel: stable, beta, alpha.
- **SS-029:** The system shall support factory reset with confirmation and auto-backup.
- **SS-030:** The system shall support database integrity check, repair, compact, vacuum, reindex.

---

### 3.12 Module: Production Reports (Phase 5)

#### 3.12.1 Time-Based Reports
- **RP-001:** The system shall generate daily production report: jobs completed, pieces count, sheets count, efficiency, time.
- **RP-002:** The system shall generate weekly production report with same metrics.
- **RP-003:** The system shall generate monthly production report with same metrics.
- **RP-004:** The system shall generate custom date range report.
- **RP-005:** The system shall display design popularity report (most/least printed, ranking, trend graph).
- **RP-006:** The system shall display substrate usage report (which substrates used, count, sheets, trend).
- **RP-007:** The system shall display ink consumption report (estimated per channel, total, trend).
- **RP-008:** The system shall display paper consumption report (sheets, meters, trend).
- **RP-009:** The system shall display waste report (material wasted, percentage, trend, by design, by substrate).
- **RP-010:** The system shall display efficiency report (nesting efficiency trends, by algorithm, by page size, by design count).

#### 3.12.2 Operational Reports
- **RP-011:** The system shall display worker productivity report (output per worker, count, time, efficiency).
- **RP-012:** The system shall display machine utilization report (printer/cutter uptime percentage, graph).
- **RP-013:** The system shall display machine downtime report (time offline, reason).
- **RP-014:** The system shall display defect rate report (quality trends, by type, by design, by substrate, trend graph).
- **RP-015:** The system shall display rework tracking (cost of reprints — tracking only, no accounting).
- **RP-016:** The system shall display turnaround time report (order completion speed, average, by design, by substrate).
- **RP-017:** The system shall export reports as PDF, Excel, CSV, HTML.
- **RP-018:** The system shall support scheduled report generation (auto-generate daily/weekly/monthly).
- **RP-019:** The system shall provide dashboard widgets: today count, today efficiency, queue status, recent jobs, top designs, machine status, defect alerts.
- **RP-020:** The system shall support dashboard widget rearrangement (drag to reorder).

---

### 3.13 Module: Testing & Diagnostics (Phase 5)

#### 3.13.1 Print Tests
- **TD-001:** The system shall print standard color test page.
- **TD-002:** The system shall print color bars test pattern.
- **TD-003:** The system shall print gradient test pattern.
- **TD-004:** The system shall print resolution test pattern.
- **TD-005:** The system shall print alignment test pattern.
- **TD-006:** The system shall print nozzle check pattern and auto-detect missing nozzles.
- **TD-007:** The system shall print head alignment pattern (horizontal, vertical, bi-directional).
- **TD-008:** The system shall print color calibration chart (standard and custom patches).
- **TD-009:** The system shall print density calibration test strip.
- **TD-010:** The system shall print registration accuracy test (standard and custom patterns).

#### 3.13.2 System Tests
- **TD-011:** The system shall run system performance test (benchmark CPU, GPU, disk, RAM).
- **TD-012:** The system shall run database integrity test (standard and deep check, auto-repair).
- **TD-013:** The system shall run file system test (read, write, delete, permissions).
- **TD-014:** The system shall run GPU stress test (standard and extended, with temperature monitoring).
- **TD-015:** The system shall run memory leak detection (standard and extended, generate report).
- **TD-016:** The system shall run network connectivity test (ping, speed, printer, cutter).
- **TD-017:** The system shall run printer communication test (standard and detailed).
- **TD-018:** The system shall run cutter communication test (standard and detailed).
- **TD-019:** The system shall run hot folder test (create, detect, process verification).
- **TD-020:** The system shall run export quality test (resolution, color, size verification).

#### 3.13.3 Diagnostics & Health
- **TD-021:** The system shall run upscale quality test (compare upscale vs original, PSNR/SSIM scores).
- **TD-022:** The system shall run color accuracy test (compare screen vs print, Delta E).
- **TD-023:** The system shall run speed benchmark (time various operations: nesting, export, upscale).
- **TD-024:** The system shall run load test (100, 500, 1000, 5000, 10000 designs).
- **TD-025:** The system shall run stress test (same design counts as load test).
- **TD-026:** The system shall run power loss recovery test (simulate crash during save).
- **TD-027:** The system shall run disk full recovery test (handle out-of-space gracefully).
- **TD-028:** The system shall run corrupt file recovery test (handle damaged input files).
- **TD-029:** The system shall provide log file analysis tool (parse, search, filter, export).
- **TD-030:** The system shall provide diagnostic report export (PDF, HTML, TXT) and auto-generate monthly.

#### 3.13.4 Health Dashboard
- **TD-031:** The system shall display system health dashboard with overall score (green/yellow/red).
- **TD-032:** The system shall display CPU, GPU, RAM, disk, database, printer, cutter health status.
- **TD-033:** The system shall provide recommendations for fixing issues.
- **TD-034:** The system shall track health history and trend graphs.
- **TD-035:** The system shall provide troubleshooting wizard (step-by-step fixes for printer, cutter, export, upscale, database, performance, network issues).
- **TD-036:** The system shall run self-test on launch (quick or full, skippable if recent).
- **TD-037:** The system shall run self-test on demand (quick or full).
- **TD-038:** The system shall generate self-test report (exportable, printable).
- **TD-039:** The system shall run benchmark suite (comprehensive CPU/GPU/disk/RAM/network scores).
- **TD-040:** The system shall run compatibility check (OS, CPU, RAM, GPU, disk, printer, cutter pass/fail).

---

### 3.14 Module: Installation & Deployment (Phase 0)

#### 3.14.1 Installer
- **ID-001:** The system shall provide Windows installer (.exe) with standard setup wizard.
- **ID-002:** The system shall provide MSI package option.
- **ID-003:** The system shall support silent install mode (no UI, command line, config file).
- **ID-004:** The system shall support portable mode (run from USB without installation).
- **ID-005:** The system shall auto-create AppData folder structure on first run.
- **ID-006:** The system shall auto-initialize SQLite database with schema and default data.
- **ID-007:** The system shall verify write permissions to AppData and alert if failed.
- **ID-008:** The system shall create desktop shortcut (optional, toggle during install).
- **ID-009:** The system shall create Start Menu entry (optional, toggle during install).
- **ID-010:** The system shall support taskbar pin (auto-pin on first launch optional).

#### 3.14.2 Dependencies
- **ID-011:** The system shall bundle all required binaries and dependencies.
- **ID-012:** The system shall bundle Real-ESRGAN ncnn Vulkan engine.
- **ID-013:** The system shall bundle default AI model files.
- **ID-014:** The system shall verify and auto-install VC++ Redistributable if missing.
- **ID-015:** The system shall verify and auto-install .NET Runtime if needed.
- **ID-016:** The system shall check GPU drivers (NVIDIA, AMD, Intel) and warn if outdated.
- **ID-017:** The system shall verify disk space (minimum and recommended) and warn if low.
- **ID-018:** The system shall verify RAM (minimum and recommended) and warn if low.
- **ID-019:** The system shall verify screen resolution (minimum) and warn if too low.
- **ID-020:** The system shall check system compatibility and provide upgrade suggestions.

#### 3.14.3 Updates & Maintenance
- **ID-021:** The system shall support auto-update check on launch (optional).
- **ID-022:** The system shall support manual update check on demand.
- **ID-023:** The system shall support offline update package (install from USB/file).
- **ID-024:** The system shall support update rollback to previous version.
- **ID-025:** The system shall display changelog (what's new) and export/print it.
- **ID-026:** The system shall support beta channel opt-in with stability warning.
- **ID-027:** The system shall support telemetry opt-out (disable usage data collection).
- **ID-028:** The system shall support crash reporter (optional, preview before send).
- **ID-029:** The system shall provide health check dashboard on first run.
- **ID-030:** The system shall support repair installation (standard and deep repair).

#### 3.14.4 Licensing
- **ID-031:** The system shall support offline license key validation.
- **ID-032:** The system shall support online license key validation.
- **ID-033:** The system shall support trial mode (configurable duration, limited features, watermarked export).
- **ID-034:** The system shall warn before trial expiry.
- **ID-035:** The system shall provide trial-to-full upgrade path.
- **ID-036:** The system shall support license key input, paste, validation with alerts (invalid, used, expired, revoked).
- **ID-037:** The system shall support license transfer to new PC and deactivation/reactivation.
- **ID-038:** The system shall maintain activation history.
- **ID-039:** The system shall support multi-PC license management (add, remove, view, limit, transfer).
- **ID-040:** The system shall support floating license server (network license, borrow, return).

---

### 3.15 Module: Bonus & Delight (Phase 6)

#### 3.15.1 UI Polish
- **BD-001:** The system shall provide dark mode, light mode, high contrast mode (auto-switch by time optional).
- **BD-002:** The system shall provide animated transitions (fade, slide, zoom) with configurable duration and disable option.
- **BD-003:** The system shall provide loading skeletons (shimmer, pulse) for all async operations.
- **BD-004:** The system shall provide progress indicators (linear, circular, percentage, ETA) for long operations.
- **BD-005:** The system shall provide empty state illustrations (friendly graphics for empty screens).
- **BD-006:** The system shall provide onboarding checklist (first-time guide: welcome, setup, first design, first print, completion).
- **BD-007:** The system shall provide achievement badges (gamification: first design, first print, 100 designs, 1000 prints, perfect nesting, speed demon, quality master).
- **BD-008:** The system shall provide daily production tips (category, previous tips, disable option).
- **BD-009:** The system shall provide keyboard shortcut overlay (press ? to show, searchable, printable).
- **BD-010:** The system shall provide context menus everywhere (canvas, object, layer, Design Store, Order Basket).

#### 3.15.2 Advanced UX
- **BD-011:** The system shall support drag-and-drop everywhere (canvas, layers, Design Store, Order Basket, Upscale Factory).
- **BD-012:** The system shall support clipboard integration (images, text, objects, styles, effects).
- **BD-013:** The system shall provide visual undo history (timeline, thumbnails, click to jump).
- **BD-014:** The system shall support multi-select (Ctrl+click, Shift+click, marquee, lasso) and invert selection.
- **BD-015:** The system shall support select same type, color, stroke, size, font, opacity, blend mode, effects.
- **BD-016:** The system shall support hide selection edges, outline mode, pixel preview.
- **BD-017:** The system shall support split screen view (two views of same document).
- **BD-018:** The system shall support presentation mode (full-screen slideshow of designs with auto-advance, transitions, loop, timer, notes, laser pointer, zoom, pan).
- **BD-019:** The system shall support workspace layouts (save/load named panel arrangements: default, design, print, upscale, custom).
- **BD-020:** The system shall support panel management (show/hide, dock, float, resize, collapse, expand, auto-hide, pin, tabbed, stacked, sidebar, bottom bar, top bar, custom position).

#### 3.15.3 Window & Display
- **BD-021:** The system shall support full-screen mode (F11 toggle, Esc exit) with configurable chrome visibility.
- **BD-022:** The system shall support window snap (left, right, top, bottom, quarter, maximize, restore).
- **BD-023:** The system shall support multi-monitor (detect, move panels/windows, remember positions).
- **BD-024:** The system shall support touchscreen (larger buttons, gestures, stylus, palm rejection, pressure, tilt).
- **BD-025:** The system shall support gesture support (pinch to zoom, rotate, pan, swipe, double tap, long press, custom, disable).
- **BD-026:** The system shall provide status bar (coordinates, dimensions, zoom, selection count, document info, color, tool, mode, custom).
- **BD-027:** The system shall provide breadcrumb navigation (clickable location path, home, back).
- **BD-028:** The system shall provide recent files list (last N, pin, unpin, remove, open folder, hover preview).
- **BD-029:** The system shall support pin favorite projects (keep at top of list).
- **BD-030:** The system shall support window transparency adjustment and always-on-top toggle.

---

## 4. Data Requirements

### 4.1 Data Storage
- All user data shall be stored locally in AppData/SublimationPrintOS/ (SQLite database + file assets).
- No cloud storage required. Optional cloud sync (OneDrive/Dropbox/Google Drive) is P3.
- Database shall support 50,000+ designs with full metadata and fast search (FTS5).
- All file paths shall be stored relative to AppData root for portability.

### 4.2 Data Retention
- Processing logs retained for 90 days (configurable).
- Rejected designs retained for 30 days then auto-purged (configurable).
- Completed jobs retained indefinitely (configurable).
- Auto-backup daily to backup folder (configurable location).

### 4.3 Data Export/Import
- Full database export to SQL file.
- Full database import from SQL file.
- Design export: PNG + JSON metadata sidecar.
- Design import: PNG with optional JSON sidecar.
- Order export: CSV/Excel.
- Order import: CSV/Excel.
- Settings export/import for migration to new PC.

---

## 5. Interface Requirements

### 5.1 User Interfaces
- Primary interface: Desktop application window (Tauri/Electron) with multi-panel layout.
- Minimum resolution: 1366×768 (P0). Recommended: 1920×1080.
- Touch-friendly targets minimum 44×44px.
- All text shall be readable at 100% zoom (no microscopic labels).
- Dark mode shall be default (production floor lighting).

### 5.2 Hardware Interfaces
- USB printer connection (Epson, Roland, Mimaki, Mutoh, etc.).
- Network printer connection (TCP/IP, SNMP, mDNS).
- USB/Serial cutter connection (Summa, Graphtec, Zünd, etc.).
- Barcode scanner (USB HID keyboard emulation).
- Webcam (for QC photo capture).
- Optional: Heat press IoT sensor (temperature read via Bluetooth/WiFi — P3).

### 5.3 Software Interfaces
- Real-ESRGAN ncnn Vulkan (command line integration).
- Windows Print Spooler API.
- RIP software hot folders (file system watcher).
- RIP software APIs (Caldera REST, Wasatch SDK, Onyx JDF — P2/P3).
- SQLite database (local file).
- Windows Notification API (toast notifications).

---

## 6. Appendices

### Appendix A: Priority Matrix Summary

| Module | P0 Count | P1 Count | P2 Count | P3 Count | Total |
|--------|----------|----------|----------|----------|-------|
| Upscale Factory | 20 | 15 | 10 | 5 | 50 |
| Design Store | 15 | 20 | 10 | 5 | 50 |
| Design Studio | 60 | 50 | 30 | 10 | 150 |
| Order Basket | 15 | 10 | 5 | 0 | 30 |
| Print Sheet Builder | 25 | 30 | 10 | 5 | 70 |
| Export System | 15 | 10 | 5 | 0 | 30 |
| Hardware — Printers | 10 | 15 | 5 | 0 | 30 |
| Hardware — Cutters | 5 | 15 | 10 | 0 | 30 |
| Color Management | 5 | 20 | 10 | 5 | 40 |
| Settings & System | 20 | 10 | 5 | 0 | 35 |
| Notifications | 10 | 10 | 5 | 5 | 30 |
| Production Reports | 0 | 10 | 10 | 0 | 20 |
| Testing & Diagnostics | 0 | 15 | 15 | 0 | 30 |
| Installation | 15 | 15 | 5 | 5 | 40 |
| Bonus & Delight | 5 | 15 | 10 | 0 | 30 |
| **TOTAL** | **220** | **280** | **160** | **40** | **700** |

*(Note: This covers the top 700 functional requirements. The remaining 2,300 features in the Master Feature List are derived from these base requirements with parameter variations.)*

### Appendix B: Excluded Features (Explicitly Out of Scope)

| Excluded Feature | Reason |
|------------------|--------|
| Inventory stock levels | On-demand production, no stock tracking |
| Supplier management | No supplier relationships in scope |
| CRM / Customer database | No customer relationship management |
| RTO / Returns processing | No return merchandise authorization |
| Shipping / Delivery tracking | No logistics in scope |
| Revenue / Profit calculation | No financial accounting |
| GST / Tax invoicing | No tax calculation |
| Salesperson commission | No sales team management |
| Loyalty points | No reward program |
| Purchase order generation | No procurement in scope |
| Multi-currency accounting | No financial operations |
| Online store / e-commerce | Offline desktop app only |
| Cloud-based design storage | Offline-first, local storage only |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-06-06 | Product Team | Initial functional requirements for 3,000-feature SublimationPrintOS |
