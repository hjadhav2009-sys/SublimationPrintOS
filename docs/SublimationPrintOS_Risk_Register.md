# SublimationPrintOS — Risk Register

> **Version:** 1.0 | **Date:** 2026-06-06 | **Status:** Approved

---

## 1. Risk Management Overview

This document identifies, analyzes, and plans responses for all significant risks to the SublimationPrintOS project. Risks are categorized by source (technical, schedule, resource, external, business) and assessed by probability (1-5) and impact (1-5). Risk score = Probability × Impact. Risks with score ≥ 12 are considered high priority and require active mitigation.

---

## 2. Risk Summary Matrix

| Risk ID | Category | Description | Probability | Impact | Score | Status | Owner |
|---------|----------|-------------|-------------|--------|-------|--------|-------|
| R-001 | Technical | Real-ESRGAN ncnn Vulkan integration fails on target GPUs | 4 | 5 | 20 | Active | AI Lead |
| R-002 | Technical | Canvas engine (Fabric.js/Konva.js) performance degrades with 500+ objects | 4 | 5 | 20 | Active | Frontend Lead |
| R-003 | Technical | True-shape nesting algorithm too slow for production use | 3 | 4 | 12 | Active | Backend Lead |
| R-004 | Technical | SQLite database corruption under heavy concurrent load | 2 | 5 | 10 | Monitoring | Backend Lead |
| R-005 | Technical | PDF/X-4 compliance validation fails in RIP software | 3 | 4 | 12 | Active | Backend Lead |
| R-006 | Technical | Windows installer fails on non-admin accounts | 3 | 3 | 9 | Monitoring | DevOps |
| R-007 | Technical | GPU driver crash during upscale causes data loss | 3 | 4 | 12 | Active | AI Lead |
| R-008 | Technical | Memory leak in batch upscale queue over 24-hour operation | 3 | 4 | 12 | Active | AI Lead |
| R-009 | Technical | Hot folder write fails when network drive disconnects | 3 | 3 | 9 | Monitoring | Backend Lead |
| R-010 | Technical | ICC profile embedding incompatible with major RIP software | 2 | 4 | 8 | Monitoring | Backend Lead |
| R-011 | Schedule | Phase 2 (Design Studio) exceeds 10-week estimate | 4 | 4 | 16 | Active | Project Manager |
| R-012 | Schedule | Phase 5 (Hardware Integration) delayed due to hardware availability | 3 | 4 | 12 | Active | Project Manager |
| R-013 | Schedule | Beta program feedback requires significant rework | 3 | 3 | 9 | Monitoring | Project Manager |
| R-014 | Schedule | Documentation incomplete at GA release | 3 | 3 | 9 | Monitoring | Tech Writer |
| R-015 | Resource | Frontend developer shortage during Phase 2 peak | 3 | 4 | 12 | Active | Project Manager |
| R-016 | Resource | AI/ML specialist unavailable for Phase 0-1 | 2 | 4 | 8 | Monitoring | Project Manager |
| R-017 | Resource | QA team insufficient for Phase 6 testing load | 3 | 3 | 9 | Monitoring | QA Lead |
| R-018 | External | Windows 11 update breaks compatibility | 2 | 4 | 8 | Monitoring | DevOps |
| R-019 | External | Real-ESRGAN model license changes | 1 | 3 | 3 | Watching | Legal |
| R-020 | External | RIP software vendor API changes | 2 | 3 | 6 | Watching | Backend Lead |
| R-021 | External | GPU driver update causes ncnn incompatibility | 3 | 4 | 12 | Active | AI Lead |
| R-022 | Business | Customer expects inventory/CRM features (out of scope) | 3 | 3 | 9 | Monitoring | Product Manager |
| R-023 | Business | Competitor releases similar product before GA | 2 | 4 | 8 | Monitoring | Product Manager |
| R-024 | Business | Pricing model rejected by beta customers | 2 | 3 | 6 | Watching | Product Manager |
| R-025 | Business | 3,000-feature scope creep during development | 4 | 5 | 20 | Active | Product Manager |
| R-026 | Security | Local database encryption key lost by user | 2 | 4 | 8 | Monitoring | Security Lead |
| R-027 | Security | Crash report contains sensitive design data | 2 | 5 | 10 | Monitoring | Security Lead |
| R-028 | Quality | Color accuracy Delta E > 2.0 on ceramic substrates | 3 | 4 | 12 | Active | QA Lead |
| R-029 | Quality | Nesting efficiency < 80% on typical orders | 3 | 4 | 12 | Active | QA Lead |
| R-030 | Quality | Press timer accuracy drifts > 5 seconds over 10 minutes | 2 | 4 | 8 | Monitoring | QA Lead |

