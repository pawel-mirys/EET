const burger = document.querySelector(".burger");
const links = document.querySelector(".links");
const burgerBars = Array.from(burger.children)



burger.addEventListener('click', () => {
    links.classList.toggle('active');
    burgerBars.forEach((bar) => {
        bar.classList.toggle('active');
    })
})