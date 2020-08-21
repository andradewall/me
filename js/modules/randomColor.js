export default function randomColor() {
    const colors = [
        '#735cb0',
        '#00a4ef',
        '#6ab43e',
        '#e89d41',
        '#fd4084'
    ];
    const randomNumber = Math.floor((Math.random() * colors.length));
    const head = document.querySelector('head');
    const link = document.createElement('link');

    // Setting the color primary
    document.documentElement.style.setProperty('--color-primary', colors[randomNumber]);

    // Setting the favicon
    link.type = 'image/x-icon';
    link.rel = 'icon';
    link.href = `img/${randomNumber}.png`;
    head.appendChild(link);
}