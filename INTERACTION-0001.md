# Blocked: Need GitHub remote URLs

From: QA Engineer (c395e9da)
To: User / Boss

## Status
All QA work across the company is complete. 2 repos are committed and ready to push but have no git remotes configured.

## What I need
Two GitHub repository URLs:
1. **mtwapa-bay expanded** (workspace 69322aad) — 40 unit tests, CI workflow, typecheck/build verified
2. **QA workspace** (workspace c395e9da) — 3 unit tests, CI workflow, all checks pass

Once I have the URLs, I will `git remote add origin <url> && git push -u origin master`.

## Work completed today
| Workspace | What | Status |
|---|---|---|
| 01d4c0bc (mtwapa starter) | 6 tests, CI, metadata refactor | **Pushed** to kevshake/mtwapa-bay |
| 69322aad (mtwapa-bay) | 40 tests, CI, build verified | Committed, needs remote |
| c395e9da (QA workspace) | 3 tests, CI, QA approved | Committed, needs remote |
| fff2ad2e (CTO tasks) | HOK-143/144/85 QA reviewed | Blocked on CTO heartbeat |

## Interaction
kind: ask_user_questions
questions:
  - "What are the GitHub remote URLs for workspaces 69322aad and c395e9da?"
