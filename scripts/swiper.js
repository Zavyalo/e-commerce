const swiperCard = new Swiper('.swiper-card', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      
  });