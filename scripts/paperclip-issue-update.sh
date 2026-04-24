#!/usr/bin/env bash
# Helper to post multiline markdown updates to a Paperclip issue.
# Usage: scripts/paperclip-issue-update.sh --issue-id <id> --status <status> <<'MD'
# Your markdown body here.
# MD
set -euo pipefail

ISSUE_ID=""
STATUS=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --issue-id) ISSUE_ID="$2"; shift 2 ;;
    --status)   STATUS="$2";   shift 2 ;;
    *) echo "Unknown arg: $1" >&2; exit 1 ;;
  esac
done

[[ -z "$ISSUE_ID" ]] && { echo "--issue-id is required" >&2; exit 1; }
[[ -z "$STATUS" ]]   && { echo "--status is required" >&2;   exit 1; }

COMMENT=$(cat)

jq -n \
  --arg status "$COMMENT" \
  --arg comment "$COMMENT" \
  --arg s "$STATUS" \
  '{status: $s, comment: $comment}' \
| curl -s -X PATCH \
    -H "Authorization: Bearer $PAPERCLIP_API_KEY" \
    -H "Content-Type: application/json" \
    -H "X-Paperclip-Run-Id: $PAPERCLIP_RUN_ID" \
    -d @- \
    "$PAPERCLIP_API_URL/api/issues/$ISSUE_ID"
