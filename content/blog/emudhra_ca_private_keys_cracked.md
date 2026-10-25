---
title: "An eMudhra Certificate Authority Signed Its Intermediates With a Private Key of 4"
description: "Eight eMudhra intermediate CA certificates had private keys small enough to guess in under a second, sitting unnoticed in the web's trust chain for 17 months. How the recovery works, how browsers responded, and how to check your own systems."
date: 2026-10-21T11:00:00+05:30
lastmod: 2026-10-21T11:00:00+05:30
draft: false
tags: ["security", "TLS", "certificate authority", "Web Security", "cryptography"]
og_image: "images/emudhra_ca_private_keys_cracked/emudhra_ca_private_keys_cracked_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIkFuIGVNdWRocmEgQ2VydGlmaWNhdGUgQXV0aG9yaXR5IFNpZ25lZCBJdHMgSW50ZXJtZWRpYXRlcyBXaXRoIGEgUHJpdmF0ZSBLZXkgb2YgNCIsCiAgImRlc2NyaXB0aW9uIjogIkVpZ2h0IGVNdWRocmEgaW50ZXJtZWRpYXRlIENBIGNlcnRpZmljYXRlcyB0dXJuZWQgb3V0IHRvIGhhdmUgcHJpdmF0ZSBrZXlzIHNtYWxsIGVub3VnaCB0byBndWVzcyBpbiB1bmRlciBhIHNlY29uZCwgc2l0dGluZyB1bm5vdGljZWQgaW4gdGhlIHdlYidzIHRydXN0IGNoYWluIGZvciAxNyBtb250aHMuIEhlcmUgaXMgaG93IHRoZSByZWNvdmVyeSB3b3JrcyBhbmQgaG93IHRvIGNoZWNrIHlvdXIgb3duIHN5c3RlbXMuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL2VtdWRocmFfY2FfcHJpdmF0ZV9rZXlzX2NyYWNrZWQvZW11ZGhyYV9jYV9wcml2YXRlX2tleXNfY3JhY2tlZF9iYW5uZXIud2VicCIsCiAgImF1dGhvciI6ICAgIHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIgfSwKICAicHVibGlzaGVyIjogeyAiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwgIm5hbWUiOiAiUGluZ2d5IiwgInVybCI6ICJodHRwczovL3BpbmdneS5pbyIgfSwKICAiZGF0ZVB1Ymxpc2hlZCI6ICIyMDI2LTEwLTIxVDExOjAwOjAwKzA1OjMwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTAtMjFUMTE6MDA6MDArMDU6MzAiLAogICJtYWluRW50aXR5T2ZQYWdlIjogeyAiQHR5cGUiOiAiV2ViUGFnZSIsICJAaWQiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vYmxvZy9lbXVkaHJhX2NhX3ByaXZhdGVfa2V5c19jcmFja2VkLyIgfSwKICAiYXJ0aWNsZVNlY3Rpb24iOiAiU2VjdXJpdHkiLAogICJwcm9maWNpZW5jeUxldmVsIjogIkludGVybWVkaWF0ZSIsCiAgImtleXdvcmRzIjogImVNdWRocmEsIGNlcnRpZmljYXRlIGF1dGhvcml0eSwgcHJpdmF0ZSBrZXkgY29tcHJvbWlzZSwgZWxsaXB0aWMgY3VydmUsIFAtMzg0LCBUTFMsIHJvb3QgcHJvZ3JhbSwgTW96aWxsYSwgQ2hyb21lLCBPbmVDUkwsIENSTFNldCIsCiAgImFib3V0IjogWwogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJDZXJ0aWZpY2F0ZSBhdXRob3JpdHkiLCAiZGVzY3JpcHRpb24iOiAiQW4gb3JnYW5pemF0aW9uIHRydXN0ZWQgYnkgYnJvd3NlcnMgYW5kIG9wZXJhdGluZyBzeXN0ZW1zIHRvIGlzc3VlIFRMUyBjZXJ0aWZpY2F0ZXMuIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJFbGxpcHRpYyBjdXJ2ZSBwcml2YXRlIGtleSByZWNvdmVyeSIsICJkZXNjcmlwdGlvbiI6ICJEZXJpdmluZyBhIHByaXZhdGUgc2NhbGFyIGZyb20gYSBwdWJsaWMgcG9pbnQgd2hlbiB0aGUgc2NhbGFyIGlzIHNtYWxsIGVub3VnaCB0byBicnV0ZS1mb3JjZS4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIkNlcnRpZmljYXRlIHJldm9jYXRpb24iLCAiZGVzY3JpcHRpb24iOiAiTWVjaGFuaXNtcyBsaWtlIENSTFNldCBhbmQgT25lQ1JMIHRoYXQgYnJvd3NlcnMgdXNlIHRvIGRpc3RydXN0IGEgY2VydGlmaWNhdGUgd2l0aG91dCB3YWl0aW5nIGZvciBpdCB0byBleHBpcmUuIiB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "emudhra_ca_private_keys_cracked/emudhra_ca_private_keys_cracked_banner.webp" "A certificate chain from a root CA to a browser, with the intermediate certificate highlighted in red and labeled d = 4" >}}

