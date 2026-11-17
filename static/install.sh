#!/bin/sh
# Installs or updates the Pinggy CLI on macOS and Linux, then asks whether to sign this machine in as a Pinggy device.
# Once the device connects, it asks whether to start pinggy at login, unless that service is already installed.
# Before the sign-in, when a pinggy daemon runs another version than the installed one, it asks to restart the daemon.
#
#   curl -fsSL https://pinggy.io/install.sh | sh
#   curl -fsSL https://pinggy.io/install.sh | DEVICE_AGENT_TOKEN=<token> sh
#
# It updates the copy that the pinggy command runs in this terminal:
#   no copy, or this script's binary      installs or updates the binary, as below
#   an npm copy                           updates it with `npm install -g`. No binary, no PATH change, and no login
#                                         service question, because the npm version cannot run as a service
#   another program file                  asks to install this script's binary. No signs in with that file
#   a script (npm link, pnpm, yarn, bun)  stops with a message
#
# The binary goes to ~/.pinggy/versions/<version>/pinggy. ~/.pinggy/bin/pinggy links to it, and a symlink in
# ~/.local/bin puts it on PATH. The script never runs sudo, and the binary flow writes only under $HOME. When
# ~/.local/bin is not on PATH, 1 marked block goes into the shell's rc file, once.
#
# Setting, from the dashboard's command:
#   DEVICE_AGENT_TOKEN  a device token. `pinggy device connect` runs with no email and no code. Every update question
#                       is still asked, and a pinggy older than 0.6.2 ignores the token. The token reaches the CLI in
#                       its environment, never on a command line. Set it on sh, not on curl, so curl never holds it
#
# Overrides, for dev and tests:
#   PINGGY_VERSION     a release tag, such as v0.6.1. Default: the version pinggy.io publishes, or for an npm copy the
#                      npm registry's latest
#   PINGGY_BINARY_URL  a full binary URL, file:// included. Replaces the installed binary without a version check,
#                      whatever the pinggy command runs
#   PINGGY_MANAGE      a non-production dashboard host, passed to `pinggy device login` or `connect` as --manage
#
# Set by a downloaded pinggy binary that installs itself, with PINGGY_BINARY_URL naming that file:
#   PINGGY_INSTALL_ONLY  1: install, then end. No sign-in, and no PATH warning, which the binary prints after it
#                        removes npm's copy
#
# The source lives in Pinggy-io/cli-js, scripts/install/. A release copies it to pinggy.io.
#
# Nothing runs until the last line. A download cut off halfway defines some functions and runs no command.

set -eu

RELEASES_URL="https://github.com/Pinggy-io/cli-js/releases"
VERSION_URL="https://pinggy.io/cli/version.json"
INSTALL_DIR="$HOME/.pinggy/bin"
INSTALL_PATH="$INSTALL_DIR/pinggy"
VERSIONS_DIR="$HOME/.pinggy/versions"
LINK_DIR="$HOME/.local/bin"
LINK_PATH="$LINK_DIR/pinggy"
RC_MARKER="# Added by the Pinggy installer"
VERSION_PREFIX="Pinggy CLI version: "
NPM_PACKAGE="pinggy"
# npm keeps a global package at <prefix>/lib/node_modules/<name>. yarn and bun use other folders.
NPM_PACKAGE_SEGMENT="/lib/node_modules/$NPM_PACKAGE/"
# As the kernel's limit, so a link loop ends.
LINK_HOP_LIMIT=40
# A request ends after this many seconds with no data. Nothing limits the total time, so a slow download that keeps
# moving finishes. The OS ends a connection attempt with no answer, and curl a stalled TLS handshake after 5 min.
STALL_SECONDS=60
BYTES_PER_MEGABYTE=1048576
# The file a running daemon writes, where src/utils/configDir.ts puts it.
DAEMON_INFO_PATH="${XDG_CONFIG_HOME:-$HOME/.config}/pinggy/daemon.json"
# Every daemon process runs with this flag: getDaemonSpawnArgs() and the service files that serviceInstaller.ts writes.
DAEMON_PROCESS_FLAG="--_daemon-child"
# The service names src/daemon/lifecycle/serviceInstaller.ts writes.
LAUNCHD_LABEL="io.pinggy.agent"
SYSTEMD_UNIT="pinggy"
# How long a restarted daemon may take to stop, and then to write daemon.json.
DAEMON_RESTART_WAIT_SECONDS=10

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

