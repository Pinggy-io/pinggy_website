---
title: "Lovable Apps Leaking Data: How Supabase RLS Fails and How to Check Yours"
description: "A study of 159,041 Lovable projects found Supabase tables readable without a login. Here is how the public key, table grants and Row Level Security decide what a stranger can read, with a curl test and an SQL audit for your own app."
date: 2026-11-15T18:30:00+05:30
lastmod: 2026-11-15T18:30:00+05:30
draft: false
tags: ["Supabase", "security", "AI coding tools", "database", "privacy"]
og_image: "images/lovable_supabase_rls_data_leak/lovable_supabase_rls_data_leak_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIkxvdmFibGUgQXBwcyBMZWFraW5nIERhdGE6IEhvdyBTdXBhYmFzZSBSTFMgRmFpbHMgYW5kIEhvdyB0byBDaGVjayBZb3VycyIsCiAgImRlc2NyaXB0aW9uIjogIkEgc3R1ZHkgb2YgMTU5LDA0MSBMb3ZhYmxlIHByb2plY3RzIGZvdW5kIFN1cGFiYXNlIHRhYmxlcyByZWFkYWJsZSB3aXRob3V0IGEgbG9naW4uIEhlcmUgaXMgaG93IHRoZSBwdWJsaWMga2V5LCB0YWJsZSBncmFudHMgYW5kIFJvdyBMZXZlbCBTZWN1cml0eSBkZWNpZGUgd2hhdCBhIHN0cmFuZ2VyIGNhbiByZWFkLCB3aXRoIGEgY3VybCB0ZXN0IGFuZCBhbiBTUUwgYXVkaXQgZm9yIHlvdXIgb3duIGFwcC4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvbG92YWJsZV9zdXBhYmFzZV9ybHNfZGF0YV9sZWFrL2xvdmFibGVfc3VwYWJhc2VfcmxzX2RhdGFfbGVha19iYW5uZXIud2VicCIsCiAgImF1dGhvciI6ICAgIHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIgfSwKICAicHVibGlzaGVyIjogeyAiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwgIm5hbWUiOiAiUGluZ2d5IiwgInVybCI6ICJodHRwczovL3BpbmdneS5pbyIgfSwKICAiZGF0ZVB1Ymxpc2hlZCI6ICIyMDI2LTExLTE1VDE4OjMwOjAwKzA1OjMwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTEtMTVUMTg6MzA6MDArMDU6MzAiLAogICJtYWluRW50aXR5T2ZQYWdlIjogeyAiQHR5cGUiOiAiV2ViUGFnZSIsICJAaWQiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vYmxvZy9sb3ZhYmxlX3N1cGFiYXNlX3Jsc19kYXRhX2xlYWsvIiB9LAogICJhcnRpY2xlU2VjdGlvbiI6ICJTZWN1cml0eSIsCiAgInByb2ZpY2llbmN5TGV2ZWwiOiAiSW50ZXJtZWRpYXRlIiwKICAia2V5d29yZHMiOiAiTG92YWJsZSBkYXRhIGxlYWssIFN1cGFiYXNlIFJvdyBMZXZlbCBTZWN1cml0eSwgU3VwYWJhc2UgUkxTIGNoZWNrLCBTdXBhYmFzZSBhbm9uIGtleSwgcHVibGlzaGFibGUga2V5LCB1c2luZyAodHJ1ZSkgcG9saWN5LCBDVkUtMjAyNS00ODc1NywgdmliZSBjb2Rpbmcgc2VjdXJpdHkiLAogICJhYm91dCI6IFsKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiUm93IExldmVsIFNlY3VyaXR5IiwgImRlc2NyaXB0aW9uIjogIlBvc3RncmVzIGZlYXR1cmUgdGhhdCBmaWx0ZXJzIHdoaWNoIHJvd3MgYSByb2xlIGNhbiByZWFkIG9yIHdyaXRlIHRocm91Z2ggcGVyLXRhYmxlIHBvbGljaWVzLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiU3VwYWJhc2UgcHVibGlzaGFibGUga2V5IiwgImRlc2NyaXB0aW9uIjogIlB1YmxpYyBBUEkga2V5IHNoaXBwZWQgaW4gdGhlIGZyb250ZW5kIHRoYXQgbWFwcyB1bmF1dGhlbnRpY2F0ZWQgcmVxdWVzdHMgdG8gdGhlIFBvc3RncmVzIHJvbGUgYW5vbi4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIkxvdmFibGUiLCAiZGVzY3JpcHRpb24iOiAiQUkgYXBwIGJ1aWxkZXIgd2hvc2UgZ2VuZXJhdGVkIGFwcHMgY29tbW9ubHkgdXNlIFN1cGFiYXNlIGFzIHRoZSBkYXRhYmFzZS4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIlBvc3RnUkVTVCIsICJkZXNjcmlwdGlvbiI6ICJTZXJ2ZXIgYmVoaW5kIHRoZSBTdXBhYmFzZSBEYXRhIEFQSSB0aGF0IHR1cm5zIEhUVFAgcmVxdWVzdHMgaW50byBTUUwgcnVuIGFzIGEgUG9zdGdyZXMgcm9sZS4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIkNWRS0yMDI1LTQ4NzU3IiwgImRlc2NyaXB0aW9uIjogIjIwMjUgdnVsbmVyYWJpbGl0eSByZWNvcmQgZm9yIGluc3VmZmljaWVudCBSTFMgcG9saWNpZXMgaW4gTG92YWJsZS1nZW5lcmF0ZWQgc2l0ZXMuIiB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "lovable_supabase_rls_data_leak/lovable_supabase_rls_data_leak_banner.webp" "Banner reading Why Lovable apps leak their database, beside four counts from the Crissy Field study narrowing from 159,041 projects to 7,403 sites" >}}

