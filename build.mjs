import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ISO = "2026-09-26";
const UPDATED = "September 26, 2026";
const ORIGIN = "https://trafalgarmattamy.com";

const NAV = [
  ["/", "Home", "home"],
  ["/floor-plans", "Floor Plans", "floor-plans"],
  ["/pricing", "Pricing", "pricing"],
  ["/location", "Location", "location"],
  ["/gallery", "Gallery", "gallery"],
  ["/faq", "FAQ", "faq"]
];

const FAQS = [
  ["what", "What is Hawthorne on Trafalgar and who is building it?", "Hawthorne on Trafalgar is a coming-soon master-planned community by Mattamy Homes at 6119 Trafalgar Road in Milton, Ontario. The community will offer WideLot townhomes and detached homes on a 77.8-hectare site within the Town of Milton's Trafalgar Secondary Plan area. As of this writing, the project is in the municipal approvals stage and has not yet opened a sales office."],
  ["price", "How much do homes at Hawthorne on Trafalgar cost?", "Pricing for Hawthorne on Trafalgar has not yet been released by Mattamy Homes. The project is currently in the coming soon stage, with no model home or sales office open. Registering for VIP access is the way to be notified the moment official pricing and floor plans are released."],
  ["where", "Where exactly is Hawthorne on Trafalgar located?", "Hawthorne on Trafalgar is located at 6119 Trafalgar Road in Milton, Ontario, within Halton Region. The 77.8-hectare site falls under the Town of Milton's Trafalgar Secondary Plan and sits adjacent to Natural Heritage System lands along the Sixteen Mile Creek corridor."],
  ["types", "What home types will be available at Hawthorne on Trafalgar?", "Mattamy Homes has confirmed Hawthorne on Trafalgar will feature its WideLot townhomes and detached homes, a wider-footprint design intended to create more generous living areas, better interior flow, and brighter rooms than a standard-width lot. Exact sizes and lot widths have not yet been released."],
  ["status", "What is the current approval status of Hawthorne on Trafalgar?", "As of this update, Hawthorne on Trafalgar is proceeding through Town of Milton planning approvals under subdivision application 24T-25009/M and zoning application Z-21/25. A statutory public meeting was held on February 9, 2026, and a technical report recommending approval was scheduled for Council consideration on July 13, 2026."],
  ["schools", "What schools serve the Hawthorne on Trafalgar area?", "The Town of Milton, including the Trafalgar Road area, is served by the Halton District School Board (public) and the Halton Catholic District School Board (Catholic). Specific schools assigned to Hawthorne on Trafalgar have not yet been confirmed and will be added here once boundaries are finalized."],
  ["compare", "How does Hawthorne on Trafalgar compare to other Mattamy communities in Milton?", "Mattamy Homes also markets Hawthorne East Village at Fourth Line and Louis St. Laurent Avenue in Milton, a currently-selling community of townhomes and detached homes starting from $903,990 with an estimated 2027 occupancy. Hawthorne on Trafalgar is an earlier-stage, not-yet-launched community on the opposite side of Milton, still moving through municipal approvals."],
  ["vip", "How do I get VIP access to Hawthorne on Trafalgar?", "VIP access to Hawthorne on Trafalgar is available by registering through this independent information site. Registrants are added to a notification list and contacted directly once Mattamy Homes releases official pricing, floor plans, and a sales launch date. There is no cost to register."],
  ["deposit", "What is the deposit structure for Hawthorne on Trafalgar?", "A deposit structure for Hawthorne on Trafalgar has not yet been published by Mattamy Homes, as the project has not reached its sales launch. This page will be updated with the full deposit schedule as soon as it is officially released."],
  ["invest", "Is Hawthorne on Trafalgar a good investment?", "Whether any pre-construction purchase is a good investment depends on price, deposit terms, and closing timeline, none of which Mattamy Homes has released yet for Hawthorne on Trafalgar. What is confirmed is the location: a 77.8-hectare site in Milton's Trafalgar Secondary Plan area, near the Milton GO Station, Highway 401, and Highway 407."],
  ["cost", "Is there a cost to register for VIP access?", "No. Registering for VIP access to Hawthorne on Trafalgar through this site is free. Registrants are simply added to a notification list and contacted when Mattamy Homes releases official project details. The form does not reserve a home at 6119 Trafalgar Road, and it does not require a deposit, because a price and a deposit schedule have not been published."],
  ["assign", "What is the assignment or rental policy for Hawthorne on Trafalgar?", "Mattamy Homes has not yet published an assignment or rental policy for Hawthorne on Trafalgar, as the project has not reached its sales launch. Assignment and rental terms are typically set out in the Agreement of Purchase and Sale at the time of sale."],
  ["widelot", "What is the WideLot design Mattamy Homes uses at Hawthorne on Trafalgar?", "WideLot is Mattamy Homes' term for a wider-than-standard home lot, intended to create more generous living areas, better interior flow, and brighter rooms compared to a standard-width townhome lot. Exact lot widths for Hawthorne on Trafalgar have not yet been published."],
  ["approvals", "What municipal approvals has Hawthorne on Trafalgar received?", "Hawthorne on Trafalgar is proceeding through Town of Milton approvals under subdivision application 24T-25009/M and zoning application Z-21/25. A statutory public meeting was held February 9, 2026, with a technical report recommending approval scheduled for Council on July 13, 2026."],
  ["size", "How big is the Hawthorne on Trafalgar site?", "The Hawthorne on Trafalgar site at 6119 Trafalgar Road spans approximately 77.8 hectares, covering part of Lot 6 and 7, Concession 8, in the Town of Milton's Trafalgar Secondary Plan area. The same land is the subject of subdivision application 24T-25009/M and zoning application Z-21/25, which were on the Town of Milton record in 2026."],
  ["parks", "Will Hawthorne on Trafalgar include a school or parks?", "Yes. Town of Milton planning documents for the site describe proposed land uses including a school, parks, and future commercial uses alongside the residential home types, integrated into the community's overall site plan. Named schools and park sizes for Hawthorne on Trafalgar are not confirmed yet on the 77.8-hectare Trafalgar Road site."]
];

function form(id, location) {
  return `<form class="vip-form" id="${id}" data-form-location="${location}" novalidate>
    <div class="form-grid">
      <div class="field"><label for="${id}-firstname">First name</label><input id="${id}-firstname" name="firstname" autocomplete="given-name" required></div>
      <div class="field"><label for="${id}-lastname">Last name</label><input id="${id}-lastname" name="lastname" autocomplete="family-name" required></div>
      <div class="field"><label for="${id}-email">Email</label><input id="${id}-email" name="email" type="email" autocomplete="email" inputmode="email" required></div>
      <div class="field"><label for="${id}-phone">Phone</label><input id="${id}-phone" name="phone" type="tel" autocomplete="tel" inputmode="tel" placeholder="(416) 000-0000" required></div>
      <fieldset class="field full">
        <legend>Are you a broker?</legend>
        <div class="choice-row">
          <label class="check" for="${id}-broker-yes"><input id="${id}-broker-yes" name="is_broker" type="radio" value="yes" required> Yes</label>
          <label class="check" for="${id}-broker-no"><input id="${id}-broker-no" name="is_broker" type="radio" value="no" required> No</label>
        </div>
      </fieldset>
      <div class="field full"><label class="check" for="${id}-consent"><input id="${id}-consent" name="consent" type="checkbox"> I agree to receive updates about Hawthorne on Trafalgar. You can unsubscribe anytime.</label></div>
      <div class="honeypot" aria-hidden="true"><label for="${id}-website">Website</label><input id="${id}-website" name="website" tabindex="-1" autocomplete="off"></div>
      <div class="field full"><button class="btn btn-accent" type="submit">Register for VIP Access</button><p class="form-status" role="status"></p></div>
    </div>
  </form>`;
}

