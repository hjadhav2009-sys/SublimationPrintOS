# SublimationPrintOS — User Stories

> **Version:** 1.0 | **Date:** 2026-06-06 | **Status:** Approved

---

## 1. Personas

| Persona | Role | Business | Tech Level | Primary Goals |
|---------|------|----------|------------|---------------|
| Rajesh | Admin | Shop owner, 3 workers, keychains/mugs/hangers | Medium | Reduce waste, track production, prevent mistakes |
| Priya | Designer | Creates festival designs, handles artwork | High | Design fast, manage library, ensure quality |
| Amit | Worker | Operates heat press and cutter | Low | See what to print, know settings, finish on time |
| Sneha | QC Worker | Checks output before pressing | Medium | Catch defects, document issues, suggest fixes |

---

## 2. Upscale Factory Stories

**US-UF-001:** As a Designer, I want to upload a single image by clicking Upload or dragging it onto the window, so that I can start upscaling quickly. *(Must have)*

**US-UF-002:** As a Designer, I want to upload multiple images at once by selecting a folder or dropping files, so that I can process batches efficiently. *(Must have)*

**US-UF-003:** As a Designer, I want the system to watch a folder and auto-process new images, so that I can save directly from Photoshop without manual importing. *(Should have)*

**US-UF-004:** As a Designer, I want to see a before/after split view with a draggable slider, so that I can verify the upscale quality before approving. *(Must have)*

**US-UF-005:** As a Designer, I want the system to auto-detect blurry images and flag them, so that I don't waste time on unprintable source files. *(Must have)*

**US-UF-006:** As a Designer, I want to batch approve or reject images with one click, so that I can process large queues quickly. *(Should have)*

**US-UF-007:** As a Designer, I want rejected images moved to a Rejected folder with a reason log, so that I can review them later or re-process with different settings. *(Should have)*

**US-UF-008:** As a Designer, I want the system to process upscaling in the background while I work in the Design Studio, so that I don't wait idle. *(Must have)*

**US-UF-009:** As a Designer, I want to choose between 2x, 4x, and 8x upscale factors, so that I can match the output to my print size needs. *(Must have)*

**US-UF-010:** As a Designer, I want the system to automatically use my GPU for fast processing but fallback to CPU if the GPU crashes, so that the job never gets stuck. *(Must have)*

---

## 3. Design Studio Stories

**US-DS-001:** As a Designer, I want a Canva-like canvas where I can drag and drop images, add text, and resize elements, so that I can create print-ready designs without learning Photoshop. *(Must have)*

**US-DS-002:** As a Designer, I want to apply a keychain template (round 50mm) and have my image auto-fit inside the shape with bleed, so that I don't calculate margins manually. *(Must have)*

**US-DS-003:** As a Designer, I want to add text in Hindi and English with various fonts, so that I can create personalized products for local customers. *(Must have)*

**US-DS-004:** As a Designer, I want to flip an image horizontally and vertically with one click, so that I can prepare designs for sublimation transfer printing. *(Must have)*

**US-DS-005:** As a Designer, I want layers that I can reorder, lock, hide, and rename, so that I can organize complex designs. *(Must have)*

**US-DS-006:** As a Designer, I want to zoom to 400% and pan around the canvas smoothly, so that I can align elements precisely. *(Must have)*

**US-DS-007:** As a Designer, I want smart guides that appear when objects align, so that I can position elements perfectly without manual measurement. *(Must have)*

**US-DS-008:** As a Designer, I want to group objects and apply effects (drop shadow, stroke) to the group, so that I can create professional-looking designs. *(Should have)*

**US-DS-009:** As a Designer, I want to apply a Diwali festival template with pre-made decorative elements, so that I can create seasonal designs in minutes. *(Should have)*

**US-DS-010:** As a Designer, I want to undo up to 100 steps, so that I can experiment freely without fear of breaking my design. *(Must have)*

**US-DS-011:** As a Designer, I want auto-save every 2 minutes, so that I never lose work if the power goes out. *(Must have)*

