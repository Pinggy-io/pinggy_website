---
title: "x402 Explained: How AI Agents Pay for an API Call Over HTTP 402"
description: "How the x402 protocol turns HTTP 402 into pay-per-request API billing with no API key: the three headers, the signed USDC transfer, the facilitator, a working Express server, and how to test it."
date: 2026-11-13T20:30:00+05:30
lastmod: 2026-11-13T20:30:00+05:30
draft: false
tags: ["x402", "AI agents", "API", "Node.js", "developer tools"]
og_image: "images/x402_http_402_pay_per_request_apis/x402_http_402_pay_per_request_apis_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIng0MDIgRXhwbGFpbmVkOiBIb3cgQUkgQWdlbnRzIFBheSBmb3IgYW4gQVBJIENhbGwgT3ZlciBIVFRQIDQwMiIsCiAgImRlc2NyaXB0aW9uIjogIkhvdyB0aGUgeDQwMiBwcm90b2NvbCB0dXJucyBIVFRQIDQwMiBpbnRvIHBheS1wZXItcmVxdWVzdCBBUEkgYmlsbGluZyB3aXRoIG5vIEFQSSBrZXk6IHRoZSB0aHJlZSBoZWFkZXJzLCB0aGUgc2lnbmVkIFVTREMgdHJhbnNmZXIsIHRoZSBmYWNpbGl0YXRvciwgYSB3b3JraW5nIEV4cHJlc3Mgc2VydmVyLCBhbmQgaG93IHRvIHRlc3QgaXQuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL3g0MDJfaHR0cF80MDJfcGF5X3Blcl9yZXF1ZXN0X2FwaXMveDQwMl9odHRwXzQwMl9wYXlfcGVyX3JlcXVlc3RfYXBpc19iYW5uZXIud2VicCIsCiAgImF1dGhvciI6ICAgIHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIgfSwKICAicHVibGlzaGVyIjogeyAiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwgIm5hbWUiOiAiUGluZ2d5IiwgInVybCI6ICJodHRwczovL3BpbmdneS5pbyIgfSwKICAiZGF0ZVB1Ymxpc2hlZCI6ICIyMDI2LTExLTEzVDIwOjMwOjAwKzA1OjMwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTEtMTNUMjA6MzA6MDArMDU6MzAiLAogICJtYWluRW50aXR5T2ZQYWdlIjogeyAiQHR5cGUiOiAiV2ViUGFnZSIsICJAaWQiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vYmxvZy94NDAyX2h0dHBfNDAyX3BheV9wZXJfcmVxdWVzdF9hcGlzLyIgfSwKICAiYXJ0aWNsZVNlY3Rpb24iOiAiQVBJcyIsCiAgInByb2ZpY2llbmN5TGV2ZWwiOiAiSW50ZXJtZWRpYXRlIiwKICAia2V5d29yZHMiOiAieDQwMiwgSFRUUCA0MDIgUGF5bWVudCBSZXF1aXJlZCwgcGF5IHBlciByZXF1ZXN0IEFQSSwgYWdlbnRpYyBwYXltZW50cywgQnJhdmUgU2VhcmNoIEFQSSB4NDAyLCBVU0RDIG9uIEJhc2UsIEVJUC0zMDA5LCB4NDAyIGZhY2lsaXRhdG9yLCBAeDQwMi9leHByZXNzIiwKICAiYWJvdXQiOiBbCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIng0MDIiLCAiZGVzY3JpcHRpb24iOiAiQW4gb3BlbiBwcm90b2NvbCB0aGF0IHVzZXMgdGhlIEhUVFAgNDAyIHN0YXR1cyBjb2RlIHRvIGNoYXJnZSBmb3IgYSBzaW5nbGUgSFRUUCByZXF1ZXN0IHdpdGggYSBzaWduZWQgc3RhYmxlY29pbiBwYXltZW50LiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiSFRUUCA0MDIgUGF5bWVudCBSZXF1aXJlZCIsICJkZXNjcmlwdGlvbiI6ICJUaGUgSFRUUCBzdGF0dXMgY29kZSBhIHNlcnZlciByZXR1cm5zLCB3aXRoIGEgUEFZTUVOVC1SRVFVSVJFRCBoZWFkZXIsIHdoZW4gYSByZXF1ZXN0IG5lZWRzIHBheW1lbnQuIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJFSVAtMzAwOSIsICJkZXNjcmlwdGlvbiI6ICJUaGUgdHJhbnNmZXJXaXRoQXV0aG9yaXphdGlvbiBzdGFuZGFyZCB0aGF0IGxldHMgYSB0aGlyZCBwYXJ0eSBzdWJtaXQgYSBVU0RDIHRyYW5zZmVyIHRoZSB0b2tlbiBob2xkZXIgc2lnbmVkIG9mZi1jaGFpbi4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIng0MDIgZmFjaWxpdGF0b3IiLCAiZGVzY3JpcHRpb24iOiAiQSBzZXJ2aWNlIHRoYXQgdmVyaWZpZXMgYSBzaWduZWQgcGF5bWVudCBhbmQgc2V0dGxlcyBpdCBvbi1jaGFpbiBvbiBiZWhhbGYgb2YgYW4gQVBJIHNlcnZlci4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIkJyYXZlIFNlYXJjaCBBUEkiLCAiZGVzY3JpcHRpb24iOiAiQSBzZWFyY2ggQVBJIHRoYXQgYWNjZXB0cyB4NDAyIHBheW1lbnRzIG9mICQwLjAwNSBwZXIgcmVxdWVzdCBpbiBVU0RDIG9uIEJhc2UuIiB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "x402_http_402_pay_per_request_apis/x402_http_402_pay_per_request_apis_banner.webp" "A flow of one paid API call: GET /weather, 402 Payment Required, $0.005 in USDC, 200 OK" >}}

