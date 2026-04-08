---
title: "Build an AI Job Search Agent with Langflow, Docker, and Discord"
description: "Learn how to build a self-hosted AI job search agent in Langflow that parses your resume, matches jobs from multiple sources, and sends real-time Discord alerts."
date: 2026-04-07T18:30:00+05:30
draft: false
tags: ["Langflow", "AI Agent", "Job Search Automation", "Discord Webhook", "Docker", "Pinggy"]
og_image: "images/ai_job_search_agent_langflow/ai_job_search_agent_langflow_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiQnVpbGQgYW4gQUkgSm9iIFNlYXJjaCBBZ2VudCB3aXRoIExhbmdmbG93LCBEb2NrZXIsIGFuZCBEaXNjb3JkIiwKICAiZGVzY3JpcHRpb24iOiAiU3RlcC1ieS1zdGVwIHdvcmtmbG93IHRvIHNlbGYtaG9zdCBhIExhbmdmbG93IGpvYiBzZWFyY2ggYWdlbnQgdGhhdCBwYXJzZXMgYSByZXN1bWUsIGZldGNoZXMgam9icyBmcm9tIG11bHRpcGxlIHNvdXJjZXMsIG1hdGNoZXMgcmVsZXZhbmNlIHdpdGggYW4gTExNLCBhbmQgc2VuZHMgYWxlcnRzIHRvIERpc2NvcmQuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL2FpX2pvYl9zZWFyY2hfYWdlbnRfbGFuZ2Zsb3cvYWlfam9iX3NlYXJjaF9hZ2VudF9sYW5nZmxvd19iYW5uZXIud2VicCIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJSdW4gTGFuZ2Zsb3cgbG9jYWxseSIsCiAgICAgICJ0ZXh0IjogIlN0YXJ0IExhbmdmbG93IHdpdGggRG9ja2VyIGFuZCBvcGVuIHRoZSBlZGl0b3Igb24gbG9jYWxob3N0Ojc4NjAuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlBhcnNlIHJlc3VtZSBpbnRvIHN0cnVjdHVyZWQgcHJvZmlsZSIsCiAgICAgICJ0ZXh0IjogIlVzZSBhIGZpbGUgaW5wdXQgYW5kIHByb21wdCB0ZW1wbGF0ZSB0byBleHRyYWN0IHNraWxscywgcm9sZSBwcmVmZXJlbmNlcywgYW5kIGV4cGVyaWVuY2UgZnJvbSByZXN1bWUgdGV4dCBpbiBKU09OIGZvcm1hdC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiRmV0Y2ggYW5kIG1lcmdlIGpvYnMiLAogICAgICAidGV4dCI6ICJDb2xsZWN0IGpvYiBsaXN0aW5ncyBmcm9tIG11bHRpcGxlIHB1YmxpYyBzb3VyY2VzIGFuZCBjb21iaW5lIHRoZW0gaW50byBvbmUgY29udGV4dCBwYXlsb2FkLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJNYXRjaCBqb2JzIHdpdGggTExNIiwKICAgICAgInRleHQiOiAiQ29tcGFyZSBjYW5kaWRhdGUgcHJvZmlsZSBhbmQgam9iIGRlc2NyaXB0aW9ucywgdGhlbiByZXR1cm4gb25seSByZWxldmFudCBvcHBvcnR1bml0aWVzIHdpdGggYXBwbGljYXRpb24gbGlua3MuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlNlbmQgYWxlcnRzIHRvIERpc2NvcmQiLAogICAgICAidGV4dCI6ICJGb3JtYXQgc2VsZWN0ZWQgam9icyBhbmQgcG9zdCB0aGVtIHRvIGEgRGlzY29yZCBjaGFubmVsIHRocm91Z2ggYSB3ZWJob29rLWJhc2VkIGN1c3RvbSBjb21wb25lbnQuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkV4cG9zZSB3b3JrZmxvdyByZW1vdGVseSIsCiAgICAgICJ0ZXh0IjogIkNyZWF0ZSBhIHNlY3VyZSB0dW5uZWwgdG8geW91ciBsb2NhbCBMYW5nZmxvdyBpbnN0YW5jZSB1c2luZyBQaW5nZ3kgZm9yIHJlbW90ZSBhY2Nlc3MgYW5kIHRlc3RpbmcuIgogICAgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "ai_job_search_agent_langflow/ai_job_search_agent_langflow_banner.webp" "Build an AI Job Search Agent with Langflow, Docker, and Discord" >}}

If you are applying to roles actively, the slowest part is usually not writing applications. It is searching, filtering, and checking job boards repeatedly. This flow solves that with a self-hosted AI agent: your resume is parsed once, jobs are collected from multiple sources, and only relevant openings are sent to Discord in real time.

This rewrite uses a cleaner production-style structure so you can build quickly and still keep the system maintainable. The architecture is modular, so each block can be replaced independently, and everything can run locally with Docker.

