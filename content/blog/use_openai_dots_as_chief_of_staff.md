---
title: "How to Use OpenAI Dots as a Chief of Staff in ChatGPT"
description: "Set up an OpenAI dot as a proactive chief of staff: connect Gmail, Calendar and Codex, hand it a whole to-do list on one call, write custom rules, and cut the noise. Plans, limits and regions as of October 2026."
date: 2026-10-29T10:00:00+05:30
lastmod: 2026-10-29T10:00:00+05:30
draft: false
tags: ["OpenAI Dots", "ChatGPT", "AI agents", "OpenAI Codex", "automation"]
og_image: "images/use_openai_dots_as_chief_of_staff/use_openai_dots_as_chief_of_staff_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIHVzZSBPcGVuQUkgRG90cyBhcyBhIGNoaWVmIG9mIHN0YWZmIGluIENoYXRHUFQiLAogICJkZXNjcmlwdGlvbiI6ICJTZXQgdXAgYW4gT3BlbkFJIGRvdCBhcyBhIHByb2FjdGl2ZSBjaGllZiBvZiBzdGFmZjogY29ubmVjdCBHbWFpbCwgQ2FsZW5kYXIgYW5kIENvZGV4LCBoYW5kIGl0IGEgd2hvbGUgdG8tZG8gbGlzdCBvbiBvbmUgY2FsbCwgd3JpdGUgY3VzdG9tIHJ1bGVzLCBhbmQgY3V0IHRoZSBub2lzZS4gUGxhbnMsIGxpbWl0cyBhbmQgcmVnaW9ucyBhcyBvZiBPY3RvYmVyIDIwMjYuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL3VzZV9vcGVuYWlfZG90c19hc19jaGllZl9vZl9zdGFmZi91c2Vfb3BlbmFpX2RvdHNfYXNfY2hpZWZfb2Zfc3RhZmZfYmFubmVyLndlYnAiLAogICJkYXRlUHVibGlzaGVkIjogIjIwMjYtMTAtMjlUMTA6MDA6MDArMDU6MzAiLAogICJkYXRlTW9kaWZpZWQiOiAiMjAyNi0xMC0yOVQxMDowMDowMCswNTozMCIsCiAgInN1cHBseSI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3VwcGx5IiwKICAgICAgIm5hbWUiOiAiQ2hhdEdQVCBQcm8sIEJ1c2luZXNzIFByZW1pdW0gb3IgRW50ZXJwcmlzZSBwbGFuIHdpdGggZG90cyBlbmFibGVkIgogICAgfQogIF0sCiAgInRvb2wiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1Rvb2wiLAogICAgICAibmFtZSI6ICJDaGF0R1BUIGRlc2t0b3AgYXBwIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvVG9vbCIsCiAgICAgICJuYW1lIjogIkNoYXRHUFQgcGx1Z2lucyBzdWNoIGFzIEdtYWlsLCBHb29nbGUgQ2FsZW5kYXIsIEdvb2dsZSBEcml2ZSBhbmQgR2l0SHViIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvVG9vbCIsCiAgICAgICJuYW1lIjogIk9wZW5BSSBDb2RleCIKICAgIH0KICBdLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ3JlYXRlIHlvdXIgZG90IiwKICAgICAgInRleHQiOiAiT3BlbiBkb3RzIGluIHRoZSBDaGF0R1BUIG1vYmlsZSBhcHAsIGRlc2t0b3AgYXBwIG9yIGEgZGVza3RvcCBicm93c2VyLCBmb2xsb3cgdGhlIGludHJvZHVjdGlvbiwgYW5kIGdpdmUgeW91ciBkb3QgYSBuYW1lIGFuZCBsb29rLiBJdHMgaGFuZGxlIHN0YXJ0cyBhcyBAeW91cm5hbWUtZG90IGFuZCB1cGRhdGVzIHdoZW4geW91IG5hbWUgaXQuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNvbm5lY3QgcGx1Z2lucyIsCiAgICAgICJ0ZXh0IjogIkNvbm5lY3QgcGx1Z2lucyBmb3IgdGhlIGFwcHMgeW91IHdhbnQgdGhlIGRvdCB0byB1c2UsIHN1Y2ggYXMgR21haWwsIEdvb2dsZSBDYWxlbmRhciBhbmQgR29vZ2xlIERyaXZlLiBFYWNoIHBsdWdpbiB3b3JrcyB3aXRoIGl0cyBjb25uZWN0ZWQgYWNjb3VudCBhbmQgZXhpc3RpbmcgcGVybWlzc2lvbnMsIHNvIHJldmlldyB0aG9zZSBhcyB5b3UgZ28uIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNvbm5lY3QgeW91ciBjb21wdXRlciIsCiAgICAgICJ0ZXh0IjogIkluIHRoZSBDaGF0R1BUIGFwcCBvbiB0aGUgY29tcHV0ZXIgeW91IHdhbnQgdG8gY29ubmVjdCwgb3BlbiB0aGUgZG90J3MgcHJvZmlsZSwgZmluZCBZb3VyIGNvbXB1dGVyIHVuZGVyIENvbXB1dGVycyBhbmQgc2VsZWN0IEFsbG93IGFjY2Vzcy4gS2VlcCB0aGUgY29tcHV0ZXIgb25saW5lIHdpdGggdGhlIENoYXRHUFQgYXBwIG9wZW4gd2hpbGUgdGhlIGRvdCB1c2VzIGl0LiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJXcml0ZSBjdXN0b20gcnVsZXMiLAogICAgICAidGV4dCI6ICJVbmRlciBTZXR0aW5ncyA+IFBlcnNvbmFsaXphdGlvbiA+IEN1c3RvbSBydWxlcywgYWRkIHJ1bGVzIHN1Y2ggYXMgQXNrIGJlZm9yZSB0YWtpbmcgYWN0aW9uIGZvciBzZW5kaW5nIGVtYWlsIHRvIGFueW9uZSBlbHNlLCBhbmQgVGFrZSBhY3Rpb24gd2l0aG91dCBhc2tpbmcgZm9yIGRyYWZ0cywgbm90ZXMgYW5kIENvZGV4IHRhc2tzLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJMZXQgaXQgcnVuIGEgcHJvYWN0aXZlIHBhc3MiLAogICAgICAidGV4dCI6ICJBZnRlciBzZXR1cCB0aGUgZG90IHJlYWRzIHlvdXIgY29ubmVjdGVkIGFwcHMgd2l0aCByZWFkLW9ubHkgcmVzZWFyY2ggdG9vbHMgYW5kIHN1Z2dlc3RzIHdoYXQgbmVlZHMgYXR0ZW50aW9uLCBzdWNoIGFzIHVuYW5zd2VyZWQgZW1haWxzIG9yIGJpbGxpbmcgcHJvYmxlbXMuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkhhbmQgaXQgdGFza3Mgb24gYSBjYWxsIiwKICAgICAgInRleHQiOiAiU2VsZWN0IHRoZSBwaG9uZSBidXR0b24gaW4gdGhlIGRvdCdzIGNvbnZlcnNhdGlvbiBhbmQgbGlzdCB5b3VyIHRhc2tzLiBUaGUgZG90IGhhbmRzIHRoZW0gdG8gQ2hhdEdQVCBXb3JrIGFuZCBDb2RleCwgZm9sbG93cyBlYWNoIHRvIGEgcmVzdWx0LCBhbmQga2VlcHMgd29ya2luZyBhZnRlciB0aGUgY2FsbCBlbmRzLiBJbiB0aGUgZGVza3RvcCBhcHAsIHRyYWNrIHByb2dyZXNzIHVuZGVyIEFjdGl2aXR5IG9uIHRoZSBkb3QncyBwcm9maWxlLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJTZXQgd2hlbiBpdCBzaG91bGQgbWVzc2FnZSB5b3UiLAogICAgICAidGV4dCI6ICJUZWxsIHRoZSBkb3Qgd2hhdCB0byBza2lwIGFuZCB3aGVuIHRvIGludGVycnVwdCB5b3UsIGZvciBleGFtcGxlOiBNZXNzYWdlIG1lIGluIENoYXRHUFQgb25seSBpZiBhIGRlYWRsaW5lIGlzIGF0IHJpc2sgb3IgeW91IG5lZWQgYSBkZWNpc2lvbi4gU2V0IHJlY3VycmluZyBjaGVjay1pbnMgd2l0aCBhIHRpbWUgem9uZSBhbmQgZW5kIGRhdGUgYW5kIHJldmlldyB0aGVtIHVuZGVyIFNjaGVkdWxlZC4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "use_openai_dots_as_chief_of_staff/use_openai_dots_as_chief_of_staff_banner.webp" "The OpenAI Dots mascot, a blue cloud in a black beret, between Gmail, Google Calendar and Slack logos on the left and Codex, GitHub and Obsidian logos on the right, with a chat bubble flagging a hotel bill that does not match the booked rate" >}}