---

## 3. High-Priority Risks (Score ≥ 12)

### R-001: Real-ESRGAN ncnn Vulkan Integration Fails on Target GPUs

| Attribute | Detail |
|-------------|--------|
| **Category** | Technical |
| **Probability** | 4 (Likely) |
| **Impact** | 5 (Critical) |
| **Score** | 20 |
| **Owner** | AI Lead |
| **Status** | Active |

**Description:** Real-ESRGAN ncnn Vulkan may fail to initialize or crash on certain GPU models (especially older NVIDIA GTX series or AMD RX 500 series) due to Vulkan driver incompatibility, missing extensions, or insufficient VRAM. This would break the core AI upscaling feature.

**Root Causes:**
- Vulkan 1.2+ requirement not met on older drivers
- GPU VRAM < 4GB insufficient for 4x upscale of large images
- ncnn library compiled with incompatible Vulkan SDK version
- AMD GPU driver bugs with compute shaders

**Mitigation Strategy:**
1. **Prevention:** Compile ncnn with multiple Vulkan SDK versions (1.2, 1.3). Test on 10+ GPU models in lab by Week 3.
2. **Reduction:** Implement graceful CPU fallback that activates automatically when GPU initialization fails. Target: CPU upscale < 2 minutes per A4 image.
3. **Contingency:** If GPU support is unreliable for > 30% of target hardware, switch default to CPU with optional GPU acceleration toggle.
4. **Transfer:** Document GPU requirements clearly in installer and settings. Provide "GPU Test" button in health check.

**Trigger:** GPU initialization fails 3 times in a row → auto-fallback to CPU + user notification.

**Contingency Plan:**
- Week 2: Build ncnn with Vulkan 1.2 and 1.3
- Week 3: Test on NVIDIA GTX 1060, 1660, 3060; AMD RX 580, 6600; Intel UHD 630
- Week 4: Implement CPU fallback path
- Week 5: If GPU failure rate > 20%, escalate to project manager

---

### R-002: Canvas Engine Performance Degrades with 500+ Objects

| Attribute | Detail |
|-------------|--------|
| **Category** | Technical |
| **Probability** | 4 (Likely) |
| **Impact** | 5 (Critical) |
| **Score** | 20 |
| **Owner** | Frontend Lead |
| **Status** | Active |

**Description:** The Fabric.js or Konva.js canvas engine may drop below 30 FPS when 500+ objects are on screen simultaneously, causing sluggish drag, zoom, and selection operations. This directly impacts the Design Studio usability.

**Root Causes:**
- Canvas 2D context rendering too many objects per frame
- No object culling (rendering off-screen objects)
- Excessive event listeners on individual objects
- Memory pressure from large image textures

**Mitigation Strategy:**
1. **Prevention:** Prototype canvas engine with 500 objects by Week 8. Benchmark FPS before committing to full implementation.
2. **Reduction:** Implement viewport culling (only render visible objects). Use object pooling for shapes. Batch render operations. Use WebGL renderer if available (Konva.js WebGL backend).
3. **Contingency:** If 500-object target not met, reduce target to 200 objects and implement "page groups" (only active page renders fully, others simplified).
4. **Transfer:** Document performance limits. Provide "Simplify Mode" that reduces visual fidelity during heavy operations.

**Trigger:** FPS < 30 during 500-object stress test → activate optimization sprint.

