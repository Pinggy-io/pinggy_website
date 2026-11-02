# Installs or updates the Pinggy CLI on Windows, then signs this machine in as a Pinggy device.
#
#   irm https://pinggy.io/install.ps1 | iex
#   $env:DEVICE_AGENT_TOKEN='<token>'; irm https://pinggy.io/install.ps1 | iex
#
# The binary goes to %LOCALAPPDATA%\Pinggy\bin\pinggy.exe, and that directory goes on the user PATH. No admin.
#
# Setting, from the dashboard's command:
#   $env:DEVICE_AGENT_TOKEN  a device token. An older pinggy updates without asking, then `pinggy device connect`
#                            runs with no email and no code. The token reaches it in its environment, never on a
#                            command line. The script removes the variable from this window when it ends
#
# Overrides, for dev and tests:
#   $env:PINGGY_VERSION     a release tag, such as v0.6.1. Default: the latest release
#   $env:PINGGY_BINARY_URL  a full binary URL, file:// included. Replaces the installed binary without a version check
#   $env:PINGGY_MANAGE      a non-production dashboard host, passed to `pinggy device login` or `connect` as --manage
#
# The source lives in Pinggy-io/cli-js, scripts/install/. A release copies it to pinggy.io.
# Design: docs/pinggy-devices/install-script-plan.md in the pinggy_backend repo.
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
    $installDir = Join-Path $env:LOCALAPPDATA 'Pinggy\bin'
    $installPath = Join-Path $installDir 'pinggy.exe'
    $versionPattern = 'Pinggy CLI version:\s*(\S+)'
    $cpuArchitectureX64 = 9
    $cpuArchitectureArm64 = 12

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

    # GitHub redirects /releases/latest to /releases/tag/<tag>. Reading the redirect costs no API call, so the
    # API's 60 requests an hour per IP do not apply.
    function Get-TargetTag {
        if ($env:PINGGY_VERSION) {
            if ($env:PINGGY_VERSION.StartsWith('v')) { return $env:PINGGY_VERSION }
            return "v$($env:PINGGY_VERSION)"
        }
        $response = Invoke-WebRequest -Uri "$releasesUrl/latest" -Method Head -UseBasicParsing
        $baseResponse = $response.BaseResponse
        if ($baseResponse.PSObject.Properties['ResponseUri']) {
            # Windows PowerShell 5.1: HttpWebResponse
            $finalUrl = $baseResponse.ResponseUri.AbsoluteUri
        } else {
            # PowerShell 7: HttpResponseMessage
            $finalUrl = $baseResponse.RequestMessage.RequestUri.AbsoluteUri
        }
        $tag = ($finalUrl -split '/')[-1]
        if ($tag -notmatch '^v\d') {
            throw "pinggy install: could not read the latest release tag from $releasesUrl/latest"
        }
        return $tag
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

    # Enter, or no terminal, means yes. Only an answer starting with n means no.
    function Confirm-Update([string] $question) {
        if (-not (Test-Interactive)) { return $true }
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

        Write-Host "Downloading $url"
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
        } elseif ($env:DEVICE_AGENT_TOKEN) {
            # An older CLI ignores DEVICE_AGENT_TOKEN, so keeping it would leave the machine unconnected.
            Write-Host "Updating pinggy $installedVersion to $targetVersion."
            Install-Binary $tag $cpu
        } elseif (Confirm-Update "pinggy $installedVersion is installed. Update to $($targetVersion)? [Y/n]") {
            Install-Binary $tag $cpu
        } else {
            Write-Host "Keeping pinggy $installedVersion."
        }
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

    # Runs the installed file by its full path, so an npm-installed pinggy earlier on PATH does not answer.
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
        & $installPath @loginArguments
    }

    # Runs the installed file by its full path, as Invoke-DeviceLogin does. connect reads DEVICE_AGENT_TOKEN from
    # the environment it inherits, and reads no key, so it runs the same with no console.
    function Invoke-DeviceConnect {
        $connectArguments = @('device', 'connect')
        if ($env:PINGGY_MANAGE) { $connectArguments += @('--manage', $env:PINGGY_MANAGE) }
        Write-Host ''
        & $installPath @connectArguments
    }

    # Older Windows PowerShell 5.1 setups offer less than TLS 1.2, and GitHub refuses them.
    [Net.ServicePointManager]::SecurityProtocol =
        [Net.ServicePointManager]::SecurityProtocol -bor [Net.SecurityProtocolType]::Tls12

    try {
        $cpu = Get-Cpu
        Install-OrUpdate $cpu
        Add-InstallDirToPath
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