Most AI assistants still work like a vending machine. You type a request, get an answer, and nothing else happens until you come back with the next one. The follow-ups, the reminders and the "did that ever get done?" stay your job.

OpenAI's dots, launched at DevDay on September 29, 2026, are built to take that job off you. A dot is an always-on agent inside ChatGPT that runs on GPT-6 Astra, gets its own cloud computer and browser, and keeps working between conversations, messaging you when something needs a decision. On paper that overlaps with Meta's Muse and xAI's Grok Bot. Where a dot earns its $100-a-month entry price is not shopping or booking appointments. It's as a chief of staff: something that reads your inbox, calendar and project threads on its own, flags what slipped, and chases the tasks you hand it until they're actually finished.

This guide sets that up with one running example: a solo developer with a personal dashboard app, a hobby game, a newsletter due Tuesday, and a week on the road. Plans, limits and menu names come from OpenAI's {{< link href="https://learn.chatgpt.com/docs/dots" >}}dots documentation{{< /link >}} and were checked on October 29, 2026.

{{% tldr %}}
1. **A dot is a coordinator, not an errand runner.** It lives inside ChatGPT next to your memory, plugins, ChatGPT Work tasks and Codex threads, and hands real work off to those.
2. **It works in two directions.** Proactively, it reads your connected apps (read-only) and tells you what slipped. Reactively, you dump a list on one call and it starts and follows each task.
3. **Custom rules decide what it may do alone.** Each rule picks "Take action without asking", "Take action when you say so", "Ask before taking action" or "Hand off to you".
4. **Tell it when to stay quiet.** One line such as "Message me only if a deadline is at risk or you need a decision" removes most of the noise.
5. **Access is narrow for now.** Pro (from $100/month), Business Premium or Enterprise. Personal Pro excludes the EEA, UK and Switzerland, and the Work and Codex tasks a dot starts count toward your plan limits.
{{% /tldr %}}

