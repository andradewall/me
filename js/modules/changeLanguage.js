export default function changeLanguage() {
    const browserLanguage = navigator.language || navigator.userLanguage;

    if (browserLanguage === 'pt-BR') {
        const header = document.querySelector('.header');
        const subtitle = document.querySelector('.subtitle');
        const description = document.querySelector('.main-section__description');
        const emailText = document.querySelector('.list__link');
        const emailLink = document.querySelector('a');

        header.innerText = 'OLÁ, ME CHAMO';
        subtitle.innerText = 'Desenvolvedor Front-end & PHP';
        subtitle.style.letterSpacing = '.075rem';
        description.innerText = 'FALE COMIGO PELO';
        emailText.innerText = 'MEU EMAIL';
        emailLink.href = 'mailto:contato@wllc.dev';
    }
}