function facts() {
  return `<table class="facts">
    <caption class="small muted">Quick facts for Hawthorne on Trafalgar. Information current as of ${UPDATED}.</caption>
    <tbody>
      <tr><th scope="row">Builder</th><td>Mattamy Homes</td></tr>
      <tr><th scope="row">Type</th><td>WideLot™ townhomes and detached homes</td></tr>
      <tr><th scope="row">Address</th><td>6119 Trafalgar Road, Milton, ON L9E 0Z6</td></tr>
      <tr><th scope="row">Municipality</th><td>Town of Milton, Halton Region, Ontario</td></tr>
      <tr><th scope="row">Site area</th><td>77.8 hectares</td></tr>
      <tr><th scope="row">Planning framework</th><td>Trafalgar Secondary Plan</td></tr>
      <tr><th scope="row">Approvals status</th><td>Statutory public meeting held Feb 9, 2026; Council consideration scheduled July 13, 2026</td></tr>
      <tr><th scope="row">Starting price</th><td>To be announced <!-- UNVERIFIED: confirm before launch --></td></tr>
      <tr><th scope="row">Deposit structure</th><td>To be announced <!-- UNVERIFIED: confirm before launch --></td></tr>
      <tr><th scope="row">Occupancy</th><td>To be announced <!-- UNVERIFIED: confirm before launch --></td></tr>
      <tr><th scope="row">Sales status</th><td>Coming Soon</td></tr>
    </tbody>
  </table>
  <p class="small muted">Prices, sizes, specifications, and availability are subject to change without notice. E.&amp;O.E. Information current as of ${UPDATED}.</p>`;
}

function header(active) {
  const links = NAV.map(([href, label, key]) => {
    const current = key === active ? ' aria-current="page"' : "";
    return `<a href="${href}"${current}>${label}</a>`;
  }).join("");
  return `<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <div class="header-inner">
    <a class="wordmark" href="/">Hawthorne on Trafalgar</a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open menu">Menu</button>
    <nav class="site-nav" id="site-nav" aria-label="Primary">
      ${links}
      <a class="btn btn-accent" href="/register">Register for VIP Access</a>
    </nav>
  </div>
</header>`;
}

function footer(showForm) {
  const formBlock = showForm ? `<section class="band-alt" aria-labelledby="footer-register-heading"><div class="wrap"><h2 id="footer-register-heading">Register for VIP Access</h2><p class="prose">Registration is free. You will be contacted when Mattamy Homes releases official pricing, floor plans, and a sales launch date for Hawthorne on Trafalgar.</p>${form("footer-form", "bottom-section")}</div></section>` : "";
  return `${formBlock}
<footer class="site-footer">
  <div class="footer-inner">
    <nav class="footer-nav" aria-label="Footer">
      <a href="/">Home</a><a href="/floor-plans">Floor Plans</a><a href="/pricing">Pricing</a><a href="/location">Location</a><a href="/gallery">Gallery</a><a href="/faq">FAQ</a><a href="/register">Register for VIP Access</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a>
    </nav>
    <p>Last updated: ${UPDATED}</p>
    <p class="disclaimer">This is an independent information and registration website for Hawthorne on Trafalgar. It is not the official website of Mattamy Homes and is not affiliated with or endorsed by the builder. All renderings, pricing, sizes, and specifications are for illustration only and are subject to change without notice. E.&amp;O.E.</p>
  </div>
</footer>`;
}

function crumbs(items) {
  const lis = items.map(([href, name], i) => i < items.length - 1 ? `<li><a href="${href}">${name}</a></li>` : `<li>${name}</li>`).join("");
  return `<nav class="crumbs" aria-label="Breadcrumb"><ol>${lis}</ol></nav>`;
}

function breadcrumbLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    dateModified: ISO,
    itemListElement: items.map(([href, name], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: ORIGIN + (href === "/" ? "/" : href)
    }))
  };
}

function head({ title, description, path, extraLd }) {
  const url = ORIGIN + (path === "/" ? "/" : path);
  const blocks = extraLd.map((obj) => `<script type="application/ld+json">\n${JSON.stringify(obj, null, 2)}\n</script>`).join("\n");
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="keywords" content="hawthorne on trafalgar, hawthorne on trafalgar mattamy, hawthorne on trafalgar milton, mattamy homes trafalgar road">
<link rel="canonical" href="${url}">
<link rel="amphtml" href="${ORIGIN}${path === "/" ? "/amp" : "/amp" + path}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:type" content="website">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${ORIGIN}/images/og-hawthorne-trafalgar.jpg">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="${ORIGIN}/images/og-hawthorne-trafalgar.jpg">
<meta name="theme-color" content="#1B2E24">
<link rel="icon" href="/images/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32.png">
<link rel="apple-touch-icon" href="/images/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@500;600;700&family=Inter:wght@400;500;600&display=swap">
<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/css/style.css">
${blocks}
</head>`;
}

function ampPath(pathname) {
  if (!pathname || pathname === "/") return "/amp";
  return "/amp" + pathname;
}

function rewriteAmpLinks(html) {
  return html.replace(/href="(\/[^"]*)"/g, (match, href) => {
    if (href.startsWith("/images/") || href.startsWith("/css/") || href.startsWith("/js/") || href.startsWith("/amp")) return match;
    if (href.startsWith("/register?request=deletion")) return match;
    const splitAt = href.indexOf("?");
    const path = splitAt === -1 ? href : href.slice(0, splitAt);
    const query = splitAt === -1 ? "" : href.slice(splitAt);
    return `href="${ampPath(path)}${query}"`;
  });
}

function toAmpImg(tag, layout) {
  const attrs = tag.slice(4, -1).replace(/\s(?:loading|fetchpriority|decoding)="[^"]*"/g, "");
  return `<amp-img${attrs} layout="${layout}"></amp-img>`;
}

const AMP_BOILERPLATE = `<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>`;

function toAmpDocument(html, pathname) {
  const canonical = ORIGIN + (pathname === "/" ? "/" : pathname);
  const title = html.match(/<title>([\s\S]*?)<\/title>/)[1];
  const description = html.match(/<meta name="description" content="([\s\S]*?)">/)[1];
  const keywords = html.match(/<meta name="keywords" content="([\s\S]*?)">/)[1];
  const jsonld = [...html.matchAll(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g)].map((match) => match[0]).join("\n");
  let body = html.match(/<body[^>]*>([\s\S]*)<\/body>/)[1];
  body = body.replace(/<script\b[\s\S]*?<\/script>/g, "");
  body = body.replace(/<button class="nav-toggle"[^>]*>Menu<\/button>/, `<input class="nav-check" id="nav-check" type="checkbox"><label class="nav-toggle" for="nav-check">Menu</label>`);
  body = body.replace(/<div class="hero-media">\s*<img\s[^>]+>/, (hero) => hero.replace(/<img\s[^>]+>/, (tag) => toAmpImg(tag, "fill")));
  body = body.replace(/<img\s[^>]+>/g, (tag) => toAmpImg(tag, "responsive"));
  body = body.replace(/<div id="lightbox"[\s\S]*?<\/div>/g, "");
  body = body.replace(/<a href="[^"]+" data-lightbox>([\s\S]*?)<\/a>/g, (_, inner) => inner.replace("<amp-img", "<amp-img lightbox"));
  const hasMap = body.includes("<iframe");
  body = body.replace(/<iframe\b[^>]*src="([^"]+)"[^>]*>\s*<\/iframe>/g, (_, src) => `<amp-iframe width="600" height="420" layout="responsive" sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox" frameborder="0" src="${src}"><amp-img layout="fill" src="${ORIGIN}/images/og-hawthorne-trafalgar.jpg" placeholder alt="Map of 6119 Trafalgar Road, Milton"></amp-img></amp-iframe>`);
  const hasForm = body.includes('class="vip-form"');
  if (hasForm) {
    body = body.replace(/<form class="vip-form"/g, `<form class="vip-form" method="get" action="${ORIGIN}/register" target="_top"`);
    body = body.replace(/<\/form>/g, `<p><a class="amp-next" href="${ampPath("/thank-you")}" hidden>View your confirmation</a></p></form>`);
    body = body.replace(/<form class="vip-form"[\s\S]*?<\/form>/g, (form) => `<amp-script layout="container" script="lead-script">${form}</amp-script>`);
  }
  body = rewriteAmpLinks(body);
  const extensions = [];
  if (hasForm) {
    extensions.push(`<script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>`);
    extensions.push(`<script async custom-element="amp-script" src="https://cdn.ampproject.org/v0/amp-script-0.1.js"></script>`);
  }
  if (body.includes(" lightbox")) {
    extensions.push(`<script async custom-element="amp-lightbox-gallery" src="https://cdn.ampproject.org/v0/amp-lightbox-gallery-0.1.js"></script>`);
  }
  if (hasMap) {
    extensions.push(`<script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>`);
  }
  const leadScript = readFileSync(new URL("./js/amp-lead.js", import.meta.url), "utf8").trim();
  const leadHash = createHash("sha384").update(leadScript).digest("base64");
  const css = readFileSync(new URL("./css/style.css", import.meta.url), "utf8");
  const scriptMeta = hasForm ? `<meta name="amp-script-src" content="sha384-${leadHash}">` : "";
  const scriptBlock = hasForm ? `<script id="lead-script" type="text/plain" target="amp-script">${leadScript}</script>` : "";
  return `<!doctype html>
<html amp lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
<script async src="https://cdn.ampproject.org/v0.js"></script>
${extensions.join("\n")}
${scriptMeta}
${scriptBlock}
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="keywords" content="${keywords}">
<link rel="canonical" href="${canonical}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:type" content="website">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${ORIGIN}/images/og-hawthorne-trafalgar.jpg">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="${ORIGIN}/images/og-hawthorne-trafalgar.jpg">
<link rel="icon" href="${ORIGIN}/images/favicon.ico" sizes="any">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
${AMP_BOILERPLATE}
<style amp-custom>${css}</style>
${jsonld}
</head>
<body>
${body}
</body>
</html>`;
}

