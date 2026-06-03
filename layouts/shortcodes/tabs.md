{{- with .Inner }}{{ end -}}
{{ range $idx, $tab := .Scratch.Get "tabs" }}
#### {{ .name }}

{{ .content }}
{{ end }}