Security firm Crissy Field went through 159,041 Lovable projects found in Common Crawl and published the result in November 2026: of the 24,664 Supabase-backed sites that returned database rows to a visitor who never logged in, 7,403 had tables containing email addresses that the same anonymous visitor could read. One of them held more than 1,000 records with passport numbers. Another held 80,000 forum profiles and over 200,000 chat messages. Nobody broke in. The apps answered a normal API request with the key they ship to every browser.

The mechanism is about fifteen lines of Postgres, and it applies to every Supabase app, not only the ones an AI wrote. I rebuilt it locally to show each state a table can be in and what a stranger gets back in each one.

{{% tldr %}}
1. **The Supabase key in your frontend is public by design.** It maps every request to the Postgres role `anon`. What `anon` can read is decided inside the database, by table grants and Row Level Security (RLS).
2. **A table with RLS off returns every row** to anyone with that key, and lets them edit and delete too. `curl` is enough.
3. **RLS on with a `using (true)` policy is the same leak.** A scanner that only checks whether a policy exists marks it as fine.
4. **Supabase stopped auto-granting new tables to the API roles**: new projects since May 30, 2026, all existing projects since October 30, 2026. Tables created before that keep their old grants.
5. **Check your own app in two ways**: one `curl` with the publishable key from outside, and one SQL query over `pg_class` and `pg_policies` from inside. Both are below.
{{% /tldr %}}

## What the Lovable study measured

<a href="https://www.crissyfield.de/research/lovable-en/" target="_blank">The report</a> comes from Crissy Field, a Hamburg application security firm, working with the German business daily Handelsblatt, which ran the story on November 2, 2026. The numbers narrow in four steps:

- 159,041 Lovable projects, pulled from Common Crawl snapshots between December 2025 and September 2026.
- 34,545 of them used Supabase.
- 24,664 of those sent database records to the browser on page load, with no login.
- 7,403 of those (30%) had at least one table with email addresses that further read-only requests could fetch, 10,560 tables in total.

{{< image "lovable_supabase_rls_data_leak/lovable_study_funnel.webp" "Funnel of the Crissy Field study: 159,041 Lovable projects, 34,545 using Supabase, 24,664 returning rows with no login, 7,403 exposing tables with email addresses" >}}

*Data: {{< link href="https://www.crissyfield.de/research/lovable-en/" >}}Crissy Field{{< /link >}}, November 2026.*

