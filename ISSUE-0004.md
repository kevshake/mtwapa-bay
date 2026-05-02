Title: CI Workflow Planning

- Status: implemented and CI verified ✓
- Description: CI workflow created to run sanity check on push/PR.
- Completed:
- 1) .github/workflows/sanity.yml created — runs `npm ci` + `npm run sanity` + `npm test` on ubuntu-latest with Node.js 18, 20, 22. ✓
- 2) Triggers on push to main, master, qa/** branches; pull_request to main, master. ✓
- 3) CI verified: first GitHub Actions run passed — all 3 Node versions green.
   - https://github.com/kevshake/mtwapa-bay/actions/runs/25239835202
- 4) Unit-test scaffold (src/index.test.js, node:test, 3 tests, all passing). ✓
- 5) Pushed to qa/workspace-c395e9da branch on kevshake/mtwapa-bay.
- Next action: Boss sign-off → merge to master (see ISSUE-0006).
