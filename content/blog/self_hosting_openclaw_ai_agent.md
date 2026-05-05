---
title: "How to Self-Host OpenClaw for Clawdbot AI Agent"
description: "Complete guide to self-hosting OpenClaw (formerly Clawdbot), the open-source personal AI assistant. Set up your own AI agent with Discord integration."
date: 2026-02-01T14:30:00+05:30
draft: false
og_image: "images/self_hosting_openclaw_ai_agent/self_hosting_openclaw_ai_agent_banner.webp"
tags: ["openclaw", "clawdbot", "ai-agent", "self-hosted", "discord", "automation"]
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFNlbGYtSG9zdCBPcGVuQ2xhdyBBSSBBZ2VudCB3aXRoIERpc2NvcmQgSW50ZWdyYXRpb24iLAogICJkZXNjcmlwdGlvbiI6ICJDb21wbGV0ZSBndWlkZSB0byBzZWxmLWhvc3RpbmcgT3BlbkNsYXcgQUkgYWdlbnQgd2l0aCBEaXNjb3JkIGJvdCBpbnRlZ3JhdGlvbi4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvc2VsZl9ob3N0aW5nX29wZW5jbGF3X2FpX2FnZW50L3NlbGZfaG9zdGluZ19vcGVuY2xhd19haV9hZ2VudF9iYW5uZXIud2VicCIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJJbnN0YWxsIE5vZGUuanMgdjIyIG9yIGhpZ2hlciBvbiB5b3VyIHN5c3RlbS4gQ2hlY2sgdmVyc2lvbiB3aXRoOiBub2RlIC0tdmVyc2lvbiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJJbnN0YWxsIE9wZW5DbGF3IGdsb2JhbGx5IHVzaW5nIG5wbTogbnBtIGluc3RhbGwgLWcgb3BlbmNsYXdAbGF0ZXN0IgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIlJ1biB0aGUgb25ib2FyZGluZyB3aXphcmQ6IG9wZW5jbGF3IG9uYm9hcmQgLS1pbnN0YWxsLWRhZW1vbiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJDcmVhdGUgYSBEaXNjb3JkIGJvdCBpbiB0aGUgRGV2ZWxvcGVyIFBvcnRhbCBhbmQgY29weSB0aGUgYm90IHRva2VuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIkNvbmZpZ3VyZSBPcGVuQ2xhdyB3aXRoIHlvdXIgRGlzY29yZCBib3QgdG9rZW4gaW4gfi8ub3BlbmNsYXcvb3BlbmNsYXcuanNvbiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJTdGFydCB0aGUgZ2F0ZXdheTogb3BlbmNsYXcgZ2F0ZXdheSAtLXBvcnQgMTg3ODkiCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "self_hosting_openclaw_ai_agent/self_hosting_openclaw_ai_agent_banner.webp" "Self-Hosting OpenClaw AI Agent" >}}

{{< iframe src="https://www.youtube.com/embed/mQy2-z8WtVE" title="Self-Host Your Own AI Discord Bot (OpenClaw-Style) with Ollama, Docker & Pinggy" >}}

{{< link href="https://openclaw.ai/" >}}OpenClaw{{< /link >}} (formerly known as Clawdbot and Moltbot) is the open-source personal AI assistant that took the developer community by storm, becoming one of the fastest-growing GitHub repositories ever with over 100,000 stars. Unlike traditional chatbots that just respond to prompts, OpenClaw is an AI agent that can actually execute tasks: browse the web, manage files, run terminal commands, send messages, and remember everything about you indefinitely.

In this guide, we'll walk through self-hosting OpenClaw on your own machine and setting up Discord integration so you can interact with your AI agent through Discord DMs or server channels.

{{% tldr %}}
**What You'll Build:**
- Self-hosted OpenClaw AI agent running on your own hardware
- Discord bot integration for chatting with your AI from anywhere
- Persistent memory that remembers all your conversations and preferences

