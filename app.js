const burger = document.querySelector(".burger");
const links = document.querySelector(".links");
const burgerBars = Array.from(burger.children);
const cards = Array.from(document.querySelectorAll('.company-card'));




burger.addEventListener('click', () => {
    links.classList.toggle('active');
    burgerBars.forEach((bar) => {
        bar.classList.toggle('active');
    })
})

cards.forEach(card => {
    card.classList.contains('tameh') ? card.firstElementChild.src = './assets/images/tameh.png' : undefined;
    card.classList.contains('eko') ? card.firstElementChild.src = './assets/images/eko-energia.png' : undefined;
    card.classList.contains('gzog') ? card.firstElementChild.src = './assets/images/gzog.png' : undefined;
});