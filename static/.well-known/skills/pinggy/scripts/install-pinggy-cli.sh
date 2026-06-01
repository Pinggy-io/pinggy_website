#!/usr/bin/env bash
# Installs the Pinggy CLI and verifies the installation.
# Usage: ./install-pinggy-cli.sh

set -e

echo "Installing Pinggy CLI..."

if command -v pinggy &>/dev/null; then
  echo "Pinggy CLI already installed: $(pinggy --version 2>/dev/null || echo 'version unknown')"
  exit 0
fi

if command -v npm &>/dev/null; then
  npm install -g pinggy
  echo "Pinggy CLI installed via npm."
elif command -v brew &>/dev/null; then
  brew install pinggy
  echo "Pinggy CLI installed via Homebrew."
else
  echo "Neither npm nor brew found."
  echo ""
  echo "Install options:"
  echo "  npm:      npm install -g pinggy"
  echo "  Homebrew: brew install pinggy"
  echo "  Download: https://pinggy.io/downloads"
  exit 1
fi

echo ""
echo "Verifying installation..."
pinggy --version || true
echo ""
echo "Run a test tunnel: pinggy http 8000"