On October 17, 2026, a researcher who goes by Wayne sent the same message to Apple, Google, Microsoft, Mozilla and eMudhra: he could sign arbitrary data with the private keys of eight of eMudhra's intermediate certificate authorities, the ones chained up to roots that ship in every major browser and operating system. He hadn't stolen a key or broken a hardware security module. He'd guessed it. One of the keys, a 384-bit elliptic curve private key that's supposed to look like a random 96-digit hex string, turned out to be the integer 4.

I pulled the proof files published at {{< link href="https://emudhra.we-have-a-problem.com/" >}}we-have-a-problem.com{{< /link >}}, reproduced the key recovery myself with plain OpenSSL, and worked through the timeline, cross-checking {{< link href="https://scotthelme.co.uk/eight-bits-of-trust-emudhras-ca-keys-cracked-in-milliseconds/" >}}Scott Helme's writeup{{< /link >}} against {{< link href="https://bugzilla.mozilla.org/show_bug.cgi?id=2083449" >}}Mozilla's bug thread{{< /link >}}, of how a top-tier, audited certificate authority ended up signing production CAs with keys you could find by counting on your fingers.

{{% tldr %}}
1. **Eight eMudhra intermediate CAs had private keys between 4 and 237**, recoverable from the public certificate alone by trying every small integer until one matched, a job that takes **well under a second per key** on an ordinary laptop.
2. The weak keys were generated on **April 30, 2025**, cross-signed by Sectigo and chained to roots trusted by every major browser, and **sat undetected in production for about 17 months** before Wayne reported them on October 17, 2026.
3. Six keys sign **TLS server certificates** and two sign **code-signing certificates**; Windows trusts the code-signing root directly, so a binary signed with one of those keys could look legitimately signed.
4. Browsers responded within hours using **revocation lists that ship independently of a software update** (Chrome's CRLSet, Mozilla's OneCRL), not by waiting for a new release, but anything that trusts an on-disk CA bundle without checking revocation, which is most non-browser software, is **not protected by that response**.
5. eMudhra attributes the flaw to a **key-generation ceremony script** that produced a second, weaker key pair by mistake, and the wrong one went into the certificate signing request because of similar key labels.
{{% /tldr %}}

## What a certificate authority's private key actually controls

Skip ahead if you already know this part: when you visit a site over HTTPS, your browser checks that the site's certificate was signed by a CA it trusts, directly or through a chain of intermediates. Browsers and operating systems ship a fixed list of trusted root CAs; a handful of audited organizations, eMudhra among them, are allowed to run intermediate CAs under those roots and sign certificates on their behalf.

The private key of an intermediate CA is not like a server's TLS key. A server key lets you impersonate one hostname. A CA key lets whoever holds it **mint a new, validly signed certificate for any hostname it wants**, as long as the issuing root is still trusted. That's the whole trust model: browsers don't re-verify who owns `stripe.com` on every visit, they verify that *a* trusted CA vouched for it. If a CA's signing key leaks, that vouching is worthless for anything signed with it.

eMudhra is one of those trusted CAs. It's an Indian digital-trust company whose roots, including `emSign Root TLS CA - G3` and `emSign Root CS CA - G3`, are built into Chrome, Firefox, Safari and Windows. Eight of its intermediates, used to issue both TLS and code-signing certificates, are the ones that turned out to be broken.

## The keys were small integers, not random numbers