**Contingency Plan:**
- Week 8: Prototype with 500 objects, measure FPS
- Week 10: If FPS < 30, implement culling and pooling
- Week 12: If still < 30, evaluate WebGL renderer switch
- Week 14: If still < 30, reduce target to 200 objects + page groups

---

### R-011: Phase 2 (Design Studio) Exceeds 10-Week Estimate

| Attribute | Detail |
|-------------|--------|
| **Category** | Schedule |
| **Probability** | 4 (Likely) |
| **Impact** | 4 (Major) |
| **Score** | 16 |
| **Owner** | Project Manager |
| **Status** | Active |

**Description:** The Design Studio is the most complex UI module with 150+ features (text, shapes, effects, layers, templates, image editing). It may exceed the 10-week estimate, delaying subsequent phases.

**Root Causes:**
- Feature scope larger than estimated (text on path, liquify, puppet warp)
- Canvas engine performance issues requiring rework
- Template system complexity (100+ templates with auto-fit logic)
- Cross-browser/electron compatibility issues

**Mitigation Strategy:**
1. **Prevention:** Break Phase 2 into 3 sub-milestones (Week 12: basic shapes + text, Week 15: effects + layers, Week 19: templates + advanced). Review progress weekly.
2. **Reduction:** Prioritize P0 features first. Defer P2/P3 features (liquify, puppet warp, advanced filters) to Phase 6 or Version 2.0.
3. **Contingency:** If behind by > 2 weeks at Week 15, cut P2 features (text on path, vertical text, advanced image filters) and move to Phase 6.
4. **Transfer:** Hire contract frontend developer for Phase 2 peak (Week 12-17).

**Trigger:** < 50% of planned features complete by Week 15 → activate contingency.

**Contingency Plan:**
- Week 12: Review milestone M2.1 (basic shapes + text). If < 80% complete, escalate.
- Week 15: Review milestone M2.2 (effects + layers). If < 70% complete, cut P2 features.
- Week 17: Review milestone M2.3 (templates). If < 60% complete, extend Phase 2 by 2 weeks, compress Phase 3 by 1 week.

---

### R-025: 3,000-Feature Scope Creep During Development

| Attribute | Detail |
|-------------|--------|
| **Category** | Business |
| **Probability** | 4 (Likely) |
| **Impact** | 5 (Critical) |
| **Score** | 20 |
| **Owner** | Product Manager |
| **Status** | Active |

**Description:** The 3,000-feature list is comprehensive. During development, stakeholders may request additional features (inventory, CRM, shipping) or expand existing features beyond the original specification, causing schedule and budget overruns.

**Root Causes:**
- Stakeholder pressure to match competitor features
- Developer enthusiasm adding "nice-to-have" features
- Customer feedback during beta requesting out-of-scope features
- Unclear boundaries between P0/P1/P2/P3 priorities

**Mitigation Strategy:**
1. **Prevention:** Strict change control process. All feature requests require Product Manager approval and impact assessment. Weekly scope review meetings.
2. **Reduction:** Maintain "excluded features" list prominently. Require written justification for any scope change. Use MoSCoW prioritization strictly.
3. **Contingency:** If scope increases by > 10%, freeze all P2/P3 features and require stakeholder sign-off for any P0/P1 additions.
4. **Transfer:** Create "Version 2.0 Backlog" document for all deferred features. Communicate roadmap clearly to stakeholders.

**Trigger:** Feature count exceeds 3,300 OR P0 count increases by > 5% → activate scope freeze.

**Contingency Plan:**
- Week 6: Review feature count. If > 3,100, freeze all P3 additions.
- Week 12: Review feature count. If > 3,200, freeze all P2 additions.
- Week 19: Review feature count. If > 3,300, require stakeholder sign-off for any new P1.
- Week 24: Feature count must be ≤ 3,300 for Beta 1. Anything else goes to Version 2.0.

---

### R-003: True-Shape Nesting Algorithm Too Slow for Production Use

| Attribute | Detail |
|-------------|--------|
| **Category** | Technical |
| **Probability** | 3 (Possible) |
| **Impact** | 4 (Major) |
| **Score** | 12 |
| **Owner** | Backend Lead |
| **Status** | Active |