# --speed-limit 1 --speed-time ends a request that gets less than 1 byte per second for STALL_SECONDS. wget's read
# timeout is also time without data. Its default is 900 s, with 20 tries.
fetch_text() {
    if has_command curl; then
        curl -fsSL --proto '=https' --tlsv1.2 --speed-limit 1 --speed-time "$STALL_SECONDS" "$1"
    else
        wget -q --https-only --read-timeout="$STALL_SECONDS" --tries=2 -O - "$1"
    fi
}

fail_no_latest_version() {
    fail "$1 $VERSION_URL. Try again later, or set PINGGY_VERSION to a release tag, such as v0.6.1."
}

# pinggy.io publishes the latest version in the deploy that publishes this script, so the script and the binary
# come from 1 release. GitHub's /releases/latest can name a newer release, or one whose binaries still upload.
# sh has no JSON parser, so sed reads the "version" field. The "versions" list has another key and does not match.
resolve_target_tag() {
    if [ -n "${PINGGY_VERSION:-}" ]; then
        case "$PINGGY_VERSION" in
            v*) tag="$PINGGY_VERSION" ;;
            *) tag="v$PINGGY_VERSION" ;;
        esac
        return 0
    fi
    say "Checking the latest version of Pinggy..."
    version_json=$(fetch_text "$VERSION_URL") || fail_no_latest_version "could not reach"
    latest_version=$(printf '%s\n' "$version_json" \
        | sed -n 's/.*"version"[[:space:]]*:[[:space:]]*"\([0-9][0-9.]*\)".*/\1/p' | head -n 1)
    case "$latest_version" in
        [0-9]*.[0-9]*.[0-9]*) tag="v$latest_version" ;;
        *) fail_no_latest_version "could not read the latest version from" ;;
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
            download_https "$url" "$destination"
            ;;
        *)
            fail "PINGGY_BINARY_URL must start with https:// or file://"
            ;;
    esac
}

# The download runs in the background, and with a terminal on stderr 1 line shows its size each second. curl's own
# bar draws an animation until a redirect's headers name the size, and draws for 79 columns, because `curl | sh`
# gives curl no terminal width. curl's errors wait in a file, so they print after the line ends, not inside it.
# curl and wget start here directly, not through a function, so $! is their pid and the EXIT trap can stop them.
download_https() {
    headers_path="$download_dir/headers"
    errors_path="$download_dir/errors"
    : >"$headers_path"
    : >"$2"
    if has_command curl; then
        curl -fsSL --proto '=https' --tlsv1.2 --speed-limit 1 --speed-time "$STALL_SECONDS" \
            -D "$headers_path" -o "$2" "$1" 2>"$errors_path" &
    else
        wget -q --https-only --read-timeout="$STALL_SECONDS" --tries=2 -O "$2" "$1" 2>"$errors_path" &
    fi
    download_pid=$!
    total_bytes=""
    show_progress=0
    if [ -t 2 ]; then
        show_progress=1
    fi
    # dash and bash reap the finished download while they wait for sleep, so kill -0 then fails and the loop ends.
    while kill -0 "$download_pid" 2>/dev/null; do
        if [ "$show_progress" = 1 ]; then
            print_progress "$2"
        fi
        sleep 1
    done
    download_status=0
    wait "$download_pid" || download_status=$?
    download_pid=""
    # The last line in the loop can be up to 1 s old.
    if [ "$show_progress" = 1 ] && [ "$download_status" -eq 0 ]; then
        print_progress "$2"
    fi
    end_progress_line
    cat "$errors_path" >&2
    return "$download_status"
}

# Rewrites the progress line with \r. %-30s pads it past the longest text, "  999.9 MB of 999.9 MB (100%)", so a
# shorter text covers a longer one. macOS wc pads its count with spaces, which the arithmetic drops.
print_progress() {
    if [ -z "$total_bytes" ]; then
        total_bytes=$(read_total_bytes)
    fi
    downloaded_bytes=$(($(wc -c <"$1")))
    progress_text="  $(format_megabytes "$downloaded_bytes")"
    if [ -n "$total_bytes" ]; then
        percent=$((downloaded_bytes * 100 / total_bytes))
        if [ "$percent" -gt 100 ]; then
            percent=100
        fi
        progress_text="$progress_text of $(format_megabytes "$total_bytes") ($percent%)"
    fi
    printf '\r%-30s' "$progress_text" >&2
    progress_line_open=1
}