An EC private key on the P-384 curve is a single integer, conventionally written as 96 hex digits (384 bits). It's supposed to be drawn uniformly at random from a space of roughly 2^384 possible values, so close to zero chance of collision and no feasible way to guess it. A certificate's public key is a point on the curve, computed as `d × G` where `d` is the private key and `G` is the curve's fixed generator point. Anyone can check that a given `d` produces the certificate's exact public point, but recovering `d` from the point alone is supposed to require solving the elliptic curve discrete logarithm problem, considered infeasible for a well-chosen key.

It's not infeasible when `d` itself is tiny. Here are the actual private key values for the eight affected intermediates, as published in the Mozilla bug and verified against the certificates eMudhra and researchers released:

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Intermediate CA</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Issued for</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Private key (d)</th>
</tr>
</thead>
<tbody>
<tr><td style="border:1px solid #ddd;padding:0.4em 0.4em;">EM DV TLS CA - G3B</td><td style="border:1px solid #ddd;padding:0.4em 0.4em;">TLS, domain validated</td><td style="border:1px solid #ddd;padding:0.4em 0.4em;">156</td></tr>
<tr><td style="border:1px solid #ddd;padding:0.4em 0.4em;">EM DV TLS CA - G3C</td><td style="border:1px solid #ddd;padding:0.4em 0.4em;">TLS, domain validated</td><td style="border:1px solid #ddd;padding:0.4em 0.4em;">230</td></tr>
<tr><td style="border:1px solid #ddd;padding:0.4em 0.4em;">EM EV TLS CA - G3B</td><td style="border:1px solid #ddd;padding:0.4em 0.4em;">TLS, extended validation</td><td style="border:1px solid #ddd;padding:0.4em 0.4em;">115</td></tr>
<tr><td style="border:1px solid #ddd;padding:0.4em 0.4em;">EM EV TLS CA - G3C</td><td style="border:1px solid #ddd;padding:0.4em 0.4em;">TLS, extended validation</td><td style="border:1px solid #ddd;padding:0.4em 0.4em;">56</td></tr>
<tr><td style="border:1px solid #ddd;padding:0.4em 0.4em;">EM OV TLS CA - G3B</td><td style="border:1px solid #ddd;padding:0.4em 0.4em;">TLS, organization validated</td><td style="border:1px solid #ddd;padding:0.4em 0.4em;">155</td></tr>
<tr><td style="border:1px solid #ddd;padding:0.4em 0.4em;">EM OV TLS CA - G3C</td><td style="border:1px solid #ddd;padding:0.4em 0.4em;">TLS, organization validated</td><td style="border:1px solid #ddd;padding:0.4em 0.4em;">4</td></tr>
<tr><td style="border:1px solid #ddd;padding:0.4em 0.4em;">EM OV CS CA - G3B</td><td style="border:1px solid #ddd;padding:0.4em 0.4em;">Code signing</td><td style="border:1px solid #ddd;padding:0.4em 0.4em;">66</td></tr>
<tr><td style="border:1px solid #ddd;padding:0.4em 0.4em;">EM OV CS CA - G3C</td><td style="border:1px solid #ddd;padding:0.4em 0.4em;">Code signing</td><td style="border:1px solid #ddd;padding:0.4em 0.4em;">237</td></tr>
</tbody>
</table>

I downloaded the proof bundle eMudhra published at `we-have-a-problem.com` and checked it myself. Each certificate comes with a detached signature made with its own private key, which lets anyone confirm the researcher actually controls the key rather than just claiming a number:

```bash
openssl x509 -in EM-DV-TLS-CA-G3B.crt.pem -noout -pubkey > extracted.pub
diff extracted.pub EM-DV-TLS-CA-G3B.pub.pem   # matches
openssl dgst -sha384 -verify EM-DV-TLS-CA-G3B.pub.pem \
  -signature EM-DV-TLS-CA-G3B.sig message.txt
# Verified OK
```

That confirms the claim is real, but it doesn't show the recovery itself. So I built a P-384 key the same way eMudhra's weak keys were shaped, an ASN.1 private key blob with `d` forced to the small integer 4, and recovered it from nothing but the resulting public key:

