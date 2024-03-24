AOS.init({ disable: "mobile", once: true });

$(window).on("scroll", function () {
  var scrollYpos = $(document).scrollTop();
  var scroll = $(window).scrollTop();
  var navHeight = $("#main-header").height();
  if (scrollYpos > navHeight) {
    $("#main-header").addClass("sticky");
    $(".dropdown-full-size .dropdown-menu").css({
      top: "77px",
      width: "100%",
      "margin-right": "0",
    });
  } else {
    $("#main-header").removeClass("sticky");
    $(".dropdown-full-size .dropdown-menu").css({
      top: "108px",
      width: "calc(100% - 60px)",
      "margin-right": "30px",
    });
  }
  $(".dropdown-menu").addClass("hidden");
  clearTimeout($.data(this, 'scrollTimer'));
  $.data(this, 'scrollTimer', setTimeout(function() {
		$(".dropdown-menu").removeClass('hidden');
	}, 250));
});

$(".btn-search").on("click", function () {
  $(".search-input").toggleClass("show");
  $(this).toggleClass("on");
});
