#!/bin/sh
# Installs or updates the Pinggy CLI on macOS and Linux, then signs this machine in as a Pinggy device.
#
#   curl -fsSL https://pinggy.io/install.sh | sh
#   curl -fsSL https://pinggy.io/install.sh | DEVICE_AGENT_TOKEN=<token> sh
#
# The binary goes to ~/.pinggy/bin/pinggy, and a symlink in ~/.local/bin puts it on PATH. No sudo: every write is
# under $HOME. When ~/.local/bin is not on PATH, 1 marked block goes into the shell's rc file, once.
#
# Setting, from the dashboard's command:
#   DEVICE_AGENT_TOKEN  a device token. An older pinggy updates without asking, then `pinggy device connect` runs
#                       with no email and no code. The token reaches it in its environment, never on a command line.
#                       Set it on sh, not on curl, so curl never holds it
#
# Overrides, for dev and tests:
#   PINGGY_VERSION     a release tag, such as v0.6.1. Default: the latest release
#   PINGGY_BINARY_URL  a full binary URL, file:// included. Replaces the installed binary without a version check
#   PINGGY_MANAGE      a non-production dashboard host, passed to `pinggy device login` or `connect` as --manage
#
# The source lives in Pinggy-io/cli-js, scripts/install/. A release copies it to pinggy.io.
# Design: docs/pinggy-devices/install-script-plan.md in the pinggy_backend repo.
#
# Nothing runs until the last line. A download cut off halfway defines some functions and runs no command.

set -eu

RELEASES_URL="https://github.com/Pinggy-io/cli-js/releases"
INSTALL_DIR="$HOME/.pinggy/bin"
INSTALL_PATH="$INSTALL_DIR/pinggy"
LINK_DIR="$HOME/.local/bin"
LINK_PATH="$LINK_DIR/pinggy"
RC_MARKER="# Added by the Pinggy installer"
VERSION_PREFIX="Pinggy CLI version: "

say() {
    printf '%s\n' "$*"
}

fail() {
    printf 'pinggy install: %s\n' "$*" >&2
    exit 1
}

# Shows a path under $HOME as ~/..., for messages only. The ~ is text, never expanded.
# shellcheck disable=SC2088
shown() {
    case "$1" in
        "$HOME"/*) printf '~/%s' "${1#"$HOME"/}" ;;
        *) printf '%s' "$1" ;;
    esac
}

has_command() {
    command -v "$1" >/dev/null 2>&1
}

# An empty DEVICE_AGENT_TOKEN counts as unset, as it does in the CLI.
has_device_token() {
    [ -n "${DEVICE_AGENT_TOKEN:-}" ]
}

# A script piped into sh reads itself from stdin, so the keyboard is /dev/tty. CI and `docker run` without -t
# have no /dev/tty to open.
has_terminal() {
    (exec </dev/tty) 2>/dev/null
}

# Enter, or no terminal, means yes. Only an answer starting with n means no.
confirm() {
    if ! has_terminal; then
        return 0
    fi
    printf '%s' "$1" >/dev/tty
    answer=""
    read -r answer </dev/tty || true
    case "$answer" in
        [Nn]*) return 1 ;;
        *) return 0 ;;
    esac
}

detect_os() {
    kernel=$(uname -s)
    case "$kernel" in
        Darwin) os=macos ;;
        Linux) os=linux ;;
        *) fail "unsupported OS: $kernel. The installer runs on macOS and Linux. On Windows, run in PowerShell: irm https://pinggy.io/install.ps1 | iex" ;;
    esac
}

# The Linux binaries link against glibc. ldd answers first: Debian with the musl package has /lib/ld-musl-*, but
# its ldd is glibc, and the binary runs there. The loader file counts only when ldd is missing.
require_glibc() {
    if has_command ldd; then
        if ldd --version 2>&1 | grep -qi musl; then
            fail_musl
        fi
        return 0
    fi
    for musl_loader in /lib/ld-musl-*; do
        if [ -e "$musl_loader" ]; then
            fail_musl
        fi
    done
}

fail_musl() {
    fail "this Linux uses musl libc, as Alpine does. The pinggy binaries need glibc, as on Debian, Ubuntu or Fedora."
}

detect_cpu() {
    machine=$(uname -m)
    case "$machine" in
        x86_64 | amd64) cpu=x64 ;;
        arm64 | aarch64) cpu=arm64 ;;
        *) fail "unsupported CPU: $machine. The pinggy binaries are built for x64 and arm64." ;;
    esac
    # A shell under Rosetta on Apple Silicon reports x86_64. The arm64 binary runs there natively.
    if [ "$os" = macos ] && [ "$cpu" = x64 ] && [ "$(sysctl -n sysctl.proc_translated 2>/dev/null || true)" = 1 ]; then
        cpu=arm64
    fi
}

require_downloader() {
    if ! has_command curl && ! has_command wget; then
        fail "the installer needs curl or wget. Install either one, then run it again."
    fi
}

# GitHub redirects /releases/latest to /releases/tag/<tag>. Reading the redirect costs no API call, so the
# API's 60 requests an hour per IP do not apply.
resolve_target_tag() {
    if [ -n "${PINGGY_VERSION:-}" ]; then
        case "$PINGGY_VERSION" in
            v*) tag="$PINGGY_VERSION" ;;
            *) tag="v$PINGGY_VERSION" ;;
        esac
        return 0
    fi
    if has_command curl; then
        latest_url=$(curl -fsSIL --proto '=https' -o /dev/null -w '%{url_effective}' "$RELEASES_URL/latest") \
            || fail "could not reach $RELEASES_URL/latest"
    else
        latest_url=$(wget -S --spider "$RELEASES_URL/latest" 2>&1 \
            | sed -n 's/^ *Location: *\([^ ]*\).*/\1/p' | tr -d '\r' | tail -n 1)
    fi
    tag=${latest_url##*/}
    case "$tag" in
        v[0-9]*) ;;
        *) fail "could not read the latest release tag from $RELEASES_URL/latest" ;;
    esac
}

