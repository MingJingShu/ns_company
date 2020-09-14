$(document).ready(function () {
  console.log("hello");

  $(".slick_window").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    focusOnSelect: true,
  });

  /*hamburger*/
  let hamburger = $("footer .hamburger");
  let h_w = $(".hamburger_window");
  hamburger.click(function () {
    if (h_w.hasClass("active") != true) {
      h_w.addClass('active');
      hamburger.addClass('active');
    }else{
      h_w.removeClass('active');
      hamburger.removeClass('active');
    }
  });
});
