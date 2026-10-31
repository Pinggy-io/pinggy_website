---
title: "Los mejores agentes de programación CLI de código abierto en 2026"
slug: "mejores-agentes-de-programacion-cli-codigo-abierto"
description: "Los mejores agentes y harnesses de programación con IA de código abierto para la línea de comandos en 2026, ordenados por estrellas en GitHub: DeepSeek Harness y OpenCode, ambos con ~202k, Codex con 119k, Pi con 98k, además de las CLI de xAI y Alibaba, con notas honestas sobre licencias, modelos locales y qué proyectos se están muriendo."
date: 2026-05-25T10:30:00+05:30
lastmod: 2026-10-29T18:00:00+05:30
draft: false
og_image: "images/top_cli_based_ai_coding_agents/open_source_cli_agents_hero.webp"
# Las etiquetas se mantienen en inglés (el sitio en español tiene las taxonomías
# desactivadas), así que el eyebrow se fija a mano para que no salga en inglés.
eyebrow: "Herramientas CLI"
tags: ["CLI tools", "AI coding agents", "open source", "command line", "terminal", "OpenCode"]
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiQ8OzbW8gZWxlZ2lyIHVuIGFnZW50ZSBkZSBwcm9ncmFtYWNpw7NuIENMSSBkZSBjw7NkaWdvIGFiaWVydG8iLAogICJkZXNjcmlwdGlvbiI6ICJHdcOtYSBwYXNvIGEgcGFzbyBwYXJhIGV2YWx1YXIgeSBlbGVnaXIgZWwgbWVqb3IgYWdlbnRlIGRlIHByb2dyYW1hY2nDs24gY29uIElBIGRlIGPDs2RpZ28gYWJpZXJ0byBwYXJhIGxhIGzDrW5lYSBkZSBjb21hbmRvcyBlbiAyMDI2LCBpbmNsdWlkb3MgRGVlcFNlZWsgSGFybmVzcywgT3BlbkNvZGUsIENvZGV4LCBQaSwgT3BlbkhhbmRzLCBDbGluZSwgR29vc2UsIEFpZGVyLCBDb2RlV2hhbGUsIFJlYXNvbml4LCBHcm9rIEJ1aWxkIHkgb3Ryb3MgaGFybmVzc2VzIHBhcmEgbGEgdGVybWluYWwuIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTAtMjlUMTg6MDA6MDArMDU6MzAiLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiUmV2aXNhIGxhIGxpY2VuY2lhLCBubyBzb2xvIGVsIHByZWNpbyIsCiAgICAgICJ0ZXh0IjogIlF1ZSBzZSBwdWVkYSBkZXNjYXJnYXIgZ3JhdGlzIG5vIHNpZ25pZmljYSBxdWUgc2VhIG9wZW4gc291cmNlLiBEZWVwU2VlayBIYXJuZXNzLCBPcGVuQ29kZSwgUGksIE9wZW5IYW5kcywgS2lsbyBDb2RlLCBDb2RlV2hhbGUgeSBSZWFzb25peCBzb24gTUlUOyBBaWRlciwgR29vc2UsIENsaW5lLCBDb250aW51ZSwgQ29kZXgsIFF3ZW4gQ29kZSB5IEdyb2sgQnVpbGQgc29uIEFwYWNoZS0yLjA7IENydXNoIGVzIEZTTCAocGFzYSBhIE1JVCBhbCBjYWJvIGRlIGRvcyBhw7Fvcyk7IFdhcnAgZXMgQUdQTC0zLjAuIFpDb2RlIGRlIFouQUkgbm8gZXMgb3BlbiBzb3VyY2UgZW4gYWJzb2x1dG86IGVzIHVuYSBhcHAgZGUgZXNjcml0b3JpbyBwcm9waWV0YXJpYSBjb24gdW4gcGxhbiBkZSBwYWdvLCB5IHNvbG8gZXN0w6EgcHVibGljYWRvIGVsIHJlcG8gZGUgc3UgbWFya2V0cGxhY2UgZGUgcGx1Z2lucywgYXVucXVlIGxvcyBwZXNvcyBkZSBzdSBtb2RlbG8gR0xNLTUuMyBzZWFuIE1JVC4gU2kgcGllbnNhcyBpbnRlZ3JhcmxvIG8gcmV2ZW5kZXJsbywgbGEgbGljZW5jaWEgaW1wb3J0YS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiRGVjaWRlIHNpIG5lY2VzaXRhcyBtb2RlbG9zIGxvY2FsZXMiLAogICAgICAidGV4dCI6ICJTaSB0aWVuZXMgcXVlIHRyYWJhamFyIHNpbiBjb25leGnDs24gbyBtYW50ZW5lciBlbCBjw7NkaWdvIGVuIHR1cyBwcm9waWFzIG3DoXF1aW5hcywgZWxpZ2UgdW4gaGFybmVzcyBpbmRlcGVuZGllbnRlIGRlbCBwcm92ZWVkb3IgY29uIHNvcG9ydGUgZGUgT2xsYW1hOiBEZWVwU2VlayBIYXJuZXNzLCBPcGVuQ29kZSwgUGksIEdvb3NlLCBBaWRlciwgQ29kZVdoYWxlLCBSZWFzb25peCwgQ3J1c2ggbyBDb250aW51ZS4gRGVlcFNlZWsgSGFybmVzcyBpbmNsdXllIHVuIGNhdMOhbG9nbyBkZSBwcm92ZWVkb3JlcyBxdWUgY3VicmUgQW50aHJvcGljLCBPcGVuQUksIEJlZHJvY2ssIEF6dXJlIHkgVmVydGV4LCBhZGVtw6FzIGRlIHByb3ZlZWRvcmVzIHBlcnNvbmFsaXphZG9zIHBhcmEgZW5kcG9pbnRzIGF1dG9hbG9qYWRvcy4gTGFzIENMSSBkZSBmYWJyaWNhbnRlcyBjb21vIENvZGV4LCBHcm9rIEJ1aWxkIHkgUXdlbiBDb2RlIHB1ZWRlbiBhcHVudGFyIGEgZW5kcG9pbnRzIHBlcnNvbmFsaXphZG9zLCBwZXJvIGVzdMOhbiBhZmluYWRhcyBwYXJhIHN1cyBwcm9waW9zIG1vZGVsb3MuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkVsaWdlIGVsIGhhcm5lc3Mgc2Vnw7puIGVsIHRyYWJham8iLAogICAgICAidGV4dCI6ICJFbGlnZSBzZWfDum4gbGEgdGFyZWE6IGVsIGhhcm5lc3MgaW5kZXBlbmRpZW50ZSBkZWwgcHJvdmVlZG9yIG3DoXMgcG9wdWxhciAoT3BlbkNvZGUpLCB1bmEgYXJxdWl0ZWN0dXJhIHRvdGFsbWVudGUgbW9kdWxhciBkb25kZSBoYXN0YSBlbCBidWNsZSBkZWwgYWdlbnRlIHNlIHB1ZWRlIGNhbWJpYXIgKERlZXBTZWVrIEhhcm5lc3MpLCB1biBoYXJuZXNzIGxpZ2VybyB5IGVmaWNpZW50ZSBlbiB0b2tlbnMgKFBpKSwgZWplY3VjaW9uZXMgYXV0w7Nub21hcyBlbiBzYW5kYm94IHkgQ0kgKE9wZW5IYW5kcyksIGVkaWNpb25lcyBxdWlyw7pyZ2ljYXMgbmF0aXZhcyBkZSBHaXQgKEFpZGVyKSwgYXV0b21hdGl6YWNpw7NuIGdlbmVyYWwgYmFzYWRhIGVuIE1DUCAoR29vc2UpLCBJREUgbcOhcyBDTEkgaW5kZXBlbmRpZW50ZSBkZWwgbW9kZWxvIChDbGluZSkgbyBlamVjdWNpb25lcyBsYXJnYXMgc2luIHN1cGVydmlzacOzbiBhZmluYWRhcyBwYXJhIGxhIGVzdGFiaWxpZGFkIGRlIGxhIGNhY2jDqSBkZSBwcmVmaWpvIChSZWFzb25peCkuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNvbXBydWViYSBxdWUgZWwgcHJveWVjdG8gZXN0w6Egdml2byB5IGVzIGVzdGFibGUiLAogICAgICAidGV4dCI6ICJVc2EgbGFzIGVzdHJlbGxhcyBkZSBHaXRIdWIgcGFyYSBtZWRpciBsYSBwb3B1bGFyaWRhZCB5IGxhIGZlY2hhIGRlbCDDumx0aW1vIGNvbW1pdCBvIHJlbGVhc2UgcGFyYSBtZWRpciBlbCByaXRtbywgeSBkZXNjb25mw61hIGRlIGxhcyBlc3RyZWxsYXMgcG9yIHPDrSBzb2xhcy4gRGVlcFNlZWsgSGFybmVzcyBsbGVnw7MgYSB1bmFzIDIwM2sgZXN0cmVsbGFzIGVuIGxhcyBkb3Mgc2VtYW5hcyBzaWd1aWVudGVzIGEgc3UgbGFuemFtaWVudG8gZGVsIDEzIGRlIGFnb3N0byBkZSAyMDI2LCBwZXJvIHNpZ3VlIGV0aXF1ZXRhZG8gY29tbyAwLjEuMi1hbHBoYS4xIHkgcHJvbWV0ZSBjYW1iaW9zIGluY29tcGF0aWJsZXMuIFJvbyBDb2RlIHNlIGFyY2hpdsOzIGVuIG1heW8gZGUgMjAyNiwgR2VtaW5pIENMSSBkZWrDsyBkZSBkYXIgc2VydmljaW8gYSB1c3VhcmlvcyBncmF0dWl0b3MsIFBybyB5IFVsdHJhIGVsIDE4IGRlIGp1bmlvIGRlIDIwMjYgZW4gZmF2b3IgZGUgdW4gc3VjZXNvciBkZSBjw7NkaWdvIGNlcnJhZG8sIEFpZGVyIG5vIHRpZW5lIGNvbW1pdHMgZGVzZGUgbWF5byBkZSAyMDI2LCBUcmFlIEFnZW50IGRlIEJ5dGVEYW5jZSBlc3TDoSBwYXJhZG8gZGVzZGUgZmVicmVybyBkZSAyMDI2LCB5IGNsYXctY29kZSB0aWVuZSAxOTVrIGVzdHJlbGxhcyBtaWVudHJhcyBzdSBwcm9waW8gUkVBRE1FIGRpY2UgcXVlIGVzIHVuYSBwaWV6YSBkZSBtdXNlbyB5IG5vIHVuYSBoZXJyYW1pZW50YSBmdW5jaW9uYWwuIgogICAgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---
{{< image "top_cli_based_ai_coding_agents/open_source_cli_agents_hero.webp" "mosaico de agentes de programación CLI de código abierto: OpenCode, Codex, OpenHands, Cline, Pi, Goose, Aider, Continue, Crush" >}}

