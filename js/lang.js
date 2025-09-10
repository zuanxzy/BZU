// js/lang.js
let isEnglish = false;

function toggleLanguage() {
  const elements = document.querySelectorAll('[data-en]');

  elements.forEach((el) => {
    const current = el.innerHTML;
    const translated = el.getAttribute('data-en');

    el.setAttribute('data-en', current);
    el.innerHTML = translated;
  });

  // Update toggle state
  isEnglish = !isEnglish;

  // Update the toggle button text
  const langBtn = document.querySelector('.language-btn');
  if (langBtn) {
    langBtn.textContent = isEnglish ? '🇲🇾' : 'EN';
    // Atau kalau nak kedua-dua
    // langBtn.textContent = isEnglish ? '🇲🇾 / EN' : 'EN / 🇲🇾';
  }
}
