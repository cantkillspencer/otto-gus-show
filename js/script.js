/* ============================================================
   script.js — The Otto & Gus Show
   ------------------------------------------------------------
   Tiny vanilla-JS bundle for:
     1. Mobile menu toggle
     2. Episode-grid filter buttons (episodes.html)
     3. Contact form fake-submit (contact.html)
     4. Reveal-on-scroll animations
   No build step. No dependencies. Edit freely.
   ============================================================ */

(function () {
  "use strict";

  /* --------------------------------------------------------
     1. Mobile nav toggle
     -------------------------------------------------------- */
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navMobile = document.querySelector("[data-nav-mobile]");
  if (navToggle && navMobile) {
    navToggle.addEventListener("click", () => {
      navMobile.classList.toggle("is-open");
    });
  }

  /* --------------------------------------------------------
     2. Episode filter buttons (only runs on episodes.html)
     -------------------------------------------------------- */
  const filterButtons = document.querySelectorAll("[data-filter]");
  const episodeCards = document.querySelectorAll(".episode-card[data-tag]");

  if (filterButtons.length && episodeCards.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;

        // Visual: highlight the active button
        filterButtons.forEach((b) => {
          b.style.borderColor = "var(--color-border-strong)";
          b.style.color = "var(--color-text-muted)";
          b.style.background = "var(--color-surface)";
        });
        btn.style.borderColor = "var(--color-primary)";
        btn.style.color = "var(--color-text)";
        btn.style.background = "var(--color-surface-elevated)";

        // Show / hide cards
        episodeCards.forEach((card) => {
          const tag = card.dataset.tag;
          const matches = filter === "all" || tag === filter;
          card.style.display = matches ? "" : "none";
        });
      });
    });
  }

  /* --------------------------------------------------------
     3. Contact form — local-only fake submit
     Replace with a real handler when you're ready.
     -------------------------------------------------------- */
  const contactForm = document.querySelector("[data-contact-form]");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const success = contactForm.querySelector("[data-success]");
      if (success) {
        success.classList.add("is-visible");
        success.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      contactForm.reset();
    });
  }

  /* --------------------------------------------------------
     4. Reveal-on-scroll
     Adds .is-visible to anything tagged .reveal as it scrolls
     into view. Auto-tags every episode-card and feature for
     a polished entrance.
     -------------------------------------------------------- */
  const autoReveal = document.querySelectorAll(
    ".episode-card, .feature, .host, .platform, .info-card"
  );
  autoReveal.forEach((el) => el.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
  }
})();