**Quick Setup:**
1. Install OpenClaw:
   ```bash
   npm install -g openclaw@latest
   ```
2. Run the onboarding wizard:
   ```bash
   openclaw onboard --install-daemon
   ```
3. Create a Discord bot and configure the token
4. Start the gateway:
   ```bash
   openclaw gateway --port 18789
   ```
5. Access the dashboard at `http://localhost:18789`

**Resources:**
- <a href="https://docs.openclaw.ai/" target="_blank">OpenClaw Documentation</a>
- <a href="https://github.com/openclaw/openclaw" target="_blank">OpenClaw GitHub Repository</a>
- <a href="https://discord.gg/openclaw" target="_blank">OpenClaw Community Discord</a>
{{% /tldr %}}

## Why Self-Host an AI Agent?

Cloud-based AI assistants are convenient, but they come with significant trade-offs. Your conversations are stored on someone else's servers, you're limited by API quotas and subscription tiers, and you have no control over how your data is used. Self-hosting OpenClaw changes all of that.

With OpenClaw running on your own machine, your data stays private. The AI remembers your preferences, ongoing projects, and personal details indefinitely, all stored locally. It can access your local files, run commands on your system, and integrate with services that cloud-based assistants simply cannot reach.

The real power comes from OpenClaw's proactive nature. Unlike ChatGPT or Claude that wait for your input, OpenClaw can reach out to you: morning briefings, reminders, alerts when something you care about happens. Combined with Discord integration, you get an AI assistant that's always available in your pocket.

## What is OpenClaw?

{{< link href="https://github.com/openclaw/openclaw" >}}OpenClaw{{< /link >}} is an open-source, self-hosted AI agent created by Peter Steinberger (founder of PSPDFKit). It's essentially "Claude with hands" since an AI that doesn't just chat but actually does things on your behalf.

The project was originally released as Clawdbot in late 2025, then renamed to Moltbot following a trademark request from Anthropic, and finally settled on OpenClaw. Despite the name changes, the core vision remains: give everyone access to a powerful, private AI assistant that runs entirely on their own hardware.

**Key Features:**
- **Multi-Channel Support**: Chat via Discord, WhatsApp, Telegram, Slack, Signal, or iMessage
- **Full System Access**: Browser automation, file read/write, shell commands, and cron jobs
- **Persistent Memory**: Remembers everything, conversations, preferences, and context from weeks ago
- **Proactive Communication**: Can reach out to you with briefings, reminders, and alerts
- **Local-First Privacy**: All data stored on your machine, never sent to third parties
- **Extensible Architecture**: Add custom tools and integrations as needed
{{< image "self_hosting_openclaw_ai_agent/openclaw_ss.webp" "Chat with OpenClaw" >}}

## Prerequisites

Before starting, ensure you have the following:

**Node.js v22 or higher**: OpenClaw requires a modern Node.js runtime. Check your version:
```bash
node --version
```

If you need to install or update Node.js:

**Windows/macOS**: Download from {{< link href="https://nodejs.org/" >}}nodejs.org{{< /link >}} (use the Current version, not LTS)

**Linux (Ubuntu/Debian)**:
```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**An LLM API Key**: OpenClaw works best with Anthropic's Claude API, but also supports OpenAI, Google, and local models via Ollama. Have your API key ready.

**A Discord Account**: For the Discord bot integration covered in this guide.

## Step 1: Install OpenClaw

Installing OpenClaw is straightforward with npm. Open your terminal and run:

```bash
# Global installation (recommended)
npm install -g openclaw@latest

