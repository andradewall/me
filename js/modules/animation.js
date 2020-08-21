export default function initAnimation() {
    const header = document.querySelector('.header');
    const title = document.querySelector('.title');
    const subtitle = document.querySelector('.subtitle');
    const description = document.querySelector('.main-section__description');
    const links = document.querySelector('.list');
    const footer = document.querySelector('.footer');
    
    header.classList.add('animationShowDown');
    
    setTimeout(() => {
        title.classList.add('animationShowRight');
        setTimeout(() => {
            subtitle.classList.add('animationShow');
            setTimeout(() => {
                description.classList.add('animationShow');
                setTimeout(() => {
                    links.classList.add('animationShow');
                    setTimeout(() => {
                        footer.classList.add('animationShow');
                    }, 1500);
                }, 500);
            }, 1000);
        }, 1000);

    }, 1300);
    
    
}