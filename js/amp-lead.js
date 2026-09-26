document.addEventListener("submit", async function (event) {
  var form = event.target;
  if (!form || String(form.tagName) !== "FORM") return;
  event.preventDefault();
  var status = form.querySelector(".form-status");
  function say(message) {
    if (status) status.textContent = message;
  }
  var honey = form.querySelector('[name="website"]');
  if (honey && honey.value) return;
  var first = (form.firstname.value || "").trim();
  var last = (form.lastname.value || "").trim();
  var email = (form.email.value || "").trim().toLowerCase();
  var phone = (form.phone.value || "").trim();
  var broker = form.querySelector('input[name="is_broker"]:checked');
  var consent = form.consent && form.consent.checked;
  if (!first || !last || !email || !phone || !broker) {
    say("Please complete every required field.");
    return;
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    say("Enter a valid email address.");
    return;
  }
  var digits = phone.replace(/\D/g, "");
  if (!/^[\d\s()+-]{10,20}$/.test(phone) || digits.length < 10) {
    say("Use a phone format such as (416) 000-0000.");
    return;
  }
  if (!consent) {
    say("Consent is required to register.");
    return;
  }
  var isBroker = broker.value === "yes";
  var button = form.querySelector('button[type="submit"]');
  if (button) {
    button.setAttribute("disabled", "");
    button.textContent = "Submitting…";
  }
  var deletion = false;
  try {
    deletion = String(location.search || "").indexOf("request=deletion") !== -1;
  } catch (ignore) {}
  try {
    var response = await fetch("https://cfzuypbljirmibmxpabi.supabase.co/rest/v1/hawthorne_trafalgar_leads", {
      method: "POST",
      headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmenV5cGJsamlybWlibXhwYWJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1MTgxMTYsImV4cCI6MjA3MDA5NDExNn0.U0DGF2JPzzV4NmvcgET-R8mVjV_-MhdVeeuLhZp6kes",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmenV5cGJsamlybWlibXhwYWJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1MTgxMTYsImV4cCI6MjA3MDA5NDExNn0.U0DGF2JPzzV4NmvcgET-R8mVjV_-MhdVeeuLhZp6kes",
        "Content-Type": "application/json",
        Prefer: "return=minimal"
      },
      body: JSON.stringify({
        firstname: first,
        lastname: last,
        email: email,
        phone: phone,
        is_broker: isBroker,
        project_name: "Hawthorne on Trafalgar",
        source: "hawthorne-trafalgar-landing",
        form_location: form.getAttribute("data-form-location") || "bottom-section",
        status: "new",
        priority: "high",
        notes: "Broker: " + (isBroker ? "Yes" : "No") + "." + (deletion ? " DELETION REQUEST." : "")
      })
    });
    if (!response.ok) throw new Error("save");
    say("You're registered for Hawthorne on Trafalgar.");
    var next = form.querySelector(".amp-next");
    if (next) next.removeAttribute("hidden");
  } catch (error) {
    say("Something went wrong submitting your registration. Please try again.");
    if (button) {
      button.removeAttribute("disabled");
      button.textContent = "Register for VIP Access";
    }
  }
}, true);
