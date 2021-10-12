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
  var mixer = mixitup(".gallery__inner", {
    load: {
      filter: ".living",
    },
  });
});