Send a plain `curl` to `https://search.agent.s.brave.app/res/v1/llm/context?q=rust` and you get back `HTTP/2 402` with an empty body and one interesting header, `payment-required`. Base64-decode it and it says the request costs 5000 units of USDC on Base, which is $0.005, and names the wallet to pay. Sign that payment, retry the same request with it attached, and Brave Search answers. There is no API key anywhere in that exchange. That is <a href="https://www.x402.org/" target="_blank">x402</a>, and since November 12, 2026 the <a href="https://brave.com/blog/search-api-agentic-payments/" target="_blank">Brave Search API accepts it</a>.

{{% tldr %}}
1. **x402 is a retry loop built on HTTP 402.** The server answers an unpaid request with `402` and a `PAYMENT-REQUIRED` header. The client retries with `PAYMENT-SIGNATURE`. The server replies `200` with a `PAYMENT-RESPONSE` receipt. All three headers are base64 JSON.
2. **The payment is a signature, not a transaction.** The buyer signs an EIP-3009 `transferWithAuthorization` for USDC. A facilitator submits it on-chain and pays the gas. It can't change the amount or the recipient.
3. **Selling takes about 30 lines of Express.** `@x402/express` 2.31.0 wraps a route with a price. `curl http://localhost:4021/weather` then returns the 402 challenge shown below.
4. **Behind a tunnel or any TLS-terminating proxy, set `trust proxy`.** Without it the middleware advertises your paid URL as `http://`, because it builds the URL from `req.protocol`.
5. **The costs are real.** Buyers need a funded crypto wallet, the Coinbase facilitator charges $0.001 per settlement after 1,000 free ones a month, and that fee puts a floor under what you can sell one call for.
{{% /tldr %}}

## What Brave's 402 response actually contains

Here is the decoded `payment-required` header from that Brave request, captured on November 13, 2026. I trimmed the long `description` and dropped the `tags` and `extensions` fields; everything else is as it came back.

```json
{
  "x402Version": 2,
  "error": "Payment required",
  "resource": {
    "url": "https://search.agent.s.brave.app/res/v1/llm/context?q=rust",
    "description": "Web search that returns page text ready for an LLM prompt. ...",
    "mimeType": "application/json",
    "serviceName": "Brave Search"
  },
  "accepts": [
    {
      "scheme": "exact",
      "network": "eip155:8453",
      "amount": "5000",
      "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
      "payTo": "0xFFa76529d7e733C7671190b374819d8eDA2b9D04",
      "maxTimeoutSeconds": 300,
      "extra": { "assetTransferMethod": "eip3009", "name": "USD Coin", "version": "2" }
    }
  ]
}
```

