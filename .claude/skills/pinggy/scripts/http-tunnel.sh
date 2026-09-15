#!/usr/bin/env bash
# Usage: ./http-tunnel.sh <PORT> [TOKEN]
# A persistent subdomain comes from the one assigned to [TOKEN] in the dashboard; there is no subdomain flag.
# Examples:
#   ./http-tunnel.sh 3000
#   ./http-tunnel.sh 8000 mytoken123

PORT="${1:?Usage: $0 <PORT> [TOKEN]}"
TOKEN="${2:-}"

if [ -n "$TOKEN" ]; then
  HOST="${TOKEN}@pro.pinggy.io"
else
  HOST="free.pinggy.io"
fi

echo "Starting HTTP tunnel → localhost:$PORT"
echo "Host: $HOST"
echo "Web debugger: http://localhost:4300"
echo ""

ssh -p 443 \
  -o ServerAliveInterval=60 \
  -o StrictHostKeyChecking=no \
  -R "0:localhost:${PORT}" \
  -L 4300:localhost:4300 \
  "$HOST"