# Prints the version a binary reports, or nothing when it does not run. Under `curl | sh`, stdin is the rest of
# this script, so the binary gets /dev/null instead.
binary_version() {
    "$1" --version </dev/null 2>/dev/null | sed -n "s/^$VERSION_PREFIX//p" | head -n 1 || true
}

download() {
    url="$1"
    destination="$2"
    case "$url" in
        file://*)
            cp "${url#file://}" "$destination"
            ;;
        https://*)
            if has_command curl; then
                if [ -t 2 ]; then
                    curl -fL --proto '=https' --tlsv1.2 --progress-bar -o "$destination" "$url"
                else
                    curl -fsSL --proto '=https' --tlsv1.2 -o "$destination" "$url"
                fi
            else
                wget -q --https-only -O "$destination" "$url"
            fi
            ;;
        *)
            fail "PINGGY_BINARY_URL must start with https:// or file://"
            ;;
    esac
}

# Node's error line names the cause, such as a missing libssl.so.3 on a minimal Debian image. A binary for another
# CPU prints nothing useful, and the message below already names the platform.
fail_does_not_run() {
    run_error=$("$download_path" --version </dev/null 2>&1 | grep -E '^[A-Za-z]*Error: ' | head -n 1 || true)
    if [ -n "$run_error" ]; then
        printf '%s\n' "$run_error" >&2
    fi
    fail "the downloaded file does not run on this machine ($os-$cpu). The installed pinggy is unchanged."
}

remove_partial_download() {
    if [ -n "${download_path:-}" ]; then
        rm -f "$download_path"
    fi
}

# Writes the binary to a temp file in the install directory, so the final mv is a rename on 1 filesystem. A
# running agent keeps the old inode, so replacing the file under it is safe.
install_binary() {
    if [ -n "${PINGGY_BINARY_URL:-}" ]; then
        url="$PINGGY_BINARY_URL"
    else
        url="$RELEASES_URL/download/$tag/pinggy-$os-$cpu"
    fi

    mkdir -p "$INSTALL_DIR"
    download_path=$(mktemp "$INSTALL_DIR/pinggy.download.XXXXXX")
    trap remove_partial_download EXIT
    trap 'exit 130' INT
    trap 'exit 143' TERM

    say "Downloading $url"
    download "$url" "$download_path" || fail "the download failed: $url"
    chmod 755 "$download_path"

    downloaded_version=$(binary_version "$download_path")
    if [ -z "$downloaded_version" ]; then
        fail_does_not_run
    fi

    mv -f "$download_path" "$INSTALL_PATH"
    download_path=""
    say "Installed pinggy $downloaded_version to $(shown "$INSTALL_PATH")"
}

# Steps 2 to 6 of the plan: compare with the installed binary, then download only when needed.
install_or_update() {
    if [ -n "${PINGGY_BINARY_URL:-}" ]; then
        install_binary
        return 0
    fi

    resolve_target_tag
    target_version=${tag#v}

    if [ ! -e "$INSTALL_PATH" ]; then
        install_binary
        return 0
    fi

    installed_version=$(binary_version "$INSTALL_PATH")
    if [ -z "$installed_version" ]; then
        say "$(shown "$INSTALL_PATH") does not run. Replacing it."
        install_binary
    elif [ "$installed_version" = "$target_version" ]; then
        say "pinggy $installed_version is up to date."
    elif has_device_token; then
        # An older CLI ignores DEVICE_AGENT_TOKEN, so keeping it would leave the machine unconnected.
        say "Updating pinggy $installed_version to $target_version."
        install_binary
    elif confirm "pinggy $installed_version is installed. Update to $target_version? [Y/n] "; then
        install_binary
    else
        say "Keeping pinggy $installed_version."
    fi
}

link_into_path() {
    mkdir -p "$LINK_DIR"
    if [ -L "$LINK_PATH" ]; then
        previous_target=$(readlink "$LINK_PATH" || true)
        if [ "$previous_target" != "$INSTALL_PATH" ]; then
            say "Replacing $(shown "$LINK_PATH"), a link to $(shown "$previous_target")"
        fi
    elif [ -e "$LINK_PATH" ]; then
        say "Replacing $(shown "$LINK_PATH")"
    fi
    ln -sf "$INSTALL_PATH" "$LINK_PATH"

    case ":$PATH:" in
        *":$LINK_DIR:"* | *":$LINK_DIR/:"*) warn_if_shadowed ;;
        *) add_link_dir_to_rc_file ;;
    esac
}

