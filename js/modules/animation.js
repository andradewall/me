export default function initAnimation() {
    const header = document.querySelector('.header');
    const main = document.querySelector('.main');
    const footer = document.querySelector('.footer');
    
    header.classList.add('animationShowDown');
    
    setTimeout(() => {
        main.classList.add('animationShowRight');
    }, 1300);
    
    setTimeout(() => {
        footer.classList.add('animationShow');
    }, 2000);
}