```bash
# write a P-384 private key whose scalar d is the raw integer we choose
cat > k.cnf <<'EOF'
asn1=SEQUENCE:k
[k]
v=INTEGER:1
priv=FORMAT:HEX,OCTETSTRING:000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004
p=EXPLICIT:0,OID:secp384r1
EOF
openssl asn1parse -genconf k.cnf -noout -out k.der
openssl ec -inform DER -in k.der -pubout -out target.pub

# brute force: try every small d, compare the derived public key to target.pub
for d in $(seq 1 255); do
  h=$(printf '%096x' "$d")
  sed "s/OCTETSTRING:.*/OCTETSTRING:$h/" k.cnf > t.cnf
  openssl asn1parse -genconf t.cnf -noout -out t.der
  openssl ec -inform DER -in t.der -pubout 2>/dev/null | cmp -s - target.pub && \
    { echo "recovered d=$d"; break; }
done
```

```text
recovered d=4

real    0m0.064s
```

Running the same loop against all eight real public keys, extracted straight from eMudhra's own proof bundle with no private material needed, recovered every single one in between 0.06 and 3.5 seconds, the slowest being `EM DV TLS CA - G3C` at `d = 230`. A search space that tiny isn't a cryptographic attack in any meaningful sense, it's a `for` loop. Scott Helme, who wrote the first public analysis, put it plainly: a public key derived from `d = 4` is a perfectly valid point on the curve, so every structural check a certificate validator runs still passes. Nothing downstream can tell a weak key from a strong one just by looking at it.

## How a CA ends up signing with d=4

eMudhra's own account, posted to the Mozilla bug thread (bug 2083449) and not yet independently verified by Mozilla, blames its key generation ceremony (KGC) script. The short version: during the April 30, 2025 ceremony that created a batch of 24 intermediates, a deviation was approved to test wrap/unwrap behavior for key export. That test generated a second key pair on the hardware security module alongside the real one. The two pairs had similar labels, and the certificate signing request for the production intermediates was built from the wrong one, the weak test pair instead of the properly random production pair. eMudhra calls it "human errors in multiple steps of the process" and says it does not blame the HSM hardware itself.

Mozilla's own investigation, done independently of eMudhra's explanation, confirms the keys are recoverable but is more cautious about the cause: its bug report says only that "the original key generation was flawed." Mozilla also flagged a second, separate problem on the same intermediates: their certificate revocation lists had invalid signatures, first signed with the real keys (producing bad signatures against the certificate) and later re-signed with the weak keys to paper over it. The dates eMudhra gave for when that started don't match what Mozilla found in archived CRL data, so the full timeline isn't settled.

Whatever the precise mechanics, the keys existed in their weak form from April 30, 2025. Wayne's report landed October 17, 2026. That's roughly 17 months during which anyone who thought to check small integers against eMudhra's public intermediates could have recovered working CA private keys. Nobody knows if anyone did; the certificates simply existed, valid and trusted, the whole time.

{{< image "emudhra_ca_private_keys_cracked/emudhra_timeline.webp" "Timeline from the April 30, 2025 key generation ceremony through the October 2026 disclosure and revocation" >}}

*The weak keys existed for about 17 months before anyone reported them. Sources: {{< link href="https://bugzilla.mozilla.org/show_bug.cgi?id=2083449" >}}Mozilla bug 2083449{{< /link >}}, {{< link href="https://scotthelme.co.uk/eight-bits-of-trust-emudhras-ca-keys-cracked-in-milliseconds/" >}}Scott Helme's writeup{{< /link >}}.*

## Why Certificate Transparency saved browsers but not everything else

Chrome and Firefox came out of this mostly fine, and the reason is Certificate Transparency (CT), the requirement that every publicly trusted TLS certificate gets logged to a public, append-only log before a browser will accept it. Chrome checked its CT logs and found no TLS certificate had ever chained up through these eight intermediates. If nobody logged a forged certificate, a CT-enforcing browser never trusted one, attack or not.

That's the good news, and it's also where the good news ends. CT only covers TLS certificates served to CT-enforcing clients, which in practice means modern browsers. It does not cover:

- **Code-signing certificates.** CT doesn't apply there at all. The two code-signing intermediates, `EM OV CS CA - G3B` and `EM OV CS CA - G3C`, chain to `emSign Root CS CA - G3`, which Windows trusts directly for code signing. A binary signed with a certificate minted from either of those recovered keys would present as legitimately signed to any system that doesn't separately check revocation.
- **Non-browser TLS clients.** Scott Helme's writeup tested this directly: he stood up a certificate for a real domain, signed with one of the recovered keys, and checked what accepted it with default settings. `curl`, Python's standard TLS stack and Node.js all accepted the chain. Windows' CryptoAPI accepted it too, unless revocation checking was explicitly turned on, and even then only one of its two revocation-checking code paths caught it. Most non-browser software trusts whatever is in the OS CA bundle on disk and doesn't check CT or revocation status by default, so a browser's fast response doesn't protect it.

That gap is the real lesson here: the web's trust infrastructure has a strong, fast-acting safety net for the one client everyone thinks about (the browser), and a much weaker one for everything else that happens to trust the same root store, from `curl` scripts to IoT firmware to CI pipelines pulling dependencies over HTTPS.

## How browsers revoked eight intermediates without shipping a new version

The response was fast specifically because browsers didn't have to ship new code. Chrome and Firefox both maintain out-of-band revocation lists that update independently of the browser's release cycle:

- Chrome's **CRLSet** is a compact list of revoked certificates pushed to every Chrome install through its component update mechanism. Wayne reported the issue the evening of October 17, 2026, and Chrome had the six TLS intermediates in CRLSet within hours.
- Firefox's **OneCRL** does the same job, distributed through Mozilla's Remote Settings service. Firefox blocked the same certificates a few hours after Chrome.
- Mozilla also removed trust in the issuing root, `emSign ECC Root CA - G3`, entirely, shipping an NSS update on October 20, 2026, rather than leaving it to expire naturally in 2040. Chrome said the same root would drop in Chrome Root Store version 43.
- eMudhra itself revoked all eight intermediates with reason code `caCompromise` between October 18, 09:24 and 09:38 UTC, and Sectigo revoked its cross-signs on the same certificates shortly after.

None of that required users to update their browser. It's the same mechanism that's supposed to catch a leaked key or a misissued certificate on any given day, just exercised at a scale (eight CAs, one of them code-signing-capable) that doesn't come up often.

## Checking a certificate chain yourself

You don't need any of eMudhra's compromised material to understand how to check a chain you actually depend on. Any time you're running services behind TLS, local dev environments included, it's worth knowing what your client is actually trusting. A quick way to see the full chain a server presents, including which CA issued the intermediate:

```bash
curl -v https://your-service.example.com/ 2>&1 | grep -A2 "issuer:"
```

If you're testing a webhook receiver or an API client locally and want a real, publicly trusted HTTPS certificate instead of a self-signed one that will fail validation the same way a browser would reject an untrusted chain, a tunnel like Pinggy's `free.pinggy.io` gives you one for free without touching your CA trust store at all: `ssh -p 443 -R0:localhost:3000 free.pinggy.io -T` puts a valid HTTPS URL in front of whatever's listening on port 3000, so you can see exactly what a real client, with the real root store, does with the certificate your service ends up behind.

For checking whether a *given* certificate chains to one of the eight compromised eMudhra intermediates specifically, compare the issuer field against the list in the table above:

```bash
openssl x509 -in cert.pem -noout -issuer
```

A match on `CN = EM DV TLS CA - G3B`, `EM EV TLS CA - G3C`, or any of the other six names means that certificate is riding on a revoked, previously-weak key, and should be reissued regardless of what your client currently does with it.

## What this means if you run anything that trusts a CA bundle

The uncomfortable part of this story isn't the specific number 4. It's that a structurally valid, properly formatted, correctly signed certificate chain told you nothing about whether the key behind it was safe. Every automated check that matters, certificate validity dates, signature verification, chain-of-trust walking, passed for all eight CAs the entire time. The only thing that caught it was a person who thought to try small integers against a public key, which is not a check any client runs by default and arguably never will, because doing it for every certificate you see would be absurd overhead for a problem that's supposed to be structurally impossible.

If you maintain software that pins a CA bundle, bundles root certificates into a container image, or trusts system certificates without checking revocation, now's a reasonable time to make sure that bundle gets refreshed on a normal cadence (`apt-get install --only-upgrade ca-certificates`, `pip install -U certifi`, rebuilding base images) rather than being baked in once and forgotten. Revocation only protects you if your client bothers to check it, and most non-browser clients, by default, don't.