# OR local installation (if you prefer not to install globally)
mkdir openclaw
cd openclaw
npm init -y
npm install openclaw@latest
```
{{< image "self_hosting_openclaw_ai_agent/npm_init_command.webp" "npm init command for local installation" >}}

{{< image "self_hosting_openclaw_ai_agent/install_openclaw.webp" "Installing OpenClaw" >}}

For global installation, use `npm install -g` which makes OpenClaw available system-wide. If you prefer local installation, omit the `-g` flag and OpenClaw will be installed in your current project directory.

Verify the installation:
```bash
# If installed globally
openclaw --version

# If installed locally
npx openclaw --version
```

You should see the version number confirming OpenClaw is installed correctly.

{{< image "self_hosting_openclaw_ai_agent/openclaw_version_check.webp" "OpenClaw Version Check" >}}

### Building from Source (Alternative)

If you prefer to build from source for development or customization:

```bash
git clone https://github.com/openclaw/openclaw.git
cd openclaw
pnpm install
pnpm ui:build
pnpm build
```

## Step 2: Run the Onboarding Wizard

OpenClaw includes an interactive onboarding wizard that configures your LLM provider, messaging channels, and system service. Run:

```bash
# If installed globally
openclaw onboard --install-daemon

# If installed locally
npx openclaw onboard --install-daemon
```

{{< image "self_hosting_openclaw_ai_agent/openclaw_onboard.webp" "OpenClaw Onboarding Wizard" >}}

The wizard will guide you through:

1. **LLM Provider Setup**: Enter your Anthropic API key (recommended) or configure an alternative provider
2. **Gateway Token**: Generates a security token for accessing the dashboard
3. **Service Installation**: Installs OpenClaw as a launchd (macOS) or systemd (Linux) user service for automatic startup

The `--install-daemon` flag ensures OpenClaw starts automatically when your system boots, keeping your AI agent always available.

## Step 3: Create a Discord Bot

To interact with OpenClaw through Discord, you'll need to create a bot in the Discord Developer Portal.

### Create the Application

1. Go to the {{< link href="https://discord.com/developers/applications" >}}Discord Developer Portal{{< /link >}}
2. Click **New Application** and give it a name (e.g., "My OpenClaw Bot")

{{< image "how_to_set_up_and_test_discord_bot_webhook/create_new_app.webp" "Create new application" >}}
{{< image "how_to_set_up_and_test_discord_bot_webhook/create_new_app_name_window.webp" "Name your application" >}}

3. Navigate to **Bot** in the left sidebar
4. Click **Add Bot** and confirm with "Yes, do it!"

{{< image "how_to_set_up_and_test_discord_bot_webhook/bot_inside_app.webp" "Add a bot to your application" >}}

### Copy the Bot Token

Under the Bot settings, click **Reset Token** and copy the generated token. Store this securely - you can use the `DISCORD_BOT_TOKEN` environment variable or add it directly to your config file.

{{< image "how_to_set_up_and_test_discord_bot_webhook/bot_token.webp" "Copy your bot token" >}}

**Important**: Never share your bot token publicly. Anyone with this token can control your bot.

### Enable Required Intents

Still in the Bot settings, scroll down to **Privileged Gateway Intents** and enable:

- **Message Content Intent** (Essential): Required to read message text in most guilds. Without it, you'll see "Used disallowed intents" error.
- **Server Members Intent** (Recommended): Enables member/user lookups and allowlist matching.

{{< image "self_hosting_openclaw_ai_agent/discord_intents.webp" "Enable Discord Intents" >}}

### Generate the Invite URL

Navigate to **OAuth2** > **URL Generator** and select:

**Scopes:**
- `bot`
- `applications.commands` (for slash commands)

**Bot Permissions (baseline):**
- View Channels
- Send Messages
- Read Message History
- Embed Links
- Attach Files
- Add Reactions (optional but recommended)
- Use External Emojis/Stickers (optional)

Avoid selecting Administrator unless you're debugging.

Copy the generated URL and open it in your browser to invite the bot to your Discord server.

{{< image "how_to_set_up_and_test_discord_bot_webhook/oauth_window.png" "OAuth2 URL Generator" >}}

### Get Your Discord IDs

Enable Developer Mode to copy IDs easily:

1. In Discord, go to **User Settings** > **Advanced** and enable **Developer Mode**

{{< image "how_to_set_up_and_test_discord_bot_webhook/on_developer_mode.webp" "Enable Developer Mode" >}}

2. Right-click your server name and select **Copy Server ID** (this is your Guild ID)

{{< image "how_to_set_up_and_test_discord_bot_webhook/copy_server_id.webp" "Copy server ID" >}}

3. Right-click on a channel and select **Copy Channel ID**

{{< image "how_to_set_up_and_test_discord_bot_webhook/copy_channel_id.webp" "Copy channel ID" >}}

4. Right-click your username and select **Copy User ID**

## Step 4: Configure OpenClaw for Discord

OpenClaw's configuration lives in `~/.openclaw/openclaw.json`. You can also use environment variables for sensitive values like tokens.

### Using Environment Variable (Recommended)

Set your Discord bot token as an environment variable:

```bash
export DISCORD_BOT_TOKEN=your_token_here
```

### Configuration File

Open the config file in your favorite editor:

```bash
nano ~/.openclaw/openclaw.json
```

Add the Discord configuration:

```json
{
  "llm": {
    "provider": "anthropic",
    "apiKey": "YOUR_ANTHROPIC_API_KEY"
  },
  "channels": {
    "discord": {
      "enabled": true,
      "token": "YOUR_DISCORD_BOT_TOKEN",
      "dm": {
        "enabled": true,
        "policy": "pairing"
      },
      "guilds": {
        "YOUR_GUILD_ID": {
          "users": ["YOUR_USER_ID"],
          "requireMention": true,
          "channels": {
            "general": {
              "allow": true,
              "requireMention": true
            }
          }
        }
      }
    }
  }
}
```

{{< image "self_hosting_openclaw_ai_agent/openclaw_config.webp" "OpenClaw Configuration" >}}

Replace the placeholders:
- `YOUR_ANTHROPIC_API_KEY`: Your Anthropic API key
- `YOUR_DISCORD_BOT_TOKEN`: The bot token from Step 3 (or use env variable)
- `YOUR_GUILD_ID`: Your Discord server ID
- `YOUR_USER_ID`: Your Discord user ID

{{< image "self_hosting_openclaw_ai_agent/add_apikey.webp" "OpenClaw ApiKey" >}}

### Key Configuration Options

**DM Policy Options** (`channels.discord.dm.policy`):
- `pairing` (default): Requires approval via `openclaw pairing approve discord <code>`
- `allowlist`: Only users in `allowFrom` list can DM
- `open`: Anyone can DM the bot
- `disabled`: DMs are turned off

**Guild Settings**:
- `requireMention`: Bot only responds when @mentioned (recommended for shared channels)
- `users`: Per-guild user allowlist
- `channels`: Define per-channel rules with `allow`, `requireMention`, `users`
- `historyLimit`: Number of context messages from guild (default: 20)

**Other Settings**:

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Setting</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Purpose</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Default</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><code>textChunkLimit</code></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Message split size</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">2000 chars</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><code>maxLinesPerMessage</code></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Soft line limit</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">17</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><code>mediaMaxMb</code></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Upload file size cap</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">8 MB</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><code>historyLimit</code></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Context messages from guild</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">20</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><code>groupPolicy</code></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Guild channel access control</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">allowlist</td>
</tr>
</tbody>
</table>

## Step 5: Start the Gateway

With configuration complete, start the OpenClaw gateway:

```bash
# If installed globally
openclaw gateway --port 18789