**Description:** True-shape nesting (packing irregular shapes like hearts, stars, custom outlines) may require complex geometric computations that take > 30 seconds for 100 items, unacceptable for production workflow.

**Root Causes:**
- No-fit polygon computation is O(n²) or worse
- Shape rotation search space is large (0-360° in small increments)
- JavaScript/Rust implementation may be slower than C++ reference

**Mitigation Strategy:**
1. **Prevention:** Implement shelf algorithm first (fast, rectangle-based). Add true-shape as optional advanced algorithm with time limit.
2. **Reduction:** Pre-compute shape bounding boxes. Use genetic algorithm with early termination. Cache shape silhouettes. Implement Web Worker/Rust backend for computation.
3. **Contingency:** If true-shape > 10 seconds for 100 items, make it a background process with notification on completion. Default to shelf + manual adjust.
4. **Transfer:** Document algorithm performance characteristics. Let user choose speed vs. quality trade-off.

**Trigger:** True-shape nesting of 100 items takes > 10 seconds → activate optimization.

---

### R-005: PDF/X-4 Compliance Validation Fails in RIP Software

| Attribute | Detail |
|-------------|--------|
| **Category** | Technical |
| **Probability** | 3 (Possible) |
| **Impact** | 4 (Major) |
| **Score** | 12 |
| **Owner** | Backend Lead |
| **Status** | Active |

**Description:** Exported PDF/X-4 files may fail validation in RIP software (Caldera, Wasatch, Onyx) due to incorrect color space, missing output intent, or invalid transparency handling.

**Root Causes:**
- PDF generation library (PDFKit/jsPDF) doesn't fully support PDF/X-4
- Color space conversion errors (RGB → CMYK)
- Transparency flattening issues
- Missing ICC output intent

**Mitigation Strategy:**
1. **Prevention:** Use dedicated PDF/X library (e.g., PDF-lib with custom validation). Test with 3 RIP software packages in lab.
2. **Reduction:** Generate PDF/X-1a (simpler, no transparency) as fallback. Provide "RIP Compatibility Mode" that strips advanced features.
3. **Contingency:** If PDF/X-4 fails validation, default to PDF/X-1a for Phase 4, defer PDF/X-4 to Phase 6.
4. **Transfer:** Document RIP compatibility matrix. Provide pre-flight check in export dialog.

**Trigger:** PDF/X-4 fails validation in > 1 RIP software → activate fallback.

---

### R-007: GPU Driver Crash During Upscale Causes Data Loss

| Attribute | Detail |
|-------------|--------|
| **Category** | Technical |
| **Probability** | 3 (Possible) |
| **Impact** | 4 (Major) |
| **Score** | 12 |
| **Owner** | AI Lead |
| **Status** | Active |

**Description:** GPU driver crash (TDR timeout, memory allocation failure) during upscale may corrupt output file or crash the application, losing unsaved work.

**Root Causes:**
- Windows TDR (Timeout Detection and Recovery) resets GPU after 2 seconds
- Large image exceeds GPU VRAM
- Driver bug with specific shader

**Mitigation Strategy:**
1. **Prevention:** Process in small tiles (256×256 or 512×512) to keep each GPU operation under TDR limit. Monitor GPU memory before each operation.
2. **Reduction:** Implement tile-based processing with CPU fallback per tile. Save intermediate results to disk after each tile. Auto-restart GPU context on failure.
3. **Contingency:** If GPU crashes 3 times in one session, disable GPU for remainder of session and use CPU only.
4. **Transfer:** Auto-save project before starting upscale. Notify user of GPU issues and suggest driver update.

**Trigger:** GPU operation fails → retry with smaller tile → if fails again → CPU fallback.

---

### R-008: Memory Leak in Batch Upscale Queue Over 24-Hour Operation

| Attribute | Detail |
|-------------|--------|
| **Category** | Technical |
| **Probability** | 3 (Possible) |
| **Impact** | 4 (Major) |
| **Score** | 12 |
| **Owner** | AI Lead |
| **Status** | Active |

