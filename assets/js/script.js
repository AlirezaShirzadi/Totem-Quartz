AOS.init({ disable: "mobile", once: true });

$(window).on("scroll", function () {
  var scrollYpos = $(document).scrollTop();
  var scroll = $(this).scrollTop();
  var navHeight = $("#main-header").height();
  lastScrollTop = scrollYpos;
  if (scrollYpos > navHeight) {
    // $("#main-header").addClass("sticky");
    $(".dropdown-full-size .dropdown-menu").css({
      top: "78px",
    });
    $(".top-header").css({
      top: "-100px",
    })
    $(".navbar").css({
      "top": "-100px"
    })
  } else {
    // $("#main-header").removeClass("sticky");
    $(".dropdown-full-size .dropdown-menu").css({
      top: "160px",
    });
    $(".top-header").css({
      position: 'relative',
      top: "0",
    })
    $(".navbar").css({
      "top": "0"
    })
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