function page({ file, path, title, description, active, main, extraLd, pageId, showForm = true, sticky = true, stickyHref = "/register" }) {
  const stickyBar = sticky ? `<div class="sticky-cta"><a class="btn btn-accent" href="${stickyHref}">Register for VIP Access</a></div>` : "";
  const module = showForm || file === "register.html" ? `<script type="module" src="/js/supabase-client.js"></script>` : "";
  const html = `${head({ title, description, path, extraLd })}
<body data-page="${pageId}">
${header(active)}
${main}
${footer(showForm)}
${stickyBar}
<script src="/js/main.js" defer></script>
${module}
</body>
</html>`;
  writeFileSync(file, html);
  mkdirSync("amp", { recursive: true });
  const ampFile = file === "index.html" ? "amp/index.html" : `amp/${file}`;
  writeFileSync(ampFile, toAmpDocument(html, path));
  return html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

const indexLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Residence",
      name: "Hawthorne on Trafalgar",
      description: "A coming-soon master-planned community by Mattamy Homes offering WideLot townhomes and detached homes at 6119 Trafalgar Road, Milton, Ontario.",
      dateModified: ISO,
      address: {
        "@type": "PostalAddress",
        streetAddress: "6119 Trafalgar Road",
        addressLocality: "Milton",
        addressRegion: "ON",
        postalCode: "L9E 0Z6",
        addressCountry: "CA"
      },
      url: ORIGIN + "/",
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Adjacent to Natural Heritage System lands" },
        { "@type": "LocationFeatureSpecification", name: "Near Milton GO Station" },
        { "@type": "LocationFeatureSpecification", name: "Access to Highway 401 and Highway 407" }
      ]
    },
    {
      "@type": "Organization",
      name: "trafalgarmattamy.com",
      url: ORIGIN + "/",
      description: "An independent information and VIP registration resource for Hawthorne on Trafalgar. Not affiliated with or endorsed by Mattamy Homes."
    },
    {
      "@type": "WebSite",
      url: ORIGIN + "/",
      name: "Hawthorne on Trafalgar — Independent Project Information",
      potentialAction: {
        "@type": "SearchAction",
        target: ORIGIN + "/faq?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    breadcrumbLd([["/", "Home"]])
  ]
};

const texts = [];

