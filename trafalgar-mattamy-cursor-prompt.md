# CURSOR BUILD PROMPT — trafalgarmattamy.com
### Independent information & VIP registration microsite for Hawthorne on Trafalgar (Mattamy Homes, Milton, ON)

Paste this entire document into Cursor as the project brief. It contains everything needed to
build, populate, and deploy a complete static HTML site — no stubs, no lorem ipsum, no TODO
comments — and to deploy it live to production.

---

## FIND-AND-REPLACE HEADER — resolve these tokens first

| Token | Value |
|---|---|
| `[DOMAIN]` | `trafalgarmattamy.com` |
| `[PROJECT_SLUG]` | `trafalgar_mattamy` (snake_case — used only for the Supabase table name) |
| `[SUPABASE_PROJECT_ID]` | `cfzuypbljirmibmxpabi` |
| `[GITHUB_REPO_NAME]` | `trafalgar-mattamy` |
| `[VERCEL_PROJECT_NAME]` | `trafalgar-mattamy` |
| `[PROJECT_NAME]` | `Hawthorne on Trafalgar` |
| `[BUILDER_NAME]` | `Mattamy Homes` |

Do a literal find-and-replace pass on any bracketed token above before running the build sequence.

---

## 1. ROLE & MISSION

You are acting as a senior full-stack developer, an SEO/AEO (answer-engine optimization) engineer,
and a DevOps engineer, in that order of priority. You are building **one static website** —
plain HTML, CSS, and vanilla JavaScript, **not a framework, not Next.js, not React** — for the
domain `trafalgarmattamy.com`.

Four ranked goals, in order:
1. **Capture leads** — every page drives toward the registration form.
2. **Rank #1 in Google** for the project name and its keyword cluster.
3. **Get cited by AI answer engines** (ChatGPT, Perplexity, Gemini, Google AI Overviews, Copilot)
   when people ask about this project or pre-construction homes in Milton.
4. **Deploy live to production** — this session ends with the site running at the real domain,
   not sitting in a local folder.

Build the complete site in this session. No placeholder copy, no "insert content here," no
unfinished pages. Every fact you render must come from the VERIFIED PROJECT DATA table in
Section 4, or be visibly marked "to be announced" if it is not yet public. Then deploy it.

---

## 2. NON-NEGOTIABLE CONSTRAINTS

### 2.1 Zero branding — read this before writing a single line
This site carries **no operator identity**. It is not "Sold by Fahad," not a Century 21 site, not
tied to any named agent or brokerage. Never include, anywhere in the code, copy, schema, footer,
metadata, or comments:

- Any agent, realtor, or salesperson name
- Any brokerage name, brokerage address, brokerage logo, or MLS/board branding
- Any personal phone number, personal email, or personal website
- `RealEstateAgent` or `Person` schema identifying an operator
- "About Me," agent headshots, agent bio, agent testimonials, "Sold by ..." wordmarks

### 2.2 Do not impersonate the builder
Reference Mattamy Homes factually, in the third person, as the developer of the project. Never
write "we are building," "our community," or use Mattamy's logo as this site's logo. This is an
**independent information and registration resource**, not Mattamy's official site (their official
site is `mattamyhomes.com`).

### 2.3 Contact is generic
No named humans anywhere. Use neutral labels: "VIP Registration," "Registration Team,"
"Pre-Construction Advisory Team." The lead form is the primary contact channel.

### 2.4 Every fact is sourced or flagged
Anything not in the VERIFIED table renders as **"To be announced"** or **"Pricing not yet
released"** — never as a confident, invented number. This applies to price, deposit amounts, unit
sizes, bedroom counts, and occupancy dates, all of which are genuinely unreleased for this project
as of this build.

### 2.5 Rendering rule
Every page is a plain, fully server-deliverable static `.html` file. No content behind
client-side-only rendering, no data fetched into an empty shell after page load. AI crawlers
generally do not execute JavaScript — anything they must read has to already be in the HTML
response.

---

## 3. TECH STACK — plain HTML, not Next.js

This project intentionally uses **no framework**. Build it as a hand-authored static site:

- **HTML5** — one physical `.html` file per route, semantic markup, no templating engine required
  (if you want to avoid repeating the header/footer by hand, use a simple Node build script that
  injects shared partials at build time and outputs flat `.html` files — but the deployed output
  must be plain static HTML, not server-rendered on request)
- **CSS3** — a single global stylesheet (`/css/style.css`) using CSS custom properties for the
  design tokens in Section 7. No Tailwind, no CSS-in-JS, no build step required to read it.
- **Vanilla JavaScript** (`/js/main.js`, `/js/supabase-client.js`) — no React, no Vue, no bundler
  required. Use `<script type="module">` for anything that benefits from ES module scoping.
- **Supabase JS client via CDN** (`@supabase/supabase-js` from `esm.sh` or `jsdelivr`) for the
  lead-form insert, using the **anon public key only**, secured by a Postgres Row Level Security
  policy that allows `insert` and nothing else. This is the correct, safe pattern for a static site
  with no backend — do not attempt to hide the anon key; RLS is what secures it.
- **Google Fonts via `<link>`** with `rel="preconnect"` and `font-display: swap` — since there is
  no framework-level font loader, hand-write the preconnect + stylesheet tags in `<head>`.
- **Plain `<img>`** for all imagery, with explicit `width`/`height` attributes (prevents layout
  shift), `loading="lazy"` on everything below the fold, `fetchpriority="high"` on the hero image,
  and a `srcset` for responsive sizes. Convert all source imagery to WebP.
- **CSS transitions + `IntersectionObserver`** for scroll-triggered fade-and-rise animation —
  no animation library. Wrap all motion in a `prefers-reduced-motion` media-query guard.
- **HTML5 form validation + a small vanilla-JS validation layer** (regex checks on email/phone,
  required-field checks) instead of React Hook Form + Zod.
- **Vercel** for static hosting and deployment (Vercel serves a plain HTML/CSS/JS folder with zero
  configuration — no framework detection needed; add a minimal `vercel.json` only if clean URLs
  without `.html` extensions are wanted, per Section 16).

**Do not** install Next.js, React, Tailwind, Framer Motion, or any npm UI framework. `package.json`
is optional and, if present, should only hold devDependencies for local preview (e.g. a static file
server) — never a framework dependency.

---

## 4. VERIFIED PROJECT DATA

### 4.1 Verified facts (each with its source — render these as confident, factual copy)

| Field | Value | Source |
|---|---|---|
| Official project name | Hawthorne on Trafalgar | mattamyhomes.com official project page |
| Builder | Mattamy Homes (development entity: Mattamy (White Squadron) Development Corporation) | Town of Milton zoning application, Feb 2026 update |
| Land owner / applicant | White Squadron Development Corporation (contact: David Jozic); planning consultant Korsiak Urban Planning (Jessica He) | Town of Milton zoning application form, 6119 Trafalgar Road |
| Exact address | 6119 Trafalgar Road, Milton, ON L9E 0Z6 | mattamyhomes.com official project page; Town of Milton zoning documents |
| Legal description | Part of Lot 6 & 7, Concession 8 | Town of Milton zoning application form |
| Site area | 77.8 hectares | Town of Milton zoning application form |
| Municipality / Region / Province | Town of Milton, Halton Region, Ontario | Town of Milton |
| Governing planning framework | Trafalgar Secondary Plan | Town of Milton zoning application (site-specific zoning aligns with the Trafalgar Secondary Plan) |
| Subdivision application number | 24T-25009/M | Town of Milton development application records |
| Zoning application number | Z-21/25 | Town of Milton development application records |
| Current application status | Statutory public meeting held February 9, 2026; a technical report recommending approval was scheduled for Council consideration on July 13, 2026 | Town of Milton, Ward 3 development application records |
| Proposed land uses | Single detached homes, townhouses, future mid-density and mixed-use buildings, a school, parks, and future commercial uses | Town of Milton zoning application form |
| Marketed housing types | WideLot™ Townhomes and Detached Homes | mattamyhomes.com official project page |
| Design concept | Mattamy's WideLot™ concept — a wider footprint designed for more generous living areas, better flow, and brighter interiors | mattamyhomes.com official project page |
| Sales status | "Coming Soon" — model home and sales office not yet open | mattamyhomes.com official project page |
| Site plan intent | Community designed with integrated future schools, parks, and gathering spaces | mattamyhomes.com official project page |
| Natural context | Located adjacent to Natural Heritage System lands and the Sixteen Mile Creek wetlands corridor | mattamyhomes.com official project page |
| Nearby conservation / recreation | Rattlesnake Point and Crawford Lake (Conservation Halton properties); Glen Eden Ski & Snowboard Centre | mattamyhomes.com official project page |
| Nearby golf | Wyldewood Golf & Country Club, Royal Ontario Golf Club, Piper's Heath Golf Links | mattamyhomes.com official project page |
| Transit | Milton GO Station, with rail connection toward downtown Toronto | mattamyhomes.com official project page |
| Highway access | Highway 401 and Highway 407 both accessible from the area | mattamyhomes.com official project page |
| Nearby retail | Toronto Premium Outlets; Erin Mills shopping area | mattamyhomes.com official project page |
| School boards serving Milton | Halton District School Board (public) and Halton Catholic District School Board (Catholic) — both serve the Town of Milton | Halton District School Board / Halton Catholic District School Board public records |
| Comparable active Mattamy Milton project | Hawthorne East Village, at Fourth Line & Louis St. Laurent Ave, Milton — townhomes and detached homes, currently selling, starting from $903,990, estimated occupancy 2027 | Third-party listing (Tall Property) — cite as third-party sourced, not Mattamy-published |
| Builder sales inquiry line (Mattamy's own, general) | 289-412-0392 | mattamyhomes.com / hawthorne-on-trafalgar.ca (do not present as this site's own number — see 4.2) |