Read `accepts` as a price tag. `network` is a CAIP-2 chain ID, and `eip155:8453` is Base mainnet. `asset` is the USDC contract on Base. USDC has six decimals, so `amount: "5000"` is $0.005. `payTo` is Brave's wallet. `maxTimeoutSeconds` says the offer is good for 300 seconds, after which you fetch a fresh 402 rather than pay a stale one. `scheme: "exact"` means "pay exactly this much", as opposed to the metered schemes covered later.

Brave charges the same $0.005 on every path it sells: web, news, image, video, local and the LLM Context endpoint. The service also publishes an <a href="https://search.agent.s.brave.app/llms.txt" target="_blank">llms.txt</a> written for the agent doing the buying, which is a nice touch. It spells out the retry loop and every error the proxy can return.

{{< image "x402_http_402_pay_per_request_apis/brave_search_x402_docs.webp" "Brave Search API documentation page titled Agent payments, describing stablecoin micropayments instead of an API key" >}}

*Screenshot: {{< link href="https://api-dashboard.search.brave.com/documentation/guides/agent-payments" >}}Brave Search API docs{{< /link >}}, November 2026.*

## How one x402 request moves from 402 to 200

HTTP 402 has been in the spec since HTTP/1.1 in 1997, and <a href="https://www.rfc-editor.org/rfc/rfc9110.html#name-402-payment-required" target="_blank">RFC 9110</a> still lists it as "reserved for future use". Coinbase published x402 in May 2025 to give it a job, and the spec and SDKs now live in the <a href="https://github.com/x402-foundation/x402" target="_blank">x402-foundation/x402</a> repo (Apache-2.0, 6.8k stars as of November 13, 2026). The current version is V2, and V2 moved everything into three headers:

| Header | Direction | Carries |
|---|---|---|
| `PAYMENT-REQUIRED` | server -> client, with the `402` | What it costs, in which token, on which chain, to which address |
| `PAYMENT-SIGNATURE` | client -> server, on the retry | The signed payment and the offer it accepts |
| `PAYMENT-RESPONSE` | server -> client, with the `200` | The settlement result, including the transaction hash |

V1 used a single `X-PAYMENT` header. Brave's proxy ignores it, so an old client just keeps getting the cold 402.

There is a third party in the exchange. The API server usually doesn't talk to a blockchain itself. It hands the signed payment to a **facilitator**, a service with two endpoints: `/verify` checks the signature and the buyer's balance without moving anything, and `/settle` submits the transfer on-chain. The full path is: client sends the request -> server returns 402 with the price -> client signs and retries -> server calls `/verify` -> server does the work -> server calls `/settle` -> client gets the 200 and the receipt.

{{< image "x402_http_402_pay_per_request_apis/x402_payment_sequence.webp" "Sequence diagram of an x402 payment: the client gets a 402 from the API server, retries with a signed payment, the server calls the facilitator to verify and settle on Base, then returns 200" >}}

*The client makes two HTTP requests. Everything on the right happens between them.*

The order of "work" and "settle" is the server's call. Brave verifies first, runs the search, and settles last, so a search that fails is never charged. The price of that choice is that a result can be computed and then withheld if settlement fails.

## What the client signs: a USDC transfer it never submits

This is the part that makes x402 different from "send me crypto, then I'll check". The buyer never broadcasts a transaction and never pays gas.

USDC implements <a href="https://eips.ethereum.org/EIPS/eip-3009" target="_blank">EIP-3009</a>, which adds a `transferWithAuthorization` function to the token contract. Anyone can call it, as long as they bring a signature from the token holder that authorizes that exact transfer. So the client signs a small typed message off-chain and puts it in the header. This is the decoded `PAYMENT-SIGNATURE` my test client sent (more on that client below):

