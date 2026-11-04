---
title: "DeepSeek Search and Fetch API: Web Access for Your Own Agent"
description: "DeepSeek's Search and Fetch APIs cost $0.75 per 1,000 successful requests. Here are the fields, query operators, error codes and 5 QPS limit, plus a small Python research loop built on them."
date: 2026-10-17T10:00:00+05:30
lastmod: 2026-10-17T10:00:00+05:30
draft: false
tags: ["DeepSeek", "AI agents", "API", "developer tools"]
og_image: "images/deepseek_search_fetch_api_agent/deepseek_search_fetch_api_agent_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIkRlZXBTZWVrIFNlYXJjaCBhbmQgRmV0Y2ggQVBJOiBXZWIgQWNjZXNzIGZvciBZb3VyIE93biBBZ2VudCBhdCAkMC43NSBwZXIgMSwwMDAgUmVxdWVzdHMiLAogICJkZXNjcmlwdGlvbiI6ICJIb3cgRGVlcFNlZWsncyBTZWFyY2ggYW5kIEZldGNoIEFQSXMgd29yaywgd2l0aCByZXF1ZXN0IGFuZCByZXNwb25zZSBmaWVsZHMsIHF1ZXJ5IG9wZXJhdG9ycywgZXJyb3IgY29kZXMsIHRoZSA1IFFQUyBsaW1pdCwgYW5kIGEgc21hbGwgUHl0aG9uIHJlc2VhcmNoIGxvb3AgYnVpbHQgb24gdGhlbS4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvZGVlcHNlZWtfc2VhcmNoX2ZldGNoX2FwaV9hZ2VudC9kZWVwc2Vla19zZWFyY2hfZmV0Y2hfYXBpX2FnZW50X2Jhbm5lci53ZWJwIiwKICAiZGF0ZVB1Ymxpc2hlZCI6ICIyMDI2LTEwLTE3VDEwOjAwOjAwKzA1OjMwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTAtMTdUMTA6MDA6MDArMDU6MzAiLAogICJhdXRob3IiOiB7ICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLCAibmFtZSI6ICJQaW5nZ3kiIH0sCiAgInB1Ymxpc2hlciI6IHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIsICJ1cmwiOiAiaHR0cHM6Ly9waW5nZ3kuaW8iIH0sCiAgIm1haW5FbnRpdHlPZlBhZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vYmxvZy9kZWVwc2Vla19zZWFyY2hfZmV0Y2hfYXBpX2FnZW50LyIKfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "deepseek_search_fetch_api_agent/deepseek_search_fetch_api_agent_banner.webp" "DeepSeek Search and Fetch API headline above Search and Fetch endpoint boxes feeding an agent, priced at $0.75 per 1,000 requests" >}}

DeepSeek now sells web access as two plain JSON endpoints: `POST https://api.deepseek.com/v1/tools/search` returns ranked results for a query, and `POST https://api.deepseek.com/v1/tools/fetch` returns one page as Markdown. Each costs $0.75 per 1,000 **successful** requests, so a research pass that runs 1 search and 5 fetches costs about $0.0045.

I couldn't run the paid calls (no API key in this environment), so everything below comes from DeepSeek's {{< link href="https://api-docs.deepseek.com/guides/search" >}}Search & Fetch guide{{< /link >}} as of 18 October 2026. The only thing I ran myself was a request with a bad key, which confirmed both endpoints exist and answer with a JSON `authentication_error`. Code that I haven't run is marked as such.

{{% tldr %}}
1. **Two endpoints, one auth header.** Search takes a `query` and returns up to 50 results. Fetch takes a `url` and returns Markdown.
2. **Billing counts only successes.** HTTP 200 with a non-empty `results` array (Search) or page content (Fetch). Empty results, errors and timeouts are free, and `count` does not change the price.
3. **The limit that matters is 5 QPS per API,** per account, not per key. Fetch also has a per-domain limit. Retry 408, 429 and 5xx; do not retry other 4xx.
4. **Use `summary`, not `snippet`, for the model.** `snippet` is for UI. Set `need_content: true` only when you need the full page text from Search.
5. **Calls made through DeepSeek Harness, Claude Code or Codex are free for now,** and per-request billing starts at 00:00 Beijing time on 1 November 2026, per the docs.
{{% /tldr %}}

