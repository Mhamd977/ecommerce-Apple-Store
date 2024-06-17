$(document).ready(() => {
  $("a[href='#']").on("click", function (e) {
    e.preventDefault();
  });

  if ($("body").matchHeight != undefined) {
    $(".eH-Area").each(function () {
      $(this).find(".eH").matchHeight();
    });
  }

  if ($(document).magnificPopup != undefined) {
    $(".popup").magnificPopup({
      type: "image",
      mainClass: "mfp-with-zoom",
      gallery: {
        enabled: true,
        preload: [0, 2],
        navigateByImgClick: true,
        arrowMarkup:
          '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
        tPrev: "Previous (Left arrow key)",
        tNext: "Next (Right arrow key)",
        tCounter: '<span class="mfp-counter">%curr% of %total%</span>',
      },
      zoom: {
        enabled: true,
        duration: 300,
        easing: "ease-in-out",
        opener: function (openerElement) {
          return openerElement.is("img")
            ? openerElement
            : openerElement.find("img");
        },
      },
    });
  }

  $(".accept-cookies").on("click", function () {
    $(".cookies-animate").attr("data-animate","fadeOut");
    $(".cookies-animate").addClass("fadeOut").removeClass("fadeInUp");
  });
});

$(window).ready(() => {
  // delay js
  $(".loader").fadeOut(1000);
  // $(".cookies-popup").addClass("animated").attr("data-animate","fadeInUp")
});

