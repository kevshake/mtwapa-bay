Title: CI Workflow Planning

- Status: implemented (pending verification)
- Description: CI workflow created to run sanity check on push/PR.
- Completed:
- 1) .github/workflows/sanity.yml created — runs `npm ci` + `npm run sanity` + `npm test` on ubuntu-latest with Node.js 18, 20, 22.
- 2) Triggers on push and pull_request to main.
- 3) Pending: first CI run on GitHub to validate workflow executes correctly.
- 4) Completed: unit-test scaffold (src/index.test.js, node:test, 3 tests, all passing).
- 5) Local CI simulation (sanity + test) passed.

- Next action: Push branch and verify CI run in GitHub Actions; request boss sign-off (see ISSUE-0006).
