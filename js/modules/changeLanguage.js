export default function changeLanguage() {
    const browserLanguage = navigator.language || navigator.userLanguage;
    const header = document.querySelector('.header');
    const subtitle = document.querySelector('.subtitle');
    const description = document.querySelector('.main-section__description');
    const email = document.querySelector('.list__link');

    if (browserLanguage === 'pt-BR') {
        header.innerText = 'OLÁ, ME CHAMO';
        subtitle.innerText = 'Desenvolvedor Front-end & PHP';
        subtitle.style.letterSpacing = '.075rem';
        console.log(subtitle.style.letterSpacing);
        description.innerText = 'FALE COMIGO PELO';
        email.innerText = 'MEU EMAIL';
    }
}