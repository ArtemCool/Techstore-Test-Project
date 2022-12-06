const newProductsSwiper = new Swiper('.new-products-swiper', {
    // Navigation arrows
    navigation: {
        nextEl: '.new-products-swiper-button-next',
        prevEl: '.new-products-swiper-button-prev',
    },
    slidesPerView: '6',
    breakpoints: {
        // when window width is >= 320px
        1212: {
          slidesPerView: '6',
        },
        // when window width is >= 480px
        992: {
            slidesPerView: '4',
        },
        768: {
            slidesPerView: '3',
        },
        478: {
            slidesPerView: '2',
        },
        0: {
            slidesPerView: '2',
        }
      }
});