texts.push(page({
  file: "index.html",
  path: "/",
  title: "Hawthorne on Trafalgar Mattamy | New Homes in Milton",
  description: "Hawthorne on Trafalgar Mattamy Homes community: WideLot townhomes and detached homes at 6119 Trafalgar Rd, Milton. Free VIP registration for pricing and floor plans.",
  active: "home",
  pageId: "home",
  extraLd: [indexLd],
  stickyHref: "#hero-form",
  main: `<main id="main">
  <section class="hero">
    <div class="hero-media">
      <img src="/images/hero-trafalgar.jpg" width="1920" height="1080" alt="Aerial view of new homes along the Trafalgar Road corridor in Milton, Ontario — Hawthorne on Trafalgar by Mattamy Homes" fetchpriority="high">
      <div class="hero-scrim"></div>
    </div>
    <div class="hero-copy">
      <div class="hero-intro">
        <p class="badge">Coming Soon — Registration Open</p>
        <h1>Hawthorne on Trafalgar — New Homes Coming to Milton, Ontario</h1>
        <p class="lede">Hawthorne on Trafalgar Mattamy Homes community: WideLot™ townhomes and detached homes at 6119 Trafalgar Road — an independent information and VIP registration resource.</p>
        <div class="hero-actions">
          <a class="btn btn-ghost" href="/floor-plans">See Home Types</a>
        </div>
        <p class="hero-note">Community photography for Hawthorne on Trafalgar by Mattamy Homes. Floor plans and a sales gallery have not been released.</p>
      </div>
      <div class="hero-panel">
        <h2>Register for VIP Access</h2>
        <p>Registration is free. You will be contacted when Mattamy Homes releases official pricing and floor plans.</p>
        ${form("hero-form", "hero")}
      </div>
    </div>
  </section>
  <section class="band" aria-labelledby="overview-heading">
    <div class="wrap reveal">
      <p class="eyebrow">Overview</p>
      <h2 id="overview-heading">What Is Hawthorne on Trafalgar?</h2>
      <p class="prose">Hawthorne on Trafalgar is a coming-soon master-planned community by Mattamy Homes at 6119 Trafalgar Road in Milton, Ontario. The community will offer <a href="/floor-plans">WideLot™ townhomes and detached homes</a> on a 77.8-hectare site within the Town of Milton's Trafalgar Secondary Plan area. As of this writing, the project is in the municipal approvals stage and has not yet opened a sales office. This independent page tracks the project and provides free VIP registration for early access once pricing and floor plans are released. The <a href="/pricing">pricing and deposit structure</a> will be posted here when Mattamy Homes publishes them.</p>
    </div>
  </section>
  <section class="band-alt" aria-labelledby="photos-heading">
    <div class="wrap reveal">
      <p class="eyebrow">Hawthorne on Trafalgar Mattamy</p>
      <h2 id="photos-heading">Community photos</h2>
      <div class="gallery-grid">
        <figure>
          <img src="/images/feature-mattamy.jpg" width="1400" height="1050" alt="Streetscape for Hawthorne on Trafalgar by Mattamy Homes in Milton" loading="lazy">
          <figcaption>Streetscape context for Hawthorne on Trafalgar by Mattamy Homes.</figcaption>
        </figure>
        <figure>
          <img src="/images/community-townhomes.jpg" width="1600" height="900" alt="Townhomes planned for Hawthorne on Trafalgar by Mattamy Homes" loading="lazy">
          <figcaption>Townhome collection imagery for Hawthorne on Trafalgar.</figcaption>
        </figure>
        <figure>
          <img src="/images/feature-design.jpg" width="1400" height="1050" alt="Interior design direction for Hawthorne on Trafalgar by Mattamy Homes" loading="lazy">
          <figcaption>Interior direction. Exact floor plans are not released yet.</figcaption>
        </figure>
        <figure>
          <img src="/images/feature-sustainability.jpg" width="1400" height="1050" alt="Home exterior associated with Hawthorne on Trafalgar by Mattamy Homes" loading="lazy">
          <figcaption>Exterior context beside the Trafalgar Road setting.</figcaption>
        </figure>
      </div>
    </div>
  </section>
  <section class="band" aria-labelledby="facts-heading">
    <div class="wrap reveal">
      <h2 id="facts-heading">Hawthorne on Trafalgar at a glance</h2>
      ${facts()}
    </div>
  </section>
  <section class="band" aria-labelledby="story-heading">
    <div class="wrap prose reveal">
      <h2 id="story-heading">The community Mattamy Homes is planning</h2>
      <p>Mattamy Homes describes Hawthorne on Trafalgar through its WideLot™ concept: a wider footprint intended to create more generous living areas, better flow, and brighter interiors than a standard-width lot. The marketed housing types are WideLot™ townhomes and detached homes. Exact lot widths, unit sizes, and bedroom counts have not been published.</p>
      <p>The site is <a href="/location">6119 Trafalgar Road, Milton</a>, postal code L9E 0Z6, covering part of Lot 6 and Lot 7, Concession 8. Town of Milton zoning records list a site area of 77.8 hectares inside the Trafalgar Secondary Plan. The land sits adjacent to Natural Heritage System lands and the Sixteen Mile Creek wetlands corridor. Mattamy's project description frames the community around integrated future schools, parks, and gathering spaces rather than houses alone.</p>
      <p>Planning files identify the development entity as Mattamy (White Squadron) Development Corporation, with White Squadron Development Corporation as the land owner and applicant and Korsiak Urban Planning as the planning consultant. Subdivision application 24T-25009/M and zoning application Z-21/25 are the file numbers on the Town of Milton record. A statutory public meeting was held on February 9, 2026. A technical report recommending approval was scheduled for Council consideration on July 13, 2026. Proposed land uses in the zoning application include single detached homes, townhouses, future mid-density and mixed-use buildings, a school, parks, and future commercial uses.</p>
      <p>The same official project notes place the site a short drive from Milton GO Station, with rail service toward downtown Toronto, and with Highway 401 and Highway 407 both accessible from the area. Recreation named by Mattamy includes Rattlesnake Point and Crawford Lake, both Conservation Halton properties, and Glen Eden Ski &amp; Snowboard Centre. Nearby golf clubs named on the project page are Wyldewood Golf &amp; Country Club, Royal Ontario Golf Club, and Piper's Heath Golf Links. Retail references include Toronto Premium Outlets and the Erin Mills shopping area. Exact drive times have not been measured for this page.</p>
      <p>Sales status on the builder's project page is Coming Soon. A model home and sales office are not yet open. Starting price, deposit structure, incentives, and occupancy are to be announced. Registering here adds you to a notification list at no cost. Read the <a href="/faq">frequently asked questions</a> for the approval path, schools, and what is still unreleased.</p>
    </div>
  </section>
  <section class="band-alt" aria-labelledby="why-heading">
    <div class="wrap reveal">
      <h2 id="why-heading">Why register before launch</h2>
      <div class="card-grid">
        <article class="card"><h3>Floor plans when they are published</h3><p>Collection details for Hawthorne on Trafalgar are not public yet. Registrants are notified when Mattamy Homes releases the plans.</p></article>
        <article class="card"><h3>Pricing when it is released</h3><p>There is no price list today. The pricing page states that plainly and will be updated the day official figures exist.</p></article>
        <article class="card"><h3>First notice of incentives</h3><p>No incentives have been announced. A registration is a way to hear about them if the builder introduces any at launch.</p></article>
      </div>
      <p><a class="btn btn-deep" href="/register">Register for VIP Access</a></p>
    </div>
  </section>
</main>`
}));