```json
{
  "x402Version": 2,
  "payload": {
    "authorization": {
      "from": "0x4182f76095fF89c5Cd020CBbB997572Ed7e946f8",
      "to": "0x64b079Ef663F2F28C0c7C6b30912ca1f8CC3A3d9",
      "value": "5000",
      "validAfter": "0",
      "validBefore": "1794583927",
      "nonce": "0x39c0fc781c4512307dbc1868ceefd6077ba6cc15e23fb4a4b1c43faf57de1f14"
    },
    "signature": "0x2a90181ae013b988...c537ca1b"
  },
  "accepted": { "scheme": "exact", "network": "eip155:84532", "amount": "5000", "...": "..." }
}
```

Three fields do the security work. `to` and `value` are covered by the signature, so the facilitator can submit the transfer but can't redirect it or raise the amount. `validBefore` is a Unix timestamp about 300 seconds out, matching `maxTimeoutSeconds`, so an unspent authorization dies on its own. `nonce` is 32 random bytes that the USDC contract records once used, so the same header can't be replayed for a second payout.

The facilitator pays the gas and broadcasts. According to the <a href="https://github.com/x402-foundation/x402/blob/main/specs/schemes/exact/scheme_exact_evm.md" target="_blank">exact scheme spec</a>, it checks five things at `/verify`: the signature recovers to `from`, the balance covers the amount, the amount and time window match the offer, the token and network match, and a simulated `transferWithAuthorization` succeeds. Tokens without EIP-3009 go through Permit2 instead, which works for any ERC-20 but needs a one-time approval.

## Sell an endpoint: a paid Express route in 30 lines

I ran this on Node v22.23.4 with `@x402/express`, `@x402/core` and `@x402/evm` at 2.31.0 and Express 5.3.0.

```bash
mkdir x402-demo && cd x402-demo
npm init -y && npm pkg set type=module
npm install express @x402/express @x402/core @x402/evm
```

`server.js` puts a $0.005 price on `GET /weather`, on the Base Sepolia testnet so no real money is involved:

```js
import express from "express";
import { paymentMiddleware, x402ResourceServer } from "@x402/express";
import { ExactEvmScheme } from "@x402/evm/exact/server";
import { HTTPFacilitatorClient } from "@x402/core/server";

const payTo = process.env.PAY_TO;            // your wallet address
const network = "eip155:84532";              // Base Sepolia testnet

const facilitator = new HTTPFacilitatorClient({
  url: "https://x402.org/facilitator",       // testnet only
});

const app = express();

app.use(
  paymentMiddleware(
    {
      "GET /weather": {
        accepts: [{ scheme: "exact", price: "$0.005", network, payTo }],
        description: "Current weather for one city",
        mimeType: "application/json",
      },
    },
    new x402ResourceServer(facilitator).register(network, new ExactEvmScheme()),
  ),
);

app.get("/weather", (req, res) => {
  res.json({ city: req.query.city ?? "Kolkata", tempC: 27, sky: "haze" });
});

app.listen(4021, () => console.log("listening on http://localhost:4021"));
```

Start it with any address you control as `PAY_TO` (a throwaway one is fine on testnet) and hit the route:

```bash
PAY_TO=0x64b079Ef663F2F28C0c7C6b30912ca1f8CC3A3d9 node server.js
curl -i 'http://localhost:4021/weather?city=Pune'
```

```
HTTP/1.1 402 Payment Required
Content-Type: application/json; charset=utf-8
PAYMENT-REQUIRED: eyJ4NDAyVmVyc2lvbiI6MiwiZXJyb3IiOiJQYXltZW50IHJlcXVpcmVkIiwicmVzb3VyY2UiOnsi...
Cache-Control: no-store

{"error":"Payment required"}
```

Pipe that header through `base64 -d` and it has the same shape as Brave's: `amount` is `"5000"`, `network` is `eip155:84532`, and `asset` is `0x036CbD53842c5426634e7929541eC2318f3dCF7e`, the testnet USDC contract. You wrote `"$0.005"` and the middleware worked out the token and the units. Routes you don't list in the config, like a health check, stay free.