Los agentes de programación de código abierto tuvieron un primer semestre de 2026 movidísimo, y el segundo ha ido todavía más cargado. La gran noticia es que **DeepSeek lanzó su propio harness el 13 de agosto** y pasó de cero a **~203k estrellas en GitHub en dos semanas**, adelantando por poco a OpenCode en el primer puesto. Google cumplió con la retirada de **Gemini CLI** (104k estrellas) el 18 de junio y la sustituyó por un sucesor de código cerrado. **Pi**, el harness de menos de 1,000 tokens de Armin Ronacher y Mario Zechner, pasó de 54k a **98k estrellas en tres meses**. Y el resto de laboratorios de modelos también dejaron de cederle la terminal a terceros: **xAI liberó el código de Grok Build**, **Z.AI lanzó ZCode** (propietario, y una app de escritorio en lugar de una CLI), y dos harnesses independientes centrados en DeepSeek, **CodeWhale** y **Reasonix**, se colaron por su cuenta en el top diez.

Si quieres un agente de programación con IA que viva en tu terminal, maneje tu shell directamente y se publique bajo una licencia que de verdad puedas leer, este es el panorama. Abajo tienes los agentes de programación CLI de código abierto que merecen tu tiempo en 2026, ordenados por estrellas en GitHub (todas sacadas en directo de la API de GitHub el **29 de agosto de 2026**), con notas honestas sobre licencias, soporte de modelos locales y qué proyectos se están muriendo sin hacer ruido.

### Tabla comparativa de los mejores agentes de programación CLI de código abierto

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Agente CLI</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Estrellas en GitHub</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Licencia</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Modelos locales</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Ideal para</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>OpenCode</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">~202k</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">MIT</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Sí (Ollama)</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">La opción open source por defecto; independiente del proveedor</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>DeepSeek Harness</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">~203k</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">MIT</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Sí (proveedor personalizado)</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Cambiar el propio bucle del agente; interfaz web + headless</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>OpenAI Codex CLI</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">~119k</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Apache-2.0</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Sí (<code>--oss</code>)</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Usuarios de OpenAI que quieren un agente en sandbox</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>Pi</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">~98k</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">MIT</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Sí</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Un harness ligero, modificable y eficiente en tokens</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>OpenHands</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">~85k</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">MIT</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Sí</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Ejecuciones autónomas en sandbox y CI/CD</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>Cline</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">~67k</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Apache-2.0</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Sí</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Un mismo agente en IDE, CLI y SDK</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>Goose</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">~54k</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Apache-2.0</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Sí</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Automatización general basada en MCP (no solo código)</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>Aider</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">~48k</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Apache-2.0</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Sí</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Ediciones nativas de Git, pero sin commits desde mayo de 2026</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>CodeWhale</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">~41k</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">MIT</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Sí (Ollama, vLLM, SGLang)</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">TUI en Rust nacida de DeepSeek-TUI, ahora multiproveedor</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>Continue</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">~36k</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Apache-2.0</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Sí</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Agente open source integrado en la CI como checks de PR</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>Reasonix</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">~35k</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">MIT</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Sí (cualquiera compatible con OpenAI)</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Agente nativo de DeepSeek para ejecuciones largas sin supervisión</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>Crush</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">~28k</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">FSL-1.1-MIT</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Sí</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">La interfaz de terminal más bonita; cambio de modelo a mitad de sesión</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>Qwen Code</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">~27k</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Apache-2.0</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Sí</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Fork abierto de Gemini CLI + modelos de pesos abiertos</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>Kilo Code</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">~27k</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">MIT</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Sí</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">El destino de migración para quienes venían de Roo Code</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>Grok Build</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">~26k</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Apache-2.0</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Sí (<code>base_url</code> personalizada)</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">El harness oficial de xAI; modo plan y subagentes con worktrees</td>
</tr>
</tbody>
</table>

