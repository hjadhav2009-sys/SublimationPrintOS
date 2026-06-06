# SublimationPrintOS — Change Management Plan

> **Version:** 1.0 | **Date:** 2026-06-06 | **Status:** Approved

---

## 1. Purpose & Scope

### 1.1 Purpose
This document defines the formal process for managing changes to the SublimationPrintOS project scope, requirements, design, schedule, resources, and deliverables. It ensures that all changes are evaluated, approved, implemented, and communicated in a controlled manner, preventing scope creep and maintaining project integrity.

### 1.2 Scope
This change management plan applies to:
- Functional requirements (features, user stories, use cases)
- Non-functional requirements (performance, security, usability)
- Technical architecture and design decisions
- Project schedule and milestones
- Resource allocation (team members, budget, hardware)
- Technology stack and third-party dependencies
- Excluded features (inventory, CRM, RTO, shipping, revenue, etc.)

### 1.3 Out of Scope
- Bug fixes and defect corrections (handled via defect tracking process)
- Routine code refactoring (handled via code review process)
- Internal team process improvements (handled via retrospectives)
- Documentation typo corrections (handled via peer review)

---

## 2. Change Categories

### 2.1 Category Definitions

| Category | Description | Examples | Approval Authority |
|----------|-------------|----------|-------------------|
| **Type A: Critical** | Changes required to fix blocking issues, security vulnerabilities, or compliance failures | Remove insecure dependency, fix data loss bug, address legal requirement | Project Sponsor + Product Manager |
| **Type B: Major** | Changes affecting project scope, schedule, or cost by > 10% | Add new module, change technology stack, extend timeline by 2+ weeks | Product Manager + Tech Lead |
| **Type C: Minor** | Changes affecting specific features within existing scope | Add new feature variant, modify UI layout, adjust algorithm parameters | Tech Lead + Feature Owner |
| **Type D: Cosmetic** | Changes to appearance, wording, or non-functional polish | Color scheme adjustment, tooltip text change, animation speed | Feature Owner |

### 2.2 Change Impact Assessment Matrix

| Impact Area | Type A | Type B | Type C | Type D |
|-------------|--------|--------|--------|--------|
| Schedule | > 2 weeks | 3-10 days | 1-2 days | < 1 day |
| Effort | > 80 hours | 20-80 hours | 4-20 hours | < 4 hours |
| Cost | > $10,000 | $2,000-$10,000 | $500-$2,000 | < $500 |
| Risk | Critical | High | Medium | Low |
| Features Affected | > 50 | 10-50 | 2-10 | 1 |
| Documentation | Full rewrite | Major update | Minor update | No change |
| Testing | Full regression | Module regression | Unit + integration | Visual check |

---

## 3. Change Control Board (CCB)

### 3.1 CCB Composition

| Role | Name/Title | Responsibility | Vote |
|------|------------|--------------|------|
| Chair | Product Manager | Final arbiter, schedule guardian | Approve/Reject/Veto |
| Member | Tech Lead (Frontend) | Assess technical feasibility, frontend impact | Recommend |
| Member | Tech Lead (Backend/AI) | Assess backend/AI feasibility, performance impact | Recommend |
| Member | QA Lead | Assess testing impact, quality risk | Recommend |
| Member | DevOps Lead | Assess infrastructure, deployment impact | Recommend |
| Observer | Tech Writer | Assess documentation impact | Advisory |
| Observer | Project Manager | Track schedule, resource impact | Advisory |

### 3.2 CCB Meeting Schedule

| Meeting Type | Frequency | Duration | Attendees | Trigger |
|--------------|-----------|----------|-----------|---------|
| Weekly CCB Review | Every Tuesday, 10:00 AM | 30 minutes | All members | Standing meeting |
| Emergency CCB | Within 24 hours of request | 60 minutes | Chair + relevant members | Type A or B change request |
| Ad-hoc CCB | As needed | 30 minutes | Chair + 2 members | Type C change request |
| Async CCB | Daily (Slack/email) | N/A | All members | Type D change request |