texts.push(page({
  file: "floor-plans.html",
  path: "/floor-plans",
  title: "Hawthorne on Trafalgar Floor Plans | Mattamy Homes Milton",
  description: "See the home types planned for Hawthorne on Trafalgar in Milton — WideLot townhomes and detached homes by Mattamy Homes. Register free for floor plans.",
  active: "floor-plans",
  pageId: "floor-plans",
  extraLd: [breadcrumbLd([["/", "Home"], ["/floor-plans", "Floor Plans"]])],
  main: `<main id="main"><div class="wrap">
    ${crumbs([["/", "Home"], ["/floor-plans", "Floor Plans"]])}
    <p class="eyebrow">Home types</p>
    <h1>Hawthorne on Trafalgar Floor Plans</h1>
    <p class="prose">Mattamy Homes has confirmed Hawthorne on Trafalgar will feature its WideLot™ townhomes and detached homes — a wider-footprint design intended to create more generous living areas, better interior flow, and brighter rooms than a standard-width lot. Exact sizes and lot widths have not yet been released. Floor plans release at VIP launch. Register now to receive them the moment they are published — there is no cost to register.</p>
    <div class="card-grid reveal">
      <article class="card">
        <img src="/images/community-townhomes.jpg" width="1600" height="900" alt="Townhomes for Hawthorne on Trafalgar by Mattamy Homes" loading="lazy">
        <h2>WideLot™ Townhomes</h2>
        <p>Wider-than-standard townhome lots designed by Mattamy Homes for more generous room sizes and better natural light. Exact unit sizes, bedroom counts, and pricing will be released at VIP launch — register to be notified first.</p>
        <p><a href="/register">Notify Me</a></p>
      </article>
      <article class="card">
        <img src="/images/feature-design.jpg" width="1400" height="1050" alt="Detached home interior direction for Hawthorne on Trafalgar by Mattamy Homes" loading="lazy">
        <h2>Detached Homes</h2>
        <p>Single-family detached homes are planned as part of the Hawthorne on Trafalgar community alongside the WideLot™ townhomes. Lot sizes and elevations have not yet been released by Mattamy Homes.</p>
        <p><a href="/register">Notify Me</a></p>
      </article>
    </div>
    <div class="prose reveal">
      <h2>Hawthorne on Trafalgar plans are not published yet</h2>
      <p>These cards are collection tiers, not floor plans. Mattamy Homes has named the product — WideLot™ townhomes and detached homes — without publishing a plan code, a square footage, a bedroom count, or a lot width. Drawing a plan, or guessing a width from the WideLot™ name, would invent a specification the builder has not released. <!-- UNVERIFIED: confirm before launch --> Unit sizes, lot widths, and bedroom and bathroom counts remain to be announced.</p>
      <p>WideLot™ is Mattamy's term for a wider-than-standard footprint. On the builder's Hawthorne on Trafalgar page, the idea is tied to livability: more generous living areas, better interior flow, and brighter rooms. That is a design intent, not a measured lot schedule. Until a sales package is issued, the only accurate statement is that both townhomes and detached homes are planned, and that the townhome line is marketed under the WideLot™ name.</p>
      <p>Town of Milton planning documents go further than the marketing page on land use, without becoming a price list. The zoning application describes single detached homes, townhouses, future mid-density and mixed-use buildings, a school, parks, and future commercial uses on the 77.8-hectare site. Mid-density buildings and commercial uses are proposed land uses in the planning file. They are not a released home collection with plans you can review today.</p>
      <p>The total number of homes in the community has not been released. Maintenance or POTL fees have not been released, and may not apply if the homes are freehold — that point is still to be confirmed. Nothing on this page should be read as an allocation, a hold, or a price. See the <a href="/pricing">current pricing status</a> for what Mattamy Homes has and has not published, then <a href="/register">Register for VIP Access</a> if you want the plans when they are real documents rather than placeholders.</p>
      <h2>What will be added when plans are released</h2>
      <p>A real floor-plan card for Hawthorne on Trafalgar will name the collection, the plan, the bedroom and bathroom count, the unit size, and the lot width, each taken from a Mattamy Homes document. Those fields are blank today on purpose. <!-- UNVERIFIED: confirm before launch --> Bedroom counts, bathroom counts, square footage, and lot widths are to be announced. When a document is published, the card will quote it and the date it was checked, and the page title will still target Hawthorne on Trafalgar floor plans so the new detail does not split onto a second URL.</p>
      <p>Until then, the useful distinction is the one Mattamy has already made. WideLot™ townhomes are the attached product, described as a wider footprint for more generous rooms and brighter interiors. Detached homes are the single-family product planned beside them. Town of Milton files also list future mid-density and mixed-use buildings. Those buildings are a proposed land use, not a third floor-plan series with drawings. If Mattamy later markets them as a collection, they will be added as their own cards rather than folded into the townhome description.</p>
      <p>Buyers comparing Hawthorne on Trafalgar with Hawthorne East Village should keep the stages apart. East Village, at Fourth Line and Louis St. Laurent Avenue, is a selling Mattamy community. Trafalgar Road is still in approvals, with subdivision file 24T-25009/M and zoning file Z-21/25, and with a statutory public meeting held on February 9, 2026. A selling community can show plans. A coming-soon community can only show the product names. This page stays on that side of the line.</p>
    </div>
  </div></main>`
}));

texts.push(page({
  file: "pricing.html",
  path: "/pricing",
  title: "Hawthorne on Trafalgar Prices | Mattamy Homes Milton",
  description: "Pricing for Hawthorne on Trafalgar has not yet been released. Get the deposit structure and price list first with free VIP registration.",
  active: "pricing",
  pageId: "pricing",
  extraLd: [breadcrumbLd([["/", "Home"], ["/pricing", "Pricing"]])],
  main: `<main id="main"><div class="wrap">
    ${crumbs([["/", "Home"], ["/pricing", "Pricing"]])}
    <p class="eyebrow">Prices</p>
    <h1>Hawthorne on Trafalgar Prices and Deposit Structure</h1>
    <div class="prose">
      <h2>How much do homes at Hawthorne on Trafalgar cost?</h2>
      <p>Pricing for Hawthorne on Trafalgar has not yet been released by Mattamy Homes. The project is currently in the "coming soon" stage, with no model home or sales office open. Registering for VIP access is the way to be notified the moment official pricing and floor plans are released.</p>
      <h2>What is the deposit structure for Hawthorne on Trafalgar?</h2>
      <p>A deposit structure for Hawthorne on Trafalgar has not yet been published by Mattamy Homes, as the project has not reached its sales launch. This page will be updated with the full deposit schedule as soon as it is officially released. The <a href="/faq#deposit">deposit structure FAQ</a> repeats that answer in short form.</p>
    </div>
    <h2>Pricing status</h2>
    <table class="facts">
      <caption>Pricing status for Hawthorne on Trafalgar, last checked ${UPDATED}.</caption>
      <tbody>
        <tr><th scope="row">Starting price</th><td>To be announced <!-- UNVERIFIED: confirm before launch --></td></tr>
        <tr><th scope="row">Price range</th><td>To be announced <!-- UNVERIFIED: confirm before launch --></td></tr>
        <tr><th scope="row">Incentives</th><td>Not yet announced <!-- UNVERIFIED: confirm before launch --></td></tr>
        <tr><th scope="row">Occupancy</th><td>To be announced <!-- UNVERIFIED: confirm before launch --></td></tr>
        <tr><th scope="row">Last checked</th><td>${UPDATED}</td></tr>
      </tbody>
    </table>
    <p class="small">Prices, sizes, specifications, and availability are subject to change without notice. E.&amp;O.E. Information current as of ${UPDATED}.</p>
    <h2>Deposit schedule</h2>
    <table class="facts">
      <thead><tr><th scope="col">Milestone</th><th scope="col">Amount</th><th scope="col">Due Date</th></tr></thead>
      <tbody>
        <tr><td>To be announced</td><td>To be announced</td><td>To be announced <!-- UNVERIFIED: confirm before launch --></td></tr>
      </tbody>
    </table>
    <p>Mattamy Homes has not yet published a deposit schedule for Hawthorne on Trafalgar. This table will be completed the day it is released.</p>
    <div class="prose reveal">
      <h2>A different Mattamy community, for context only</h2>
      <p>Mattamy Homes also markets Hawthorne East Village at Fourth Line and Louis St. Laurent Avenue in Milton, a currently-selling community of townhomes and detached homes starting from $903,990 with an estimated 2027 occupancy. That starting figure comes from a third-party listing, not from a Mattamy price sheet reproduced here, and it describes Hawthorne East Village only. Hawthorne on Trafalgar is an earlier-stage, not-yet-launched community on the opposite side of Milton, still moving through municipal approvals. The East Village number is not a forecast, a comparable sale, or a price for Trafalgar Road.</p>
      <p>Whether any pre-construction purchase is a good investment depends on price, deposit terms, and closing timeline — none of which Mattamy Homes has released yet for Hawthorne on Trafalgar. What is confirmed is the location: a 77.8-hectare site in Milton's Trafalgar Secondary Plan area, near the Milton GO Station, Highway 401, and Highway 407. No appreciation is promised, and registration does not reserve a home.</p>
      <h2>How this price page will change</h2>
      <p>When Mattamy Homes releases a price list for Hawthorne on Trafalgar, this page will show the starting price, the range, and the date it was checked. Incentives will move from "not yet announced" to the figures the builder actually publishes. The deposit table will gain real milestones, amounts, and due dates, replacing the single placeholder row. Occupancy will be added only when a closing or occupancy window is stated by the builder. <!-- UNVERIFIED: confirm before launch --> Until those releases, every price cell stays "to be announced."</p>
      <p>An offer schema block is intentionally absent. A structured price of zero, or a guessed range, would tell search engines a number Mattamy Homes has not issued. The quick facts on the home page use the same rule. The only dollar figure anywhere in this explanation is the third-party starting price for Hawthorne East Village, labeled as a different community at Fourth Line and Louis St. Laurent Avenue, with an estimated 2027 occupancy. It is context for the Milton new-home market, not a stand-in for 6119 Trafalgar Road.</p>
      <p>Sales status remains Coming Soon. There is no model home and no sales office to visit for a printed price list. The municipal path is further along than the sales path: the statutory public meeting was February 9, 2026, and a technical report recommending approval was scheduled for Council on July 13, 2026. Approval progress does not create a price. If you want the list the day it exists, use the registration form. The consent box starts unchecked, and the form is not sent unless you check it. There is no fee.</p>
      <p><a class="btn btn-deep" href="/register">Register for VIP Access</a></p>
    </div>
  </div></main>`
}));

