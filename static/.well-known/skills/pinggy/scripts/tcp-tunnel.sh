#!/usr/bin/env bash
# Usage: ./tcp-tunnel.sh <PORT> [TOKEN]
# Examples:
#   ./tcp-tunnel.sh 22              # SSH access
#   ./tcp-tunnel.sh 5432            # PostgreSQL
#   ./tcp-tunnel.sh 3306 mytoken    # MySQL with token

PORT="${1:?Usage: $0 <PORT> [TOKEN]}"
TOKEN="${2:-}"

HOST="${TOKEN:+${TOKEN}@}tcp@a.pinggy.io"
# When no token: tcp@a.pinggy.io
# With token:    mytoken@tcp@a.pinggy.io  — incorrect; handle properly:
if [ -n "$TOKEN" ]; then
  HOST="${TOKEN}@a.pinggy.io"
  REMOTE="tcp:0:localhost:${PORT}"
else
  HOST="tcp@a.pinggy.io"
  REMOTE="0:localhost:${PORT}"
fi

echo "Starting TCP tunnel → localhost:$PORT"
echo ""

ssh -p 443 \
  -o ServerAliveInterval=60 \
  -o StrictHostKeyChecking=no \
  -R "${REMOTE}" \
  "$HOST"