### 3.3 CCB Decision Authority

| Change Type | CCB Decision | Escalation Path |
|-------------|--------------|-----------------|
| Type A: Critical | Unanimous approval required (all 4 members) | Project Sponsor if unanimous not achieved |
| Type B: Major | 3 of 4 members approve | Project Sponsor if split vote |
| Type C: Minor | Chair + 1 relevant member approve | Tech Lead if chair unavailable |
| Type D: Cosmetic | Feature owner approves, inform chair | N/A |

---

## 4. Change Request Process

### 4.1 Process Flow

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   IDENTIFY  │───►│   SUBMIT    │───►│   TRIAGE    │───►│   ANALYZE   │
│   CHANGE    │    │   REQUEST   │    │   & CLASSIFY│    │   IMPACT    │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
                                                          │
                                                          ▼
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   VERIFY    │◄───│   IMPLEMENT │◄───│   APPROVE   │◄───│   DECISION  │
│   & CLOSE   │    │   CHANGE    │    │   CHANGE    │    │   (CCB)     │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
```

### 4.2 Step 1: Identify Change

**Who can identify changes:**
- Any team member (developer, designer, QA, tech writer)
- Stakeholders (customers, beta testers, management)
- External sources (competitor analysis, industry trends, regulatory changes)

**Change identification triggers:**
- Feature request from customer or beta tester
- Technical limitation discovered during development
- Performance bottleneck identified during testing
- Security vulnerability reported
- Dependency update or deprecation
- Competitor feature gap analysis
- Regulatory or compliance requirement change
- Team capacity or resource change

**Initial documentation:**
- Change identifier (auto-generated: CR-YYYY-NNNN)
- Brief description (1-2 sentences)
- Originator name and date
- Initial category guess (A/B/C/D)

### 4.3 Step 2: Submit Change Request

**Change Request Form (CRF):**

| Field | Required | Description |
|-------|----------|-------------|
| CR ID | Auto | CR-2026-0001 (sequential) |
| Title | Yes | Brief, descriptive title (max 100 characters) |
| Description | Yes | Detailed description of proposed change |
| Justification | Yes | Why is this change needed? Business/technical case |
| Origin | Yes | Who requested? Customer, team, stakeholder, external |
| Category | Yes | A/B/C/D (initial assessment) |
| Affected Modules | Yes | List all modules impacted |
| Affected Features | Yes | List specific features or requirements |
| Proposed Solution | Yes | How should this change be implemented? |
| Alternatives | No | What other options were considered? |
| Effort Estimate | Yes | Initial estimate in hours (by submitter) |
| Schedule Impact | Yes | Initial estimate in days/weeks |
| Risk Assessment | Yes | What risks does this change introduce? |
| Attachments | No | Screenshots, documents, diagrams, references |
| Submitter | Yes | Name, role, date |

**Submission channels:**
- Primary: Project management tool (Jira/Azure DevOps) — "Change Request" issue type
- Secondary: Email to Product Manager with CRF template
- Emergency: Direct Slack message to Product Manager (follow up with formal CRF within 24 hours)

### 4.4 Step 3: Triage & Classify

**Triage process (within 24 hours of submission):**

1. **Product Manager reviews** all new change requests daily
2. **Initial classification** into Type A/B/C/D based on impact assessment
3. **Assignment** to relevant tech lead for impact analysis
4. **Priority** set: P0 (urgent), P1 (high), P2 (normal), P3 (low)
5. **CCB meeting** scheduled based on type:
   - Type A: Emergency CCB within 24 hours
   - Type B: Next weekly CCB or emergency if urgent
   - Type C: Next weekly CCB or ad-hoc if blocking
   - Type D: Async approval within 48 hours

**Triage rejection criteria (CR closed without analysis):**
- Duplicate of existing CR (link to original)
- Out of scope (inventory, CRM, RTO, shipping, revenue, etc.)
- Vague or incomplete (return to submitter for clarification)
- Already addressed in current sprint (link to ticket)
- Rejected by policy (e.g., "no new P0 features after Week 20")

### 4.5 Step 4: Analyze Impact

**Impact analysis responsibility:**
| Impact Area | Analyst | Deliverable |
|-------------|---------|-------------|
| Technical feasibility | Tech Lead | Technical assessment memo |
| Schedule impact | Project Manager | Revised timeline |
| Effort estimate | Feature Owner | Refined hour estimate |
| Cost impact | Product Manager | Budget adjustment |
| Risk assessment | QA Lead | Risk register update |
| Quality impact | QA Lead | Testing plan adjustment |
| Documentation impact | Tech Writer | Doc effort estimate |
| Dependency impact | DevOps Lead | Dependency map update |

**Impact analysis template:**

```
CHANGE REQUEST IMPACT ANALYSIS
CR ID: [CR-2026-XXXX]
Title: [Title]
Analyst: [Name, Role]
Date: [YYYY-MM-DD]

