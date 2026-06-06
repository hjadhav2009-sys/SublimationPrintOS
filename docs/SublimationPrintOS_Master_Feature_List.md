# SublimationPrintOS — Master Feature List (3,000 Features)

> **Version:** 1.0  
> **Date:** 2026-06-06  
> **Scope:** Pure Sublimation Production ONLY  
> **Excluded:** Inventory, CRM, RTO/Returns, Shipping, Stock, Suppliers, Revenue, Salesperson, Loyalty  
> **Platform:** Offline Windows Desktop Application (Tauri/Electron + Rust/Node Backend + SQLite)  
> **Priority Legend:** P0 = Must Have | P1 = Should Have | P2 = Nice to Have | P3 = Future / Version 3.0+

---

## Executive Summary

SublimationPrintOS is a dedicated offline production operating system for dye-sublimation printing businesses. It covers the complete workflow from raw image intake → AI upscaling → quality control → design studio → order batching → auto-nesting → print sheet generation → hardware integration (printers/cutters) → export → production reporting. 

The system is designed for single-category or multi-category sublimation firms (keychains, car hangers, mugs, apparel, etc.) operating in on-demand and mass-customization environments. It is strictly production-focused: no inventory tracking, no customer relationship management, no return processing, and no financial accounting.

---

## Category Index (30 Categories)

| # | Category | Feature Count | Primary Phase |
|---|----------|---------------|---------------|
| 1 | Design Studio — Core Editing | 100 | Phase 1 |
| 2 | Design Studio — Object Manipulation | 100 | Phase 1 |
| 3 | Design Studio — Layers Panel | 100 | Phase 1 |
| 4 | Design Studio — Text & Typography | 100 | Phase 1 |
| 5 | Design Studio — Shapes & Graphics | 100 | Phase 1 |
| 6 | Design Studio — Image Handling | 100 | Phase 1 |
| 7 | Design Studio — Advanced Image | 100 | Phase 1 |
| 8 | Design Studio — Advanced Tools | 100 | Phase 1 |
| 9 | Design Studio — Templates | 100 | Phase 0 |
| 10 | Design Studio — Festival & Thematic Templates | 100 | Phase 0 |
| 11 | Upscale Factory — Workflow | 100 | Phase 0 |
| 12 | Upscale Factory — AI Models & Processing | 100 | Phase 0 |
| 13 | Quality Control — Pre-Checks | 100 | Phase 0 |
| 14 | Print Sheet Builder — Nesting & Layout | 100 | Phase 2 |
| 15 | Print Sheet Builder — Marks & Export | 100 | Phase 2 |
| 16 | Export System | 100 | Phase 2 |
| 17 | Hardware Integration — Printers | 100 | Phase 3 |
| 18 | Hardware Integration — Cutters | 100 | Phase 3 |
| 19 | Color Management | 100 | Phase 4 |
| 20 | Settings & System | 100 | Phase 0 |
| 21 | Settings & System Advanced | 100 | Phase 5 |
| 22 | Production Reports | 100 | Phase 5 |
| 23 | Notifications & Alerts | 100 | Phase 3 |
| 24 | Testing & Diagnostics | 100 | Phase 5 |
| 25 | Testing & Diagnostics Advanced | 100 | Phase 5 |
| 26 | Bonus & Delight Features | 100 | Phase 6 |
| 27 | Bonus & Delight Advanced | 100 | Phase 6 |
| 28 | Installation & Deployment | 100 | Phase 0 |
| 29 | Installation & Deployment Advanced | 100 | Phase 0 |
| 30 | Installation & Deployment Final | 100 | Phase 0 |
| **TOTAL** | | **3,000** | |

---

## Priority Distribution Summary

| Priority | Count | % of Total | Build Strategy |
|----------|-------|------------|----------------|
| P0 — Must Have | 420 | 14% | Phases 0–4. Non-negotiable for MVP. |
| P1 — Should Have | 980 | 32.7% | Phases 5–6. Strong competitive differentiators. |
| P2 — Nice to Have | 1,050 | 35% | 2027 Roadmap. Polish and power features. |
| P3 — Future | 550 | 18.3% | Version 3.0+. Advanced/edge cases. |

---

## Category 1: Design Studio — Core Editing (1–100)

| # | Feature | Description | Priority |
|---|---------|-------------|----------|
| 1 | Drag-and-Drop Design Placement | Drag designs from gallery to canvas. | P0 |
| 2 | Freehand Selection Tool | Lasso/marquee select objects. | P0 |
| 3 | Rectangle Selection | Box select multiple objects. | P0 |
| 4 | Move Tool | Select and reposition objects. | P0 |
| 5 | Direct Select Tool | Select individual anchor points. | P1 |
| 6 | Hand Tool (Pan Canvas) | Drag to pan workspace. | P0 |
| 7 | Zoom Tool | Click to zoom in/out. | P0 |
| 8 | Fit to Screen | Zoom to show entire canvas. | P0 |
| 9 | Fit to Selection | Zoom to selected object. | P0 |
| 10 | Actual Size (100%) | View at real print dimensions. | P0 |
| 11 | Zoom to 200% | 2× magnification. | P0 |
| 12 | Zoom to 400% | 4× for detail work. | P0 |
| 13 | Zoom to 800% | 8× for pixel precision. | P2 |
| 14 | Zoom to 1600% | 16× for micro-adjustments. | P3 |
| 15 | Zoom In (Ctrl++) | Incremental zoom. | P0 |
| 16 | Zoom Out (Ctrl+−) | Incremental zoom out. | P0 |
| 17 | Zoom Presets Dropdown | 25%, 50%, 100%, 200%, 400%, Fit. | P0 |
| 18 | Canvas Rotation (View Only) | Rotate canvas view, not content. | P2 |
| 19 | Canvas Reset Rotation | Return to 0° view. | P2 |
| 20 | Rulers (Top and Left) | Show measurement rulers. | P0 |
| 21 | Ruler Unit Display | Show mm/inch/pixel on rulers. | P0 |
| 22 | Ruler Origin Point | Zero point at top-left or custom. | P1 |
| 23 | Guide Lines (Drag from Ruler) | Pull guides onto canvas. | P0 |
| 24 | Guide Lock | Prevent accidental guide movement. | P1 |
| 25 | Guide Hide/Show Toggle | Clean view vs guided view. | P0 |
| 26 | Guide Clear All | Remove all guides instantly. | P0 |
| 27 | Guide Snap | Objects snap to guides. | P0 |
| 28 | Smart Guides (Dynamic Alignment) | Magenta lines when aligning. | P0 |
| 29 | Smart Guide Distance Display | Show gap between objects in px/mm. | P1 |
| 30 | Grid Display (Dots) | Dot pattern background. | P1 |
| 31 | Grid Display (Lines) | Line grid background. | P1 |
| 32 | Grid Snap | Objects snap to grid intersections. | P0 |
| 33 | Grid Size Custom (mm) | Set grid spacing in millimeters. | P0 |
| 34 | Grid Size Custom (inch) | Set grid spacing in inches. | P0 |
| 35 | Grid Size Custom (pixel) | Set grid spacing in pixels. | P0 |
| 36 | Grid Subdivisions | Show finer grid lines. | P1 |
| 37 | Grid Color Customization | Change grid line color. | P2 |
| 38 | Grid Opacity | Fade grid lines. | P1 |
| 39 | Snap to Grid | Toggle grid snapping. | P0 |
| 40 | Snap to Guides | Toggle guide snapping. | P0 |
| 41 | Snap to Objects | Snap to edges of other objects. | P0 |
| 42 | Snap to Object Center | Snap to center point. | P0 |
| 43 | Snap to Object Edges | Snap to bounding box edges. | P0 |
| 44 | Snap to Page Center | Snap to canvas center. | P0 |
| 45 | Snap to Page Edges | Snap to artboard boundaries. | P0 |
| 46 | Snap Tolerance Adjustment | How close before snap activates. | P1 |
| 47 | Canvas Background Color | Change workspace color. | P1 |
| 48 | Canvas Background Pattern | Checkerboard or custom. | P1 |
| 49 | Canvas Background Transparent | Show transparency grid. | P0 |
| 50 | Artboard Background Color | Change printable area color. | P0 |
| 51 | Artboard Border Display | Show page boundary line. | P0 |
| 52 | Artboard Bleed Display | Show bleed zone shading. | P0 |
| 53 | Artboard Safe Zone Display | Show safe zone shading. | P0 |
| 54 | Multiple Artboards | Work on several pages in one file. | P2 |
| 55 | Artboard Add/Delete | Create or remove pages. | P2 |
| 56 | Artboard Duplicate | Copy page with contents. | P2 |
| 57 | Artboard Reorder | Drag to change page order. | P2 |
| 58 | Artboard Rename | Name each page meaningfully. | P2 |
| 59 | Artboard Size Change | Resize individual artboard. | P2 |
| 60 | Artboard Template Apply | Apply preset size to artboard. | P1 |
| 61 | Undo (Ctrl+Z) | Reverse last action. | P0 |
| 62 | Redo (Ctrl+Y) | Reapply undone action. | P0 |
| 63 | Undo History Panel | Visual list of all undo states. | P2 |
| 64 | Undo History Snapshot | Save named restore point. | P2 |
| 65 | Undo Step Limit | Set max undo steps (20–500). | P1 |
| 66 | Auto-Save Interval | Save every N minutes. | P0 |
| 67 | Auto-Save on Crash | Emergency save before crash. | P0 |
| 68 | Crash Recovery Dialog | Restore unsaved work on restart. | P0 |
| 69 | Project Save (Ctrl+S) | Save current project file. | P0 |
| 70 | Project Save As (Ctrl+Shift+S) | Save with new name/location. | P0 |
| 71 | Project Open (Ctrl+O) | Open existing project. | P0 |
| 72 | Project New (Ctrl+N) | Create blank project. | P0 |
| 73 | Project Close | Close without quitting app. | P0 |
| 74 | Project Recent Files | List of last 20 projects. | P0 |
| 75 | Project Pin to Top | Keep important projects accessible. | P1 |
| 76 | Project Thumbnail Preview | Auto-generated preview image. | P1 |
| 77 | Project Search | Find projects by name/date. | P1 |
| 78 | Project Auto-Versioning | Save incremental versions. | P2 |
| 79 | Project Backup on Save | Create .backup file on each save. | P1 |
| 80 | Project Export as Template | Save structure for reuse. | P2 |
| 81 | Project Import Template | Load saved structure. | P2 |
| 82 | Project Merge | Combine two projects. | P3 |
| 83 | Project Properties | View file size, dimensions, objects. | P1 |
| 84 | Project Compression | Reduce file size on save. | P2 |
| 85 | Project Password Protection | Encrypt project file. | P3 |
| 86 | Clipboard Copy (Ctrl+C) | Copy selected object. | P0 |
| 87 | Clipboard Cut (Ctrl+X) | Cut selected object. | P0 |
| 88 | Clipboard Paste (Ctrl+V) | Paste object. | P0 |
| 89 | Clipboard Paste in Place | Paste at original coordinates. | P1 |
| 90 | Clipboard Paste on All Pages | Paste across all artboards. | P2 |
| 91 | Clipboard Copy Style | Copy only formatting. | P1 |
| 92 | Clipboard Paste Style | Apply copied formatting. | P1 |
| 93 | Duplicate (Ctrl+D) | Clone selected object. | P0 |
| 94 | Duplicate with Offset | Clone at set X/Y offset. | P1 |
| 95 | Duplicate Multiple | Create N copies at once. | P1 |
| 96 | Duplicate as Grid | Create rows × columns of copies. | P1 |
| 97 | Duplicate as Circle | Arrange copies in circular pattern. | P2 |
| 98 | Duplicate as Line | Arrange copies in straight line. | P2 |
| 99 | Delete (Delete Key) | Remove selected object. | P0 |
| 100 | Delete with Confirmation | Confirm on complex objects. | P2 |

---

## Category 2: Design Studio — Object Manipulation (101–200)

| # | Feature | Description | Priority |
|---|---------|-------------|----------|
| 101 | Select Single Object | Click to select. | P0 |
| 102 | Select Multiple Objects (Shift+Click) | Add to selection. | P0 |
| 103 | Select Multiple Objects (Marquee) | Box drag to select. | P0 |
| 104 | Select All (Ctrl+A) | Select everything on page. | P0 |
| 105 | Deselect All (Esc) | Clear selection. | P0 |
| 106 | Invert Selection | Select everything except current. | P1 |
| 107 | Select Same Type | Select all text / all images / all shapes. | P1 |
| 108 | Select Same Color | Select all objects of same fill color. | P1 |
| 109 | Select Same Stroke Color | Select all objects of same stroke. | P1 |
| 110 | Select Same Size | Select all objects of same dimensions. | P1 |
| 111 | Select Same Font | Select all text of same font family. | P1 |
| 112 | Select Locked Objects | Include locked in selection. | P2 |
| 113 | Select Hidden Objects | Include hidden in selection. | P2 |
| 114 | Lock Position | Prevent movement. | P0 |
| 115 | Lock Size | Prevent resizing. | P0 |
| 116 | Lock Rotation | Prevent rotation. | P0 |
| 117 | Lock All Properties | Fully lock object. | P0 |
| 118 | Unlock Single | Unlock selected object. | P0 |
| 119 | Unlock All | Unlock everything on page. | P0 |
| 120 | Hide Object | Make invisible but keep. | P0 |
| 121 | Show Hidden Objects | Reveal all hidden. | P0 |
| 122 | Show/Hide Toggle | Quick visibility switch. | P0 |
| 123 | Object Opacity Slider | 0–100% transparency. | P0 |
| 124 | Object Opacity Input | Type exact percentage. | P0 |
| 125 | Object Opacity Presets | 25%, 50%, 75%, 100%. | P1 |
| 126 | Object Name/Rename | Give objects meaningful names. | P1 |
| 127 | Object Notes | Attach internal notes to object. | P2 |
| 128 | Object Info Panel | Show position, size, rotation, type. | P0 |
| 129 | Position X Input | Type exact X coordinate. | P0 |
| 130 | Position Y Input | Type exact Y coordinate. | P0 |
| 131 | Width Input | Type exact width. | P0 |
| 132 | Height Input | Type exact height. | P0 |
| 133 | Rotation Input | Type exact rotation angle. | P0 |
| 134 | Rotation Reset | Set to 0°. | P0 |
| 135 | Rotation 90° Right | Rotate clockwise 90°. | P0 |
| 136 | Rotation 90° Left | Rotate counter-clockwise 90°. | P0 |
| 137 | Rotation 180° | Flip upside down. | P0 |
| 138 | Rotation 45° | Quick diagonal. | P1 |
| 139 | Rotation Free (Drag Handle) | Drag corner to rotate freely. | P0 |
| 140 | Rotation Snap 15° | Snap to 15° increments. | P1 |
| 141 | Rotation Snap 30° | Snap to 30° increments. | P1 |
| 142 | Rotation Snap 45° | Snap to 45° increments. | P1 |
| 143 | Rotation Snap 90° | Snap to 90° increments. | P0 |
| 144 | Rotation Center Point | Set custom pivot point. | P1 |
| 145 | Rotation Center Reset | Return to object center. | P1 |
| 146 | Scale Uniform (Lock Aspect) | Maintain ratio while resizing. | P0 |
| 147 | Scale Non-Uniform | Stretch width or height independently. | P0 |
| 148 | Scale from Center | Resize from center point. | P0 |
| 149 | Scale from Corner | Resize from corner handle. | P0 |
| 150 | Scale Percentage Input | Scale to 50%, 200%, etc. | P1 |
| 151 | Flip Horizontal (Object) | Mirror left-to-right. | P0 |
| 152 | Flip Vertical (Object) | Mirror top-to-bottom. | P0 |
| 153 | Flip Horizontal + Vertical | Both axes. | P0 |
| 154 | Nudge Up (Arrow Key) | Move 1px. | P0 |
| 155 | Nudge Down (Arrow Key) | Move 1px. | P0 |
| 156 | Nudge Left (Arrow Key) | Move 1px. | P0 |
| 157 | Nudge Right (Arrow Key) | Move 1px. | P0 |
| 158 | Nudge 10px (Shift+Arrow) | Move 10px. | P0 |
| 159 | Nudge Custom Distance | Set nudge amount (1px, 5px, 10px). | P1 |
| 160 | Align Left | Align to leftmost object. | P0 |
| 161 | Align Center Horizontally | Align to horizontal center. | P0 |
| 162 | Align Right | Align to rightmost object. | P0 |
| 163 | Align Top | Align to topmost object. | P0 |
| 164 | Align Center Vertically | Align to vertical center. | P0 |
| 165 | Align Bottom | Align to bottommost object. | P0 |
| 166 | Align to Page Left | Align to artboard left edge. | P0 |
| 167 | Align to Page Center | Align to artboard center. | P0 |
| 168 | Align to Page Right | Align to artboard right edge. | P0 |
| 169 | Align to Page Top | Align to artboard top edge. | P0 |
| 170 | Align to Page Bottom | Align to artboard bottom edge. | P0 |
| 171 | Distribute Horizontal | Equal spacing across width. | P0 |
| 172 | Distribute Vertical | Equal spacing down height. | P0 |
| 173 | Distribute to Page Edges | Spread across full page width. | P1 |
| 174 | Distribute Spacing Value | Show exact gap in mm/px. | P1 |
| 175 | Bring to Front | Move to top of stack. | P0 |
| 176 | Bring Forward | Move up one layer. | P0 |
| 177 | Send to Back | Move to bottom of stack. | P0 |
| 178 | Send Backward | Move down one layer. | P0 |
| 179 | Layer Order Drag | Drag in layers panel to reorder. | P0 |
| 180 | Layer Order Number | Show stack position. | P1 |
| 181 | Group Objects (Ctrl+G) | Combine into group. | P0 |
| 182 | Ungroup Objects (Ctrl+Shift+G) | Break group apart. | P0 |
| 183 | Group Selection | Select group as single unit. | P0 |
| 184 | Enter Group | Edit inside group. | P1 |
| 185 | Exit Group | Return to parent level. | P1 |
| 186 | Merge Objects | Flatten into single object. | P2 |
| 187 | Boolean Union | Combine shapes. | P2 |
| 188 | Boolean Subtract | Cut shape from another. | P2 |
| 189 | Boolean Intersect | Keep overlap only. | P2 |
| 190 | Boolean Exclude | Keep non-overlap only. | P2 |
| 191 | Crop to Selection | Trim canvas to selected objects. | P2 |
| 192 | Crop to Content | Trim to all objects on page. | P2 |
| 193 | Crop to Bleed | Trim to bleed boundary. | P1 |
| 194 | Crop to Safe Zone | Trim to safe boundary. | P1 |
| 195 | Expand Object | Convert stroke to fill path. | P2 |
| 196 | Simplify Path | Reduce anchor points. | P2 |
| 197 | Smooth Path | Round sharp corners. | P2 |
| 198 | Offset Path | Create inset/outset outline. | P2 |
| 199 | Outline Stroke | Convert line to shape. | P2 |
| 200 | Rasterize Object | Convert vector to raster. | P2 |

---

## Category 3: Design Studio — Layers Panel (201–300)

| # | Feature | Description | Priority |
|---|---------|-------------|----------|
| 201 | Layers Panel Toggle | Show/hide layers sidebar. | P0 |
| 202 | Layer List View | Scrollable list of all objects. | P0 |
| 203 | Layer Thumbnail Preview | Mini image of each layer. | P0 |
| 204 | Layer Name Display | Show object name. | P0 |
| 205 | Layer Name Edit | Double-click to rename. | P0 |
| 206 | Layer Type Icon | Text, image, shape indicator. | P0 |
| 207 | Layer Visibility Toggle | Eye icon on/off. | P0 |
| 208 | Layer Lock Toggle | Lock icon on/off. | P0 |
| 209 | Layer Opacity Slider | Per-layer transparency. | P1 |
| 210 | Layer Opacity Value Display | Show percentage. | P1 |
| 211 | Layer Selection Click | Click layer to select object. | P0 |
| 212 | Layer Multi-Select (Ctrl) | Select multiple layers. | P0 |
| 213 | Layer Multi-Select (Shift) | Range select layers. | P0 |
| 214 | Layer Drag Reorder | Change stacking order. | P0 |
| 215 | Layer Drag to Group | Move into group folder. | P1 |
| 216 | Layer Group Folder | Create folder in layers. | P1 |
| 217 | Layer Group Expand/Collapse | Show/hide folder contents. | P1 |
| 218 | Layer Group Rename | Name the folder. | P1 |
| 219 | Layer Group Lock | Lock entire folder. | P1 |
| 220 | Layer Group Hide | Hide entire folder. | P1 |
| 221 | Layer Group Delete | Remove folder and contents. | P1 |
| 222 | Layer Duplicate | Clone layer in panel. | P0 |
| 223 | Layer Delete | Remove from panel. | P0 |
| 224 | Layer Delete with Confirmation | Warn on complex objects. | P2 |
| 225 | Layer Solo Mode | Show only selected layer. | P2 |
| 226 | Layer Solo Exit | Return to normal view. | P2 |
| 227 | Layer Isolation Mode | Edit one layer, dim others. | P2 |
| 228 | Layer Isolation Exit | Return to full view. | P2 |
| 229 | Layer Mask | Hide portions with mask. | P2 |
| 230 | Layer Mask Apply | Bake mask into object. | P2 |
| 231 | Layer Mask Remove | Delete mask only. | P2 |
| 232 | Layer Mask Invert | Swap visible/hidden. | P2 |
| 233 | Layer Clipping Mask | Use object as mask for another. | P2 |
| 234 | Layer Clipping Mask Release | Remove clipping. | P2 |
| 235 | Layer Blend Mode | Multiply, Screen, Overlay, etc. | P2 |
| 236 | Layer Blend Mode Preview | Live preview while changing. | P2 |
| 237 | Layer Search | Find layer by name. | P2 |
| 238 | Layer Filter by Type | Show only text / only images. | P2 |
| 239 | Layer Filter by Color | Show only red objects. | P3 |
| 240 | Layer Count Display | Show total layer count. | P1 |
| 241 | Layer Color Label | Tag with color (red, blue, green). | P2 |
| 242 | Layer Color Label Filter | Show only red-tagged layers. | P2 |
| 243 | Layer Merge Down | Merge with layer below. | P1 |
| 244 | Layer Merge Selected | Merge multiple selected layers. | P1 |
| 245 | Layer Merge All Visible | Flatten all visible layers. | P1 |
| 246 | Layer Flatten Image | Merge everything to single layer. | P1 |
| 247 | Layer Rasterize | Convert vector layer to raster. | P2 |
| 248 | Layer Convert to Smart Object | Non-destructive scaling. | P3 |
| 249 | Layer Smart Object Edit | Edit source of smart object. | P3 |
| 250 | Layer Smart Object Update | Refresh all instances. | P3 |
| 251 | Layer Effects Panel | Add effects to layer. | P2 |
| 252 | Layer Effect Drop Shadow | Shadow behind object. | P2 |
| 253 | Layer Effect Inner Shadow | Shadow inside border. | P2 |
| 254 | Layer Effect Outer Glow | Glow outside object. | P2 |
| 255 | Layer Effect Inner Glow | Glow inside border. | P2 |
| 256 | Layer Effect Bevel | 3D raised effect. | P3 |
| 257 | Layer Effect Emboss | Embossed texture. | P3 |
| 258 | Layer Effect Stroke | Border around object. | P1 |
| 259 | Layer Effect Stroke Color | Choose border color. | P1 |
| 260 | Layer Effect Stroke Width | Border thickness. | P1 |
| 261 | Layer Effect Stroke Position | Inside, center, outside. | P1 |
| 262 | Layer Effect Stroke Dashed | Dashed border style. | P2 |
| 263 | Layer Effect Stroke Dotted | Dotted border style. | P2 |
| 264 | Layer Effect Copy | Copy effects from one layer. | P2 |
| 265 | Layer Effect Paste | Apply copied effects. | P2 |
| 266 | Layer Effect Clear | Remove all effects. | P2 |
| 267 | Layer Effect Preset Save | Save effect combo as preset. | P2 |
| 268 | Layer Effect Preset Load | Apply saved effect combo. | P2 |
| 269 | Layer Effect Global Light | Consistent light angle for all. | P3 |
| 270 | Layer Effect Scale | Scale effects with object. | P2 |
| 271 | Layer Style Inheritance | Apply style to multiple layers. | P2 |
| 272 | Layer Transform Panel | Show matrix values. | P3 |
| 273 | Layer Transform Reset | Reset all transforms. | P1 |
| 274 | Layer Transform Copy | Copy transform values. | P2 |
| 275 | Layer Transform Paste | Apply transform values. | P2 |
| 276 | Layer Linking | Link layers to move together. | P2 |
| 277 | Layer Unlinking | Break link. | P2 |
| 278 | Layer Link Indicator | Show link icon in panel. | P2 |
| 279 | Layer Link Select All | Select all linked layers. | P2 |
| 280 | Layer Export Individual | Export single layer as PNG. | P2 |
| 281 | Layer Export All | Export each layer as separate file. | P2 |
| 282 | Layer Export Visible | Export only visible layers. | P2 |
| 283 | Layer Export Selection | Export selected layers only. | P2 |
| 284 | Layer Export Trimmed | Trim transparent edges on export. | P2 |
| 285 | Layer Export at Resolution | Choose DPI for layer export. | P2 |
| 286 | Layer Export with Bleed | Add bleed to layer export. | P2 |
| 287 | Layer Lock Transparency | Prevent editing transparent areas. | P2 |
| 288 | Layer Lock Position | Prevent movement. | P0 |
| 289 | Layer Lock All | Prevent any edits. | P0 |
| 290 | Layer Lock Indicator | Show lock status in panel. | P0 |
| 291 | Layer Visibility Indicator | Show eye status in panel. | P0 |
| 292 | Layer Opacity Indicator | Show opacity in panel. | P1 |
| 293 | Layer Blend Mode Indicator | Show blend mode in panel. | P2 |
| 294 | Layer Effect Indicator | Show fx icon in panel. | P2 |
| 295 | Layer Mask Indicator | Show mask icon in panel. | P2 |
| 296 | Layer Smart Object Indicator | Show SO icon in panel. | P3 |
| 297 | Layer Group Indicator | Show folder icon in panel. | P1 |
| 298 | Layer Empty Group Cleanup | Remove empty folders. | P2 |
| 299 | Layer Panel Resize | Adjust panel width. | P0 |
| 300 | Layer Panel Collapse | Minimize to icon bar. | P0 |

---

## Category 4: Design Studio — Text & Typography (301–400)