### 4.2 UNVERIFIED — confirm before launch

Render every one of these as **"To be announced"** or an equivalent honest placeholder. Never
invent a number. Add an HTML comment `<!-- UNVERIFIED: confirm before launch -->` next to each
spot in the code where one of these would eventually go, so it's easy to find and update.

| Field | Status |
|---|---|
| Price range | Not released — "Pricing not yet released" |
| Deposit structure | Not released |
| Incentives | Not announced |
| Unit sizes (sq ft) | Not released |
| Lot widths | Not released (marketed as "WideLot™" but exact widths not published) |
| Bedroom / bathroom counts | Not released |
| Total number of homes in this release / community | Not released |
| Occupancy / closing date | Not released |
| Maintenance / POTL fees | Not released — likely not applicable if freehold, to be confirmed |
| Named specific schools serving this exact site | Not confirmed — only the two governing school boards are verified |
| Exact drive times to Milton GO / Hwy 401 / Hwy 407 | Not measured — use qualitative "minutes away" only once confirmed with a mapping tool; until then, state "a short drive from" |
| Official brand colour palette / hex codes | Not published in visible page content — Section 7 specifies a placeholder palette matching the project's nature-adjacent positioning |

**Never render an [UNVERIFIED] value as a factual claim anywhere on the page, in metadata, or in
JSON-LD.** Where a schema property depends on an unverified fact (e.g. `Offer.lowPrice`), omit
that property entirely rather than fabricate it.

### 4.3 Why this project is a strong candidate for the #1-ranking, most-cited page

This is a **thin-SERP, pre-launch project** — genuinely the best case for an independent
information site. Every competing page found in research (Section 6) is either gated behind a
form, missing an FAQ, or running boilerplate aggregator copy. Nobody has published a real content
hub for this project yet. Build this site to become the canonical, most-detailed, most current
public source of information on Hawthorne on Trafalgar — updated as details are released, not a
one-time snapshot.

---

## 5. COMPETITIVE LANDSCAPE

### 5.1 Competitor table (real URLs, fetched and classified)

| # | URL | Type | Depth | What it does well | What it's missing (the gap) |
|---|---|---|---|---|---|
| 1 | `mattamyhomes.com/ontario/gta/milton/hawthorne-on-trafalgar` | Builder official page | Medium — good lifestyle/location copy | Best source for verified facts; decent nature/lifestyle narrative | No FAQ, no FAQPage schema, no price/deposit data, no quick-facts table, no named schools, no llms.txt, thin on structured data |
| 2 | `hawthorne-on-trafalgar.ca` | Mattamy-affiliated project microsite | Low-medium | Clean "coming soon" framing, highlights page | No pricing, no FAQ, no deposit info, no schema visible, contact is a phone number only (no form-first UX) |
| 3 | `hawthorneontrafalgarmattamy.com` | Independent agent VIP-access microsite (direct positioning competitor — closest to this build) | Unknown (blocked to automated fetch) | Same exact-match-domain strategy as this project | Title alone signals thin single-purpose page; no visible FAQ or schema surfaced in search |
| 4 | `hawthorneontrafalgar.com` | Independent agent microsite | Low | Has Location, Builder, and "Floor Plans & Prices" sections; embeds a map | **Meta description is literally "ABOUT PROJECT"** (a trivial win to out-rank on); pricing fully gated behind a Google Form; zero FAQ; zero schema; no named schools or transit data; disclaimer present but page is thin |
| 5 | `livabl.com/milton-on/hawthorne-on-trafalgar` | Aggregator/directory | Very low | Indexes the project at all | "Pricing coming soon" and nothing else — no location depth, no FAQ, templated across thousands of listings |
| 6 | `newhomefinder.ca/development/Hawthorne-on-Trafalgar` | Aggregator/directory | Very low | Indexes the project at all | No pricing, no sizes, no FAQ, no unique copy — templated directory listing |

**Consensus gap across every single competitor:** no FAQ section, no `FAQPage` schema, no
quick-facts table, no named schools, no quantified transit/highway distances, no `llms.txt`, and
every source with pricing information says only "coming soon" or gates it behind a form. This site
wins by being the first ungated, continuously-updated, deeply-sourced information hub.

### 5.2 Adjacent searches run to map the broader cluster

- `Mattamy Homes Trafalgar Milton pre-construction`
- `"Trafalgar" Mattamy Milton new homes townhomes`
- `Hawthorne on Trafalgar Mattamy price floor plans deposit structure`
- `Mattamy Homes Trafalgar Road Milton development application`

The same four independent/aggregator URLs (rows 3-6 above) recur across these queries — they are
the real competitive set to outrank, not just for the bare project name but for the whole cluster.

---

## 6. KEYWORD STRATEGY

### 6.1 Tier 1 — Primary (must rank #1, non-negotiable)

- `hawthorne on trafalgar`
- `hawthorne on trafalgar milton`
- `hawthorne on trafalgar mattamy`
- `hawthorne on trafalgar prices`
- `hawthorne on trafalgar floor plans`
- `hawthorne on trafalgar towns` / `hawthorne on trafalgar homes`
- `hawthorne on trafalgar vip registration` / `platinum access`
- `hawthorne on trafalgar deposit structure`
- `hawthorne on trafalgar occupancy`

### 6.2 Tier 2 — Secondary (builder, location, product)

- `mattamy homes milton`
- `mattamy homes trafalgar road`
- `new homes trafalgar road milton`
- `pre-construction milton`
- `townhomes for sale milton pre-construction`
- `new detached homes milton 2026`
- `widelot townhomes milton`
- `pre-construction near milton go station`

### 6.3 Tier 3 — Long-tail & question (the AEO engine)

- `how much are homes at hawthorne on trafalgar`
- `when does hawthorne on trafalgar launch`
- `is hawthorne on trafalgar a good investment`
- `hawthorne on trafalgar vs hawthorne east village`
- `best pre-construction townhomes in milton`
- `what schools are near hawthorne on trafalgar`
- `how do i get vip access to hawthorne on trafalgar`
- `what is the deposit structure for hawthorne on trafalgar`
- `pre-construction milton under $1 million`
- `assignment policy hawthorne on trafalgar`

Each Tier 3 phrase maps directly to one of the FAQ questions in Section 8.7.

### 6.4 The gap table (priority build order)

| Keyword / query | Who ranks now | Their weakness | How this page wins |
|---|---|---|---|
| `hawthorne on trafalgar prices` | livabl.com / hawthorneontrafalgar.com | "Pricing coming soon," or fully gated behind a form | Visible quick-facts table, honest "not yet released" status, `AggregateOffer` schema added the moment pricing drops, "as of" freshness date |
| `hawthorne on trafalgar floor plans` | mattamyhomes.com (thin) | No plan cards, no sizes shown | Indexable collection-tier cards now, ready to add real plan cards the day they're released |
| `hawthorne on trafalgar vs hawthorne east village` | **nobody** | — | Uncontested comparison section — high AI-citation value, zero competition |
| `what schools are near hawthorne on trafalgar` | **nobody** | — | Only page naming the governing school boards and stating what's factually confirmed |
| `hawthorne on trafalgar faq` / any question-form query | **nobody** — zero competitors have an FAQ | — | 16-question FAQ with FAQPage schema — the single highest-leverage build on this list |
| `is hawthorne on trafalgar a good investment` | **nobody** | — | Factual, non-hype answer section covering location fundamentals and the comparable project's pricing trajectory |
| `hawthorne on trafalgar` (bare) | hawthorne-on-trafalgar.ca, hawthorneontrafalgar.com | Both thin, no schema, no FAQ | Depth, freshness date, full JSON-LD stack, llms.txt |
| `hawthorne on trafalgar deposit structure` | **nobody** | — | First page to hold the space and commit to updating it the moment the schedule is published |