end_progress_line() {
    if [ "${progress_line_open:-0}" = 1 ]; then
        printf '\n' >&2
        progress_line_open=0
    fi
}

# The Content-Length of the 2xx response in curl's header file, or nothing. A redirect writes its own headers first,
# and GitHub's redirect sends Content-Length 0. HTTP/2 sends header names in lowercase, HTTP/1.1 does not.
read_total_bytes() {
    awk 'tolower($1) ~ /^http\// { success = ($2 ~ /^2/) }
        success && tolower($1) == "content-length:" { total = $2 + 0 }
        END { if (total > 0) print total }' "$headers_path"
}

# Integer math, so the decimal point does not follow the locale and every sh can compute it.
format_megabytes() {
    tenths=$(($1 * 10 / BYTES_PER_MEGABYTE))
    printf '%d.%d MB' $((tenths / 10)) $((tenths % 10))
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

# The EXIT trap. A non-interactive sh starts a background command with SIGINT ignored, so Ctrl+C stops only the
# script, and the download would go on without this kill. After a hangup the terminal is gone and the newline cannot
# be written, so it comes last and its failure does not stop the trap under set -e.
clean_up_download() {
    if [ -n "${download_pid:-}" ]; then
        kill "$download_pid" 2>/dev/null || true
    fi
    if [ -n "${download_dir:-}" ]; then
        rm -rf "$download_dir"
    fi
    end_progress_line 2>/dev/null || true
}

# Writes the binary to a temp folder under ~/.pinggy, so the final mv is a rename on 1 filesystem. The binary goes in
# its own version folder and ~/.pinggy/bin/pinggy links to it. A running agent keeps its own file.
install_binary() {
    if [ -n "${PINGGY_BINARY_URL:-}" ]; then
        url="$PINGGY_BINARY_URL"
        download_title="$url"
    else
        url="$RELEASES_URL/download/$tag/pinggy-$os-$cpu"
        download_title="pinggy ${tag#v} for $os-$cpu"
    fi

    mkdir -p "$INSTALL_DIR"
    download_dir=$(mktemp -d "$INSTALL_DIR/pinggy.download.XXXXXX")
    download_path="$download_dir/pinggy"
    trap clean_up_download EXIT
    trap 'exit 129' HUP
    trap 'exit 130' INT
    trap 'exit 143' TERM

    case "$url" in
        file://*) say "Copying ${url#file://}" ;;
        *) say "Downloading $download_title" ;;
    esac
    download "$url" "$download_path" || fail "the download failed: $url"
    chmod 755 "$download_path"

    downloaded_version=$(binary_version "$download_path")
    if [ -z "$downloaded_version" ]; then
        fail_does_not_run
    fi

    previous_target=$(readlink "$INSTALL_PATH" 2>/dev/null || true)
    mkdir -p "$VERSIONS_DIR/$downloaded_version"
    mv -f "$download_path" "$VERSIONS_DIR/$downloaded_version/pinggy"
    rm -rf "$download_dir"
    download_dir=""
    # A temp link and a rename, because ln -sf removes the old link before it creates the new one.
    ln -s "$VERSIONS_DIR/$downloaded_version/pinggy" "$INSTALL_DIR/pinggy.link.$$"
    mv -f "$INSTALL_DIR/pinggy.link.$$" "$INSTALL_PATH"
    prune_versions "$downloaded_version" "$(basename "$(dirname "${previous_target:-none}")")"
    say "Installed pinggy $downloaded_version to $(shown "$INSTALL_PATH")"
}

