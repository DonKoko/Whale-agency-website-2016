$(document).ready(function(){});

// Sticky Nav
$(window).scroll(function(e) {
  var nav_anchor = $("header");
  var gotop = $(document);

  if ($(this).scrollTop() >= gotop.height() / 2) {
    $('.goto-top').css({'opacity': 1});
  } else if ($(this).scrollTop() < gotop.height() / 2)
  {
    $('.goto-top').css({'opacity': 0});
  }
  if ($(this).scrollTop() >= 100)
  {
    nav_anchor.addClass('narrow');




  }
  else if ($(this).scrollTop() < 100)
  {


    nav_anchor.removeClass('narrow');

  }
});