**Description:** Processing 1,000+ images in a batch queue may cause memory usage to grow unbounded, eventually crashing the application or system.

**Root Causes:**
- Image buffers not released after processing
- Thumbnail cache growing without limit
- Queue metadata accumulating in memory
- GPU memory not freed between images

**Mitigation Strategy:**
1. **Prevention:** Implement strict memory management. Release image buffers immediately after save. Limit thumbnail cache to 500MB. Process queue in chunks of 50 images.
2. **Reduction:** Monitor memory usage every 10 images. If RAM usage > 80%, pause queue and prompt user to save/clear. Use streaming processing (load → process → save → unload).
3. **Contingency:** If memory leak detected in testing, switch to external process for upscale (spawn new process per 50 images, terminate after completion).
4. **Transfer:** Document memory requirements. Recommend 16GB+ RAM for large batches.

**Trigger:** RAM usage > 80% during batch processing → pause queue → alert user.

---

### R-012: Phase 5 (Hardware Integration) Delayed Due to Hardware Availability

| Attribute | Detail |
|-------------|--------|
| **Category** | Schedule |
| **Probability** | 3 (Possible) |
| **Impact** | 4 (Major) |
| **Score** | 12 |
| **Owner** | Project Manager |
| **Status** | Active |

**Description:** Physical printers and cutters may not be available in the development lab on schedule, delaying integration and testing.

**Root Causes:**
- Procurement delays for test hardware
- Hardware damaged or requires maintenance
- Vendor loaner equipment not available
- Shipping delays (especially for international vendors)

**Mitigation Strategy:**
1. **Prevention:** Procure test hardware by Week 20 (6 weeks before Phase 5 starts). Maintain relationships with 2+ vendors for loaner equipment.
2. **Reduction:** Implement software simulation mode for all hardware interactions. Use virtual printer/cutter drivers for 80% of development. Physical testing only for final validation.
3. **Contingency:** If hardware unavailable by Week 28, complete 80% of Phase 5 using simulation, defer physical testing to Week 34 (during Phase 6 buffer).
4. **Transfer:** Outsource physical hardware testing to beta customers who own the equipment.

**Trigger:** Hardware not procured by Week 20 → escalate to management.

---

### R-015: Frontend Developer Shortage During Phase 2 Peak

| Attribute | Detail |
|-------------|--------|
| **Category** | Resource |
| **Probability** | 3 (Possible) |
| **Impact** | 4 (Major) |
| **Score** | 12 |
| **Owner** | Project Manager |
| **Status** | Active |

**Description:** Phase 2 requires 3 frontend developers simultaneously (canvas engine, UI components, template system). Team may be understaffed.

**Root Causes:**
- Team size is 2 frontend developers (need 3)
- One developer may be pulled into Phase 1 bug fixes
- Hiring delay for additional frontend developer

**Mitigation Strategy:**
1. **Prevention:** Hire contract frontend developer by Week 8. Cross-train backend developer on frontend basics.
2. **Reduction:** Defer P2 features (advanced effects, text on path) to Phase 6. Focus 3 developers on P0 features only.
3. **Contingency:** If still understaffed, extend Phase 2 by 2 weeks, compress Phase 3 by 1 week.
4. **Transfer:** Outsource template creation (100+ templates) to graphic design contractor, not developers.

**Trigger:** < 3 frontend developers available by Week 10 → activate hiring/contingency.

---

### R-021: GPU Driver Update Causes ncnn Incompatibility

| Attribute | Detail |
|-------------|--------|
| **Category** | External |
| **Probability** | 3 (Possible) |
| **Impact** | 4 (Major) |
| **Score** | 12 |
| **Owner** | AI Lead |
| **Status** | Active |

**Description:** NVIDIA or AMD driver updates after GA release may break ncnn Vulkan compatibility, causing upscaling failures for existing customers.

**Root Causes:**
- Driver removes deprecated Vulkan extensions
- Driver changes memory allocation behavior
- Driver introduces new shader compiler bugs

