function toggleDarkMode() {
  const body = document.body;
  const isDark = body.classList.toggle('dark-mode');

  // Prefer a dedicated button class or ID
  const toggleBtn = document.querySelector('.theme-toggle-btn');
  if (toggleBtn) {
    toggleBtn.textContent = isDark ? '☀️' : '🌓';
    toggleBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
}

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');

    const toggleBtn = document.querySelector('.theme-toggle-btn');
    if (toggleBtn) {
      toggleBtn.textContent = '☀️';
      toggleBtn.setAttribute('aria-label', 'Switch to light mode');
    }
  }
});