{{% tldr %}}

1. **El líder open source**: <a href="https://github.com/anomalyco/opencode" target="_blank">OpenCode</a> (~202k estrellas, MIT) sigue siendo la alternativa open source de facto a Claude Code: independiente del proveedor, con modelos locales y una TUI pulida.

2. **El recién llegado**: <a href="https://github.com/deepseek-ai/deepseek-harness" target="_blank">DeepSeek Harness</a> (`dsh`, ~203k estrellas, MIT) llegó el **13 de agosto de 2026** y se quedó con el liderato en estrellas en dos semanas. Todo en él es un plugin, incluido el propio bucle del agente. También es una developer preview que promete cambios incompatibles, y está pensado primero para la interfaz web y no como TUI.

3. **Los mejores agentes CLI de código abierto en 2026 (por estrellas en GitHub, 29 de agosto)**:
   - <a href="https://github.com/deepseek-ai/deepseek-harness" target="_blank">DeepSeek Harness</a> (~203k) - totalmente modular, multiproveedor, developer preview
   - <a href="https://github.com/anomalyco/opencode" target="_blank">OpenCode</a> (~202k) - el harness independiente del proveedor por defecto
   - <a href="https://github.com/openai/codex" target="_blank">OpenAI Codex CLI</a> (~119k) - Apache-2.0, afinado para modelos de OpenAI, con sandbox
   - <a href="https://github.com/earendil-works/pi" target="_blank">Pi</a> (~98k) - ligero, eficiente en tokens, modificable; casi ha duplicado sus estrellas desde mayo
   - <a href="https://github.com/OpenHands/OpenHands" target="_blank">OpenHands</a> (~85k) - autónomo, con sandbox, se ejecuta en modo headless en CI
   - <a href="https://github.com/cline/cline" target="_blank">Cline</a> (~67k) - independiente del modelo en IDE, CLI y SDK
   - <a href="https://github.com/aaif-goose/goose" target="_blank">Goose</a> (~54k) - agente MCP generalista, ahora bajo la Linux Foundation
   - <a href="https://github.com/Aider-AI/aider" target="_blank">Aider</a> (~48k) - programación en pareja nativa de Git, pero parado desde mayo
   - <a href="https://github.com/Hmbown/CodeWhale" target="_blank">CodeWhale</a> (~41k) - el harness en Rust que nació como DeepSeek-TUI

4. **Todos los laboratorios de modelos lanzaron su propio harness.** DeepSeek Harness es el grande. <a href="https://github.com/xai-org/grok-build" target="_blank">Grok Build</a> (~26k, Apache-2.0) es el harness oficial en Rust de xAI, liberado en julio. Los usuarios de DeepSeek tienen además dos opciones independientes sólidas en CodeWhale y <a href="https://github.com/esengine/DeepSeek-Reasonix" target="_blank">Reasonix</a> (~35k, MIT). <a href="https://zcode.z.ai/en" target="_blank">ZCode</a> de Z.AI es la excepción: una app de escritorio propietaria con plan de pago, no una CLI open source.

5. **Qué ha cambiado desde mayo**: DeepSeek Harness pasó de no existir a encabezar la clasificación de estrellas; Gemini CLI dejó de dar servicio a usuarios gratuitos, Pro y Ultra el **18 de junio de 2026**; Roo Code (~24k) está archivado; Aider **no tiene commits desde el 22 de mayo de 2026**; Trae Agent de ByteDance lleva parado desde febrero; y claw-code acumula 195k estrellas mientras su propio README dice que es una pieza de museo y no una herramienta funcional.

6. **Cómo elegir**: lee la licencia (no todas las herramientas "gratis" son open source), confirma el soporte de modelos locales si te importa la privacidad y revisa la fecha del último commit para no adoptar algo estancado.

{{% /tldr %}}

### Qué es en realidad un agente de programación CLI de código abierto

Un "harness" de programación es el andamiaje que rodea al modelo: el bucle que lee tus archivos, llama a herramientas, ejecuta comandos de shell y le devuelve los resultados para que pueda dar el siguiente paso. El modelo piensa; el harness conduce. La consecuencia interesante es que harness y modelo se pueden separar, así que un harness open source te permite cambiar GPT-5.6 por Claude Opus 5 o por un Qwen3.8-27B local sin tocar tu flujo de trabajo.

Esa separación es todo el argumento a favor del open source aquí, y hay tres motivos concretos para que te importe:

- **Puedes usar modelos locales.** Los harnesses independientes del proveedor hablan con Ollama, LM Studio, vLLM o cualquier endpoint compatible con OpenAI, así que tu código nunca sale de tu máquina. Es el factor decisivo para equipos con normas de residencia de datos.
- **Ningún proveedor puede apagarlo.** Cuando una CLI cerrada cambia de precio, se retira (mira Gemini CLI más abajo) o bloquea un método de inicio de sesión, te quedas atascado. Un repo MIT o Apache se puede forkear.
- **Puedes leer y cambiar el prompt.** El system prompt, las definiciones de herramientas, el modelo de permisos: todo está en el repo. Si el agente hace algo absurdo, puedes ver por qué y arreglarlo.

La contrapartida es real: la mayoría espera que pongas tu propia API key y que entiendas su modelo de permisos antes de dejar que un modelo ejecute `rm` en tu repo. Nada de eso es difícil, pero no es la experiencia de un clic de un producto de pago.

### Cómo elegir un agente de programación CLI de código abierto

- **Mira la licencia, no el precio.** "Gratis" y "open source" no son lo mismo. DeepSeek Harness, OpenCode, Pi, OpenHands, Kilo Code, CodeWhale y Reasonix son MIT. Aider, Goose, Cline, Continue, Codex, Qwen Code y Grok Build son Apache-2.0. Crush se distribuye bajo FSL (pasa a MIT dos años después de cada versión). Warp es AGPL-3.0. ZCode de Z.AI no es open source en absoluto, por mucho que se presente como "harness". Si quieres integrarlo en tu producto o revenderlo, esa diferencia importa.
- **Decide si necesitas modelos locales.** Si es así, quédate con los harnesses independientes del proveedor: DeepSeek Harness, OpenCode, Pi, Goose, Aider, CodeWhale, Reasonix, Crush o Continue. Las CLI de los fabricantes suelen aceptar una `base_url` personalizada, pero están afinadas para sus propios modelos.
- **Elige la herramienta según el trabajo.** Para ediciones quirúrgicas con Git, Aider. Para ejecuciones autónomas y sin supervisión, OpenHands. Para ejecuciones largas donde el coste en tokens importa, Reasonix. Para automatización general más allá del código, Goose. Para una base modificable sobre la que construir, Pi, o DeepSeek Harness si quieres sustituir el bucle del agente en lugar de envolverlo.
- **Tómale el pulso al proyecto.** Las estrellas muestran popularidad; la fecha del último commit muestra el ritmo. Un proyecto de 40k estrellas sin commits en tres meses es peor apuesta que uno de 5k que publica cada semana. Este año no es una hipótesis: dos proyectos de esta guía están exactamente en esa situación.

### Los mejores agentes de programación CLI de código abierto en 2026

Los once de abajo son el núcleo con más estrellas, ordenados por estrellas en GitHub. Las dos secciones siguientes agrupan las CLI de los fabricantes y las herramientas de nicho más concreto, por eso un par de proyectos con más estrellas aparecen más abajo.