## What the two endpoints return

Both endpoints want `Authorization: Bearer <DeepSeek API Key>` and `Content-Type: application/json`. Unknown fields in the body are ignored.

**Search** takes:

| Field | Notes |
|---|---|
| `query` | Required. 1 to 128 Unicode characters. |
| `count` | 1 to 50, default 10. |
| `ori_question` | Optional. The user's original question (up to 128 characters), to help the engine understand a rewritten query. |
| `localization` | An IP address, not a place name. |
| `need_content` | Default `false`. When `false`, `content` in every result is empty. |

Each result carries `title`, `url`, `snippet` (about 100 to 200 characters, for UI), `summary` (about 600 to 800 characters, written for models), `content`, `site_name`, `site_icon`, `date` (UTC, RFC 3339), a `rerank_score` from 0 to 3, and an `authority` tier from 0 to 4. DeepSeek calls a `rerank_score` of 1.5 or more high quality and an `authority` of 3 or more highly authoritative. `authority` is `-1` when unknown, and `date` and `site_name` can be `null`.

**Fetch** is simpler. The `url` must be HTTP or HTTPS, at most 8192 characters, with a host and no username or password in it. The response is `{"title": "...", "content": "# ...markdown..."}`. Fetch returns 403 if a security policy rejects the request, and 404 when it can't get usable content: the site errored, blocked it, or served a content type it can't turn into Markdown.

Here is a minimal call to each:

```bash
curl https://api.deepseek.com/v1/tools/search \
  -H "Authorization: Bearer $DEEPSEEK_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"query": "site:github.com lang:en after:2026 llama.cpp release", "count": 5}'

curl https://api.deepseek.com/v1/tools/fetch \
  -H "Authorization: Bearer $DEEPSEEK_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://example.com/article"}'
```

## Query operators are passed straight to the engine

Operators go inside `query` and are forwarded unchanged, so you can stack them: `site:`, `-site:`, `-term`, `"exact phrase"`, `-"exact phrase"`, `lang:zh,en`, `after:` and `before:` (a year or a date). The docs' own example is `DeepSeek site:github.com OR site:huggingface.co lang:en after:2025`.

For an agent this is the cheapest quality lever you have. Telling the model to write `after:2026-01-01` and `-site:pinterest.com` costs nothing and removes a lot of stale and junk results before you spend a Fetch on them. The 128-character cap on `query` also means operators eat into the budget, so keep the model's queries short.

## A search, filter, fetch loop

The flow I'd start with: search once, drop weak results using the scores the API already gives you, fetch the few that survive, and hand the Markdown to the model.

{{< image "deepseek_search_fetch_api_agent/search_filter_fetch_flow.webp" "Flow from one Search call through a score filter to up to five Fetch calls and into the model prompt, six requests in total" >}}

*One research pass: 1 Search call, a free local filter, then up to 5 Fetch calls.*

Here is that loop in Python. **I haven't run this against the live API**; it follows the documented fields and error codes.

```python
import os, time, requests

BASE = "https://api.deepseek.com/v1/tools"
HEADERS = {
    "Authorization": f"Bearer {os.environ['DEEPSEEK_API_KEY']}",
    "Content-Type": "application/json",
}

def call(path, body, tries=4):
    for attempt in range(tries):
        r = requests.post(f"{BASE}/{path}", json=body, headers=HEADERS, timeout=60)
        if r.status_code == 200:
            return r.json()
        if r.status_code in (408, 429) or r.status_code >= 500:
            time.sleep(2 ** attempt)      # docs: wait and retry
            continue
        return None                       # 402, 403, 404...: retrying won't help
    return None

def research(question, max_pages=5):
    found = call("search", {"query": question[:128], "count": 10, "ori_question": question[:128]})
    hits = [h for h in (found or {}).get("results", [])
            if h["rerank_score"] >= 1.5 and h["authority"] >= 3]
    pages = []
    for h in hits[:max_pages]:
        page = call("fetch", {"url": h["url"]})
        if page:                          # 403/404 are normal, skip them
            pages.append(f"# {h['title']}\n{h['url']}\n\n{page['content']}")
        time.sleep(0.25)                  # stay under 5 QPS
    return "\n\n---\n\n".join(pages)
```

