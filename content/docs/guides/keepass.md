---
 title: "Sync a KeePass password database"
 description: "Keep a self-hosted KeePass database in sync across devices by exposing your local file server through a Pinggy tunnel."
 date: 2026-05-05T14:15:25+05:30
 draft: false
---

# Sync a KeePass database across devices with Pinggy

KeePass and KeePassXC store their entire vault in a single encrypted `.kdbx` file. There is no built-in cloud sync - by design, you decide where the file lives. A common setup is to drop the file in Dropbox or iCloud, but if you would rather not hand the file to a third-party provider, you can host it yourself on a small file server and reach it from any device through a Pinggy tunnel.

This guide uses WebDAV because it is the protocol both KeePass clients and most mobile companion apps (KeePass2Android, Strongbox, KeePassium) understand natively.

#### Step 1: Run a WebDAV server locally

Any WebDAV implementation works. A minimal Docker setup using `bytemark/webdav`:

```bash
docker run --restart always -v /path/to/kdbx:/var/lib/dav \
  -e AUTH_TYPE=Digest -e USERNAME=alice -e PASSWORD=strongpassword \
  -p 8080:80 bytemark/webdav
```

Place your `.kdbx` file in `/path/to/kdbx` on the host. Verify the server with:

```bash
curl --digest -u alice:strongpassword http://localhost:8080/
```

#### Step 2: Open a Pinggy HTTP tunnel

```bash
ssh -p 443 -R0:localhost:8080 free.pinggy.io
```

Pinggy returns an HTTPS URL such as `https://abcd1234.a.pinggy.link`. Combined with the WebDAV server's own digest authentication and Pinggy's TLS termination, the database file is encrypted in transit and gated by two layers of credentials.

#### Step 3: Connect KeePass clients

In KeePassXC: **File → Open from URL**, paste the Pinggy URL plus the filename (e.g. `https://abcd1234.a.pinggy.link/Passwords.kdbx`), and supply the WebDAV credentials.

On Android, KeePass2Android offers a "WebDAV" file source in its file picker. Enter the same URL and credentials. The app downloads the database, prompts for the master password, and writes any changes back over WebDAV.

#### Step 4: Avoid simultaneous writes

KeePass file format is not multi-writer safe. If two clients save changes at the same time, one set of edits is overwritten. Pick one of these strategies:

- Treat one device as primary; only edit there. Other devices open the file read-only.
- Enable the trigger-based merge in KeePassXC so concurrent saves are merged rather than overwritten.

#### Step 5: Pin the URL

A free Pinggy tunnel rotates its hostname on every reconnect, which means clients need their saved URL updated each time. To avoid this, sign in to [the dashboard](https://dashboard.pinggy.io) and use a [persistent subdomain](/docs/persistent_subdomain/) or [custom domain](/docs/custom_domain/) so the URL stays the same.
