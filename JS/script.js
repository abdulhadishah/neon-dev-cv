$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");
  });

  // smooth scrolling
  $('a[href*="#"]').on("click", function (e) {
    const target = $(this).attr("href");
    if (target && target.startsWith("#")) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        500,
        "linear"
      );
    }
  });
});