#### 1. OpenCode

{{< image "top_cli_based_ai_coding_agents/opencode_cli.webp" "CLI de OpenCode" >}}

{{< link href="https://opencode.ai" >}}OpenCode{{< /link >}} es el gran fenómeno open source de esta época y el agente de programación con más estrellas en GitHub que la gente usa de verdad. Es una TUI pensada para la terminal con dos agentes integrados (`build` con acceso completo y `plan` de solo lectura), integración con LSP para más de 20 lenguajes y soporte de MCP. Se instala con `curl -fsSL https://opencode.ai/install | bash` o `npm i -g opencode-ai`.

Su gran baza es la neutralidad respecto al proveedor: funciona con OpenAI, Google, OpenRouter, docenas de otros y modelos locales mediante Ollama y cualquier endpoint compatible con OpenAI. Se distribuye por npm, Homebrew, AUR, Nix y más, y la licencia es MIT de verdad.

Dos cosas que conviene saber antes de adoptarlo. Primero, el proyecto se movió de `sst/opencode` a `anomalyco/opencode` (el equipo se rebautizó como Anomaly), así que las referencias antiguas a imágenes de Docker se rompen. Segundo, tras una disputa en enero de 2026, Anthropic obligó a OpenCode a quitar el inicio de sesión con suscripción Claude Pro/Max; todavía puedes usar Claude con una API key normal, y OpenAI ahora colabora con el proyecto, así que las suscripciones de ChatGPT funcionan de forma nativa.

**Puntos fuertes**

- La comunidad open source más grande con diferencia; releases muy frecuentes
- Independiente del proveedor de verdad, incluidos modelos locales
- División de agentes `build` / `plan`, LSP y MCP de serie

**Contras**

- Según algunos usuarios, el autodescubrimiento de Ollama falla en ciertas configuraciones
- Se eliminó el inicio de sesión con suscripción Claude Pro/Max (la API key sigue funcionando)
- Un proyecto enorme y que cambia tan rápido implica muchos issues abiertos

**Repositorio:** `anomalyco/opencode` (antes `sst/opencode`) - ~202k estrellas - MIT

#### 2. DeepSeek Harness

{{< image "top_cli_based_ai_coding_agents/deepseek_harness_cli.webp" "página de inicio de la developer preview de DeepSeek Harness" >}}

{{< link href="https://github.com/deepseek-ai/deepseek-harness" >}}DeepSeek Harness{{< /link >}} (`dsh`) es la mayor noticia de este terreno desde nuestra última actualización, y ni siquiera existía cuando se escribió la versión de mayo de esta guía. DeepSeek lo publicó el **13 de agosto de 2026** bajo licencia **MIT**, y superó las 100k estrellas en GitHub en unos dos días. En el momento de escribir esto tiene **~202.7k estrellas frente a las ~202.3k de OpenCode**, lo que técnicamente lo convierte en el agente de programación con más estrellas de GitHub, por unas 400 estrellas.

Tómate esa clasificación como un cara o cruz y no como un veredicto. La diferencia es inferior al 0.2%, los dos proyectos se intercambian el puesto de un día para otro, y un repo de quince días que vive de la atención del lanzamiento no da la misma señal que la subida sostenida de OpenCode. Por eso aparece aquí en segundo lugar.

La idea de diseño está en su eslogan: **todo es un plugin**. La propia lista de DeepSeek de lo que se puede cambiar o recombinar incluye modelos, herramientas, skills, sesiones, sandboxes, almacenamiento, bucles, planificación y la interfaz; es decir, además de las herramientas, también el bucle del agente y la interfaz. La configuración se organiza en capas mediante parches de bundle, un parche de perfil, un parche a nivel de máquina y overlays desde la línea de comandos. Puedes imprimir la configuración que resuelve realmente tu instalación con `npx @deepseek-ai/dsh web --dump-config`. El sistema de plugins funciona sobre Cordis.

A pesar del nombre, **no es solo para DeepSeek**. El catálogo de proveedores integrado cubre Anthropic, OpenAI, Bedrock, Azure y Vertex, y puedes registrar proveedores personalizados que apunten a endpoints autoalojados o de gateway, que es como se conecta Ollama o vLLM. Por defecto usa `deepseek-v4-pro` y `deepseek-v4-flash`. Lee tanto `AGENTS.md` como `CLAUDE.md`, actúa como cliente MCP, guarda un log de sesión de solo anexado con todo lo que ve el modelo e incluye hooks de compatibilidad que pueden delegar en los binarios de Claude Code y Codex. Hay SDKs de Python y JSON-RPC, además de un servidor ACP.

Una nota honesta sobre su forma: `dsh` está pensado primero para la web, no es una TUI. El comando por defecto `npx @deepseek-ai/dsh web` abre una interfaz local en el navegador en `http://127.0.0.1:3080`, y usarlo solo desde la terminal implica ir por el camino headless, `npx @deepseek-ai/dsh --profile headless "fix the failing tests"`. Si lo que buscas es una interfaz de terminal a pantalla completa como Crush o Grok Build, esto no es eso. La otra advertencia aparece bien clara en el propio README de DeepSeek: es una **developer preview** y **habrá** cambios que rompan la compatibilidad. Fija tu versión.

**Puntos fuertes**

- Modular de verdad: cambia el bucle del agente, el sandbox o el registro de herramientas sin hacer un fork
- Multiproveedor de serie, incluidos endpoints personalizados y autoalojados
- Lee `AGENTS.md` / `CLAUDE.md`, es cliente MCP y puede delegar en Claude Code o Codex
- El log de sesión de solo anexado hace que las ejecuciones sean auditables

**Contras**

- Primero la interfaz web; headless es el camino para la terminal y no hay una TUI de verdad
- Developer preview con cambios incompatibles prometidos de forma explícita
- Tiene dos semanas, así que el ecosistema y la documentación aún se quedan cortos al lado de OpenCode

**Repositorio:** `deepseek-ai/deepseek-harness` - ~202.7k estrellas - MIT

#### 3. OpenAI Codex CLI

{{< image "top_cli_based_ai_coding_agents/codex_cli.webp" "CLI de OpenAI Codex" >}}

{{< link href="https://github.com/openai/codex" >}}Codex CLI{{< /link >}} merece estar aquí precisamente porque la gente olvida que es open source: es Apache-2.0, está reescrito en Rust y el repo es `openai/codex`. Se instala con `npm i -g @openai/codex` o `brew install --cask codex`. Sumó unas 34k estrellas en tres meses, la mayor subida absoluta de toda la lista salvo OpenCode.

Lo que lo diferencia es el sandboxing: los comandos de shell se ejecutan por defecto en un entorno en contenedor y no pueden tocar el resto de tu máquina sin aprobación explícita o `--full-auto`. Eso lo convierte en el más seguro de los grandes agentes para dejarlo trabajando en un repo sin supervisión. Y aunque está claramente construido en torno a los modelos de OpenAI, no está atado a ellos: la opción `--oss` lo ejecuta contra un modelo local de Ollama (`gpt-oss:20b` por defecto), y puedes configurar cualquier endpoint compatible con OpenAI en `config.toml`.

**Puntos fuertes**