**US-DS-012:** As a Designer, I want to export my design as a PNG with transparency or as a PDF with bleed marks, so that I can send it directly to the Print Sheet Builder. *(Must have)*

---

## 4. Design Store Stories

**US-DST-001:** As a Designer, I want to browse my designs in a grid with large thumbnails, so that I can quickly find the right design visually. *(Must have)*

**US-DST-002:** As a Designer, I want to search designs by name or SKU and see results instantly, so that I can find specific designs among thousands. *(Must have)*

**US-DST-003:** As a Designer, I want to filter designs by category (keychain, mug, shirt) and tags, so that I can narrow down my search. *(Must have)*

**US-DST-004:** As an Admin, I want to see which designs are most printed and which are never used, so that I can decide which designs to promote or retire. *(Should have)*

**US-DST-005:** As a Designer, I want to mark designs as favorites, so that I can quickly access my most-used designs. *(Should have)*

**US-DST-006:** As a Designer, I want to see a full-screen preview of a design at maximum resolution, so that I can check quality before adding it to an order. *(Must have)*

**US-DST-007:** As an Admin, I want an approval workflow where designs must be approved before they appear in the store, so that workers don't accidentally print unapproved drafts. *(Should have)*

**US-DST-008:** As a Designer, I want to bulk assign categories to 50 designs at once, so that I don't have to edit each one individually. *(Should have)*

**US-DST-009:** As a Designer, I want the system to detect duplicate or similar designs automatically, so that I don't accidentally create redundant entries. *(Should have)*

**US-DST-010:** As a Designer, I want to replace an image file while keeping all metadata and tags, so that I can update a design without losing its history. *(Should have)*

---

## 5. Order Basket Stories

**US-OB-001:** As a Worker, I want to add designs from the Design Store to a basket with one click, so that I can build a production list quickly. *(Must have)*

**US-OB-002:** As a Worker, I want to type exact quantities (e.g., 150 pieces) and use +1/-1 buttons, so that I can adjust counts precisely. *(Must have)*

**US-OB-003:** As a Worker, I want to select the substrate (metal, ceramic, polyester) for each item, so that the system knows which press settings to use later. *(Must have)*

**US-OB-004:** As a Worker, I want to see the total piece count and number of unique designs in my basket, so that I can verify the order before proceeding. *(Must have)*

**US-OB-005:** As an Admin, I want to save an incomplete basket as a draft, so that I can resume it later without re-entering everything. *(Should have)*

**US-OB-006:** As a Worker, I want to duplicate a basket to create a similar order, so that I don't re-enter common orders from scratch. *(Should have)*

**US-OB-007:** As a Worker, I want to print a barcode for my basket, so that I can scan it at the press station to load the right settings. *(Could have)*

**US-OB-008:** As a Worker, I want to set priority (Urgent/Normal/Low) per order, so that urgent jobs get printed first. *(Should have)*

**US-OB-009:** As a Worker, I want to add notes to each line item (e.g., "Customer wants red border"), so that special instructions are visible during production. *(Should have)*

**US-OB-010:** As an Admin, I want to export the basket as a CSV, so that I can share it with another PC on the network. *(Could have)*

---

## 6. Print Sheet Builder Stories

**US-PS-001:** As a Worker, I want to select A4 or A3 paper size and have the system auto-arrange my designs to minimize waste, so that I save paper and ink. *(Must have)*

**US-PS-002:** As a Worker, I want to see the waste percentage and number of sheets needed before printing, so that I can decide if the layout is efficient enough. *(Must have)*

**US-PS-003:** As a Worker, I want to manually drag and reposition designs on the sheet, so that I can adjust the auto-layout for special cases. *(Must have)*

**US-PS-004:** As a Worker, I want the system to auto-generate additional pages when one sheet is full, so that I don't have to create pages manually. *(Must have)*

**US-PS-005:** As a Worker, I want to set margins and gaps between designs in millimeters, so that I have clean cut lines. *(Must have)*

