/**
 * Studio — main.js
 * Shared script for all pages.
 */

(function () {
  'use strict';

  function setHeaderHeight() {
    var header = document.querySelector('.site-header');
    if (header) {
      var h = header.offsetHeight;
      document.documentElement.style.setProperty('--header-h', h + 'px');
    }
  }

  function initPageFadeIn() {
    document.body.classList.add('page-loading');
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        document.body.classList.remove('page-loading');
        document.body.classList.add('page-loaded');
      });
    });
  }

  function setActiveNav() {
    var path = window.location.pathname.split('/').pop() || 'index.html';
    if (path === '') path = 'index.html';
    document.querySelectorAll('.site-header__nav a').forEach(function (a) {
      var href = a.getAttribute('href');
      if (href === path) {
        a.classList.add('active');
      } else {
        a.classList.remove('active');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      setHeaderHeight();
      setActiveNav();
      initPageFadeIn();
    });
  } else {
    setHeaderHeight();
    setActiveNav();
    initPageFadeIn();
  }

  window.addEventListener('resize', setHeaderHeight);
})();