| # | Feature | Description | Priority |
|---|---------|-------------|----------|
| 301 | Text Tool (T) | Click to create text box. | P0 |
| 302 | Point Text | Click once, type freely. | P0 |
| 303 | Area Text | Click and drag for bounded box. | P0 |
| 304 | Text on Path | Type along a drawn path. | P2 |
| 305 | Text on Circle | Circular text arrangement. | P2 |
| 306 | Text on Wave | Wavy text path. | P3 |
| 307 | Text on Custom Path | Any vector path. | P3 |
| 308 | Vertical Text | Characters stacked vertically. | P3 |
| 309 | Font Family Dropdown | Select from installed fonts. | P0 |
| 310 | Font Size Input | Type exact size in pt/px/mm. | P0 |
| 311 | Font Size Slider | Drag to adjust size. | P0 |
| 312 | Font Size Presets | 8, 10, 12, 14, 16, 18, 24, 36, 48, 72. | P0 |
| 313 | Font Size Increase (Ctrl+]) | Increment by 1pt. | P0 |
| 314 | Font Size Decrease (Ctrl+[) | Decrement by 1pt. | P0 |
| 315 | Font Weight Bold (Ctrl+B) | Toggle bold. | P0 |
| 316 | Font Style Italic (Ctrl+I) | Toggle italic. | P0 |
| 317 | Font Underline (Ctrl+U) | Toggle underline. | P0 |
| 318 | Font Strikethrough | Toggle strikethrough. | P1 |
| 319 | Font Color Picker | Choose text color. | P0 |
| 320 | Font Color Eyedropper | Sample color from canvas. | P0 |
| 321 | Font Color Recent | Quick access to last colors. | P0 |
| 322 | Font Color Hex Input | Type hex code directly. | P0 |
| 323 | Font Color RGB Input | Type RGB values. | P0 |
| 324 | Font Color CMYK Input | Type CMYK values. | P1 |
| 325 | Font Color HSL Input | Type HSL values. | P1 |
| 326 | Font Color Gradient | Apply gradient to text. | P1 |
| 327 | Font Color Pattern | Apply pattern to text. | P2 |
| 328 | Text Alignment Left | Left-align paragraph. | P0 |
| 329 | Text Alignment Center | Center-align paragraph. | P0 |
| 330 | Text Alignment Right | Right-align paragraph. | P0 |
| 331 | Text Alignment Justify | Full justification. | P2 |
| 332 | Text Alignment Force Justify | Force last line justify. | P3 |
| 333 | Line Spacing (Leading) | Space between lines. | P1 |
| 334 | Line Spacing Auto | Automatic leading. | P1 |
| 335 | Line Spacing Fixed | Exact value in pt/mm. | P1 |
| 336 | Line Spacing Percentage | % of font size. | P1 |
| 337 | Letter Spacing (Tracking) | Space between characters. | P1 |
| 338 | Letter Spacing Tight | Negative tracking. | P1 |
| 339 | Letter Spacing Loose | Positive tracking. | P1 |
| 340 | Kerning Pair Adjustment | Adjust specific letter pairs. | P3 |
| 341 | Kerning Auto | Automatic pair adjustment. | P3 |
| 342 | Kerning Metrics | Use font metrics. | P3 |
| 343 | Paragraph Spacing | Space between paragraphs. | P1 |
| 344 | Paragraph Indent | First line indent. | P2 |
| 345 | Paragraph Hanging Indent | Hanging indent style. | P3 |
| 346 | Paragraph Left Indent | Entire paragraph indent. | P2 |
| 347 | Paragraph Right Indent | Right side indent. | P2 |
| 348 | Tab Stops | Custom tab positions. | P3 |
| 349 | Tab Leader | Dots/lines before tab. | P3 |
| 350 | Text Columns | Multi-column text flow. | P3 |
| 351 | Text Column Gutter | Space between columns. | P3 |
| 352 | Text Column Balance | Equalize column lengths. | P3 |
| 353 | Text Transform Uppercase | ALL CAPS. | P1 |
| 354 | Text Transform Lowercase | all lowercase. | P1 |
| 355 | Text Transform Title Case | Title Case. | P1 |
| 356 | Text Transform Sentence Case | First letter capital. | P1 |
| 357 | Text Transform Toggle Case | Swap upper/lower. | P2 |
| 358 | Text Bullets | Bullet list formatting. | P2 |
| 359 | Text Numbering | Numbered list. | P2 |
| 360 | Text Bullet Custom | Custom bullet character. | P3 |
| 361 | Text Numbering Custom | Custom number format. | P3 |
| 362 | Text Baseline Shift | Raise/lower selected text. | P2 |
| 363 | Text Baseline Reset | Return to normal. | P2 |
| 364 | Text Subscript | Lower and smaller. | P2 |
| 365 | Text Superscript | Raise and smaller. | P2 |
| 366 | Text Fractions | Auto-format 1/2, 3/4. | P3 |
| 367 | Text Ligatures | Combine character pairs. | P3 |
| 368 | Text Small Caps | Small capital letters. | P3 |
| 369 | Text Old Style Figures | Non-lining numbers. | P3 |
| 370 | Text Proportional Figures | Varying width numbers. | P3 |
| 371 | Text Tabular Figures | Fixed width numbers. | P3 |
| 372 | Text Anti-Aliasing | Smooth edge rendering. | P1 |
| 373 | Text Anti-Aliasing None | Sharp edges. | P1 |
| 374 | Text Anti-Aliasing Crisp | Subpixel rendering. | P1 |
| 375 | Text Anti-Aliasing Strong | Heavier smoothing. | P1 |
| 376 | Text Anti-Aliasing Smooth | Standard smoothing. | P1 |
| 377 | Text Rendering Intent | Print-optimized rendering. | P2 |
| 378 | Text Hinting | Font hinting for clarity. | P2 |
| 379 | Text Auto-Fit to Box | Shrink text to fit container. | P1 |
| 380 | Text Auto-Fit Box to Text | Expand box to fit content. | P1 |
| 381 | Text Overflow Indicator | Show when text exceeds box. | P1 |
| 382 | Text Overflow Hidden | Clip overflowing text. | P1 |
| 383 | Text Overflow Scroll | Scroll within text box. | P2 |
| 384 | Text Overflow Ellipsis | Show ... when overflow. | P2 |
| 385 | Text Spell Check | Highlight misspelled words. | P2 |
| 386 | Text Spell Check Language | English, Hindi, etc. | P3 |
| 387 | Text Spell Check Ignore | Ignore specific words. | P3 |
| 388 | Text Spell Check Add to Dictionary | Add custom words. | P3 |
| 389 | Text Find | Search within text. | P1 |
| 390 | Text Find and Replace | Global search/replace. | P1 |
| 391 | Text Find Next | Jump to next occurrence. | P1 |
| 392 | Text Find Previous | Jump to previous occurrence. | P1 |
| 393 | Text Replace All | Replace all occurrences. | P1 |
| 394 | Text Replace One by One | Confirm each replacement. | P1 |
| 395 | Text Styles Panel | Save and apply text presets. | P1 |
| 396 | Text Style Save | Save current formatting as style. | P1 |
| 397 | Text Style Load | Apply saved style. | P1 |
| 398 | Text Style Update | Modify existing style. | P1 |
| 399 | Text Style Delete | Remove saved style. | P1 |
| 400 | Text Style Override | Temporarily deviate from style. | P2 |

---

## Category 5: Design Studio — Shapes & Graphics (401–500)

| # | Feature | Description | Priority |
|---|---------|-------------|----------|
| 401 | Rectangle Tool | Draw rectangles. | P0 |
| 402 | Rounded Rectangle Tool | Rectangle with corner radius. | P0 |
| 403 | Rounded Rectangle Corner Radius | Adjust all corners. | P0 |
| 404 | Rounded Rectangle Individual Corners | Different radius per corner. | P1 |
| 405 | Rounded Rectangle Corner Radius Input | Type exact value. | P0 |
| 406 | Ellipse Tool | Draw circles and ovals. | P0 |
| 407 | Ellipse Circle Constraint | Hold Shift for perfect circle. | P0 |
| 408 | Polygon Tool | Draw multi-sided shapes. | P1 |
| 409 | Polygon Sides Input | 3 to 100 sides. | P1 |
| 410 | Star Tool | Draw star shapes. | P1 |
| 411 | Star Points Input | Number of points. | P1 |
| 412 | Star Inner Radius | Adjust inner point depth. | P1 |
| 413 | Star Outer Radius | Adjust outer point length. | P1 |
| 414 | Line Tool | Draw straight lines. | P0 |
| 415 | Line Stroke Width | Thickness of line. | P0 |
| 416 | Line Stroke Color | Color of line. | P0 |
| 417 | Line Stroke Cap | Butt, round, square ends. | P1 |
| 418 | Line Stroke Join | Miter, round, bevel corners. | P1 |
| 419 | Line Stroke Miter Limit | Miter join threshold. | P2 |
| 420 | Line Stroke Dashed | Dashed pattern. | P1 |
| 421 | Line Stroke Dotted | Dotted pattern. | P1 |
| 422 | Line Stroke Dash Pattern Custom | Define custom dash/gap. | P2 |
| 423 | Line Stroke Arrowhead Start | Arrow at beginning. | P1 |
| 424 | Line Stroke Arrowhead End | Arrow at end. | P1 |
| 425 | Line Stroke Arrowhead Both | Arrows at both ends. | P1 |
| 426 | Line Stroke Arrowhead Style | Different arrow shapes. | P2 |
| 427 | Line Stroke Arrowhead Size | Scale arrowhead. | P1 |
| 428 | Arrow Tool | Pre-made arrow shape. | P1 |
| 429 | Arrow Style Presets | Different arrow designs. | P2 |
| 430 | Arrow Bend | Curved arrow path. | P3 |
| 431 | Connector Tool | Snap-to-object connector. | P3 |
| 432 | Connector Style | Straight, elbow, curved. | P3 |
| 433 | Connector Anchor Points | Snap to object edges. | P3 |
| 434 | Connector Routing | Auto-route around objects. | P3 |
| 435 | Shape Fill Color | Solid color fill. | P0 |
| 436 | Shape Fill Gradient | Linear gradient fill. | P0 |
| 437 | Shape Fill Gradient Linear | Standard linear. | P0 |
| 438 | Shape Fill Gradient Radial | Circular gradient. | P1 |
| 439 | Shape Fill Gradient Angular | Sweep gradient. | P2 |
| 440 | Shape Fill Gradient Diamond | Diamond gradient. | P3 |
| 441 | Shape Fill Gradient Reflected | Mirror gradient. | P3 |
| 442 | Shape Fill Gradient Angle Input | Type exact gradient angle. | P1 |
| 443 | Shape Fill Gradient Position Input | Type exact gradient position. | P1 |
| 444 | Shape Fill Gradient Color Stops | Add/remove color stops. | P0 |
| 445 | Shape Fill Gradient Color Stop Position | Drag to adjust. | P0 |
| 446 | Shape Fill Gradient Color Stop Color | Change stop color. | P0 |
| 447 | Shape Fill Gradient Color Stop Opacity | Adjust stop opacity. | P1 |
| 448 | Shape Fill Gradient Midpoint | Adjust color transition point. | P1 |
| 449 | Shape Fill Gradient Reverse | Flip gradient direction. | P1 |
| 450 | Shape Fill Pattern | Repeating pattern fill. | P2 |
| 451 | Shape Fill Pattern Scale | Resize pattern tiles. | P2 |
| 452 | Shape Fill Pattern Rotation | Rotate pattern. | P2 |
| 453 | Shape Fill Pattern Offset | Move pattern within shape. | P2 |
| 454 | Shape Fill Pattern Custom Upload | Upload own pattern. | P2 |
| 455 | Shape Fill Pattern Library | Built-in patterns. | P2 |
| 456 | Shape Fill None | No fill (transparent). | P0 |
| 457 | Shape Stroke Color | Border color. | P0 |
| 458 | Shape Stroke Width | Border thickness. | P0 |
| 459 | Shape Stroke Position | Inside, center, outside. | P1 |
| 460 | Shape Stroke Cap | Line end style. | P1 |
| 461 | Shape Stroke Join | Corner style. | P1 |
| 462 | Shape Stroke Miter Limit | Miter threshold. | P2 |
| 463 | Shape Stroke Dashed | Dash pattern. | P1 |
| 464 | Shape Stroke Dotted | Dot pattern. | P1 |
| 465 | Shape Stroke Gradient | Gradient border. | P2 |
| 466 | Shape Stroke Pattern | Pattern border. | P3 |
| 467 | Shape Stroke None | No border. | P0 |
| 468 | Shape Opacity | Overall transparency. | P0 |
| 469 | Shape Blend Mode | Multiply, Screen, etc. | P2 |
| 470 | Shape Drop Shadow | Shadow effect. | P1 |
| 471 | Shape Inner Shadow | Inner shadow effect. | P2 |
| 472 | Shape Outer Glow | Outer glow effect. | P2 |
| 473 | Shape Inner Glow | Inner glow effect. | P2 |
| 474 | Shape Bevel | Bevel effect. | P3 |
| 475 | Shape Emboss | Emboss effect. | P3 |
| 476 | Shape Satin | Satin effect. | P3 |
| 477 | Shape Color Overlay | Tint overlay. | P2 |
| 478 | Shape Gradient Overlay | Gradient tint. | P2 |
| 479 | Shape Pattern Overlay | Pattern tint. | P3 |
| 480 | Shape Effects Panel | Manage all effects. | P2 |
| 481 | Shape Effects Preset Save | Save effect combo. | P2 |
| 482 | Shape Effects Preset Load | Apply saved combo. | P2 |
| 483 | Shape Effects Preset Delete | Remove saved combo. | P2 |
| 484 | Shape Effects Copy | Copy effects from shape. | P2 |
| 485 | Shape Effects Paste | Apply copied effects. | P2 |
| 486 | Shape Effects Clear | Remove all effects. | P2 |
| 487 | Shape Effects Global Light | Consistent lighting. | P3 |
| 488 | Shape Effects Scale with Object | Scale effects proportionally. | P2 |
| 489 | Shape Convert to Path | Convert basic shape to editable path. | P2 |
| 490 | Shape Simplify | Reduce path complexity. | P2 |
| 491 | Shape Smooth | Round sharp corners. | P2 |
| 492 | Shape Offset Path | Create inset/outset. | P2 |
| 493 | Shape Expand Appearance | Bake effects into path. | P2 |
| 494 | Shape Merge | Combine multiple shapes. | P2 |
| 495 | Shape Subtract Front | Cut front from back. | P2 |
| 496 | Shape Intersect | Keep overlap. | P2 |
| 497 | Shape Exclude | Keep non-overlap. | P2 |
| 498 | Shape Divide | Split at intersections. | P3 |
| 499 | Shape Trim | Remove overlapping parts. | P3 |
| 500 | Shape Crop | Use one shape to crop another. | P3 |

---

## Category 6: Design Studio — Image Handling (501–600)

| # | Feature | Description | Priority |
|---|---------|-------------|----------|
| 501 | Image Place (File > Place) | Import image into project. | P0 |
| 502 | Image Drag-and-Drop Import | Drag image file onto canvas. | P0 |
| 503 | Image Paste from Clipboard | Paste image from clipboard. | P0 |
| 504 | Image Copy to Clipboard | Copy image to clipboard. | P0 |
| 505 | Image Supported Formats | JPG, PNG, TIFF, BMP, WEBP, GIF. | P0 |
| 506 | Image SVG Import | Import vector as image. | P1 |
| 507 | Image PSD Import (Flattened) | Import Photoshop file. | P2 |
| 508 | Image AI Import (Flattened) | Import Illustrator file. | P2 |
| 509 | Image PDF Import (as Raster) | Import PDF pages. | P2 |
| 510 | Image HEIC/HEIF Support | iPhone photo format. | P2 |
| 511 | Image RAW Support | CR2, NEF, ARW, DNG. | P3 |
| 512 | Image ICO Import | Windows icon format. | P3 |
| 513 | Image Place Linked | Link to external file (non-embedded). | P2 |
| 514 | Image Place Embedded | Embed in project file. | P0 |
| 515 | Image Relink | Reconnect broken link. | P2 |
| 516 | Image Relink All | Batch relink broken links. | P2 |
| 517 | Image Replace | Swap with different file. | P1 |
| 518 | Image Replace and Keep Transform | Maintain size/position. | P1 |
| 519 | Image Resolution Display | Show DPI of placed image. | P0 |
| 520 | Image Effective Resolution | Show scaled resolution. | P0 |
| 521 | Image Resolution Warning | Warn if below print threshold. | P0 |
| 522 | Image Upscale Suggestion | Suggest upscaling if too small. | P1 |
| 523 | Image Crop Tool | Crop with handles. | P0 |
| 524 | Image Crop with Aspect Ratio | Lock ratio while cropping. | P0 |
| 525 | Image Crop Presets | 1:1, 4:3, 16:9, etc. | P1 |
| 526 | Image Crop Custom Ratio | Enter own ratio. | P1 |
| 527 | Image Crop to Selection | Crop to selected area. | P1 |
| 528 | Image Crop to Content | Auto-crop to non-transparent edges. | P1 |
| 529 | Image Crop to Shape | Crop to circle, star, etc. | P2 |
| 530 | Image Crop to Path | Crop to custom vector path. | P2 |
| 531 | Image Crop to Bleed | Crop to bleed boundary. | P1 |
| 532 | Image Crop to Safe Zone | Crop to safe boundary. | P1 |
| 533 | Image Crop to Page | Crop to artboard size. | P1 |
| 534 | Image Crop Apply | Confirm crop. | P0 |
| 535 | Image Crop Cancel | Discard crop. | P0 |
| 536 | Image Crop Reset | Reset to original. | P0 |
| 537 | Image Crop Preview | Show result before applying. | P0 |
| 538 | Image Crop Non-Destructive | Re-adjustable crop. | P2 |
| 539 | Image Crop Mask | Use mask for crop. | P2 |
| 540 | Image Crop Clipping Path | Use path for crop. | P2 |
| 541 | Image Brightness Adjustment | Adjust overall brightness. | P1 |
| 542 | Image Contrast Adjustment | Adjust tonal range. | P1 |
| 543 | Image Saturation Adjustment | Adjust color intensity. | P1 |
| 544 | Image Hue Rotation | Shift color spectrum. | P1 |
| 545 | Image Vibrance Adjustment | Smart saturation boost. | P2 |
| 546 | Image Exposure Adjustment | Adjust exposure. | P2 |
| 547 | Image Highlights Adjustment | Adjust bright areas. | P2 |
| 548 | Image Shadows Adjustment | Adjust dark areas. | P2 |
| 549 | Image Whites Adjustment | Adjust white point. | P2 |
| 550 | Image Blacks Adjustment | Adjust black point. | P2 |
| 551 | Image Levels Adjustment | Histogram control. | P2 |
| 552 | Image Curves Adjustment | Bezier curve control. | P2 |
| 553 | Image Color Balance | Shadows/midtones/highlights. | P2 |
| 554 | Image Selective Color | Adjust specific color ranges. | P2 |
| 555 | Image Channel Mixer | Adjust RGB channels. | P3 |
| 556 | Image Photo Filter | Warm/cool filters. | P2 |
| 557 | Image Invert | Negative effect. | P2 |
| 558 | Image Posterize | Reduce color levels. | P3 |
| 559 | Image Threshold | Black/white from midpoint. | P3 |
| 560 | Image Gradient Map | Map tones to gradient. | P3 |
| 561 | Image Black and White | Convert to grayscale. | P1 |
| 562 | Image Sepia | Vintage brown tone. | P2 |
| 563 | Image Duotone | Two-color effect. | P3 |
| 564 | Image Tritone | Three-color effect. | P3 |
| 565 | Image Quadtone | Four-color effect. | P3 |
| 566 | Image Sharpen | Unsharp mask. | P1 |
| 567 | Image Sharpen Amount | Strength of sharpening. | P1 |
| 568 | Image Sharpen Radius | Pixel radius. | P1 |
| 569 | Image Sharpen Threshold | Edge detection threshold. | P1 |
| 570 | Image Blur | Gaussian blur. | P1 |
| 571 | Image Blur Radius | Blur strength. | P1 |
| 572 | Image Motion Blur | Directional blur. | P3 |
| 573 | Image Radial Blur | Zoom/spin blur. | P3 |
| 574 | Image Surface Blur | Edge-preserving blur. | P3 |
| 575 | Image Smart Blur | Selective blur. | P3 |
| 576 | Image Average Blur | Box blur. | P3 |
| 577 | Image Noise Reduction | Remove noise. | P2 |
| 578 | Image Noise Add | Add film grain. | P3 |
| 579 | Image Dust and Scratches | Remove defects. | P3 |
| 580 | Image Despeckle | Remove speckles. | P3 |
| 581 | Image Median Filter | Noise reduction. | P3 |
| 582 | Image High Pass | Edge enhancement. | P3 |
| 583 | Image Maximum Filter | Expand bright areas. | P3 |
| 584 | Image Minimum Filter | Shrink bright areas. | P3 |
| 585 | Image Custom Filter | User-defined kernel. | P3 |
| 586 | Image Filter Preset Save | Save filter settings. | P2 |
| 587 | Image Filter Preset Load | Apply saved filter. | P2 |
| 588 | Image Filter Preset Delete | Remove saved filter. | P2 |
| 589 | Image Filter Reset | Reset to original. | P0 |
| 590 | Image Filter Before/After | Split view comparison. | P1 |
| 591 | Image Filter History | List of applied filters. | P2 |
| 592 | Image Filter Non-Destructive | Re-adjustable filters. | P2 |
| 593 | Image Filter Mask | Apply filter to portion only. | P3 |
| 594 | Image Filter Smart Object | Filter as editable layer. | P3 |
| 595 | Image Resize | Change pixel dimensions. | P0 |
| 596 | Image Resize with Resampling | Add/remove pixels. | P0 |
| 597 | Image Resize without Resampling | Change DPI only. | P0 |
| 598 | Image Resize Constrain Proportions | Lock aspect ratio. | P0 |
| 599 | Image Resize Resolution Input | Set DPI. | P0 |
| 600 | Image Resize Interpolation | Nearest, bilinear, bicubic, Lanczos. | P1 |

---

## Category 7: Design Studio — Advanced Image (601–700)

| # | Feature | Description | Priority |
|---|---------|-------------|----------|
| 601 | Image Content-Aware Scale | Scale while preserving content. | P3 |
| 602 | Image Content-Aware Fill | Remove objects intelligently. | P3 |
| 603 | Image Healing Brush | Content-aware spot repair. | P3 |
| 604 | Image Spot Healing Brush | One-click spot repair. | P3 |
| 605 | Image Clone Stamp | Copy pixels from area to area. | P3 |
| 606 | Image Clone Stamp Source | Set clone source point. | P3 |
| 607 | Image Clone Stamp Aligned | Maintain offset. | P3 |
| 608 | Image Clone Stamp Non-Aligned | Reset offset each time. | P3 |
| 609 | Image Clone Stamp Brush Size | Adjust brush. | P3 |
| 610 | Image Clone Stamp Brush Hardness | Soft/hard edge. | P3 |
| 611 | Image Clone Stamp Brush Opacity | Partial clone. | P3 |
| 612 | Image Clone Stamp Brush Flow | Build-up rate. | P3 |
| 613 | Image Dodge Tool | Lighten areas. | P3 |
| 614 | Image Dodge Tool Range | Shadows, midtones, highlights. | P3 |
| 615 | Image Dodge Tool Exposure | Strength. | P3 |
| 616 | Image Burn Tool | Darken areas. | P3 |
| 617 | Image Burn Tool Range | Shadows, midtones, highlights. | P3 |
| 618 | Image Burn Tool Exposure | Strength. | P3 |
| 619 | Image Sponge Tool | Saturate/desaturate. | P3 |
| 620 | Image Sponge Tool Mode | Saturate or desaturate. | P3 |
| 621 | Image Sponge Tool Flow | Strength. | P3 |
| 622 | Image Red-Eye Removal | Fix flash red-eye. | P3 |
| 623 | Image Teeth Whitening | Brighten teeth. | P3 |
| 624 | Image Skin Smoothing | Portrait retouching. | P3 |
| 625 | Image Blemish Removal | Remove spots. | P3 |
| 626 | Image Liquify | Push/pull pixels. | P3 |
| 627 | Image Liquify Forward Warp | Push pixels. | P3 |
| 628 | Image Liquify Reconstruct | Undo liquify. | P3 |
| 629 | Image Liquify Freeze Mask | Protect areas. | P3 |
| 630 | Image Liquify Thaw Mask | Unprotect areas. | P3 |
| 631 | Image Puppet Warp | Mesh-based deformation. | P3 |
| 632 | Image Perspective Warp | Correct perspective. | P3 |
| 633 | Image Vanishing Point | Perspective-aware editing. | P3 |
| 634 | Image Lens Correction | Fix barrel/pincushion distortion. | P3 |
| 635 | Image Chromatic Aberration Fix | Fix color fringing. | P3 |
| 636 | Image Vignette Removal | Remove edge darkening. | P3 |
| 637 | Image Vignette Addition | Add edge darkening. | P2 |
| 638 | Image Lens Flare | Add simulated flare. | P3 |
| 639 | Image Lighting Effects | Add spotlights. | P3 |
| 640 | Image Texture Overlay | Add surface texture. | P3 |
| 641 | Image Film Grain | Add grain. | P3 |
| 642 | Image Halftone Pattern | Comic dots. | P3 |
| 643 | Image Crosshatch | Sketch effect. | P3 |
| 644 | Image Watercolor | Artistic filter. | P3 |
| 645 | Image Oil Paint | Oil painting effect. | P3 |
| 646 | Image Dry Brush | Brush stroke effect. | P3 |
| 647 | Image Cutout | Posterized effect. | P3 |
| 648 | Image Neon Glow | Neon outline effect. | P3 |
| 649 | Image Edge Detection | Show edges only. | P3 |
| 650 | Image Find Edges | Sobel edge detection. | P3 |
| 651 | Image Trace/Vectorize | Convert raster to vector. | P3 |
| 652 | Image Trace Color Modes | Black/white, grayscale, color. | P3 |
| 653 | Image Trace Threshold | Sensitivity adjustment. | P3 |
| 654 | Image Trace Corner Fidelity | Sharp vs rounded corners. | P3 |
| 655 | Image Trace Noise Reduction | Ignore small details. | P3 |
| 656 | Image Trace Path Simplify | Reduce anchor points. | P3 |
| 657 | Image Color Replacement | Replace one color with another. | P2 |
| 658 | Image Color Replacement Tolerance | Color matching range. | P2 |
| 659 | Image Color Replacement Preserve Luminance | Maintain brightness. | P2 |
| 660 | Image Match Color | Match color to another image. | P3 |
| 661 | Image Replace Color | Global color swap. | P2 |
| 662 | Image Select Color Range | Select by color. | P2 |
| 663 | Image Select Color Range Fuzziness | Selection tolerance. | P2 |
| 664 | Image Select Color Range Invert | Select opposite. | P2 |
| 665 | Image Select Focus Area | Select in-focus regions. | P3 |
| 666 | Image Select Subject | Auto-select main subject. | P3 |
| 667 | Image Select Sky | Auto-select sky. | P3 |
| 668 | Image Remove Background | Auto-detect and remove background. | P3 |
| 669 | Image Remove Background Refine | Fine-tune edges. | P3 |
| 670 | Image Remove Background Color | Specify background color to remove. | P3 |
| 671 | Image Transparent Background | Export with alpha. | P0 |
| 672 | Image White Background | Fill transparent with white. | P0 |
| 673 | Image Black Background | Fill transparent with black. | P2 |
| 674 | Image Color Background | Fill with custom color. | P2 |
| 675 | Image Gradient Background | Fill with gradient. | P2 |
| 676 | Image Pattern Background | Fill with pattern. | P2 |
| 677 | Image Background Extend | Expand canvas with content-aware fill. | P3 |
| 678 | Image Canvas Size | Change canvas dimensions. | P0 |
| 679 | Image Canvas Size Anchor | Set expansion direction. | P0 |
| 680 | Image Canvas Size Relative | Add/subtract from current. | P0 |
| 681 | Image Canvas Size Absolute | Set exact dimensions. | P0 |
| 682 | Image Canvas Size Background Fill | Fill new area with color. | P0 |
| 683 | Image Trim | Remove transparent edges. | P1 |
| 684 | Image Trim Based on Color | Remove specific color edges. | P2 |
| 685 | Image Trim Top/Bottom/Left/Right | Trim specific sides. | P2 |
| 686 | Image Reveal All | Show all pixels including hidden. | P2 |
| 687 | Image Flatten Layers | Merge all to single layer. | P1 |
| 688 | Image Merge Visible | Merge visible layers only. | P1 |
| 689 | Image Merge Down | Merge with layer below. | P1 |
| 690 | Image Merge Selected | Merge selected layers. | P1 |
| 691 | Image Merge Copy | Merge copy to new layer. | P2 |
| 692 | Image Stamp Visible | Copy merged to new layer. | P2 |
| 693 | Image Duplicate Layer | Clone current layer. | P0 |
| 694 | Image New Layer | Create blank layer. | P0 |
| 695 | Image New Layer from Selection | Create from selected area. | P1 |
| 696 | Image New Layer from Copy | Create from copied content. | P0 |
| 697 | Image New Layer from Cut | Create from cut content. | P0 |
| 698 | Image Layer via Copy | Copy to new layer. | P0 |
| 699 | Image Layer via Cut | Cut to new layer. | P0 |
| 700 | Image Layer from Background | Convert background to layer. | P1 |

---

## Category 8: Design Studio — Advanced Tools (701–800)

| # | Feature | Description | Priority |
|---|---------|-------------|----------|
| 701 | Pen Tool (Bezier) | Create precise vector paths. | P2 |
| 702 | Pen Tool Add Anchor Point | Add point to path. | P2 |
| 703 | Pen Tool Delete Anchor Point | Remove point from path. | P2 |
| 704 | Pen Tool Convert Anchor Point | Toggle smooth/corner. | P2 |
| 705 | Pen Tool Direct Select | Move individual points. | P2 |
| 706 | Pen Tool Path Close | Close open path. | P2 |
| 707 | Pen Tool Path Open | Break closed path. | P2 |
| 708 | Pen Tool Path Join | Connect two paths. | P2 |
| 709 | Pen Tool Path Average | Average position of points. | P3 |
| 710 | Pen Tool Path Simplify | Reduce points. | P2 |
| 711 | Pen Tool Path Smooth | Round corners. | P2 |
| 712 | Pen Tool Path Offset | Create parallel path. | P2 |
| 713 | Pen Tool Path Outline Stroke | Convert stroke to fill. | P2 |
| 714 | Pen Tool Path Reverse Direction | Flip path direction. | P3 |
| 715 | Pen Tool Path Add Arrowheads | Add arrows to path. | P2 |
| 716 | Pen Tool Path Remove Arrowheads | Remove arrows. | P2 |
| 717 | Pen Tool Path Dash Pattern | Apply dash to stroke. | P2 |
| 718 | Pen Tool Path Round Corners | Round all corners. | P2 |
| 719 | Pen Tool Path Scribble Effect | Hand-drawn look. | P3 |
| 720 | Pen Tool Path Roughen Effect | Jagged edges. | P3 |
| 721 | Pen Tool Path Zig Zag | Wavy path. | P3 |
| 722 | Pen Tool Path Twist | Spiral twist. | P3 |
| 723 | Pen Tool Path Pucker & Bloat | Inward/outward bulge. | P3 |
| 724 | Pen Tool Path Tweak | Random displacement. | P3 |
| 725 | Pen Tool Path Transform Each | Individual transformation. | P3 |
| 726 | Pen Tool Path Blend | Create intermediate paths. | P3 |
| 727 | Pen Tool Path Blend Steps | Number of intermediate paths. | P3 |
| 728 | Pen Tool Path Blend Options | Spacing and orientation. | P3 |
| 729 | Pen Tool Path Blend Release | Separate blended paths. | P3 |
| 730 | Pen Tool Path Expand | Convert to editable paths. | P3 |
| 731 | Pen Tool Path Compound | Combine multiple paths. | P3 |
| 732 | Pen Tool Path Release Compound | Break apart. | P3 |
| 733 | Pen Tool Path Clipping Mask | Use as mask. | P3 |
| 734 | Pen Tool Path Release Clipping | Remove mask. | P3 |
| 735 | Pen Tool Path Make Guide | Convert to guide line. | P2 |
| 736 | Pen Tool Path Release Guide | Convert back to path. | P2 |
| 737 | Pen Tool Path Average Join | Smooth connection. | P3 |
| 738 | Pen Tool Path Corner Join | Sharp connection. | P3 |
| 739 | Pen Tool Path Bevel Join | Beveled connection. | P3 |
| 740 | Pen Tool Path Round Join | Rounded connection. | P3 |
| 741 | Pen Tool Path Miter Join | Mitered connection. | P3 |
| 742 | Pen Tool Path Miter Limit | Miter threshold. | P3 |
| 743 | Pen Tool Path Cap Butt | Flat end cap. | P2 |
| 744 | Pen Tool Path Cap Round | Rounded end cap. | P2 |
| 745 | Pen Tool Path Cap Square | Square end cap. | P2 |
| 746 | Pen Tool Path Width Profile | Variable stroke width. | P3 |
| 747 | Pen Tool Path Width Tool | Drag to change width. | P3 |
| 748 | Pen Tool Path Width Preset | Standard profiles. | P3 |
| 749 | Pen Tool Path Width Reset | Uniform width. | P3 |
| 750 | Pen Tool Path Variable Width | Width along path. | P3 |
| 751 | Shape Builder Tool | Merge shapes interactively. | P3 |
| 752 | Shape Builder Merge | Combine shapes. | P3 |
| 753 | Shape Builder Delete | Remove shape area. | P3 |
| 754 | Shape Builder Intersect | Keep overlap. | P3 |
| 755 | Shape Builder Exclude | Remove overlap. | P3 |
| 756 | Shape Builder Divide | Split at intersections. | P3 |
| 757 | Shape Builder Trim | Remove overlapping. | P3 |
| 758 | Shape Builder Combine | Unite shapes. | P3 |
| 759 | Shape Builder Minus Front | Cut front from back. | P3 |
| 760 | Shape Builder Crop | Use as crop. | P3 |
| 761 | Eraser Tool | Remove parts of objects. | P2 |
| 762 | Eraser Tool Size | Adjust brush size. | P2 |
| 763 | Eraser Tool Hardness | Soft/hard edge. | P2 |
| 764 | Eraser Tool Opacity | Partial erase. | P2 |
| 765 | Eraser Tool Mode | Brush, Pencil, Block. | P2 |
| 766 | Scissors Tool | Cut paths at point. | P2 |
| 767 | Knife Tool | Cut through objects. | P2 |
| 768 | Reflect Tool | Mirror objects interactively. | P2 |
| 769 | Reflect Tool Axis | Set mirror axis. | P2 |
| 770 | Reflect Tool Copy | Mirror and keep original. | P2 |
| 771 | Rotate Tool | Rotate around custom point. | P2 |
| 772 | Rotate Tool Copy | Rotate and duplicate. | P2 |
| 773 | Scale Tool | Scale from custom point. | P2 |
| 774 | Scale Tool Copy | Scale and duplicate. | P2 |
| 775 | Shear Tool | Skew objects. | P2 |
| 776 | Shear Tool Copy | Skew and duplicate. | P2 |
| 777 | Reshape Tool | Push/pull path segments. | P3 |
| 778 | Width Tool | Change stroke width. | P3 |
| 779 | Warp Tool | Freeform deformation. | P3 |
| 780 | Twirl Tool | Swirl deformation. | P3 |
| 781 | Pucker Tool | Pinch deformation. | P3 |
| 782 | Bloat Tool | Bulge deformation. | P3 |
| 783 | Scallop Tool | Scalloped edges. | P3 |
| 784 | Crystallize Tool | Crystalline deformation. | P3 |
| 785 | Wrinkle Tool | Wrinkle deformation. | P3 |
| 786 | Free Transform Tool | Scale/rotate/skew in one. | P0 |
| 787 | Free Transform Distort | Corner distortion. | P2 |
| 788 | Free Transform Perspective | Perspective distortion. | P2 |
| 789 | Free Transform Warp | Mesh warp. | P2 |
| 790 | Free Transform Constraint | Maintain proportions. | P0 |
| 791 | Free Transform From Center | Transform from center. | P0 |
| 792 | Free Transform Reference Point | Set transform origin. | P1 |
| 793 | Transform Each | Individual transform on multiple. | P2 |
| 794 | Transform Again | Repeat last transform. | P1 |
| 795 | Transform Again Individually | Repeat on each selected. | P2 |
| 796 | Transform Sequence | Record transform steps. | P3 |
| 797 | Transform Sequence Playback | Replay recorded steps. | P3 |
| 798 | Transform Sequence Save | Save as preset. | P3 |
| 799 | Transform Sequence Load | Apply saved sequence. | P3 |
| 800 | Transform Sequence Delete | Remove saved sequence. | P3 |

---

## Category 9: Design Studio — Templates (801–900)

| # | Feature | Description | Priority |
|---|---------|-------------|----------|
| 801 | Blank Project Template | Empty canvas. | P0 |
| 802 | A4 Portrait Template | 210×297mm. | P0 |
| 803 | A4 Landscape Template | 297×210mm. | P0 |
| 804 | A3 Portrait Template | 297×420mm. | P0 |
| 805 | A3 Landscape Template | 420×297mm. | P0 |
| 806 | A5 Portrait Template | 148×210mm. | P1 |
| 807 | A5 Landscape Template | 210×148mm. | P1 |
| 808 | A2 Portrait Template | 420×594mm. | P1 |
| 809 | A2 Landscape Template | 594×420mm. | P1 |
| 810 | Letter Size Template | 8.5×11 inch. | P1 |
| 811 | Legal Size Template | 8.5×14 inch. | P1 |
| 812 | Tabloid Size Template | 11×17 inch. | P1 |
| 813 | 13×19 Inch Template | 330×483mm. | P0 |
| 814 | 11×17 Inch Template | 279×432mm. | P1 |
| 815 | 12×18 Inch Template | 305×457mm. | P1 |
| 816 | 16×20 Inch Template | 406×508mm. | P1 |
| 817 | 20×24 Inch Template | 508×610mm. | P1 |
| 818 | 24×36 Inch Template | 610×914mm. | P1 |
| 819 | Roll 24 Inch Template | 610mm width, infinite length. | P0 |
| 820 | Roll 36 Inch Template | 914mm width, infinite length. | P1 |
| 821 | Roll 44 Inch Template | 1118mm width, infinite length. | P1 |
| 822 | Roll 60 Inch Template | 1524mm width, infinite length. | P2 |
| 823 | Roll 64 Inch Template | 1626mm width, infinite length. | P2 |
| 824 | Custom Size Template | User-defined dimensions. | P0 |
| 825 | Custom Size Save | Save as named template. | P1 |
| 826 | Custom Size Load | Apply saved custom size. | P1 |
| 827 | Custom Size Delete | Remove saved template. | P1 |
| 828 | Custom Size Import | Import from file. | P2 |
| 829 | Custom Size Export | Export to file. | P2 |
| 830 | Keychain Round 30mm Template | 30mm diameter. | P0 |
| 831 | Keychain Round 40mm Template | 40mm diameter. | P0 |
| 832 | Keychain Round 50mm Template | 50mm diameter. | P0 |
| 833 | Keychain Round 60mm Template | 60mm diameter. | P0 |
| 834 | Keychain Square 30mm Template | 30×30mm. | P0 |
| 835 | Keychain Square 40mm Template | 40×40mm. | P0 |
| 836 | Keychain Square 50mm Template | 50×50mm. | P0 |
| 837 | Keychain Square 60mm Template | 60×60mm. | P0 |
| 838 | Keychain Heart 40mm Template | 40mm heart. | P0 |
| 839 | Keychain Heart 50mm Template | 50mm heart. | P0 |
| 840 | Keychain Heart 60mm Template | 60mm heart. | P0 |
| 841 | Keychain Star 40mm Template | 40mm star. | P0 |
| 842 | Keychain Star 50mm Template | 50mm star. | P0 |
| 843 | Keychain Star 60mm Template | 60mm star. | P0 |
| 844 | Keychain Rectangle 30×50mm Template | Oblong keychain. | P0 |
| 845 | Keychain Rectangle 40×60mm Template | Oblong keychain. | P0 |
| 846 | Keychain Oval 30×40mm Template | Oval keychain. | P0 |
| 847 | Keychain Oval 40×50mm Template | Oval keychain. | P0 |
| 848 | Keychain Paw Print 40mm Template | Paw shape. | P0 |
| 849 | Keychain Paw Print 50mm Template | Paw shape. | P0 |
| 850 | Keychain Custom Shape Template | User-defined outline. | P1 |
| 851 | Car Hanger Round 70mm Template | 70mm round hanger. | P0 |
| 852 | Car Hanger Round 80mm Template | 80mm round hanger. | P0 |
| 853 | Car Hanger Round 90mm Template | 90mm round hanger. | P0 |
| 854 | Car Hanger Oval 60×80mm Template | Oval hanger. | P0 |
| 855 | Car Hanger Oval 70×90mm Template | Oval hanger. | P0 |
| 856 | Car Hanger Oval 80×100mm Template | Oval hanger. | P0 |
| 857 | Car Hanger Rectangle 60×80mm Template | Rectangular hanger. | P0 |
| 858 | Car Hanger Rectangle 70×90mm Template | Rectangular hanger. | P0 |
| 859 | Car Hanger Rectangle 80×100mm Template | Rectangular hanger. | P0 |
| 860 | Car Hanger Custom Shape Template | User-defined outline. | P1 |
| 861 | Mug Wrap Standard Template | Standard mug wrap dimensions. | P1 |
| 862 | Mug Wrap Latte Template | Large mug wrap. | P1 |
| 863 | Mug Wrap Espresso Template | Small mug wrap. | P1 |
| 864 | Mug Wrap Travel Template | Travel mug wrap. | P1 |
| 865 | T-Shirt Front Template | Front print area. | P1 |
| 866 | T-Shirt Back Template | Back print area. | P1 |
| 867 | T-Shirt Left Sleeve Template | Sleeve print area. | P1 |
| 868 | T-Shirt Right Sleeve Template | Sleeve print area. | P1 |
| 869 | T-Shirt Pocket Template | Pocket print area. | P1 |
| 870 | Coaster Round 90mm Template | Round coaster. | P1 |
| 871 | Coaster Round 100mm Template | Round coaster. | P1 |
| 872 | Coaster Square 90mm Template | Square coaster. | P1 |
| 873 | Coaster Square 100mm Template | Square coaster. | P1 |
| 874 | Coaster Hexagon 90mm Template | Hexagon coaster. | P1 |
| 875 | Coaster Hexagon 100mm Template | Hexagon coaster. | P1 |
| 876 | Photo Frame 4×6 Inch Template | Standard photo frame. | P1 |
| 877 | Photo Frame 5×7 Inch Template | Standard photo frame. | P1 |
| 878 | Photo Frame 8×10 Inch Template | Standard photo frame. | P1 |
| 879 | Photo Frame A4 Template | A4 frame size. | P1 |
| 880 | Photo Frame A3 Template | A3 frame size. | P1 |
| 881 | Badge/ID Card 54×86mm Template | Standard ID card. | P1 |
| 882 | Badge/ID Card 65×100mm Template | Large ID card. | P1 |
| 883 | Pen Wrap Template | Standard pen wrap. | P2 |
| 884 | Plate Template | Sublimation plate. | P2 |
| 885 | Cap Template | Cap panel print. | P2 |
| 886 | Mouse Pad Template | Standard mouse pad. | P2 |
| 887 | Puzzle Template | Jigsaw puzzle. | P2 |
| 888 | Rock/Stone Template | Sublimation stone. | P2 |
| 889 | Bottle Template | Water bottle wrap. | P2 |
| 890 | Cushion/Pillow Template | Cushion cover. | P2 |
| 891 | Flag/Banner Template | Flag print area. | P2 |
| 892 | Phone Case Template | Phone case print area. | P2 |
| 893 | Laptop Skin Template | Laptop skin dimensions. | P2 |
| 894 | Wall Clock Template | Clock face print. | P2 |
| 895 | Door Hanger Template | Door hanger shape. | P2 |
| 896 | Bookmark Template | Bookmark dimensions. | P2 |
| 897 | Luggage Tag Template | Luggage tag shape. | P2 |
| 898 | Pet Tag Template | Pet tag shape. | P2 |
| 899 | Name Plate Template | Desk name plate. | P2 |
| 900 | Trophy Template | Trophy plate print. | P2 |

---

## Category 10: Design Studio — Festival & Thematic Templates (901–1000)

| # | Feature | Description | Priority |
|---|---------|-------------|----------|
| 901 | Diwali Template Pack | Diya, lantern, firecracker shapes. | P1 |
| 902 | Diwali Rangoli Template | Rangoli pattern frames. | P1 |
| 903 | Diwali Lantern Template | Kandil shape outline. | P1 |
| 904 | Holi Template Pack | Color splash frames. | P1 |
| 905 | Holi Pichkari Template | Water gun shape. | P1 |
| 906 | Eid Template Pack | Crescent, star, mosque shapes. | P1 |
| 907 | Eid Mubarak Template | Decorative frame. | P1 |
| 908 | Christmas Template Pack | Tree, star, bell shapes. | P1 |
| 909 | Christmas Ornament Template | Round ornament outline. | P1 |
| 910 | New Year Template Pack | Firework, clock shapes. | P1 |
| 911 | Wedding Template Pack | Mandap, ring, heart shapes. | P1 |
| 912 | Wedding Invitation Template | Standard invite size. | P1 |
| 913 | Wedding RSVP Template | RSVP card size. | P1 |
| 914 | Birthday Template Pack | Cake, balloon, candle shapes. | P1 |
| 915 | Birthday Badge Template | Birthday badge outline. | P1 |
| 916 | Anniversary Template Pack | Ring, heart, ribbon shapes. | P1 |
| 917 | Baby Shower Template Pack | Stork, bottle, rattle shapes. | P1 |
| 918 | Graduation Template Pack | Cap, diploma, star shapes. | P1 |
| 919 | Republic Day Template Pack | Ashoka Chakra, tricolor frames. | P1 |
| 920 | Independence Day Template Pack | Flag, map, freedom shapes. | P1 |
| 921 | Ganesh Chaturthi Template | Ganesh silhouette frame. | P1 |
| 922 | Navratri Template Pack | Dandiya, garba shapes. | P1 |
| 923 | Durga Puja Template Pack | Durga silhouette frame. | P1 |
| 924 | Raksha Bandhan Template | Rakhi shape outline. | P1 |
| 925 | Karva Chauth Template | Moon, sieve, thali shapes. | P1 |
| 926 | Baisakhi Template Pack | Wheat, drum, bhangra shapes. | P1 |
| 927 | Pongal Template Pack | Pot, sugarcane, sun shapes. | P1 |
| 928 | Onam Template Pack | Boat, flower, pookalam shapes. | P1 |
| 929 | Bihu Template Pack | Buffalo, pepa, jaapi shapes. | P1 |
| 930 | Lohri Template Pack | Bonfire, popcorn, revri shapes. | P1 |
| 931 | Makar Sankranti Template | Kite, tilgul, sun shapes. | P1 |
| 932 | Teej Template Pack | Swing, mehndi, peacock shapes. | P1 |
| 933 | Janmashtami Template | Matki, flute, peacock shapes. | P1 |
| 934 | Shivratri Template | Trishul, damru, moon shapes. | P1 |
| 935 | Hanuman Jayanti Template | Hanuman mace, mountain shapes. | P1 |
| 936 | Guru Purnima Template | Lotus, lamp, book shapes. | P1 |
| 937 | Buddha Purnima Template | Dharma wheel, lotus shapes. | P1 |
| 938 | Mahavir Jayanti Template | Lion, swastika shapes. | P1 |
| 939 | Good Friday Template | Cross, crown of thorns shapes. | P1 |
| 940 | Easter Template Pack | Egg, bunny, cross shapes. | P1 |
| 941 | Valentine's Day Template | Heart, rose, arrow shapes. | P1 |
| 942 | Mother's Day Template | Flower, heart, hand shapes. | P1 |
| 943 | Father's Day Template | Tie, mustache, tool shapes. | P1 |
| 944 | Friendship Day Template | Bracelet, handshake shapes. | P1 |
| 945 | Teacher's Day Template | Apple, book, pen shapes. | P1 |
| 946 | Children's Day Template | Balloon, toy, star shapes. | P1 |
| 947 | Women's Day Template | Female symbol, rose shapes. | P1 |
| 948 | Men's Day Template | Male symbol, tie shapes. | P1 |
| 949 | Environment Day Template | Tree, earth, leaf shapes. | P1 |
| 950 | Yoga Day Template | Yoga pose silhouettes. | P1 |
| 951 | Doctor's Day Template | Stethoscope, cross shapes. | P1 |
| 952 | Engineer's Day Template | Gear, bridge, lightbulb shapes. | P1 |
| 953 | Teacher Template Pack | Chalkboard, apple, ruler shapes. | P1 |
| 954 | Sports Template Pack | Cricket bat, football, jersey shapes. | P1 |
| 955 | Cricket Template Pack | Bat, ball, wicket shapes. | P1 |
| 956 | Football Template Pack | Ball, goal, jersey shapes. | P1 |
| 957 | Basketball Template Pack | Ball, hoop, court shapes. | P1 |
| 958 | Tennis Template Pack | Racket, ball, court shapes. | P1 |
| 959 | Badminton Template Pack | Racket, shuttlecock shapes. | P1 |
| 960 | Hockey Template Pack | Stick, ball, goal shapes. | P1 |
| 961 | Kabaddi Template Pack | Mat, player silhouette shapes. | P1 |
| 962 | Wrestling Template Pack | Arena, belt shapes. | P1 |
| 963 | Olympics Template Pack | Rings, torch, medal shapes. | P1 |
| 964 | Marathon Template Pack | Runner, finish line shapes. | P1 |
| 965 | Gym Template Pack | Dumbbell, kettlebell shapes. | P1 |
| 966 | Yoga Template Pack | Mat, pose, om shapes. | P1 |
| 967 | Dance Template Pack | Dancer silhouette, ghungroo shapes. | P1 |
| 968 | Music Template Pack | Note, guitar, mic shapes. | P1 |
| 969 | Movie Template Pack | Clapper, reel, star shapes. | P1 |
| 970 | Travel Template Pack | Plane, map, compass shapes. | P1 |
| 971 | Food Template Pack | Plate, fork, chef hat shapes. | P1 |
| 972 | Coffee Template Pack | Cup, bean, steam shapes. | P1 |
| 973 | Tea Template Pack | Cup, leaf, kettle shapes. | P1 |
| 974 | Beer Template Pack | Mug, hop, barley shapes. | P1 |
| 975 | Wine Template Pack | Glass, bottle, grape shapes. | P1 |
| 976 | Bakery Template Pack | Cake, cupcake, bread shapes. | P1 |
| 977 | BBQ Template Pack | Grill, flame, meat shapes. | P1 |
| 978 | Pizza Template Pack | Slice, whole, topping shapes. | P1 |
| 979 | Burger Template Pack | Burger, fries, drink shapes. | P1 |
| 980 | Ice Cream Template Pack | Cone, scoop, popsicle shapes. | P1 |
| 981 | Chocolate Template Pack | Bar, truffle, heart shapes. | P1 |
| 982 | Candy Template Pack | Lollipop, wrapper shapes. | P1 |
| 983 | Fruit Template Pack | Apple, orange, banana shapes. | P1 |
| 984 | Vegetable Template Pack | Carrot, tomato, onion shapes. | P1 |
| 985 | Flower Template Pack | Rose, lotus, sunflower shapes. | P1 |
| 986 | Tree Template Pack | Oak, pine, palm shapes. | P1 |
| 987 | Leaf Template Pack | Maple, fern, monstera shapes. | P1 |
| 988 | Butterfly Template Pack | Monarch, swallowtail shapes. | P1 |
| 989 | Bird Template Pack | Peacock, parrot, eagle shapes. | P1 |
| 990 | Animal Template Pack | Lion, elephant, tiger shapes. | P1 |
| 991 | Fish Template Pack | Goldfish, shark, dolphin shapes. | P1 |
| 992 | Sea Template Pack | Shell, starfish, anchor shapes. | P1 |
| 993 | Mountain Template Pack | Peak, range, snow shapes. | P1 |
| 994 | Sun Template Pack | Sunrise, sunset, rays shapes. | P1 |
| 995 | Moon Template Pack | Crescent, full, eclipse shapes. | P1 |
| 996 | Star Template Pack | Five-point, six-point, shooting shapes. | P1 |
| 997 | Cloud Template Pack | Cumulus, stratus, cirrus shapes. | P1 |
| 998 | Rain Template Pack | Drop, umbrella, puddle shapes. | P1 |
| 999 | Snow Template Pack | Flake, snowman, icicle shapes. | P1 |
| 1000 | Rainbow Template Pack | Arc, spectrum, pot of gold shapes. | P1 |

---

## Category 11: Upscale Factory — Workflow (1001–1100)

| # | Feature | Description | Priority |
|---|---------|-------------|----------|
| 1001 | Single File Upload | Upload one image. | P0 |
| 1002 | Multiple File Upload | Upload multiple images. | P0 |
| 1003 | Folder Upload | Upload entire folder. | P0 |
| 1004 | ZIP Upload | Extract and process ZIP. | P1 |
| 1005 | RAR Upload | Extract and process RAR. | P2 |
| 1006 | 7Z Upload | Extract and process 7Z. | P2 |
| 1007 | Drag-and-Drop Upload | Drag files onto window. | P0 |
| 1008 | Drag-and-Drop Folder | Drag folder onto window. | P0 |
| 1009 | Clipboard Paste Upload | Paste image from clipboard. | P1 |
| 1010 | Screenshot Paste Upload | Paste screenshot directly. | P1 |
| 1011 | URL Import (Download) | Download image from URL. | P2 |
| 1012 | Hot Folder Watch | Monitor folder for new files. | P1 |
| 1013 | Hot Folder Recursive | Include subfolders. | P1 |
| 1014 | Hot Folder Filter | Only process specific extensions. | P1 |
| 1015 | Hot Folder Auto-Start | Begin processing on detection. | P1 |
| 1016 | Hot Folder Manual Start | Queue for review first. | P1 |
| 1017 | Hot Folder Move Original | Move source to processed folder. | P1 |
| 1018 | Hot Folder Copy Original | Keep source in place. | P1 |
| 1019 | Hot Folder Delete Original | Remove source after processing. | P2 |
| 1020 | Hot Folder File Size Filter | Skip files under/over size. | P2 |
| 1021 | Hot Folder Resolution Filter | Skip files under resolution. | P2 |
| 1022 | Hot Folder Duplicate Skip | Skip if already in system. | P1 |
| 1023 | Hot Folder Naming Pattern | Rename output with pattern. | P2 |
| 1024 | Hot Folder Output Subfolder | Organize by date. | P2 |
| 1025 | Batch Queue View | List all queued jobs. | P0 |
| 1026 | Batch Queue Add | Add to queue. | P0 |
| 1027 | Batch Queue Remove | Remove from queue. | P0 |
| 1028 | Batch Queue Reorder (Drag) | Change processing order. | P1 |
| 1029 | Batch Queue Reorder (Up/Down) | Move in list. | P1 |
| 1030 | Batch Queue Priority Set | High/Medium/Low. | P2 |
| 1031 | Batch Queue Priority Sort | Sort by priority. | P2 |
| 1032 | Batch Queue Start | Begin processing. | P0 |
| 1033 | Batch Queue Pause | Pause mid-processing. | P0 |
| 1034 | Batch Queue Resume | Continue after pause. | P0 |
| 1035 | Batch Queue Cancel | Stop and clear. | P0 |
| 1036 | Batch Queue Cancel Single | Stop one job. | P0 |
| 1037 | Batch Queue Retry Failed | Re-process failed jobs. | P1 |
| 1038 | Batch Queue Retry All | Re-process all failed. | P1 |
| 1039 | Batch Queue Retry with Different Model | Switch model on retry. | P2 |
| 1040 | Batch Queue Retry with Different Scale | Switch scale on retry. | P2 |
| 1041 | Batch Queue Status Display | Show current status. | P0 |
| 1042 | Batch Queue Progress Bar | Visual progress. | P0 |
| 1043 | Batch Queue Percentage | Numeric progress. | P0 |
| 1044 | Batch Queue ETA | Estimated completion time. | P1 |
| 1045 | Batch Queue Time Elapsed | Time spent so far. | P1 |
| 1046 | Batch Queue Time Remaining | Time left. | P1 |
| 1047 | Batch Queue Speed | Images per hour. | P2 |
| 1048 | Batch Queue Thumbnail Preview | Show image being processed. | P0 |
| 1049 | Batch Queue Before/After Toggle | Switch view mid-process. | P1 |
| 1050 | Batch Queue Error Log | Show failure reasons. | P1 |
| 1051 | Batch Queue Success Log | Show completed jobs. | P1 |
| 1052 | Batch Queue Export Log | Save log to file. | P2 |
| 1053 | Batch Queue Clear Completed | Remove finished jobs. | P1 |
| 1054 | Batch Queue Clear All | Empty entire queue. | P1 |
| 1055 | Batch Queue Save | Save queue state. | P2 |
| 1056 | Batch Queue Load | Restore saved queue. | P2 |
| 1057 | 2× Upscale | Double dimensions. | P0 |
| 1058 | 4× Upscale | Quadruple dimensions. | P0 |
| 1059 | 8× Upscale | Octuple dimensions. | P2 |
| 1060 | Custom Scale Factor | Any multiplier (1.5×, 3×, etc.). | P2 |
| 1061 | Custom Output Width | Set exact output width. | P2 |
| 1062 | Custom Output Height | Set exact output height. | P2 |
| 1063 | Custom Output Both | Set exact width and height. | P2 |
| 1064 | Custom Output Max Dimension | Set max width or height. | P2 |
| 1065 | Custom Output Min Dimension | Set min width or height. | P2 |
| 1066 | Output 8000×8000px | Maximum single dimension. | P1 |
| 1067 | Output 10000×10000px | Maximum single dimension. | P1 |
| 1068 | Output 12000×12000px | Extended maximum. | P2 |
| 1069 | Output 16000×16000px | Ultra high resolution. | P3 |
| 1070 | Output Format PNG | Lossless output. | P0 |
| 1071 | Output Format JPG | Compressed output. | P0 |
| 1072 | Output Format TIFF | High-bit-depth output. | P2 |
| 1073 | Output Format WEBP | Modern format. | P2 |
| 1074 | Output Format BMP | Uncompressed. | P3 |
| 1075 | Output Quality Slider | JPG quality 0–100. | P0 |
| 1076 | Output Quality Preset | Low, Medium, High, Maximum. | P0 |
| 1077 | Output Color Space sRGB | Standard web color space. | P0 |
| 1078 | Output Color Space Adobe RGB | Wide gamut. | P2 |
| 1079 | Output Color Space ProPhoto RGB | Maximum gamut. | P3 |
| 1080 | Output Color Space CMYK | Print color space. | P2 |
| 1081 | Output Color Space Grayscale | Black and white. | P2 |
| 1082 | Output Bit Depth 8-bit | Standard. | P0 |
| 1083 | Output Bit Depth 16-bit | High bit depth. | P2 |
| 1084 | Output Transparency Preserve | Keep alpha channel. | P0 |
| 1085 | Output Transparency Fill White | Fill with white. | P0 |
| 1086 | Output Transparency Fill Black | Fill with black. | P2 |
| 1087 | Output Transparency Fill Custom | Fill with custom color. | P2 |
| 1088 | Output DPI Setting | Set output resolution. | P0 |
| 1089 | Output Metadata Preserve | Keep EXIF data. | P2 |
| 1090 | Output Metadata Strip | Remove EXIF data. | P2 |
| 1091 | Output Filename Pattern | Custom naming pattern. | P1 |
| 1092 | Output Filename Auto-Increment | Auto-number sequential files. | P1 |
| 1093 | Output Filename Suffix | Add _upscaled, _enhanced, etc. | P1 |
| 1094 | Output Filename Prefix | Add prefix. | P1 |
| 1095 | Output Folder Selection | Choose destination. | P0 |
| 1096 | Output Folder Auto-Create | Create if doesn't exist. | P0 |
| 1097 | Output Folder Subfolder by Date | Organize by date. | P2 |
| 1098 | Output Folder Subfolder by Batch | Organize by batch ID. | P2 |
| 1099 | Output Overwrite Protection | Warn if file exists. | P1 |
| 1100 | Output Overwrite Auto-Rename | Auto-rename if exists. | P1 |

---

## Category 12: Upscale Factory — AI Models & Processing (1101–1200)

| # | Feature | Description | Priority |
|---|---------|-------------|----------|
| 1101 | Model realesrgan-x4plus | Standard high-quality model. | P0 |
| 1102 | Model realesrgan-x4plus-anime | Optimized for illustrations. | P0 |
| 1103 | Model realesrnet-x4plus | Faster, lighter model. | P0 |
| 1104 | Model realesrgan-x2plus | 2× upscale model. | P0 |
| 1105 | Model realesrgan-x8plus | 8× upscale model. | P2 |
| 1106 | Model Custom User-Trained | Load custom trained model. | P3 |
| 1107 | Model Download Manager | Download new models. | P2 |
| 1108 | Model Update Check | Check for model updates. | P2 |
| 1109 | Model Delete | Remove unused models. | P2 |
| 1110 | Model Info Display | Show model details. | P1 |
| 1111 | Model Benchmark | Compare model speed/quality. | P3 |
| 1112 | Model Auto-Select | Pick best model for image type. | P3 |
| 1113 | GPU Device Selection | Choose which GPU to use. | P1 |
| 1114 | GPU Multi-GPU Support | Use multiple GPUs. | P2 |
| 1115 | GPU Memory Display | Show VRAM usage. | P1 |
| 1116 | GPU Memory Warning | Warn if VRAM low. | P1 |
| 1117 | GPU Temperature Display | Show GPU temp. | P2 |
| 1118 | GPU Temperature Warning | Warn if overheating. | P2 |
| 1119 | GPU Fan Speed Display | Show fan RPM. | P3 |
| 1120 | CPU Thread Count | Set number of CPU threads. | P1 |
| 1121 | CPU Priority | Low/Normal/High priority. | P2 |
| 1122 | CPU Fallback on GPU Error | Auto-switch to CPU. | P1 |
| 1123 | CPU Fallback on GPU OOM | Switch if GPU out of memory. | P1 |
| 1124 | CPU Fallback on GPU Crash | Switch if GPU driver crashes. | P1 |
| 1125 | Tile Size Setting | Process in chunks. | P1 |
| 1126 | Tile Size Auto | Auto-detect optimal tile size. | P1 |
| 1127 | Tile Size Custom | User-defined tile size. | P1 |
| 1128 | Tile Overlap Setting | Overlap between tiles. | P1 |
| 1129 | Tile Seamless Blending | Blend tile edges smoothly. | P1 |
| 1130 | Tile Processing Order | Row by row, column by column. | P3 |
| 1131 | Batch Size Setting | Process N images at once. | P1 |
| 1132 | Batch Size Auto | Auto-detect optimal batch. | P1 |
| 1133 | Pre-Process Denoise | Remove noise before upscale. | P2 |
| 1134 | Pre-Process Sharpen | Sharpen before upscale. | P2 |
| 1135 | Pre-Process Contrast | Boost contrast before upscale. | P2 |
| 1136 | Pre-Process Saturation | Boost saturation before upscale. | P2 |
| 1137 | Pre-Process Color Correction | Fix color cast before upscale. | P2 |
| 1138 | Pre-Process Auto-Levels | Auto-adjust levels. | P2 |
| 1139 | Pre-Process Auto-White Balance | Fix white balance. | P2 |
| 1140 | Pre-Process Crop | Crop before upscale. | P2 |
| 1141 | Pre-Process Resize | Resize before upscale. | P2 |
| 1142 | Pre-Process Rotate | Rotate before upscale. | P2 |
| 1143 | Pre-Process Flip | Flip before upscale. | P2 |
| 1144 | Post-Process Denoise | Remove noise after upscale. | P2 |
| 1145 | Post-Process Sharpen | Sharpen after upscale. | P2 |
| 1146 | Post-Process Contrast | Adjust contrast after upscale. | P2 |
| 1147 | Post-Process Saturation | Adjust saturation after upscale. | P2 |
| 1148 | Post-Process Color Correction | Fix color after upscale. | P2 |
| 1149 | Post-Process Auto-Levels | Auto-adjust after upscale. | P2 |
| 1150 | Post-Process Crop | Crop after upscale. | P2 |
| 1151 | Post-Process Resize | Resize after upscale. | P2 |
| 1152 | Post-Process Rotate | Rotate after upscale. | P2 |
| 1153 | Post-Process Flip | Flip after upscale. | P2 |
| 1154 | Face Enhancement | Special face upscaling. | P3 |
| 1155 | Face Enhancement Strength | Adjust face enhancement. | P3 |
| 1156 | Background Enhancement | Special background upscaling. | P3 |
| 1157 | Background Blur | Blur background after upscale. | P3 |
| 1158 | Background Remove | Remove background after upscale. | P3 |
| 1159 | Background Replace | Replace background after upscale. | P3 |
| 1160 | Style Transfer | Apply artistic style. | P3 |
| 1161 | Style Transfer Preset | Pre-defined styles. | P3 |
| 1162 | Style Transfer Custom | User-defined style. | P3 |
| 1163 | Style Transfer Strength | Adjust style intensity. | P3 |
| 1164 | Colorization | Colorize black and white. | P3 |
| 1165 | Colorization Preset | Pre-defined color palettes. | P3 |
| 1166 | Colorization Custom | User-defined colors. | P3 |
| 1167 | Colorization Strength | Adjust color intensity. | P3 |
| 1168 | Inpainting | Fill missing areas. | P3 |
| 1169 | Outpainting | Extend image beyond borders. | P3 |
| 1170 | Super-Resolution Comparison | Compare different SR methods. | P3 |
| 1171 | Quality Metric PSNR | Peak signal-to-noise ratio. | P3 |
| 1172 | Quality Metric SSIM | Structural similarity. | P3 |
| 1173 | Quality Metric LPIPS | Perceptual similarity. | P3 |
| 1174 | Quality Metric Display | Show all metrics. | P3 |
| 1175 | Quality Metric Threshold | Auto-approve if above threshold. | P3 |
| 1176 | Processing Log per Image | Detailed log for each image. | P2 |
| 1177 | Processing Log per Batch | Summary log for batch. | P2 |
| 1178 | Processing Log Export | Save log to file. | P2 |
| 1179 | Processing Log Search | Search within logs. | P2 |
| 1180 | Processing Log Filter | Filter by status. | P2 |
| 1181 | Processing Log Clear | Delete old logs. | P2 |
| 1182 | Processing Log Auto-Archive | Archive logs after N days. | P2 |
| 1183 | Processing Log Max Size | Limit log file size. | P2 |
| 1184 | Background Processing | Process while using other tabs. | P0 |
| 1185 | Background Processing Indicator | Show active in status bar. | P0 |
| 1186 | Background Processing Pause on Interaction | Pause when user active. | P2 |
| 1187 | Background Processing Resume on Idle | Resume when idle. | P2 |
| 1188 | Background Processing CPU Limit | Max CPU % for background. | P2 |
| 1189 | Background Processing GPU Limit | Max GPU % for background. | P2 |
| 1190 | Background Processing Priority | Low/Normal/High. | P2 |
| 1191 | Queue Persistence | Save queue across restarts. | P1 |
| 1192 | Queue Auto-Resume on Launch | Continue after crash/restart. | P1 |
| 1193 | Queue Auto-Resume on Wake | Continue after sleep/wake. | P1 |
| 1194 | Queue Notification on Complete | Alert when batch done. | P1 |
| 1195 | Queue Notification on Error | Alert when error occurs. | P1 |
| 1196 | Queue Notification on Stall | Alert when stuck. | P2 |
| 1197 | Queue Email Notification (Local) | Send local email alert. | P3 |
| 1198 | Queue Sound Notification | Play sound on completion. | P1 |
| 1199 | Queue System Tray Notification | Windows toast notification. | P1 |
| 1200 | Queue Auto-Export on Complete | Auto-export when done. | P2 |

---

## Category 13: Quality Control — Pre-Checks (1201–1300)

| # | Feature | Description | Priority |
|---|---------|-------------|----------|
| 1201 | Resolution Check | Verify source resolution. | P0 |
| 1202 | Resolution Warning Low | Warn if below threshold. | P0 |
| 1203 | Resolution Warning Critical | Block if critically low. | P0 |
| 1204 | Resolution Target Display | Show target vs actual. | P0 |
| 1205 | Blur Detection | Detect out-of-focus images. | P1 |
| 1206 | Blur Metric Display | Show blur score. | P1 |
| 1207 | Blur Threshold Setting | Set acceptable blur level. | P1 |
| 1208 | Blur Auto-Reject | Reject if too blurry. | P2 |
| 1209 | Blur Auto-Flag | Flag for manual review. | P1 |
| 1210 | Compression Artifact Detection | Detect JPEG blockiness. | P1 |
| 1211 | Artifact Metric Display | Show artifact score. | P1 |
| 1212 | Artifact Threshold Setting | Set acceptable level. | P1 |
| 1213 | Artifact Auto-Reject | Reject if too compressed. | P2 |
| 1214 | Artifact Auto-Flag | Flag for review. | P1 |
| 1215 | Color Banding Detection | Detect posterization. | P1 |
| 1216 | Banding Metric Display | Show banding score. | P1 |
| 1217 | Banding Threshold Setting | Set acceptable level. | P1 |
| 1218 | Banding Auto-Flag | Flag for review. | P1 |
| 1219 | Noise Detection | Detect image noise. | P1 |
| 1220 | Noise Metric Display | Show noise score. | P1 |
| 1221 | Noise Threshold Setting | Set acceptable level. | P1 |
| 1222 | Noise Auto-Flag | Flag for review. | P1 |
| 1223 | Non-Square Aspect Ratio Warning | Flag unusual proportions. | P1 |
| 1224 | Transparent Edge Detection | Warn about transparency issues. | P1 |
| 1225 | Transparent Edge Auto-Fill | Fill with white/black. | P2 |
| 1226 | Transparent Edge Manual Fill | User chooses fill color. | P2 |
| 1227 | Duplicate File Detection (MD5) | Exact duplicate check. | P0 |
| 1228 | Duplicate File Detection (SHA) | Secure hash check. | P0 |
| 1229 | Duplicate File Auto-Skip | Skip if already exists. | P0 |
| 1230 | Duplicate File Auto-Rename | Rename if same name different content. | P1 |
| 1231 | Similar Image Detection (pHash) | Perceptual hash check. | P1 |
| 1232 | Similar Image Threshold | Set similarity tolerance. | P1 |
| 1233 | Similar Image Auto-Flag | Flag near-duplicates. | P1 |
| 1234 | Already Upscaled Detection | Detect previous upscaling. | P1 |
| 1235 | Already Upscaled Warning | Warn user. | P1 |
| 1236 | Already Upscaled Auto-Skip | Skip if already upscaled. | P2 |
| 1237 | File Size Warning Large | Warn if unusually large. | P1 |
| 1238 | File Size Warning Small | Warn if unusually small. | P1 |
| 1239 | File Size Auto-Reject | Reject if outside range. | P2 |
| 1240 | Export Size Validation | Verify output meets requirements. | P1 |
| 1241 | Export Size Warning | Warn if output too small. | P1 |
| 1242 | Missing Output File Detection | Verify file was created. | P1 |
| 1243 | Missing Output File Auto-Retry | Retry if missing. | P1 |
| 1244 | Missing Output File Alert | Alert if retry fails. | P1 |
| 1245 | Corrupt File Detection | Detect damaged input. | P1 |
| 1246 | Corrupt File Auto-Skip | Skip damaged files. | P1 |
| 1247 | Corrupt File Alert | Notify about corrupt file. | P1 |
| 1248 | Unsupported Format Detection | Reject unsupported files. | P0 |
| 1249 | Unsupported Format Alert | Notify about unsupported file. | P0 |
| 1250 | Color Gamut Warning | Colors outside sublimation gamut. | P2 |
| 1251 | Color Gamut Display | Show out-of-gamut colors. | P2 |
| 1252 | Color Gamut Auto-Correct | Attempt to fix gamut issues. | P3 |
| 1253 | Color Gamut Manual Correct | User fixes gamut issues. | P3 |
| 1254 | Ghosting Risk Warning | High ink density alert. | P2 |
| 1255 | Ghosting Risk Display | Show risk areas. | P2 |
| 1256 | Ghosting Risk Auto-Fix | Reduce density automatically. | P3 |
| 1257 | Ghosting Risk Manual Fix | User reduces density. | P3 |
| 1258 | Content-Aware Smart Crop | Auto-crop to product ratio. | P2 |
| 1259 | Content-Aware Smart Crop Preview | Show crop suggestion. | P2 |
| 1260 | Content-Aware Smart Crop Apply | Accept suggestion. | P2 |
| 1261 | Content-Aware Smart Crop Cancel | Reject suggestion. | P2 |
| 1262 | Face Detection | Detect faces in image. | P2 |
| 1263 | Face Detection Display | Show face bounding boxes. | P2 |
| 1264 | Face Detection Warning | Warn if face too small. | P2 |
| 1265 | Face Detection Auto-Center | Center crop on face. | P3 |
| 1266 | Face Detection Manual Center | User centers on face. | P3 |
| 1267 | Subject Detection | Detect main subject. | P3 |
| 1268 | Subject Detection Display | Show subject bounding box. | P3 |
| 1269 | Subject Detection Auto-Center | Center crop on subject. | P3 |
| 1270 | Border Removal | Auto-remove empty borders. | P2 |
| 1271 | Border Removal Preview | Show before/after. | P2 |
| 1272 | Border Removal Apply | Confirm removal. | P2 |
| 1273 | Border Removal Cancel | Keep original. | P2 |
| 1274 | Auto-Contrast Enhancement | Boost contrast automatically. | P2 |
| 1275 | Auto-Contrast Preview | Show before/after. | P2 |
| 1276 | Auto-Contrast Apply | Confirm enhancement. | P2 |
| 1277 | Auto-Saturation Enhancement | Boost saturation automatically. | P2 |
| 1278 | Auto-Saturation Preview | Show before/after. | P2 |
| 1279 | Auto-Saturation Apply | Confirm enhancement. | P2 |
| 1280 | Noise Reduction Pre-Filter | Remove noise before upscale. | P2 |
| 1281 | Noise Reduction Strength | Adjust noise removal. | P2 |
| 1282 | Noise Reduction Preview | Show before/after. | P2 |
| 1283 | Sharpen Pre-Filter | Enhance edges before upscale. | P2 |
| 1284 | Sharpen Strength | Adjust sharpening. | P2 |
| 1285 | Sharpen Preview | Show before/after. | P2 |
| 1286 | Color Correction Pre-Filter | Fix color cast before upscale. | P2 |
| 1287 | Color Correction Strength | Adjust correction. | P2 |
| 1288 | Color Correction Preview | Show before/after. | P2 |
| 1289 | Auto-Levels Pre-Filter | Auto-adjust before upscale. | P2 |
| 1290 | Auto-Levels Preview | Show before/after. | P2 |
| 1291 | Auto-White Balance Pre-Filter | Fix WB before upscale. | P2 |
| 1292 | Auto-White Balance Preview | Show before/after. | P2 |
| 1293 | Quality Check Batch Report | Summary of all checks. | P2 |
| 1294 | Quality Check Individual Report | Per-image report. | P2 |
| 1295 | Quality Check Report Export | Save as PDF/CSV. | P2 |
| 1296 | Quality Check Report Print | Print physical report. | P3 |
| 1297 | Quality Check Trend Graph | Quality scores over time. | P3 |
| 1298 | Quality Check Reject Reason Analytics | Most common reasons. | P3 |
| 1299 | Quality Check Processing Speed Analytics | Time per image trends. | P3 |
| 1300 | Quality Check GPU vs CPU Performance | Compare processing methods. | P3 |

---

## Category 14: Print Sheet Builder — Nesting & Layout (1301–1400)

| # | Feature | Description | Priority |
|---|---------|-------------|----------|
| 1301 | Auto-Nesting (Shelf Algorithm) | Basic rectangle packing. | P0 |
| 1302 | Auto-Nesting (Guillotine) | Cut-based packing. | P1 |
| 1303 | Auto-Nesting (Skyline) | Skyline-based packing. | P1 |
| 1304 | Auto-Nesting (Maximal Rectangles) | MR-based packing. | P1 |
| 1305 | Auto-Nesting (Best Fit) | Best-fit heuristic. | P1 |
| 1306 | Auto-Nesting (First Fit) | First-fit heuristic. | P1 |
| 1307 | Auto-Nesting (Next Fit) | Next-fit heuristic. | P1 |
| 1308 | Auto-Nesting (True Shape) | Irregular shape packing. | P1 |
| 1309 | Auto-Nesting (Genetic Algorithm) | GA optimization. | P2 |
| 1310 | Auto-Nesting (Simulated Annealing) | SA optimization. | P2 |
| 1311 | Auto-Nesting (Tabu Search) | Tabu optimization. | P3 |
| 1312 | Auto-Nesting (Ant Colony) | ACO optimization. | P3 |
| 1313 | Auto-Nesting (Particle Swarm) | PSO optimization. | P3 |
| 1314 | Auto-Nesting (Deep Learning) | AI-based nesting. | P3 |
| 1315 | Auto-Nesting Algorithm Selection | Choose algorithm. | P2 |
| 1316 | Auto-Nesting Algorithm Auto-Select | Pick best for job. | P2 |
| 1317 | Auto-Nesting Time Limit | Max time for optimization. | P2 |
| 1318 | Auto-Nesting Iteration Limit | Max iterations. | P2 |
| 1319 | Auto-Nesting Target Efficiency | Stop when efficiency reached. | P2 |
| 1320 | Auto-Nesting Retry with Different Algorithm | Try alternative if poor result. | P2 |
| 1321 | Auto-Nesting Retry with Rotation | Try different rotation settings. | P2 |
| 1322 | Auto-Nesting Retry with Different Gap | Try different gap settings. | P2 |
| 1323 | Manual Nesting Mode | Drag items manually. | P0 |
| 1324 | Manual Nesting Snap to Grid | Snap to grid. | P0 |
| 1325 | Manual Nesting Snap to Guides | Snap to guides. | P0 |
| 1326 | Manual Nesting Snap to Objects | Snap to other items. | P0 |
| 1327 | Manual Nesting Snap to Page | Snap to page edges. | P0 |
| 1328 | Manual Nesting Snap to Center | Snap to page center. | P0 |
| 1329 | Manual Nesting Rotation | Rotate individual items. | P0 |
| 1330 | Manual Nesting Rotation Free | Any angle. | P0 |
| 1331 | Manual Nesting Rotation Snap | Snap to increments. | P0 |
| 1332 | Manual Nesting Scale | Resize individual items. | P0 |
| 1333 | Manual Nesting Scale Uniform | Maintain aspect ratio. | P0 |
| 1334 | Manual Nesting Scale Non-Uniform | Stretch freely. | P0 |
| 1335 | Manual Nesting Move | Reposition items. | P0 |
| 1336 | Manual Nesting Nudge | Arrow key movement. | P0 |
| 1337 | Manual Nesting Nudge Custom | Set nudge distance. | P0 |
| 1338 | Manual Nesting Align | Align selected items. | P0 |
| 1339 | Manual Nesting Distribute | Even spacing. | P0 |
| 1340 | Manual Nesting Bring Forward | Change stacking. | P0 |
| 1341 | Manual Nesting Send Backward | Change stacking. | P0 |
| 1342 | Manual Nesting Group | Group items. | P0 |
| 1343 | Manual Nesting Ungroup | Ungroup items. | P0 |
| 1344 | Manual Nesting Lock | Lock item position. | P0 |
| 1345 | Manual Nesting Unlock | Unlock item. | P0 |
| 1346 | Manual Nesting Hide | Hide item. | P0 |
| 1347 | Manual Nesting Show | Show hidden item. | P0 |
| 1348 | Manual Nesting Delete | Remove item. | P0 |
| 1349 | Manual Nesting Duplicate | Clone item. | P0 |
| 1350 | Manual Nesting Duplicate with Offset | Clone at offset. | P1 |
| 1351 | Mixed Designs on Same Sheet | Allow different SKUs together. | P0 |
| 1352 | Mixed Designs Auto-Group | Group by color/size. | P2 |
| 1353 | Mixed Designs Color Separation | Separate by dominant color. | P2 |
| 1354 | Mixed Designs Size Separation | Separate by size. | P2 |
| 1355 | Mixed Designs Substrate Separation | Separate by material. | P2 |
| 1356 | Single Design per Sheet | Fill with copies of one design. | P0 |
| 1357 | Single Design Auto-Count | Calculate max copies. | P0 |
| 1358 | Single Design Auto-Center | Center on page. | P0 |
| 1359 | Single Design Auto-Distribute | Even spacing. | P0 |
| 1360 | Single Design Fill Sheet | Maximize copies. | P0 |
| 1361 | Quantity-Based Placement | Place N copies of each design. | P0 |
| 1362 | Quantity Auto-Calculate | Calculate from order quantity. | P0 |
| 1363 | Quantity Manual Override | Override auto-calculation. | P0 |
| 1364 | Quantity Remainder Handling | Handle leftover quantities. | P1 |
| 1365 | Quantity Per-Page Limit | Max items per page. | P1 |
| 1366 | Quantity Total Limit | Max items total. | P1 |
| 1367 | Multi-Page Auto-Generation | Create next page when full. | P0 |
| 1368 | Multi-Page Manual Add | Add page manually. | P0 |
| 1369 | Multi-Page Manual Delete | Remove page. | P0 |
| 1370 | Multi-Page Manual Reorder | Change page order. | P0 |
| 1371 | Multi-Page Duplicate | Copy page layout. | P0 |
| 1372 | Multi-Page Clone Pattern | Copy layout to new page. | P0 |
| 1373 | Multi-Page Independent Edit | Edit each page separately. | P0 |
| 1374 | Multi-Page Sync Edit | Edit all pages together. | P2 |
| 1375 | Multi-Page Master Page | Template for all pages. | P2 |
| 1376 | Multi-Page Master Page Edit | Edit master template. | P2 |
| 1377 | Multi-Page Master Page Apply | Apply to all pages. | P2 |
| 1378 | Multi-Page Master Page Detach | Remove from specific page. | P2 |
| 1379 | Multi-Page Numbering | Auto-number pages. | P0 |
| 1380 | Multi-Page Total Count | Show total pages. | P0 |
| 1381 | Fill Sheet with Single Design | Auto-fill entire sheet. | P0 |
| 1382 | Fill Sheet with Mixed Designs | Auto-fill with multiple. | P0 |
| 1383 | Fill Sheet Auto-Optimize | Optimize for least waste. | P1 |
| 1384 | Fill Sheet Auto-Center | Center all items. | P0 |
| 1385 | Fill Sheet Auto-Align | Align all items. | P0 |
| 1386 | Fill Sheet Auto-Distribute | Even spacing. | P0 |
| 1387 | Fill Sheet Auto-Rotate | Rotate for best fit. | P0 |
| 1388 | Fill Sheet Auto-Scale | Scale to fit constraints. | P1 |
| 1389 | Fill Sheet Auto-Crop | Crop to fit constraints. | P1 |
| 1390 | Fill Sheet Auto-Trim | Trim excess. | P1 |
| 1391 | Copy/Paste Placement | Copy position pattern. | P1 |
| 1392 | Copy/Paste Placement to Next Page | Apply to next page. | P1 |
| 1393 | Copy/Paste Placement to All Pages | Apply globally. | P1 |
| 1394 | Mirror Placement Pattern Horizontal | Flip layout horizontally. | P1 |
| 1395 | Mirror Placement Pattern Vertical | Flip layout vertically. | P1 |
| 1396 | Rotate Entire Sheet Layout | Rotate all items together. | P2 |
| 1397 | Scale Entire Sheet Layout | Scale all items together. | P2 |
| 1398 | Crop to Content | Trim to bounding box. | P2 |
| 1399 | Crop to Bleed | Trim to bleed. | P1 |
| 1400 | Crop to Safe Zone | Trim to safe zone. | P1 |

---

## Category 15: Print Sheet Builder — Marks & Export (1401–1500)

| # | Feature | Description | Priority |
|---|---------|-------------|----------|
| 1401 | Cut Guide Generation | Draw cut lines. | P0 |
| 1402 | Cut Guide Style (Solid) | Solid line. | P0 |
| 1403 | Cut Guide Style (Dashed) | Dashed line. | P0 |
| 1404 | Cut Guide Style (Dotted) | Dotted line. | P0 |
| 1405 | Cut Guide Color | Choose line color. | P0 |
| 1406 | Cut Guide Width | Line thickness. | P0 |
| 1407 | Cut Guide Offset | Distance from design. | P0 |
| 1408 | Cut Guide Per-Object | Individual cut lines. | P0 |
| 1409 | Cut Guide Global | Single cut line for all. | P0 |
| 1410 | Cut Guide Contour | Follow shape exactly. | P1 |
| 1411 | Cut Guide Bounding Box | Rectangle around shape. | P0 |
| 1412 | Cut Guide Corner Radius | Rounded corners. | P1 |
| 1413 | Safe Guide Generation | Draw safe zone lines. | P0 |
| 1414 | Safe Guide Style | Line style. | P0 |
| 1415 | Safe Guide Color | Line color. | P0 |
| 1416 | Safe Guide Width | Line thickness. | P0 |
| 1417 | Safe Guide Offset | Distance from design. | P0 |
| 1418 | Safe Guide Per-Object | Individual safe zones. | P0 |
| 1419 | Safe Guide Global | Single safe zone for all. | P0 |
| 1420 | Registration Mark Generation | Add alignment marks. | P1 |
| 1421 | Registration Mark Style (L-Corner) | L-shaped corner marks. | P1 |
| 1422 | Registration Mark Style (Crosshair) | Crosshair marks. | P1 |
| 1423 | Registration Mark Style (Circle) | Circular marks. | P1 |
| 1424 | Registration Mark Style (Square) | Square marks. | P1 |
| 1425 | Registration Mark Style (Barcode) | Barcode marks. | P2 |
| 1426 | Registration Mark Style (QR) | QR code marks. | P2 |
| 1427 | Registration Mark Position (Corners) | All four corners. | P1 |
| 1428 | Registration Mark Position (Top Only) | Top edge only. | P1 |
| 1429 | Registration Mark Position (Bottom Only) | Bottom edge only. | P1 |
| 1430 | Registration Mark Position (Left Only) | Left edge only. | P1 |
| 1431 | Registration Mark Position (Right Only) | Right edge only. | P1 |
| 1432 | Registration Mark Position (Custom) | User-defined position. | P2 |
| 1433 | Registration Mark Size | Mark dimensions. | P1 |
| 1434 | Registration Mark Color | Mark color. | P1 |
| 1435 | Registration Mark for Summa | Summa-compatible marks. | P2 |
| 1436 | Registration Mark for Graphtec | Graphtec-compatible marks. | P2 |
| 1437 | Registration Mark for Zünd | Zünd-compatible marks. | P2 |
| 1438 | Registration Mark for Roland | Roland-compatible marks. | P2 |
| 1439 | Registration Mark for Mimaki | Mimaki-compatible marks. | P2 |
| 1440 | Registration Mark for Mutoh | Mutoh-compatible marks. | P2 |
| 1441 | Color Bar Generation | Add CMYK calibration strip. | P1 |
| 1442 | Color Bar Position (Top Edge) | Top of page. | P1 |
| 1443 | Color Bar Position (Bottom Edge) | Bottom of page. | P1 |
| 1444 | Color Bar Position (Left Edge) | Left of page. | P1 |
| 1445 | Color Bar Position (Right Edge) | Right of page. | P1 |
| 1446 | Color Bar Size | Strip dimensions. | P1 |
| 1447 | Color Bar Custom Colors | User-defined patches. | P2 |
| 1448 | Color Bar Standard Patches | CMYK + RGB + Grayscale. | P1 |
| 1449 | Trim Marks Generation | Add corner trim marks. | P1 |
| 1450 | Trim Marks Length | Mark length. | P1 |
| 1451 | Trim Marks Width | Mark thickness. | P1 |
| 1452 | Trim Marks Color | Mark color. | P1 |
| 1453 | Trim Marks Offset | Distance from page edge. | P1 |
| 1454 | Corner Marks Generation | L-shaped corner marks. | P1 |
| 1455 | Corner Marks Style | L-shape, T-shape, etc. | P1 |
| 1456 | Center Marks Generation | Crosshair at center. | P1 |
| 1457 | Center Marks Style | Cross, dot, circle. | P1 |
| 1458 | Page Numbering | "Page X of Y". | P0 |
| 1459 | Page Numbering Position | Top-left, top-right, etc. | P0 |
| 1460 | Page Numbering Font | Text font. | P0 |
| 1461 | Page Numbering Size | Text size. | P0 |
| 1462 | Page Numbering Color | Text color. | P0 |
| 1463 | Job ID Watermark | Embed job ID. | P2 |
| 1464 | Job ID Watermark Position | Position on page. | P2 |
| 1465 | Job ID Watermark Opacity | Visibility. | P2 |
| 1466 | Job ID Watermark Font | Text style. | P2 |
| 1467 | Date/Time Stamp | Production timestamp. | P2 |
| 1468 | Date/Time Stamp Format | DD/MM/YYYY HH:MM. | P2 |
| 1469 | Date/Time Stamp Position | Page position. | P2 |
| 1470 | QR Code per Sheet | Unique QR for tracking. | P1 |
| 1471 | QR Code Position | Page position. | P1 |
| 1472 | QR Code Size | Dimensions. | P1 |
| 1473 | QR Code Content | Job ID, URL, or custom. | P1 |
| 1474 | Data Matrix per Sheet | Alternative 2D code. | P2 |
| 1475 | Barcode per Sheet | 1D barcode. | P2 |
| 1476 | Job Name on Sheet | Print job name. | P1 |
| 1477 | Customer Name on Sheet | Print customer name. | P1 |
| 1478 | Substrate Name on Sheet | Print material type. | P1 |
| 1479 | Press Settings on Sheet | Print temp/time/pressure. | P1 |
| 1480 | Operator Name on Sheet | Print operator name. | P2 |
| 1481 | Shift Info on Sheet | Morning/Evening/Night. | P3 |
| 1482 | Machine ID on Sheet | Printer/cutter ID. | P2 |
| 1483 | Batch ID on Sheet | Link to upstream batch. | P1 |
| 1484 | Total Pieces on Sheet | Print total count. | P0 |
| 1485 | Pieces Per Page on Sheet | Print page count. | P0 |
| 1486 | Waste Percentage on Sheet | Print efficiency. | P1 |
| 1487 | Custom Footer Text | User-defined footer. | P2 |
| 1488 | Custom Header Text | User-defined header. | P2 |
| 1489 | Footer Position (Top-Left) | Configurable. | P2 |
| 1490 | Footer Position (Top-Right) | Configurable. | P2 |
| 1491 | Footer Position (Bottom-Left) | Configurable. | P2 |
| 1492 | Footer Position (Bottom-Right) | Configurable. | P2 |
| 1493 | Footer Font Size | Text size. | P2 |
| 1494 | Footer Font Family | Text style. | P2 |
| 1495 | Footer Font Color | Text color. | P2 |
| 1496 | Company Logo on Sheet | Branding in margin. | P2 |
| 1497 | Company Logo Position | Page position. | P2 |
| 1498 | Company Logo Size | Dimensions. | P2 |
| 1499 | Company Logo Opacity | Visibility. | P2 |
| 1500 | Company Logo Grayscale | Desaturate logo. | P2 |

---

## Category 16: Export System (1501–1600)

| # | Feature | Description | Priority |
|---|---------|-------------|----------|
| 1501 | PNG Export | Lossless raster. | P0 |
| 1502 | PNG Export with Transparency | Keep alpha. | P0 |
| 1503 | PNG Export without Transparency | Fill background. | P0 |
| 1504 | PNG Export Bit Depth 8-bit | Standard. | P0 |
| 1505 | PNG Export Bit Depth 16-bit | High bit depth. | P2 |
| 1506 | PNG Export Interlaced | Progressive loading. | P2 |
| 1507 | JPG Export | Compressed raster. | P0 |
| 1508 | JPG Export Quality 100% | Maximum quality. | P0 |
| 1509 | JPG Export Quality 90% | High quality. | P0 |
| 1510 | JPG Export Quality 80% | Good quality. | P0 |
| 1511 | JPG Export Quality 70% | Medium quality. | P0 |
| 1512 | JPG Export Quality 60% | Low quality. | P2 |
| 1513 | JPG Export Quality Custom | Any value 0–100. | P0 |
| 1514 | JPG Export Progressive | Progressive loading. | P2 |
| 1515 | JPG Export Baseline | Standard loading. | P2 |
| 1516 | JPG Export Chroma Subsampling | 4:4:4, 4:2:2, 4:2:0. | P3 |
| 1517 | TIFF Export | High-bit-depth. | P2 |
| 1518 | TIFF Export Compression None | Uncompressed. | P2 |
| 1519 | TIFF Export Compression LZW | LZW compression. | P2 |
| 1520 | TIFF Export Compression ZIP | ZIP compression. | P2 |
| 1521 | TIFF Export Compression JPEG | JPEG compression. | P2 |
| 1522 | TIFF Export Bit Depth 8-bit | Standard. | P2 |
| 1523 | TIFF Export Bit Depth 16-bit | High bit depth. | P2 |
| 1524 | TIFF Export Bit Depth 32-bit | Maximum bit depth. | P3 |
| 1525 | BMP Export | Uncompressed bitmap. | P3 |
| 1526 | BMP Export Bit Depth 24-bit | Standard. | P3 |
| 1527 | BMP Export Bit Depth 32-bit | With alpha. | P3 |
| 1528 | WEBP Export | Modern format. | P2 |
| 1529 | WEBP Export Quality | 0–100 quality. | P2 |
| 1530 | WEBP Export Lossless | Lossless mode. | P2 |
| 1531 | PDF Export | Multi-page document. | P0 |
| 1532 | PDF Export Single Page | One page per file. | P0 |
| 1533 | PDF Export Multi-Page | All pages in one file. | P0 |
| 1534 | PDF Export Page Range | Specific pages only. | P1 |
| 1535 | PDF Export Compression | Compress images in PDF. | P1 |
| 1536 | PDF Export Image Quality | Image compression level. | P1 |
| 1537 | PDF Export Downsample | Reduce image resolution. | P2 |
| 1538 | PDF Export Color Space | RGB or CMYK. | P1 |
| 1539 | PDF Export Bleed Marks | Include bleed marks. | P0 |
| 1540 | PDF Export Crop Marks | Include crop marks. | P0 |
| 1541 | PDF Export Registration Marks | Include registration. | P0 |
| 1542 | PDF Export Color Bars | Include color bars. | P0 |
| 1543 | PDF Export Page Info | Include page metadata. | P1 |
| 1544 | PDF Export Password Protection | Encrypt PDF. | P3 |
| 1545 | PDF Export Print Permission | Restrict printing. | P3 |
| 1546 | PDF Export Copy Permission | Restrict copying. | P3 |
| 1547 | PDF Export Edit Permission | Restrict editing. | P3 |
| 1548 | PDF Export PDF/A Compliance | Archive standard. | P3 |
| 1549 | PDF Export PDF/X Compliance | Print standard. | P2 |
| 1550 | PDF Export PDF/X-1a | CMYK only standard. | P2 |
| 1551 | PDF Export PDF/X-3 | ICC profile standard. | P2 |
| 1552 | PDF Export PDF/X-4 | Transparency standard. | P2 |
| 1553 | ZIP Export | Bundle all files. | P1 |
| 1554 | ZIP Export with Folder Structure | Organized subfolders. | P1 |
| 1555 | ZIP Export Compression Level | Store, fast, normal, maximum. | P1 |
| 1556 | ZIP Export Password | Encrypt ZIP. | P2 |
| 1557 | Single Page Export | Export only current page. | P0 |
| 1558 | All Pages Export | Export complete job. | P0 |
| 1559 | Selected Pages Export | Export specific range. | P1 |
| 1560 | Selected Objects Export | Export only selected items. | P1 |
| 1561 | Export with Bleed | Include bleed area. | P0 |
| 1562 | Export without Bleed | Trim bleed area. | P0 |
| 1563 | Export with Cut Marks | Include cutting guides. | P0 |
| 1564 | Export without Cut Marks | Clean output. | P0 |
| 1565 | Export with Safe Guides | Include safe zones. | P0 |
| 1566 | Export without Safe Guides | Clean output. | P0 |
| 1567 | Export with Registration Marks | Include alignment marks. | P0 |
| 1568 | Export without Registration Marks | Clean output. | P0 |
| 1569 | Export with Color Bars | Include calibration strip. | P0 |
| 1570 | Export without Color Bars | Clean output. | P0 |
| 1571 | Export Mirrored Horizontal | Mirror entire page left-to-right. | P0 |
| 1572 | Export Mirrored Vertical | Mirror entire page top-to-bottom. | P0 |
| 1573 | Export Mirrored Both | Mirror both axes. | P2 |
| 1574 | Export Normal + Mirrored Together | Generate both versions. | P1 |
| 1575 | Export Normal + Mirrored Separate | Generate separate files. | P1 |
| 1576 | Export Mirrored Filename Suffix | Add _mirrored to filename. | P1 |
| 1577 | Export Normal Filename Suffix | Add _normal to filename. | P1 |
| 1578 | Export at 300 DPI | Standard resolution. | P0 |
| 1579 | Export at 600 DPI | High resolution. | P1 |
| 1580 | Export at 150 DPI | Draft resolution. | P2 |
| 1581 | Export at 72 DPI | Screen resolution. | P2 |
| 1582 | Export at Custom DPI | Any user-defined value. | P0 |
| 1583 | Export Color Profile Embedded | Include ICC profile. | P1 |
| 1584 | Export Color Profile sRGB | Standard web profile. | P1 |
| 1585 | Export Color Profile Adobe RGB | Wide gamut profile. | P2 |
| 1586 | Export Color Profile ProPhoto RGB | Maximum gamut. | P3 |
| 1587 | Export Color Profile CMYK | Print profile. | P2 |
| 1588 | Export Color Profile Custom | User-defined profile. | P2 |
| 1589 | Export without Color Profile | Strip ICC data. | P2 |
| 1590 | Export with Transparency | Preserve alpha channel. | P0 |
| 1591 | Export with White Background | Fill transparent with white. | P0 |
| 1592 | Export with Black Background | Fill transparent with black. | P2 |
| 1593 | Export with Custom Background | Fill with user color. | P2 |
| 1594 | Export with Transparent Background | Keep alpha. | P0 |
| 1595 | Export File Naming Pattern | Custom pattern. | P1 |
| 1596 | Export Filename Auto-Increment | Auto-number files. | P1 |
| 1597 | Export Filename Date Stamp | Include date. | P1 |
| 1598 | Export Filename Time Stamp | Include time. | P1 |
| 1599 | Export Filename Job ID | Include job number. | P1 |
| 1600 | Export Filename Page Number | Include page number. | P1 |

---

## Category 17: Hardware Integration — Printers (1601–1700)

| # | Feature | Description | Priority |
|---|---------|-------------|----------|
| 1601 | Printer Discovery (Network) | Auto-find network printers. | P1 |
| 1602 | Printer Discovery (USB) | Auto-detect USB printers. | P1 |
| 1603 | Printer Discovery (Manual IP) | Add by IP address. | P1 |
| 1604 | Printer Discovery (Bonjour/mDNS) | Apple-style discovery. | P2 |
| 1605 | Printer Discovery (WSD) | Windows Web Services. | P2 |
| 1606 | Printer List View | Show all discovered printers. | P1 |
| 1607 | Printer Status Online | Printer ready. | P1 |
| 1608 | Printer Status Offline | Printer disconnected. | P1 |
| 1609 | Printer Status Error | Printer error state. | P1 |
| 1610 | Printer Status Busy | Printer printing. | P1 |
| 1611 | Printer Status Idle | Printer waiting. | P1 |
| 1612 | Printer Status Paper Out | No paper loaded. | P1 |
| 1613 | Printer Status Paper Jam | Paper jam detected. | P1 |
| 1614 | Printer Status Ink Low | Low ink warning. | P1 |
| 1615 | Printer Status Ink Out | Empty ink warning. | P1 |
| 1616 | Printer Status Cover Open | Cover not closed. | P1 |
| 1617 | Printer Status Maintenance Required | Service needed. | P1 |
| 1618 | Printer Status Temperature | Head temperature. | P2 |
| 1619 | Printer Status Humidity | Environment humidity. | P3 |
| 1620 | Printer Ink Level Cyan | Cyan percentage. | P2 |
| 1621 | Printer Ink Level Magenta | Magenta percentage. | P2 |
| 1622 | Printer Ink Level Yellow | Yellow percentage. | P2 |
| 1623 | Printer Ink Level Black | Black percentage. | P2 |
| 1624 | Printer Ink Level Light Cyan | Light cyan percentage. | P2 |
| 1625 | Printer Ink Level Light Magenta | Light magenta percentage. | P2 |
| 1626 | Printer Ink Level Orange | Orange percentage. | P3 |
| 1627 | Printer Ink Level Green | Green percentage. | P3 |
| 1628 | Printer Ink Level White | White ink percentage. | P3 |
| 1629 | Printer Ink Level Fluorescent | Fluorescent ink percentage. | P3 |
| 1630 | Printer Ink Level Metallic | Metallic ink percentage. | P3 |
| 1631 | Printer Paper Size Loaded | Detect loaded paper. | P2 |
| 1632 | Printer Paper Type Loaded | Detect paper type. | P2 |
| 1633 | Printer Paper Remaining | Estimate sheets/meters left. | P2 |
| 1634 | Printer Queue View | Show queued jobs. | P2 |
| 1635 | Printer Queue Add | Add job to queue. | P2 |
| 1636 | Printer Queue Remove | Remove from queue. | P2 |
| 1637 | Printer Queue Reorder | Change print order. | P2 |
| 1638 | Printer Queue Pause | Pause printing. | P2 |
| 1639 | Printer Queue Resume | Resume printing. | P2 |
| 1640 | Printer Queue Cancel | Cancel current job. | P2 |
| 1641 | Printer Queue Cancel All | Cancel all jobs. | P2 |
| 1642 | Printer Queue Priority | Set job priority. | P2 |
| 1643 | Printer Queue Status | Show job status. | P2 |
| 1644 | Printer Queue Progress | Show print progress. | P2 |
| 1645 | Direct Print from Software | Send without external RIP. | P2 |
| 1646 | Direct Print Settings | Quality, paper, color. | P2 |
| 1647 | Direct Print Preview | Preview before sending. | P2 |
| 1648 | Direct Print Mirror | Mirror before sending. | P2 |
| 1649 | Direct Print Color Profile | Select ICC profile. | P2 |
| 1650 | Direct Print DPI | Set print resolution. | P2 |
| 1651 | Print Spooler Integration | Windows spooler. | P2 |
| 1652 | Print Spooler Priority | Set spooler priority. | P2 |
| 1653 | Print Spooler Status | Monitor spooler state. | P2 |
| 1654 | Hot Folder Output | Save to watched folder. | P1 |
| 1655 | Hot Folder Path Setting | Choose folder path. | P1 |
| 1656 | Hot Folder Auto-Create | Create if missing. | P1 |
| 1657 | Hot Folder Subfolder by Date | Organize by date. | P2 |
| 1658 | Hot Folder Subfolder by Job | Organize by job ID. | P2 |
| 1659 | Hot Folder Filename Pattern | Custom naming. | P2 |
| 1660 | Hot Folder Overwrite Protection | Warn if exists. | P2 |
| 1661 | RIP Software Detection | Auto-detect installed RIP. | P2 |
| 1662 | RIP Software List | Show detected RIPs. | P2 |
| 1663 | Caldera VisualRIP+ Integration | Direct Caldera connection. | P2 |
| 1664 | Caldera Hot Folder | Drop to Caldera folder. | P2 |
| 1665 | Caldera API | Direct API call. | P3 |
| 1666 | Caldera JDF Export | Export JDF metadata. | P3 |
| 1667 | Wasatch SoftRIP Integration | Direct Wasatch connection. | P2 |
| 1668 | Wasatch Hot Folder | Drop to Wasatch folder. | P2 |
| 1669 | Wasatch SDK | Direct SDK integration. | P3 |
| 1670 | Onyx Thrive Integration | Direct Onyx connection. | P2 |
| 1671 | Onyx Hot Folder | Drop to Onyx folder. | P2 |
| 1672 | Onyx JDF Export | Export JDF metadata. | P3 |
| 1673 | Ergosoft RIP Integration | Direct Ergosoft connection. | P2 |
| 1674 | Ergosoft Hot Folder | Drop to Ergosoft folder. | P2 |
| 1675 | Ergosoft API | Direct API integration. | P3 |
| 1676 | Roland VersaWorks Integration | Roland RIP connection. | P2 |
| 1677 | Roland Hot Folder | Drop to Roland folder. | P2 |
| 1678 | Mimaki RasterLink Integration | Mimaki RIP connection. | P2 |
| 1679 | Mimaki Hot Folder | Drop to Mimaki folder. | P2 |
| 1680 | Mutoh SmartLINC Integration | Mutoh RIP connection. | P2 |
| 1681 | Mutoh Hot Folder | Drop to Mutoh folder. | P2 |
| 1682 | SAi Flexi Integration | Flexi RIP connection. | P2 |
| 1683 | SAi Hot Folder | Drop to Flexi folder. | P2 |
| 1684 | Printer Profile per Substrate | Auto-select profile. | P1 |
| 1685 | Printer Profile per Paper | Auto-select profile. | P1 |
| 1686 | Printer Profile per Ink | Auto-select profile. | P1 |
| 1687 | Printer Profile Custom Upload | Upload custom ICC. | P2 |
| 1688 | Printer Profile Management | Organize profiles. | P2 |
| 1689 | Printer Profile Preview | Preview color with profile. | P2 |
| 1690 | Printer Calibration Wizard | Step-by-step calibration. | P2 |
| 1691 | Printer Nozzle Check | Print test pattern. | P1 |
| 1692 | Printer Head Alignment | Print alignment pattern. | P1 |
| 1693 | Printer Head Cleaning | Initiate cleaning cycle. | P2 |
| 1694 | Printer Head Deep Cleaning | Deep clean cycle. | P2 |
| 1695 | Printer Ink Pad Reset | Reset waste ink counter. | P3 |
| 1696 | Printer Firmware Check | Check firmware version. | P3 |
| 1697 | Printer Firmware Update | Update firmware. | P3 |
| 1698 | Printer Maintenance Log | Track maintenance history. | P2 |
| 1699 | Printer Maintenance Alert | Alert when service due. | P2 |
| 1700 | Printer Maintenance Schedule | Set maintenance intervals. | P2 |

---

## Category 18: Hardware Integration — Cutters (1701–1800)

| # | Feature | Description | Priority |
|---|---------|-------------|----------|
| 1701 | Cutter Discovery (Network) | Auto-find network cutters. | P2 |
| 1702 | Cutter Discovery (USB) | Auto-detect USB cutters. | P2 |
| 1703 | Cutter Discovery (Serial) | Auto-detect serial cutters. | P2 |
| 1704 | Cutter List View | Show all discovered cutters. | P2 |
| 1705 | Cutter Status Online | Cutter ready. | P2 |
| 1706 | Cutter Status Offline | Cutter disconnected. | P2 |
| 1707 | Cutter Status Error | Cutter error state. | P2 |
| 1708 | Cutter Status Busy | Cutter cutting. | P2 |
| 1709 | Cutter Status Idle | Cutter waiting. | P2 |
| 1710 | Cutter Status Blade Worn | Blade replacement needed. | P2 |
| 1711 | Cutter Status Blade Broken | Blade damaged. | P2 |
| 1712 | Cutter Status Mat Worn | Cutting mat replacement. | P3 |
| 1713 | Cutter Status Cover Open | Cover not closed. | P2 |
| 1714 | Cutter Blade Pressure Setting | Adjust pressure. | P3 |
| 1715 | Cutter Blade Pressure Preset | Light, Medium, Heavy. | P3 |
| 1716 | Cutter Blade Pressure Custom | User-defined value. | P3 |
| 1717 | Cutter Speed Setting | Adjust cutting speed. | P3 |
| 1718 | Cutter Speed Preset | Slow, Medium, Fast. | P3 |
| 1719 | Cutter Speed Custom | User-defined value. | P3 |
| 1720 | Cutter Offset Setting | Blade offset compensation. | P3 |
| 1721 | Cutter Offset Auto-Detect | Auto-measure offset. | P3 |
| 1722 | Cutter Offset Manual | User-defined offset. | P3 |
| 1723 | Cutter Overcut Setting | Extend cut beyond corner. | P3 |
| 1724 | Cutter Overcut Auto | Automatic overcut. | P3 |
| 1725 | Cutter Overcut Manual | User-defined overcut. | P3 |
| 1726 | Cutter Corner Action | Miter, round, bevel. | P3 |
| 1727 | Cutter Weed Border | Add weeding border. | P3 |
| 1728 | Cutter Weed Lines | Add internal weed lines. | P3 |
| 1729 | Cutter Weed Box | Add rectangular weed box. | P3 |
| 1730 | Cutter Registration Mark Type | Choose mark style. | P2 |
| 1731 | Cutter Registration Mark Size | Mark dimensions. | P2 |
| 1732 | Cutter Registration Mark Position | Mark placement. | P2 |
| 1733 | Cutter Media Size Setting | Set loaded media size. | P2 |
| 1734 | Cutter Media Type Setting | Set loaded media type. | P2 |
| 1735 | Cutter Media Origin | Set origin point. | P2 |
| 1736 | Cutter Media Auto-Detect | Auto-measure media. | P2 |
| 1737 | Cutter Queue View | Show queued jobs. | P2 |
| 1738 | Cutter Queue Add | Add job to queue. | P2 |
| 1739 | Cutter Queue Remove | Remove from queue. | P2 |
| 1740 | Cutter Queue Reorder | Change cut order. | P2 |
| 1741 | Cutter Queue Pause | Pause cutting. | P2 |
| 1742 | Cutter Queue Resume | Resume cutting. | P2 |
| 1743 | Cutter Queue Cancel | Cancel current job. | P2 |
| 1744 | Cutter Queue Cancel All | Cancel all jobs. | P2 |
| 1745 | Cutter Direct Send | Send contour from software. | P2 |
| 1746 | Cutter Direct Send Preview | Preview cut path. | P2 |
| 1747 | Cutter Direct Send Mirror | Mirror before sending. | P2 |
| 1748 | Cutter Direct Send Scale | Scale before sending. | P2 |
| 1749 | Cutter Direct Send Rotate | Rotate before sending. | P2 |
| 1750 | Summa GoSign Integration | Direct Summa control. | P3 |
| 1751 | Summa Hot Folder | Drop to Summa folder. | P3 |
| 1752 | Summa API | Direct API integration. | P3 |
| 1753 | Graphtec Cutting Master Integration | Direct Graphtec control. | P3 |
| 1754 | Graphtec Hot Folder | Drop to Graphtec folder. | P3 |
| 1755 | Graphtec API | Direct API integration. | P3 |
| 1756 | Zünd Cut Center Integration | Direct Zünd control. | P3 |
| 1757 | Zünd Hot Folder | Drop to Zünd folder. | P3 |
| 1758 | Zünd API | Direct API integration. | P3 |
| 1759 | Roland CutStudio Integration | Roland cutter control. | P3 |
| 1760 | Roland Hot Folder | Drop to Roland folder. | P3 |
| 1761 | Mimaki FineCut Integration | Mimaki cutter control. | P3 |
| 1762 | Mimaki Hot Folder | Drop to Mimaki folder. | P3 |
| 1763 | GCC GreatCut Integration | GCC cutter control. | P3 |
| 1764 | GCC Hot Folder | Drop to GCC folder. | P3 |
| 1765 | USCutter VinylMaster Integration | USCutter control. | P3 |
| 1766 | USCutter Hot Folder | Drop to USCutter folder. | P3 |
| 1767 | Cutter Contour Path Auto-Detect | Auto-detect from transparency. | P1 |
| 1768 | Cutter Contour Path Manual | User-drawn contour. | P1 |
| 1769 | Cutter Contour Path Offset | Inset/outset contour. | P1 |
| 1770 | Cutter Contour Path Smooth | Smooth jagged edges. | P1 |
| 1771 | Cutter Contour Path Simplify | Reduce points. | P1 |
| 1772 | Cutter Contour Path Preview | Show contour on design. | P1 |
| 1773 | Cutter Contour Path Export SVG | Export as SVG. | P1 |
| 1774 | Cutter Contour Path Export DXF | Export as DXF. | P1 |
| 1775 | Cutter Contour Path Export PLT | Export as PLT. | P2 |
| 1776 | Cutter Contour Path Export AI | Export as AI. | P2 |
| 1777 | Cutter Contour Path Export PDF | Export as PDF. | P2 |
| 1778 | Cutter Contour Path Color | Set contour line color. | P1 |
| 1779 | Cutter Contour Path Width | Set contour line width. | P1 |
| 1780 | Cutter Contour Path Layer | Assign to specific layer. | P1 |
| 1781 | Cutter Contour Path Registration | Add registration marks. | P1 |
| 1782 | Cutter Contour Path Weed Lines | Add weeding lines. | P2 |
| 1783 | Cutter Contour Path Weed Box | Add weeding box. | P2 |
| 1784 | Cutter Contour Path Perforation | Add perf cut. | P3 |
| 1785 | Cutter Contour Path Perforation Length | Perf segment length. | P3 |
| 1786 | Cutter Contour Path Perforation Gap | Perf gap length. | P3 |
| 1787 | Cutter Blade Type Selection | Standard, deep cut, fabric, etc. | P3 |
| 1788 | Cutter Blade Depth Setting | Adjust blade extension. | P3 |
| 1789 | Cutter Multi-Tool Support | Pen, scoring, etc. | P3 |
| 1790 | Cutter Multi-Tool Assignment | Assign contour to tool. | P3 |
| 1791 | Cutter Pen Tool | Draw with pen instead of cut. | P3 |
| 1792 | Cutter Score Tool | Score fold lines. | P3 |
| 1793 | Cutter Engrave Tool | Engrave instead of cut. | P3 |
| 1794 | Cutter Kiss Cut | Cut top layer only. | P3 |
| 1795 | Cutter Die Cut | Cut through all layers. | P3 |
| 1796 | Cutter Half Cut | Partial depth cut. | P3 |
| 1797 | Cutter Crease | Fold line without cut. | P3 |
| 1798 | Cutter Maintenance Log | Track maintenance. | P2 |
| 1799 | Cutter Maintenance Alert | Alert when service due. | P2 |
| 1800 | Cutter Maintenance Schedule | Set maintenance intervals. | P2 |

---

## Category 19: Color Management (1801–1900)

| # | Feature | Description | Priority |
|---|---------|-------------|----------|
| 1801 | ICC Profile Selection | Choose color profile. | P1 |
| 1802 | ICC Profile per Substrate | Profile for each material. | P1 |
| 1803 | ICC Profile per Printer | Profile for each printer. | P1 |
| 1804 | ICC Profile per Ink | Profile for each ink set. | P1 |
| 1805 | ICC Profile per Paper | Profile for each paper type. | P1 |
| 1806 | ICC Profile per Combination | Profile for specific combo. | P1 |
| 1807 | ICC Profile Custom Upload | Upload custom profile. | P2 |
| 1808 | ICC Profile Download | Download from manufacturer. | P2 |
| 1809 | ICC Profile Management | Organize profiles. | P2 |
| 1810 | ICC Profile Preview | Preview with profile. | P2 |
| 1811 | ICC Profile Info | Show profile details. | P2 |
| 1812 | ICC Profile Validation | Verify profile integrity. | P2 |
| 1813 | ICC Profile Embedding | Embed in export. | P1 |
| 1814 | ICC Profile Stripping | Remove from export. | P2 |
| 1815 | Soft Proofing | Simulate print colors. | P2 |
| 1816 | Soft Proofing Toggle | On/off switch. | P2 |
| 1817 | Soft Proofing Profile | Choose simulation profile. | P2 |
| 1818 | Soft Proofing Paper Color | Simulate paper white. | P2 |
| 1819 | Soft Proofing Ink Limit | Simulate ink limit. | P2 |
| 1820 | Gamut Warning | Highlight out-of-gamut colors. | P2 |
| 1821 | Gamut Warning Toggle | On/off switch. | P2 |
| 1822 | Gamut Warning Color | Choose warning highlight color. | P2 |
| 1823 | Gamut Warning Opacity | Adjust warning visibility. | P2 |
| 1824 | Color Blindness Preview | Simulate color blindness. | P3 |
| 1825 | Color Blindness Protanopia | Red-blind simulation. | P3 |
| 1826 | Color Blindness Deuteranopia | Green-blind simulation. | P3 |
| 1827 | Color Blindness Tritanopia | Blue-blind simulation. | P3 |
| 1828 | Color Blindness Achromatopsia | Total color blindness. | P3 |
| 1829 | Black Point Compensation | Preserve shadow detail. | P3 |
| 1830 | White Point Adaptation | Adjust for paper white. | P3 |
| 1831 | Rendering Intent Perceptual | Smooth transitions. | P2 |
| 1832 | Rendering Intent Relative Colorimetric | Preserve in-gamut. | P2 |
| 1833 | Rendering Intent Saturation | Maximize vibrancy. | P2 |
| 1834 | Rendering Intent Absolute Colorimetric | Exact matching. | P2 |
| 1835 | Rendering Intent Auto | Auto-select best intent. | P2 |
| 1836 | Monitor Calibration Reminder | Remind to calibrate. | P3 |
| 1837 | Monitor Calibration Date | Track last calibration. | P3 |
| 1838 | Monitor Calibration Wizard | Step-by-step calibration. | P3 |
| 1839 | Color Temperature Adjustment | Warm/cool preview. | P3 |
| 1840 | Brightness Compensation | Adjust for screen brightness. | P3 |
| 1841 | Contrast Compensation | Adjust for screen contrast. | P3 |
| 1842 | Custom Color Profile Creation | Create from test print. | P3 |
| 1843 | Custom Color Profile Measurement | Measure with colorimeter. | P3 |
| 1844 | Custom Color Profile Iteration | Refine profile. | P3 |
| 1845 | Color Profile Comparison | Compare two profiles. | P3 |
| 1846 | Delta E Color Difference | Show color accuracy. | P3 |
| 1847 | Delta E Threshold | Set acceptable difference. | P3 |
| 1848 | Spot Color Support | Pantone/Custom spots. | P3 |
| 1849 | Spot Color Library | Built-in spot colors. | P3 |
| 1850 | Spot Color Custom | User-defined spot colors. | P3 |
| 1851 | Color Separation Preview | View CMYK channels. | P2 |
| 1852 | Color Separation Cyan Channel | View cyan only. | P2 |
| 1853 | Color Separation Magenta Channel | View magenta only. | P2 |
| 1854 | Color Separation Yellow Channel | View yellow only. | P2 |
| 1855 | Color Separation Black Channel | View black only. | P2 |
| 1856 | Color Separation RGB Channels | View RGB channels. | P2 |
| 1857 | Color Separation Lab Channels | View Lab channels. | P3 |
| 1858 | Undercolor Removal (UCR) | Reduce CMY in shadows. | P3 |
| 1859 | Gray Component Replacement (GCR) | Replace CMY with K. | P3 |
| 1860 | Total Ink Limit | Max ink coverage. | P2 |
| 1861 | Total Ink Limit Display | Show current coverage. | P2 |
| 1862 | Total Ink Limit Warning | Warn if exceeded. | P2 |
| 1863 | Total Ink Limit Auto-Reduce | Reduce automatically. | P3 |
| 1864 | Ink Coverage Preview | Visual density map. | P2 |
| 1865 | Ink Coverage Cyan | Cyan coverage percentage. | P2 |
| 1866 | Ink Coverage Magenta | Magenta coverage percentage. | P2 |
| 1867 | Ink Coverage Yellow | Yellow coverage percentage. | P2 |
| 1868 | Ink Coverage Black | Black coverage percentage. | P2 |
| 1869 | Ink Coverage Total | Total coverage percentage. | P2 |
| 1870 | Rich Black Definition | Custom rich black recipe. | P2 |
| 1871 | Rich Black Cyan | Cyan component. | P2 |
| 1872 | Rich Black Magenta | Magenta component. | P2 |
| 1873 | Rich Black Yellow | Yellow component. | P2 |
| 1874 | Rich Black Black | Black component. | P2 |
| 1875 | Pure Black Override | Force 100K for text. | P2 |
| 1876 | Color Replacement Table | Map input to output colors. | P3 |
| 1877 | Color Replacement Table Load | Load saved table. | P3 |
| 1878 | Color Replacement Table Save | Save current table. | P3 |
| 1879 | Batch Color Correction | Apply to batch. | P2 |
| 1880 | Color Consistency Check | Ensure batch uniformity. | P2 |
| 1881 | Color Consistency Report | Show variation metrics. | P2 |
| 1882 | Color Measurement Device Support | X-Rite/i1 integration. | P3 |
| 1883 | Color Measurement Device Calibration | Calibrate device. | P3 |
| 1884 | Color Measurement Device Profile | Create profile from device. | P3 |
| 1885 | Color Measurement Spot Read | Read specific color. | P3 |
| 1886 | Color Measurement Scan Read | Scan entire sheet. | P3 |
| 1887 | Color Measurement Compare | Compare to target. | P3 |
| 1888 | Color Measurement Delta E | Show difference. | P3 |
| 1889 | Color Measurement Report | Export measurement data. | P3 |
| 1890 | Color Measurement Trend | Track over time. | P3 |
| 1891 | Paper White Simulation | Simulate substrate color. | P2 |
| 1892 | Paper White Custom | User-defined paper color. | P2 |
| 1893 | Paper White Standard | Built-in paper whites. | P2 |
| 1894 | Ink Limit per Channel | Max per channel. | P2 |
| 1895 | Ink Limit per Channel Cyan | Cyan max. | P2 |
| 1896 | Ink Limit per Channel Magenta | Magenta max. | P2 |
| 1897 | Ink Limit per Channel Yellow | Yellow max. | P2 |
| 1898 | Ink Limit per Channel Black | Black max. | P2 |
| 1899 | Ink Limit per Channel Light Cyan | Light cyan max. | P3 |
| 1900 | Ink Limit per Channel Light Magenta | Light magenta max. | P3 |

---

## Category 20: Settings & System (1901–2000)

| # | Feature | Description | Priority |
|---|---------|-------------|----------|
| 1901 | Company Name Setting | Business name. | P1 |
| 1902 | Company Address Setting | Business address. | P1 |
| 1903 | Company Phone Setting | Business phone. | P1 |
| 1904 | Company Email Setting | Business email. | P1 |
| 1905 | Company Logo Upload | Business logo. | P1 |
| 1906 | Company Logo Preview | Preview uploaded logo. | P1 |
| 1907 | Company Logo Remove | Delete logo. | P1 |
| 1908 | Company Logo Replace | Swap logo. | P1 |
| 1909 | Default Page Size Preset | A4/A3/roll default. | P0 |
| 1910 | Default Page Size Portrait | Portrait default. | P0 |
| 1911 | Default Page Size Landscape | Landscape default. | P0 |
| 1912 | Default Margin Top | Top margin default. | P0 |
| 1913 | Default Margin Bottom | Bottom margin default. | P0 |
| 1914 | Default Margin Left | Left margin default. | P0 |
| 1915 | Default Margin Right | Right margin default. | P0 |
| 1916 | Default Margin All Same | Link all margins. | P0 |
| 1917 | Default Gap Horizontal | Horizontal gap default. | P0 |
| 1918 | Default Gap Vertical | Vertical gap default. | P0 |
| 1919 | Default Gap All Same | Link both gaps. | P0 |
| 1920 | Default DPI | 300 or 600 default. | P0 |
| 1921 | Default Export Folder | Auto-save location. | P0 |
| 1922 | Default Export Folder Browse | Choose folder. | P0 |
| 1923 | Default Export Folder Auto-Create | Create if missing. | P0 |
| 1924 | Default Mirror Setting | Auto-mirror on/off. | P0 |
| 1925 | Default Cut Mark Setting | On/off default. | P0 |
| 1926 | Default Safe Guide Setting | On/off default. | P0 |
| 1927 | Default Registration Mark Setting | On/off default. | P0 |
| 1928 | Default Color Bar Setting | On/off default. | P0 |
| 1929 | Default Page Numbering Setting | On/off default. | P0 |
| 1930 | Default Watermark Setting | On/off default. | P0 |
| 1931 | Theme Selection Dark | Dark mode. | P1 |
| 1932 | Theme Selection Light | Light mode. | P1 |
| 1933 | Theme Selection High Contrast | Accessibility mode. | P2 |
| 1934 | Theme Selection Custom | User-defined colors. | P3 |
| 1935 | Theme Accent Color | Choose accent color. | P2 |
| 1936 | Theme Background Color | Choose background. | P3 |
| 1937 | Theme Text Color | Choose text color. | P3 |
| 1938 | Theme Font Size | Adjust UI font size. | P2 |
| 1939 | Theme Font Family | Choose UI font. | P3 |
| 1940 | Language Selection English | English UI. | P2 |
| 1941 | Language Selection Hindi | Hindi UI. | P3 |
| 1942 | Language Selection Tamil | Tamil UI. | P3 |
| 1943 | Language Selection Telugu | Telugu UI. | P3 |
| 1944 | Language Selection Marathi | Marathi UI. | P3 |
| 1945 | Language Selection Gujarati | Gujarati UI. | P3 |
| 1946 | Language Selection Bengali | Bengali UI. | P3 |
| 1947 | Language Selection Kannada | Kannada UI. | P3 |
| 1948 | Language Selection Malayalam | Malayalam UI. | P3 |
| 1949 | Language Selection Punjabi | Punjabi UI. | P3 |
| 1950 | Language Selection Urdu | Urdu UI. | P3 |
| 1951 | Date Format DD/MM/YYYY | Standard Indian format. | P2 |
| 1952 | Date Format MM/DD/YYYY | US format. | P2 |
| 1953 | Date Format YYYY-MM-DD | ISO format. | P2 |
| 1954 | Time Format 12-Hour | AM/PM format. | P2 |
| 1955 | Time Format 24-Hour | Military format. | P2 |
| 1956 | Currency Symbol ₹ | Indian Rupee. | P3 |
| 1957 | Currency Symbol $ | US Dollar. | P3 |
| 1958 | Currency Symbol € | Euro. | P3 |
| 1959 | Currency Symbol £ | British Pound. | P3 |
| 1960 | Measurement Unit Default mm | Millimeters. | P0 |
| 1961 | Measurement Unit Default inch | Inches. | P0 |
| 1962 | Measurement Unit Default pixel | Pixels. | P0 |
| 1963 | Measurement Unit Default cm | Centimeters. | P0 |
| 1964 | Measurement Unit Default pt | Points. | P2 |
| 1965 | Measurement Unit Default pica | Picas. | P3 |
| 1966 | Keyboard Shortcuts Editor | Customize shortcuts. | P2 |
| 1967 | Keyboard Shortcuts Reset | Reset to default. | P2 |
| 1968 | Keyboard Shortcuts Import | Import custom shortcuts. | P3 |
| 1969 | Keyboard Shortcuts Export | Export custom shortcuts. | P3 |
| 1970 | Keyboard Shortcuts Cheat Sheet | Printable reference. | P2 |
| 1971 | Export Preset Manager | Save/load export configs. | P1 |
| 1972 | Export Preset Save | Save current config. | P1 |
| 1973 | Export Preset Load | Apply saved config. | P1 |
| 1974 | Export Preset Rename | Change preset name. | P1 |
| 1975 | Export Preset Delete | Remove preset. | P1 |
| 1976 | Export Preset Duplicate | Clone preset. | P1 |
| 1977 | Print Preset Manager | Save/load print configs. | P1 |
| 1978 | Print Preset Save | Save current config. | P1 |
| 1979 | Print Preset Load | Apply saved config. | P1 |
| 1980 | Print Preset Rename | Change preset name. | P1 |
| 1981 | Print Preset Delete | Remove preset. | P1 |
| 1982 | Print Preset Duplicate | Clone preset. | P1 |
| 1983 | Substrate Preset Manager | Save/load substrate profiles. | P1 |
| 1984 | Substrate Preset Save | Save current profile. | P1 |
| 1985 | Substrate Preset Load | Apply saved profile. | P1 |
| 1986 | Substrate Preset Rename | Change profile name. | P1 |
| 1987 | Substrate Preset Delete | Remove profile. | P1 |
| 1988 | Substrate Preset Duplicate | Clone profile. | P1 |
| 1989 | Substrate Preset Import | Import from file. | P2 |
| 1990 | Substrate Preset Export | Export to file. | P2 |
| 1991 | User Profile Worker Mode | Limited access. | P1 |
| 1992 | User Profile Admin Mode | Full access. | P1 |
| 1993 | User Profile Switch | Toggle between modes. | P1 |
| 1994 | Password Protection Admin | Lock admin settings. | P2 |
| 1995 | Password Protection Project | Lock specific projects. | P2 |
| 1996 | Auto-Lock Timeout | Lock after inactivity. | P2 |
| 1997 | Auto-Lock Timeout Duration | Set minutes. | P2 |
| 1998 | Backup Schedule Daily | Backup every day. | P1 |
| 1999 | Backup Schedule Weekly | Backup every week. | P1 |
| 2000 | Backup Schedule Monthly | Backup every month. | P2 |

---

## Category 21: Settings & System Advanced (2001–2100)

| # | Feature | Description | Priority |
|---|---------|-------------|----------|
| 2001 | Backup Location Selection | Choose backup folder. | P1 |
| 2002 | Backup Location Browse | Browse for folder. | P1 |
| 2003 | Backup Location Auto-Create | Create if missing. | P1 |
| 2004 | Backup Location External Drive | Backup to USB. | P2 |
| 2005 | Backup Location Network Share | Backup to NAS. | P2 |
| 2006 | Backup Retention Count | Keep last N backups. | P2 |
| 2007 | Backup Retention Days | Delete after N days. | P2 |
| 2008 | Backup Compression | Compress backup files. | P2 |
| 2009 | Backup Encryption | Encrypt backup files. | P3 |
| 2010 | Backup Verification | Check integrity after backup. | P2 |
| 2011 | Backup Notification | Alert on completion. | P2 |
| 2012 | Backup Manual Trigger | One-click backup now. | P1 |
| 2013 | Restore from Backup | Select backup to restore. | P1 |
| 2014 | Restore Preview | Preview backup contents. | P2 |
| 2015 | Restore Selective | Restore specific items. | P2 |
| 2016 | Restore Full | Restore everything. | P1 |
| 2017 | Log Level Debug | Maximum detail. | P2 |
| 2018 | Log Level Info | Standard detail. | P2 |
| 2019 | Log Level Warning | Warnings and errors only. | P2 |
| 2020 | Log Level Error | Errors only. | P2 |
| 2021 | Log File Max Size | Limit log file size. | P2 |
| 2022 | Log File Max Count | Keep last N log files. | P2 |
| 2023 | Log File Auto-Archive | Archive old logs. | P2 |
| 2024 | Log File Export | Export logs. | P2 |
| 2025 | Log File Clear | Delete all logs. | P2 |
| 2026 | Update Channel Stable | Stable releases only. | P2 |
| 2027 | Update Channel Beta | Beta releases. | P3 |
| 2028 | Update Channel Alpha | Alpha releases. | P3 |
| 2029 | Update Auto-Check | Check on launch. | P2 |
| 2030 | Update Manual Check | Check on demand. | P2 |
| 2031 | Update Download | Download update package. | P2 |
| 2032 | Update Install | Install downloaded update. | P2 |
| 2033 | Update Schedule | Install at specific time. | P2 |
| 2034 | Update Rollback | Revert to previous version. | P2 |
| 2035 | Update Changelog | Show what's new. | P2 |
| 2036 | Update Offline Package | Install from USB/file. | P2 |
| 2037 | Factory Reset | Wipe all data. | P2 |
| 2038 | Factory Reset Confirm | Require confirmation. | P2 |
| 2039 | Factory Reset Backup First | Auto-backup before reset. | P2 |
| 2040 | Factory Reset Selective | Reset specific modules. | P3 |
| 2041 | System Info Display | Show PC specs. | P2 |
| 2042 | System Info CPU | Processor details. | P2 |
| 2043 | System Info RAM | Memory details. | P2 |
| 2044 | System Info GPU | Graphics card details. | P2 |
| 2045 | System Info Disk | Storage details. | P2 |
| 2046 | System Info OS | Windows version. | P2 |
| 2047 | System Info Screen | Display resolution. | P2 |
| 2048 | System Performance Monitor | Real-time CPU/RAM/GPU. | P2 |
| 2049 | System Performance Graph | Historical performance. | P3 |
| 2050 | System Performance Alert | Alert on high usage. | P3 |
| 2051 | Cache Management | Clear temporary files. | P2 |
| 2052 | Cache Size Limit | Max cache size. | P2 |
| 2053 | Cache Auto-Clear | Clear on schedule. | P2 |
| 2054 | Cache Manual Clear | Clear on demand. | P2 |
| 2055 | Temp File Management | Clean temp files. | P2 |
| 2056 | Temp File Auto-Clear | Clear on schedule. | P2 |
| 2057 | Temp File Manual Clear | Clear on demand. | P2 |
| 2058 | Thumbnail Cache Management | Clean thumbnail cache. | P2 |
| 2059 | Thumbnail Cache Size Limit | Max cache size. | P2 |
| 2060 | Thumbnail Cache Auto-Clear | Clear on schedule. | P2 |
| 2061 | Thumbnail Cache Manual Clear | Clear on demand. | P2 |
| 2062 | Database Compact | Reduce SQLite size. | P2 |
| 2063 | Database Optimize | Reindex and analyze. | P2 |
| 2064 | Database Integrity Check | Verify no corruption. | P2 |
| 2065 | Database Repair | Attempt to fix. | P2 |
| 2066 | Database Vacuum | Reclaim space. | P2 |
| 2067 | Database Reindex | Rebuild indexes. | P2 |
| 2068 | Database Export | Export as SQL. | P2 |
| 2069 | Database Import | Import from SQL. | P2 |
| 2070 | Database Reset | Reset to empty. | P2 |
| 2071 | Plugin Manager | Manage plugins. | P3 |
| 2072 | Plugin Install | Add new plugin. | P3 |
| 2073 | Plugin Uninstall | Remove plugin. | P3 |
| 2074 | Plugin Enable | Activate plugin. | P3 |
| 2075 | Plugin Disable | Deactivate plugin. | P3 |
| 2076 | Plugin Update | Update plugin. | P3 |
| 2077 | Plugin Info | Show plugin details. | P3 |
| 2078 | Plugin API Documentation | Show API docs. | P3 |
| 2079 | Plugin SDK Download | Download SDK. | P3 |
| 2080 | Plugin Example | Load example plugin. | P3 |
| 2081 | Custom Script Manager | Manage scripts. | P3 |
| 2082 | Custom Script Add | Add new script. | P3 |
| 2083 | Custom Script Remove | Remove script. | P3 |
| 2084 | Custom Script Edit | Edit script. | P3 |
| 2085 | Custom Script Run | Execute script. | P3 |
| 2086 | Custom Script Schedule | Run on schedule. | P3 |
| 2087 | Custom Script Trigger | Run on event. | P3 |
| 2088 | Custom Script Log | Show execution log. | P3 |
| 2089 | Custom Script Error Handling | Handle script errors. | P3 |
| 2090 | Custom Script Timeout | Max execution time. | P3 |
| 2091 | Network Share Access | Read from SMB. | P2 |
| 2092 | Network Share Mount | Mount network drive. | P2 |
| 2093 | Network Share Unmount | Disconnect drive. | P2 |
| 2094 | Network Share Browse | Browse network shares. | P2 |
| 2095 | Network Share Credentials | Save login credentials. | P2 |
| 2096 | Network Share Auto-Connect | Connect on launch. | P2 |
| 2097 | Cloud Sync Optional OneDrive | Optional sync. | P3 |
| 2098 | Cloud Sync Optional Dropbox | Optional sync. | P3 |
| 2099 | Cloud Sync Optional Google Drive | Optional sync. | P3 |
| 2100 | Cloud Sync Selective | Choose what to sync. | P3 |

---

## Category 22: Production Reports (2101–2200)

| # | Feature | Description | Priority |
|---|---------|-------------|----------|
| 2101 | Daily Production Report | Jobs completed today. | P2 |
| 2102 | Daily Production Count | Total pieces today. | P2 |
| 2103 | Daily Production Sheets | Total sheets today. | P2 |
| 2104 | Daily Production Efficiency | Average nesting efficiency. | P2 |
| 2105 | Daily Production Time | Total production time. | P2 |
| 2106 | Weekly Production Report | Jobs this week. | P2 |
| 2107 | Weekly Production Count | Total pieces this week. | P2 |
| 2108 | Weekly Production Sheets | Total sheets this week. | P2 |
| 2109 | Weekly Production Efficiency | Average efficiency. | P2 |
| 2110 | Weekly Production Time | Total time this week. | P2 |
| 2111 | Monthly Production Report | Jobs this month. | P2 |
| 2112 | Monthly Production Count | Total pieces this month. | P2 |
| 2113 | Monthly Production Sheets | Total sheets this month. | P2 |
| 2114 | Monthly Production Efficiency | Average efficiency. | P2 |
| 2115 | Monthly Production Time | Total time this month. | P2 |
| 2116 | Custom Date Range Report | User-defined period. | P2 |
| 2117 | Custom Date Range Count | Pieces in period. | P2 |
| 2118 | Custom Date Range Sheets | Sheets in period. | P2 |
| 2119 | Custom Date Range Efficiency | Efficiency in period. | P2 |
| 2120 | Custom Date Range Time | Time in period. | P2 |
| 2121 | Design Popularity Report | Most printed designs. | P2 |
| 2122 | Design Popularity Rank | Ranking list. | P2 |
| 2123 | Design Popularity Trend | Trend over time. | P2 |
| 2124 | Design Popularity Graph | Bar/line chart. | P2 |
| 2125 | Design Least Printed | Identify underused. | P2 |
| 2126 | Design Never Printed | Find unused designs. | P2 |
| 2127 | Design Print Frequency | Prints per design. | P2 |
| 2128 | Design Last Printed | Recency tracking. | P2 |
| 2129 | Substrate Usage Report | Which substrates used. | P2 |
| 2130 | Substrate Usage Count | Pieces per substrate. | P2 |
| 2131 | Substrate Usage Sheets | Sheets per substrate. | P2 |
| 2132 | Substrate Usage Trend | Trend over time. | P2 |
| 2133 | Substrate Usage Graph | Visual chart. | P2 |
| 2134 | Ink Consumption Report | Estimated ink used. | P3 |
| 2135 | Ink Consumption Cyan | Cyan used. | P3 |
| 2136 | Ink Consumption Magenta | Magenta used. | P3 |
| 2137 | Ink Consumption Yellow | Yellow used. | P3 |
| 2138 | Ink Consumption Black | Black used. | P3 |
| 2139 | Ink Consumption Total | Total ink used. | P3 |
| 2140 | Ink Consumption Trend | Trend over time. | P3 |
| 2141 | Paper Consumption Report | Sheets/meters used. | P2 |
| 2142 | Paper Consumption Sheets | Count of sheets. | P2 |
| 2143 | Paper Consumption Meters | Roll length used. | P2 |
| 2144 | Paper Consumption Trend | Trend over time. | P2 |
| 2145 | Paper Consumption Graph | Visual chart. | P2 |
| 2146 | Waste Report | Material wasted. | P2 |
| 2147 | Waste Percentage | Average waste %. | P2 |
| 2148 | Waste Trend | Trend over time. | P2 |
| 2149 | Waste by Design | Waste per design. | P2 |
| 2150 | Waste by Substrate | Waste per substrate. | P2 |
| 2151 | Efficiency Report | Nesting efficiency trends. | P2 |
| 2152 | Efficiency by Algorithm | Efficiency per algorithm. | P3 |
| 2153 | Efficiency by Page Size | Efficiency per size. | P2 |
| 2154 | Efficiency by Design Count | Efficiency vs design count. | P2 |
| 2155 | Efficiency Graph | Visual chart. | P2 |
| 2156 | Efficiency Benchmark | Compare to target. | P2 |
| 2157 | Worker Productivity Report | Output per worker. | P3 |
| 2158 | Worker Productivity Count | Pieces per worker. | P3 |
| 2159 | Worker Productivity Time | Time per worker. | P3 |
| 2160 | Worker Productivity Efficiency | Efficiency per worker. | P3 |
| 2161 | Machine Utilization Report | Printer/cutter uptime. | P3 |
| 2162 | Machine Utilization Printer | Printer uptime %. | P3 |
| 2163 | Machine Utilization Cutter | Cutter uptime %. | P3 |
| 2164 | Machine Utilization Graph | Visual chart. | P3 |
| 2165 | Machine Downtime Report | Time offline. | P3 |
| 2166 | Machine Downtime Reason | Why offline. | P3 |
| 2167 | Defect Rate Report | Quality trends. | P2 |
| 2168 | Defect Rate by Type | Ghosting, color, alignment. | P2 |
| 2169 | Defect Rate by Design | Defects per design. | P2 |
| 2170 | Defect Rate by Substrate | Defects per substrate. | P2 |
| 2171 | Defect Rate Trend | Trend over time. | P2 |
| 2172 | Defect Rate Graph | Visual chart. | P2 |
| 2173 | Rework Cost Report | Cost of reprints. | P3 |
| 2174 | Rework Cost by Job | Cost per job. | P3 |
| 2175 | Rework Cost by Design | Cost per design. | P3 |
| 2176 | Rework Cost Trend | Trend over time. | P3 |
| 2177 | Turnaround Time Report | Order completion speed. | P2 |
| 2178 | Turnaround Time Average | Average time. | P2 |
| 2179 | Turnaround Time by Design | Time per design. | P2 |
| 2180 | Turnaround Time by Substrate | Time per substrate. | P2 |
| 2181 | Turnaround Time Trend | Trend over time. | P2 |
| 2182 | Export Report as PDF | Printable format. | P2 |
| 2183 | Export Report as Excel | Spreadsheet format. | P2 |
| 2184 | Export Report as CSV | Plain text format. | P2 |
| 2185 | Export Report as HTML | Web format. | P2 |
| 2186 | Scheduled Report Generation | Auto-generate reports. | P3 |
| 2187 | Scheduled Report Daily | Daily auto-report. | P3 |
| 2188 | Scheduled Report Weekly | Weekly auto-report. | P3 |
| 2189 | Scheduled Report Monthly | Monthly auto-report. | P3 |
| 2190 | Dashboard Widgets | Customizable home cards. | P2 |
| 2191 | Dashboard Widget Today Count | Today's output. | P2 |
| 2192 | Dashboard Widget Today Efficiency | Today's efficiency. | P2 |
| 2193 | Dashboard Widget Queue Status | Print queue status. | P2 |
| 2194 | Dashboard Widget Recent Jobs | Last 5 jobs. | P2 |
| 2195 | Dashboard Widget Top Designs | Most used designs. | P2 |
| 2196 | Dashboard Widget Ink Levels | Estimated ink remaining. | P3 |
| 2197 | Dashboard Widget Machine Status | Online/offline status. | P2 |
| 2198 | Dashboard Widget Defect Alert | Recent defects. | P2 |
| 2199 | Dashboard Widget Custom | User-defined widget. | P3 |
| 2200 | Dashboard Widget Rearrange | Drag to reorder. | P2 |

---

## Category 23: Notifications & Alerts (2201–2300)

| # | Feature | Description | Priority |
|---|---------|-------------|----------|
| 2201 | Press Timer Alarm | Alarm when pressing done. | P1 |
| 2202 | Press Timer Alarm Sound | Audio alert. | P1 |
| 2203 | Press Timer Alarm Visual | Screen flash. | P1 |
| 2204 | Press Timer Alarm Repeat | Repeat until acknowledged. | P1 |
| 2205 | Press Timer Alarm Custom Sound | Upload own sound. | P2 |
| 2206 | Press Timer Alarm Volume | Adjust volume. | P2 |
| 2207 | Job Complete Chime | Completion sound. | P2 |
| 2208 | Job Complete Chime Custom | Custom sound. | P2 |
| 2209 | Job Complete Chime Volume | Adjust volume. | P2 |
| 2210 | Error Alert Sound | Distinctive error tone. | P2 |
| 2211 | Error Alert Sound Custom | Custom sound. | P2 |
| 2212 | Error Alert Sound Volume | Adjust volume. | P2 |
| 2213 | Warning Sound | Caution tone. | P2 |
| 2214 | Warning Sound Custom | Custom sound. | P2 |
| 2215 | Warning Sound Volume | Adjust volume. | P2 |
| 2216 | Low Ink Alert Sound | Ink warning tone. | P2 |
| 2217 | Low Ink Alert Sound Custom | Custom sound. | P2 |
| 2218 | Low Ink Alert Sound Volume | Adjust volume. | P2 |
| 2219 | Notification Center | Centralized alerts. | P2 |
| 2220 | Notification Center View All | See all alerts. | P2 |
| 2221 | Notification Center Clear All | Dismiss all. | P2 |
| 2222 | Notification Center Clear Single | Dismiss one. | P2 |
| 2223 | Notification Center History | Past alerts. | P2 |
| 2224 | Notification Center History Filter | Filter by type. | P2 |
| 2225 | Notification Center History Search | Search alerts. | P2 |
| 2226 | Notification Center History Export | Export log. | P2 |
| 2227 | Notification Center History Clear | Delete old alerts. | P2 |
| 2228 | Toast Notifications | Brief popup alerts. | P2 |
| 2229 | Toast Duration | How long shown. | P2 |
| 2230 | Toast Position | Screen position. | P2 |
| 2231 | Toast Animation | Fade, slide, etc. | P2 |
| 2232 | Toast Click Action | Click to navigate. | P2 |
| 2233 | Toast Auto-Dismiss | Disappear after timeout. | P2 |
| 2234 | Toast Persistent | Stay until dismissed. | P2 |
| 2235 | Desktop Notification Windows | Native Windows toast. | P2 |
| 2236 | Desktop Notification Icon | Show app icon. | P2 |
| 2237 | Desktop Notification Priority | High/normal/low. | P2 |
| 2238 | Notification Grouping | Stack similar alerts. | P2 |
| 2239 | Notification Group Expand | View grouped alerts. | P2 |
| 2240 | Notification Group Collapse | Hide details. | P2 |
| 2241 | Do Not Disturb Mode | Silence non-critical. | P2 |
| 2242 | Do Not Disturb Toggle | On/off switch. | P2 |
| 2243 | Do Not Disturb Schedule | Auto-enable times. | P2 |
| 2244 | Do Not Disturb Exceptions | Allow critical alerts. | P2 |
| 2245 | Scheduled Quiet Hours | Auto-silence period. | P3 |
| 2246 | Quiet Hours Start Time | When silence begins. | P3 |
| 2247 | Quiet Hours End Time | When silence ends. | P3 |
| 2248 | Quiet Hours Days | Which days active. | P3 |
| 2249 | Voice Announcement | TTS alert. | P3 |
| 2250 | Voice Announcement Text | What is spoken. | P3 |
| 2251 | Voice Announcement Volume | Speech volume. | P3 |
| 2252 | Voice Announcement Speed | Speech rate. | P3 |
| 2253 | Voice Announcement Voice | Male/female/accent. | P3 |
| 2254 | Voice Command Start Timer | "Start press timer". | P3 |
| 2255 | Voice Command Stop Timer | "Stop press timer". | P3 |
| 2256 | Voice Command Next Job | "Show next job". | P3 |
| 2257 | Voice Command Previous Job | "Show previous job". | P3 |
| 2258 | Voice Command Mirror Page | "Mirror page horizontal". | P3 |
| 2259 | Voice Command Mirror Vertical | "Mirror page vertical". | P3 |
| 2260 | Voice Command Show Preview | "Show print preview". | P3 |
| 2261 | Voice Command Zoom In | "Zoom in". | P3 |
| 2262 | Voice Command Zoom Out | "Zoom out". | P3 |
| 2263 | Voice Command Zoom Fit | "Zoom to fit". | P3 |
| 2264 | Voice Command Export | "Export as PDF". | P3 |
| 2265 | Voice Command Export Mirrored | "Export mirrored PDF". | P3 |
| 2266 | Voice Command Undo | "Undo last action". | P3 |
| 2267 | Voice Command Redo | "Redo last action". | P3 |
| 2268 | Voice Command Save | "Save project". | P3 |
| 2269 | Voice Command Open | "Open project". | P3 |
| 2270 | Voice Command New | "New project". | P3 |
| 2271 | Voice Command Close | "Close project". | P3 |
| 2272 | Voice Command Open Design Store | "Open design store". | P3 |
| 2273 | Voice Command Open Upscale Factory | "Open upscale factory". | P3 |
| 2274 | Voice Command Open Print Sheet | "Open print sheet". | P3 |
| 2275 | Voice Command Search | "Search Hanuman design". | P3 |
| 2276 | Voice Command Add to Basket | "Add to basket". | P3 |
| 2277 | Voice Command Remove from Basket | "Remove from basket". | P3 |
| 2278 | Voice Command Run Nesting | "Run auto nesting". | P3 |
| 2279 | Voice Command Send to Print | "Send to print queue". | P3 |
| 2280 | Voice Command Show Queue | "Show print queue". | P3 |
| 2281 | Voice Command Pause Print | "Pause all jobs". | P3 |
| 2282 | Voice Command Resume Print | "Resume printing". | P3 |
| 2283 | Voice Command Cancel Print | "Cancel all jobs". | P3 |
| 2284 | Voice Command Show Dashboard | "Show dashboard". | P3 |
| 2285 | Voice Command Show Settings | "Show settings". | P3 |
| 2286 | Voice Command Help | "Show help". | P3 |
| 2287 | Voice Command Exit | "Exit application". | P3 |
| 2288 | Voice Command Minimize | "Minimize window". | P3 |
| 2289 | Voice Command Maximize | "Maximize window". | P3 |
| 2290 | Voice Command Full Screen | "Full screen". | P3 |
| 2291 | Voice Command Screenshot | "Take screenshot". | P3 |
| 2292 | Voice Command Print | "Print current page". | P3 |
| 2293 | Voice Command Copy | "Copy selection". | P3 |
| 2294 | Voice Command Paste | "Paste clipboard". | P3 |
| 2295 | Voice Command Cut | "Cut selection". | P3 |
| 2296 | Voice Command Delete | "Delete selection". | P3 |
| 2297 | Voice Command Select All | "Select all". | P3 |
| 2298 | Voice Command Deselect | "Deselect all". | P3 |
| 2299 | Voice Command Group | "Group selection". | P3 |
| 2300 | Voice Command Ungroup | "Ungroup selection". | P3 |

---

## Category 24: Testing & Diagnostics (2301–2400)

| # | Feature | Description | Priority |
|---|---------|-------------|----------|
| 2301 | Print Test Page | Standard color test. | P1 |
| 2302 | Print Test Page Color Bars | Full color bars. | P1 |
| 2303 | Print Test Page Gradients | Smooth gradient test. | P1 |
| 2304 | Print Test Page Resolution | Resolution test pattern. | P1 |
| 2305 | Print Test Page Alignment | Alignment test. | P1 |
| 2306 | Nozzle Check Pattern | Print head health. | P1 |
| 2307 | Nozzle Check Pattern Auto | Auto-detect missing nozzles. | P1 |
| 2308 | Nozzle Check Pattern Visual | Visual inspection. | P1 |
| 2309 | Head Alignment Pattern | Print alignment test. | P1 |
| 2310 | Head Alignment Pattern Horizontal | Horizontal alignment. | P1 |
| 2311 | Head Alignment Pattern Vertical | Vertical alignment. | P1 |
| 2312 | Head Alignment Pattern Bi-Directional | Bi-dir alignment. | P1 |
| 2313 | Color Calibration Chart | Print and scan chart. | P2 |
| 2314 | Color Calibration Chart Standard | Standard patches. | P2 |
| 2315 | Color Calibration Chart Custom | Custom patches. | P2 |
| 2316 | Density Calibration | Ink density test. | P2 |
| 2317 | Density Calibration Standard | Standard density. | P2 |
| 2318 | Density Calibration Custom | Custom density. | P2 |
| 2319 | Registration Accuracy Test | Alignment accuracy. | P2 |
| 2320 | Registration Accuracy Test Standard | Standard pattern. | P2 |
| 2321 | Registration Accuracy Test Custom | Custom pattern. | P2 |
| 2322 | Substrate Adhesion Test | Test on new substrate. | P3 |
| 2323 | Substrate Adhesion Test Standard | Standard test. | P3 |
| 2324 | Substrate Adhesion Test Custom | Custom test. | P3 |
| 2325 | Wash/Durability Test | Simulate washing. | P3 |
| 2326 | Wash/Durability Test Standard | Standard test. | P3 |
| 2327 | Wash/Durability Test Custom | Custom test. | P3 |
| 2328 | UV Fade Test | Lightfastness test. | P3 |
| 2329 | UV Fade Test Standard | Standard exposure. | P3 |
| 2330 | UV Fade Test Custom | Custom exposure. | P3 |
| 2331 | System Performance Test | Benchmark CPU/GPU/disk. | P2 |
| 2332 | System Performance Test CPU | CPU benchmark. | P2 |
| 2333 | System Performance Test GPU | GPU benchmark. | P2 |
| 2334 | System Performance Test Disk | Disk benchmark. | P2 |
| 2335 | System Performance Test RAM | RAM benchmark. | P2 |
| 2336 | System Performance Test Overall | Combined score. | P2 |
| 2337 | System Performance Test Compare | Compare to previous. | P2 |
| 2338 | Database Integrity Test | Verify database health. | P2 |
| 2339 | Database Integrity Test Standard | Standard check. | P2 |
| 2340 | Database Integrity Test Deep | Deep check. | P2 |
| 2341 | Database Integrity Test Repair | Auto-repair issues. | P2 |
| 2342 | File System Test | Verify permissions. | P2 |
| 2343 | File System Test Read | Read test. | P2 |
| 2344 | File System Test Write | Write test. | P2 |
| 2345 | File System Test Delete | Delete test. | P2 |
| 2346 | File System Test Permissions | Permission test. | P2 |
| 2347 | GPU Stress Test | Verify GPU stability. | P2 |
| 2348 | GPU Stress Test Standard | Standard stress. | P2 |
| 2349 | GPU Stress Test Extended | Long stress test. | P2 |
| 2350 | GPU Stress Test Temperature | Monitor temp during test. | P2 |
| 2351 | Memory Leak Detection | Monitor RAM usage. | P2 |
| 2352 | Memory Leak Detection Standard | Standard detection. | P2 |
| 2353 | Memory Leak Detection Extended | Long detection. | P2 |
| 2354 | Memory Leak Detection Report | Generate report. | P2 |
| 2355 | Network Connectivity Test | Verify LAN. | P2 |
| 2356 | Network Connectivity Test Ping | Ping test. | P2 |
| 2357 | Network Connectivity Test Speed | Speed test. | P2 |
| 2358 | Network Connectivity Test Printer | Printer network test. | P2 |
| 2359 | Network Connectivity Test Cutter | Cutter network test. | P2 |
| 2360 | Printer Communication Test | Ping printer status. | P2 |
| 2361 | Printer Communication Test Standard | Standard test. | P2 |
| 2362 | Printer Communication Test Detailed | Detailed test. | P2 |
| 2363 | Cutter Communication Test | Ping cutter status. | P2 |
| 2364 | Cutter Communication Test Standard | Standard test. | P2 |
| 2365 | Cutter Communication Test Detailed | Detailed test. | P2 |
| 2366 | Hot Folder Test | Verify folder monitoring. | P2 |
| 2367 | Hot Folder Test Create | Create test file. | P2 |
| 2368 | Hot Folder Test Detect | Verify detection. | P2 |
| 2369 | Hot Folder Test Process | Verify processing. | P2 |
| 2370 | Export Quality Test | Verify output integrity. | P2 |
| 2371 | Export Quality Test Resolution | Check resolution. | P2 |
| 2372 | Export Quality Test Color | Check color accuracy. | P2 |
| 2373 | Export Quality Test Size | Check file size. | P2 |
| 2374 | Upscale Quality Test | Compare upscale vs original. | P2 |
| 2375 | Upscale Quality Test Visual | Side-by-side compare. | P2 |
| 2376 | Upscale Quality Test Metric | PSNR/SSIM scores. | P2 |
| 2377 | Upscale Quality Test Report | Generate report. | P2 |
| 2378 | Color Accuracy Test | Compare screen vs print. | P3 |
| 2379 | Color Accuracy Test Visual | Visual comparison. | P3 |
| 2380 | Color Accuracy Test Metric | Delta E measurement. | P3 |
| 2381 | Speed Benchmark | Time various operations. | P3 |
| 2382 | Speed Benchmark Nesting | Time nesting operation. | P3 |
| 2383 | Speed Benchmark Export | Time export operation. | P3 |
| 2384 | Speed Benchmark Upscale | Time upscale operation. | P3 |
| 2385 | Speed Benchmark Report | Generate report. | P3 |
| 2386 | Load Test 100 Designs | Test with 100 designs. | P2 |
| 2387 | Load Test 500 Designs | Test with 500 designs. | P2 |
| 2388 | Load Test 1000 Designs | Test with 1000 designs. | P2 |
| 2389 | Load Test 5000 Designs | Test with 5000 designs. | P2 |
| 2390 | Load Test 10000 Designs | Test with 10000 designs. | P2 |
| 2391 | Load Test Report | Generate load test report. | P2 |
| 2392 | Stress Test 100 Designs | Stress with 100 designs. | P2 |
| 2393 | Stress Test 500 Designs | Stress with 500 designs. | P2 |
| 2394 | Stress Test 1000 Designs | Stress with 1000 designs. | P2 |
| 2395 | Stress Test 5000 Designs | Stress with 5000 designs. | P2 |
| 2396 | Stress Test 10000 Designs | Stress with 10000 designs. | P2 |
| 2397 | Stress Test Report | Generate stress test report. | P2 |
| 2398 | Power Loss Recovery Test | Simulate crash during save. | P2 |
| 2399 | Power Loss Recovery Test Standard | Standard test. | P2 |
| 2400 | Power Loss Recovery Test Report | Generate report. | P2 |

---

## Category 25: Testing & Diagnostics Advanced (2401–2500)

| # | Feature | Description | Priority |
|---|---------|-------------|----------|
| 2401 | Disk Full Recovery Test | Handle out-of-space. | P2 |
| 2402 | Disk Full Recovery Test Standard | Standard test. | P2 |
| 2403 | Disk Full Recovery Test Report | Generate report. | P2 |
| 2404 | Corrupt File Recovery Test | Handle damaged files. | P2 |
| 2405 | Corrupt File Recovery Test Standard | Standard test. | P2 |
| 2406 | Corrupt File Recovery Test Report | Generate report. | P2 |
| 2407 | Log File Analysis Tool | Parse app logs. | P2 |
| 2408 | Log File Analysis Tool Search | Search logs. | P2 |
| 2409 | Log File Analysis Tool Filter | Filter by level. | P2 |
| 2410 | Log File Analysis Tool Export | Export analysis. | P2 |
| 2411 | Diagnostic Report Export | Export health report. | P2 |
| 2412 | Diagnostic Report Export PDF | PDF format. | P2 |
| 2413 | Diagnostic Report Export HTML | HTML format. | P2 |
| 2414 | Diagnostic Report Export TXT | Text format. | P2 |
| 2415 | Diagnostic Report Auto-Generate | Auto-generate monthly. | P2 |
| 2416 | Diagnostic Report Email (Local) | Send local email. | P3 |
| 2417 | Diagnostic Report Print | Print physical copy. | P3 |
| 2418 | System Health Dashboard | Overall health score. | P2 |
| 2419 | System Health Dashboard CPU | CPU health. | P2 |
| 2420 | System Health Dashboard GPU | GPU health. | P2 |
| 2421 | System Health Dashboard RAM | RAM health. | P2 |
| 2422 | System Health Dashboard Disk | Disk health. | P2 |
| 2423 | System Health Dashboard Database | Database health. | P2 |
| 2424 | System Health Dashboard Printer | Printer health. | P2 |
| 2425 | System Health Dashboard Cutter | Cutter health. | P2 |
| 2426 | System Health Dashboard Overall Score | Combined score. | P2 |
| 2427 | System Health Dashboard Color Code | Green/yellow/red status. | P2 |
| 2428 | System Health Dashboard Recommendations | Fix suggestions. | P2 |
| 2429 | System Health Dashboard History | Track over time. | P3 |
| 2430 | System Health Dashboard Trend | Trend graph. | P3 |
| 2431 | Troubleshooting Wizard | Step-by-step fixes. | P2 |
| 2432 | Troubleshooting Wizard Printer | Printer issues. | P2 |
| 2433 | Troubleshooting Wizard Cutter | Cutter issues. | P2 |
| 2434 | Troubleshooting Wizard Export | Export issues. | P2 |
| 2435 | Troubleshooting Wizard Upscale | Upscale issues. | P2 |
| 2436 | Troubleshooting Wizard Database | Database issues. | P2 |
| 2437 | Troubleshooting Wizard Performance | Performance issues. | P2 |
| 2438 | Troubleshooting Wizard Network | Network issues. | P2 |
| 2439 | Troubleshooting Wizard Custom | User-defined issue. | P3 |
| 2440 | Troubleshooting Wizard Report | Generate report. | P2 |
| 2441 | Self-Test on Launch | Auto-run on startup. | P2 |
| 2442 | Self-Test on Launch Quick | Quick check. | P2 |
| 2443 | Self-Test on Launch Full | Full check. | P2 |
| 2444 | Self-Test on Launch Skip | Skip if recent. | P2 |
| 2445 | Self-Test Manual Trigger | Run on demand. | P2 |
| 2446 | Self-Test Manual Quick | Quick check. | P2 |
| 2447 | Self-Test Manual Full | Full check. | P2 |
| 2448 | Self-Test Report | Generate report. | P2 |
| 2449 | Self-Test Report Export | Export report. | P2 |
| 2450 | Self-Test Report Print | Print report. | P2 |
| 2451 | Benchmark Suite | Comprehensive benchmark. | P3 |
| 2452 | Benchmark Suite CPU | CPU benchmark. | P3 |
| 2453 | Benchmark Suite GPU | GPU benchmark. | P3 |
| 2454 | Benchmark Suite Disk | Disk benchmark. | P3 |
| 2455 | Benchmark Suite RAM | RAM benchmark. | P3 |
| 2456 | Benchmark Suite Network | Network benchmark. | P3 |
| 2457 | Benchmark Suite Overall | Combined score. | P3 |
| 2458 | Benchmark Suite Compare | Compare to baseline. | P3 |
| 2459 | Benchmark Suite Report | Generate report. | P3 |
| 2460 | Benchmark Suite History | Track over time. | P3 |
| 2461 | Benchmark Suite Trend | Trend graph. | P3 |
| 2462 | Compatibility Check | Check system compatibility. | P2 |
| 2463 | Compatibility Check OS | Windows version. | P2 |
| 2464 | Compatibility Check CPU | Processor check. | P2 |
| 2465 | Compatibility Check RAM | Memory check. | P2 |
| 2466 | Compatibility Check GPU | Graphics check. | P2 |
| 2467 | Compatibility Check Disk | Storage check. | P2 |
| 2468 | Compatibility Check Printer | Printer check. | P2 |
| 2469 | Compatibility Check Cutter | Cutter check. | P2 |
| 2470 | Compatibility Check Overall | Pass/fail status. | P2 |
| 2471 | Compatibility Check Report | Generate report. | P2 |
| 2472 | Compatibility Check Recommendations | Upgrade suggestions. | P2 |
| 2473 | Stress Test Concurrent Jobs | Multiple simultaneous jobs. | P2 |
| 2474 | Stress Test Concurrent Jobs 2 | 2 simultaneous jobs. | P2 |
| 2475 | Stress Test Concurrent Jobs 5 | 5 simultaneous jobs. | P2 |
| 2476 | Stress Test Concurrent Jobs 10 | 10 simultaneous jobs. | P2 |
| 2477 | Stress Test Concurrent Jobs Report | Generate report. | P2 |
| 2478 | Memory Test | RAM integrity test. | P2 |
| 2479 | Memory Test Standard | Standard test. | P2 |
| 2480 | Memory Test Extended | Extended test. | P2 |
| 2481 | Memory Test Report | Generate report. | P2 |
| 2482 | Disk Test | Disk integrity test. | P2 |
| 2483 | Disk Test Standard | Standard test. | P2 |
| 2484 | Disk Test Extended | Extended test. | P2 |
| 2485 | Disk Test Report | Generate report. | P2 |
| 2486 | Network Test | Network integrity test. | P2 |
| 2487 | Network Test Standard | Standard test. | P2 |
| 2488 | Network Test Extended | Extended test. | P2 |
| 2489 | Network Test Report | Generate report. | P2 |
| 2490 | Printer Test | Printer communication test. | P2 |
| 2491 | Printer Test Standard | Standard test. | P2 |
| 2492 | Printer Test Extended | Extended test. | P2 |
| 2493 | Printer Test Report | Generate report. | P2 |
| 2494 | Cutter Test | Cutter communication test. | P2 |
| 2495 | Cutter Test Standard | Standard test. | P2 |
| 2496 | Cutter Test Extended | Extended test. | P2 |
| 2497 | Cutter Test Report | Generate report. | P2 |
| 2498 | Full System Diagnostic | Comprehensive diagnostic. | P2 |
| 2499 | Full System Diagnostic Report | Generate report. | P2 |
| 2500 | Full System Diagnostic Export | Export report. | P2 |

---

## Category 26: Bonus & Delight Features (2501–2600)

| # | Feature | Description | Priority |
|---|---------|-------------|----------|
| 2501 | Dark Mode | Easy-on-eyes dark theme. | P1 |
| 2502 | Dark Mode Auto | Auto-switch by time. | P2 |
| 2503 | Dark Mode Manual | Manual toggle. | P1 |
| 2504 | Light Mode | Classic light theme. | P1 |
| 2505 | Light Mode Auto | Auto-switch by time. | P2 |
| 2506 | Light Mode Manual | Manual toggle. | P1 |
| 2507 | High Contrast Mode | Accessibility theme. | P2 |
| 2508 | High Contrast Mode Auto | Auto-switch. | P3 |
| 2509 | High Contrast Mode Manual | Manual toggle. | P2 |
| 2510 | Custom Accent Color | Choose brand color. | P2 |
| 2511 | Custom Accent Color Preset | Built-in colors. | P2 |
| 2512 | Custom Accent Color Custom | User-defined color. | P2 |
| 2513 | Custom Accent Color Apply | Apply to UI. | P2 |
| 2514 | Custom Accent Color Reset | Reset to default. | P2 |
| 2515 | Animated Transitions | Smooth page transitions. | P2 |
| 2516 | Animated Transitions Fade | Fade effect. | P2 |
| 2517 | Animated Transitions Slide | Slide effect. | P2 |
| 2518 | Animated Transitions Zoom | Zoom effect. | P2 |
| 2519 | Animated Transitions Duration | Adjust speed. | P2 |
| 2520 | Animated Transitions Disable | Turn off animations. | P2 |
| 2521 | Loading Skeletons | Placeholder while loading. | P1 |
| 2522 | Loading Skeletons Shimmer | Shimmer effect. | P1 |
| 2523 | Loading Skeletons Pulse | Pulse effect. | P1 |
| 2524 | Progress Indicators | Visual progress. | P1 |
| 2525 | Progress Indicators Linear | Bar progress. | P1 |
| 2526 | Progress Indicators Circular | Circle progress. | P1 |
| 2527 | Progress Indicators Percentage | Numeric display. | P1 |
| 2528 | Progress Indicators ETA | Time remaining. | P1 |
| 2529 | Empty State Illustrations | Friendly empty screens. | P2 |
| 2530 | Empty State Illustrations Custom | Custom illustrations. | P3 |
| 2531 | Onboarding Checklist | First-time guide. | P2 |
| 2532 | Onboarding Checklist Step 1 | Welcome. | P2 |
| 2533 | Onboarding Checklist Step 2 | Setup. | P2 |
| 2534 | Onboarding Checklist Step 3 | First design. | P2 |
| 2535 | Onboarding Checklist Step 4 | First print. | P2 |
| 2536 | Onboarding Checklist Step 5 | Completion. | P2 |
| 2537 | Onboarding Checklist Skip | Skip onboarding. | P2 |
| 2538 | Onboarding Checklist Resume | Resume later. | P2 |
| 2539 | Achievement Badges | Gamification. | P3 |
| 2540 | Achievement First Design | First design created. | P3 |
| 2541 | Achievement First Print | First print job. | P3 |
| 2542 | Achievement 100 Designs | 100 designs milestone. | P3 |
| 2543 | Achievement 1000 Prints | 1000 prints milestone. | P3 |
| 2544 | Achievement Perfect Nesting | 95%+ efficiency. | P3 |
| 2545 | Achievement Speed Demon | Fast processing. | P3 |
| 2546 | Achievement Quality Master | High approval rate. | P3 |
| 2547 | Daily Tip | Production tip on startup. | P3 |
| 2548 | Daily Tip Category | Tip category. | P3 |
| 2549 | Daily Tip Previous | See past tips. | P3 |
| 2550 | Daily Tip Disable | Turn off tips. | P3 |
| 2551 | Keyboard Shortcut Overlay | Press ? to show. | P2 |
| 2552 | Keyboard Shortcut Overlay Search | Search shortcuts. | P2 |
| 2553 | Keyboard Shortcut Overlay Category | Filter by category. | P2 |
| 2554 | Keyboard Shortcut Overlay Print | Print reference. | P2 |
| 2555 | Context Menu (Right-Click) | Right-click actions. | P0 |
| 2556 | Context Menu Canvas | Canvas right-click. | P0 |
| 2557 | Context Menu Object | Object right-click. | P0 |
| 2558 | Context Menu Layer | Layer right-click. | P0 |
| 2559 | Context Menu Design Store | Gallery right-click. | P0 |
| 2560 | Context Menu Order Basket | Basket right-click. | P0 |
| 2561 | Drag-and-Drop Everywhere | Universal DnD. | P0 |
| 2562 | Drag-and-Drop Canvas | Canvas DnD. | P0 |
| 2563 | Drag-and-Drop Layers | Layers DnD. | P0 |
| 2564 | Drag-and-Drop Design Store | Gallery DnD. | P0 |
| 2565 | Drag-and-Drop Order Basket | Basket DnD. | P0 |
| 2566 | Drag-and-Drop Upscale Factory | Upscale DnD. | P0 |
| 2567 | Clipboard Integration | Copy/paste everywhere. | P0 |
| 2568 | Clipboard Integration Images | Copy/paste images. | P0 |
| 2569 | Clipboard Integration Text | Copy/paste text. | P0 |
| 2570 | Clipboard Integration Objects | Copy/paste objects. | P0 |
| 2571 | Clipboard Integration Styles | Copy/paste styles. | P0 |
| 2572 | Clipboard Integration Effects | Copy/paste effects. | P0 |
| 2573 | Undo History Visual | Visual undo stack. | P2 |
| 2574 | Undo History Visual Timeline | Timeline view. | P2 |
| 2575 | Undo History Visual Thumbnails | Thumbnail preview. | P2 |
| 2576 | Undo History Visual Click to Jump | Click to restore. | P2 |
| 2577 | Multi-Select Ctrl+Click | Non-contiguous select. | P0 |
| 2578 | Multi-Select Shift+Click | Range select. | P0 |
| 2579 | Multi-Select Marquee | Box select. | P0 |
| 2580 | Multi-Select Lasso | Freehand select. | P0 |
| 2581 | Invert Selection | Select opposite. | P1 |
| 2582 | Select Same Type | All text/images/shapes. | P1 |
| 2583 | Select Same Color | Same fill color. | P1 |
| 2584 | Select Same Stroke Color | Same stroke color. | P1 |
| 2585 | Select Same Size | Same dimensions. | P1 |
| 2586 | Select Same Font | Same font family. | P1 |
| 2587 | Select Same Opacity | Same transparency. | P1 |
| 2588 | Select Same Blend Mode | Same blend mode. | P1 |
| 2589 | Select Same Effects | Same effects. | P1 |
| 2590 | Select Same Layer Type | Same layer type. | P1 |
| 2591 | Lock Position | Prevent movement. | P1 |
| 2592 | Lock Size | Prevent resizing. | P1 |
| 2593 | Lock Rotation | Prevent rotation. | P1 |
| 2594 | Lock All Properties | Fully lock. | P1 |
| 2595 | Hide Selection Edges | Clean view. | P2 |
| 2596 | Outline Mode | Wireframe view. | P2 |
| 2597 | Pixel Preview | 1:1 pixel grid. | P2 |
| 2598 | Pixel Preview Toggle | On/off switch. | P2 |
| 2599 | Split Screen View | Two views of same doc. | P3 |
| 2600 | Presentation Mode | Full-screen slideshow. | P3 |

---

## Category 27: Bonus & Delight Advanced (2601–2700)

| # | Feature | Description | Priority |
|---|---------|-------------|----------|
| 2601 | Presentation Mode Auto-Advance | Auto-next slide. | P3 |
| 2602 | Presentation Mode Manual | Click to advance. | P3 |
| 2603 | Presentation Mode Transition | Slide transition. | P3 |
| 2604 | Presentation Mode Loop | Loop slideshow. | P3 |
| 2605 | Presentation Mode Timer | Show timer. | P3 |
| 2606 | Presentation Mode Notes | Show speaker notes. | P3 |
| 2607 | Presentation Mode Laser Pointer | Virtual laser. | P3 |
| 2608 | Presentation Mode Zoom | Zoom during presentation. | P3 |
| 2609 | Presentation Mode Pan | Pan during presentation. | P3 |
| 2610 | Presentation Mode Exit | Exit to editor. | P3 |
| 2611 | Workspace Layouts | Save panel arrangements. | P2 |
| 2612 | Workspace Layout Default | Default layout. | P2 |
| 2613 | Workspace Layout Design | Design-focused layout. | P2 |
| 2614 | Workspace Layout Print | Print-focused layout. | P2 |
| 2615 | Workspace Layout Upscale | Upscale-focused layout. | P2 |
| 2616 | Workspace Layout Custom | User-defined layout. | P2 |
| 2617 | Workspace Layout Save | Save current layout. | P2 |
| 2618 | Workspace Layout Load | Apply saved layout. | P2 |
| 2619 | Workspace Layout Rename | Change name. | P2 |
| 2620 | Workspace Layout Delete | Remove layout. | P2 |
| 2621 | Workspace Layout Reset | Reset to default. | P2 |
| 2622 | Workspace Layout Import | Import layout file. | P3 |
| 2623 | Workspace Layout Export | Export layout file. | P3 |
| 2624 | Workspace Layout Share | Share with team. | P3 |
| 2625 | Panel Management | Manage UI panels. | P2 |
| 2626 | Panel Show/Hide | Toggle visibility. | P2 |
| 2627 | Panel Dock | Dock to edges. | P2 |
| 2628 | Panel Float | Free-floating panel. | P2 |
| 2629 | Panel Resize | Adjust panel size. | P2 |
| 2630 | Panel Collapse | Minimize panel. | P2 |
| 2631 | Panel Expand | Maximize panel. | P2 |
| 2632 | Panel Auto-Hide | Hide when not in use. | P2 |
| 2633 | Panel Pin | Keep visible. | P2 |
| 2634 | Panel Tabbed | Tab multiple panels. | P2 |
| 2635 | Panel Stacked | Stack panels. | P2 |
| 2636 | Panel Sidebar | Side panel layout. | P2 |
| 2637 | Panel Bottom Bar | Bottom panel layout. | P2 |
| 2638 | Panel Top Bar | Top panel layout. | P2 |
| 2639 | Panel Custom Position | User-defined position. | P2 |
| 2640 | Full-Screen Mode | Hide all chrome. | P1 |
| 2641 | Full-Screen Mode Toggle | F11 toggle. | P1 |
| 2642 | Full-Screen Mode Exit | Esc to exit. | P1 |
| 2643 | Full-Screen Mode Menu Bar | Show/hide menu. | P1 |
| 2644 | Full-Screen Mode Tool Bar | Show/hide toolbar. | P1 |
| 2645 | Full-Screen Mode Status Bar | Show/hide status. | P1 |
| 2646 | Full-Screen Mode Rulers | Show/hide rulers. | P1 |
| 2647 | Full-Screen Mode Guides | Show/hide guides. | P1 |
| 2648 | Full-Screen Mode Grid | Show/hide grid. | P1 |
| 2649 | Window Snap Support | Snap to edges. | P1 |
| 2650 | Window Snap Left | Snap to left half. | P1 |
| 2651 | Window Snap Right | Snap to right half. | P1 |
| 2652 | Window Snap Top | Snap to top half. | P1 |
| 2653 | Window Snap Bottom | Snap to bottom half. | P1 |
| 2654 | Window Snap Quarter | Snap to quarter. | P1 |
| 2655 | Window Snap Maximize | Full screen. | P1 |
| 2656 | Window Snap Restore | Restore size. | P1 |
| 2657 | Multi-Monitor Support | Move to second screen. | P2 |
| 2658 | Multi-Monitor Support Detect | Auto-detect monitors. | P2 |
| 2659 | Multi-Monitor Support Move Panel | Move panel to monitor. | P2 |
| 2660 | Multi-Monitor Support Move Window | Move window to monitor. | P2 |
| 2661 | Multi-Monitor Support Remember Position | Remember monitor. | P2 |
| 2662 | Touchscreen Support | Touch-friendly UI. | P2 |
| 2663 | Touchscreen Support Larger Buttons | Bigger touch targets. | P2 |
| 2664 | Touchscreen Support Gestures | Swipe, pinch, rotate. | P2 |
| 2665 | Touchscreen Support Stylus | Pen input. | P2 |
| 2666 | Touchscreen Support Palm Rejection | Ignore palm touches. | P2 |
| 2667 | Touchscreen Support Pressure | Pressure sensitivity. | P2 |
| 2668 | Touchscreen Support Tilt | Tilt sensitivity. | P2 |
| 2669 | Gesture Support Pinch to Zoom | Pinch zoom. | P2 |
| 2670 | Gesture Support Rotate | Two-finger rotate. | P2 |
| 2671 | Gesture Support Pan | Two-finger pan. | P2 |
| 2672 | Gesture Support Swipe | One-finger swipe. | P2 |
| 2673 | Gesture Support Double Tap | Double tap actions. | P2 |
| 2674 | Gesture Support Long Press | Long press actions. | P2 |
| 2675 | Gesture Support Custom | User-defined gestures. | P3 |
| 2676 | Gesture Support Disable | Turn off gestures. | P2 |
| 2677 | Status Bar Information | Coordinates, zoom, selection. | P1 |
| 2678 | Status Bar Position | X,Y coordinates. | P1 |
| 2679 | Status Bar Dimensions | Width × height. | P1 |
| 2680 | Status Bar Zoom | Current zoom %. | P1 |
| 2681 | Status Bar Selection | Selected object count. | P1 |
| 2682 | Status Bar Document | Document dimensions. | P1 |
| 2683 | Status Bar Color | Current color. | P1 |
| 2684 | Status Bar Tool | Current tool. | P1 |
| 2685 | Status Bar Mode | Current mode. | P1 |
| 2686 | Status Bar Custom | User-defined info. | P2 |
| 2687 | Breadcrumb Navigation | Show current location. | P1 |
| 2688 | Breadcrumb Navigation Click | Click to navigate. | P1 |
| 2689 | Breadcrumb Navigation Home | Home button. | P1 |
| 2690 | Breadcrumb Navigation Back | Back button. | P1 |
| 2691 | Recent Files List | Quick-open recent. | P0 |
| 2692 | Recent Files List Count | Show last N files. | P0 |
| 2693 | Recent Files List Clear | Clear history. | P0 |
| 2694 | Recent Files List Pin | Keep important. | P1 |
| 2695 | Recent Files List Unpin | Remove pin. | P1 |
| 2696 | Recent Files List Remove | Remove from list. | P1 |
| 2697 | Recent Files List Open Folder | Open containing folder. | P1 |
| 2698 | Recent Files List Preview | Hover preview. | P1 |
| 2699 | Pin Favorite Projects | Keep at top. | P1 |
| 2700 | Pin Favorite Projects Unpin | Remove pin. | P1 |

---

## Category 28: Installation & Deployment (2701–2800)

| # | Feature | Description | Priority |
|---|---------|-------------|----------|
| 2701 | Windows Installer EXE | Standard setup. | P0 |
| 2702 | Windows Installer MSI | MSI package. | P2 |
| 2703 | Silent Install Mode | No UI install. | P2 |
| 2704 | Silent Install Mode Command Line | CLI install. | P2 |
| 2705 | Silent Install Mode Config File | Config-driven install. | P2 |
| 2706 | Portable Mode | Run from USB. | P2 |
| 2707 | Portable Mode Auto-Detect | Detect portable mode. | P2 |
| 2708 | Portable Mode Data Folder | Use USB for data. | P2 |
| 2709 | AppData Folder Auto-Creation | Create on first run. | P0 |
| 2710 | AppData Folder Structure | Create subfolders. | P0 |
| 2711 | AppData Folder Permissions | Verify write access. | P0 |
| 2712 | AppData Folder Repair | Fix if corrupted. | P0 |
| 2713 | Database Auto-Initialization | Create on first run. | P0 |
| 2714 | Database Auto-Initialization Schema | Create tables. | P0 |
| 2715 | Database Auto-Initialization Data | Populate defaults. | P0 |
| 2716 | Database Auto-Initialization Indexes | Create indexes. | P0 |
| 2717 | Write Permission Check | Verify AppData write. | P0 |
| 2718 | Write Permission Check Fix | Attempt to fix. | P0 |
| 2719 | Write Permission Check Alert | Alert if failed. | P0 |
| 2720 | Desktop Shortcut Creation | Optional desktop icon. | P1 |
| 2721 | Desktop Shortcut Creation Toggle | On/off during install. | P1 |
| 2722 | Start Menu Entry | Windows start menu. | P1 |
| 2723 | Start Menu Entry Toggle | On/off during install. | P1 |
| 2724 | Taskbar Pin Support | Pin to taskbar. | P1 |
| 2725 | Taskbar Pin Auto | Auto-pin on first launch. | P1 |
| 2726 | Required Binaries Bundling | Include dependencies. | P0 |
| 2727 | Required Binaries Auto-Install | Install dependencies. | P0 |
| 2728 | Real-ESRGAN Engine Bundled | Include upscaling engine. | P0 |
| 2729 | Real-ESRGAN Engine Path | Set engine path. | P0 |
| 2730 | Real-ESRGAN Engine Verify | Verify integrity. | P0 |
| 2731 | Model Files Bundled | Include default models. | P0 |
| 2732 | Model Files Path | Set model path. | P0 |
| 2733 | Model Files Verify | Verify integrity. | P0 |
| 2734 | Model Files Download | Download additional models. | P2 |
| 2735 | Model Files Update | Update existing models. | P2 |
| 2736 | Model Files Delete | Remove unused models. | P2 |
| 2737 | VC++ Redistributable Check | Verify runtime. | P1 |
| 2738 | VC++ Redistributable Auto-Install | Install if missing. | P1 |
| 2739 | .NET Runtime Check | Verify .NET. | P1 |
| 2740 | .NET Runtime Auto-Install | Install if missing. | P1 |
| 2741 | GPU Driver Check | Verify drivers. | P2 |
| 2742 | GPU Driver Check NVIDIA | NVIDIA driver check. | P2 |
| 2743 | GPU Driver Check AMD | AMD driver check. | P2 |
| 2744 | GPU Driver Check Intel | Intel driver check. | P2 |
| 2745 | GPU Driver Warning | Warn if outdated. | P2 |
| 2746 | GPU Driver Download Link | Link to download. | P2 |
| 2747 | Disk Space Check | Verify free space. | P1 |
| 2748 | Disk Space Check Minimum | Minimum required. | P1 |
| 2749 | Disk Space Check Recommended | Recommended space. | P1 |
| 2750 | Disk Space Warning | Warn if low. | P1 |
| 2751 | RAM Check | Verify memory. | P1 |
| 2752 | RAM Check Minimum | Minimum required. | P1 |
| 2753 | RAM Check Recommended | Recommended RAM. | P1 |
| 2754 | RAM Warning | Warn if low. | P1 |
| 2755 | Screen Resolution Check | Verify display. | P2 |
| 2756 | Screen Resolution Check Minimum | Minimum resolution. | P2 |
| 2757 | Screen Resolution Warning | Warn if too low. | P2 |
| 2758 | Auto-Update System | Check on launch. | P2 |
| 2759 | Auto-Update System Manual | Check on demand. | P2 |
| 2760 | Auto-Update System Automatic | Auto-download and install. | P2 |
| 2761 | Auto-Update System Notification | Notify when available. | P2 |
| 2762 | Auto-Update System Download | Download update. | P2 |
| 2763 | Auto-Update System Install | Install update. | P2 |
| 2764 | Auto-Update System Schedule | Install at specific time. | P2 |
| 2765 | Auto-Update System Backup First | Backup before update. | P2 |
| 2766 | Offline Update Package | Install from file. | P2 |
| 2767 | Offline Update Package Verify | Verify integrity. | P2 |
| 2768 | Offline Update Package Install | Install from file. | P2 |
| 2769 | Update Rollback | Revert to previous. | P2 |
| 2770 | Update Rollback Confirm | Require confirmation. | P2 |
| 2771 | Update Rollback Backup | Backup before rollback. | P2 |
| 2772 | Update Changelog | Show what's new. | P2 |
| 2773 | Update Changelog View | Read changelog. | P2 |
| 2774 | Update Changelog Export | Export changelog. | P2 |
| 2775 | Update Changelog Print | Print changelog. | P2 |
| 2776 | Beta Channel Option | Opt-in to beta. | P3 |
| 2777 | Beta Channel Toggle | On/off switch. | P3 |
| 2778 | Beta Channel Warning | Warn about stability. | P3 |
| 2779 | Telemetry Opt-Out | Disable data collection. | P2 |
| 2780 | Telemetry Opt-Out Toggle | On/off switch. | P2 |
| 2781 | Telemetry Opt-Out Confirm | Require confirmation. | P2 |
| 2782 | Crash Reporter | Auto-send crash logs. | P2 |
| 2783 | Crash Reporter Toggle | On/off switch. | P2 |
| 2784 | Crash Reporter Preview | Preview before send. | P2 |
| 2785 | Crash Reporter Details | Show what is sent. | P2 |
| 2786 | Health Check Dashboard | System readiness. | P1 |
| 2787 | Health Check Dashboard Run | Run health check. | P1 |
| 2788 | Health Check Dashboard Results | Show results. | P1 |
| 2789 | Health Check Dashboard Fix | Auto-fix issues. | P1 |
| 2790 | Health Check Dashboard Report | Generate report. | P1 |
| 2791 | Repair Installation | Fix corrupted install. | P2 |
| 2792 | Repair Installation Standard | Standard repair. | P2 |
| 2793 | Repair Installation Deep | Deep repair. | P2 |
| 2794 | Repair Installation Report | Generate report. | P2 |
| 2795 | Uninstall with Data Removal | Optional data wipe. | P2 |
| 2796 | Uninstall with Data Removal Toggle | On/off during uninstall. | P2 |
| 2797 | Uninstall with Data Removal Confirm | Require confirmation. | P2 |
| 2798 | Uninstall with Data Removal Backup | Offer backup first. | P2 |
| 2799 | License Activation Offline | Offline key validation. | P2 |
| 2800 | License Activation Online | Online key validation. | P2 |

---

## Category 29: Installation & Deployment Advanced (2801–2900)

| # | Feature | Description | Priority |
|---|---------|-------------|----------|
| 2801 | License Activation Trial | Trial mode. | P2 |
| 2802 | License Activation Trial Duration | Set trial days. | P2 |
| 2803 | License Activation Trial Features | Limited features. | P2 |
| 2804 | License Activation Trial Watermark | Watermarked export. | P2 |
| 2805 | License Activation Trial Expiry Warning | Warn before expiry. | P2 |
| 2806 | License Activation Trial Convert to Full | Upgrade path. | P2 |
| 2807 | License Activation Key Input | Enter license key. | P2 |
| 2808 | License Activation Key Paste | Paste from clipboard. | P2 |
| 2809 | License Activation Key Validate | Verify key. | P2 |
| 2810 | License Activation Key Invalid Alert | Invalid key alert. | P2 |
| 2811 | License Activation Key Already Used | Used key alert. | P2 |
| 2812 | License Activation Key Expired | Expired key alert. | P2 |
| 2813 | License Activation Key Revoked | Revoked key alert. | P2 |
| 2814 | License Activation Key Transfer | Transfer to new PC. | P2 |
| 2815 | License Activation Key Deactivate | Deactivate current PC. | P2 |
| 2816 | License Activation Key Reactivate | Reactivate on same PC. | P2 |
| 2817 | License Activation Key History | Show activation history. | P2 |
| 2818 | License Activation Key Export | Export license info. | P2 |
| 2819 | Multi-PC License Management | Manage multiple PCs. | P3 |
| 2820 | Multi-PC License Management Add | Add new PC. | P3 |
| 2821 | Multi-PC License Management Remove | Remove PC. | P3 |
| 2822 | Multi-PC License Management View | View all PCs. | P3 |
| 2823 | Multi-PC License Management Limit | Max PCs allowed. | P3 |
| 2824 | Multi-PC License Management Transfer | Transfer between PCs. | P3 |
| 2825 | Floating License Server | Network license server. | P3 |
| 2826 | Floating License Server Setup | Configure server. | P3 |
| 2827 | Floating License Server Monitor | Monitor usage. | P3 |
| 2828 | Floating License Server Release | Release license. | P3 |
| 2829 | Floating License Server Borrow | Borrow for offline use. | P3 |
| 2830 | Floating License Server Return | Return borrowed license. | P3 |
| 2831 | Installation Log | Log installation steps. | P2 |
| 2832 | Installation Log View | View log. | P2 |
| 2833 | Installation Log Export | Export log. | P2 |
| 2834 | Installation Log Clear | Delete old logs. | P2 |
| 2835 | Installation Rollback | Undo installation. | P2 |
| 2836 | Installation Rollback Confirm | Require confirmation. | P2 |
| 2837 | Installation Rollback Backup | Backup before rollback. | P2 |
| 2838 | Installation Rollback Report | Generate report. | P2 |
| 2839 | Installation Custom Path | Choose install location. | P1 |
| 2840 | Installation Custom Path Browse | Browse for folder. | P1 |
| 2841 | Installation Custom Path Default | Use default. | P1 |
| 2842 | Installation Component Selection | Choose components. | P1 |
| 2843 | Installation Component All | Install all. | P1 |
| 2844 | Installation Component Minimal | Minimal install. | P1 |
| 2845 | Installation Component Custom | Custom selection. | P1 |
| 2846 | Installation Component Description | Show component info. | P1 |
| 2847 | Installation Component Size | Show component size. | P1 |
| 2848 | Installation Component Dependencies | Show dependencies. | P1 |
| 2849 | Installation Progress Bar | Visual progress. | P1 |
| 2850 | Installation Progress Percentage | Numeric progress. | P1 |
| 2851 | Installation Progress ETA | Time remaining. | P1 |
| 2852 | Installation Progress Details | Show current step. | P1 |
| 2853 | Installation Progress Log | Show detailed log. | P1 |
| 2854 | Installation Completion Summary | Show what was installed. | P1 |
| 2855 | Installation Completion Launch | Launch after install. | P1 |
| 2856 | Installation Completion Readme | Show readme. | P1 |
| 2857 | Installation Completion Register | Register product. | P1 |
| 2858 | Installation Completion Feedback | Request feedback. | P1 |
| 2859 | Installation Completion Survey | Optional survey. | P3 |
| 2860 | Installation Completion Donate | Optional donation. | P3 |
| 2861 | Installation Wizard Welcome | Welcome screen. | P1 |
| 2862 | Installation Wizard License | License agreement. | P1 |
| 2863 | Installation Wizard Components | Component selection. | P1 |
| 2864 | Installation Wizard Path | Install location. | P1 |
| 2865 | Installation Wizard Progress | Installation progress. | P1 |
| 2866 | Installation Wizard Complete | Completion screen. | P1 |
| 2867 | Installation Wizard Back | Previous step. | P1 |
| 2868 | Installation Wizard Next | Next step. | P1 |
| 2869 | Installation Wizard Cancel | Cancel install. | P1 |
| 2870 | Installation Wizard Help | Help button. | P1 |
| 2871 | Uninstall Wizard Welcome | Welcome screen. | P1 |
| 2872 | Uninstall Wizard Reason | Why uninstalling. | P1 |
| 2873 | Uninstall Wizard Feedback | Optional feedback. | P1 |
| 2874 | Uninstall Wizard Progress | Uninstall progress. | P1 |
| 2875 | Uninstall Wizard Complete | Completion screen. | P1 |
| 2876 | Uninstall Wizard Back | Previous step. | P1 |
| 2877 | Uninstall Wizard Next | Next step. | P1 |
| 2878 | Uninstall Wizard Cancel | Cancel uninstall. | P1 |
| 2879 | Uninstall Wizard Help | Help button. | P1 |
| 2880 | Uninstall Wizard Repair | Repair instead. | P1 |
| 2881 | Uninstall Wizard Modify | Modify installation. | P1 |
| 2882 | Upgrade Wizard Welcome | Welcome screen. | P2 |
| 2883 | Upgrade Wizard Backup | Backup before upgrade. | P2 |
| 2884 | Upgrade Wizard Progress | Upgrade progress. | P2 |
| 2885 | Upgrade Wizard Complete | Completion screen. | P2 |
| 2886 | Upgrade Wizard Changelog | What's new. | P2 |
| 2887 | Upgrade Wizard Compatibility | Compatibility check. | P2 |
| 2888 | Upgrade Wizard Rollback | Rollback option. | P2 |
| 2889 | Upgrade Wizard Back | Previous step. | P2 |
| 2890 | Upgrade Wizard Next | Next step. | P2 |
| 2891 | Upgrade Wizard Cancel | Cancel upgrade. | P2 |
| 2892 | Upgrade Wizard Help | Help button. | P2 |
| 2893 | First Run Wizard Welcome | Welcome screen. | P2 |
| 2894 | First Run Wizard Setup | Initial setup. | P2 |
| 2895 | First Run Wizard Preferences | Set preferences. | P2 |
| 2896 | First Run Wizard Tutorial | Quick tutorial. | P2 |
| 2897 | First Run Wizard Sample Data | Load sample data. | P2 |
| 2898 | First Run Wizard Skip | Skip wizard. | P2 |
| 2899 | First Run Wizard Back | Previous step. | P2 |
| 2900 | First Run Wizard Next | Next step. | P2 |

---

## Category 30: Installation & Deployment Final (2901–3000)

| # | Feature | Description | Priority |
|---|---------|-------------|----------|
| 2901 | First Run Wizard Cancel | Cancel wizard. | P2 |
| 2902 | First Run Wizard Help | Help button. | P2 |
| 2903 | First Run Wizard Complete | Completion screen. | P2 |
| 2904 | First Run Wizard Launch | Launch app. | P2 |
| 2905 | First Run Wizard Register | Register product. | P2 |
| 2906 | First Run Wizard Survey | Optional survey. | P3 |
| 2907 | Repair Wizard Welcome | Welcome screen. | P2 |
| 2908 | Repair Wizard Diagnose | Diagnose issues. | P2 |
| 2909 | Repair Wizard Fix | Fix issues. | P2 |
| 2910 | Repair Wizard Progress | Repair progress. | P2 |
| 2911 | Repair Wizard Complete | Completion screen. | P2 |
| 2912 | Repair Wizard Report | Generate report. | P2 |
| 2913 | Repair Wizard Back | Previous step. | P2 |
| 2914 | Repair Wizard Next | Next step. | P2 |
| 2915 | Repair Wizard Cancel | Cancel repair. | P2 |
| 2916 | Repair Wizard Help | Help button. | P2 |
| 2917 | Custom Action Pre-Install | Run before install. | P3 |
| 2918 | Custom Action Post-Install | Run after install. | P3 |
| 2919 | Custom Action Pre-Uninstall | Run before uninstall. | P3 |
| 2920 | Custom Action Post-Uninstall | Run after uninstall. | P3 |
| 2921 | Custom Action Pre-Upgrade | Run before upgrade. | P3 |
| 2922 | Custom Action Post-Upgrade | Run after upgrade. | P3 |
| 2923 | Custom Action Script | Run custom script. | P3 |
| 2924 | Custom Action Executable | Run custom exe. | P3 |
| 2925 | Custom Action Registry | Modify registry. | P3 |
| 2926 | Custom Action File Copy | Copy files. | P3 |
| 2927 | Custom Action File Delete | Delete files. | P3 |
| 2928 | Custom Action Service Install | Install service. | P3 |
| 2929 | Custom Action Service Start | Start service. | P3 |
| 2930 | Custom Action Service Stop | Stop service. | P3 |
| 2931 | Custom Action Service Remove | Remove service. | P3 |
| 2932 | Installation Language Selection | Choose language. | P1 |
| 2933 | Installation Language Auto-Detect | Auto-detect language. | P1 |
| 2934 | Installation Language English | English. | P1 |
| 2935 | Installation Language Hindi | Hindi. | P3 |
| 2936 | Installation Language Tamil | Tamil. | P3 |
| 2937 | Installation Language Telugu | Telugu. | P3 |
| 2938 | Installation Language Marathi | Marathi. | P3 |
| 2939 | Installation Language Gujarati | Gujarati. | P3 |
| 2940 | Installation Language Bengali | Bengali. | P3 |
| 2941 | Installation Language Kannada | Kannada. | P3 |
| 2942 | Installation Language Malayalam | Malayalam. | P3 |
| 2943 | Installation Language Punjabi | Punjabi. | P3 |
| 2944 | Installation Language Urdu | Urdu. | P3 |
| 2945 | Installation EULA | End user license. | P1 |
| 2946 | Installation EULA Accept | Accept agreement. | P1 |
| 2947 | Installation EULA Decline | Decline agreement. | P1 |
| 2948 | Installation EULA Print | Print agreement. | P1 |
| 2949 | Installation EULA Save | Save agreement. | P1 |
| 2950 | Installation Privacy Policy | Privacy policy. | P1 |
| 2951 | Installation Privacy Policy Accept | Accept policy. | P1 |
| 2952 | Installation Privacy Policy Decline | Decline policy. | P1 |
| 2953 | Installation Privacy Policy Print | Print policy. | P1 |
| 2954 | Installation Privacy Policy Save | Save policy. | P1 |
| 2955 | Installation Data Collection | Data collection notice. | P1 |
| 2956 | Installation Data Collection Toggle | Opt-in/out. | P1 |
| 2957 | Installation Data Collection Details | What is collected. | P1 |
| 2958 | Installation Shortcut Desktop | Desktop shortcut. | P1 |
| 2959 | Installation Shortcut Start Menu | Start menu entry. | P1 |
| 2960 | Installation Shortcut Quick Launch | Quick launch bar. | P1 |
| 2961 | Installation Shortcut Taskbar | Taskbar pin. | P1 |
| 2962 | Installation Shortcut All Users | For all users. | P1 |
| 2963 | Installation Shortcut Current User | For current user only. | P1 |
| 2964 | Installation File Association | Associate file types. | P1 |
| 2965 | Installation File Association .sproj | Project files. | P1 |
| 2966 | Installation File Association .png | PNG files. | P1 |
| 2967 | Installation File Association .jpg | JPG files. | P1 |
| 2968 | Installation File Association .tiff | TIFF files. | P1 |
| 2969 | Installation File Association .svg | SVG files. | P1 |
| 2970 | Installation File Association .pdf | PDF files. | P1 |
| 2971 | Installation Context Menu | Right-click actions. | P1 |
| 2972 | Installation Context Menu Open | Open with app. | P1 |
| 2973 | Installation Context Menu Edit | Edit with app. | P1 |
| 2974 | Installation Context Menu Upscale | Upscale with app. | P1 |
| 2975 | Installation Context Menu Print | Print with app. | P1 |
| 2976 | Installation Firewall Exception | Add firewall rule. | P2 |
| 2977 | Installation Firewall Exception Toggle | On/off. | P2 |
| 2978 | Installation Antivirus Exception | Add AV exception. | P2 |
| 2979 | Installation Antivirus Exception Toggle | On/off. | P2 |
| 2980 | Installation Windows Defender | Add WD exception. | P2 |
| 2981 | Installation Windows Defender Toggle | On/off. | P2 |
| 2982 | Installation Performance Optimization | Optimize for performance. | P2 |
| 2983 | Installation Performance Optimization Toggle | On/off. | P2 |
| 2984 | Installation Performance Optimization Details | What is optimized. | P2 |
| 2985 | Installation Compatibility Mode | Run in compatibility mode. | P2 |
| 2986 | Installation Compatibility Mode Toggle | On/off. | P2 |
| 2987 | Installation Compatibility Mode OS | Target OS version. | P2 |
| 2988 | Installation Administrator Rights | Require admin. | P1 |
| 2989 | Installation Administrator Rights Check | Verify admin. | P1 |
| 2990 | Installation Administrator Rights Elevate | Request elevation. | P1 |
| 2991 | Installation UAC Prompt | User Account Control. | P1 |
| 2992 | Installation UAC Prompt Description | Explain why admin needed. | P1 |
| 2993 | Installation Digital Signature | Signed installer. | P1 |
| 2994 | Installation Digital Signature Verify | Verify signature. | P1 |
| 2995 | Installation Digital Signature Invalid Alert | Invalid signature alert. | P1 |
| 2996 | Installation Hash Verification | Verify installer hash. | P2 |
| 2997 | Installation Hash Verification MD5 | MD5 check. | P2 |
| 2998 | Installation Hash Verification SHA256 | SHA256 check. | P2 |
| 2999 | Installation Hash Verification Display | Show hash value. | P2 |
| 3000 | Installation Hash Verification Compare | Compare to known good. | P2 |

---

## Scope Confirmation

**INCLUDED:** Design Studio, Upscale Factory, Design Store, Order Basket, Print Sheet Builder, Export System, Hardware Integration (Printers/Cutters), Color Management, Quality Control, Production Reports, Notifications & Alerts, Testing & Diagnostics, Settings & System, Installation & Deployment, Bonus & Delight.

**EXCLUDED:** Inventory Management, CRM, RTO/Returns Processing, Shipping/Delivery Tracking, Stock/Supplier Management, Revenue/Profit Accounting, Salesperson Management, Loyalty Points.

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-06-06 | Product Team | Initial 3,000-feature specification |