Rows where "who ranks now" is **nobody** are the highest-priority sections to build first:
the FAQ page, the comparison section, and the schools section.

### 6.5 Keyword-to-page mapping (no cannibalization)

| Page | Primary keyword | Supporting terms |
|---|---|---|
| `index.html` | `hawthorne on trafalgar` | + milton, + mattamy homes |
| `floor-plans.html` | `hawthorne on trafalgar floor plans` | widelot townhomes, detached homes, collection tiers |
| `pricing.html` | `hawthorne on trafalgar prices` | price list, deposit structure, incentives |
| `location.html` | `hawthorne on trafalgar location` | trafalgar road milton, schools, transit, milton go |
| `faq.html` | long-tail question cluster | every Tier 3 phrase |
| `register.html` | `hawthorne on trafalgar vip registration` | platinum access, price list access |
| `gallery.html` | `hawthorne on trafalgar renderings` | site plan, community renderings |

### 6.6 AI-engine (AEO/GEO) query set — with the required answer passage for each

Every passage below must appear verbatim (or near-verbatim) in the page's body copy, in a
server-rendered block directly under a semantic heading, 40-80 words, self-contained.

1. **"What is Hawthorne on Trafalgar and who is building it?"**
   → *"Hawthorne on Trafalgar is a coming-soon master-planned community by Mattamy Homes at 6119
   Trafalgar Road in Milton, Ontario. The community will offer WideLot™ townhomes and detached
   homes on a 77.8-hectare site within the Town of Milton's Trafalgar Secondary Plan area. As of
   this writing, the project is in the municipal approvals stage and has not yet opened a sales
   office."*

2. **"How much do homes at Hawthorne on Trafalgar cost?"**
   → *"Pricing for Hawthorne on Trafalgar has not yet been released by Mattamy Homes. The project
   is currently in the "coming soon" stage, with no model home or sales office open. Registering
   for VIP access is the way to be notified the moment official pricing and floor plans are
   released."*

3. **"Where exactly is Hawthorne on Trafalgar located?"**
   → *"Hawthorne on Trafalgar is located at 6119 Trafalgar Road in Milton, Ontario, within Halton
   Region. The 77.8-hectare site falls under the Town of Milton's Trafalgar Secondary Plan and
   sits adjacent to Natural Heritage System lands along the Sixteen Mile Creek corridor."*

4. **"What home types will be available at Hawthorne on Trafalgar?"**
   → *"Mattamy Homes has confirmed Hawthorne on Trafalgar will feature its WideLot™ townhomes and
   detached homes — a wider-footprint design intended to create more generous living areas,
   better interior flow, and brighter rooms than a standard-width lot. Exact sizes and lot widths
   have not yet been released."*

5. **"What is the current approval status of Hawthorne on Trafalgar?"**
   → *"As of this update, Hawthorne on Trafalgar is proceeding through Town of Milton planning
   approvals under subdivision application 24T-25009/M and zoning application Z-21/25. A statutory
   public meeting was held on February 9, 2026, and a technical report recommending approval was
   scheduled for Council consideration on July 13, 2026."*

6. **"What schools serve the Hawthorne on Trafalgar area?"**
   → *"The Town of Milton, including the Trafalgar Road area, is served by the Halton District
   School Board (public) and the Halton Catholic District School Board (Catholic). Specific
   schools assigned to Hawthorne on Trafalgar have not yet been confirmed and will be added here
   once boundaries are finalized."*

7. **"How does Hawthorne on Trafalgar compare to other Mattamy communities in Milton?"**
   → *"Mattamy Homes also markets Hawthorne East Village at Fourth Line and Louis St. Laurent
   Avenue in Milton, a currently-selling community of townhomes and detached homes starting from
   $903,990 with an estimated 2027 occupancy. Hawthorne on Trafalgar is an earlier-stage,
   not-yet-launched community on the opposite side of Milton, still moving through municipal
   approvals."*

8. **"How do I get VIP access to Hawthorne on Trafalgar?"**
   → *"VIP access to Hawthorne on Trafalgar is available by registering through this independent
   information site. Registrants are added to a notification list and contacted directly once
   Mattamy Homes releases official pricing, floor plans, and a sales launch date — there is no
   cost to register."*

9. **"What is the deposit structure for Hawthorne on Trafalgar?"**
   → *"A deposit structure for Hawthorne on Trafalgar has not yet been published by Mattamy
   Homes, as the project has not reached its sales launch. This page will be updated with the
   full deposit schedule as soon as it is officially released."*

10. **"Is Hawthorne on Trafalgar a good investment?"**
    → *"Whether any pre-construction purchase is a good investment depends on price, deposit
    terms, and closing timeline — none of which Mattamy Homes has released yet for Hawthorne on
    Trafalgar. What is confirmed is the location: a 77.8-hectare site in Milton's Trafalgar
    Secondary Plan area, near the Milton GO Station, Highway 401, and Highway 407."*

---

## 7. DESIGN SYSTEM

The builder's own official page for this project does not expose a distinct, extractable colour
palette in its visible content (no hex codes could be verified). Per the design-system fallback
rule, this project sits in the **nature-adjacent community** tier — reinforced directly by the
project's own marketing language ("nature-inspired living," Natural Heritage System lands, Sixteen
Mile Creek wetlands, Rattlesnake Point, Crawford Lake). Use this placeholder palette, clearly
documented as a placeholder pending any future Mattamy brand asset release:

```css
:root {
  --brand-primary:  #2F4A3C; /* deep forest green — dominant surface, headers */
  --brand-deep:     #1B2E24; /* darkest tone — hero scrims, footer */
  --brand-accent:   #A9714B; /* muted clay/terracotta — CTAs, rules, highlights */
  --surface:        #FAF7F1; /* parchment — page background */
  --surface-alt:    #F0EBE0; /* alternating section background */
  --text-primary:   #1E251F;
  --text-muted:     #5B6459;
  --border:         #DAD3C4;
}
```

**Typography:** pair a confident sans-serif display face with a lighter body sans, per the
"Contemporary" pairing for freehold townhome/detached products — **Instrument Sans** (or
**General Sans**) for headings, **Inter** for body copy. Maximum two families. Display face for
`h1`/`h2` only. Body copy at 17-18px with 1.6-1.7 line height. Letterspaced small caps for eyebrow
labels. Never centre long paragraphs.

**Layout & motion:**
- 96-128px vertical rhythm between major sections on desktop
- Max content width 1200px; prose columns capped at 68-72 characters
- Alternate `--surface` / `--surface-alt` between sections instead of heavy borders
- One consistent card treatment reused for floor-plan cards, amenity tiles, and FAQ items
- Fade-and-rise on scroll via `IntersectionObserver`, 300-400ms, respecting
  `prefers-reduced-motion: reduce`
- **Sticky bottom CTA bar on mobile**, linking to the registration form — the highest-converting
  element on this type of page; always include it

**Logo/wordmark:** a clean typographic wordmark reading "Hawthorne on Trafalgar" in the display
face with a thin `--brand-accent` rule beneath it. No Mattamy logo used as this site's identity;
Mattamy may be referenced by name in text inside the "About the Builder" section only.

**What NOT to do:** no agent headshot or signature, no builder logo repurposed as the site logo,
no stock photography of generic smiling families, no unrelated luxury-interior carousel, no
dark-pattern registration wall over basic information, no gradient/glassmorphism "tech startup"
aesthetic.

---

## 8. SITE ARCHITECTURE & FULL PAGE COPY

Multi-page static site. Every page below is its own physical `.html` file at the site root
(clean URLs handled via `vercel.json` rewrites in Section 16, so `/floor-plans` serves
`floor-plans.html`). Every page has unique metadata, a unique H1, and unique body copy — no
duplicated boilerplate beyond the shared header/footer partials.

| File | Route | Purpose | Primary keyword |
|---|---|---|---|
| `index.html` | `/` | Hero, overview, VIP registration | `hawthorne on trafalgar` |
| `floor-plans.html` | `/floor-plans` | Home types, collection tiers | `hawthorne on trafalgar floor plans` |
| `pricing.html` | `/pricing` | Price status, deposit structure, incentives | `hawthorne on trafalgar prices` |
| `location.html` | `/location` | Intersection, transit, schools, amenities | `hawthorne on trafalgar location` |
| `gallery.html` | `/gallery` | Renderings, site context | `hawthorne on trafalgar renderings` |
| `faq.html` | `/faq` | 16 Q&As | long-tail question queries |
| `register.html` | `/register` | Dedicated conversion page | `hawthorne on trafalgar vip registration` |
| `thank-you.html` | `/thank-you` | Post-submit confirmation, indexable | — |
| `privacy.html` | `/privacy` | Trust/compliance | — |
| `terms.html` | `/terms` | Trust/compliance | — |