The authors are careful about the third number, and you should be too. A site that sends rows without a login is not broken: a product catalogue or a public blog is supposed to do that. The 30% figure is also not a confirmed leak rate, because an email column can be a public contact address or test data, and plenty of personal data has no email in it. What the study does establish is the list of things they could read: ticket sales with phone numbers and payment details, AI summaries of a property manager's internal email, contracts, invoices, photo albums, and in one case 280,000 emails a provider had sent to its customers.

Lovable's reported answer to Handelsblatt was that this is a known, industry-wide configuration problem, and its <a href="https://docs.lovable.dev/features/security" target="_blank">security docs</a> say plainly that "You are responsible for ensuring that your app meets the security requirements appropriate for its use case." Both statements are true, and neither helps the person whose passport number was in the table.

## How a Supabase request gets authorised

A classic web app has a backend between the browser and the database. The backend holds the database password and decides what each user sees. A Supabase app usually has no such layer. The browser talks straight to the Data API, which is <a href="https://postgrest.org" target="_blank">PostgREST</a>, a server that turns `GET /rest/v1/bookings?select=*` into `select * from bookings`.

That only works if the browser holds a credential, so every Supabase frontend ships with one: the publishable key (`sb_publishable_...`), or on older projects the `anon` JWT. The <a href="https://supabase.com/docs/guides/api/api-keys" target="_blank">API keys docs</a> describe it as "Safe to expose online", and add the sentence that matters: "Anyone can read it, so it only reaches what Row Level Security allows."

For each request PostgREST does three things:

1. It switches to a Postgres role. With the publishable key and no signed-in user that role is `anon`. With a logged-in user's token it is `authenticated`, and the user's ID is available to SQL as `auth.uid()`.
2. Postgres checks the table grant: does this role have `SELECT` on `bookings` at all?
3. If RLS is enabled on the table, Postgres filters the rows through the table's policies. If RLS is not enabled, this step doesn't exist and every row comes back.

{{< image "lovable_supabase_rls_data_leak/supabase_request_authorisation.webp" "A browser request with the publishable key passes through the Supabase Data API into Postgres as role anon, where the table grant and then Row Level Security are checked" >}}

*The key identifies the project, not the user. The row filter lives in the database.*

So the whole access model sits in steps 2 and 3, written in SQL, in a place a non-programmer building with prompts never opens. The app works either way. A missing policy produces no error, no warning in the UI, and a perfectly good demo.

## The four states of a table, tested with curl

To see each state I ran PostgreSQL 16.15 and PostgREST 14.16 locally with the same role layout Supabase uses (`anon`, `authenticated`, and an `auth.uid()` function reading the JWT). This is the Data API's engine without Supabase's gateway in front, so status codes may differ slightly on a hosted project; the row behaviour is plain Postgres and does not.

The worked example is one table for a small booking app:

```sql
create table public.bookings (
  id bigint generated always as identity primary key,
  user_id uuid not null,
  full_name text not null,
  email text not null,
  passport_no text not null
);

-- what Supabase used to do for every new table in public
grant select, insert, update, delete on public.bookings to anon, authenticated;
```

Three rows go in, one per user. Then a request with only the anonymous key:

```bash
curl "http://localhost:54321/bookings?select=full_name,email,passport_no" \
  -H "Authorization: Bearer $ANON_KEY"
```

### State 1: RLS off

```json
[{"full_name":"Asha Rao","email":"asha@example.com","passport_no":"P4410921"},
 {"full_name":"Tom Becker","email":"tom@example.com","passport_no":"C01X00T47"},
 {"full_name":"Mei Lin","email":"mei@example.com","passport_no":"E12345678"}]
```

Everything. Writes work as well: a `DELETE` with the same key against a second test table returned `200` and emptied it. Supabase's own Security Advisor describes this state as "Anyone with your project URL can read, edit, and delete all data in this table".

### State 2: RLS on, no policy

```sql
alter table public.bookings enable row level security;
```

The same `curl` now returns `[]` with `HTTP 200`. Not an error, an empty list: RLS with no policy denies every row by default. This is the safe state, and it is also the state where the app looks broken, because the logged-in user's own bookings vanish too. Wich is where the next state comes from.

