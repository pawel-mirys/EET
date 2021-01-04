const burger = document.querySelector(".burger");
const links = document.querySelector(".links");
const navLinks = Array.from(document.querySelectorAll('.nav-link'));
const burgerBars = Array.from(burger.children);
const cards = Array.from(document.querySelectorAll('.company-card'));

burger.addEventListener('click', () => {
    links.classList.toggle('active');
    burgerBars.forEach((bar) => {
        bar.classList.toggle('active');
    })
})

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        links.classList.contains('active') ? links.classList.remove('active') : undefined;
        burgerBars.forEach((bar) => {
            bar.classList.contains('active') ? bar.classList.remove('active') : undefined;
        })
    })
})

cards.forEach(card => {
    card.classList.contains('tameh') ? card.firstElementChild.src = './assets/images/tameh.png' : undefined;
    card.classList.contains('eko') ? card.firstElementChild.src = './assets/images/eko-energia.png' : undefined;
    card.classList.contains('gzog') ? card.firstElementChild.src = './assets/images/GZOG.png' : undefined;
})