# If installed locally
npx openclaw gateway --port 18789
```

{{< image "self_hosting_openclaw_ai_agent/openclaw_running_on_18789.webp" "OpenClaw Gateway Running on Port 18789" >}}

You'll see output indicating the gateway is running. Open your browser and navigate to `http://localhost:18789` to access the OpenClaw dashboard.

If you installed the daemon during onboarding, the gateway starts automatically. Check its status with:

```bash
# macOS
launchctl list | grep openclaw

# Linux
systemctl --user status openclaw
```

## Step 6: Test Discord Integration

With the gateway running, test your Discord integration:

1. Open Discord and navigate to your server
2. In any channel where the bot has access, mention it: `@YourBotName hello`
3. The bot should respond through OpenClaw

You can also DM the bot directly for private conversations. If using the default `pairing` policy, OpenClaw will ask you to approve a pairing code for security:

{{< image "self_hosting_openclaw_ai_agent/pairing_code.webp" "OpenClaw Pairing Code" >}}

```bash
openclaw pairing approve discord <code>
```

{{< image "self_hosting_openclaw_ai_agent/commad_pairing_approve_discord.webp" "Approve Discord Pairing Code" >}}

{{< image "self_hosting_openclaw_ai_agent/chat_with_openclaw.webp" "Discord Bot Response" >}}