Notice what the server does not have: a user table, a key store, a billing page, a Stripe webhook. That is the pitch for an indie API. Whether your customers want to pay this way is a separate question, and I'll get to it.

{{< image "x402_http_402_pay_per_request_apis/api_key_billing_vs_x402.webp" "Two columns comparing API key billing, where the buyer creates an account, adds a card and stores a key, with x402, where the buyer reads the 402 price and signs a USDC payment but needs a funded wallet" >}}

## Pay for it from a client

The buyer side is a `fetch` wrapper that catches the 402, signs, and retries:

```bash
npm install @x402/fetch viem
```

```js
import { wrapFetchWithPayment, x402Client } from "@x402/fetch";
import { registerExactEvmScheme } from "@x402/evm/exact/client";
import { privateKeyToAccount } from "viem/accounts";

const account = privateKeyToAccount(process.env.BUYER_KEY);
const client = new x402Client();
registerExactEvmScheme(client, { signer: account });

const payFetch = wrapFetchWithPayment(fetch, client);
const res = await payFetch(process.argv[2]);

console.log(res.status, await res.text());
console.log("PAYMENT-RESPONSE:", res.headers.get("payment-response"));
```

I ran it with a freshly generated key that held no testnet USDC, to see how far it gets:

```
$ BUYER_KEY=0x... node buyer.js 'http://localhost:4021/weather?city=Pune'
402 {"error":"invalid_exact_evm_insufficient_balance"}
PAYMENT-RESPONSE: null
```

That is the whole loop working up to the money. The client read the challenge, signed the authorization shown earlier, and retried; the server passed it to the facilitator; `/verify` looked at the wallet's balance on Base Sepolia and said no. The second 402 carries the reason in its own `PAYMENT-REQUIRED` header, in the `error` field. To get the 200 you need testnet USDC in the buyer wallet, which <a href="https://faucet.circle.com/" target="_blank">Circle's faucet</a> hands out for Base Sepolia. I did not get a settled payment in this run, so teh `PAYMENT-RESPONSE` receipt above is the one piece I'm describing from the spec rather than from my terminal.

If you'd rather not write code to buy something, Stripe's <a href="https://github.com/stripe/purl" target="_blank">purl</a> is a curl-shaped CLI for paid requests. `purl inspect <url>` prints the payment requirements, `--dry-run` previews a payment, and `--max-amount 5000` caps what it will spend in base units. Brave's docs use it for their quickstart. It installs with `brew install stripe/purl/purl` or from source with Cargo; I haven't run it here.

## Test a paid endpoint from outside your machine

Everything so far ran on localhost. The moment you want a second machine in the loop - an agent in a cloud sandbox, a teammate's client, a hosted tool that should call your endpoint - it needs a public HTTPS URL. A [Pinggy](https://pinggy.io) tunnel gives you one without deploying:

```bash
ssh -p 443 -R0:localhost:4021 free.pinggy.io
```

It prints an `http://` and an `https://` address ending in `.run.pinggy-free.link`, and requests to either one come down the SSH connection to port 4021. The buyer then runs `node buyer.js https://<your-pinggy-url>/weather?city=Pune`.

There is one thing to fix first, and it applies to any reverse proxy, not just a tunnel. The Express adapter builds the `resource.url` in the challenge like this:

```js
getUrl() {
  return `${this.req.protocol}://${this.req.headers.host}${this.req.originalUrl}`;
}
```

TLS ends at the tunnel, so your server sees plain HTTP and `req.protocol` is `http`. I couldn't open a tunnel from the sandbox I wrote this in, so I checked it by replaying the headers a Pinggy HTTP tunnel sends (it adds `X-Forwarded-Proto` by default) against the local server:

```bash
curl -si -H 'Host: abc123.run.pinggy-free.link' -H 'X-Forwarded-Proto: https' \
  'http://localhost:4021/weather?city=Pune'
```

The decoded challenge advertised `http://abc123.run.pinggy-free.link/weather?city=Pune`. The host is right and the scheme is wrong. One line fixes it:

```js
const app = express();
app.set("trust proxy", "loopback");   // believe X-Forwarded-Proto from the local tunnel client
```

