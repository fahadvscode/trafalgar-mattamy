import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabase = createClient(
  "https://cfzuypbljirmibmxpabi.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmenV5cGJsamlybWlibXhwYWJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1MTgxMTYsImV4cCI6MjA3MDA5NDExNn0.U0DGF2JPzzV4NmvcgET-R8mVjV_-MhdVeeuLhZp6kes"
);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s()+-]{10,20}$/;

function setStatus(form, message, isError) {
  const status = form.querySelector(".form-status");
  if (!status) return;
  status.textContent = message;
  status.className = isError ? "form-status err" : "form-status";
  status.setAttribute("aria-live", isError ? "assertive" : "polite");
}

document.querySelectorAll(".vip-form").forEach((form) => {
  const startedAt = Date.now();

  form.addEventListener("focusin", () => {
    if (form.dataset.started) return;
    form.dataset.started = "1";
    if (window.gtag) {
      window.gtag("event", "form_start", { form_location: form.dataset.formLocation || "" });
    }
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    setStatus(form, "", false);

    if (form.querySelector('[name="website"]').value !== "") return;

    if (Date.now() - startedAt < 3000) {
      setStatus(form, "Please take a moment to review the form before submitting.", true);
      return;
    }

    const firstName = form.firstname.value.trim();
    const lastName = form.lastname.value.trim();
    const email = form.email.value.trim().toLowerCase();
    const phone = form.phone.value.trim();
    const broker = form.querySelector('input[name="is_broker"]:checked');

    if (!firstName || !lastName || !email || !phone || !broker) {
      setStatus(form, "Please complete every required field.", true);
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setStatus(form, "Enter a valid email address.", true);
      return;
    }
    if (!PHONE_RE.test(phone) || phone.replace(/\D/g, "").length < 10) {
      setStatus(form, "Use a phone format such as (416) 000-0000.", true);
      return;
    }
    if (!form.consent.checked) {
      setStatus(form, "Consent is required to register.", true);
      return;
    }

    const isBroker = broker.value === "yes";
    const deletion = new URLSearchParams(window.location.search).get("request") === "deletion";
    const payload = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      phone: phone,
      is_broker: isBroker,
      project_name: "Hawthorne on Trafalgar",
      source: "hawthorne-trafalgar-landing",
      form_location: form.dataset.formLocation || "bottom-section",
      status: "new",
      priority: "high",
      notes: `Broker: ${isBroker ? "Yes" : "No"}.${deletion ? " DELETION REQUEST." : ""}`
    };

    const button = form.querySelector('button[type="submit"]');
    if (button) {
      button.disabled = true;
      button.textContent = "Submitting…";
    }

    const { error } = await supabase.from("hawthorne_trafalgar_leads").insert(payload);

    if (error) {
      setStatus(form, "Something went wrong submitting your registration. Please try again.", true);
      if (button) {
        button.disabled = false;
        button.textContent = "Register for VIP Access";
      }
      return;
    }

    if (window.gtag) {
      window.gtag("event", "vip_registration", {
        project: "Hawthorne on Trafalgar",
        form: form.dataset.formLocation || ""
      });
      window.gtag("event", "form_submit", { form_location: form.dataset.formLocation || "" });
    }
    if (window.fbq) window.fbq("track", "Lead");
    window.location.href = "/thank-you";
  });
});
