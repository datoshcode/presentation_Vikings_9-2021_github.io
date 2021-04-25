$(function(){

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active')
  });

$('.heroes__slider-img').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.heroes__slider-text',
  prevArrow: '<button class="slick-btn slick-prev"><img src="images/icons/arrow-left.png" alt="Стрелка влево"></button>',
  nextArrow: '<button class="slick-btn slick-next"><img src="images/icons/arrow-right.png" alt="Стрелка вправо"></button>',
  // Убрать стрелки в слайдере при размере экрана меньше 768px
  responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
      }
    }
  ]
});

$('.heroes__slider-text').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.heroes__slider-img',
  fade: true,
  arrows: false,
});

});