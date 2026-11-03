{{- /* Markdown output of the network-diagram shortcode (docs pages): the
     same data/network_diagram.yaml entry written out as text. Only the
     single-type form (proto=) produces anything; the homepage tabs have no
     Markdown output. */ -}}
{{- $proto := .Get "proto" | default "" -}}
{{- $port := .Get "port" | default "" -}}
{{- range $p := first 1 (where hugo.Data.network_diagram.protocols "id" $proto) -}}
{{- $local := $p.local -}}
{{- $foot := $p.foot -}}
{{- if $port -}}
  {{- $from := printf "localhost:%v" $p.lport -}}
  {{- $to := printf "localhost:%v" $port -}}
  {{- $local = replace $local $from $to -}}
  {{- $foot = replace $foot $from $to -}}
{{- end -}}
{{- $via := cond (eq $p.tun "cli") "the Pinggy CLI" "SSH" }}
**How a Pinggy {{ $p.name }} tunnel works**

- **Your machine** (`{{ $local }}`): {{ $p.m1 }}, {{ $p.m2 }}.
- **Tunnel:** an outbound connection over {{ $via }} to Pinggy on port 443, encrypted.
- **Pinggy edge** (`*.a.pinggy.link`): {{ $p.e1 }}, {{ $p.e2 }}.
{{- $pn := strings.TrimPrefix ":" $p.port }}
- **{{ $p.users }}** ({{ $p.umeta }}): connect over {{ upper $p.pub }} {{ if eq $pn "443" }}on port 443{{ else }}to an assigned port, such as {{ $pn }}{{ end }}, {{ if $p.through }}encrypted end to end{{ else if $p.enc }}encrypted up to the edge{{ else }}and the edge passes the traffic through as is{{ end }}.

{{ $foot }}
{{ end -}}
