# Installs or updates the Pinggy CLI on Windows, then asks whether to sign this machine in as a Pinggy device.
# Once the device connects, it asks whether to start pinggy at login, unless that task is already registered.
# Before the sign-in, when a pinggy daemon runs another version than the installed one, it asks to restart the daemon.
#
#   irm https://pinggy.io/install.ps1 | iex
#   $env:DEVICE_AGENT_TOKEN='<token>'; irm https://pinggy.io/install.ps1 | iex
#
# It updates the copy that the pinggy command runs in this window:
#   no copy, or this script's binary      installs or updates the binary, as below
#   an npm copy                           updates it with `npm install -g`. No binary, no PATH change, and no login
#                                         task question, because the npm version cannot run as a service
#   another pinggy.exe                    asks to install this script's binary. No signs in with that file
#   a script (npm link, pnpm, yarn, bun)  stops with a message
#
# The binary goes to %LOCALAPPDATA%\Pinggy\bin\pinggy.exe, and that directory goes on the user PATH. No admin.
#
# Setting, from the dashboard's command:
#   $env:DEVICE_AGENT_TOKEN  a device token. `pinggy device connect` runs with no email and no code. Every update
#                            question is still asked, and a pinggy older than 0.6.2 ignores the token. The token
#                            reaches the CLI in its environment, never on a command line. The script removes the
#                            variable from this window when it ends
#
# Overrides, for dev and tests:
#   $env:PINGGY_VERSION     a release tag, such as v0.6.1. Default: the version pinggy.io publishes, or for an npm
#                           copy the npm registry's latest
#   $env:PINGGY_BINARY_URL  a full binary URL, file:// included. Replaces the installed binary without a version check,
#                           whatever the pinggy command runs
#   $env:PINGGY_MANAGE      a non-production dashboard host, passed to `pinggy device login` or `connect` as --manage
#
# Set by a downloaded pinggy.exe that installs itself, with PINGGY_BINARY_URL naming that file:
#   $env:PINGGY_INSTALL_ONLY  1: install, then end, with no sign-in
#
# The source lives in Pinggy-io/cli-js, scripts/install/. A release copies it to pinggy.io.
#
# iex runs this inside the user's own session. So it never calls exit, which would close their window, and every
# helper and preference is local to Install-Pinggy. Nothing runs until the last line.

