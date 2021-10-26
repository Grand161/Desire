$(function () {
  $(".header__btn").on("click", function () {
    $(".rightside-menu").removeClass("rightside-menu--close");
  });

  $(".rightside-menu__close").on("click", function () {
    $(".rightside-menu").addClass("rightside-menu--close");
  });

  $(".top-slider__inner").slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
  });

  $(".contact-slider__inner").slick({
    arrows: false,
    dots: true,

    slidesToScroll: 10,
    slidesToShow: 10,
  });

  $(".article-slider__box").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      '<button type = "button" class = "article-slider__arrow article-slider__arrowleft"> <img src="images/left-slider.svg" alt="arrow left"></ button>',
    nextArrow:
      '<button type = "button" class = "article-slider__arrow article-slider__arrowright"> <img src="images/right-slider.svg" alt="arrow right"></ button>',
  });

  var mixer = mixitup(".gallery__inner", {
    load: {
      filter: ".living",
    },
  });
});
