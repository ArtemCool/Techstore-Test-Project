const withLinksSwiper = new Swiper('.with-links-swiper', {
    slidesPerView: '5',
    breakpoints: {
        // when window width is >= 320px
        1400: {
            slidesPerView: '5',
        },
        1212: {
          slidesPerView: '4',
        },
        // when window width is >= 480px
        992: {
            slidesPerView: '3',
        },
        768: {
            slidesPerView: '2',
        },
        478: {
            slidesPerView: '2',
        },
        0: {
            slidesPerView: '2',
        }
      }
});