texts.push(page({
  file: "location.html",
  path: "/location",
  title: "Hawthorne on Trafalgar Location | Mattamy Homes Milton",
  description: "Explore the Hawthorne on Trafalgar location in Milton: Trafalgar Secondary Plan area, Milton GO, Hwy 401/407, schools, and nearby conservation lands.",
  active: "location",
  pageId: "location",
  extraLd: [{
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Place",
        name: "Hawthorne on Trafalgar — Site Location",
        dateModified: ISO,
        address: {
          "@type": "PostalAddress",
          streetAddress: "6119 Trafalgar Road",
          addressLocality: "Milton",
          addressRegion: "ON",
          postalCode: "L9E 0Z6",
          addressCountry: "CA"
        }
      },
      breadcrumbLd([["/", "Home"], ["/location", "Location"]])
    ]
  }],
  main: `<main id="main"><div class="wrap">
    ${crumbs([["/", "Home"], ["/location", "Location"]])}
    <p class="eyebrow">Milton</p>
    <h1>Hawthorne on Trafalgar Location</h1>
    <div class="prose">
      <h2>Where exactly is Hawthorne on Trafalgar located?</h2>
      <p>Hawthorne on Trafalgar is located at 6119 Trafalgar Road in Milton, Ontario, within Halton Region. The 77.8-hectare site falls under the Town of Milton's Trafalgar Secondary Plan and sits adjacent to Natural Heritage System lands along the Sixteen Mile Creek corridor.</p>
    </div>
    <div class="map-frame reveal">
      <iframe title="Map of 6119 Trafalgar Road, Milton, Ontario" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=6119%20Trafalgar%20Road%20Milton%20ON%20L9E%200Z6&amp;z=14&amp;output=embed"></iframe>
    </div>
    <div class="prose reveal">
      <h2>The address inside the Trafalgar Secondary Plan</h2>
      <p>The civic address is 6119 Trafalgar Road, Milton, ON L9E 0Z6. The legal description on the Town of Milton zoning application is part of Lot 6 and Lot 7, Concession 8. The recorded site area is 77.8 hectares. Those three facts — street address, legal description, and area — are the stable way to identify the land while marketing names and sales phases are still forming.</p>
      <p>The governing planning framework is the Trafalgar Secondary Plan. The zoning application is written to align with that plan. Subdivision application 24T-25009/M and zoning application Z-21/25 are the municipal file numbers. A statutory public meeting was held on February 9, 2026, and a technical report recommending approval was scheduled for Council consideration on July 13, 2026. Approval status can move after that date; this page records the status as published in those municipal records and on the builder's project page as of ${UPDATED}.</p>
      <p>Proposed land uses in the zoning application are broader than the two products Mattamy is marketing. The file describes single detached homes, townhouses, future mid-density and mixed-use buildings, a school, parks, and future commercial uses. Mattamy's own project page narrows the current sales message to WideLot™ townhomes and detached homes, and describes a community planned with integrated future schools, parks, and gathering spaces. Both statements can be true at once: the planning file sets out a wider land-use mix, and the marketed housing types are the two collections named so far.</p>
      <h2>Transit</h2>
      <p>Mattamy's project page identifies Milton GO Station, with a rail connection toward downtown Toronto, as the transit reference for Hawthorne on Trafalgar. This page does not state a drive time or a walk time. Those distances have not been independently measured for this build. Until they are confirmed with a mapping measurement, the accurate phrasing is that the station is a short drive from the Trafalgar Road site. GO rail from Milton runs toward Union Station in downtown Toronto; the frequency and travel time of that train are set by the rail operator and should be checked on the day of travel.</p>
      <h2>Highways</h2>
      <p>Highway 401 and Highway 407 are both accessible from the area, according to the builder's location notes. No minute count is published here, because a minute count that has not been measured would be a guess. For search and for planning a visit, the useful fact is access, not a stopwatch figure: both highways are part of the regional road network serving north Milton and the Trafalgar Road corridor.</p>
      <h2 id="schools">Schools</h2>
      <p>The Town of Milton, including the Trafalgar Road area, is served by the Halton District School Board for public schools and the Halton Catholic District School Board for Catholic schools. Those are the two boards with jurisdiction. Named schools assigned to this exact site have not been confirmed. <!-- UNVERIFIED: confirm before launch --> Boundaries for a community that is still in approvals are often unsettled, and a school named too early can be wrong by the time families move in. The planning documents do propose a school as a land use on the site itself, which is a different fact from a boundary assignment. See <a href="/faq#schools">schools serving the area</a> for the short answer, and confirm boundaries with the boards before relying on them.</p>
      <h2>Recreation and conservation</h2>
      <p>Rattlesnake Point is a Conservation Halton property on the Niagara Escarpment, known for lookout points above the surrounding farmland. Crawford Lake, also operated through Conservation Halton, is a rare meromictic lake with a boardwalk and an interpretive setting that includes reconstructed longhouses. Glen Eden Ski &amp; Snowboard Centre is the winter recreation hill associated with the Kelso area, offering skiing and snowboarding in season. Mattamy's Hawthorne on Trafalgar page names all three as nearby conservation and recreation references. None of them is inside the 77.8-hectare site. They describe the wider landscape the project is marketed against.</p>
      <p>Golf named on the same project page includes Wyldewood Golf &amp; Country Club, Royal Ontario Golf Club, and Piper's Heath Golf Links. Each is an existing golf facility in the broader Milton and Halton area, not an amenity built as part of Hawthorne on Trafalgar. Membership, green fees, and whether a club is accepting players are set by those clubs.</p>
      <h2>Retail</h2>
      <p>Toronto Premium Outlets, in nearby Halton Hills, is the outlet centre referenced in the builder's location copy. The Erin Mills shopping area in Mississauga is the other retail reference. Both are existing destinations. Neither is a retail block inside this subdivision. Future commercial uses are proposed in the Town of Milton zoning application for the site, and those uses are not yet a named plaza or a tenant list.</p>
      <h2>Natural heritage and the site plan</h2>
      <p>The site is adjacent to Natural Heritage System lands and the Sixteen Mile Creek wetlands corridor. That adjacency is why the community is described as nature-adjacent rather than as an infill block on an already urban street. Mattamy's project description says the community is designed with integrated future schools, parks, and gathering spaces. The zoning application likewise lists parks among the proposed land uses. Living beside a wetland corridor usually means parts of the land are protected, buffered, or left as open space, and that roads and lots are arranged around that constraint. The detailed site plan layers — which edges are buffer, which blocks face a park, which streets are through-roads — have not been published as a resident-facing map on this site.</p>
      <p>Taken together, the location case for Hawthorne on Trafalgar is geographic and procedural, not a set of commute claims. The land is a 77.8-hectare parcel at 6119 Trafalgar Road inside the Trafalgar Secondary Plan, beside the Sixteen Mile Creek corridor, with Milton GO, Highway 401, and Highway 407 described as accessible, and with Conservation Halton landscapes named nearby. Sales have not opened. For the questions people ask next — price, deposit, and launch — use the pricing and FAQ pages, or <a href="/register">Register for VIP Access</a>.</p>
      <h2>What the municipal record does not decide</h2>
      <p>A zoning application and a subdivision file describe land use. They do not set the purchase price, the deposit calendar, or the day a buyer can close. Those commercial terms belong to Mattamy Homes and have not been released for Hawthorne on Trafalgar. Reading the February 9, 2026 public meeting, or the July 13, 2026 Council date, as a launch date would mix two calendars. One calendar is municipal. The other is sales, and the sales calendar still says Coming Soon.</p>
      <p>The verified address is the street number: 6119 Trafalgar Road, Milton, ON L9E 0Z6. Use that number with the map above. The development entity on the zoning application is Mattamy (White Squadron) Development Corporation. The applicant on the municipal form is White Squadron Development Corporation, with Korsiak Urban Planning as planning consultant. Those names identify the file. They are not a sales office you can walk into today.</p>
    </div>
    <div class="reveal">${facts()}</div>
  </div></main>`
}));

