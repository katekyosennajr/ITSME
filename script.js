// ===================================
// Dark/Light Mode Toggle
// ===================================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

// Toggle theme
themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// ===================================
// Smooth Scroll for Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===================================
// Console Message
// ===================================
console.log('%c👋 Hi there!', 'font-size: 1.5em; font-weight: bold;');
console.log('%cTerima kasih sudah mengunjungi portfolio saya!', 'font-size: 1em;');
console.log('%cGitHub: https://github.com/katekyosennajr', 'font-size: 0.9em; color: #0066cc;');