1. TECHNICAL FEASIBILITY
   - Can this be implemented with current architecture? [Yes/No/With Modifications]
   - Required technology changes: [List]
   - Dependency changes: [List]
   - Performance impact: [Description]

2. SCHEDULE IMPACT
   - Current milestone: [Milestone name]
   - Estimated delay: [X days/weeks]
   - Critical path affected? [Yes/No]
   - Mitigation options: [List]

3. EFFORT ESTIMATE
   - Frontend hours: [X]
   - Backend hours: [X]
   - AI/ML hours: [X]
   - QA hours: [X]
   - Documentation hours: [X]
   - Total: [X hours]

4. COST IMPACT
   - Additional resource cost: $[X]
   - Tool/license cost: $[X]
   - Hardware cost: $[X]
   - Total: $[X]

5. RISK ASSESSMENT
   - New risks introduced: [List]
   - Existing risks affected: [List]
   - Risk mitigation required: [List]

6. QUALITY IMPACT
   - Testing scope change: [Description]
   - Regression testing required: [Yes/No, scope]
   - Performance testing required: [Yes/No, scope]

7. DOCUMENTATION IMPACT
   - Documents to update: [List]
   - New documents required: [List]
   - Translation impact: [Yes/No]

8. RECOMMENDATION
   - Recommended action: [Approve/Reject/Defer/Modify]
   - Recommended priority: [P0/P1/P2/P3]
   - Recommended implementation sprint: [Sprint number]
   - Conditions for approval: [List]