texts.push(page({
  file: "gallery.html",
  path: "/gallery",
  title: "Hawthorne on Trafalgar Gallery | Mattamy Homes Milton",
  description: "Photos for Hawthorne on Trafalgar by Mattamy Homes in Milton, Ontario. Community imagery for this coming-soon Trafalgar Road community.",
  active: "gallery",
  pageId: "gallery",
  extraLd: [breadcrumbLd([["/", "Home"], ["/gallery", "Gallery"]])],
  main: `<main id="main"><div class="wrap">
    ${crumbs([["/", "Home"], ["/gallery", "Gallery"]])}
    <p class="eyebrow">Renderings</p>
    <h1>Hawthorne on Trafalgar by Mattamy Homes</h1>
    <h2>Photos of Hawthorne on Trafalgar</h2>
    <p class="prose">These photographs are the community images used for Hawthorne on Trafalgar by Mattamy Homes. They show the Trafalgar Road setting, townhomes, and interior direction. They are not a released floor-plan set, and sizes are still to be announced.</p>
    <div class="gallery-grid">
      <figure>
        <a href="/images/hero-trafalgar.jpg" data-lightbox><img src="/images/hero-trafalgar.jpg" width="1920" height="1080" alt="Aerial view along Trafalgar Road for Hawthorne on Trafalgar by Mattamy Homes"></a>
        <figcaption>Trafalgar Road corridor, Milton.</figcaption>
      </figure>
      <figure>
        <a href="/images/community-townhomes.jpg" data-lightbox><img src="/images/community-townhomes.jpg" width="1600" height="900" alt="Townhomes at Hawthorne on Trafalgar by Mattamy Homes" loading="lazy"></a>
        <figcaption>Townhome collection.</figcaption>
      </figure>
      <figure>
        <a href="/images/feature-mattamy.jpg" data-lightbox><img src="/images/feature-mattamy.jpg" width="1400" height="1050" alt="Streetscape for Hawthorne on Trafalgar by Mattamy Homes" loading="lazy"></a>
        <figcaption>Streetscape.</figcaption>
      </figure>
      <figure>
        <a href="/images/feature-design.jpg" data-lightbox><img src="/images/feature-design.jpg" width="1400" height="1050" alt="Interior for Hawthorne on Trafalgar by Mattamy Homes" loading="lazy"></a>
        <figcaption>Interior direction.</figcaption>
      </figure>
      <figure>
        <a href="/images/feature-sustainability.jpg" data-lightbox><img src="/images/feature-sustainability.jpg" width="1400" height="1050" alt="Exterior home for Hawthorne on Trafalgar by Mattamy Homes" loading="lazy"></a>
        <figcaption>Exterior context.</figcaption>
      </figure>
      <figure>
        <a href="/images/og-hawthorne-trafalgar.jpg" data-lightbox><img src="/images/og-hawthorne-trafalgar.jpg" width="1200" height="630" alt="Hawthorne on Trafalgar by Mattamy Homes in Milton" loading="lazy"></a>
        <figcaption>Hawthorne on Trafalgar, Milton.</figcaption>
      </figure>
    </div>
    <p><a class="btn btn-deep" href="/register">Register for VIP Access</a></p>
    <div id="lightbox" hidden class="panel" role="dialog" aria-modal="true" aria-label="Image preview"><img alt="" width="1200" height="800"></div>
  </div></main>`
}));

const faqHtml = FAQS.map(([id, q, a]) => `<details class="faq" id="${id}" open><summary>${q}</summary><p>${a}</p></details>`).join("\n");
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  dateModified: ISO,
  mainEntity: FAQS.map(([, q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a }
  }))
};

texts.push(page({
  file: "faq.html",
  path: "/faq",
  title: "Hawthorne on Trafalgar FAQ | Mattamy Homes Milton",
  description: "Answers about Hawthorne on Trafalgar: pricing, deposit structure, launch timing, schools, VIP access, and more for this Milton Mattamy Homes community.",
  active: "faq",
  pageId: "faq",
  extraLd: [faqLd, breadcrumbLd([["/", "Home"], ["/faq", "FAQ"]])],
  main: `<main id="main"><div class="wrap">
    ${crumbs([["/", "Home"], ["/faq", "FAQ"]])}
    <p class="eyebrow">Questions</p>
    <h1>Hawthorne on Trafalgar FAQ</h1>
    <h2>Questions about Hawthorne on Trafalgar</h2>
    <p class="prose">Last updated: ${UPDATED}. These answers cover what Mattamy Homes and the Town of Milton have published about Hawthorne on Trafalgar, and they say "not yet released" wherever a number does not exist. Registration on this independent site is free.</p>
    ${faqHtml}
    <p><a class="btn btn-deep" href="/register">Register for VIP Access</a></p>
  </div></main>`
}));

texts.push(page({
  file: "register.html",
  path: "/register",
  title: "Hawthorne on Trafalgar Mattamy | Free VIP Registration",
  description: "Free VIP registration for Hawthorne on Trafalgar by Mattamy Homes in Milton. Be first to receive official pricing, floor plans, and launch details.",
  active: "",
  pageId: "register",
  showForm: false,
  sticky: false,
  extraLd: [breadcrumbLd([["/", "Home"], ["/register", "Register"]])],
  main: `<main id="main"><div class="wrap">
    ${crumbs([["/", "Home"], ["/register", "Register"]])}
    <p class="eyebrow">VIP registration</p>
    <h1>Register for VIP Access to Hawthorne on Trafalgar</h1>
    <div class="split">
      <div class="prose">
        <h2>What Hawthorne on Trafalgar registration includes</h2>
        <p>VIP access to Hawthorne on Trafalgar is available by registering through this independent information site. Registrants are added to a notification list and contacted directly once Mattamy Homes releases official pricing, floor plans, and a sales launch date — there is no cost to register.</p>
        <p>The list is about the project, not about holding a specific home. Nothing is on sale yet, so registration cannot promise a unit, a price, or an incentive. It is a way to hear when those documents exist. Preferred timing on any future release is a builder decision made later, under the builder's own rules.</p>
        <p>Mattamy Homes publishes a general sales inquiry line at 289-412-0392. That number belongs to the builder. This site does not operate a phone line.</p>
        <p>To ask for deletion of information you already submitted, send this form again with <a href="/register?request=deletion">a deletion request</a>. The submission is stored with a deletion note.</p>
        <h2>What the Hawthorne on Trafalgar form asks</h2>
        <p>The form matches the existing Hawthorne on Trafalgar registration: first name, last name, email, phone, and whether you are a broker. Checking consent is required before the registration is saved. There is no price question, because Mattamy Homes has not released pricing for Hawthorne on Trafalgar.</p>
        <p>A hidden field is present for spam filtering and should be left blank. Submissions sent too quickly are rejected. If you are asking for erasure, open the deletion link above before you submit so the note is marked as a deletion request. After a successful registration, the site sends you to a thank-you page. Keep the email you entered, because that is the address future pricing and floor-plan notices will use.</p>
      </div>
      <div class="panel">${form("vip-register-form", "register")}</div>
    </div>
  </div></main>`
}));

