AOS.init({ disable: "mobile", once: true });

$(window).on("scroll", function () {
  var scrollYpos = $(document).scrollTop();
  var navHeight = $("#main-header").height();
  if (scrollYpos > navHeight) {
    $("#main-header").addClass("sticky");
  } else {
    $("#main-header").removeClass("sticky");
  }
});

$(".btn-search").on("click", function () {
  $(".search-input").toggleClass("show");
  $(this).toggleClass("on");
});