- Shell en sandbox por defecto; seguro para ejecuciones sin supervisión
- Open source de verdad (Apache-2.0), modelos OSS locales con `--oss`
- Subagentes nativos e integración estrecha con ChatGPT para pasar tareas a la nube

**Contras**

- Afinado para modelos de OpenAI; los modelos locales y otros proveedores son claramente el plan B
- El sandbox añade algo de latencia en trabajos con muchos archivos
- Ecosistema de skills y plugins más pequeño que el de OpenCode

**Repositorio:** `openai/codex` - ~119k estrellas - Apache-2.0

#### 4. Pi

{{< image "top_cli_based_ai_coding_agents/pi_cli.webp" "repositorio de GitHub del agente de programación Pi" >}}

{{< link href="https://github.com/earendil-works/pi" >}}Pi{{< /link >}} es el que más ha crecido de esta guía: 54k estrellas en mayo, **~98k en agosto**. Es un harness de programación minimalista para la terminal de Mario Zechner y Armin Ronacher (sí, el autor de Flask y Jinja2), y su truco estrella es un system prompt de menos de 1,000 tokens, frente a los 7,000 a 10,000 aproximados de Cline, OpenCode y Claude Code. Lo consigue con "lazy skills": cada capacidad deja solo una descripción de una línea en el contexto, y las instrucciones completas y los esquemas de herramientas se cargan únicamente cuando se invoca la skill.

Su propuesta no es "el que más funciones tiene", sino "el harness más pequeño y claro que puedes adaptar sin hacer un fork de sus entrañas". Incluye una CLI de agente de programación, una API unificada para LLMs, librerías de TUI e interfaz web y soporte de MCP, todo con licencia MIT y en TypeScript. Está en npm como `@mariozechner/pi-coding-agent`. Si quieres entender exactamente qué envía tu agente al modelo, o construir tu propia herramienta sobre una base limpia, este es el que tienes qeu leer.

**Puntos fuertes**

- System prompt de menos de 1K tokens gracias a las lazy skills; turnos más baratos y rápidos
- Pequeño, legible y pensado para adaptarse e integrarse
- API unificada para LLMs más librerías de TUI y web en un solo kit

**Contras**

- Más joven y menos curtido que OpenCode o Aider
- El minimalismo implica menos funciones incluidas de serie
- Hay varios forks y mirrors casi idénticos; empieza desde el repo canónico

**Repositorio:** `earendil-works/pi` (antes `badlogic/pi-mono`) - ~98k estrellas - MIT

#### 5. OpenHands

{{< image "top_cli_based_ai_coding_agents/openhands_cli.webp" "OpenHands - construye con agentes de programación" >}}

{{< link href="https://github.com/OpenHands/OpenHands" >}}OpenHands{{< /link >}} (antes OpenDevin) es la opción más autónoma de la lista. Ejecuta el agente dentro de un runtime en sandbox que puede navegar por la web, ejecutar código y editar archivos de principio a fin, y es el que mejor resuelve el modo headless: `openhands -t "fix the failing tests"` para tareas puntuales, `--headless` para CI/CD y `--resume` para retomar una conversación. Se reconstruyó sobre un nuevo Software Agent SDK para la versión 1.0 en 2026.

Por debajo usa LiteLLM, así que más de 100 proveedores funcionan sin cambiar código, incluidos Ollama, llama.cpp, vLLM y MLX en local. La instalación necesita Python 3.12 y `uv`: `uvx openhands` o `pip install openhands`.

**Puntos fuertes**

- Ejecuciones de varios pasos autónomas de verdad y en sandbox
- Modo headless real para pipelines de CI/CD
- Más de 100 proveedores mediante LiteLLM, incluidos modelos locales

**Contras**

- La instalación exige Python 3.12 sin margen
- Con modelos locales de pesos abiertos, los resultados en la práctica son irregulares
- Más piezas móviles que un agente sencillo de editar y hacer commit

**Repositorio:** `OpenHands/OpenHands` (antes `All-Hands-AI/OpenHands`) - ~85k estrellas - MIT (núcleo)

#### 6. Cline

{{< image "top_cli_based_ai_coding_agents/cline_cli.webp" "repositorio de GitHub de Cline" >}}

{{< link href="https://github.com/cline/cline" >}}Cline{{< /link >}} empezó como la extensión de VS Code de la que luego salieron los forks Roo Code y Kilo Code, y en la línea 3.x ganó una CLI independiente de verdad y un SDK. El repo ahora se presenta como "un agente de programación autónomo en forma de SDK, extensión de IDE o asistente CLI". Se instala con `npm i -g cline`; trae binarios precompilados para cada plataforma, así que no necesitas un runtime aparte.

Es independiente del modelo por diseño (más de 30 proveedores en 2026, además de modelos locales con Ollama y LM Studio), y las novedades de 2026 apuntan a equipos: ejecución de agentes en paralelo con tableros Kanban de tareas, e integraciones con Slack y Linear. La pega es que la CLI es más reciente que la extensión, que lleva años en circulación, así que como herramienta puramente de terminal está menos probada que la CLI de OpenHands.

**Puntos fuertes**

- Un único agente independiente del modelo en IDE, CLI y SDK
- Agentes en paralelo con tableros Kanban de tareas
- Binarios precompilados, sin malabares con runtimes

**Contras**

- La CLI independiente es relativamente nueva
- No incluye un nivel gratuito de modelos sin una cuenta o tu propia key

**Repositorio:** `cline/cline` - ~67k estrellas - Apache-2.0

#### 7. Goose

{{< image "top_cli_based_ai_coding_agents/goose_cli.webp" "CLI de Goose" >}}

{{< link href="https://github.com/aaif-goose/goose" >}}Goose{{< /link >}} es un agente de propósito general, no estrictamente una herramienta de programación, y eso es a la vez su punto fuerte y su advertencia. Está hecho en Rust, con una CLI de un solo binario y una app de escritorio, se ocupa de tareas de investigación, automatización y datos además de código, y se apoya mucho en MCP con más de 70 extensiones. Soporta más de 15 proveedores, incluido Ollama en local.

Lo importante de 2026 es la gobernanza: Block donó Goose a la nueva Agentic AI Foundation de la Linux Foundation en abril, así que ahora es neutral respecto a fabricantes y lo gobierna una fundación (y el repo pasó de `block/goose` a `aaif-goose/goose`). Se instala con el script de goose-docs.ai.

**Puntos fuertes**

- Agente generalista: código, investigación, automatización, pegamento entre sistemas
- Más de 70 extensiones MCP; un solo binario en Rust
- Gobernado por una fundación, neutral respecto a fabricantes

**Contras**

- Un alcance más amplio implica menos especialización en programación que Aider o Crush
- El cambio de organización dejó un rastro de enlaces obsoletos a `block/goose`

**Repositorio:** `aaif-goose/goose` (antes `block/goose`) - ~54k estrellas - Apache-2.0

#### 8. Aider

{{< image "top_cli_based_ai_coding_agents/aider_cli.webp" "CLI de Aider" >}}

{{< link href="https://aider.chat" >}}Aider{{< /link >}} es la "programación en pareja con IA en tu terminal" original, y sigue siendo el mejor en una cosa concreta: la edición disciplinada y nativa de Git. Construye un repomap con tree-sitter para dar contexto en más de 100 lenguajes, aplica ediciones coordinadas en varios archivos y hace commit automático de cada cambio con un mensaje razonable, así que tu historial queda limpio y reversible. Se instala con `pipx install aider-chat`.

