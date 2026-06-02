#!/usr/bin/env bash
# Auto-reconnecting tunnel - runs indefinitely until Ctrl+C.
# Usage: ./persistent-tunnel.sh <TYPE> <PORT> <TOKEN> [SUBDOMAIN]
# Types: http | tcp | udp
# Examples:
#   ./persistent-tunnel.sh http 8000 mytoken
#   ./persistent-tunnel.sh http 8000 mytoken myapp
#   ./persistent-tunnel.sh tcp  22   mytoken

TYPE="${1:?Usage: $0 <TYPE: http|tcp|udp> <PORT> <TOKEN> [SUBDOMAIN]}"
PORT="${2:?Usage: $0 <TYPE: http|tcp|udp> <PORT> <TOKEN> [SUBDOMAIN]}"
TOKEN="${3:?Usage: $0 <TYPE: http|tcp|udp> <PORT> <TOKEN> [SUBDOMAIN]}"
SUBDOMAIN="${4:-}"

echo "Persistent $TYPE tunnel → localhost:$PORT (auto-reconnect enabled)"
echo "Press Ctrl+C to stop."
echo ""

reconnect_count=0

while true; do
  if [ "$reconnect_count" -gt 0 ]; then
    echo "[$(date '+%H:%M:%S')] Reconnecting (attempt $reconnect_count)..."
    sleep 5
  fi

  case "$TYPE" in
    http)
      if command -v pinggy &>/dev/null; then
        ARGS="http --token $TOKEN ${SUBDOMAIN:+--subdomain $SUBDOMAIN} $PORT"
        pinggy $ARGS
      else
        HOST="${TOKEN}@pro.pinggy.io"
        ssh -p 443 -o ServerAliveInterval=60 -o StrictHostKeyChecking=no \
          -R "0:localhost:${PORT}" "$HOST"
      fi
      ;;
    tcp)
      if command -v pinggy &>/dev/null; then
        pinggy tcp --token "$TOKEN" "$PORT"
      else
        ssh -p 443 -o ServerAliveInterval=60 -o StrictHostKeyChecking=no \
          -R "0:localhost:${PORT}" "${TOKEN}@pro.pinggy.io"
      fi
      ;;
    udp)
      if command -v pinggy &>/dev/null; then
        pinggy udp --token "$TOKEN" "$PORT"
      else
        echo "UDP tunnels require the Pinggy CLI. Install: npm install -g pinggy"
        exit 1
      fi
      ;;
    *)
      echo "Unknown type: $TYPE. Use http, tcp, or udp."
      exit 1
      ;;
  esac

  reconnect_count=$((reconnect_count + 1))
done
