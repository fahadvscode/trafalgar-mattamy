/* Bump the last-updated date and dateModified fields in every page's JSON-LD whenever project facts change. */
(function () {
  document.documentElement.classList.add("js");

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var nodes = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    nodes.forEach(function (node) { node.classList.add("is-visible"); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach(function (node) { observer.observe(node); });
  }

  if (document.body.dataset.page === "floor-plans" && window.gtag) {
    window.gtag("event", "floor_plan_view");
  }

  document.querySelectorAll("[data-lightbox]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      var href = link.getAttribute("href");
      if (!href || href === "#") return;
      event.preventDefault();
      var box = document.getElementById("lightbox");
      var img = box && box.querySelector("img");
      if (!box || !img) return;
      img.src = href;
      img.alt = link.querySelector("img") ? link.querySelector("img").alt : "";
      box.hidden = false;
    });
  });

  var lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.addEventListener("click", function () { lightbox.hidden = true; });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") lightbox.hidden = true;
    });
  }
})();