# The rc block puts ~/.local/bin first, so this matters only when ~/.local/bin was already on PATH.
warn_if_shadowed() {
    found_path=$(command -v pinggy 2>/dev/null || true)
    if [ -n "$found_path" ] && [ "$found_path" != "$LINK_PATH" ]; then
        say "Another pinggy, $(shown "$found_path"), comes before $(shown "$LINK_DIR") on PATH, so the pinggy command runs it."
        say "Remove it, or move $(shown "$LINK_DIR") earlier in PATH."
    fi
}

# The rc file the shell in $SHELL reads at startup. bash on macOS reads only the first of ~/.bash_profile,
# ~/.bash_login and ~/.profile, so a new ~/.bash_profile would hide an existing ~/.profile.
choose_rc_file() {
    case "$(basename "${SHELL:-sh}")" in
        zsh)
            rc_file="${ZDOTDIR:-$HOME}/.zshrc"
            ;;
        bash)
            if [ "$os" = linux ]; then
                rc_file="$HOME/.bashrc"
            elif [ -e "$HOME/.bash_profile" ]; then
                rc_file="$HOME/.bash_profile"
            elif [ -e "$HOME/.bash_login" ]; then
                rc_file="$HOME/.bash_login"
            elif [ -e "$HOME/.profile" ]; then
                rc_file="$HOME/.profile"
            else
                rc_file="$HOME/.bash_profile"
            fi
            ;;
        fish)
            rc_file="$HOME/.config/fish/conf.d/pinggy.fish"
            ;;
        *)
            rc_file="$HOME/.profile"
            ;;
    esac
}

add_link_dir_to_rc_file() {
    choose_rc_file
    if [ -f "$rc_file" ] && grep -qF "$RC_MARKER" "$rc_file"; then
        say "$(shown "$LINK_DIR") is not on PATH in this terminal. Run: source $(shown "$rc_file")"
        return 0
    fi

    mkdir -p "$(dirname "$rc_file")"
    # The rc file expands $HOME and $PATH at each shell start, not here.
    # shellcheck disable=SC2016
    case "$rc_file" in
        *.fish) path_line='fish_add_path "$HOME/.local/bin"' ;;
        *) path_line='export PATH="$HOME/.local/bin:$PATH"' ;;
    esac
    printf '\n%s\n%s\n' "$RC_MARKER" "$path_line" >>"$rc_file"
    say "Added $(shown "$LINK_DIR") to PATH in $(shown "$rc_file"). New terminals find pinggy."
    say "In this terminal, run: source $(shown "$rc_file")"
}

# Runs the installed file by its full path, so an npm-installed pinggy earlier on PATH does not answer. connect reads
# DEVICE_AGENT_TOKEN from the environment this script passes on, and reads no key, so it runs the same with no
# terminal.
connect_with_device_token() {
    export DEVICE_AGENT_TOKEN
    say ""
    if [ -n "${PINGGY_MANAGE:-}" ]; then
        exec "$INSTALL_PATH" device connect --manage "$PINGGY_MANAGE" </dev/null
    fi
    exec "$INSTALL_PATH" device connect </dev/null
}

# Runs the installed file by its full path, so an npm-installed pinggy earlier on PATH does not answer.
start_sign_in() {
    if [ -n "${PINGGY_MANAGE:-}" ]; then
        login_command="pinggy device login --manage $PINGGY_MANAGE"
    else
        login_command="pinggy device login"
    fi

    if ! has_terminal; then
        say "Installed. To sign this machine in, run: $login_command"
        say "On a machine without a keyboard, add the device in the dashboard and run: pinggy device connect --token <TOKEN>"
        return 0
    fi

    say ""
    if [ -n "${PINGGY_MANAGE:-}" ]; then
        exec "$INSTALL_PATH" device login --manage "$PINGGY_MANAGE" </dev/tty
    fi
    exec "$INSTALL_PATH" device login </dev/tty
}

main() {
    detect_os
    if [ "$os" = linux ]; then
        require_glibc
    fi
    detect_cpu
    case "${PINGGY_BINARY_URL:-}" in
        file://*) ;;
        *) require_downloader ;;
    esac
    install_or_update
    link_into_path
    if has_device_token; then
        connect_with_device_token
    fi
    start_sign_in
}

main "$@"
