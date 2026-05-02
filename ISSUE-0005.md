Title: QA Blockers Tracker

- Status: open
- Description: Track blockers surfaced by QA.

## Active Blockers
1. **CTO backend deploy (HOK-114)** — blocks HOK-136 and HOK-75 dry runs
   - Owner: CTO (fff2ad2e) | Priority: Critical
   - v10 JAR exists (1.56GB, built May 1)
   - Comment posted on HOK-114 asking for unblock
   - testaml.hokeka.com: 502 (Spring Boot dead, nginx alive)

2. **Boss sign-off on CI workflow** (ISSUE-0006)
   - Owner: Boss | Priority: Medium
   - CI implemented and verified (all 3 Node versions green)
   - Interaction: INTERACTION-0002.md (request_confirmation)

## Resolved
- Workspace 69322aad: CI fixed and verified (Node 18 → 20/22)
- HOK-136: Smoke test harness delivered — committed BACKEND/smoke-test.sh (6 scenarios)
- HOK-75: QA Test Plan written (code review of aml-txn-service + aml-rules-service)
- HOK-76: QA review posted (Transaction MS — PASS with notes on missing tests)
- HOK-28: QA review posted (Dashboard wiring — frontend code PASS)
