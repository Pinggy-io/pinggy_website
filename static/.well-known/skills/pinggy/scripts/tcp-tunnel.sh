#!/usr/bin/env bash
# Usage: ./tcp-tunnel.sh <PORT> [TOKEN]
# Examples:
#   ./tcp-tunnel.sh 22              # SSH access
#   ./tcp-tunnel.sh 5432            # PostgreSQL
#   ./tcp-tunnel.sh 3306 mytoken    # MySQL with token

PORT="${1:?Usage: $0 <PORT> [TOKEN]}"
TOKEN="${2:-}"

# When no token: tcp@free.pinggy.io
# With token:    token@pro.pinggy.io (TCP requested via the remote spec)
if [ -n "$TOKEN" ]; then
  HOST="${TOKEN}@pro.pinggy.io"
  REMOTE="tcp:0:localhost:${PORT}"
else
  HOST="tcp@free.pinggy.io"
  REMOTE="0:localhost:${PORT}"
fi

echo "Starting TCP tunnel → localhost:$PORT"
echo ""

ssh -p 443 \
  -o ServerAliveInterval=60 \
  -o StrictHostKeyChecking=no \
  -R "${REMOTE}" \
  "$HOST"
