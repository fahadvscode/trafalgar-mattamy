# CURSOR BUILD PROMPT — mattamytrafalgar.com
### Independent information & VIP registration microsite for Hawthorne on Trafalgar (Mattamy Homes, Milton, ON)

Paste this entire document into a **new Cursor chat** in an **empty folder**. Build a complete static site and deploy it live. No stubs, no lorem ipsum, no TODOs.

This is a **second domain** for the same project as the already-live site `trafalgarmattamy.com`. Clone that working site, then retarget every URL, canonical, sitemap, AMP link, and deploy name to `mattamytrafalgar.com`. Do not invent a different project.

---

## FIND-AND-REPLACE HEADER

| Token | Value |
|---|---|
| `[DOMAIN]` | `mattamytrafalgar.com` |
| `[ORIGIN]` | `https://mattamytrafalgar.com` |
| `[GITHUB_REPO_NAME]` | `mattamy-trafalgar` |
| `[VERCEL_PROJECT_NAME]` | `mattamy-trafalgar` |
| `[PROJECT_NAME]` | `Hawthorne on Trafalgar` |
| `[BUILDER_NAME]` | `Mattamy Homes` |
| `[SUPABASE_PROJECT_ID]` | `cfzuypbljirmibmxpabi` |
| `[LEADS_TABLE]` | `hawthorne_trafalgar_leads` |
| `[FORM_SOURCE]` | `mattamy-trafalgar-landing` |

Literal-replace these tokens before deploy. The sibling live site is `trafalgarmattamy.com` (GitHub `fahadvscode/trafalgar-mattamy`). This new site must not share that repo, that Vercel project, or that domain.

---

## 1. ROLE & MISSION

Senior full-stack + SEO/AEO + DevOps. Build **one static website**: plain HTML, CSS, vanilla JS. **No framework, no Next.js, no React, no Tailwind.**

Ranked goals:
1. Capture leads on the same live table as the sibling site.
2. Rank for **Mattamy Trafalgar** plus **Hawthorne on Trafalgar** (this domain is `mattamytrafalgar.com`, so titles and H1s must include both **Mattamy** and **Hawthorne on Trafalgar**).
3. Get cited by AI answer engines.
4. Deploy live to `https://mattamytrafalgar.com` in this session.

---

## 2. CLONE SOURCE — start here, do not rebuild from scratch

Copy the working sibling, then change origin strings.

1. Clone or copy from **https://github.com/fahadvscode/trafalgar-mattamy** (public). That repo is the source of truth for pages, CSS, AMP transform, form, FAQ, and images.
2. Pull photography / favicons / OG image from **https://github.com/fahadvscode/hawthornetrafalgar.com.git** if anything is missing (`hero-trafalgar.jpg`, community and feature photos, icons).
3. Keep the `build.mjs` generator: edit the `ORIGIN` constant to `https://mattamytrafalgar.com`, then run `node build.mjs` so canonical HTML, AMP HTML, and `llms-full.txt` stay in sync.
4. After the origin swap, grep the repo for `trafalgarmattamy.com` and `trafalgar-mattamy` and replace leftovers in HTML, XML, robots, manifest, JSON-LD, AMP, and JS. Do not leave the old domain in `rel=canonical`, `rel=amphtml`, sitemap `<loc>`, or schema `url`.

Do **not** copy unverified marketing claims from older Next.js copy in `hawthornetrafalgar.com` (sq ft ranges, bedroom counts, occupancy years, “minutes from” highways, platinum pricing). Those stay **to be announced**.

---

## 3. NON-NEGOTIABLE CONSTRAINTS

### Branding
- No agent, realtor, brokerage, MLS, personal phone, personal email, “Sold by …”, or `RealEstateAgent` / operator `Person` schema.
- Do not name David Jozic or Jessica He.
- Do not impersonate Mattamy. Third person only. Independence disclaimer in every footer. Official builder site is `mattamyhomes.com`.
- Contact is the VIP form only. Neutral labels: “VIP Registration,” “Registration Team.”
- Mattamy phone `289-412-0392` may appear only as Mattamy’s number, never as this site’s number.