**Mitigation Strategy:**
1. **Prevention:** Test with 3 most recent driver versions before GA. Monitor driver release notes for Vulkan changes.
2. **Reduction:** Implement driver version detection and warn user if untested driver detected. Maintain compatibility list on website.
3. **Contingency:** If driver update breaks compatibility, release hotfix within 48 hours with updated ncnn build or CPU fallback as default.
4. **Transfer:** Auto-update system checks driver compatibility before installing app updates.

**Trigger:** Customer reports upscale failure after driver update → investigate within 24 hours.

---

### R-028: Color Accuracy Delta E > 2.0 on Ceramic Substrates

| Attribute | Detail |
|-------------|--------|
| **Category** | Quality |
| **Probability** | 3 (Possible) |
| **Impact** | 4 (Major) |
| **Score** | 12 |
| **Owner** | QA Lead |
| **Status** | Active |

**Description:** Soft proofing and ICC profile management may not achieve Delta E < 2.0 color accuracy on ceramic mug substrates, resulting in customer complaints about color mismatch.

**Root Causes:**
- Generic ICC profiles not optimized for specific ceramic coatings
- Monitor calibration not performed by user
- Substrate color affects perceived print color
- Ink density variations

**Mitigation Strategy:**
1. **Prevention:** Include substrate-specific ICC profiles for 10 most common substrates. Provide monitor calibration wizard.
2. **Reduction:** Implement Delta E measurement tool. Show "Color Accuracy Score" in soft proofing mode. Provide color adjustment recommendations.
3. **Contingency:** If Delta E > 2.0 persists, partner with substrate manufacturers for custom profiles. Document expected accuracy limits.
4. **Transfer:** Educate users about color management best practices through onboarding and daily tips.

**Trigger:** Delta E > 2.0 in 3+ test prints → activate profile optimization.

---

### R-029: Nesting Efficiency < 80% on Typical Orders

| Attribute | Detail |
|-------------|--------|
| **Category** | Quality |
| **Probability** | 3 (Possible) |
| **Impact** | 4 (Major) |
| **Score** | 12 |
| **Owner** | QA Lead |
| **Status** | Active |

**Description:** Auto-nesting may achieve < 80% material utilization on typical orders (mixed keychains, mugs, hangers), resulting in excessive waste and customer dissatisfaction.

**Root Causes:**
- Shelf algorithm inefficient for mixed shapes
- True-shape algorithm too slow for production
- Gap settings too conservative
- No rotation optimization

**Mitigation Strategy:**
1. **Prevention:** Benchmark against industry standards (85%+ for rectangles, 75%+ for mixed shapes). Test with 100 real customer orders.
2. **Reduction:** Implement multiple algorithms and auto-select best. Allow manual rotation and placement. Provide efficiency suggestions.
3. **Contingency:** If < 80% on typical orders, add "Aggressive Nesting" mode that reduces gaps and allows more rotation angles. Document trade-offs.
4. **Transfer:** Provide manual nesting as primary mode for complex orders, auto-nest for simple orders.

**Trigger:** Average efficiency < 80% on 100 test orders → algorithm optimization sprint.

---

## 4. Medium-Priority Risks (Score 8-10)

### R-004: SQLite Database Corruption Under Heavy Concurrent Load

| Attribute | Detail |
|-------------|--------|
| **Probability** | 2 (Unlikely) |
| **Impact** | 5 (Critical) |
| **Score** | 10 |
| **Owner** | Backend Lead |
| **Status** | Monitoring |

**Mitigation:** Use WAL (Write-Ahead Logging) mode. Implement automatic integrity check on launch. Daily backups. Database repair tool in Help menu.

### R-010: ICC Profile Embedding Incompatible with Major RIP Software

| Attribute | Detail |
|-------------|--------|
| **Probability** | 2 (Unlikely) |
| **Impact** | 4 (Major) |
| **Score** | 8 |
| **Owner** | Backend Lead |
| **Status** | Monitoring |

**Mitigation:** Test with Caldera, Wasatch, Onyx before GA. Provide "Strip ICC" option. Document compatibility matrix.

### R-014: Documentation Incomplete at GA Release

