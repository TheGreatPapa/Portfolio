// src/scripts/language-switcher.js

document.addEventListener("DOMContentLoaded", async () => {
  const translations = {
    en: await fetch('../i18n/en.json').then(res => res.json()),
    es: await fetch('../i18n/es.json').then(res => res.json()),
    fr: await fetch('../i18n/fr.json').then(res => res.json())
  };

  const elementsToTranslate = document.querySelectorAll('[data-translate-key]');

  document.getElementById('language-select').addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    const translation = translations[selectedLanguage];

    elementsToTranslate.forEach(element => {
      const key = element.getAttribute('data-translate-key');
      if (translation[key]) {
        element.textContent = translation[key];
      }
    });
  });

  // Initial load with default language
  document.getElementById('language-select').dispatchEvent(new Event('change'));
});