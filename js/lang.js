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

  // Optional: Update the toggle button icon or text
  const langBtn = document.querySelector('.language-btn');
  if (langBtn) {
    langBtn.textContent = isEnglish ? '🇲🇾 / 🇬🇧' : '🇬🇧 / 🇲🇾';
  }

  isEnglish = !isEnglish;
}