#!/usr/bin/env bash
# Usage: ./http-tunnel.sh <PORT> [TOKEN] [SUBDOMAIN]
# Examples:
#   ./http-tunnel.sh 3000
#   ./http-tunnel.sh 8000 mytoken123
#   ./http-tunnel.sh 8000 mytoken123 myapp

PORT="${1:?Usage: $0 <PORT> [TOKEN] [SUBDOMAIN]}"
TOKEN="${2:-}"
SUBDOMAIN="${3:-}"

FLAGS=""

if [ -n "$TOKEN" ] && [ -n "$SUBDOMAIN" ]; then
  HOST="${TOKEN}@a.pinggy.io"
else
  HOST="${TOKEN:+${TOKEN}@}a.pinggy.io"
fi

echo "Starting HTTP tunnel → localhost:$PORT"
echo "Host: $HOST"
echo "Web debugger: http://localhost:4300"
echo ""

ssh -p 443 \
  -o ServerAliveInterval=60 \
  -o StrictHostKeyChecking=no \
  -R "0:localhost:${PORT}" \
  "$HOST"