**US-PS-006:** As a Worker, I want to rotate individual designs on the sheet to fit better, so that the nesting is more efficient. *(Must have)*

**US-PS-007:** As a Worker, I want to fill a sheet with copies of a single design automatically, so that I don't place them one by one. *(Must have)*

**US-PS-008:** As a Worker, I want to add cut marks, safe guides, and registration marks to the sheet, so that the cutter operator knows exactly where to cut. *(Must have)*

**US-PS-009:** As a Worker, I want to mirror the entire sheet horizontally for sublimation transfer, so that the image prints correctly on the substrate. *(Must have)*

**US-PS-010:** As an Admin, I want to choose between different nesting algorithms (Shelf, Guillotine, True-Shape), so that I can optimize for different job types. *(Should have)*

**US-PS-011:** As a Worker, I want page numbers and a QR code on each sheet, so that I can track which sheet belongs to which job. *(Should have)*

**US-PS-012:** As a Worker, I want to see the press settings (temperature, time, pressure) printed on the sheet margin, so that Amit knows exactly how to press each job. *(Should have)*

---

## 7. Export System Stories

**US-EX-001:** As a Worker, I want to export my print sheets as high-resolution PNGs at 300 DPI, so that they are ready for the RIP software. *(Must have)*

**US-EX-002:** As a Worker, I want to export as a multi-page PDF with all marks included, so that I can send one file to the printer. *(Must have)*

**US-EX-003:** As a Worker, I want to export both normal and mirrored versions in one click, so that I don't forget to mirror for sublimation. *(Must have)*

**US-EX-004:** As a Designer, I want to export a ZIP file containing all sheets and a summary report, so that I can archive the complete job. *(Should have)*

**US-EX-005:** As an Admin, I want to save export presets (format, DPI, marks, color space), so that I don't reconfigure for every job. *(Should have)*

**US-EX-006:** As a Worker, I want the export to include the ICC color profile, so that colors print accurately. *(Should have)*

**US-EX-007:** As a Worker, I want to export only selected pages, so that I can reprint a specific sheet without regenerating everything. *(Should have)*

**US-EX-008:** As a Designer, I want to export individual layers as separate PNGs, so that I can use them in other projects. *(Could have)*

---

## 8. Hardware Integration Stories

**US-HW-001:** As a Worker, I want to see all connected printers in a list with their status (online, offline, busy), so that I know which printer to use. *(Should have)*

**US-HW-002:** As a Worker, I want to see ink levels for each color, so that I know if I need to refill before starting a large job. *(Should have)*

**US-HW-003:** As a Worker, I want to send a print job directly from the software to the printer queue, so that I don't use a separate RIP program. *(Could have)*

**US-HW-004:** As a Worker, I want the software to save files to a hot folder that my RIP software watches, so that printing is automatic. *(Must have)*

**US-HW-005:** As a Worker, I want to send contour cut paths to my Summa cutter, so that the shapes are cut accurately after printing. *(Should have)*

**US-HW-006:** As an Admin, I want to run a nozzle check pattern from the software, so that I can verify print head health without using the printer panel. *(Should have)*

**US-HW-007:** As a Worker, I want a press timer that beeps and flashes when the pressing time is complete, so that I don't burn substrates. *(Must have)*

**US-HW-008:** As an Admin, I want the software to support different press times for different substrates (e.g., mug 180s, keychain 60s), so that settings are automatic. *(Must have)*

**US-HW-009:** As a Worker, I want to scan a barcode to load the correct job settings, so that I don't manually search for orders. *(Could have)*

**US-HW-010:** As an Admin, I want to see a maintenance log for each printer, so that I know when the next service is due. *(Should have)*

---

## 9. Color Management Stories

**US-CM-001:** As a Designer, I want to select an ICC profile for my specific substrate (e.g., ceramic mug coating), so that colors print accurately. *(Should have)*

**US-CM-002:** As a Designer, I want soft proofing that shows me how the print will look on the actual substrate, so that I can adjust colors before printing. *(Should have)*