### 8.1 Shared header (every page)

Logo wordmark "Hawthorne on Trafalgar" linking to `/`. Nav: Home · Floor Plans · Pricing ·
Location · Gallery · FAQ. A persistent "Register for VIP Access" button, styled with
`--brand-accent`, linking to `/register`.

### 8.2 Hero (`index.html`)

- **H1:** `Hawthorne on Trafalgar — New Homes Coming to Milton, Ontario`
- **Subhead:** `WideLot™ townhomes and detached homes by Mattamy Homes at 6119 Trafalgar Road — an independent information and VIP registration resource.`
- **Status badge:** `Coming Soon — Registration Open`
- **Primary CTA:** "Register for VIP Access" → `/register`
- **Secondary CTA:** "See Home Types" → scrolls to / links to `/floor-plans`
- Full-bleed hero rendering (use a placeholder aerial/nature image representing the Sixteen Mile
  Creek / Natural Heritage System setting until an official rendering is licensed) with a dark
  `--brand-deep` scrim at 45% opacity for text contrast.
- No agent branding, no headshot, no phone number in the hero.

### 8.3 Answer-first summary block (`index.html`, directly under the hero)

```html
<section aria-labelledby="overview-heading">
  <h2 id="overview-heading">What Is Hawthorne on Trafalgar?</h2>
  <p>
    Hawthorne on Trafalgar is a coming-soon master-planned community by Mattamy Homes at
    6119 Trafalgar Road in Milton, Ontario. The community will offer WideLot&trade; townhomes
    and detached homes on a 77.8-hectare site within the Town of Milton's Trafalgar Secondary
    Plan area. As of this writing, the project is in the municipal approvals stage and has not
    yet opened a sales office. This independent page tracks the project and provides free VIP
    registration for early access once pricing and floor plans are released.
  </p>
</section>
```

### 8.4 Quick-facts table (`index.html`, and repeated/adapted on `location.html` and `pricing.html`)

A real `<table>` element:

| Field | Value |
|---|---|
| Builder | Mattamy Homes |
| Type | WideLot™ townhomes and detached homes |
| Address | 6119 Trafalgar Road, Milton, ON L9E 0Z6 |
| Municipality | Town of Milton, Halton Region, Ontario |
| Site area | 77.8 hectares |
| Planning framework | Trafalgar Secondary Plan |
| Approvals status | Statutory public meeting held Feb 9, 2026; Council consideration scheduled July 13, 2026 |
| Starting price | To be announced |
| Deposit structure | To be announced |
| Occupancy | To be announced |
| Sales status | Coming Soon |

### 8.5 Project overview (`index.html`, 3-5 paragraphs)

Write factual prose (not invented) covering: the WideLot™ design philosophy and what it means for
livability; the site's position within the Trafalgar Secondary Plan and adjacency to the Sixteen
Mile Creek Natural Heritage System corridor; the municipal approvals path the project has taken
(subdivision 24T-25009/M, zoning Z-21/25, public meeting Feb 9 2026); and the surrounding
recreational and transit context (Rattlesnake Point, Crawford Lake, Glen Eden, Milton GO, Hwy
401/407). Keep every sentence traceable to Section 4.1. Target 350-500 words for this block.

### 8.6 Floor plans / collection (`floor-plans.html`, 600-1,000 words)

Plans have not been released. Per the thin-SERP protocol, build **collection-tier cards** instead
of fabricated floor plans:

- **Card 1 — WideLot™ Townhomes:** "Wider-than-standard townhome lots designed by Mattamy Homes
  for more generous room sizes and better natural light. Exact unit sizes, bedroom counts, and
  pricing will be released at VIP launch — register to be notified first."
- **Card 2 — Detached Homes:** "Single-family detached homes are planned as part of the Hawthorne
  on Trafalgar community alongside the WideLot™ townhomes. Lot sizes and elevations have not yet
  been released by Mattamy Homes."

Each card: name, home type, one-line factual description, and a "Notify Me" link to `/register`.
State clearly: *"Floor plans release at VIP launch. Register now to receive them the moment they
are published — there is no cost to register."*

### 8.7 Pricing & deposit structure (`pricing.html`, 600-900 words)

