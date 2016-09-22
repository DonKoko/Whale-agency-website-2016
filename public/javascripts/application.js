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
    document.getElementById("logo").contentDocument.getElementById("logo").setAttribute("fill", "white");



  }
  else if ($(this).scrollTop() < 100)
  {


    nav_anchor.removeClass('narrow');
    document.getElementById("logo").contentDocument.getElementById("logo").setAttribute("fill", "#2E3653");

  }
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
