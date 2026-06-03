{{- $mode := .Get "mode" | default "http" -}}
{{- $localport := .Get "localport" | default "8000" -}}
{{- $prefixes := dict "http" "" "tcp" "tcp@" "tls" "tls@" "udp" "udp@" -}}
{{- $prefix := index $prefixes $mode | default "" -}}
{{- with .Get "tryYourselfText" }}
**{{ . }}**
{{ end }}
```bash
# {{ upper $mode }} tunnel forwarding localhost:{{ $localport }}
ssh -p 443 -R0:localhost:{{ $localport }} {{ $prefix }}free.pinggy.io
```
{{ with .Inner }}{{ . }}{{ end }}
Configure more options (authentication, web debugger, custom domains, IP whitelisting, header rules) interactively at {{ .Page.Permalink }}
