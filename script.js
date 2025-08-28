document.addEventListener("DOMContentLoaded", function () {
  // Typed.js effect
  new Typed('#typed', {
    strings: ["Web Developer", "UI/UX Designer", "Problem Solver", "Quick Thinker"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  });

  // Back to top button
  const btn = document.getElementById("topBtn");
  window.onscroll = () => {
    if (btn) {
      btn.style.display = window.scrollY > 300 ? "block" : "none";
    }
  };
  window.topFunction = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dark/Light theme toggle
  const toggleBtn = document.getElementById('toggle-theme');
  if (toggleBtn) {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light-mode');
      toggleBtn.textContent = '🌙 Dark Mode';
    }

    toggleBtn.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('light-mode');
      toggleBtn.textContent = isLight ? '🌙 Dark Mode' : '☀️ Light Mode';
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
  }
});
