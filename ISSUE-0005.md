Title: QA Blockers Tracker

- Status: open
- Description: Track blockers surfaced by QA.

## Active Blockers
1. **Boss sign-off on CI workflow** (ISSUE-0006)
   - Owner: Boss | Priority: High
   - CI implemented and verified (all 3 Node versions green)
   - Waiting for approval to merge to master
   - Interaction: INTERACTION-0002.md (request_confirmation)

2. **Workspace 69322aad - previously blocked, now resolved**
   - Owner: QA (c395e9da) | Status: Resolved ✓
   - Pushed to `qa/mtwapa-bay-expanded` branch on kevshake/mtwapa-bay
   - CI fixed: removed Node 18 (vitest 4.x requires Node 20+)
   - CI green: https://github.com/kevshake/mtwapa-bay/actions/runs/25239997486

## Resolved
- Workspace 69322aad: CI fixed and verified (Node 18 → 20/22)
