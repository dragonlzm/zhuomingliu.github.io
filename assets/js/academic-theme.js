(function () {
  'use strict';
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') {
      root.setAttribute('data-theme', saved);
    }
  } catch (error) {
    // The theme remains usable when browser storage is unavailable.
  }

  document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.theme-toggle');
    if (!button) return;
    function updateButton() {
      var dark = root.getAttribute('data-theme') === 'dark';
      button.setAttribute('aria-pressed', String(dark));
      button.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
      button.querySelector('i').className = 'fa-solid ' + (dark ? 'fa-sun' : 'fa-moon');
    }
    button.hidden = false;
    updateButton();
    button.addEventListener('click', function () {
      var theme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', theme);
      try { localStorage.setItem('theme', theme); } catch (error) { /* Optional persistence. */ }
      updateButton();
    });
  });
}());