### Facts
- Verified facts only from Section 5. Everything else: **To be announced** / **Pricing not yet released**, plus `<!-- UNVERIFIED: confirm before launch -->`.
- No `Offer` or `AggregateOffer` schema until official prices exist.
- Do not invent drive minutes, sq ft, beds, deposits, occupancy, or unit counts.

### Rendering
- Every page is a fully server-deliverable `.html` file. Crawlers must see the copy in view-source, not only after JS.
- FAQ uses `<details>` / `<summary>`, not JS-only accordions.

---

## 4. TECH STACK

- HTML5 + `/css/style.css` + `/js/main.js` + `/js/supabase-client.js` + `/js/amp-lead.js`
- Optional Node `build.mjs` to generate canonical + AMP pages (required if you clone the sibling)
- `vercel.json`: `{ "cleanUrls": true, "trailingSlash": false }` plus sitemap/robots Content-Type headers from the sibling
- Google Fonts: Instrument Sans + Inter
- Design tokens: forest `#2F4A3C` / `#1B2E24`, accent `#A9714B`, parchment `#FAF7F1`, hero scrim `rgba(27, 46, 36, 0.58)`
- Images: explicit width/height, lazy below the fold, high fetchpriority on the hero
- No `!important` in CSS (AMP `amp-custom` limit 75KB; sibling CSS is ~10KB)

---

## 5. VERIFIED PROJECT DATA

| Field | Value |
|---|---|
| Official project name | Hawthorne on Trafalgar |
| Builder | Mattamy Homes |
| Development entity | Mattamy (White Squadron) Development Corporation |
| Applicant / land owner | White Squadron Development Corporation |
| Planning consultant | Korsiak Urban Planning |
| Address | 6119 Trafalgar Road, Milton, ON L9E 0Z6 |
| Legal | Part of Lot 6 & 7, Concession 8 |
| Site area | 77.8 hectares |
| Planning | Trafalgar Secondary Plan, Town of Milton, Halton Region, Ontario |
| Subdivision | 24T-25009/M |
| Zoning | Z-21/25 |
| Status | Statutory public meeting Feb 9, 2026; Council consideration scheduled July 13, 2026 |
| Marketed types | WideLot™ townhomes and detached homes |
| Sales status | Coming Soon — no model home / sales office yet |
| Natural context | Adjacent to Natural Heritage System and Sixteen Mile Creek wetlands corridor |
| Transit / highways | Milton GO; Highway 401 and 407 accessible from the area (no invented minute counts) |
| Conservation / recreation | Rattlesnake Point, Crawford Lake, Glen Eden Ski & Snowboard Centre |
| Golf named by builder | Wyldewood, Royal Ontario, Piper's Heath |
| Retail named by builder | Toronto Premium Outlets; Erin Mills shopping area |
| School boards | Halton District School Board; Halton Catholic District School Board — named schools for this site not confirmed |
| Comparable (third-party, not this project’s price) | Hawthorne East Village, Fourth Line & Louis St. Laurent, from $903,990, occupancy 2027 |

### Unverified — always “to be announced”
Price, deposits, incentives, sq ft, lot widths, beds/baths, home count, occupancy, POTL/maintenance, named schools, exact drive times.

---

## 6. KEYWORDS FOR THIS DOMAIN

This hostname is **mattamytrafalgar.com**. Every title must include **Mattamy**. The contiguous project phrase **Hawthorne on Trafalgar** must also appear in titles and opening copy.

Home title example: `Mattamy Trafalgar | Hawthorne on Trafalgar Milton`

Meta keywords:
`mattamy trafalgar, mattamy homes trafalgar, hawthorne on trafalgar, hawthorne on trafalgar mattamy, hawthorne on trafalgar milton, mattamy homes milton`