```

**Analysis timeline:**
- Type A: 24 hours
- Type B: 48 hours
- Type C: 72 hours
- Type D: 24 hours

### 4.6 Step 5: CCB Decision

**Decision options:**
1. **Approve** — Implement as proposed
2. **Approve with Conditions** — Implement with specified modifications
3. **Defer** — Postpone to later phase or version (add to backlog)
4. **Reject** — Do not implement (document rationale)
5. **Request More Info** — Return to analysis with additional questions
6. **Split** — Break into smaller changes (Type B → multiple Type C)

**Decision documentation:**
- CCB meeting minutes (date, attendees, decisions, votes)
- Decision rationale (why approve/reject/defer)
- Conditions (if approve with conditions)
- Implementation assignment (who, when)
- Communication plan (who to notify, how)

**Decision communication:**
- Type A/B: Email to all stakeholders + team meeting announcement
- Type C: Email to affected team members + Slack announcement
- Type D: Slack notification to feature team

### 4.7 Step 6: Implement Change

**Implementation workflow:**
1. **Update project artifacts:**
   - Requirements documents (functional, non-functional)
   - Design documents (architecture, UI/UX)
   - Test plans and test cases
   - User documentation
   - Project schedule (Gantt chart, milestone plan)
   - Risk register

2. **Create implementation tickets:**
   - Break change into development tasks
   - Assign to sprint backlog
   - Link to original CR ID
   - Set acceptance criteria

3. **Development and testing:**
   - Follow standard development process (branch, code review, test)
   - Update unit tests, integration tests, regression tests
   - Perform security review if applicable
   - Update performance benchmarks if applicable

4. **Documentation updates:**
   - Update user manual, API docs, troubleshooting guide
   - Update in-app help and tooltips
   - Update release notes

### 4.8 Step 7: Verify & Close

**Verification checklist:**
- [ ] Code reviewed and merged
- [ ] Unit tests pass (> 80% coverage for P0 paths)
- [ ] Integration tests pass
- [ ] Regression tests pass (no broken existing features)
- [ ] Performance meets targets (if applicable)
- [ ] Security scan passed (if applicable)
- [ ] Documentation updated
- [ ] Acceptance criteria met
- [ ] Product Manager verified
- [ ] QA Lead verified

**Closure documentation:**
- Implementation summary (what was done, how it differs from original proposal)
- Verification results (test results, performance metrics)
- Lessons learned (what went well, what could improve)
- CR status updated to "Closed — Implemented" or "Closed — Rejected"

---

## 5. Scope Control Policy

### 5.1 Scope Baseline

The project scope is defined by:
1. **Master Feature List** (3,000 features across 30 categories)
2. **Functional Requirements Specification** (700 base requirements)
3. **Non-Functional Requirements Specification** (performance, security, usability)
4. **Excluded Features List** (inventory, CRM, RTO, shipping, revenue, etc.)
5. **Phase Roadmap** (7 phases, 37 weeks)
6. **Milestone Plan** (6 milestones with acceptance criteria)

### 5.2 Scope Change Rules

**Rule 1: P0 Feature Freeze**
- No new P0 (Must Have) features can be added after Week 12 (Milestone M1)
- Existing P0 features can be modified only if critical bug or security issue
- P0 feature removal requires Type A CCB approval

**Rule 2: P1 Feature Freeze**
- No new P1 (Should Have) features can be added after Week 24 (Milestone M3)
- Existing P1 features can be modified with Type B CCB approval
- P1 features can be downgraded to P2 with Type C approval

**Rule 3: P2/P3 Feature Management**
- P2 (Nice to Have) features can be added until Week 30 with Type C approval
- P3 (Future) features can be added anytime but are automatically deferred to Version 2.0
- P2 features can be cut without CCB approval if schedule pressure (notify chair)

**Rule 4: Excluded Features Barrier**
- Inventory, CRM, RTO, shipping, revenue, stock, suppliers, salesperson, loyalty points are permanently excluded from Version 1.0
- Any request to add excluded features requires Type A CCB approval AND project sponsor sign-off
- Excluded features automatically routed to "Version 2.0 Backlog" with no analysis

**Rule 5: Feature Count Ceiling**
- Total feature count must not exceed 3,300 at any time
- If adding a feature, another feature of same or lower priority must be removed or deferred
- Feature count monitored weekly by Product Manager

**Rule 6: Schedule Buffer Protection**
- Phase 6 (Weeks 32-37) contains 2-week buffer for bug fixes and stabilization
- This buffer cannot be used for new features without Type A CCB approval
- Buffer usage tracked daily by Project Manager

### 5.3 Scope Creep Early Warning System

| Indicator | Threshold | Action |
|-----------|-----------|--------|
| Feature count increase | > 3,300 | Immediate scope freeze, CCB review |
| P0 count increase | > 420 | Reject all new P0, escalate to sponsor |
| P1 count increase | > 1,000 | Require CCB approval for each new P1 |
| Schedule slip | > 1 week per phase | Root cause analysis, scope cut or timeline extension |
| Effort overrun | > 20% per phase | Re-evaluate remaining scope, cut P2/P3 |
| CR submission rate | > 5 per week | Review scope clarity, stakeholder communication |

---

## 6. Change Request Tracking

### 6.1 Change Request Log

| CR ID | Title | Type | Status | Submitter | Date | CCB Date | Decision | Implementation | Closure |
|-------|-------|------|--------|-----------|------|----------|----------|----------------|---------|
| CR-2026-0001 | [Example] Add voice commands for press timer | C | Deferred | QA Lead | 2026-06-10 | 2026-06-15 | Defer to V2.0 | N/A | 2026-06-15 |
| CR-2026-0002 | [Example] Support HEIC image format | C | Approved | Designer | 2026-06-12 | 2026-06-17 | Approve | Sprint 8 | 2026-07-05 |
| CR-2026-0003 | [Example] Add inventory tracking module | B | Rejected | Stakeholder | 2026-06-15 | 2026-06-20 | Reject | N/A | 2026-06-20 |
| CR-2026-0004 | [Example] Fix GPU crash on AMD RX 580 | A | Approved | Dev | 2026-06-18 | 2026-06-19 | Approve | Sprint 7 | 2026-06-25 |

### 6.2 Change Request Status Definitions

| Status | Definition |
|--------|------------|
| **Draft** | CRF submitted but not yet triaged |
| **Under Review** | Triage complete, impact analysis in progress |
| **Pending CCB** | Analysis complete, awaiting CCB decision |
| **Approved** | CCB approved, awaiting implementation |
| **Approved with Conditions** | CCB approved with modifications, awaiting implementation |
| **In Progress** | Implementation active |
| **Implemented** | Development complete, awaiting verification |
| **Verified** | QA verified, documentation updated |
| **Closed** | All work complete, CR closed |
| **Deferred** | Postponed to future phase or version |
| **Rejected** | CCB rejected, documented rationale |
| **Withdrawn** | Submitter withdrew request |
| **Duplicate** | Same as existing CR, linked and closed |

### 6.3 Change Request Metrics

**Weekly metrics tracked by Project Manager:**
- Total CRs submitted (by type, by originator)
- CRs approved/rejected/deferred (by type)
- Average time from submission to decision (by type)
- Average time from approval to closure
- Scope impact (features added/removed, hours added/removed)
- Schedule impact (days added/removed)
- Cost impact (budget variance)

**Monthly report to stakeholders:**
- CR summary dashboard
- Trend analysis (are CRs increasing or decreasing?)
- Scope health (feature count vs. baseline)
- Schedule health (milestone dates vs. baseline)
- Budget health (cost vs. baseline)

---

## 7. Communication Plan for Changes

### 7.1 Communication Matrix

| Stakeholder | Type A | Type B | Type C | Type D |
|-------------|--------|--------|--------|--------|
| Project Sponsor | Immediate email + call | Email within 24h | Weekly summary | Monthly summary |
| Product Manager | Immediate notification | Immediate notification | Daily digest | Weekly digest |
| Tech Leads | Immediate meeting | Meeting within 48h | Slack notification | Slack notification |
| Development Team | Emergency standup | Sprint planning update | Sprint backlog update | Ticket comment |
| QA Team | Immediate test plan update | Test plan update | Sprint test update | No change |
| Tech Writer | Immediate doc plan update | Doc plan update | Sprint doc update | No change |
| Beta Customers | Immediate email if affected | Email if affected | Release notes | No communication |
| End Users | Release notes + in-app alert | Release notes | Release notes | No communication |

### 7.2 Change Communication Templates

**Type A — Critical Change Notification:**
```
Subject: URGENT: Critical Change Approved — [CR ID] [Title]

