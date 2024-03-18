AOS.init({ disable: "mobile", once: true });

$(window).on("scroll", function () {
  var scrollYpos = $(document).scrollTop();
  var navHeight = $("#main-header").height();
  if (scrollYpos > navHeight) {
    $("#main-header").addClass("sticky");
    $(".dropdown-full-size .dropdown-menu").css({
      'top' : '77px',
      'width' : '100%',
      'margin-right' : '0'
    })
  } else {
    $("#main-header").removeClass("sticky");
    $(".dropdown-full-size .dropdown-menu").css({
      'top' : '110px',
      'width' : 'calc(100% - 60px)',
      'margin-right' : '30px'
    })
  }
  // $('.open').removeClass('.open');
});

$(".btn-search").on("click", function () {
  $(".search-input").toggleClass("show");
  $(this).toggleClass("on");
});

$(".dropdown-full-size").on("mouseenter", function () {
  $(this).$(".dropdown-menu").toggleClass("open");
});

$(".dropdown-full-size").on("mouseleave", function () {
  $(this).$(".dropdown-menu").toggleClass("open");
});
