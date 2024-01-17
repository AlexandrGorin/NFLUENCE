let swiper = new Swiper('.swiper__hero', {

    loop: true,
    autoplay: {
        delay: 10000,
    }

});


let swiper1 = new Swiper('.swiper__cases', {

    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.cases-button-next',
        prevEl: '.cases-button-prev',
    },

});