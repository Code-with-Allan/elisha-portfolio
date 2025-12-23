document.addEventListener('DOMContentLoaded', function () {
  // Set current year in footer
  var yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Initialize AOS if available
  if (typeof AOS !== 'undefined' && AOS.init) {
    AOS.init({ once: true });
  }

  // Simple typewriter for #typed-text
  var typed = document.getElementById('typed-text');
  if (typed) {
    var phrases = ['STATISTICIAN', 'DATA ANALYST', 'M&E SPECIALIST'];
    var pIndex = 0;
    var charIndex = 0;
    var isDeleting = false;

    function tick() {
      var current = phrases[pIndex];
      if (!isDeleting) {
        typed.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          isDeleting = true;
          setTimeout(tick, 1200);
          return;
        }
      } else {
        typed.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          pIndex = (pIndex + 1) % phrases.length;
        }
      }
      setTimeout(tick, isDeleting ? 80 : 120);
    }

    setTimeout(tick, 500);
  }
});