A critical change has been approved and is being implemented immediately.

Change: [Brief description]
Reason: [Why this is critical]
Impact: [What is affected]
Action Required: [What team members must do]
Timeline: [When implemented]
Contact: [Product Manager name/email] for questions
```

**Type B — Major Change Notification:**
```
Subject: Major Change Approved — [CR ID] [Title]

A major change has been approved by the CCB.

Change: [Brief description]
Justification: [Business/technical case]
Schedule Impact: [+X days/weeks]
Effort Impact: [+X hours]
Affected Modules: [List]
Implementation Sprint: [Sprint number]
CCB Meeting Minutes: [Link]
```

**Type C — Minor Change Notification:**
```
Subject: Change Approved — [CR ID] [Title]

A minor change has been approved.

Change: [Brief description]
Affected Feature: [Feature name]
Implementation: [Sprint number]
No action required unless you are the feature owner.
```

**Type D — Cosmetic Change Notification:**
```
Subject: Cosmetic Change — [CR ID] [Title]

A cosmetic change has been approved and implemented.

Change: [Brief description]
Visual impact: [Screenshot or description]
No functional impact.
```

---

## 8. Version Control for Project Documents

### 8.1 Document Change Tracking

All project documents are version-controlled and require update when changes are approved:

| Document | Version Format | Change Trigger | Approval |
|----------|--------------|----------------|----------|
| Master Feature List | vX.Y (e.g., v1.3) | Any feature add/remove/modify | Product Manager |
| Functional Requirements | vX.Y (e.g., v2.1) | Any requirement change | Tech Lead + Product Manager |
| Non-Functional Requirements | vX.Y (e.g., v1.2) | Any NFR change | Tech Lead + QA Lead |
| User Stories | vX.Y (e.g., v1.5) | Any story add/remove/modify | Product Manager |
| Use Case Diagrams | vX.Y (e.g., v1.1) | Any use case change | Tech Lead |
| Workflow Diagrams | vX.Y (e.g., v1.2) | Any workflow change | Tech Lead |
| Phase Roadmap | vX.Y (e.g., v2.0) | Any phase/milestone change | Project Manager + Product Manager |
| Milestone Plan | vX.Y (e.g., v1.4) | Any milestone change | Project Manager |
| Gantt Chart | vX.Y (e.g., v1.3) | Any schedule change | Project Manager |
| Risk Register | vX.Y (e.g., v1.2) | Any risk add/remove/change | QA Lead + Project Manager |
| Change Management Plan | vX.Y (e.g., v1.1) | Any process change | Product Manager |

### 8.2 Document Update Process

1. **CR approved** → Document owner receives notification
2. **Document owner updates** document within 48 hours of Type A/B, 1 week of Type C
3. **Version number incremented** (minor increment for Type C/D, major increment for Type A/B)
4. **Change log entry** added to document
5. **Peer review** by Tech Lead (Type A/B) or Feature Owner (Type C/D)
6. **Approval** by Product Manager
7. **Distribution** to all team members via document repository

---

## 9. Emergency Change Procedures

### 9.1 Emergency Change Definition

An emergency change is a Type A change that:
- Fixes a security vulnerability with CVSS score ≥ 7.0
- Fixes a data loss or corruption bug
- Fixes a crash affecting > 50% of users
- Addresses a legal or compliance requirement with deadline < 1 week
- Fixes a critical production blocker (hardware integration failure)

### 9.2 Emergency Change Process

```
Hour 0:   Emergency identified → Notify Product Manager + Tech Lead immediately
Hour 1:   Product Manager convenes emergency CCB (call or video)
Hour 2:   Emergency CCB makes decision (approve/reject/modify)
Hour 3:   If approved, Tech Lead assigns emergency task force
Hour 4-24: Development + testing in parallel (bypass normal code review for speed, but require post-hoc review)
Hour 24-48: QA verification + documentation update
Hour 48:   Release emergency patch or hotfix
Hour 72:   Post-hoc CCB review of emergency process, document lessons learned
```

### 9.3 Emergency Change Authority

- **Product Manager** can approve emergency changes up to 40 hours of effort without full CCB
- **Tech Lead** can approve emergency changes up to 16 hours of effort
- **Any emergency change > 40 hours** requires emergency CCB within 4 hours
- **All emergency changes** must be documented in CR log within 24 hours
- **All emergency changes** require post-hoc CCB review within 72 hours

---

## 10. Change Management Metrics & KPIs

### 10.1 Key Performance Indicators

| KPI | Target | Measurement | Frequency |
|-----|--------|-------------|-----------|
| CR submission rate | < 5 per week | Count of CRs submitted | Weekly |
| CR approval rate | 60-70% | Approved / Total submitted | Weekly |
| CR rejection rate | 20-30% | Rejected / Total submitted | Weekly |
| CR deferral rate | 10-20% | Deferred / Total submitted | Weekly |
| Average decision time (Type A) | < 24 hours | Submission to CCB decision | Per CR |
| Average decision time (Type B) | < 48 hours | Submission to CCB decision | Per CR |
| Average decision time (Type C) | < 72 hours | Submission to CCB decision | Per CR |
| Average implementation time | Per estimate | Approval to closure | Per CR |
| Scope creep (feature count) | < 3,300 | Total features vs. baseline | Weekly |
| Schedule variance | < 1 week per phase | Actual vs. planned milestone dates | Weekly |
| Effort variance | < 20% per phase | Actual vs. planned hours | Weekly |
| Budget variance | < 10% | Actual vs. planned cost | Monthly |
| Emergency change rate | < 2 per month | Emergency CRs submitted | Monthly |
| Post-hoc CR rejection rate | < 10% | CRs rejected after analysis | Weekly |

### 10.2 Change Management Health Score

Calculated weekly as:
```
Health Score = 100
  - (Scope Creep % × 2)
  - (Schedule Variance in weeks × 5)
  - (Effort Variance % × 1)
  - (Emergency Change Count × 3)
  - (Overdue CR Count × 2)

