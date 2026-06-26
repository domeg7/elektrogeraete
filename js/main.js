// die-elektroheizungen.ch — Refresh 2026
// Mobile-Nav, Toast für noch nicht implementierte Links, Smooth-Scroll

(() => {
  "use strict";

  // ---- Mobile nav toggle ----
  const navToggle = document.querySelector(".nav__toggle");
  const navList = document.getElementById("nav-list");
  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      const open = navList.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.setAttribute("aria-label", open ? "Menü schliessen" : "Menü öffnen");
    });

    navList.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        if (navList.classList.contains("is-open")) {
          navList.classList.remove("is-open");
          navToggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  // ---- Toast for not-implemented links ----
  const toastHost = document.querySelector(".toast-host");

  function showToast(message) {
    if (!toastHost) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.setAttribute("role", "status");
    toast.innerHTML = '<span class="toast__dot" aria-hidden="true"></span><span></span>';
    toast.querySelector("span:last-child").textContent = message;
    toastHost.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add("show"));

    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  }

  document.querySelectorAll("[data-not-implemented]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const label = el.dataset.notImplemented;
      showToast(`„${label}“ — diese Seite ist im Refresh-Entwurf noch nicht umgesetzt.`);
    });
  });

  // ---- Web3Forms submit (progressive enhancement) ----
  document.querySelectorAll("form[data-web3form]").forEach((form) => {
    const status = form.querySelector(".form__status");
    const submit = form.querySelector('[type="submit"]');

    function setStatus(text, kind) {
      if (!status) return;
      status.className = "form__status" + (kind ? " form__status--" + kind : "");
      status.textContent = text;
    }

    form.addEventListener("submit", async (e) => {
      // Ohne JS sendet das Formular nativ an Web3Forms (action gesetzt).
      e.preventDefault();
      setStatus("", "");

      if (submit) {
        submit.disabled = true;
        submit.dataset.label = submit.textContent;
        submit.textContent = "Wird gesendet …";
      }

      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form),
        });
        const data = await res.json();
        if (res.ok && data.success) {
          form.reset();
          setStatus(
            "Vielen Dank! Ihre Anfrage ist bei uns eingegangen — wir melden uns umgehend.",
            "ok"
          );
        } else {
          throw new Error(data.message || "submit failed");
        }
      } catch (err) {
        setStatus(
          "Leider konnte das Formular nicht gesendet werden. Bitte rufen Sie uns an: 041 210 15 00.",
          "err"
        );
      } finally {
        if (submit) {
          submit.disabled = false;
          submit.textContent = submit.dataset.label || "Senden";
        }
      }
    });
  });

  // ---- Smooth scroll for in-page anchors (respects reduced motion) ----
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href").slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    });
  });
})();