A few choices in there are worth defending. The filter uses DeepSeek's own thresholds, so you're not inventing cutoffs. `time.sleep(0.25)` keeps a single-threaded loop under 5 requests per second. And a `None` from Fetch is treated as normal, because the docs say plainly that fetching depends on the target site's policies.

If you'd rather skip the second hop, pass `need_content: true` to Search and read `content` straight from the results. You trade control over which pages get read for fewer round trips. I'd start with `summary` alone and only fetch when the summary isn't enough.

## Errors, retries and what is billed

| Status | Meaning | What to do |
|---|---|---|
| 400 | Bad header, malformed JSON or bad field | Fix the request. |
| 401 | Missing or invalid key | Check the key. |
| 402 | Insufficient balance | Top up, then retry. |
| 403 | Fetch rejected by a security policy | Skip the URL. |
| 404 | Fetch found no usable content | Skip the URL. |
| 408, 429, 5xx, 504 | Timeout, QPS limit, server or downstream error | Wait and retry. |

Because only a 200 with real content is billed, a retry loop doesn't double-charge you for a failed attempt. Search and Fetch fees come out of the same DeepSeek balance as token usage, and both APIs are read-only. The 5 QPS cap applies per account whichever key you use, so two services sharing an account share the budget.

## What to watch before November 1

The free period is the part to plan around. Per the docs, server-side tool calls through DeepSeek Harness, Claude Code and Codex are free now, and per-request billing starts at 00:00 Beijing time on 1 November 2026. A third-party write-up of the pricing page said DeepSeek would announce the billing start separately, so check the official page rather than trusting either of us.

At $0.75 per 1,000, the arithmetic is easy. An agent that does 10 research passes of 6 requests a day makes 60 requests, which is $0.045 a day, or about $1.35 over a 30-day month. The limit you'll hit first is QPS, not cost.

Two caveats from the docs. There is no documented function-calling schema for these endpoints, so with your own agent you register them as tools yourself and pass the results back. And Fetch only reaches what DeepSeek's servers can reach, which brings up a practical problem.

## Fetching a page that only exists on your machine

Fetch runs on DeepSeek's side, so `http://localhost:8000` means nothing to it. If you want an agent to read a docs build or a staging page that only lives on your laptop, you need a public URL. A Pinggy tunnel gives you one:

```bash
python3 -m http.server 8000
```

Then, in a second terminal:

```bash
ssh -p 443 -R0:localhost:8000 free.pinggy.io -T
```

It prints an HTTPS URL on `a.pinggy.link`, which you can pass as the `url` field. I haven't tested Fetch against a Pinggy URL, and it may still return 403 or 404 depending on how DeepSeek's security policy treats it. Don't expose anything you wouldn't want public, and close the tunnel when the agent is done. For the basics, see [how to expose a local server](/blog/receive_and_test_webhooks_in_localhost/) and the tunnel notes in [sharing a local MCP server](/blog/share_local_mcp_server_with_pinggy/).

## Conclusion

The practical test is small: put an API key in `DEEPSEEK_API_KEY`, run the two `curl` calls above, and look at `rerank_score`, `authority` and `summary` on a query you care about. If the top five results clear the 1.5 and 3 thresholds, the loop above is probably all your agent needs. If they don't, tighten the query with `site:` and `after:` before reaching for `need_content`.
