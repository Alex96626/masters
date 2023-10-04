document.addEventListener('DOMContentLoaded', ()=> {
    
     const portfolioSliderSmall = new Swiper('.portfolio-slider-small', {
       // Default parameters

       loop: true,
       autoplay: true,
       delay: 50,
       // Responsive breakpoints
       breakpoints: {
         680: {
           slidesPerView: 3,
           spaceBetween: 13,
         },

         450: {
           slidesPerView: 2,
           spaceBetween: 13,
         },

         320: {
           slidesPerView: 1,
           spaceBetween: 13,
         },
         //     // when window width is >= 320px
         //     320: {
         //       slidesPerView: 2,
         //       spaceBetween: 20,
         //     },
         //     // when window width is >= 480px
         //     480: {
         //       slidesPerView: 3,
         //       spaceBetween: 30,
         //     },
         //     // when window width is >= 640px
         //     640: {
         //       slidesPerView: 4,
         //       spaceBetween: 40,
         //     },
       },
     });

    const swiper = new Swiper('#portfolio-slider-big', {
      // Default parameters
    //   slidesPerView: 5,
    //   spaceBetween: 17,
      loop: true,
      autoplay: true,
      delay: 50,
      // Responsive breakpoints
      breakpoints: {
        1560: {
          slidesPerView: 5,
          spaceBetween: 17,
        },

        1200: {
          slidesPerView: 4,
          spaceBetween: 17,
        },

        900: {
          slidesPerView: 3,
          spaceBetween: 17,
        },

        560: {
          slidesPerView: 2,
          spaceBetween: 17,
        },

        0: {
          slidesPerView: 1,
          spaceBetween: 17,
        }
      },
    });
})
