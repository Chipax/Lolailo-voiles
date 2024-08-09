

const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: "slide",  
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:'true',
    },
    autoplay: {
      delay: 5000,
      transition:0.5,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })
  