function Install-Pinggy {
    # Write-Host, because iex also prints the output stream, and these lines are messages, not output.
    [Diagnostics.CodeAnalysis.SuppressMessageAttribute('PSAvoidUsingWriteHost', '')]
    param()

    $ErrorActionPreference = 'Stop'
    # The progress bar makes Invoke-WebRequest many times slower in Windows PowerShell 5.1.
    $ProgressPreference = 'SilentlyContinue'

    $releasesUrl = 'https://github.com/Pinggy-io/cli-js/releases'
    $versionUrl = 'https://pinggy.io/cli/version.json'
    $installDir = Join-Path $env:LOCALAPPDATA 'Pinggy\bin'
    $installPath = Join-Path $installDir 'pinggy.exe'
    $versionPattern = 'Pinggy CLI version:\s*(\S+)'
    $autoUpdatePinLine = 'Auto-update replaces this version. Set PINGGY_AUTO_UPDATE=false to keep it.'
    $npmPackage = 'pinggy'
    # The file a running daemon writes. Its path lives in src/utils/configDir.ts.
    $daemonInfoPath = Join-Path $env:APPDATA 'pinggy\daemon.json'
    # The task `pinggy daemon service-install` registers. Its name lives in src/daemon/lifecycle/serviceInstaller.ts.
    $loginTaskName = 'PinggyDaemon'
    $cpuArchitectureX64 = 9
    $cpuArchitectureArm64 = 12
    # Windows PowerShell 5.1 has no stall check, so a limit on the total time stands in. A healthy request ends in
    # under 1 s, so the limit ends only a stalled one.
    $versionRequestTimeoutSeconds = 60
    # Every daemon process runs with this flag (getDaemonSpawnArgs() in src/daemon/lifecycle/daemonManager.ts).
    $daemonProcessFlag = '--_daemon-child'
    # How long a restarted daemon may take to stop, and then to write daemon.json.
    $daemonRestartWaitSeconds = 10
    # PowerShell 5.1 has no &&. `pinggy daemon stop` waits for the exit before it returns.
    $daemonRestartCommand = 'pinggy daemon stop; pinggy daemon start'

    # Win32_Processor describes the machine. PROCESSOR_ARCHITECTURE describes this process, and reads AMD64 in an
    # x64 PowerShell emulated on ARM64.
    function Get-Cpu {
        $architecture = $null
        try {
            $architecture = (Get-CimInstance -ClassName Win32_Processor | Select-Object -First 1).Architecture
        } catch {
            $architecture = $null
        }
        if ($architecture -eq $cpuArchitectureX64) { return 'x64' }
        if ($architecture -eq $cpuArchitectureArm64) { return 'arm64' }

        $processArchitecture = $env:PROCESSOR_ARCHITEW6432
        if (-not $processArchitecture) { $processArchitecture = $env:PROCESSOR_ARCHITECTURE }
        if ($processArchitecture -eq 'AMD64') { return 'x64' }
        if ($processArchitecture -eq 'ARM64') { return 'arm64' }
        throw "pinggy install: unsupported CPU: $processArchitecture. The pinggy binaries are built for x64 and arm64."
    }

    # pinggy.io publishes the latest version in the deploy that publishes this script, so the script and the binary
    # come from 1 release. GitHub's /releases/latest can name a newer release, or one whose binaries still upload.
    function Get-TargetTag {
        if ($env:PINGGY_VERSION) {
            if ($env:PINGGY_VERSION.StartsWith('v')) { return $env:PINGGY_VERSION }
            return "v$($env:PINGGY_VERSION)"
        }
        $retryHint = 'Try again later, or set $env:PINGGY_VERSION to a release tag, such as v0.6.1.'
        Write-Host 'Checking the latest version of Pinggy...'
        try {
            $latest = Invoke-RestMethod -Uri $versionUrl -UseBasicParsing -TimeoutSec $versionRequestTimeoutSeconds
        } catch {
            throw "pinggy install: could not reach $versionUrl. $retryHint"
        }
        $version = [string] $latest.version
        if ($version -notmatch '^\d+\.\d+\.\d+$') {
            throw "pinggy install: could not read the latest version from $versionUrl. $retryHint"
        }
        return "v$version"
    }

    # The version a binary reports, or '' when it does not run. 'Continue', because Windows PowerShell 5.1 turns a
    # native command's stderr into a terminating error under 'Stop'.
    function Get-BinaryVersion([string] $path) {
        $ErrorActionPreference = 'Continue'
        try {
            $output = & $path --version 2>$null | Out-String
        } catch {
            return ''
        }
        if ($output -match $versionPattern) { return $Matches[1] }
        return ''
    }

    function Test-Interactive {
        return [Environment]::UserInteractive -and -not [Console]::IsInputRedirected
    }

    # Enter means yes. Only an answer starting with n means no. With no terminal, the answer is $noTerminalAnswer.
    function Confirm-Question([string] $question, [bool] $noTerminalAnswer = $true) {
        if (-not (Test-Interactive)) { return $noTerminalAnswer }
        $answer = Read-Host $question
        return -not ($answer -match '^\s*n')
    }

    function Save-Binary([string] $url, [string] $destination) {
        if ($url -like 'file://*') {
            # Invoke-WebRequest in PowerShell 7 cannot read file:// URLs.
            Copy-Item -LiteralPath ([Uri] $url).LocalPath -Destination $destination -Force
        } elseif ($url -like 'https://*') {
            Invoke-WebRequest -Uri $url -OutFile $destination -UseBasicParsing
        } else {
            throw 'pinggy install: PINGGY_BINARY_URL must start with https:// or file://'
        }
    }

    # Windows refuses to overwrite a running .exe, but allows a rename. So the old file moves aside under a unique
    # name, and a later run deletes it once nothing runs it. A .old still locked never blocks the next update.
    function Move-BinaryIntoPlace([string] $newPath) {
        Get-ChildItem -LiteralPath $installDir -Filter 'pinggy.exe.*.old' |
            Remove-Item -Force -ErrorAction SilentlyContinue
        if (Test-Path -LiteralPath $installPath) {
            Move-Item -LiteralPath $installPath -Destination "$installPath.$([DateTime]::UtcNow.Ticks).old"
        }
        Move-Item -LiteralPath $newPath -Destination $installPath
    }

    function Install-Binary([string] $tag, [string] $cpu) {
        if ($env:PINGGY_BINARY_URL) {
            $url = $env:PINGGY_BINARY_URL
        } else {
            $url = "$releasesUrl/download/$tag/pinggy-win-$cpu.exe"
        }
        New-Item -ItemType Directory -Force -Path $installDir | Out-Null
        $newPath = "$installPath.new.exe"

        if ($url -like 'file://*') {
            Write-Host "Copying $(([Uri] $url).LocalPath)"
        } else {
            Write-Host "Downloading $url"
        }
        try {
            try {
                Save-Binary $url $newPath
            } catch {
                throw "pinggy install: the download failed: $url. $($_.Exception.Message)"
            }
            $downloadedVersion = Get-BinaryVersion $newPath
            if (-not $downloadedVersion) {
                throw "pinggy install: the downloaded file does not run on this machine (windows-$cpu). " +
                    'The installed pinggy is unchanged.'
            }
            Move-BinaryIntoPlace $newPath
        } finally {
            Remove-Item -LiteralPath $newPath -Force -ErrorAction SilentlyContinue
        }
        Write-Host "Installed pinggy $downloadedVersion to $installPath"
    }

    # Steps 2 to 6 of the plan: compare with the installed binary, then download only when needed.
    function Install-OrUpdate([string] $cpu) {
        if ($env:PINGGY_BINARY_URL) {
            Install-Binary '' $cpu
            return
        }

        $tag = Get-TargetTag
        $targetVersion = $tag.Substring(1)
        if (-not (Test-Path -LiteralPath $installPath)) {
            Install-Binary $tag $cpu
            return
        }

        $installedVersion = Get-BinaryVersion $installPath
        if (-not $installedVersion) {
            Write-Host "$installPath does not run. Replacing it."
            Install-Binary $tag $cpu
        } elseif ($installedVersion -eq $targetVersion) {
            Write-Host "pinggy $installedVersion is up to date."
        } elseif (Confirm-Question "pinggy $installedVersion is installed. Update to $($targetVersion)? [Y/n]") {
            Install-Binary $tag $cpu
        } else {
            Write-Host "Keeping pinggy $installedVersion."
            if (-not $env:PINGGY_VERSION) { Write-Host $autoUpdatePinLine }
        }
    }

    function Install-WithBinary {
        $cpu = Get-Cpu
        Install-OrUpdate $cpu
        if ($env:PINGGY_VERSION) { Write-Host $autoUpdatePinLine }
        Add-InstallDirToPath
    }

    # For a pinggy.exe this script did not install: installs the latest only when this script's binary is older.
    function Install-LatestBinary([string] $tag, [string] $cpu) {
        $targetVersion = $tag.Substring(1)
        if ((Get-BinaryVersion $installPath) -eq $targetVersion) {
            Write-Host "pinggy $targetVersion is up to date in $installPath."
        } else {
            Install-Binary $tag $cpu
        }
        if ($env:PINGGY_VERSION) { Write-Host $autoUpdatePinLine }
        Add-InstallDirToPath
    }

    # A registry install from npm keeps the package at <launcher folder>\node_modules\pinggy. `npm link` puts a
    # junction there instead, to a source checkout.
    function Test-NpmPackageFolder([string] $folder) {
        $packageDir = Join-Path $folder "node_modules\$npmPackage"
        if (-not (Test-Path -LiteralPath (Join-Path $packageDir 'package.json') -PathType Leaf)) { return $false }
        return -not (Get-Item -LiteralPath $packageDir -Force).LinkType
    }

    # The copy the pinggy command runs in this window. Kind is none, binary (this script's), npm, otherBinary or
    # otherScript. npm, pnpm and yarn write launcher files, not links. bun's launcher is a pinggy.exe beside a
    # pinggy.bunx, so it counts as a script.
    function Find-PinggyCommand {
        $command = Get-Command -Name 'pinggy' -CommandType Application, ExternalScript -ErrorAction SilentlyContinue |
            Select-Object -First 1
        if (-not $command) { return [pscustomobject]@{ Kind = 'none'; Path = ''; Folder = '' } }
        $path = $command.Path
        $folder = Split-Path -Parent $path
        if ($path -ieq $installPath) {
            $kind = 'binary'
        } elseif (Test-NpmPackageFolder $folder) {
            $kind = 'npm'
        } elseif ($path -like '*.exe' -and -not (Test-Path -LiteralPath (Join-Path $folder 'pinggy.bunx'))) {
            $kind = 'otherBinary'
        } else {
            $kind = 'otherScript'
        }
        return [pscustomobject]@{ Kind = $kind; Path = $path; Folder = $folder }
    }

    # npm.cmd and pinggy.cmd, not npm and pinggy: PowerShell picks the .ps1 launcher first, and an execution policy
    # that blocks scripts blocks it.
    function New-NpmCopy($found) {
        $npmCommand = Get-Command -Name 'npm.cmd' -CommandType Application -ErrorAction SilentlyContinue |
            Select-Object -First 1
        $launcher = Join-Path $found.Folder 'pinggy.cmd'
        if (-not (Test-Path -LiteralPath $launcher)) { $launcher = $found.Path }
        return [pscustomobject]@{
            Path = $found.Path
            Folder = $found.Folder
            Npm = $(if ($npmCommand) { $npmCommand.Path } else { '' })
            Launcher = $launcher
        }
    }

    # npm publish runs as a separate job from the binaries, so the registry can name an older version than
    # pinggy.io. npm install -g reads the registry, so the target comes from there.
    function Get-NpmTargetVersion([string] $npm) {
        if ($env:PINGGY_VERSION) { return $env:PINGGY_VERSION.TrimStart('v') }
        Write-Host 'Checking the latest version of pinggy on npm...'
        $ErrorActionPreference = 'Continue'
        $version = (& $npm view $npmPackage version 2>$null | Out-String).Trim()
        if ($LASTEXITCODE -ne 0 -or -not $version) {
            throw 'pinggy install: could not read the latest pinggy version from the npm registry. Try again later.'
        }
        return $version
    }

    # The fields of daemon.json while its process runs, or $null. pinggy daemon status exits 0 either way, so the
    # script reads the file the daemon writes and checks its process.
    function Get-RunningDaemon {
        try {
            $daemonInfo = Get-Content -LiteralPath $daemonInfoPath -Raw | ConvertFrom-Json
            Get-Process -Id ([int] $daemonInfo.pid) -ErrorAction Stop | Out-Null
            return $daemonInfo
        } catch {
            return $null
        }
    }

    # Out-Host keeps npm's lines out of the output stream, as Write-Host does for messages.
    function Invoke-NpmInstall($npmCopy, [string] $packageSpec) {
        Write-Host "Running: npm install -g --prefix $($npmCopy.Folder) $packageSpec"
        $ErrorActionPreference = 'Continue'
        & $npmCopy.Npm install -g --prefix $npmCopy.Folder --no-fund --no-audit $packageSpec | Out-Host
        return $LASTEXITCODE -eq 0
    }

    # Windows blocks replacing a file that a running program has open, so a running pinggy can fail the update. With
    # no terminal, the script keeps pinggy and its tunnels running.
    function Install-NpmPackage($npmCopy, [string] $version) {
        $packageSpec = "$npmPackage@$version"
        $failure = "pinggy install: npm could not install $packageSpec. npm printed the reason above."
        if (-not (Invoke-NpmInstall $npmCopy $packageSpec)) {
            if (-not (Get-RunningDaemon)) { throw $failure }
            if (-not (Confirm-Question 'pinggy is running. Stop it and all its tunnels, then retry? [Y/n]' $false)) {
                throw "$failure If pinggy is running, run: pinggy daemon stop, then run this script again."
            }
            & $npmCopy.Launcher daemon stop | Out-Host
            if (-not (Invoke-NpmInstall $npmCopy $packageSpec)) { throw $failure }
        }
        Write-Host "Installed pinggy $version with npm"
    }

    # The same questions as for the binary, with versions from npm's copy and the npm registry. Auto-update leaves an
    # npm install alone, so a kept version gets no auto-update line.
    function Update-NpmCopy($npmCopy) {
        if (-not $npmCopy.Npm) {
            throw "pinggy install: pinggy at $($npmCopy.Path) came from npm, but npm is not on PATH."
        }
        $targetVersion = Get-NpmTargetVersion $npmCopy.Npm
        $installedVersion = Get-BinaryVersion $npmCopy.Launcher
        if (-not $installedVersion) {
            if (-not (Confirm-Question "$($npmCopy.Launcher) does not run. Reinstall it with npm? [Y/n]")) {
                throw "pinggy install: $($npmCopy.Launcher) does not run, so it cannot sign in this device."
            }
            Install-NpmPackage $npmCopy $targetVersion
        } elseif ($installedVersion -eq $targetVersion) {
            Write-Host "pinggy $installedVersion, installed with npm, is up to date."
        } elseif (Confirm-Question ("pinggy $installedVersion is installed with npm. " +
                "Update to $($targetVersion)? [Y/n]")) {
            Install-NpmPackage $npmCopy $targetVersion
        } else {
            Write-Host "Keeping pinggy $installedVersion."
        }
    }

    # A pinggy.exe this script did not install, such as one downloaded by hand. Returns whether the user said yes.
    function Confirm-BinaryOverOtherCopy([string] $otherPath, [string] $targetVersion) {
        $otherVersion = Get-BinaryVersion $otherPath
        if ($otherVersion) {
            Write-Host "pinggy $otherVersion at $otherPath was not installed by this script."
        } else {
            Write-Host "$otherPath was not installed by this script."
        }
        return Confirm-Question "Install the latest pinggy, $targetVersion, to $($installPath)? [Y/n]"
    }

    function Test-PathListHasInstallDir([string] $pathList) {
        $wanted = $installDir.TrimEnd('\')
        foreach ($entry in ($pathList -split ';')) {
            if ([Environment]::ExpandEnvironmentVariables($entry).TrimEnd('\') -ieq $wanted) { return $true }
        }
        return $false
    }

    # Reads and writes the registry, not [Environment]::GetEnvironmentVariable: that returns %USERPROFILE%-style
    # entries expanded, and writing them back would flatten them.
    function Add-InstallDirToPath {
        $environmentKey = [Microsoft.Win32.Registry]::CurrentUser.OpenSubKey('Environment', $true)
        try {
            $userPath = [string] $environmentKey.GetValue('Path', '',
                [Microsoft.Win32.RegistryValueOptions]::DoNotExpandEnvironmentNames)
            if (-not (Test-PathListHasInstallDir $userPath)) {
                $entries = @($userPath -split ';' | Where-Object { $_ }) + $installDir
                $environmentKey.SetValue('Path', ($entries -join ';'), [Microsoft.Win32.RegistryValueKind]::ExpandString)
                # Any user variable set through .NET broadcasts WM_SETTINGCHANGE, so new terminals read the new PATH.
                [Environment]::SetEnvironmentVariable('PINGGY_INSTALLER', $null, 'User')
                Write-Host "Added $installDir to your user PATH. New terminals find pinggy."
            }
        } finally {
            $environmentKey.Close()
        }
        if (-not (Test-PathListHasInstallDir $env:Path)) {
            $env:Path = "$installDir;$env:Path"
        }
    }

    # The task counts only when it runs the binary this script installs. A task left by a pinggy elsewhere gets the
    # question, and service-install replaces it. Get-ScheduledTask, because schtasks prints field names in the
    # language of Windows.
    function Test-LoginTask {
        try {
            $task = Get-ScheduledTask -TaskName $loginTaskName -ErrorAction Stop
        } catch {
            return $false
        }
        return @($task.Actions | Where-Object { $_.Execute -ieq $installPath }).Count -gt 0
    }

    # Asks once the device connects, so the agent starts again after a restart. Leaves a registered task as it is.
    # `pinggy daemon service-install` runs only from this script's binary, so another copy skips the question.
    function Invoke-LoginServiceOffer {
        if ($skipLoginService) { return }
        if (Test-LoginTask) { return }
        if (-not (Test-Interactive)) {
            Write-Host 'To start pinggy when this computer starts, run: pinggy daemon service-install'
            return
        }
        Write-Host ''
        if (-not (Confirm-Question 'Start pinggy automatically when this computer starts? [Y/n]')) {
            Write-Host 'To start pinggy when this computer starts, run: pinggy daemon service-install'
            return
        }
        & $installPath daemon service-install
        if ($LASTEXITCODE -ne 0) {
            Write-Host 'Could not set up the login service. To try again, run: pinggy daemon service-install'
        }
    }

    # A daemon.json left by a crash can name a pid that a reboot gave to another program, so the process must run
    # $daemonProcessFlag.
    function Test-DaemonProcess([int] $processId) {
        try {
            $process = Get-CimInstance -ClassName Win32_Process -Filter "ProcessId = $processId" -ErrorAction Stop
        } catch {
            return $false
        }
        return [bool] ($process -and $process.CommandLine -like "*$daemonProcessFlag*")
    }

    # A daemon copies the environment of the command that starts it, so DEVICE_AGENT_TOKEN leaves for the restart and
    # comes back for `device connect`. `pinggy daemon stop` exits 0 when the stop fails, so the script waits for the
    # process itself before `daemon start`. Windows has no service that owns the daemon: the login task runs
    # `daemon start` and ends.
    function Restart-Daemon([int] $oldPid) {
        $deviceToken = $env:DEVICE_AGENT_TOKEN
        Remove-Item -Path Env:\DEVICE_AGENT_TOKEN -ErrorAction SilentlyContinue
        $ErrorActionPreference = 'Continue'
        try {
            & $pinggyPath daemon stop | Out-Null
            Wait-Process -Id $oldPid -Timeout $daemonRestartWaitSeconds -ErrorAction SilentlyContinue
            if (-not (Get-Process -Id $oldPid -ErrorAction SilentlyContinue)) {
                & $pinggyPath daemon start | Out-Null
            }
        } finally {
            if ($deviceToken) { $env:DEVICE_AGENT_TOKEN = $deviceToken }
        }
    }

    # True once daemon.json names a daemon other than $oldPid that runs $version.
    function Wait-NewDaemon([int] $oldPid, [string] $version) {
        for ($second = 0; $second -lt $daemonRestartWaitSeconds; $second++) {
            $daemon = Get-RunningDaemon
            if ($daemon -and [int] $daemon.pid -ne $oldPid -and [string] $daemon.cliVersion -eq $version) {
                return $true
            }
            Start-Sleep -Seconds 1
        }
        return $false
    }

    # A daemon keeps the version it started with. When it runs another version than $pinggyPath, the copy this script
    # signs in with, the script asks to restart it, so the device agent and auto-start tunnels run the new version.
    # The Pinggy app's daemon belongs to the app, which refuses /shutdown. A daemon.json with no cliVersion comes from
    # an older build, so it differs.
    function Invoke-DaemonRestartOffer {
        $daemon = Get-RunningDaemon
        if (-not $daemon -or $daemon.host -eq 'app' -or -not (Test-DaemonProcess ([int] $daemon.pid))) { return }
        $newVersion = Get-BinaryVersion $pinggyPath
        $runningVersion = [string] $daemon.cliVersion
        if (-not $newVersion -or $runningVersion -eq $newVersion) { return }
        if (-not $runningVersion) { $runningVersion = 'an older version' }

        Write-Host ''
        # Confirm-Question takes no terminal as yes, and a restart stops tunnels.
        if (-not (Test-Interactive)) {
            Write-Host ("The pinggy daemon still runs $runningVersion. " +
                "To restart it with $newVersion, run: $daemonRestartCommand")
            return
        }
        Write-Host ("The pinggy daemon still runs $runningVersion. Restarting it stops its tunnels. " +
            'Auto-start tunnels and the device agent start again.')
        if (-not (Confirm-Question "Restart it with $($newVersion)? [Y/n]")) {
            Write-Host "To restart it later, run: $daemonRestartCommand"
            return
        }
        Restart-Daemon ([int] $daemon.pid)
        if (Wait-NewDaemon ([int] $daemon.pid) $newVersion) {
            Write-Host "The pinggy daemon now runs $newVersion."
        } else {
            Write-Host "Could not restart the pinggy daemon. Run: $daemonRestartCommand"
        }
    }

    # Runs $pinggyPath, the copy this script installed, updated or kept, by its full path, so another pinggy earlier
    # on PATH does not answer. -b is the default now. It is passed anyway, so an older pinggy the user kept runs the
    # agent in its daemon too.
    function Invoke-DeviceLogin {
        $loginArguments = @('device', 'login')
        if ($env:PINGGY_MANAGE) { $loginArguments += @('--manage', $env:PINGGY_MANAGE) }

        if (-not (Test-Interactive)) {
            Write-Host "Installed. To sign this machine in, run: pinggy $($loginArguments -join ' ')"
            Write-Host ('On a machine without a keyboard, add the device in the dashboard and run: ' +
                'pinggy device connect --token <TOKEN>')
            return
        }
        Write-Host ''
        if (-not (Confirm-Question 'Connect this device to Pinggy? [Y/n]')) {
            Write-Host "Installed. To connect this device later, run: pinggy $($loginArguments -join ' ')"
            return
        }
        & $pinggyPath @loginArguments -b
        if ($LASTEXITCODE -eq 0) { Invoke-LoginServiceOffer }
    }

    # Runs $pinggyPath by its full path, with -b, as Invoke-DeviceLogin does. connect reads DEVICE_AGENT_TOKEN
    # from the environment it inherits. It reads the console for 1 question, whether the dashboard may reach this
    # machine's files. With no console it asks nothing and leaves file access on. The token leaves the environment
    # before the service question, so no later command inherits it.
    function Invoke-DeviceConnect {
        $connectArguments = @('device', 'connect', '-b')
        if ($env:PINGGY_MANAGE) { $connectArguments += @('--manage', $env:PINGGY_MANAGE) }
        Write-Host ''
        & $pinggyPath @connectArguments
        $connectExitCode = $LASTEXITCODE
        Remove-Item -Path Env:\DEVICE_AGENT_TOKEN -ErrorAction SilentlyContinue
        if ($connectExitCode -eq 0) { Invoke-LoginServiceOffer }
    }

    # Older Windows PowerShell 5.1 setups offer less than TLS 1.2, and GitHub refuses them.
    [Net.ServicePointManager]::SecurityProtocol =
        [Net.ServicePointManager]::SecurityProtocol -bor [Net.SecurityProtocolType]::Tls12

    try {
        $pinggyPath = $installPath
        $skipLoginService = $false
        $found = [pscustomobject]@{ Kind = 'none'; Path = ''; Folder = '' }
        if (-not $env:PINGGY_BINARY_URL) { $found = Find-PinggyCommand }
        switch ($found.Kind) {
            'npm' {
                $npmCopy = New-NpmCopy $found
                Update-NpmCopy $npmCopy
                $pinggyPath = $npmCopy.Launcher
                $skipLoginService = $true
            }
            'otherBinary' {
                $cpu = Get-Cpu
                $tag = Get-TargetTag
                $targetVersion = $tag.Substring(1)
                if (Confirm-BinaryOverOtherCopy $found.Path $targetVersion) {
                    Install-LatestBinary $tag $cpu
                } else {
                    Write-Host "Keeping $($found.Path)."
                    $pinggyPath = $found.Path
                    $skipLoginService = $true
                }
            }
            'otherScript' {
                throw ("pinggy install: pinggy at $($found.Path) was not installed by this script or npm.`n" +
                    'Update it the way you installed it.')
            }
            default { Install-WithBinary }
        }
        if ($env:PINGGY_INSTALL_ONLY -eq '1') { return }
        Invoke-DaemonRestartOffer
        if ($env:DEVICE_AGENT_TOKEN) {
            Invoke-DeviceConnect
        } else {
            Invoke-DeviceLogin
        }
    } finally {
        # iex runs in the user's own session, so every later command in this window would carry the token. A
        # finally runs after an error and after Ctrl+C too.
        Remove-Item -Path Env:\DEVICE_AGENT_TOKEN -ErrorAction SilentlyContinue
    }
}

Install-Pinggy