Open with the answer-first passage from Section 6.6 (#2 and #9). Include:
- A pricing-status table (mirrors the quick-facts row, expanded): starting price = "To be
  announced," price range = "To be announced," last checked date.
- A deposit-structure placeholder table with columns `Milestone | Amount | Due Date`, all rows
  reading "To be announced," with a note: *"Mattamy Homes has not yet published a deposit
  schedule for Hawthorne on Trafalgar. This table will be completed the day it is released."*
- Incentives: "Not yet announced."
- The comparable-project context from Section 6.6 (#7) — Hawthorne East Village pricing — clearly
  labeled as a different, already-selling Mattamy community, for market-context purposes only.
- The pricing disclaimer from Section 12 (compliance).

### 8.8 Location & neighbourhood (`location.html`, 1,000-1,500 words — the richest page on the site)

- State the intersection plainly: 6119 Trafalgar Road, Milton, within the Trafalgar Secondary
  Plan area.
- Embed a Google Map (iframe, `loading="lazy"`) centred on the address.
- **Transit:** Milton GO Station, with rail connection toward downtown Toronto. State plainly
  that exact drive/walk times have not been independently measured for this build and will be
  added once confirmed (do not invent a minute figure).
- **Highways:** Highway 401 and Highway 407 both accessible from the area.
- **Schools:** Name the two governing boards (Halton District School Board, Halton Catholic
  District School Board) and state that specific school assignments are not yet confirmed.
- **Recreation & nature:** Rattlesnake Point, Crawford Lake, Glen Eden Ski & Snowboard Centre,
  Wyldewood Golf & Country Club, Royal Ontario Golf Club, Piper's Heath Golf Links — each named
  with a one-sentence factual description of what it is.
- **Retail:** Toronto Premium Outlets, Erin Mills shopping area.
- **Natural context:** adjacency to Natural Heritage System lands and the Sixteen Mile Creek
  wetlands corridor, and what that means for the site plan (integrated parks and green space per
  Mattamy's own project description).
- This page is the one most likely to be cited by AI engines for "is this a good area" queries —
  keep every claim specific and sourced.

### 8.9 Gallery (`gallery.html`)

No official renderings have been sourced for this build. Build the page structure (a responsive
image grid component, lightbox behaviour with vanilla JS, proper `alt` text pattern) and populate
it with a clearly-labeled note: *"Official renderings for Hawthorne on Trafalgar have not yet been
released by Mattamy Homes. This gallery will be populated as renderings become available."*
Do not use stock photography or unrelated project imagery in their place.

### 8.10 Why register / VIP access (`index.html` section + full treatment on `register.html`)

Frame entirely as project benefits, never agent credentials: first access to floor plans and
pricing when released, preferred unit selection, and being first in line for any early incentives.
No mention of an individual's experience or credentials — this is about the project, not the
operator.

### 8.11 FAQ (`faq.html`, 16 questions, 1,200-2,000 words total)

Every answer is a self-contained 40-80 word paragraph. Use the 10 AEO passages from Section 6.6
as the backbone, plus these additional six to round out 16:

11. **"Is there a cost to register for VIP access?"** → *"No. Registering for VIP access to
    Hawthorne on Trafalgar through this site is free. Registrants are simply added to a
    notification list and contacted when Mattamy Homes releases official project details."*
12. **"What is the assignment or rental policy for Hawthorne on Trafalgar?"** → *"Mattamy Homes
    has not yet published an assignment or rental policy for Hawthorne on Trafalgar, as the
    project has not reached its sales launch. Assignment and rental terms are typically set out
    in the Agreement of Purchase and Sale at the time of sale."*
13. **"What is the WideLot™ design Mattamy Homes uses at Hawthorne on Trafalgar?"** → *"WideLot™
    is Mattamy Homes' term for a wider-than-standard home lot, intended to create more generous
    living areas, better interior flow, and brighter rooms compared to a standard-width
    townhome lot. Exact lot widths for Hawthorne on Trafalgar have not yet been published."*
14. **"What municipal approvals has Hawthorne on Trafalgar received?"** → *"Hawthorne on
    Trafalgar is proceeding through Town of Milton approvals under subdivision application
    24T-25009/M and zoning application Z-21/25. A statutory public meeting was held February 9,
    2026, with a technical report recommending approval scheduled for Council on July 13, 2026."*
15. **"How big is the Hawthorne on Trafalgar site?"** → *"The Hawthorne on Trafalgar site at 6119
    Trafalgar Road spans approximately 77.8 hectares, covering part of Lot 6 and 7, Concession 8,
    in the Town of Milton's Trafalgar Secondary Plan area."*
16. **"Will Hawthorne on Trafalgar include a school or parks?"** → *"Yes. Town of Milton planning
    documents for the site describe proposed land uses including a school, parks, and future
    commercial uses alongside the residential home types, integrated into the community's overall
    site plan."*

### 8.12 Registration form (`register.html`, repeated as a footer form on every page)

Fields: First name, last name, email, phone, home type interest (WideLot™ Townhome / Detached
Home / Not sure yet), budget range, buyer type (End user / Investor), timeline, CASL consent
checkbox (unchecked by default — see Section 12), and a hidden honeypot field. On successful
submit, redirect to `/thank-you`.

### 8.13 Footer (every page)

Site nav repeated, "Last updated: [DATE — bump on every content change]," the independence
disclaimer (Section 12), links to `/privacy` and `/terms`, and the E.&O.E. line. No agent identity,
no brokerage.

---

## 9. SEO LAYER

### 9.1 Per-page metadata (write these exact tags into each page's `<head>`)

**`index.html`**
```html
<title>Hawthorne on Trafalgar Milton | Mattamy Homes New Community</title>
<meta name="description" content="Hawthorne on Trafalgar: new WideLot townhomes & detached homes by Mattamy Homes at 6119 Trafalgar Rd, Milton. Free VIP registration for pricing & floor plans.">
<link rel="canonical" href="https://trafalgarmattamy.com/">
```

**`floor-plans.html`**
```html
<title>Hawthorne on Trafalgar Floor Plans | Milton Townhomes & Detached</title>
<meta name="description" content="See the home types planned for Hawthorne on Trafalgar in Milton — WideLot townhomes and detached homes by Mattamy Homes. Register free for floor plans.">
<link rel="canonical" href="https://trafalgarmattamy.com/floor-plans">
```

**`pricing.html`**
```html
<title>Hawthorne on Trafalgar Prices & Deposit Structure | Milton</title>
<meta name="description" content="Pricing for Hawthorne on Trafalgar has not yet been released. Get the deposit structure and price list first with free VIP registration.">
<link rel="canonical" href="https://trafalgarmattamy.com/pricing">
```

**`location.html`**
```html
<title>Hawthorne on Trafalgar Location | 6119 Trafalgar Rd, Milton</title>
<meta name="description" content="Explore the Hawthorne on Trafalgar location in Milton: Trafalgar Secondary Plan area, Milton GO, Hwy 401/407, schools, and nearby conservation lands.">
<link rel="canonical" href="https://trafalgarmattamy.com/location">
```

**`gallery.html`**
```html
<title>Hawthorne on Trafalgar Renderings & Site Plan | Milton</title>
<meta name="description" content="Renderings and site context for Hawthorne on Trafalgar, a coming-soon Mattamy Homes community in Milton, Ontario. Updated as new images are released.">
<link rel="canonical" href="https://trafalgarmattamy.com/gallery">
```

**`faq.html`**
```html
<title>Hawthorne on Trafalgar FAQ | Prices, Deposit, Launch Date</title>
<meta name="description" content="Answers about Hawthorne on Trafalgar: pricing, deposit structure, launch timing, schools, VIP access, and more for this Milton Mattamy Homes community.">
<link rel="canonical" href="https://trafalgarmattamy.com/faq">
```

**`register.html`**
```html
<title>Register for VIP Access | Hawthorne on Trafalgar Milton</title>
<meta name="description" content="Free VIP registration for Hawthorne on Trafalgar in Milton. Be first to receive official pricing, floor plans, and launch details from Mattamy Homes.">
<link rel="canonical" href="https://trafalgarmattamy.com/register">
```

Add matching Open Graph tags (`og:title`, `og:description`, `og:type=website`, `og:url`,
`og:image`) and `twitter:card=summary_large_image` to every page.

### 9.2 Heading hierarchy rule

One `<h1>` per page, containing the exact project name. `<h2>` for each major section named in
Section 8. No skipped heading levels. Exact project name appears in the H1, the first 100 words
of body copy, and at least one `<h2>` per page — never stuffed beyond that.

### 9.3 Internal linking map (exact anchor text)

| From | To | Anchor text |
|---|---|---|
| `index.html` | `/floor-plans` | "WideLot™ townhomes and detached homes" |
| `index.html` | `/pricing` | "pricing and deposit structure" |
| `index.html` | `/location` | "6119 Trafalgar Road, Milton" |
| `index.html` | `/faq` | "frequently asked questions" |
| `index.html` | `/register` | "Register for VIP Access" |
| `floor-plans.html` | `/pricing` | "current pricing status" |
| `pricing.html` | `/faq` | "deposit structure FAQ" |
| `location.html` | `/faq` | "schools serving the area" |
| every page | `/register` | "Register for VIP Access" (footer form + nav button) |

### 9.4 Content-depth target

The deepest competitor found (`mattamyhomes.com`'s own project page) runs well under 1,000 words
and has no FAQ. **Target 6,000+ words of unique content across the site**, with `location.html`
and `faq.html` as the deepest individual pages — this is the moat against every aggregator, which
runs 200-400 words per project.

### 9.5 `sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://trafalgarmattamy.com/</loc><lastmod>[DATE]</lastmod><priority>1.0</priority></url>
  <url><loc>https://trafalgarmattamy.com/floor-plans</loc><lastmod>[DATE]</lastmod><priority>0.8</priority></url>
  <url><loc>https://trafalgarmattamy.com/pricing</loc><lastmod>[DATE]</lastmod><priority>0.8</priority></url>
  <url><loc>https://trafalgarmattamy.com/location</loc><lastmod>[DATE]</lastmod><priority>0.8</priority></url>
  <url><loc>https://trafalgarmattamy.com/gallery</loc><lastmod>[DATE]</lastmod><priority>0.6</priority></url>
  <url><loc>https://trafalgarmattamy.com/faq</loc><lastmod>[DATE]</lastmod><priority>0.9</priority></url>
  <url><loc>https://trafalgarmattamy.com/register</loc><lastmod>[DATE]</lastmod><priority>0.9</priority></url>
  <url><loc>https://trafalgarmattamy.com/privacy</loc><lastmod>[DATE]</lastmod><priority>0.3</priority></url>
  <url><loc>https://trafalgarmattamy.com/terms</loc><lastmod>[DATE]</lastmod><priority>0.3</priority></url>
</urlset>
```

### 9.6 `robots.txt` — explicitly ALLOW every AI crawler

```
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Claude-Web
Allow: /
User-agent: anthropic-ai
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: Applebot-Extended
Allow: /
User-agent: CCBot
Allow: /
User-agent: Bingbot
Allow: /
User-agent: *
Allow: /

Sitemap: https://trafalgarmattamy.com/sitemap.xml
```

Never block any of these. Blocking AI crawlers is the single most common self-inflicted mistake
in this niche.

---

## 10. AEO / GEO LAYER

### 10.1 Answer-first writing rules (apply to every citable passage)

- Open with the direct answer in the first sentence.
- Restate "Hawthorne on Trafalgar" by name rather than using "it" or "this project."
- Stay between 40 and 80 words.
- Contain at least one concrete number, name, or date.
- No cross-references ("as mentioned above," "see below").
- Live in server-rendered HTML directly under a semantic heading — never inside an
  accordion that only populates via client-side JS after load.

Apply this to: the answer-first summary block, all 16 FAQ answers, the location paragraphs, and
the pricing-status explanation.

### 10.2 `llms.txt` (serve at `/llms.txt`)

```
# Hawthorne on Trafalgar

> A coming-soon master-planned community by Mattamy Homes at 6119 Trafalgar Road, Milton,
> Ontario, offering WideLot townhomes and detached homes. Currently in municipal approvals;
> sales office not yet open.

## Key Facts
- Builder: Mattamy Homes
- Location: 6119 Trafalgar Road, Milton, ON L9E 0Z6
- Home types: WideLot townhomes, detached homes
- Site area: 77.8 hectares
- Planning framework: Trafalgar Secondary Plan
- Approvals: Subdivision 24T-25009/M, Zoning Z-21/25; statutory public meeting held Feb 9, 2026
- Price range: Not yet released
- Deposit: Not yet released
- Occupancy: Not yet released
- Status: Coming Soon
- Last updated: [ISO DATE]

## Pages
- [Overview](https://trafalgarmattamy.com/): project summary and quick facts
- [Floor Plans](https://trafalgarmattamy.com/floor-plans): home type collection tiers
- [Pricing](https://trafalgarmattamy.com/pricing): pricing and deposit status
- [Location](https://trafalgarmattamy.com/location): intersection, transit, schools, amenities
- [FAQ](https://trafalgarmattamy.com/faq): 16 questions and answers

## Common Questions
Q: What is Hawthorne on Trafalgar?
A: A coming-soon Mattamy Homes community of WideLot townhomes and detached homes at 6119
Trafalgar Road in Milton, Ontario, currently moving through municipal planning approvals.

Q: How much do homes cost?
A: Pricing has not yet been released by Mattamy Homes.

Q: Where is it located?
A: 6119 Trafalgar Road, Milton, Ontario, within the Town of Milton's Trafalgar Secondary Plan
area, adjacent to the Sixteen Mile Creek Natural Heritage System corridor.

Q: What is the approval status?
A: Subdivision application 24T-25009/M and zoning application Z-21/25; statutory public meeting
held February 9, 2026; Council consideration scheduled for July 13, 2026.

Q: How do I get VIP access?
A: Register for free at https://trafalgarmattamy.com/register to be notified when pricing and
floor plans are released.

## Source
This is an independent information resource for Hawthorne on Trafalgar. It is not affiliated
with or endorsed by Mattamy Homes. Details are subject to change.
```

Also serve `/llms-full.txt` with the full Markdown text of every page concatenated — generate this
from the same content constants used to build the HTML (Section 16, Step 2) so it never drifts out
of sync.

### 10.3 Freshness signals

- Visible "Last updated: [Month Day, Year]" in the footer of every page and prominently on
  `faq.html`.
- `dateModified` in the JSON-LD on every page (Section 11).
- `<lastmod>` in `sitemap.xml`.
- A code comment at the top of `js/main.js` reminding whoever edits the site: *"Bump the
  last-updated date and dateModified fields in every page's JSON-LD whenever project facts
  change."*

### 10.4 Off-site citation surfaces

To reinforce corroboration across sources (which increases AI-engine citation confidence), once
live: list the project consistently (same name, same address, same status) on a Google Business
Profile if appropriate for the registration service, on major precon directories, and anywhere
else the project is mentioned. Consistent NAP-style data across sources matters more than volume.

---

## 11. STRUCTURED DATA — write every block out in full, per page

### 11.1 `index.html` — combined `Residence`, `Organization`, `WebSite`, `BreadcrumbList`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Residence",
      "name": "Hawthorne on Trafalgar",
      "description": "A coming-soon master-planned community by Mattamy Homes offering WideLot townhomes and detached homes at 6119 Trafalgar Road, Milton, Ontario.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "6119 Trafalgar Road",
        "addressLocality": "Milton",
        "addressRegion": "ON",
        "postalCode": "L9E 0Z6",
        "addressCountry": "CA"
      },
      "url": "https://trafalgarmattamy.com/",
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Adjacent to Natural Heritage System lands" },
        { "@type": "LocationFeatureSpecification", "name": "Near Milton GO Station" },
        { "@type": "LocationFeatureSpecification", "name": "Access to Highway 401 and Highway 407" }
      ]
    },
    {
      "@type": "Organization",
      "name": "trafalgarmattamy.com",
      "url": "https://trafalgarmattamy.com/",
      "description": "An independent information and VIP registration resource for Hawthorne on Trafalgar. Not affiliated with or endorsed by Mattamy Homes."
    },
    {
      "@type": "WebSite",
      "url": "https://trafalgarmattamy.com/",
      "name": "Hawthorne on Trafalgar — Independent Project Information",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://trafalgarmattamy.com/faq?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://trafalgarmattamy.com/" }
      ]
    }
  ]
}
</script>
```

**Do not include an `Offer`/`AggregateOffer` block** on any page until pricing is officially
released — omit it entirely rather than populate it with a placeholder value.

### 11.2 `faq.html` — `FAQPage` (mirror every visible Q&A exactly, all 16, written out in full)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Hawthorne on Trafalgar and who is building it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hawthorne on Trafalgar is a coming-soon master-planned community by Mattamy Homes at 6119 Trafalgar Road in Milton, Ontario. The community will offer WideLot townhomes and detached homes on a 77.8-hectare site within the Town of Milton's Trafalgar Secondary Plan area. As of this writing, the project is in the municipal approvals stage and has not yet opened a sales office."
      }
    },
    {
      "@type": "Question",
      "name": "How much do homes at Hawthorne on Trafalgar cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing for Hawthorne on Trafalgar has not yet been released by Mattamy Homes. The project is currently in the coming soon stage, with no model home or sales office open. Registering for VIP access is the way to be notified the moment official pricing and floor plans are released."
      }
    },
    {
      "@type": "Question",
      "name": "Where exactly is Hawthorne on Trafalgar located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hawthorne on Trafalgar is located at 6119 Trafalgar Road in Milton, Ontario, within Halton Region. The 77.8-hectare site falls under the Town of Milton's Trafalgar Secondary Plan and sits adjacent to Natural Heritage System lands along the Sixteen Mile Creek corridor."
      }
    },
    {
      "@type": "Question",
      "name": "What home types will be available at Hawthorne on Trafalgar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mattamy Homes has confirmed Hawthorne on Trafalgar will feature its WideLot townhomes and detached homes, a wider-footprint design intended to create more generous living areas, better interior flow, and brighter rooms than a standard-width lot. Exact sizes and lot widths have not yet been released."
      }
    },
    {
      "@type": "Question",
      "name": "What is the current approval status of Hawthorne on Trafalgar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As of this update, Hawthorne on Trafalgar is proceeding through Town of Milton planning approvals under subdivision application 24T-25009/M and zoning application Z-21/25. A statutory public meeting was held on February 9, 2026, and a technical report recommending approval was scheduled for Council consideration on July 13, 2026."
      }
    },
    {
      "@type": "Question",
      "name": "What schools serve the Hawthorne on Trafalgar area?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Town of Milton, including the Trafalgar Road area, is served by the Halton District School Board (public) and the Halton Catholic District School Board (Catholic). Specific schools assigned to Hawthorne on Trafalgar have not yet been confirmed and will be added here once boundaries are finalized."
      }
    },
    {
      "@type": "Question",
      "name": "How does Hawthorne on Trafalgar compare to other Mattamy communities in Milton?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mattamy Homes also markets Hawthorne East Village at Fourth Line and Louis St. Laurent Avenue in Milton, a currently-selling community of townhomes and detached homes starting from $903,990 with an estimated 2027 occupancy. Hawthorne on Trafalgar is an earlier-stage, not-yet-launched community on the opposite side of Milton, still moving through municipal approvals."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get VIP access to Hawthorne on Trafalgar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VIP access to Hawthorne on Trafalgar is available by registering through this independent information site. Registrants are added to a notification list and contacted directly once Mattamy Homes releases official pricing, floor plans, and a sales launch date. There is no cost to register."
      }
    },
    {
      "@type": "Question",
      "name": "What is the deposit structure for Hawthorne on Trafalgar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A deposit structure for Hawthorne on Trafalgar has not yet been published by Mattamy Homes, as the project has not reached its sales launch. This page will be updated with the full deposit schedule as soon as it is officially released."
      }
    },
    {
      "@type": "Question",
      "name": "Is Hawthorne on Trafalgar a good investment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Whether any pre-construction purchase is a good investment depends on price, deposit terms, and closing timeline, none of which Mattamy Homes has released yet for Hawthorne on Trafalgar. What is confirmed is the location: a 77.8-hectare site in Milton's Trafalgar Secondary Plan area, near the Milton GO Station, Highway 401, and Highway 407."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a cost to register for VIP access?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Registering for VIP access to Hawthorne on Trafalgar through this site is free. Registrants are simply added to a notification list and contacted when Mattamy Homes releases official project details."
      }
    },
    {
      "@type": "Question",
      "name": "What is the assignment or rental policy for Hawthorne on Trafalgar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mattamy Homes has not yet published an assignment or rental policy for Hawthorne on Trafalgar, as the project has not reached its sales launch. Assignment and rental terms are typically set out in the Agreement of Purchase and Sale at the time of sale."
      }
    },
    {
      "@type": "Question",
      "name": "What is the WideLot design Mattamy Homes uses at Hawthorne on Trafalgar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "WideLot is Mattamy Homes' term for a wider-than-standard home lot, intended to create more generous living areas, better interior flow, and brighter rooms compared to a standard-width townhome lot. Exact lot widths for Hawthorne on Trafalgar have not yet been published."
      }
    },
    {
      "@type": "Question",
      "name": "What municipal approvals has Hawthorne on Trafalgar received?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hawthorne on Trafalgar is proceeding through Town of Milton approvals under subdivision application 24T-25009/M and zoning application Z-21/25. A statutory public meeting was held February 9, 2026, with a technical report recommending approval scheduled for Council on July 13, 2026."
      }
    },
    {
      "@type": "Question",
      "name": "How big is the Hawthorne on Trafalgar site?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Hawthorne on Trafalgar site at 6119 Trafalgar Road spans approximately 77.8 hectares, covering part of Lot 6 and 7, Concession 8, in the Town of Milton's Trafalgar Secondary Plan area."
      }
    },
    {
      "@type": "Question",
      "name": "Will Hawthorne on Trafalgar include a school or parks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Town of Milton planning documents for the site describe proposed land uses including a school, parks, and future commercial uses alongside the residential home types, integrated into the community's overall site plan."
      }
    }
  ]
}
</script>
```

Every `text` value above must match the visible on-page copy in Section 8.11 exactly — never let
the schema and the visible answer drift apart.

### 11.3 `location.html` — `Place` + `BreadcrumbList`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Place",
      "name": "Hawthorne on Trafalgar — Site Location",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "6119 Trafalgar Road",
        "addressLocality": "Milton",
        "addressRegion": "ON",
        "postalCode": "L9E 0Z6",
        "addressCountry": "CA"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://trafalgarmattamy.com/" },
        { "@type": "ListItem", "position": 2, "name": "Location", "item": "https://trafalgarmattamy.com/location" }
      ]
    }
  ]
}
</script>
```