## How a dot differs from ChatGPT Work and Codex

A dot is a persistent agent with three things a normal chat doesn't have. It has its own cloud computer and browser, so it keeps working with your laptop shut. It has memory beyond the current chat: relevant ChatGPT memory, a search over your past conversations, and its own notes on your preferences, decisions and ongoing work. Those notes follow it across the ChatGPT app, Slack, Teams and voice calls. And it can pause and wake itself up, so a follow-up doesn't need a fixed schedule.

It reaches your apps through ChatGPT plugins, of which there were more than 4,000 at launch, such as Gmail, Google Drive and GitHub. If you connect your computer through the ChatGPT app on it, the dot can also use local files, code and apps there, and continue existing local Codex tasks.

The part that matters for a chief of staff is what it does with big jobs: it doesn't do them in its own chat. OpenAI's docs split the work like this:

| Tool | What it's for |
|---|---|
| Chat | Answers, explanations, ideas, drafts |
| ChatGPT Work | Delegated tasks like research, analysis or file creation, now or on a schedule |
| Codex | Building, debugging, testing and reviewing software |
| Your dot | Ongoing responsibilities, next steps as things change, follow-ups between conversations |

A dot delegates to Work and Codex, splits jobs across background agents that run in parallel, and, since an {{< link href="https://community.openai.com/t/fresh-dots-updates-create-in-the-mobile-app-delegate-to-codex/1404834" >}}October 9 update{{< /link >}}, can start Codex work and follow up on existing Codex threads.

That is the whole case for it. {{< link href="https://thenextweb.com/news/meta-muse-personal-ai-agent-launch" >}}Meta's Muse{{< /link >}} (rolling out in the US since September 8, with a free tier Meta says covers most people) is cheaper for shopping, travel bookings and forms, and it pays through Stripe's Link. {{< link href="https://x.ai/news/introducing-grok-bot" >}}xAI's Grok Bot{{< /link >}} runs teams of always-on bots inside your work tools. Neither sits on top of the threads, memory and Codex tasks you already have in ChatGPT, and that is where a coordinator pays off. Using a dot for errands treats it as one more isolated tool and ignores what it's sitting next to.