### State 3: RLS on, policy `using (true)`

```sql
create policy "Enable read access for all users"
  on public.bookings for select using (true);
```

The app works again, and so does the leak: the `curl` returns all three rows, passport numbers included. `using (true)` means "this row is visible if `true`", for every role. It is the right policy for a table of blog posts and the wrong one for anything with a person in it. It is also the fix an AI assistant tends to reach for when the prompt is "my bookings page is empty", because it makes the symptom go away.

### State 4: RLS on, policy scoped to the owner

```sql
create policy "Users read their own bookings"
  on public.bookings for select
  to authenticated
  using ((select auth.uid()) = user_id);
```

The anonymous `curl` gets `[]`. The same request with Asha's login token gets one row:

```json
[{"full_name":"Asha Rao","email":"asha@example.com","passport_no":"P4410921"}]
```

{{< image "lovable_supabase_rls_data_leak/supabase_rls_four_states.webp" "Four states of a Supabase table: RLS off and a using (true) policy both return 3 rows to an anonymous request, RLS with no policy and an owner policy both return an empty list" >}}

*Tested on PostgreSQL 16.15 with PostgREST 14.16.*

States 1 and 3 are the two ways the apps in the study ended up readable. State 3 is the nastier one because it passes a naive check.

## Why a scanner that looks for a policy is not enough

None of this is new for Lovable. In March 2025 Matt Palmer scanned 1,645 projects from Lovable's showcase and found 170 of them (10.3%) with inadequate RLS, 303 endpoints in all. That became <a href="https://nvd.nist.gov/vuln/detail/CVE-2025-48757" target="_blank">CVE-2025-48757</a>, published May 29, 2025. Lovable shipped a security scan with Lovable 2.0 on April 24, 2025, and <a href="https://mattpalmer.io/posts/statement-on-CVE-2025-48757/" target="_blank">Palmer's write-up</a> noted its limit: it "merely checks for the existence of any RLS policy, not its correctness or alignment with application logic."

Lovable's scanner has grown since. As of November 2026 the docs describe a Quick scan that runs on every publish and flags tables without row-level security and access rules that let everyone through, plus a Deep scan you start by hand. That covers states 1 and 3. It cannot cover the general problem, which is that a policy is correct only relative to what the app is for. `using (true)` on `products` is fine. `using (true)` on `bookings` is a breach. A policy that lets any `authenticated` user read every row passes every syntactic check and still shows customer A the data of customer B, and since most of these apps let anyone sign up, "authenticated" is one form away from "anonymous".

{{< image "lovable_supabase_rls_data_leak/lovable_supabase_rls_timeline.webp" "Timeline from the March 2025 scan of 1,645 Lovable apps and CVE-2025-48757 to Supabase removing default grants in 2026 and the November 2026 study, with the Common Crawl sample window shaded" >}}

## What Supabase changed in 2026, and what it leaves alone

The reason state 1 was so common is the `grant` line in the example above. Supabase used to apply it automatically: every new table in `public` got `select, insert, update, delete` for `anon`, `authenticated` and `service_role`, so a table was reachable from the internet the moment it existed. RLS was the only thing between it and a stranger, and RLS is off unless the `create table` migration turns it on.

That default is gone. Per <a href="https://supabase.com/changelog/45329-breaking-change-tables-not-exposed-to-data-and-graphql-api-automatically" target="_blank">Supabase's changelog</a>, new projects stopped getting the automatic grants from May 30, 2026, and the setting was applied to all existing projects on October 30, 2026. A new table now needs an explicit `grant` before the Data API can touch it. When I revoked the grant locally, the anonymous request recieved this instead of rows:

```json
{"code":"42501","details":null,"hint":null,"message":"permission denied for table bookings"}
```

Two limits are worth knowing. First, the changelog is explicit that "Existing tables are not affected in your project, they keep their current grants and stay reachable." Every table behind the study's numbers predates the change and is exactly as exposed as it was. Second, the predictable response to a `42501` is to paste the `grant` back, and a grant without RLS is state 1 again. The changelog's own example does it in the right order: grant, then `enable row level security`, then a policy.

## How to check your own Supabase app