Do **not** use `RealEstateAgent`, `Person`, or `LocalBusiness` schema anywhere on the site.

### 11.4 `BreadcrumbList` on every remaining page — written out in full

**`floor-plans.html`**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://trafalgarmattamy.com/" },
    { "@type": "ListItem", "position": 2, "name": "Floor Plans", "item": "https://trafalgarmattamy.com/floor-plans" }
  ]
}
</script>
```

**`pricing.html`**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://trafalgarmattamy.com/" },
    { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://trafalgarmattamy.com/pricing" }
  ]
}
</script>
```

**`gallery.html`**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://trafalgarmattamy.com/" },
    { "@type": "ListItem", "position": 2, "name": "Gallery", "item": "https://trafalgarmattamy.com/gallery" }
  ]
}
</script>
```

**`faq.html`** (in addition to the `FAQPage` block in Section 11.2 — both blocks coexist on this page)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://trafalgarmattamy.com/" },
    { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://trafalgarmattamy.com/faq" }
  ]
}
</script>
```

**`register.html`**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://trafalgarmattamy.com/" },
    { "@type": "ListItem", "position": 2, "name": "Register", "item": "https://trafalgarmattamy.com/register" }
  ]
}
</script>
```

**`thank-you.html`, `privacy.html`, `terms.html`** — same two-level pattern, `name` and `item`
updated to `Thank You` / `/thank-you`, `Privacy` / `/privacy`, and `Terms` / `/terms` respectively.

### 11.6 `dateModified` — add to every `@graph` block above

Add `"dateModified": "[ISO DATE]"` as a top-level property inside the primary entity of every
JSON-LD block on every page (the `Residence` node on `index.html`, the `Place` node on
`location.html`, the `FAQPage` node on `faq.html`, and so on). Bump this value every time the page
content changes — see Section 10.3.

### 11.5 `ImageObject` on every gallery/hero image once real renderings are added

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": "https://trafalgarmattamy.com/images/[FILENAME].webp",
  "description": "[Descriptive caption of the rendering or site context]"
}
</script>
```