{{% tldr %}}

1. Build a local AI job search pipeline in Langflow: resume parsing, job aggregation, AI matching, and Discord delivery.
2. Run Langflow via Docker, then expose it remotely with Pinggy when you need mobile or shared access.
3. Keep Discord alerts compact and machine-generated to avoid noisy notifications.
4. Reuse the same architecture for content workflows using tools like <a href="https://www.copy.ai/agents" target="_blank">Copy.ai Content Agents</a>, <a href="https://www.jasper.ai/features/ai-assisted-content" target="_blank">Jasper</a>, <a href="https://surferseo.com/content-editor/" target="_blank">Surfer Content Editor</a>, <a href="https://www.frase.io/" target="_blank">Frase</a>, and <a href="https://www.notion.com/ai" target="_blank">Notion AI</a>.

**Notebook**: <a href="https://github.com/Bidisha314/Langflow-Job_search_agent/blob/main/Job_Search_Agent_in_Langflow.ipynb" target="_blank">Job_Search_Agent_in_Langflow.ipynb</a>
{{% /tldr %}}

## Why This Workflow Works

Most job automation demos fail because they do only one of two things: either they scrape jobs without profile understanding, or they parse resumes without reliable delivery. This Langflow pipeline combines both and keeps output channel-first. Instead of giving you a noisy dashboard, it sends short, action-ready opportunities to Discord.


## Flow Schema: End-to-End Design

{{< image "ai_job_search_agent_langflow/langflow_job_agent_workflow.webp" "Langflow job search pipeline overview" >}}

At a high level, the core workflow has seven blocks. First, the resume file is read and converted to raw text. Second, a prompt template structures the resume into profile JSON. Third, an LLM parses and normalizes that profile. Fourth, job feeds are fetched from multiple sources. Fifth, a matching prompt compares the candidate profile and job descriptions. Sixth, a final LLM pass converts selected matches into compact alert text. Seventh, the Discord notifier sends those alerts through a webhook. Pinggy is a separate deployment step for remote access, not part of the core matching flow.

This separation is useful in practice because each stage can be tuned independently. You can change the model provider without touching Discord delivery, or change job sources without rewriting resume parsing.

{{< image "ai_job_search_agent_langflow/job_search_workflow.jpg" "job search workflow" >}}

## Step 1: Run Langflow with Docker

{{< iframe src="https://www.youtube.com/embed/auJ57UNZ_q0?si=d-YRPp71gqLiIerA" title="Build an AI Job Search Agent with Langflow, Docker and Discord" >}}

Use Docker for reproducible local setup:

```bash
mkdir langflow-project
cd langflow-project

docker run -d \
  --name langflow \
  -p 7860:7860 \
  --mount type=volume,src=langflow_data,dst=/app/langflow \
  langflowai/langflow:latest
```

{{< image "langflow_self_host/docker_run_langflow.webp" "Docker pulling and starting the Langflow container" >}}


{{< image "langflow_self_host/docker_desktop_running_langflow_conatiner.webp" "Langflow container running in Docker Desktop" >}}

Open `http://localhost:7860` and create a new flow.

{{< image "langflow_self_host/welcome_langflow_screen_running_on_localhost.webp" "Langflow welcome screen running on localhost:7860" >}}

## Step 2: Parse Resume into Structured Candidate Data

Start with `Read File`, then pass extracted text into a prompt template that forces strict JSON output:

```text
You are an AI job search assistant.

Candidate profile:
{resume}

Job board content:
{jobs}

Your task:
1. Extract jobs that match the candidate profile.
2. For each job, ALWAYS extract the application link if present.
3. The application link may appear as:
   - "Apply"
   - "Apply here"
   - "Read more"
   - "View job"
   - a URL (http/https)

Rules:
- If a URL is found near a job, use it as the application_link.
- If multiple links exist, choose the most relevant job application link.

IMPORTANT:
- If no application link is found, DO NOT return "Not available".
- Instead, generate a fallback Google search link using:
  job title + company name.

Format:
https://www.google.com/search?q=JOB_TITLE+COMPANY+apply

Return ONLY valid JSON.

Return format:

{{
 "jobs":[
  {{
   "company":"",
   "job_title":"",
   "location":"",
   "experience":"",
   "job_post_date":"",
   "application_deadline":"",
   "job_description_summary":"",
   "application_link":""
  }}
 ]
}}

```

This step is the foundation of match quality. If your JSON is inconsistent, downstream filtering quality drops immediately.

## Step 3: Aggregate Jobs from Multiple Sources

Use URL/data fetcher nodes to pull jobs from multiple sources such as RemoteOK, Working Nomads, and Python-focused boards. Combining sources reduces platform bias and improves recall.

Then feed merged job text and parsed resume JSON to a matching prompt.

