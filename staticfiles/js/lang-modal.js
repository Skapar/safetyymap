window.addEventListener('DOMContentLoaded', function() {
    const referringPage = document.referrer;

    let language = 'en'; // Default language is English

    if (referringPage.includes(ruPageUrl)) {
        language = 'ru'; // Russian
    } else if (referringPage.includes(kzPageUrl)) {
        language = 'kz'; // Kazakh
    }

    const commonSafety = document.querySelector('.entry h5');

    if (language === 'ru') {
        commonSafety.textContent = 'Отдел Учета, Отчетности и Финансов';
        // Adjust other content for Russian
    } else if (language === 'kz') {
        commonSafety.textContent = 'Отдел 667'
        // Adjust content for Kazakh
    } else {
        roomLocate.textContent = 'defaults, xdd';
        // Default content for English
    }
});