With that, the same request advertises `https://abc123.run.pinggy-free.link/weather?city=Pune`. `"loopback"` is the right value here because the tunnel client delivers requests from 127.0.0.1; behind nginx or a load balancer, name that proxy's address instead of trusting everyone.

Does the wrong scheme break the payment? Not in anything I tested: the signature covers the amount and recipient, not the URL. But the client echoes `resource` back in its payload, logs it, and a discovery index would list it, so buyers end up holding a link to the plain HTTP version of something they pay for. Fix it before anyone else sees the endpoint.

{{< image "x402_http_402_pay_per_request_apis/x402_server_through_pinggy_tunnel.webp" "A buyer calls a Pinggy HTTPS URL, the request travels down an SSH connection to an Express server on localhost:4021 with an X-Forwarded-Proto header, and the server calls the x402.org facilitator" >}}

*TLS ends at the tunnel, so the server needs `trust proxy` to advertise an https:// URL.*

Two smaller things. A free Pinggy tunnel lasts 60 minutes and gets a new random URL each time, which is fine for a test and wrong for anything an agent should find again. And the tunnel only carries the buyer's requests: the server's calls to the facilitator go out over your normal connection.

## Going to mainnet: facilitators, fees, and the price floor

The `x402.org` facilitator is for testnets only. For real USDC you pick a production one and change two values: the facilitator URL, and `network` to `eip155:8453`.

The default choice is Coinbase's, at `https://api.cdp.coinbase.com/platform/v2/x402`. Per <a href="https://docs.cdp.coinbase.com/x402/seller/facilitator" target="_blank">its docs</a> as of November 13, 2026: it needs a CDP API key, the first 1,000 on-chain settlements a month are free, each one after that costs $0.001, and `/verify` calls are always free. It screens payments against OFAC and KYT lists and declines flagged addresses. So "no accounts" describes the buyer's side. The seller still signs up with somebody, unless they run their own facilitator, which is what Brave did.

That $0.001 is why x402 pricing has a floor. On a $0.005 call the facilitator takes 20% once you're past the free tier. On a $0.0005 call it would take 200%. Brave's llms.txt says this out loud: Autosuggest and Spellcheck are not for sale over x402 because they "cost less than the fee a facilitator takes for settling one payment".

The answer to that is the other two schemes in the spec. `upto` lets the buyer authorize a ceiling and the seller settle the real usage under it, which fits token-metered LLM calls. `batch-settlement` puts funds in escrow and settles many signed vouchers in one transaction. Both are newer than `exact`, and I haven't tested either.

## Where x402 is awkward

Every buyer needs a wallet holding USDC on the right chain. For an agent whose operator already set that up, paying is one function call. For a human developer who wanted to try your API, it is a much bigger ask than pasting a card number, and you will lose most of them there.

Settlement adds latency. A paid request waits on a facilitator round trip for `/verify` and, depending on the order the server chose, an on-chain confirmation before the response is released. Base is fast, but this is not free the way checking an API key in memory is.

There is no refund, dispute or chargeback in the protocol. A transfer that settled is settled. If your endpoint returns garbage after taking the money, the buyer's only recourse is to stop calling you. That cuts both ways: sellers recieve funds with no chargeback risk.

And the volume so far is small money. Coinbase's own facilitator docs cite more than 100 million transactions and $28 million in volume, which works out to about 28 cents per payment on average. This is plumbing for cents-sized purchases, and it remains to be seen how much of that is agents buying things they need versus developers kicking the tyres.

None of that stops it being useful today for one case: an API that agents call, priced per request, run by someone who would rather not build billing. Brave fits. A side-project API might too.

## Try the loop yourself

The fastest way to see x402 with your own eyes costs nothing:

```bash
curl -si 'https://search.agent.s.brave.app/res/v1/web/search?q=rust' \
  | grep -i '^payment-required' | cut -d' ' -f2 | base64 -d
```

That prints Brave's live price tag as JSON. Then run the Express server above, decode its challenge the same way, and compare the two field by field. Once a funded testnet wallet turns your 402 into a 200, switching to mainnet is a facilitator URL and a chain ID.
