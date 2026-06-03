{{- $imageName := .Get 0 -}}
{{- $altText := .Get 1 | default $imageName -}}
{{- with resources.GetMatch (printf "images/%s" $imageName) -}}
{{ printf "![%s](%s)" $altText .RelPermalink }}
{{- end -}}