| Page | Primary keyword |
|---|---|
| `/` | mattamy trafalgar / hawthorne on trafalgar mattamy |
| `/floor-plans` | hawthorne on trafalgar floor plans |
| `/pricing` | hawthorne on trafalgar prices |
| `/location` | hawthorne on trafalgar location / 6119 Trafalgar Road |
| `/gallery` | hawthorne on trafalgar gallery |
| `/faq` | hawthorne on trafalgar faq |
| `/register` | hawthorne on trafalgar vip registration |

Do not cannibalize: one primary phrase per page.

---

## 7. PAGES (10 canonical + AMP twins)

`/`, `/floor-plans`, `/pricing`, `/location`, `/gallery`, `/faq`, `/register`, `/thank-you`, `/privacy`, `/terms`

Homepage **must put the VIP form in the hero**, stacked full-width on mobile (fields ≥48px tall, no horizontal scroll at 320px). Sticky mobile CTA jumps to `#hero-form`. Footer form stays on content pages (`form_location` `bottom-section`). Register page form `form_location` `register`. Hero form `form_location` `hero`.

Clone FAQ (16 answers, 40–80 words, JSON-LD matches visible text), facts table, comparison to Hawthorne East Village (third-party, labeled), independence disclaimer.

---

## 8. LEAD FORM — live table, do not create a new one

Supabase project `cfzuypbljirmibmxpabi`.  
URL `https://cfzuypbljirmibmxpabi.supabase.co`

**Table: `hawthorne_trafalgar_leads`** — already exists. Do **not** create `trafalgar_mattamy_leads` or `mattamy_trafalgar_leads`.

Anon public key (client-safe; RLS is the control):

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmenV5cGJsamlybWlibXhwYWJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1MTgxMTYsImV4cCI6MjA3MDA5NDExNn0.U0DGF2JPzzV4NmvcgET-R8mVjV_-MhdVeeuLhZp6kes
```

Never ship the service-role key.

### Fields (required)
firstname, lastname, email (trim + lowercase), phone, is_broker (boolean from Yes/No radios), consent checkbox **unchecked by default**.

Consent copy: `I agree to receive updates about Hawthorne on Trafalgar. You can unsubscribe anytime.`

Honeypot `website`. Reject submits faster than 3 seconds.

### Insert payload (exact shape)

```js
{
  firstname,
  lastname,
  email,
  phone,
  is_broker, // boolean
  project_name: "Hawthorne on Trafalgar",
  source: "mattamy-trafalgar-landing",
  form_location, // "hero" | "register" | "bottom-section"
  status: "new",
  priority: "high",
  notes: "Broker: Yes." // or "Broker: No."
}
```

Deletion flow: `/register?request=deletion` appends ` DELETION REQUEST.` after the Broker sentence. Phone regex `/^[\d\s()+-]{10,20}$/` and ≥10 digits. Email must contain `@` with characters on both sides.

Success: redirect `/thank-you` on canonical; AMP reveals `.amp-next` to `/amp/thank-you`.

---

## 9. AMP (required)

Follow [Google AMP on Search](https://developers.google.com/search/docs/crawling-indexing/amp):

- Valid AMP HTML, same content and same actions as canonical where possible
- AMP URLs on **this** domain: `/amp`, `/amp/floor-plans`, … not a different host
- Canonical pages: `<link rel="amphtml" href="https://mattamytrafalgar.com/amp…">`
- AMP pages: `<link rel="canonical" href="https://mattamytrafalgar.com/…">` (non-AMP)
- JSON-LD on AMP still uses canonical (non-AMP) URLs
- Sitemap lists **canonical URLs only** (no AMP URLs as extra primaries)
- Images → `amp-img`; map → `amp-iframe` with placeholder; gallery → `amp-lightbox-gallery`
- Forms: `amp-form` GET fallback to `https://mattamytrafalgar.com/register` plus `amp-script` posting the same payload (hash `amp-script-src` from exact `js/amp-lead.js` bytes). Leave deletion on canonical `/register?request=deletion`.
- Mobile nav without JS: checkbox + `.nav-check:checked ~ .site-nav`
- Validate with `npx amphtml-validator amp/*.html` until every file PASSES
- AMP is responsive, not mobile-only