**La nota sobre su ritmo ha empeorado desde nuestra última actualización.** En mayo avisamos de que Aider no publicaba una release etiquetada desde agosto de 2025, aunque seguía recibiendo commits en la rama por defecto. A 28 de agosto de 2026, el último push al repo fue el **22 de mayo de 2026**: algo más de tres meses de silencio, en un proyecto que depende en gran medida de un solo mantenedor. La herramienta sigue funcionando y el número de estrellas sigue subiendo, pero si hoy estás eligiendo un harness para estandarizarlo en un equipo, ese hueco pesa. Sus sustitutos más cercanos para el flujo nativo de Git son Reasonix o CodeWhale, que publican cada semana.

**Puntos fuertes**

- Repomap con tree-sitter; excelente en bases de código grandes ya existentes
- Nativo de Git: commits automáticos, diff y deshacer fáciles
- Funciona con Claude, GPT, DeepSeek y modelos locales

**Contras**

- Sin commits desde el 22 de mayo de 2026 y sin release etiquetada desde agosto de 2025
- Depende en gran medida de un solo mantenedor

**Repositorio:** `Aider-AI/aider` - ~48k estrellas - Apache-2.0

#### 9. CodeWhale

{{< image "top_cli_based_ai_coding_agents/codewhale_cli.webp" "página de inicio de la CLI de CodeWhale" >}}

{{< link href="https://github.com/Hmbown/CodeWhale" >}}CodeWhale{{< /link >}} es el proyecto más interesante del que probablemente no hayas oído hablar: **~41k estrellas**, MIT, escrito en Rust y con commits a diario. Empezó en enero de 2026 como **DeepSeek-TUI**, un harness construido específicamente en torno a flujos de trabajo con DeepSeek, y reunió una gran base de colaboradores en China. A medida que llegó el soporte multiproveedor, el mantenedor Hunter Bown renombró el proyecto para que encajara con lo que se había convertido: los binarios pasaron de `deepseek` y `deepseek-tui` a `codewhale` y `codewhale-tui`, aunque sigue leyendo el formato antiguo de configuración y de sesiones.

Ahora soporta más de 30 proveedores, y su diseño trata los modelos de pesos abiertos servidos con Ollama, vLLM o SGLang como ciudadanos de primera y no como plan de respaldo, algo poco habitual: la mayoría de harnesses añaden el soporte local a posteriori sobre un diseño pensado para la nube. Se instala con `npm install -g codewhale` y se ejecuta con `codewhale`.

En funciones se parece más a Codex que a Aider: tres modos de aprobación (Ask, Auto-Review, Full Access) más un modo de planificación de solo lectura, sandboxing opcional a nivel de sistema operativo, snapshots del espacio de trabajo con deshacer/restaurar, persistencia de sesiones, servidores MCP, skills y autocompletado de shell para bash, zsh, fish, PowerShell y Elvish.

**Puntos fuertes**

- Local primero por diseño; Ollama, vLLM y SGLang son de primera clase
- Un solo binario en Rust con una TUI realmente buena
- Los snapshots con deshacer y los tres modos de aprobación hacen que sea seguro darle rienda suelta

**Contras**

- El cambio de nombre deja un rastro de enlaces y forks obsoletos de `DeepSeek-TUI`
- Más joven que Aider u OpenCode, con menos issues en inglés
- La documentación y las discusiones de la comunidad son muy bilingües

**Repositorio:** `Hmbown/CodeWhale` (antes `DeepSeek-TUI`) - ~41k estrellas - MIT

#### 10. Continue

{{< image "top_cli_based_ai_coding_agents/continue_cli.webp" "Continue - control de calidad para tu fábrica de software" >}}

{{< link href="https://github.com/continuedev/continue" >}}Continue{{< /link >}} incluye un agente de terminal open source llamado `cn` (instala `npm i -g @continuedev/cli` y ejecuta `cn`), el mismo motor que mueve sus extensiones para IDE. Funciona como TUI o totalmente en headless (`cn -p "prompt"`) para scripts y git hooks, con un archivo de política de permisos en `~/.continue/permissions.yaml` y soporte de primera para Ollama, con autodetección incluida.

Lo que cambia es su posicionamiento en 2026: Continue giró hacia la "Continuous AI", que ejecuta agentes en cada pull request como checks de estado de CI obligatorios, definidos en markdown dentro de `.continue/checks/`. El agente interactivo de terminal sigue existiendo, pero el centro de gravedad del proyecto ahora es la CI. Ojo con los nombres: el comando es `cn`, el paquete es `@continuedev/cli`, y también existe un paquete de motor aparte llamado `@continuedev/cn`, así que no los confundas.

**Puntos fuertes**

- CLI `cn` más un flujo poco habitual de checks en CI
- Buen soporte de modelos locales y de autocompletado
- Configuración de modelo por rol (chat, edición, embeddings, etc.)

**Contras**

- El foco principal pasó a la CI; el agente de terminal ya no es lo que venden
- Los nombres de paquetes y comandos son realmente confusos

**Repositorio:** `continuedev/continue` - ~36k estrellas - Apache-2.0

#### 11. Reasonix

{{< image "top_cli_based_ai_coding_agents/reasonix_cli.webp" "página de inicio de la CLI de Reasonix" >}}

{{< link href="https://github.com/esengine/DeepSeek-Reasonix" >}}Reasonix{{< /link >}} es el otro agente nacido de DeepSeek que se coló en el top diez, con **~35k estrellas** desde abril de 2026. Es un único binario en Go, con licencia MIT, y su eslogan resume todo el planteamiento de diseño: "un agente de programación que puedes dejar funcionando".

El enfoque de ingeniería es poco habitual y vale la pena entenderlo, porque es lo único de esta lista que apunta directamente al coste. Reasonix está construido en torno a la **estabilidad de la caché de prefijo**: al arrancar inyecta un resumen del entorno pequeño y estable, poda las salidas de herramientas obsoletas antes de la compactación y no después, y documenta los esquemas de sus herramientas integradas para que el resumen no los reescriba sin avisar. La recompensa es que las sesiones largas siguen acertando en la caché de prefijo del proveedor en lugar de volver a pagar el precio completo de entrada en cada turno, que es justo donde las ejecuciones de agentes de varias horas suelen desangrar dinero. La propia API de DeepSeek cobra aproximadamente una décima parte en un acierto de caché, así que no es una cifra sin importancia.

A pesar del nombre del repo, no es solo para DeepSeek. Los proveedores, herramientas y plugins se declaran en un `reasonix.toml`, habla con cualquier endpoint compatible con OpenAI y puede ejecutar una pareja ejecutor/planificador como modelos separados en sesiones separadas. También soporta servidores MCP, un Extension Protocol v1, modo plan, sandboxing del espacio de trabajo y checkpoints por turno, y se puede manejar desde la terminal, una app de escritorio, el navegador o un editor mediante ACP. Se instala con `npm i -g reasonix` o `brew install esengine/reasonix/reasonix`.

**Puntos fuertes**

- Gestión del contexto pensada para la caché de prefijo; la opción más barata para ejecuciones largas sin supervisión
- Un solo binario en Go, trivial de dejar en una máquina de build
- Proveedores definidos por configuración y modelos ejecutor/planificador separados

**Contras**

