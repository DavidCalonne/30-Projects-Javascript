document.addEventListener('DOMContentLoaded', function() {
    let storedLang = localStorage.getItem('lang'); 
    // Si aucune langue n'est stockée, utiliser la langue par défaut du HTML
    const lang = storedLang || document.querySelector('html').getAttribute('lang');
    // Appliquer la langue sélectionnée
    document.querySelector('html').setAttribute('lang', lang);
    document.querySelector('body').setAttribute('data-lang', lang);
    const elements = document.querySelectorAll('[data-fr][data-en]');
    function changeLang(lang) {
        elements.forEach(element => {
            element.innerHTML = element.getAttribute(`data-${lang}`);
        });
        // Stocker la langue sélectionnée dans localStorage
        localStorage.setItem('lang', lang);
    }
    changeLang(lang);

    document.querySelectorAll('.lang-item').forEach(item => {
        item.addEventListener('click', function() {
            const lang = item.getAttribute('data-lang');
            changeLang(lang);
        });
    });
});