### Troubleshooting Discord Integration

If the bot doesn't respond, run diagnostics:

```bash
# If installed globally
openclaw doctor
openclaw channels status --probe

# If installed locally
npx openclaw doctor
npx openclaw channels status --probe
```

{{< image "self_hosting_openclaw_ai_agent/openclaw_doctor.webp" "OpenClaw Doctor Command" >}}
{{< image "self_hosting_openclaw_ai_agent/status_probe.webp" "OpenClaw Channels Status Probe" >}}

{{< image "self_hosting_openclaw_ai_agent/chat_with_openclaw.webp" "Chat with OpenClaw" >}}

**Bot connects but doesn't reply:**
- Verify **Message Content Intent** is enabled in the Discord Developer Portal
- Confirm bot has channel permissions (View Channels, Send Messages, Read Message History)
- Check if `requireMention` is set - make sure you're @mentioning the bot
- Review guild/channel allowlists in your config

**"Used disallowed intents" error:**
- Enable both **Message Content Intent** and **Server Members Intent** in the Developer Portal
- Restart the gateway after enabling intents

**DM access issues:**
- Confirm `dm.enabled` isn't set to `false`
- If using `pairing` policy, approve the pairing code when prompted
- If using `allowlist` policy, verify your user ID is in the `allowFrom` list

**Mention-gating problems:**
- `requireMention` must be under `guilds` or `channels` config, not top-level Discord settings
- Ensure you're using the correct @mention format for your bot

## What You Can Do with OpenClaw

With your self-hosted OpenClaw running and Discord integration active, you have a powerful AI assistant at your fingertips:

**Daily Briefings**: Ask OpenClaw to summarize your emails, calendar, or news every morning and send it to your Discord DMs.

**File Management**: "Find all PDFs I downloaded last week and organize them by topic" - OpenClaw can browse your filesystem and execute commands.

**Web Research**: OpenClaw can browse the web, extract information, and compile reports on any topic you're researching.

**Automation**: Set up cron jobs through OpenClaw to automate repetitive tasks, from backups to data processing.

**Proactive Alerts**: Configure OpenClaw to monitor things you care about and alert you on Discord when something happens.

**Long-Term Memory**: Unlike cloud AI services, OpenClaw remembers everything. Reference a conversation from weeks ago, and it knows exactly what you're talking about.

## Conclusion

Self-hosting OpenClaw gives you a personal AI agent that's genuinely yours. It runs on your hardware, stores data locally, and integrates with your life through Discord and other messaging platforms. The persistent memory means it gets better over time, learning your preferences and remembering your context.

Whether you're automating workflows, managing information, or just wanting an AI that remembers who you are, OpenClaw delivers capabilities that cloud services simply cannot match. The setup requires some technical comfort, but the result is worth it: a powerful, private AI assistant that works for you, not for a subscription service.