- El nombre del repo sigue diciendo DeepSeek, lo que hace que su soporte de proveedores parezca menor de lo que es
- Más nuevo y peor documentado que los primeros de esta lista
- Optimizado para ejecuciones largas, así que es más pesado de lo necesario para ediciones rápidas puntuales

**Repositorio:** `esengine/DeepSeek-Reasonix` - ~35k estrellas - MIT

### Las CLI de los laboratorios de modelos

El otro gran cambio desde mayo es que los fabricantes de modelos dejaron de cederle la terminal a terceros. La entrada de DeepSeek es lo bastante grande como para tener su propio puesto en el #2 de arriba; el resto están aquí. Las dos primeras son open source y están afinadas ante todo para sus propios modelos. La tercera es la que sirve de advertencia.

{{< image "top_cli_based_ai_coding_agents/qwen.webp" "CLI de Qwen Code" >}}

**{{< link href="https://github.com/QwenLM/qwen-code" >}}Qwen Code{{< /link >}}** (~27k estrellas, Apache-2.0) - el agente de terminal de Alibaba, un fork de Gemini CLI de Google afinado para los modelos Qwen-Coder. Ahora que la retirada de Gemini CLI se ha completado, es en la práctica el fork abierto de ese código que sigue vivo, y combina bien con los modelos de pesos abiertos de la propia Alibaba. Instálalo con `npm i -g @qwen-code/qwen-code@latest`.

{{< image "top_cli_based_ai_coding_agents/grokbuild_cli.webp" "página del anuncio de Grok Build" >}}

**{{< link href="https://github.com/xai-org/grok-build" >}}Grok Build{{< /link >}}** (~26k estrellas, Apache-2.0) - el agente de programación oficial de xAI, y la entrada por la que más gente ha preguntado este año. Se lanzó como beta cerrada el 25 de mayo de 2026 para suscriptores de SuperGrok y X Premium Plus, se **liberó bajo Apache-2.0 a mediados de julio** y llegó a la v1.0 el **7 de agosto de 2026**. Es una TUI en Rust, a pantalla completa y con soporte de ratón, y la versión liberada incluye el harness completo: el bucle del agente, la capa de herramientas, la TUI y el sistema de extensiones para skills, plugins, hooks y servidores MCP.

Las funciones que conviene conocer son el modo plan (revisas la tarea antes de que se ejecute), subagentes en paralelo con soporte de git worktree, modo headless con `-p` para scripts y CI, y ACP para manejarlo desde un editor. Se instala con `curl -fsSL https://x.ai/cli/install.sh | bash` en macOS/Linux o `irm https://x.ai/cli/install.ps1 | iex` en Windows.

Sobre la cuestión de quedarte atado al proveedor: por defecto se autentica a través del navegador, pero también acepta una `XAI_API_KEY` normal, y puedes añadir cualquier modelo personalizado en `~/.grok/config.toml` con tu propia `base_url` y `env_key`. Así que, a pesar de que en el lanzamiento se presentó como algo para suscriptores, se puede usar contra Ollama o cualquier endpoint compatible con OpenAI. Por defecto usa Grok 4.6.

**{{< link href="https://zcode.z.ai/en" >}}ZCode{{< /link >}}** (Z.AI) - aparece porque la gente no deja de preguntar dónde encaja, y la respuesta es que no encaja en esta lista. ZCode es el harness oficial de Z.AI para GLM-5.3, con GLM-5.3-Flash para el trabajo multimodal como entender capturas de pantalla, además de "Goals" de larga duración, colaboración entre varios agentes, más de 20 herramientas de agente y control remoto por WeChat, Feishu o Telegram. Es realmente capaz. También es **una aplicación de escritorio y no una CLI, y no es open source**: el código del harness nunca se ha publicado, solo el repo de marketplace `zai-org/zcode-plugins` con licencia Apache-2.0, y para usarlo necesitas un GLM Coding Plan de pago (Lite $12.60/mes, Pro $56/mes, Max $117.60/mes).

Ten cuidado con lo que lees sobre él. Varios artículos describen ZCode como "el harness de agente de programación open source" porque el *modelo* que maneja, GLM-5.3, se publica con pesos abiertos bajo MIT. El harness no es el modelo. Si quieres ZCode en una terminal, lo más parecido es el no oficial {{< link href="https://github.com/kingsword09/zcode-cli" >}}zcode-cli{{< /link >}}, que extrae el runtime de ZCode Desktop y lo envuelve en una TUI construida sobre `pi-tui` de Pi: ingenioso, pero es un envoltorio de la comunidad sobre un binario propietario, no un producto con soporte.