| Attribute | Detail |
|-------------|--------|
| **Probability** | 3 (Possible) |
| **Impact** | 3 (Moderate) |
| **Score** | 9 |
| **Owner** | Tech Writer |
| **Status** | Monitoring |

**Mitigation:** Start documentation in Week 30. Use in-app contextual help to reduce manual dependency. Prioritize Quick Start Guide and Troubleshooting Guide.

### R-017: QA Team Insufficient for Phase 6 Testing Load

| Attribute | Detail |
|-------------|--------|
| **Probability** | 3 (Possible) |
| **Impact** | 3 (Moderate) |
| **Score** | 9 |
| **Owner** | QA Lead |
| **Status** | Monitoring |

**Mitigation:** Automate 80% of regression tests. Hire contract QA for Phase 6. Prioritize P0 feature testing. Use beta customers for real-world testing.

### R-027: Crash Report Contains Sensitive Design Data

| Attribute | Detail |
|-------------|--------|
| **Probability** | 2 (Unlikely) |
| **Impact** | 5 (Critical) |
| **Score** | 10 |
| **Owner** | Security Lead |
| **Status** | Monitoring |

**Mitigation:** Sanitize all crash reports (strip file paths, design content, customer data). Include only stack traces and system specs. Allow user preview before sending.

---

## 5. Low-Priority Risks (Score < 8)

### R-019: Real-ESRGAN Model License Changes

| Attribute | Detail |
|-------------|--------|
| **Probability** | 1 (Rare) |
| **Impact** | 3 (Moderate) |
| **Score** | 3 |
| **Owner** | Legal |
| **Status** | Watching |

**Mitigation:** Real-ESRGAN is BSD-3-Clause licensed. Low risk. Monitor license changes quarterly.

### R-020: RIP Software Vendor API Changes

| Attribute | Detail |
|-------------|--------|
| **Probability** | 2 (Unlikely) |
| **Impact** | 3 (Moderate) |
| **Score** | 6 |
| **Owner** | Backend Lead |
| **Status** | Watching |

**Mitigation:** Hot folder method is API-independent. Direct API integrations are P2/P3. Maintain abstraction layer for easy API updates.

### R-024: Pricing Model Rejected by Beta Customers

| Attribute | Detail |
|-------------|--------|
| **Probability** | 2 (Unlikely) |
| **Impact** | 3 (Moderate) |
| **Score** | 6 |
| **Owner** | Product Manager |
| **Status** | Watching |

**Mitigation:** Survey beta customers on pricing in Week 30. Offer tiered pricing (Basic/Pro/Enterprise). Provide 30-day trial.

---

## 6. Risk Monitoring & Reporting

### Weekly Risk Review
- **Attendees:** Project Manager, Tech Leads, QA Lead
- **Frequency:** Every Monday, 30 minutes
- **Agenda:** Review top 5 risks, update status, assign actions, escalate if needed

### Risk Escalation Path
1. **Score 15-20:** Daily monitoring by risk owner. Weekly report to Project Manager. Immediate escalation if trigger activated.
2. **Score 10-14:** Weekly monitoring by risk owner. Bi-weekly report to Project Manager.
3. **Score 5-9:** Monthly monitoring. Report in monthly status meeting.
4. **Score 1-4:** Quarterly review. Add to watch list.

### Risk Dashboard
- Real-time risk score display in project management tool
- Color coding: Red (≥15), Orange (10-14), Yellow (5-9), Green (≤4)
- Automated alerts when risk score changes by > 2 points

---

## 7. Risk Response Strategies Summary

| Strategy | Count | Description |
|----------|-------|-------------|
| Avoid | 3 | Change plan to eliminate risk (e.g., use hot folder instead of direct API) |
| Mitigate | 20 | Reduce probability or impact (e.g., CPU fallback for GPU crashes) |
| Transfer | 5 | Shift consequence to third party (e.g., beta customers for hardware testing) |
| Accept | 2 | Acknowledge and monitor (e.g., driver update incompatibility) |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-06-06 | Product Team | Initial risk register |