Green: 80-100
Yellow: 60-79
Red: < 60
```

---

## 11. Roles & Responsibilities

| Role | Change Management Responsibility |
|------|----------------------------------|
| **Product Manager** | CCB Chair, final scope authority, triage, communication, metrics |
| **Project Manager** | Schedule impact analysis, resource impact, buffer tracking, reporting |
| **Tech Lead (Frontend)** | Technical feasibility (frontend), effort estimation, implementation planning |
| **Tech Lead (Backend/AI)** | Technical feasibility (backend/AI), performance impact, dependency analysis |
| **QA Lead** | Testing impact, quality risk, regression scope, verification planning |
| **DevOps Lead** | Infrastructure impact, deployment impact, dependency update assessment |
| **Tech Writer** | Documentation impact, translation impact, user communication |
| **Feature Owner** | Detailed impact analysis for specific features, implementation, verification |
| **Developer** | Submit CRs, implement approved changes, update tests |
| **Stakeholder** | Submit CRs, attend CCB as observer (Type A/B), receive communications |

---

## 12. Tools & Templates

### 12.1 Tools

| Tool | Purpose | Access |
|------|---------|--------|
| Jira / Azure DevOps | CR tracking, workflow, linking to development tickets | All team members |
| Confluence / SharePoint | Document repository, version control, meeting minutes | All team members |
| Slack | Emergency communication, daily updates, async CCB | All team members |
| Email | Formal notifications, stakeholder communication | All team members |
| Excel / Google Sheets | CR log, metrics dashboard, budget tracking | Project Manager, Product Manager |

### 12.2 Templates

- Change Request Form (CRF)
- Impact Analysis Template
- CCB Meeting Minutes Template
- Change Notification Templates (Type A/B/C/D)
- Emergency Change Log Template
- Scope Creep Report Template
- Change Metrics Dashboard Template

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-06-06 | Product Team | Initial change management plan |
