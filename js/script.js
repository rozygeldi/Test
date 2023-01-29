const heroSwiper = new Swiper('.hero__swiper', {
    // Optional parameters
    direction: 'horizontal',
    centeredSlides: true,
    slidesPerView: 1,
    autoplay: {
        delay: 3000,
    },
    loop: true,
});

const projectSwiper = new Swiper('.projects__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 2,
    spaceBetween: 40,
    breakpoints: {
        1024: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.projects-button-next',
        prevEl: '.projects-button-prev',
    },
});

const serviceItem = document.querySelectorAll(".service__item");
const serviceTitle = document.querySelectorAll(".service__title-hidden");
const serviceWrapper = document.querySelectorAll(".service__wrapper");

serviceItem.forEach((item, i)=>{
    item.addEventListener("click", ()=>{
        serviceItem.forEach((item, i)=>{
            item.classList.remove("active");
            serviceTitle[i].classList.remove("active");
            serviceWrapper[i].classList.remove("active");
        });
        item.classList.add("active");
        serviceTitle[i].classList.add("active");
        serviceWrapper[i].classList.add("active");
    });
});