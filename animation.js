

// const burgerMenu = document.querySelector(".burger-menu");
// const menu = document.querySelector(".nav");
// const overlay = document.querySelector(".overlay");

// burgerMenu.addEventListener("click", () => {
//     menu.classList.toggle("open");
//     overlay.classList.toggle("open");
// });

// overlay.addEventListener("click", () => {
//     menu.classList.remove("open");
//     overlay.classList.remove("open");
// }); 

const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const menuLinks = document.querySelectorAll(".nav a");

burgerMenu.addEventListener("click", () => {
    menu.classList.toggle("open");
    overlay.classList.toggle("open");
});

overlay.addEventListener("click", () => {
    menu.classList.remove("open");
    overlay.classList.remove("open");
});

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("open");
        overlay.classList.remove("open");
    });
});