**US-CM-003:** As a Designer, I want the system to warn me if colors are outside the printable gamut, so that I can fix them before waste. *(Should have)*

**US-CM-004:** As an Admin, I want to upload custom ICC profiles from my colorimeter, so that I can use profiles specific to my inks and papers. *(Could have)*

**US-CM-005:** As a Designer, I want to see a color separation preview (Cyan only, Magenta only, etc.), so that I can check ink coverage. *(Could have)*

---

## 10. Production Reports Stories

**US-RP-001:** As an Admin, I want a daily report showing how many pieces were printed, sheets used, and average nesting efficiency, so that I can track productivity. *(Should have)*

**US-RP-002:** As an Admin, I want to see which designs are most popular over the last month, so that I can stock more of those substrates. *(Should have)*

**US-RP-003:** As an Admin, I want a waste report showing material wasted per job, so that I can identify inefficient layouts. *(Should have)*

**US-RP-004:** As an Admin, I want to see worker productivity (pieces per worker per day), so that I can recognize top performers. *(Could have)*

**US-RP-005:** As an Admin, I want a defect rate report showing ghosting, color, and alignment issues, so that I can address quality problems. *(Should have)*

**US-RP-006:** As an Admin, I want to export reports as Excel files, so that I can analyze them in my own spreadsheets. *(Should have)*

---

## 11. Settings & System Stories

**US-SET-001:** As an Admin, I want to set my company name and logo, so that it appears on print sheets and reports. *(Must have)*

**US-SET-002:** As an Admin, I want to set default page size, margins, and DPI, so that new projects start with my shop's standard settings. *(Must have)*

**US-SET-003:** As a Worker, I want to switch between dark mode and light mode, so that the screen is comfortable in my lighting conditions. *(Should have)*

**US-SET-004:** As an Admin, I want to set up automatic daily backups, so that I don't lose everything if the computer crashes. *(Should have)*

**US-SET-005:** As an Admin, I want to customize keyboard shortcuts, so that I can work faster with my preferred key combinations. *(Could have)*

**US-SET-006:** As an Admin, I want to set up different user profiles (Admin, Designer, Worker), so that workers can't accidentally change critical settings. *(Must have)*

**US-SET-007:** As an Admin, I want the software to check for updates on launch and install them silently, so that I always have the latest features. *(Should have)*

**US-SET-008:** As an Admin, I want to run a health check that tells me if my system is ready for production, so that I catch issues before they cause downtime. *(Should have)*

---

## 12. Testing & Diagnostics Stories

**US-TD-001:** As an Admin, I want to print a test page with color bars and gradients, so that I can verify printer health before a big job. *(Should have)*

**US-TD-002:** As an Admin, I want to run a system benchmark that tests my CPU, GPU, and disk speed, so that I know if my PC is adequate for large jobs. *(Should have)*

**US-TD-003:** As an Admin, I want a database integrity check that verifies no corruption, so that I can fix issues before they cause data loss. *(Should have)*

**US-TD-004:** As an Admin, I want to simulate a power loss during export to verify recovery, so that I know the software is robust. *(Could have)*

**US-TD-005:** As an Admin, I want a troubleshooting wizard that guides me through fixing common printer and cutter issues, so that I don't call support for simple problems. *(Should have)*

---

## 13. Bonus & Delight Stories

**US-BD-001:** As a Worker, I want the software to show a friendly empty state illustration when a module is empty, so that the interface feels welcoming. *(Could have)*

**US-BD-002:** As a Designer, I want achievement badges (e.g., "First Design", "1000 Prints"), so that work feels rewarding. *(Won't have - P3)*

**US-BD-003:** As a Worker, I want voice commands ("Start timer", "Next job"), so that I can operate hands-free while handling hot substrates. *(Won't have - P3)*

**US-BD-004:** As a Designer, I want animated transitions between screens, so that the app feels modern and polished. *(Could have)*

**US-BD-005:** As a Worker, I want a daily production tip on startup, so that I learn new tricks over time. *(Could have)*

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-06-06 | Product Team | Initial user stories |
