$(document).ready(function () {
    $(".carousel").owlCarousel({
        items: 1,
        nav: true, // Enable navigation
        navText: ['<', '>'], // Customize navigation text/icons
        loop: true,
        smartSpeed: 1000 
    });
});



// section2 

const carousel = document.querySelector(".carousell");
const slides = document.querySelectorAll(".slide");
const controlLinks = document.querySelectorAll(".controls a");

let i = 0,
    j = 1,
    intervalId;

const intervalFn = () => {
    intervalId = setInterval(() => {
        carousel.style.rotate = `-${++i * 45}deg`;

        document.querySelector(".slide.active").classList.remove("active");
        const activeSlide = document.querySelector(`.slide:nth-child(${++j})`);
        activeSlide.classList.add("active");

        document.querySelector("a.active").classList.remove("active");
        const activeLink = document.querySelector(`.controls a:nth-child(${j})`);
        activeLink.classList.add("active");

        j === 4 && (j = 0);
    }, 4000);
};

intervalFn();

controlLinks.forEach((control) => {
    control.addEventListener("click", () => {
        clearInterval(intervalId);
        carousel.style.rotate = `-${(i - j + Number(control.dataset.index)) * 90
            }deg`;

        document.querySelector(".slide.active").classList.remove("active");
        const activeSlide = document.querySelector(
            `.slide:nth-child(${control.dataset.index})`
        );
        activeSlide.classList.add("active");

        document.querySelector("a.active").classList.remove("active");
        control.classList.add("active");
    });
});