---

## 10. CRAWLERS, SITEMAP, SEARCH CONSOLE

`robots.txt`: allow `*` and the usual AI bots; include:

```
Sitemap: https://mattamytrafalgar.com/sitemap.xml
Sitemap: https://mattamytrafalgar.com/sitemap.txt
```

`sitemap.xml`: core protocol only — `urlset` xmlns `http://www.sitemaps.org/schemas/sitemap/0.9`, one `<loc>` + `<lastmod>` per canonical page. No AMP `xhtml:link`, no image extensions (GSC parse failures). Also ship `sitemap.txt` (plain URL list). Serve `Content-Type: application/xml; charset=UTF-8` and `Content-Disposition: inline` (no filename=) for the XML file.

**Search Console Domain property** (`mattamytrafalgar.com`): submit the **full** URL

```
https://mattamytrafalgar.com/sitemap.xml
```

Do not type `.xml` or `sitemap.xml` alone — GSC will treat that as a wrong path. If a fetch fails because SSL was not ready yet, **Remove sitemap** then add the full URL again. HTTP 308 to HTTPS is not followed for the submitted sitemap URL; always submit `https://`.

Do not add AMP URLs to the sitemap. `llms.txt` + `llms-full.txt` required.

---

## 11. DEPLOY

Prereqs: `gh auth status`, `vercel whoami` (run outside a sandbox if tokens look invalid).

```bash
git init -b main
git add .
git commit -m "Initial build: mattamytrafalgar.com landing page"
gh repo create mattamy-trafalgar --public --source=. --remote=origin --push
vercel link --yes --project mattamy-trafalgar
vercel git connect https://github.com/fahadvscode/mattamy-trafalgar
vercel deploy --prod --yes
vercel domains add mattamytrafalgar.com
vercel domains add www.mattamytrafalgar.com
```

Use the logged-in GitHub user from `gh auth status`. Repo **public**. Do not reuse project `trafalgar-mattamy`.

### GoDaddy DNS for `mattamytrafalgar.com`

| Type | Name | Value |
|---|---|---|
| A | `@` | `76.76.21.21` |
| A | `www` | `76.76.21.21` |

Wait for SSL (Let’s Encrypt) before telling Search Console to fetch `https://…/sitemap.xml`. Confirm:

```bash
curl -sI https://mattamytrafalgar.com/sitemap.xml
echo | openssl s_client -connect mattamytrafalgar.com:443 -servername mattamytrafalgar.com
```

Need `HTTP/2 200` and a trusted cert. Apex and `www` each need a hostname that matches the cert SAN.

---

## 12. QA BEFORE YOU STOP

- [ ] Zero agent names / brokerage / David Jozic / Jessica He
- [ ] No Offer/AggregateOffer schema
- [ ] Grep shows `mattamytrafalgar.com` not `trafalgarmattamy.com` in canonicals, sitemap, schema, AMP
- [ ] Table is `hawthorne_trafalgar_leads`; source `mattamy-trafalgar-landing`
- [ ] Hero form on home, usable at 390px and 320px, no sideways scroll
- [ ] AMP validator PASS on all AMP files
- [ ] Form insert works; thank-you redirect works
- [ ] Consent unchecked by default
- [ ] Live at `https://mattamytrafalgar.com` with valid SSL
- [ ] `/sitemap.xml` and `/robots.txt` 200 over HTTPS
- [ ] Independence disclaimer on every page

Do not commit secrets. Do not push unless asked, except this brief requires deploy — deploy when the site is complete.

If GitHub or Vercel CLI reports an invalid token, re-run `gh auth status` / `vercel whoami` with full permissions rather than treating the sandbox 401 as logged-out.
