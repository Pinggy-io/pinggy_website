#!/usr/bin/env bash
# Fetches the active tunnel URL(s) from the Pinggy web debugger API.
# Requires a running HTTP tunnel with the debugger active (default port 4300).
# Usage: ./get-tunnel-url.sh [DEBUGGER_PORT]

DEBUGGER_PORT="${1:-4300}"
API="http://localhost:${DEBUGGER_PORT}/urls"

if ! command -v curl &>/dev/null; then
  echo "curl is required but not installed."
  exit 1
fi

echo "Fetching tunnel URLs from debugger (port $DEBUGGER_PORT)..."
echo ""

RESPONSE=$(curl -sf "$API" 2>/dev/null) || {
  echo "Could not reach debugger at $API"
  echo "Make sure an HTTP tunnel is running (default debugger port: 4300)"
  exit 1
}

echo "$RESPONSE" | python3 -m json.tool 2>/dev/null || echo "$RESPONSE"
