(function () {
  'use strict';

  // ========== DOM Elements ==========
  const header = document.getElementById('header');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  const navDropdown = document.querySelector('.nav-dropdown');
  const langBtns = document.querySelectorAll('.lang-btn');
  const faqItems = document.querySelectorAll('.faq-item');

  // ========== Scroll: header class ==========
  function onScroll() {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ========== Mobile nav toggle ==========
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
      document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    });
  }

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-menu a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 768 && navMenu.classList.contains('open')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  // ========== Dropdown (desktop hover, mobile click) ==========
  if (navDropdown) {
    const dropdownLink = navDropdown.querySelector('.nav-link');
    const dropdownMenu = navDropdown.querySelector('.dropdown-menu');

    dropdownLink.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        navDropdown.classList.toggle('open');
        if (dropdownMenu) dropdownMenu.style.maxHeight = navDropdown.classList.contains('open') ? dropdownMenu.scrollHeight + 'px' : '0';
      }
    });
  }

  // ========== Smooth scroll for anchor links ==========
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ========== Stats count-up (runs on every page load) ==========
  function animateCount(el, toValue, durationMs) {
    const start = performance.now();
    const from = 0;
    const duration = Math.max(300, durationMs || 1400);

    function frame(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      const value = Math.round(from + (toValue - from) * eased);
      el.textContent = value.toLocaleString();
      if (t < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  }

  function runStatsEveryLoad() {
    document.querySelectorAll('.count-up[data-count]').forEach(function (el) {
      const raw = el.getAttribute('data-count');
      const to = parseInt(raw, 10);
      if (!Number.isFinite(to)) return;
      const duration = to >= 10000 ? 1800 : 1400;
      animateCount(el, to, duration);
    });
  }

  // After load, animate (stats is right after About so it's visible quickly)
  window.addEventListener('load', function () {
    setTimeout(runStatsEveryLoad, 250);
  });

  // ========== Language (EN / AR) – uses js/translations.js ==========
  var translations = (typeof window !== 'undefined' && window.TRANSLATIONS) ? window.TRANSLATIONS : { en: {}, ar: {} };
  if (Object.keys(translations.en).length === 0) {
    console.warn('CA Site: Translations not loaded. Make sure js/translations.js exists and is loaded before script.js. If opening from file://, try using a local server (e.g. Live Server).');
  }

  function setLanguage(lang) {
    var dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
    document.documentElement.dir = dir;
    document.body.classList.toggle('rtl', lang === 'ar');
    var t = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });
    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
    });
    // Translate aria-labels (for accessibility)
    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria-label');
      if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
    });
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    try { localStorage.setItem('ca-lang', lang); } catch (e) {}
  }

  langBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLanguage(this.getAttribute('data-lang'));
    });
  });

  (function () {
    try {
      var saved = localStorage.getItem('ca-lang');
      if (saved && (saved === 'en' || saved === 'ar')) {
        setLanguage(saved);
      } else {
        // Ensure page text is synced with translations on first load
        setLanguage('en');
      }
    } catch (e) {}
  })();

  // ========== FAQ accordion ==========
  faqItems.forEach(function (item) {
    var question = item.querySelector('.faq-question');
    var answer = item.querySelector('.faq-answer');
    if (!question || !answer) return;
    question.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      faqItems.forEach(function (other) {
        other.classList.remove('open');
        other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Contact form removed (replaced by map embed)
})();