texts.push(page({
  file: "thank-you.html",
  path: "/thank-you",
  title: "Thank You | Hawthorne on Trafalgar VIP Registration",
  description: "Your Hawthorne on Trafalgar VIP registration was received. You will be contacted when official pricing and floor plans are released.",
  active: "",
  pageId: "thank-you",
  showForm: false,
  sticky: false,
  extraLd: [breadcrumbLd([["/", "Home"], ["/thank-you", "Thank You"]])],
  main: `<main id="main"><div class="wrap prose">
    ${crumbs([["/", "Home"], ["/thank-you", "Thank You"]])}
    <h1>Thank You for Registering for Hawthorne on Trafalgar</h1>
    <h2>What happens next for Hawthorne on Trafalgar</h2>
    <p>Your registration for Hawthorne on Trafalgar has been received. You are on the notification list for this independent information site. When Mattamy Homes releases official pricing, floor plans, or a sales launch date, the registration list is how that update is sent.</p>
    <p>There is no cost, and no home has been reserved. Prices, sizes, and occupancy for Hawthorne on Trafalgar are still to be announced. You can withdraw consent using the unsubscribe link in any future message.</p>
    <p><a href="/faq">Read the frequently asked questions</a> or return to the <a href="/">Hawthorne on Trafalgar overview</a>.</p>
  </div></main>`
}));

texts.push(page({
  file: "privacy.html",
  path: "/privacy",
  title: "Privacy Policy | Hawthorne on Trafalgar",
  description: "How this independent Hawthorne on Trafalgar site collects, stores, and deletes registration information under PIPEDA.",
  active: "",
  pageId: "privacy",
  extraLd: [breadcrumbLd([["/", "Home"], ["/privacy", "Privacy"]])],
  main: `<main id="main"><div class="wrap prose">
    ${crumbs([["/", "Home"], ["/privacy", "Privacy"]])}
    <h1>Privacy Policy for Hawthorne on Trafalgar</h1>
    <p>Last updated: ${UPDATED}. This policy covers trafalgarmattamy.com, an independent information and registration site for Hawthorne on Trafalgar in Milton, Ontario.</p>
    <h2>What is collected and why</h2>
    <p>The registration form collects your first name, last name, email, phone number, whether you are a broker, and your consent choice. The purpose is to send project updates about Hawthorne on Trafalgar by Mattamy Homes and to record which page the registration came from.</p>
    <h2>Where it is stored</h2>
    <p>Submissions are stored in a Supabase database, a third-party processor, in the table used for this project. Supabase hosts the row so the registration team can read it. The public site key can add a row. It is not a licence to browse other people's information from this website.</p>
    <h2>Consent</h2>
    <p>The consent box is unchecked when the form loads. A registration is not saved unless you check it. The wording is: you agree to receive updates about Hawthorne on Trafalgar, and you can unsubscribe anytime. The broker answer is stored with the registration.</p>
    <h2>Deletion and access</h2>
    <p>To request deletion or a copy of your registration, use the <a href="/register?request=deletion">registration form with a deletion request</a>. There is no personal inbox on this site. The request is stored against the same registration channel and marked as a deletion request. This site handles personal information under Canada's Personal Information Protection and Electronic Documents Act (PIPEDA): collection is limited to what the form asks, it is used for the purpose stated above, and you may withdraw consent.</p>
    <h2>Cookies and analytics</h2>
    <p>The pages themselves do not require an account cookie. The site is prepared for Google Analytics 4, Google Tag Manager, and the Meta Pixel. When those tags are given measurement IDs and loaded, they can set cookies and receive events such as a page view or a completed registration. Until those IDs are added, the tags are not loaded and those cookies are not set. You can also control cookies in your browser.</p>
    <h2>Hawthorne on Trafalgar and the builder</h2>
    <p>Sending a form here does not create an account with Mattamy Homes. This site is not the builder's official website. Project facts shown on the pages come from public builder and municipal sources and can change.</p>
  </div></main>`
}));

texts.push(page({
  file: "terms.html",
  path: "/terms",
  title: "Terms of Use | Hawthorne on Trafalgar",
  description: "Terms for using this independent Hawthorne on Trafalgar information and VIP registration website.",
  active: "",
  pageId: "terms",
  extraLd: [breadcrumbLd([["/", "Home"], ["/terms", "Terms"]])],
  main: `<main id="main"><div class="wrap prose">
    ${crumbs([["/", "Home"], ["/terms", "Terms"]])}
    <h1>Terms of Use for Hawthorne on Trafalgar</h1>
    <p>Last updated: ${UPDATED}. These terms apply to trafalgarmattamy.com.</p>
    <h2>Hawthorne on Trafalgar is described by an independent site</h2>
    <p>This is an independent information and registration website for Hawthorne on Trafalgar. It is not the official website of Mattamy Homes and is not affiliated with or endorsed by the builder. Names, application numbers, and location facts are reported from public sources. They can be updated, withdrawn, or superseded by the Town of Milton or by Mattamy Homes.</p>
    <h2>No offer to sell</h2>
    <p>Nothing on this site is an offer to sell a home, a reservation, or a price guarantee. Pricing, deposit amounts, unit sizes, bedroom counts, incentives, and occupancy for Hawthorne on Trafalgar have not been released. Where a figure is missing, the page says it is to be announced. A third-party price mentioned for Hawthorne East Village describes that other community only.</p>
    <h2>Registration</h2>
    <p>Submitting the form adds you to a notification list if you give consent. It does not create a contract to buy, and it does not allocate a lot. You agree that the details you submit are accurate. You can withdraw consent later. Electronic messages, when sent, will concern Hawthorne on Trafalgar and similar pre-construction opportunities, as the consent line states.</p>
    <h2>Accuracy</h2>
    <p>All renderings, pricing, sizes, and specifications are for illustration only and are subject to change without notice. E.&amp;O.E. The gallery will stay empty until official renderings are released. The home-page illustration is not a rendering of the community.</p>
    <h2>Liability</h2>
    <p>Decisions to buy real estate are yours. This site does not provide legal, tax, or mortgage advice, and it does not promise appreciation. To the extent the law allows, the site is provided as an information resource without a warranty that every municipal status line will remain current after the date printed in the footer.</p>
  </div></main>`
}));

const full = ["# Hawthorne on Trafalgar", "", `Last updated: ${ISO}`, "", ...texts.map((t) => t)].join("\n\n");
writeFileSync("llms-full.txt", full);
console.log("pages", texts.length);