**Sobre los otros laboratorios:** Moonshot (Kimi Code) y Mistral (Vibe) tambien publican sus propias CLI open source, ambas con muchas menos estrellas que cualquiera de las anteriores; mira sus repos directamente si usas esos modelos. Y fíjate en que DeepSeek tiene ahora tres opciones en esta guía (el Harness oficial en el #2, más CodeWhale y Reasonix, creados por la comunidad), que es más herramienta de terminal de primera de lo que ofrece ahora mismo cualquier otro fabricante de modelos.

### Menciones honoríficas

Cada uno de estos domina un nicho más concreto que merece la pena conocer:

**{{< link href="https://github.com/charmbracelet/crush" >}}Crush{{< /link >}}** (~28k estrellas, FSL) - la preciosa TUI en Go de Charm, del equipo detrás de Bubble Tea. Multimodelo con cambio a mitad de sesión, soporte de LSP y MCP. La elección si te importan la estética y la agilidad de la terminal. Ojo: la licencia es FSL, no MIT (pasa a MIT al cabo de dos años), y todavía no ha llegado a la 1.0. Instálalo con `brew install charmbracelet/tap/crush`.

{{< image "top_cli_based_ai_coding_agents/crush_cli.webp" "CLI de Crush" >}}

**{{< link href="https://github.com/Kilo-Org/kilocode" >}}Kilo Code{{< /link >}}** (~27k estrellas, MIT) - un fork de Roo Code (que a su vez era un fork de Cline) cuya CLI está construida sobre OpenCode. Ha ganado unas 7k estrellas desde mayo, en buena parte absorbiendo a los usuarios del archivado Roo Code, y es el principal destino de migración recomendado para quienes venían de Roo. Muy derivado, pero pulido y activo. Instálalo con `npm i -g @kilocode/cli`.

{{< image "top_cli_based_ai_coding_agents/kilo_cli.webp" "CLI de Kilo Code" >}}

**{{< link href="https://github.com/bytedance/trae-agent" >}}Trae Agent{{< /link >}}** (~12k estrellas, MIT) - el agente en Python de ByteDance, pensado para investigación y para tareas generales de ingeniería de software. Inclúyelo en tu evaluación solo sabiendo lo que hay: el último push fue el **5 de febrero de 2026**, así que lleva unos siete meses parado.

{{< image "top_cli_based_ai_coding_agents/trae_agent_cli.webp" "repositorio de GitHub de Trae Agent" >}}

**{{< link href="https://github.com/plandex-ai/plandex" >}}Plandex{{< /link >}}** (~16k estrellas, MIT) - pensado para tareas muy grandes y de varios pasos, con hasta 2M tokens de contexto y un sandbox para revisar diffs. Advertencia: el repo no tiene commits desde octubre de 2025 y Plandex Cloud está cerrando, así que considéralo abandonado en la práctica y autoalójalo si llegas a usarlo.

{{< image "top_cli_based_ai_coding_agents/plandex_cli.webp" "CLI de Plandex" >}}

### Cambios destacados de 2026 (y qué evitar)

El terreno open source se reorganizó a fondo este año. Antes de comprometerte con uno, conviene seguir unas cuantas historias:

- **DeepSeek se llevó la corona de estrellas en dos semanas.** DeepSeek Harness se hizo público el **13 de agosto de 2026** y superó las 100k estrellas en unos dos días, llegando a ~203k a final de mes y asomando por delante de OpenCode. Dos advertencias que conviene tener presentes junto a esa cifra: la etiqueta de la versión actual es `0.1.2-alpha.1` y el README promete cambios incompatibles, así que hay una alfa en lo más alto de una clasificación de popularidad. La velocidad de estrellas en el lanzamiento y la adopción sostenida no miden lo mismo.
- **Z.AI lanzó un harness que no es open source.** ZCode es una app de escritorio propietaria con un GLM Coding Plan de pago, a pesar de que mucha prensa lo llame open source porque los pesos de GLM-5.3 son MIT. Solo está publicado el repo de su marketplace de plugins. Es un buen ejemplo de por qué revisar la licencia, como se dice al principio de esta guía, es el primer paso y no un trámite.
- **Gemini CLI ha desaparecido para la mayoría de usuarios, y el corte fue limpio.** Google anunció la consolidación en la I/O del 19 de mayo y desconectó el servicio el **18 de junio de 2026**: el comando `gemini` dejó de funcionar para cuentas gratuitas, Pro y Ultra sin periodo de gracia, y rompió pipelines de CI esa misma mañana. El sustituto, **Antigravity CLI** (binario `agy`), está escrito en Go, es de código cerrado y pasó de las 1,000 peticiones/día de Gemini CLI a un límite semanal basado en cómputo. Las organizaciones con Gemini Code Assist Standard o Enterprise, o con API keys de pago de Gemini, mantuvieron el acceso, y por eso `google-gemini/gemini-cli` sigue mostrando commits. Si quieres que la experiencia de Gemini CLI siga siendo abierta, Qwen Code es el fork vivo.
- **Un repo de 195k estrellas que no es un agente de programación.** {{< link href="https://github.com/ultraworkers/claw-code" >}}claw-code{{< /link >}} superó las 100k estrellas más rápido que ningún otro proyecto en la historia de GitHub y ahora ronda las **195k**, lo que lo colocaría tercero en toda esta guía. Lee su README antes de instalarlo: el proyecto se describe a sí mismo como "más cerca de una pieza de museo que de una presentación de producto", dice que lo mantienen agentes sin intervención humana y te pide explícitamente que uses otra cosa si quieres sacar trabajo adelante. Es un artefacto fascinante y un buen recordatorio de que el número de estrellas mide atención, no utilidad.
- **Aider se quedó en silencio.** Sin commits desde el **22 de mayo de 2026**. Sigue siendo el mejor modelo de edición nativa de Git del sector, pero planifica contando con el riesgo.
- **Roo Code está archivado.** La extensión de VS Code (~24k estrellas) publicó su última versión el **15 de mayo de 2026** y el repo es de solo lectura. El equipo giró hacia un producto en la nube, "Roomote". No empieces trabajo nuevo con él; migra a Kilo Code o Cline.
- **xAI liberó su harness.** Grok Build pasó de beta cerrada en mayo a Apache-2.0 en julio y a la v1.0 el 7 de agosto. Es la primera vez que un gran laboratorio estadounidense libera un harness de agente completo, con la TUI y el sistema de extensiones incluidos, y eso mete presión de verdad a Anthropic y Google para que expliquen por qué los suyos son cerrados.
- **OpenCode quitó el inicio de sesión con suscripción de Claude.** Tras la medida de Anthropic en enero de 2026, OpenCode eliminó el OAuth de Claude Pro/Max. Claude sigue funcionando con una API key normal, y OpenAI ahora colabora con el proyecto.
- **Goose se unió a la Linux Foundation.** Bueno en conjunto para la neutralidad, pero cuenta con encontrarte enlaces obsoletos a `block/goose` durante un tiempo.
- **Warp liberó su cliente.** Warp (~65k estrellas) publicó su cliente bajo AGPL-3.0 (los crates de la interfaz son MIT) en abril de 2026. Es una terminal agéntica completa más que un agente CLI, y la AGPL es más restrictiva que las licencias Apache/MIT que usan la mayoría de herramientas de esta lista, así que tenlo en cuenta antes de construir sobre ella.

### Cómo sacar el máximo partido a un agente de programación CLI

Unos cuantos hábitos que compensan con cualquiera de ellos al cabo de un par de semanas:

- **Usa tu propia key y fija un modelo.** La mayoría son gratis; solo pagas el uso de la API. Empieza con un modelo bueno en lugar de dejar que decida el enrutado automático, y luego ajusta.
- **Lee el modelo de permisos antes de dejarlo trabajar.** Codex mete la shell en un sandbox por defecto; OpenHands tiene modos de aprobación; CodeWhale tiene tres, además de snapshots a los que puedes volver; Aider se queda en su carril de editar y hacer commit; otros confían más en el modelo. Ten claro cuál estás usando antes de apuntarlo a código de producción.
- **Primero la rama, luego el agente.** Ejecuta `git checkout -b agent/<task>` antes de cualquier edición larga para poder hacer `git diff main...` después. Aider ya hace un commit por cambio por ti.
- **Limita el contexto.** Acota el agente a archivos o directorios concretos; un contexto más pequeño es más barato y suele dar mejores resultados. Recurre a Plandex solo cuando de verdad necesites más de 1M tokens.
- **Cuida la caché de prefijo en ejecuciones largas.** Si dejas un agente trabajando durante horas, la mayor parte de tu factura son tokens de entrada reenviados. Los harnesses que mantienen estable el prefijo del prompt (Reasonix está hecho explícitamente para esto) pueden reducirlo muchísimo, ya que los proveedores cobran aproximadamente una décima parte en un acierto de caché.
- **Integra tests y linters.** La forma más rápida de validar los cambios de la IA es una batería de tests que el agente ejecute después de cada edición. Deja que itere hasta que pasen en lugar de revisar diffs a ojo.
- **Usa MCP para las integraciones.** Antes de escribir tu propio código de pegamento para llegar a GitHub, Linear o tu base de datos, busca un servidor MCP. La mayoría de estas herramientas ya soportan MCP de primera.

### Conclusión

Para la mayoría, **OpenCode** sigue siendo la opción por defecto con menos riesgo. **DeepSeek Harness** tiene las estrellas y la arquitectura más interesante, pero es una alfa de dos semanas y hay que tratarla como tal. Quédate con **Pi** si quieres algo ligero sobre lo que construir, **OpenHands** para ejecuciones de CI sin supervisión, y **CodeWhale** o **Reasonix** si usas DeepSeek y quieres una TUI de verdad hoy. Elijas lo que elijas, revisa primero la licencia y la fecha del último commit: los tres meses de silencio de Aider, el archivado de Roo Code, el cierre de Gemini CLI, ZCode vendido como open source cuando solo lo es su modelo, y un repo de 195k estrellas que te dice que no lo uses son recordatorios de que las estrellas no significan que un proyecto esté vivo, ni siquiera que sea abierto. Quédate en el open source y siempre podrás hacer un fork o cambiar el modelo de debajo.