# Keeps the new version and the one the link named before. Only names made of digits and dots are versions. With
# auto-update off, nothing else removes old versions.
prune_versions() {
    for version_dir in "$VERSIONS_DIR"/*/; do
        version_name=$(basename "$version_dir")
        case "$version_name" in
            *[!0-9.]* | "$1" | "$2") continue ;;
        esac
        rm -rf "$version_dir"
    done
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
    elif confirm "pinggy $installed_version is installed. Update to $target_version? [Y/n] "; then
        install_binary
    else
        say "Keeping pinggy $installed_version."
        kept_older_version=1
    fi
}

# A pinned or kept version lasts only until the next terminal command, unless auto-update is off.
warn_auto_update_replaces_it() {
    if [ -n "${PINGGY_VERSION:-}" ] || [ "${kept_older_version:-0}" = 1 ]; then
        say "Auto-update replaces this version. Set PINGGY_AUTO_UPDATE=false to keep it."
    fi
}

check_binary_prerequisites() {
    if [ "$os" = linux ]; then
        require_glibc
    fi
    detect_cpu
    case "${PINGGY_BINARY_URL:-}" in
        file://*) ;;
        *) require_downloader ;;
    esac
}

install_with_binary() {
    check_binary_prerequisites
    install_or_update
    warn_auto_update_replaces_it
    link_into_path
    pinggy_path="$INSTALL_PATH"
}

# Prints the file $1 leads to, with every link resolved, in the file and in the folders above it, as realpath does.
# macOS before 13 has no realpath. Prints nothing for a link loop. CDPATH would make cd print the folder.
physical_path() {
    resolved_path="$1"
    link_hops=0
    while [ -L "$resolved_path" ]; do
        link_hops=$((link_hops + 1))
        if [ "$link_hops" -gt "$LINK_HOP_LIMIT" ]; then
            return 1
        fi
        link_target=$(readlink "$resolved_path")
        case "$link_target" in
            /*) resolved_path="$link_target" ;;
            *) resolved_path="$(dirname "$resolved_path")/$link_target" ;;
        esac
    done
    resolved_dir=$(CDPATH='' cd -P "$(dirname "$resolved_path")" 2>/dev/null && pwd -P) || return 1
    printf '%s/%s\n' "$resolved_dir" "$(basename "$resolved_path")"
}

# pnpm's launcher, and the JS file that npm link, yarn or bun link to, start with #!. A downloaded binary does not.
is_script_file() {
    [ "$(dd if="$1" bs=2 count=1 2>/dev/null)" = '#!' ]
}

# Sets pinggy_command to the file the pinggy command runs in this terminal, and pinggy_kind to none, binary (this
# script's), npm, other_binary or other_script. `command -v` prints a name, not a path, for a shell function.
find_pinggy_command() {
    pinggy_command=$(command -v pinggy 2>/dev/null || true)
    case "$pinggy_command" in
        /*) ;;
        *)
            pinggy_kind=none
            return 0
            ;;
    esac
    pinggy_real_path=$(physical_path "$pinggy_command" || true)
    if [ -z "$pinggy_real_path" ]; then
        pinggy_real_path="$pinggy_command"
    fi
    home_real_path=$(CDPATH='' cd -P "$HOME" 2>/dev/null && pwd -P || printf '%s' "$HOME")
    case "$pinggy_real_path" in
        "$home_real_path"/.pinggy/*) pinggy_kind=binary ;;
        *"$NPM_PACKAGE_SEGMENT"*) pinggy_kind=npm ;;
        *)
            if is_script_file "$pinggy_real_path"; then
                pinggy_kind=other_script
            else
                pinggy_kind=other_binary
            fi
            ;;
    esac
}

# npm publish runs as a separate job from the binaries, so the registry can name an older version than pinggy.io.
# `npm install -g` reads the registry, so the target comes from there.
resolve_npm_target_version() {
    if [ -n "${PINGGY_VERSION:-}" ]; then
        npm_target_version=${PINGGY_VERSION#v}
        return 0
    fi
    say "Checking the latest version of pinggy on npm..."
    npm_target_version=$(npm view "$NPM_PACKAGE" version </dev/null 2>/dev/null || true)
    if [ -z "$npm_target_version" ]; then
        fail "could not read the latest pinggy version from the npm registry. Try again later."
    fi
}

# npm writes the package folder and the command link under its prefix. A prefix this user cannot write, such as a
# system Node owned by root, needs sudo, and this script never runs sudo.
install_npm_package() {
    package_spec="$NPM_PACKAGE@$npm_target_version"
    if [ ! -w "$npm_prefix/lib/node_modules" ] || [ ! -w "$npm_prefix/bin" ]; then
        fail "this user cannot write npm's global folder, $npm_prefix." \
            "Run: sudo npm install -g --prefix $npm_prefix $package_spec, then run this script again."
    fi
    say "Running: npm install -g --prefix $(shown "$npm_prefix") $package_spec"
    npm install -g --prefix "$npm_prefix" --no-fund --no-audit "$package_spec" </dev/null \
        || fail "npm could not install $package_spec. npm printed the reason above."
    say "Installed pinggy $npm_target_version with npm"
}

# The prefix is the path before lib/node_modules/pinggy. --prefix updates this copy even when the npm on PATH uses
# another global folder, such as nvm's Node while pinggy came from the system Node.
update_npm_copy() {
    npm_prefix=${pinggy_real_path%%"$NPM_PACKAGE_SEGMENT"*}
    if ! has_command npm; then
        fail "pinggy at $(shown "$pinggy_command") came from npm, but npm is not on PATH."
    fi
    resolve_npm_target_version
    installed_version=$(binary_version "$pinggy_command")
    if [ -z "$installed_version" ]; then
        if ! confirm "$(shown "$pinggy_command") does not run. Reinstall it with npm? [Y/n] "; then
            fail "$(shown "$pinggy_command") does not run, so it cannot sign in this device."
        fi
        install_npm_package
    elif [ "$installed_version" = "$npm_target_version" ]; then
        say "pinggy $installed_version, installed with npm, is up to date."
    elif confirm "pinggy $installed_version is installed with npm. Update to $npm_target_version? [Y/n] "; then
        install_npm_package
    else
        say "Keeping pinggy $installed_version."
    fi
    pinggy_path="$pinggy_command"
    skip_login_service=1
}

# A program file this script did not install, such as a binary downloaded by hand. No keeps it, and the script signs
# in with it.
offer_binary_over_other_copy() {
    check_binary_prerequisites
    resolve_target_tag
    target_version=${tag#v}
    other_version=$(binary_version "$pinggy_command")
    if [ -n "$other_version" ]; then
        say "pinggy $other_version at $(shown "$pinggy_command") was not installed by this script."
    else
        say "$(shown "$pinggy_command") was not installed by this script."
    fi
    if ! confirm "Install the latest pinggy, $target_version, to $(shown "$INSTALL_PATH")? [Y/n] "; then
        say "Keeping $(shown "$pinggy_command")."
        pinggy_path="$pinggy_command"
        skip_login_service=1
        return 0
    fi
    if [ "$(binary_version "$INSTALL_PATH")" = "$target_version" ]; then
        say "pinggy $target_version is up to date in $(shown "$INSTALL_PATH")."
    else
        install_binary
    fi
    warn_auto_update_replaces_it
    link_into_path
    pinggy_path="$INSTALL_PATH"
}

fail_unknown_copy() {
    fail "pinggy at $(shown "$pinggy_command") was not installed by this script or npm.
Update it the way you installed it."
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
    if is_install_only; then
        return 0
    fi
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

# The service file `pinggy daemon service-install` writes. Its paths live in src/daemon/lifecycle/serviceInstaller.ts.
# The service counts only when it runs the binary this script installs. A service left by a pinggy elsewhere gets the
# question, and service-install replaces it.
login_service_installed() {
    case "$os" in
        macos) service_file="$HOME/Library/LaunchAgents/$LAUNCHD_LABEL.plist" ;;
        linux) service_file="$HOME/.config/systemd/user/$SYSTEMD_UNIT.service" ;;
    esac
    [ -f "$service_file" ] && grep -qF "$INSTALL_PATH" "$service_file"
}

# A container or a session with no systemd user manager cannot run the Linux service.
login_service_supported() {
    if [ "$os" = macos ]; then
        return 0
    fi
    has_command systemctl && systemctl --user show-environment >/dev/null 2>&1
}

# Asks once the device connects, so the agent starts again after a restart. Leaves an installed service as it is.
# `pinggy daemon service-install` runs only from this script's binary, so another copy skips the question.
offer_login_service() {
    if [ "${skip_login_service:-0}" = 1 ]; then
        return 0
    fi
    if login_service_installed || ! login_service_supported; then
        return 0
    fi
    if ! has_terminal; then
        say "To start pinggy when this computer starts, run: pinggy daemon service-install"
        return 0
    fi

    say ""
    if ! confirm "Start pinggy automatically when this computer starts? [Y/n] "; then
        say "To start pinggy when this computer starts, run: pinggy daemon service-install"
        return 0
    fi
    if ! "$INSTALL_PATH" daemon service-install </dev/null; then
        say "Could not set up the login service. To try again, run: pinggy daemon service-install"
    fi
}

# Prints field $1 of daemon.json. JSON.stringify(info, null, 2) writes 1 key per line, so sed reads it without a JSON
# parser. A string prints without its quotes.
daemon_info_field() {
    sed -n "s/^[[:space:]]*\"$1\"[[:space:]]*:[[:space:]]*\"\{0,1\}\([^\",]*\)\"\{0,1\},\{0,1\}[[:space:]]*\$/\1/p" \
        "$DAEMON_INFO_PATH" | head -n 1
}

# Sets daemon_pid, daemon_version and daemon_host when daemon.json names a live daemon. A daemon.json left by a crash
# can name a pid that a reboot gave to another program, so the process must run DAEMON_PROCESS_FLAG. Without ps, as
# in a slim container, a live pid is enough.
read_running_daemon() {
    if [ ! -f "$DAEMON_INFO_PATH" ]; then
        return 1
    fi
    daemon_pid=$(daemon_info_field pid)
    daemon_version=$(daemon_info_field cliVersion)
    daemon_host=$(daemon_info_field host)
    case "$daemon_pid" in
        '' | *[!0-9]*) return 1 ;;
    esac
    if ! kill -0 "$daemon_pid" 2>/dev/null; then
        return 1
    fi
    if ! has_command ps; then
        return 0
    fi
    case "$(ps -p "$daemon_pid" -o args= 2>/dev/null)" in
        *"$DAEMON_PROCESS_FLAG"*) return 0 ;;
        *) return 1 ;;
    esac
}

launchd_target() {
    printf 'gui/%s/%s' "$(id -u)" "$LAUNCHD_LABEL"
}

# Sets daemon_restart to launchd or systemd when that service's process is the daemon, as serviceRestartInstruction()
# in src/daemon/lifecycle/serviceInstaller.ts decides. A plain stop would leave the service stopped, and
# `daemon start` would then run a daemon outside it.
choose_daemon_restart() {
    daemon_restart=plain
    if [ "$os" = macos ]; then
        if launchctl print "$(launchd_target)" 2>/dev/null | grep -q "^[[:space:]]*pid = $daemon_pid\$"; then
            daemon_restart=launchd
        fi
    elif has_command systemctl \
        && [ "$(systemctl --user show -p MainPID --value "$SYSTEMD_UNIT" 2>/dev/null)" = "$daemon_pid" ]; then
        daemon_restart=systemd
    fi
}

# The command the user runs to restart the daemon later. `pinggy daemon stop` waits for the exit before it returns.
daemon_restart_command() {
    case "$daemon_restart" in
        launchd) printf 'launchctl kickstart -k %s' "$(launchd_target)" ;;
        systemd) printf 'systemctl --user restart %s' "$SYSTEMD_UNIT" ;;
        *) printf 'pinggy daemon stop && pinggy daemon start' ;;
    esac
}

# Returns 1 when process $1 still runs after DAEMON_RESTART_WAIT_SECONDS.
wait_for_exit() {
    waited_seconds=0
    while kill -0 "$1" 2>/dev/null; do
        if [ "$waited_seconds" -ge "$DAEMON_RESTART_WAIT_SECONDS" ]; then
            return 1
        fi
        sleep 1
        waited_seconds=$((waited_seconds + 1))
    done
}

# Stops daemon $1 and starts a new one from $pinggy_path, or through its service. A daemon copies the environment of
# the command that starts it, so the subshell unsets DEVICE_AGENT_TOKEN first. `pinggy daemon stop` exits 0 when the
# stop fails, so the script checks the process itself before `daemon start`.
restart_daemon() {
    (
        unset DEVICE_AGENT_TOKEN
        case "$daemon_restart" in
            launchd) launchctl kickstart -k "$(launchd_target)" >/dev/null ;;
            systemd) systemctl --user restart "$SYSTEMD_UNIT" >/dev/null ;;
            *)
                "$pinggy_path" daemon stop </dev/null >/dev/null
                if wait_for_exit "$1"; then
                    "$pinggy_path" daemon start </dev/null >/dev/null
                fi
                ;;
        esac
    ) || true
}

# Returns 0 once daemon.json names a daemon other than $1 that runs version $2. launchd and systemd return before the
# new daemon writes daemon.json.
wait_for_new_daemon() {
    waited_seconds=0
    while [ "$waited_seconds" -lt "$DAEMON_RESTART_WAIT_SECONDS" ]; do
        if read_running_daemon && [ "$daemon_pid" != "$1" ] && [ "$daemon_version" = "$2" ]; then
            return 0
        fi
        sleep 1
        waited_seconds=$((waited_seconds + 1))
    done
    return 1
}

# A daemon keeps the version it started with. When it runs another version than $pinggy_path, the copy this script
# signs in with, the script asks to restart it, so the device agent and auto-start tunnels run the new version. The
# Pinggy app's daemon belongs to the app, which refuses /shutdown. A daemon.json with no cliVersion comes from an
# older build, so it differs.
offer_daemon_restart() {
    if ! read_running_daemon || [ "$daemon_host" = app ]; then
        return 0
    fi
    new_version=$(binary_version "$pinggy_path")
    if [ -z "$new_version" ] || [ "$daemon_version" = "$new_version" ]; then
        return 0
    fi
    old_daemon_pid=$daemon_pid
    running_version=${daemon_version:-an older version}
    choose_daemon_restart
    restart_command=$(daemon_restart_command)

    say ""
    # confirm() takes no terminal as yes, and a restart stops tunnels.
    if ! has_terminal; then
        say "The pinggy daemon still runs $running_version. To restart it with $new_version, run: $restart_command"
        return 0
    fi
    say "The pinggy daemon still runs $running_version. Restarting it stops its tunnels." \
        "Auto-start tunnels and the device agent start again."
    if ! confirm "Restart it with $new_version? [Y/n] "; then
        say "To restart it later, run: $restart_command"
        return 0
    fi
    restart_daemon "$old_daemon_pid"
    if wait_for_new_daemon "$old_daemon_pid" "$new_version"; then
        say "The pinggy daemon now runs $new_version."
    else
        say "Could not restart the pinggy daemon. Run: $restart_command"
    fi
}

# Runs $pinggy_path, the copy this script installed, updated or kept, by its full path, so another pinggy earlier on
# PATH does not answer. connect reads DEVICE_AGENT_TOKEN from the environment this script passes on, and reads no
# key, so it runs the same with no terminal. -b is the default now. It is passed anyway, so an older pinggy the user
# kept runs the agent in its daemon too. The token leaves the environment before the service question, so no later
# command inherits it.
connect_with_device_token() {
    export DEVICE_AGENT_TOKEN
    say ""
    status=0
    if [ -n "${PINGGY_MANAGE:-}" ]; then
        "$pinggy_path" device connect -b --manage "$PINGGY_MANAGE" </dev/null || status=$?
    else
        "$pinggy_path" device connect -b </dev/null || status=$?
    fi
    unset DEVICE_AGENT_TOKEN
    if [ "$status" -ne 0 ]; then
        exit "$status"
    fi
    offer_login_service
    exit 0
}

# Runs $pinggy_path by its full path, as connect_with_device_token does. -b as above.
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
    if ! confirm "Connect this device to Pinggy? [Y/n] "; then
        say "Installed. To connect this device later, run: $login_command"
        return 0
    fi

    status=0
    if [ -n "${PINGGY_MANAGE:-}" ]; then
        "$pinggy_path" device login -b --manage "$PINGGY_MANAGE" </dev/tty || status=$?
    else
        "$pinggy_path" device login -b </dev/tty || status=$?
    fi
    if [ "$status" -ne 0 ]; then
        exit "$status"
    fi
    offer_login_service
}

is_install_only() {
    [ "${PINGGY_INSTALL_ONLY:-}" = 1 ]
}

main() {
    detect_os
    if [ -n "${PINGGY_BINARY_URL:-}" ]; then
        install_with_binary
    else
        find_pinggy_command
        case "$pinggy_kind" in
            npm) update_npm_copy ;;
            other_binary) offer_binary_over_other_copy ;;
            other_script) fail_unknown_copy ;;
            *) install_with_binary ;;
        esac
    fi
    if is_install_only; then
        return 0
    fi
    offer_daemon_restart
    if has_device_token; then
        connect_with_device_token
    fi
    start_sign_in
}

main "$@"
