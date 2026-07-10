/* =========================================================
   GROWFOUNDRY — SHARED SITE BEHAVIOUR
   Loaded on every page. Each block below is independent and
   checks for its elements before running, so this one file
   works across all pages without errors.
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* -----------------------------------------------------
     1. Mobile navigation toggle
  ----------------------------------------------------- */
  var navToggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close the mobile menu after a link is tapped
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* -----------------------------------------------------
     2. Sticky header shadow on scroll
  ----------------------------------------------------- */
  var header = document.querySelector(".site-header");
  if (header) {
    var toggleHeaderShadow = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    toggleHeaderShadow();
    window.addEventListener("scroll", toggleHeaderShadow, { passive: true });
  }

  /* -----------------------------------------------------
     3. Highlight the current page in the nav
  ----------------------------------------------------- */
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (link) {
    var linkPage = link.getAttribute("href").split("#")[0];
    if (linkPage === currentPage) {
      link.classList.add("is-active");
    }
  });

  /* -----------------------------------------------------
     4. FAQ accordion
  ----------------------------------------------------- */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var question = item.querySelector(".faq-question");
    var answer = item.querySelector(".faq-answer");
    if (!question || !answer) return;

    question.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");

      // Close any other open FAQ items (accordion behaviour)
      item.parentElement.querySelectorAll(".faq-item.is-open").forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove("is-open");
          openItem.querySelector(".faq-answer").style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove("is-open");
        answer.style.maxHeight = null;
      } else {
        item.classList.add("is-open");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  /* -----------------------------------------------------
     5. Reveal-on-scroll animation
  ----------------------------------------------------- */
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: just show everything if IntersectionObserver isn't supported
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* -----------------------------------------------------
     6. Portfolio filter (Portfolio page only)
  ----------------------------------------------------- */
  var filterButtons = document.querySelectorAll(".filter-btn");
  var portfolioCards = document.querySelectorAll(".portfolio-card");

  if (filterButtons.length && portfolioCards.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterButtons.forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");

        var filter = btn.getAttribute("data-filter");

        portfolioCards.forEach(function (card) {
          var matches = filter === "all" || card.getAttribute("data-category") === filter;
          card.style.display = matches ? "" : "none";
        });
      });
    });
  }

  /* -----------------------------------------------------
     7. Contact form handling
     -----------------------------------------------------
     This site uses no paid backend. By default, submitting
     the form shows an on-page success message so you can see
     the flow working immediately.

     TO RECEIVE REAL SUBMISSIONS BY EMAIL (FREE):
     1. Create a free account at https://formspree.io
     2. Create a new form and copy the endpoint it gives you
        (looks like https://formspree.io/f/xxxxxxx)
     3. Open contact.html and change the <form> tag's
        "action" attribute to that endpoint, and set
        method="POST" (already set).
     4. Delete or comment out the "e.preventDefault()" line
        below so the form submits to Formspree normally.
     Full instructions are also in README.md.
  ----------------------------------------------------- */
  var contactForm = document.querySelector("#contact-form");
  var formSuccess = document.querySelector("#form-success");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Remove this line once Formspree (or another backend) is connected

      // Basic front-end validation for required fields
      var requiredFields = contactForm.querySelectorAll("[required]");
      var allFilled = true;
      requiredFields.forEach(function (field) {
        if (!field.value.trim()) {
          allFilled = false;
          field.style.borderColor = "#c0392b";
        } else {
          field.style.borderColor = "";
        }
      });

      if (!allFilled) return;

      if (formSuccess) {
        formSuccess.classList.add("is-visible");
      }
      contactForm.reset();
    });
  }

});
