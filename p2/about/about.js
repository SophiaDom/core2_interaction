$(document).ready(function() {
    $(window).scroll(function() {
      let contentOffset = $(".content").offset().top;
      let windowHeight = $(window).height();
      let scrollPosition = $(window).scrollTop();
      let centerOffset = windowHeight / 2;
  
      if (scrollPosition > contentOffset - windowHeight && scrollPosition < contentOffset + $(".content").height() - centerOffset) {
        if (!$(".content").hasClass("scrolled")) {
          $(".content").addClass("scrolled");
        }
      } else {
        $(".content").removeClass("scrolled");
      }
    });
  });