{{< image "use_openai_dots_as_chief_of_staff/openai_dot_architecture.webp" "Architecture diagram: you reach the dot through the ChatGPT app, calls, Slack and Teams; the dot uses plugins, its cloud computer and your computer, and hands work to ChatGPT Work tasks and Codex threads" >}}

*Based on OpenAI's {{< link href="https://learn.chatgpt.com/docs/dots" >}}dots documentation{{< /link >}}, October 2026.*

## What you need before you start

Dots are only on paid plans, and the list is short. Personal accounts need one of the Pro tiers (Pro 100, Pro 200 or Pro 500, starting at $100 a month), you must be over 18, and personal Pro excludes the European Economic Area, the United Kingdom and Switzerland. Business Premium is rolling out worldwide. Enterprise is rolling out too, but it is off by default until a workspace admin turns it on. On October 28, a {{< link href="https://community.openai.com/t/dots-are-now-available-in-the-eu-on-business-and-enterprise-plans/1410501" >}}post on OpenAI's community forum{{< /link >}} announced that dots are available in the EU on Business and Enterprise plans, with consumer plans "very soon". Free, Go and Plus aren't on the list. The rollout is gradual, so an eligible account may not see dots right away.

Your first dot is included in the plan. OpenAI says you'll be able to add more dots later, but hasn't said what they'll cost. Conversations with your dot don't count toward ChatGPT usage limits. Tasks it starts in ChatGPT Work or Codex count toward those products' limits as usual. Plans also include an allowance for the dot's deeper work, with extended limits for the first month after launch, and the docs don't put numbers on either, so watch your usage once that month is up.

## Set up your dot

Setup takes a few minutes, and most of it is connecting the apps you want it to watch. For the running example that means Gmail, Google Calendar, Google Drive, GitHub and Slack, plus the laptop where the dashboard app, the game and the Obsidian vault live.

