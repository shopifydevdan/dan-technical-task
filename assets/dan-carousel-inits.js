function initSliders() {
  var mobileCarousels = document.querySelectorAll(".dan-mobile-carousel");

  mobileCarousels.forEach(function (carousel) {
    if (window.innerWidth < 768) {
      $(carousel).slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    } else {
      if ($(carousel).hasClass("slick-initialized")) {
        $(carousel).slick("unslick");
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initSliders();
});

document.addEventListener("shopify:section:load", function (event) {
  initSliders();
});

window.addEventListener("resize", function () {
  initSliders();
});