Run these against a project you own. Poking at someone else's database to see what comes back is unauthorised access in most jurisdictions, however public the key is.

**From the outside.** Open your deployed app, open DevTools -> Network, and filter on `supabase.co`. The request URL gives you the project (`https://<project-ref>.supabase.co/rest/v1/...`) and the `apikey` header gives you the public key. In a Lovable project both usually also sit in `src/integrations/supabase/client.ts`. Then ask for a table that should be private, logged out. I have not run this against a hosted project for this post; it is the same request as the local one with Supabase's URL shape:

```bash
curl "https://<project-ref>.supabase.co/rest/v1/bookings?select=*&limit=1" \
  -H "apikey: $SUPABASE_KEY" \
  -H "Authorization: Bearer $SUPABASE_KEY"
```

`[]` or a `42501` is what you want. A row is a problem. To count how much is visible without downloading it, add `-I -H "Prefer: count=exact" -H "Range: 0-0"` and read the `Content-Range` header; on my local table with RLS off it came back as `Content-Range: 0-2/3`, three rows visible. Repeat seperately for every table that holds anything about a person, and then do it again with a token from a throwaway account, to catch policies that trust any logged-in user.

**From the inside.** In the Supabase SQL editor, list every table the anonymous role can read and whether anything filters it:

```sql
select c.relname as table_name,
       c.relrowsecurity as rls_on,
       has_table_privilege('anon', c.oid, 'select') as anon_can_read,
       (select count(*) from pg_policies p
         where p.schemaname = 'public' and p.tablename = c.relname) as policies
from pg_class c
join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public' and c.relkind = 'r'
order by 1;
```

On my test database, with two extra tables added to make it interesting:

```
 table_name | rls_on | anon_can_read | policies
------------+--------+---------------+----------
 bookings   | t      | f             |        1
 notes      | t      | t             |        1
 waitlist   | f      | t             |        0
```

`waitlist` is state 1: readable, no RLS. `notes` looks fine in this view and is not, which the second query shows:

```sql
select tablename, policyname, cmd, roles, qual
from pg_policies
where schemaname = 'public' and qual = 'true';
```

```
 tablename |            policyname            |  cmd   |  roles   | qual
-----------+----------------------------------+--------+----------+------
 notes     | Enable read access for all users | SELECT | {public} | true
```

Every row in that result should be a table you would be happy to print on a billboard. The Supabase dashboard runs similar checks under Advisors -> Security Advisor: `0013_rls_disabled_in_public` is an error, and `0024_permissive_rls_policy` ("Security policy allows unrestricted access") is a warning, which undersells it.

**Stop it recurring.** A Postgres event trigger can turn RLS on for every new table, so a forgotten migration fails closed instead of open. This one worked on my local Postgres 16; Supabase's <a href="https://supabase.com/docs/guides/database/postgres/row-level-security" target="_blank">RLS guide</a> points at the same approach, but I have not tested this exact function on a hosted project:

```sql
create function public.enable_rls_on_new_tables() returns event_trigger
language plpgsql as $$
declare obj record;
begin
  for obj in select * from pg_event_trigger_ddl_commands()
             where command_tag = 'CREATE TABLE' and schema_name = 'public'
  loop
    execute format('alter table %s enable row level security', obj.object_identity);
  end loop;
end $$;

create event trigger enable_rls_on_new_tables on ddl_command_end
  when tag in ('CREATE TABLE')
  execute function public.enable_rls_on_new_tables();
```

A new table then starts in state 2, returns `[]`, and forces someone to write a real policy before the page shows anything.

## What this means if you build with an AI app builder

People write `using (true)` all the time, so an AI writing one is hardly news. The uncomfortable part is that the feedback loop only runs one way. A missing feature is visible: the page is empty, you complain, the model fixes it. A missing restriction is invisible: the page works, the demo goes well, and the only test that would catch it is one where you log out and ask for data you should not get. Nobody prompts for that.

So do it once by hand. Take the `curl` above, point it at the table you would least like to see on Hacker News, and run it logged out. It takes less time than reading this post did, and if it prints `[]` you now know something about your app that 7,403 site owners in that study apparently did not.