1. Create it. Open dots in the ChatGPT mobile app, the desktop app or a desktop browser (mobile web isn't supported) and follow the introduction. Give it a name and a look. Its handle starts as `@yourname-dot`, and naming the dot updates it, so a dot named Alfred becomes `@yourname-alfred`.
2. Connect plugins for the apps you want it to use, such as email, calendar and files. Each plugin works with its connected account and the permissions it already has, so review those as you go. You can skip this step and add plugins later.
3. Connect your computer. In the ChatGPT app on the computer you want to connect, open the dot's profile, find **Your computer** under **Computers**, select **Allow access**, and confirm. The dot can then use local files, code and Codex tasks on that machine, but only while it's online with the ChatGPT app open, and only one personal computer at a time. **Revoke access** removes it.
4. Add a channel. On the profile, **Add** shows the contact methods available to you, such as Slack and Microsoft Teams. Texting over iMessage or RCS is rolling out in beta to Pro users in the US. Channels are only a way to talk to the dot; apps and your computer are connected separately.

Then write the rules, before you let it near your email.

## Write custom rules before you hand over your inbox

Before a dot takes an action that could affect your accounts or share information, an automatic review checks it against your instructions, permissions, custom rules and built-in safety requirements. The action then goes ahead, waits for your approval, or includes a step you have to do yourself. OpenAI's example of the last kind is changing a password, which you always do yourself.

Custom rules are how you tune the middle ground. On desktop and web they live under **Settings > Personalization > Custom rules** in the **Permissions** section; on iOS and Android, open the sidebar and select **Customize > Custom rules**. Each rule describes an action in plain words and picks one of four handling options. A starting set for a chief of staff:

| Action | Handling |
|---|---|
| Send an email or Slack message to anyone other than me | Ask before taking action |
| Accept, decline or move calendar events | Take action when you say so |
| Write drafts, update notes, start or continue Codex tasks | Take action without asking |
| Pay, refund or change a login | Hand off to you |

Two details are easy to miss. Asking for draft replies doesn't authorize sending them, so "draft replies to these three emails" stays a draft. And plugin permissions are a separate layer: **Open Plugins** from the rules page shows **Plugin permissions**, which control app actions apart from your rules, and a custom rule never grants access to an app or computer in the first place.

## The proactive half: what it finds without being asked

Right after setup, a dot introduces itself and uses the context and connected apps it has to look for places it can help. No prompt needed. For the developer in our example, on the road with Gmail and Calendar connected, a first pass might come back with three things: a hotel folio that doesn't match the booked rate, worth sorting out before checkout; a sponsor's email that has sat unanswered for two weeks; and a recording session planned for tomorrow that depends on details nobody has confirmed yet.

That research is read-only by design. The tools it researches with can't send messages, change app content, or control your browser or computer. Background agents report what they find to the dot, which turns it into a suggestion or a question for you, and any follow-up action goes through the same review and rules as above.

The other half of "proactive" is follow-up. Because a dot pauses and wakes on its own, it keeps checking on things after the conversation ends, and that cuts both ways. Say you have it chase a newsletter sponsor for an unpaid invoice. You go back and forth on the wording, it sends, and half an hour later the dot looks at the payment side on its own and tells you the money arrived last week. Useful, and a little embarrasing. The fix is to put the check in the instruction instead of relying on the follow-up: "Before chasing any invoice, confirm it's still unpaid."

{{< image "use_openai_dots_as_chief_of_staff/openai_dot_proactive_loop.webp" "Cycle diagram of a dot's loop: wakes up on its own, reads connected apps read-only, checks its notes and your goals, messages you only for a decision, acts only where your rules allow" >}}

*Research runs read-only. Only the last step acts, and only through the automatic review and your custom rules.*

## The reactive half: hand it a whole to-do list on one call

The fastest way to load work onto a dot is to call it. Open the dot's conversation and select the phone button (or **Call** on its profile in the desktop app). The screen literally rings like a phone call, which feels like a gimmick the first time. Get past that and it's the quickest way to empty your head. You can type while you talk, and ending the call doesn't stop the work you assigned. Calls started by the dot are planned for after launch.

Here's the kind of list our developer dumps on it in one call:

1. Research the topic for Tuesday's newsletter and put a full outline into the note that already exists for it in the Obsidian vault, complete enough to turn into a draft without missing a key point.
2. In the existing Codex thread for the dashboard app (it pulls Apple Reminders, calendar events and Obsidian tasks onto one board), make a double-click on a task open a basic Markdown editor inside the app, save edits back to the Obsidian note, and keep an "Open in Obsidian" button for anything heavier.
3. In the game's Codex thread, fix the player getting stuck between walking and climbing on steep slopes, and make god mode give unlimited arrows and faster movement for playtesting.

The dot reads the plan back, then fans it out. The research goes to a background agent or a ChatGPT Work task, and the outline lands in the vault through your connected computer. The two coding jobs continue the existing local Codex tasks on that computer, which therefore has to stay online with ChatGPT open. New coding work can instead run in a Codex cloud environment you've already set up, with your laptop off. The dot can open each job as its own visible thread, and **Activity** on the dot's profile in the desktop app shows each task's progress, files, results and requests for input.

This is where it beats opening three threads yourself: the dot owns the follow-through. OpenAI's docs say plainly that "a completed run doesn't by itself confirm that the requested result was achieved or delivered", so give it a finish line along with the task. "Done means the editor saves back to the note and someone has played the god-mode build" is a bar it can check, chase and report on. When it needs a decision or an approval, it messages you, and with the ChatGPT app on your phone that arrives as a notification you can answer from wherever you are.

{{< image "use_openai_dots_as_chief_of_staff/openai_dot_one_call_three_tasks.webp" "Flowchart: one call with three tasks goes to the dot, which starts a ChatGPT Work research task and two Codex threads, checks each result, then pings your phone when it needs you" >}}

## Make it quieter, and more useful

Out of the box a dot can be chatty. Connect Gmail and it may start telling you about new emails all day, which is noise when your phone already notifies you about every email you recieve. Tell it, in plain words, what you don't want and what you do: "Don't tell me about new emails. Message me in ChatGPT only if a deadline is at risk or you need a decision." It keeps preferences like that in its notes, and you can ask it to confirm what it saved.

A few more instructions pay off quickly:

- Route by kind. Keep routine progress in ChatGPT and send decisions to Slack. The dot picks the channel from what you've told it.
- Make check-ins explicit. Recurring work needs what to check, when (with a time zone and an end date), what's worth a message and where to send it: "Every weekday at 8 AM IST for the next four weeks, check my inbox and calendar and send me in Slack only what needs a decision today. Confirm the schedule." Review or cancel it later under **Scheduled**.
- Tell the dot directly when priorities change. Its notes are separate from ChatGPT's saved memory, and changing a saved-memory setting doesn't necessarily change the notes it has already made.

Stopping work happens in three places. **Pause** stops the dot's current main task, but it doesn't stop every delegated task or cancel future scheduled runs. You stop a delegated task by opening it in **Activity**, and you end a recurring one by disabling or deleting it in **Scheduled**. None of these undo actions already completed.

## Where dots still fall short

Price and region come first. $100 a month for one agent is a lot if you only want help with email, and in the US, Muse has a free tier for errands. Personal Pro accounts in the EEA, UK and Switzerland can't get a dot yet; in the EU, only Business and Enterprise workspaces can so far.

The cloud half and the laptop half behave differently. The cloud computer stays available when your laptop is off, but anything on your machine, such as local Codex tasks or the Obsidian vault, needs that machine online with the ChatGPT app open. The cloud browser keeps its own sessions and doesn't inherit your logins, and some websites block cloud browsers or ask for extra verification.

Mistakes are real. OpenAI says dots can make mistakes and asks you to review important results and their sources, and the follow-up-after-the-fact problem from the invoice example comes from how a dot works: it checks things on its own schedule. Usage also needs watching, since the Work and Codex tasks a dot starts count toward those products' limits and the extended limits only cover the first month after launch.

Finally, you get one dot for now. At launch, OpenAI also {{< link href="https://itbrief.co.uk/story/openai-launches-dots-always-on-ai-agents-for-work" >}}previewed specialist dots{{< /link >}} for organizations, each with its own identity, credentials and system access, starting as focused enterprise pilots. If more dots reach personal plans, the obvious move is one dot per role (inbox, finance, content), much like the bot teams people already run on Grok Bot. Until then, one dot has to cover everything.

## Giving your dot an always-on notes folder with Pinggy

The vault in our example has teh same weakness as any local task: the dot can only write the newsletter outline while the laptop is online with ChatGPT open. If you keep a synced copy of the vault on a machine that never sleeps (a mini PC, a NAS, a Raspberry Pi), you can give the dot its own route to it, as a custom MCP plugin. A Pinggy tunnel supplies the public HTTPS URL that ChatGPT needs to reach a box behind your home router.

Sort out authentication first, because it shapes the whole setup. ChatGPT's custom MCP dialog offers OAuth, No authentication, or OAuth or no authentication, and OpenAI's {{< link href="https://developers.openai.com/plugins/build/auth" >}}auth docs{{< /link >}} say ChatGPT can't present custom API keys. A gateway that demands a bearer key would lock ChatGPT out along with everyone else. Short of running an OAuth 2.1 server, the practical setup is No authentication with two limits: the server only sees one folder of the vault, and it answers on a long random path instead of `/mcp`.

On that box, sync the vault to `/srv/vault` (Syncthing works well for this) and keep the notes you want the dot to work on, like the newsletter outline, in a `Dot` folder inside it. Then serve the official {{< link href="https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem" >}}filesystem MCP server{{< /link >}} over Streamable HTTP with {{< link href="https://github.com/supercorp-ai/supergateway" >}}supergateway{{< /link >}}, which wraps a stdio server in an HTTP endpoint:

```bash
MCP_PATH="/mcp-$(openssl rand -hex 16)"
echo "$MCP_PATH"   # you'll paste this into ChatGPT
npx -y supergateway \
  --stdio "npx -y @modelcontextprotocol/server-filesystem /srv/vault/Dot" \
  --outputTransport streamableHttp --port 8787 \
  --streamableHttpPath "$MCP_PATH"
```

That serves the filesystem server's 14 tools (`read_text_file`, `write_file`, `edit_file`, `search_files` and the rest) on port 8787 at that random path, and nothing outside `/srv/vault/Dot`. We ran this on October 29 with supergateway 4.2.1 and server-filesystem 2.1.0: `tools/list` on the random path returned all 14 tools, a request to plain `/mcp` got a `404`, and reading a file elsewhere in the vault came back with "Access denied - path outside allowed directories".

Then open the tunnel from the same box:

```bash
ssh -p 443 -o ServerAliveInterval=60 -R0:localhost:8787 <token>@pro.pinggy.io
```

Use a Pro token from the {{< link href="https://dashboard.pinggy.io" >}}Pinggy dashboard{{< /link >}} here, with a persistent subdomain assigned to it. A free tunnel lasts 60 minutes and comes back with a new URL, which breaks the plugin URL you saved in ChatGPT, and free URLs show a warning page to browser-like clients.

In ChatGPT on the web, turn on Developer mode if it isn't on already, open **Plugins**, select the plus button, then **Add custom MCP server**. Give it a name, enter `https://<your-subdomain>.a.pinggy.link` followed by your random path as the **Server URL**, pick **No authentication**, read the risk warning, select **I understand and want to continue**, choose **Create as a plugin**, then install it. OpenAI's {{< link href="https://developers.openai.com/api/docs/guides/custom-mcp-server" >}}custom MCP server guide{{< /link >}} lists the same steps, and our guide to {{< link href="/blog/build_and_publish_chatgpt_plugin_mcp/" >}}building a ChatGPT plugin with MCP{{< /link >}} shows where the Developer mode switch is.

Three caveats. The random path is a secret inside a URL, not real authentication: anyone who gets the full URL can read and write that one folder, so keep sensitive notes out of it, and put an OAuth 2.1 layer in front of the gateway before you trust it with more. OpenAI's own {{< link href="https://developers.openai.com/api/docs/guides/secure-mcp-tunnels" >}}Secure MCP Tunnel{{< /link >}} keeps the server off the public internet entirely, but it needs an OpenAI Platform organization with Tunnels permissions and its `tunnel-client` running beside the server. And OpenAI's dots docs say a dot can use "supported plugins installed and enabled for your account"; one vendor, {{< link href="https://www.marqeable.com/blog/connect-marqeable-mcp-to-openai-dots/" >}}Marqeable{{< /link >}}, reports its custom MCP connector working from the dot's first message, but we haven't tested a dot against this exact setup. Add a custom rule for edits to the folder either way.

{{< image "use_openai_dots_as_chief_of_staff/openai_dot_vault_pinggy_tunnel.webp" "Architecture diagram: a home mini PC runs supergateway on port 8787 at a random path over the vault's Dot folder and opens an outbound SSH tunnel to Pinggy, and the dot's custom MCP plugin in ChatGPT calls the public pinggy.link URL" >}}

*The mini PC opens the tunnel outward, so no port is opened on the router and the laptop can stay closed.*

## What to do next

Start with work you regularly need to check or update, not a one-off request. That's OpenAI's own advice, and it matches how a dot is built: "keep the newsletter on schedule" or "watch the sponsor inbox and tell me what needs a reply" gives it something to wake up for. Describe the responsibility, share the sources it needs and say which decisions need you. Then review its work, tell it what needs to change, and only widen the scope once the first job runs well.

Give it a week and look at what it actually caught. If most of its messages repeat notifications your phone already sends, tell it so and judge it on the follow-ups instead: the invoice it double-checked, the Codex thread it reopened, the outline that was waiting in the vault on Monday morning. That's the job a chief of staff does, and it's the one thing a single chat thread never did.

## Conclusion

A dot works best one layer above the tools you already use. It looks through Gmail, Calendar and Slack with read-only research tools, hands research to ChatGPT Work and code to Codex, and keeps following each job until it's done or it needs you. The order of the setup matters more than any single setting: connect plugins and your computer, write custom rules before it goes near your inbox, give every task a finish line, and tell it in one plain sentence when to stay quiet.

Whether that's worth $100 a month depends on how much of your week goes into follow-up. If you mostly want errands run and you're in the US, Muse's free tier is the cheaper bet. If you juggle Codex threads, a newsletter and an inbox that never empties, a dot takes over the tracking you'd otherwise keep in your head. Plan around two gaps while you decide: you get one dot per account for now, and anything that runs on your laptop needs the laptop online with ChatGPT open.