## Step 4: Match Jobs with AI and Preserve Application Links

Use a deterministic extraction prompt that always tries to keep a usable apply URL:

```text
You are an AI job search assistant.

Candidate profile:
{resume}

Job board content:
{jobs}

Your task:
1. Extract jobs that match the candidate profile.
2. For each job, extract the application link if present.
3. If no direct application link exists, generate a fallback Google search URL using job title + company + apply.

Return ONLY valid JSON in this format:
{
  "jobs": [
    {
      "company": "",
      "job_title": "",
      "location": "",
      "experience": "",
      "job_post_date": "",
      "application_deadline": "",
      "job_description_summary": "",
      "application_link": ""
    }
  ]
}
```

This avoids the common failure where a good match is returned but no actionable link is included.

## Step 5: Send Real-Time Discord Alerts

Before calling webhook delivery, shape the final LLM output as compact JSON:

```text
You are a Discord webhook caller.
Output only valid JSON, no markdown.
Use exactly this schema:
{"content":""}

Keep content under 1900 characters.
Format each job in one line:
1. Company | Title | Location | Application_link
```

Then use this custom Langflow component:

```python
from lfx.custom.custom_component.component import Component
from lfx.io import MessageTextInput, Output
from lfx.schema import Data
import urllib.request
import json

class DiscordNotifier(Component):
    display_name = "Discord Notifier"
    description = "Sends a message to Discord webhook"
    icon = "send"

    inputs = [
        MessageTextInput(
            name="message",
            display_name="Message",
            tool_mode=True,
        ),
    ]

    outputs = [
        Output(display_name="Result", name="result", method="send_to_discord")
    ]

    def send_to_discord(self) -> Data:
        webhook_url = "Discord_Server_Webhook_URL" #Use your server's URL

        raw = str(self.message)

        # Extract the content value from {"content": "..."}
        try:
            parsed = json.loads(raw)
            text = parsed.get("content", raw)
        except Exception:
            text = raw

        # Format each line nicely with emojis
        lines = ["📋 **New Job Listings**\n"]
        for line in text.strip().split("\n"):
            if not line.strip():
                continue
            parts = line.split("|")
            if len(parts) >= 4:
                number_company = parts[0].strip()  # "1. DivIHN Integration Inc"
                title          = parts[1].strip()
                location       = parts[2].strip()
                link           = parts[3].strip()

                lines.append(
                    f"**{number_company}. {title}**\n"
                    f"📍 {location}\n"
                    f"🔗 {link}\n"
                )
            else:
                lines.append(line)

        msg = "\n".join(lines)[:1990]

        payload = json.dumps({"content": msg}).encode()
        req = urllib.request.Request(
            webhook_url,
            data=payload,
            headers={
                "Content-Type": "application/json",
                "User-Agent": "DiscordBot (https://github.com, 1.0)"
            },
            method="POST"
        )
        urllib.request.urlopen(req)
        self.status = "Sent!"
        return Data(data={"status": "success"})
```

{{< image "ai_job_search_agent_langflow/discord_job_alerts.webp" "Example Discord notification delivery" >}}

## Step 6: Expose Langflow Online with Pinggy

If you want to monitor or trigger flows from outside your local network:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:7860 -L4300:localhost:4300 -t free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:7860 -L4300:localhost:4300 -t free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:7860 -L4300:localhost:4300 -t free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:7860 -L4300:localhost:4300 -t free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:7860 -L4300:localhost:4300 -t free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:7860 -L4300:localhost:4300 -t free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:7860 -L4300:localhost:4300 -t free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:7860 -L4300:localhost:4300 -t free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:7860 -L4300:localhost:4300 -t free.pinggy.io\"}}}"
{{</ ssh_command >}}

Once connected, Pinggy gives you a public URL that forwards traffic to your local Langflow app.

{{< image "langflow_self_host/pinggy_tunnel_url.webp" "Pinggy tunnel active with public HTTP and HTTPS URLs" >}}

{{< image "langflow_self_host/tunnel_logs.webp" "Pinggy tunnel showing live request logs from Langflow" >}}

## How To Validate the Flow Quickly

Run a dry test with one resume and 5 to 10 sample job records first. Confirm the resume parser returns valid JSON, then verify matching output contains links, and finally check Discord formatting under the 2000-character message limit. Keeping this test loop short helps you tune prompts faster.

## Notebook Source Code

You can access the full implementation here: {{< link href="https://github.com/Bidisha314/Langflow-Job_search_agent/blob/main/Job_Search_Agent_in_Langflow.ipynb" >}}Job_Search_Agent_in_Langflow.ipynb{{< /link >}}

## Conclusion

This flow is a practical example of AI automation done right. It is small enough to build in one session, but useful enough to save hours every week. Once the pipeline is stable, you can add ranking logic, salary filters, duplicate suppression, or publish the same results to email, Slack, and Telegram in parallel.