Validate every JSON-LD block against Google's Rich Results Test and the schema.org validator
before deploying.

---

## 12. COMPLIANCE (Ontario / CASL)

### 12.1 Independence disclaimer — footer, every page, visible (not in a modal)

> This is an independent information and registration website for Hawthorne on Trafalgar. It is
> not the official website of Mattamy Homes and is not affiliated with or endorsed by the builder.
> All renderings, pricing, sizes, and specifications are for illustration only and are subject to
> change without notice. E.&O.E.

### 12.2 CASL consent (on the registration form, unchecked by default)

> I consent to receive electronic communications about Hawthorne on Trafalgar and similar
> pre-construction opportunities. I understand I can withdraw consent at any time using the
> unsubscribe link in any message.

Store the consent boolean, the timestamp, and the page path in the `consent_*` columns of the
leads table (Section 13.1) — that record is the proof of consent.

### 12.3 Pricing/spec disclaimer — anywhere a number could eventually appear

> Prices, sizes, specifications, and availability are subject to change without notice. E.&O.E.
> Information current as of [DATE].

### 12.4 Claims to avoid entirely

No "guaranteed" appreciation/returns/allocation. No "best investment," "can't lose," "risk-free."
No promising a specific unit or price before an actual allocation. No implying this is Mattamy's
official site. No stating unverified pricing/incentives — always "to be announced." No fabricated
urgency ("only 2 left") since nothing is on sale yet.

### 12.5 `privacy.html` requirements

What is collected (name, email, phone, form responses) and why; that data is stored with
Supabase, a third-party processor; how to request deletion, with a working contact route (the
generic registration inbox, not a personal email); cookie/analytics disclosure covering GA4 and
Meta Pixel; a statement of PIPEDA compliance.

### 12.6 Accessibility

