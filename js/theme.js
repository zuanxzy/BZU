function toggleDarkMode() {
  const body = document.body;
  const isDark = body.classList.toggle('dark-mode');

  // Tukar ikon button kalau nak (optional)
  const toggleBtn = document.querySelector('.language-btn:last-of-type');
  toggleBtn.textContent = isDark ? '☀️' : '🌓';

  // Simpan pilihan dalam localStorage
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
}

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');

    // Tukar ikon terus bila load
    const toggleBtn = document.querySelector('.language-btn:last-of-type');
    toggleBtn.textContent = '☀️';
  }
});
