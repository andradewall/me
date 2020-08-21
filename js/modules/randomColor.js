export default function randomColor() {
    const colors = [
        '#735cb0',
        '#00a4ef',
        '#6ab43e',
        '#e89d41',
        '#fd4084'
    ];
    const randomNumber = Math.floor((Math.random() * colors.length));
    document.documentElement.style.setProperty('--color-primary', colors[randomNumber]);
}