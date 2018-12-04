var mainSlider = new Swiper('.main-slider__wrapper', {
  spaceBetween: 40,
  autoplay: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1023: {
      autopaly: false
    }
  }


});

function initAutoplay() {
  if (document.body.clientWidth < 1024) {
    mainSlider.autoplay.stop();
  }else{
    mainSlider.autoplay.start();
  }

};

$(function () {
  initAutoplay();
  $(window).resize(function () {
    initAutoplay();

  });
});

// mySwiper.on('autoplay', function () {
//   mySwiper.autoplay.start();
// });