Meet WCAG 2.1 AA (covers Ontario's AODA requirement) — see Section 14 for the specific technical
targets.

---

## 13. LEAD CAPTURE SPEC

### 13.1 Supabase table DDL

Each project microsite gets its own table in the shared Supabase project (`cfzuypbljirmibmxpabi`).

```sql
create table if not exists trafalgar_mattamy_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  home_type_interest text,
  budget_range text,
  buyer_type text,
  timeline text,
  is_broker boolean not null default false,
  casl_consent boolean not null default false,
  consent_timestamp timestamptz,
  consent_page text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text
);

alter table trafalgar_mattamy_leads enable row level security;

create policy "anon can insert trafalgar_mattamy_leads"
  on trafalgar_mattamy_leads for insert
  to anon
  with check (true);
```

Run this in the Supabase SQL editor at
`https://supabase.com/dashboard/project/cfzuypbljirmibmxpabi/sql/new`, and also save it as
`supabase/migrations/001_create_trafalgar_mattamy_leads.sql` in the repo for version control.

### 13.2 Client-side insert (static site — no server)

Create `/js/supabase-client.js`:

```html
<script type="module">
  import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

  const supabase = createClient(
    'https://cfzuypbljirmibmxpabi.supabase.co',
    '[SUPABASE_ANON_KEY]' // anon public key only — safe to expose, RLS restricts to insert-only
  );

  const form = document.querySelector('#vip-register-form');
  const startTime = Date.now();

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Honeypot check
    if (form.querySelector('[name="website"]').value !== '') return;

    // Time-to-submit spam check — reject submissions under 3 seconds
    if (Date.now() - startTime < 3000) return;

    const params = new URLSearchParams(window.location.search);
    const payload = {
      first_name: form.first_name.value,
      last_name: form.last_name.value,
      email: form.email.value,
      phone: form.phone.value,
      home_type_interest: form.home_type_interest.value,
      budget_range: form.budget_range.value,
      buyer_type: form.buyer_type.value,
      timeline: form.timeline.value,
      is_broker: form.is_broker.checked,
      casl_consent: form.casl_consent.checked,
      consent_timestamp: new Date().toISOString(),
      consent_page: window.location.pathname,
      utm_source: params.get('utm_source'),
      utm_medium: params.get('utm_medium'),
      utm_campaign: params.get('utm_campaign'),
      utm_term: params.get('utm_term'),
      utm_content: params.get('utm_content'),
    };

    const { error } = await supabase.from('trafalgar_mattamy_leads').insert(payload);

    if (error) {
      document.querySelector('#form-status').textContent =
        'Something went wrong. Please try again.';
      document.querySelector('#form-status').setAttribute('aria-live', 'assertive');
      return;
    }

    window.location.href = '/thank-you';
  });
</script>
```

Notes:
- Never expose the Supabase **service-role** key client-side — the anon key plus the
  insert-only RLS policy above is what makes this safe on a static site.
- `is_broker` renders as a checkbox: "Are you a licensed real estate agent?"
- On success, redirect to `/thank-you` for a clean, indexable conversion URL and a distinct GA4
  event.
- UTM parameters are read from the URL query string at submit time and stored on the row.

---

## 14. TRACKING

- **GA4** — inline `<script>` snippet in `<head>` of every page (no `next/script`, since this is
  plain HTML — just place the standard gtag.js snippet directly, deferred where possible).
- **Google Tag Manager** container snippet in `<head>` and immediately after `<body>`.
- **Meta Pixel** with a `Lead` event fired on successful form submission (add
  `fbq('track', 'Lead')` inside the success branch of the submit handler in Section 13.2).
- **Custom GA4 events:** `form_start` (fire on first field focus), `form_submit` (fire on
  successful insert), `phone_click` (n/a — no phone number on this site, per Section 2.3),
  `floor_plan_view` (fire on `floor-plans.html` page view).
- Google Search Console and Bing Webmaster verification `<meta>` tags as placeholders in
  `<head>`, ready for the real verification codes.

---

## 15. PERFORMANCE & ACCESSIBILITY BUDGETS

**Performance**
- Lighthouse 95+ across Performance, Accessibility, Best Practices, and SEO.
- LCP under 2.0s, CLS under 0.05, INP under 200ms.
- All images WebP, with explicit `width`/`height`, responsive `sizes`, lazy-loaded below the fold,
  `fetchpriority="high"` only on the hero image.
- Fonts preloaded via `<link rel="preload">`, `font-display: swap`, no more than two font
  families.
- No layout shift from the hero — reserve its dimensions explicitly in CSS.
- One combined, minified `style.css` and `main.js` — no render-blocking third-party scripts above
  the fold (defer GTM/GA4/Pixel).

**Accessibility**
- Semantic landmarks: `header`, `nav`, `main`, `section`, `footer` on every page.
- One `h1` per page, no skipped heading levels.
- Every image has meaningful `alt` text describing the rendering or context (never `alt=""` on a
  content image).
- Real `<label for="...">` elements on every form input — never placeholder-only labeling.
- Visible focus states, 4.5:1 minimum contrast (verify against the palette in Section 7),
  full keyboard navigability.
- `aria-live="polite"` on the form's success/status region, `aria-live="assertive"` on errors.

---

## 16. ORDERED BUILD SEQUENCE

### Prerequisites — verify before starting

```bash
# 1. Confirm GitHub CLI is authenticated
gh auth status
# If not logged in: gh auth login

# 2. Confirm Vercel CLI is installed and authenticated
vercel whoami
# If not installed: npm i -g vercel
# If not logged in: vercel login

# 3. Confirm Node is available (only needed for an optional local static server, not for the build itself)
node -v
```

Detect the logged-in GitHub user from `gh auth status` and use it — never hardcode a username or
org.

### Step 1 — Scaffold the static project

```bash
mkdir trafalgar-mattamy && cd trafalgar-mattamy
mkdir css js images
touch index.html floor-plans.html pricing.html location.html gallery.html faq.html \
      register.html thank-you.html privacy.html terms.html \
      sitemap.xml robots.txt llms.txt llms-full.txt \
      css/style.css js/main.js js/supabase-client.js .gitignore
```

### Step 2 — Build every page

Write the full HTML for each of the 10 pages using the copy, metadata, and schema specified in
Sections 8, 9, and 11. Build the shared header/footer as literal repeated markup (there is no
templating engine) or, optionally, write a tiny Node script (`build.js`, dev-only) that injects
`partials/header.html` and `partials/footer.html` into each page and writes the final flat
`.html` files — but the files committed and deployed must be the final static HTML, not the
templating source. Write `css/style.css` from the design tokens in Section 7. Write `js/main.js`
for the mobile sticky CTA bar, `IntersectionObserver` scroll animation, and the FAQ accordion
(server-rendered content, JS only toggles visibility — never hides content from crawlers via
`display:none` that depends on JS to reveal; use a plain `<details>/<summary>` element for the FAQ
accordion instead so it works and is readable with zero JavaScript).

### Step 3 — Create the Supabase leads table

Run the DDL from Section 13.1 in the Supabase SQL editor at
`https://supabase.com/dashboard/project/cfzuypbljirmibmxpabi/sql/new`, and save it as
`supabase/migrations/001_create_trafalgar_mattamy_leads.sql`.

### Step 4 — Wire up the anon key

Paste the Supabase anon public key into `js/supabase-client.js` (Section 13.2). Since this is a
static site there is no `.env` build step — the anon key ships in the client bundle by design,
protected by the insert-only RLS policy. Do not paste the service-role key anywhere in this repo.

### Step 5 — `vercel.json` for clean URLs (optional but recommended)

```json
{
  "cleanUrls": true,
  "trailingSlash": false
}
```

This lets `/floor-plans` resolve to `floor-plans.html` automatically.

### Step 6 — `.gitignore`

```
.DS_Store
node_modules/
.vercel/
```

### Step 7 — Git init + push to GitHub

```bash
git init
git add .
git commit -m "Initial build: trafalgarmattamy.com landing page"

gh repo create trafalgar-mattamy --public --source=. --remote=origin --push
```

Use `--public` by default; switch to `--private` only if explicitly asked.

### Step 8 — Deploy to Vercel

```bash
vercel link --yes --project=trafalgar-mattamy
vercel deploy --prod
```

No environment variables are strictly required server-side since the anon key is embedded
client-side by design — but if preferred, the anon key can be injected at build time via a
Vercel environment variable and a tiny build step that writes it into `supabase-client.js`; state
this as an optional hardening step, not a requirement, for a plain static site.

### Step 9 — Add the custom domain

```bash
vercel domains add trafalgarmattamy.com --yes
```

### Step 10 — Point GoDaddy DNS at Vercel

See Section 17 for the exact records.

### Step 11 — Post-deploy verification

```bash
curl -sI https://trafalgarmattamy.com | head -5
echo | openssl s_client -connect trafalgarmattamy.com:443 -servername trafalgarmattamy.com 2>/dev/null | head -3
open https://trafalgarmattamy.com
```

Then run the pre-launch QA checklist in Section 18 against the live URL.

---

## 17. GODADDY DNS CONFIGURATION

### Root domain (`trafalgarmattamy.com`)

| Type | Name | Value | TTL |
|---|---|---|---|
| A | @ | `76.76.21.21` | 600 |

### `www` subdomain

| Type | Name | Value | TTL |
|---|---|---|---|
| CNAME | www | `cname.vercel-dns.com` | 600 |

### Steps

1. Go to `https://dcc.godaddy.com` → select `trafalgarmattamy.com` → DNS → DNS Records.
2. Delete any existing A record for `@` pointing elsewhere.
3. Add the A record above.
4. Add (or edit) the CNAME for `www` above.
5. Wait 5-15 minutes for propagation.
6. Run `vercel domains inspect trafalgarmattamy.com` to verify.

---

## 18. PRE-LAUNCH QA CHECKLIST

- [ ] Zero agent names, brokerage names, personal contact details, or agent schema anywhere in the code
- [ ] Site does not impersonate Mattamy Homes; independence disclaimer visible in the footer of every page
- [ ] Every fact on every page traces to Section 4.1, or reads "To be announced" per Section 4.2
- [ ] All 6 competitor URLs in Section 5.1 were genuinely fetched/searched — nothing guessed
- [ ] Three-tier keyword map (Section 6) is present with real phrases, not placeholders
- [ ] Gap table (Section 6.4) present, with the "nobody ranks" rows built first
- [ ] Every page owns exactly one primary keyword per Section 6.5 — no cannibalization
- [ ] All 16 FAQ answers are self-contained, 40-80 words, with a concrete number/name/date each
- [ ] All JSON-LD blocks validate in Google's Rich Results Test and the schema.org validator
- [ ] No `Offer`/`AggregateOffer` schema present anywhere (pricing not yet released)
- [ ] `robots.txt` explicitly ALLOWs every AI crawler listed in Section 9.6
- [ ] `/llms.txt` and `/llms-full.txt` are live and match the visible page content
- [ ] All content is present in the raw HTML response — verify with `curl` or "view source," not
      just the rendered DOM (confirms nothing depends on client-side JS to appear)
- [ ] CASL consent checkbox is unchecked by default, with the exact wording from Section 12.2
- [ ] Pricing/spec disclaimer (Section 12.3) appears next to every current or future price mention
- [ ] Supabase table `trafalgar_mattamy_leads` exists with RLS enabled and the insert-only policy applied
- [ ] Form submits successfully end-to-end and redirects to `/thank-you`
- [ ] Honeypot field and time-to-submit check both verified working
- [ ] GA4, GTM, and Meta Pixel all fire correctly, and `form_submit` / `form_start` events confirmed in GA4 DebugView
- [ ] Lighthouse scores 95+ on Performance, Accessibility, Best Practices, and SEO
- [ ] Mobile sticky CTA bar present and functional on all pages
- [ ] Site is live at `https://trafalgarmattamy.com` with valid SSL
- [ ] `www.trafalgarmattamy.com` redirects/resolves correctly
- [ ] `sitemap.xml` submitted in Google Search Console; both domains verified in GSC and Bing Webmaster Tools
