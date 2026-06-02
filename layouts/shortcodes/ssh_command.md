{{- $text := .Get "text" | default "" -}}
{{- $clionly := .Get "clionly" | default "false" -}}
{{- if ne $text "" -}}
```bash
{{ $text }}
```
{{- else -}}
{{- $cmd := .Inner | transform.Unmarshal | transform.Unmarshal -}}
{{- with $cmd.ssh }}{{ if ne $clionly "true" }}
```bash
# SSH - no install, works anywhere the ssh client is available
{{ replace .linux.ps "a.pinggy.io" "free.pinggy.io" }}
```
{{ end }}{{ end -}}
{{- with $cmd.cli }}
```bash
# Pinggy CLI - install with: npm install -g pinggy (or download the binary)
{{ replace .linux.ps "a.pinggy.io" "free.pinggy.io" }}
```
{{ end -}}
{{- end -}}
