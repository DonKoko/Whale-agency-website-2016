
(function($) {
  "use strict";

  $(document).ready(function() {

    function getImgSize(el, imgSrc) {
      var newImg = new Image();

      newImg.onload = function() {
        var height = newImg.height;
        var width = newImg.width;


        el.css('height', height);

      };

      newImg.src = imgSrc;
    }

    if ($('*').find("[data-background-image]").length > 0) {
      $('*').find("[data-background-image]").each(function() {
        var el = $(this);
        var sz = getImgSize(el, el.attr("data-background-image"));

        el.css('background-position', 'center').css('background-image', "url('" + el.attr("data-background-image") + "')").css('background-size', 'cover').css('background-repeat', 'no-repeat');

      });
    }

    $('.play-button').click(function(e){
      e.preventDefault();

       $(this).prettyPhoto();
         $.prettyPhoto.open($(this).attr('href'));

    });

    $('.prettyphoto').click(function(){
      var modal=$(this).find('.modal-content').attr('id');
      $(this).prettyPhoto();
      $.prettyPhoto.open('#'+modal);
    });




    if ($('*').find("[data-bg-color]").length > 0) {
      $('*').find("[data-bg-color]").each(function() {
        var el = $(this);
        el.css('background-color', el.attr("data-bg-color"));
      });
    }

    $('.modal-trigger').click(function() {
      var modal = $(this).find('.modal').attr('id');
      var modalEl = $('#' + modal);
      $('#modalTemp').append(modalEl.html());

      $('#modalTemp').modal({
        show: true,
        closeOnEscape: true
      });

      $('#modalTemp').on('hidden.bs.modal', function(e) {
        $('#modalTemp').empty();
      });

      $('.close-modal').click(function(event) {
        event.preventDefault();
        $('#modalTemp').modal('hide');
      });

      if ($('#modalTemp .flexslider').length > 0) {

        var modalSlider= $('#modalTemp .flexslider').flexslider({
          animation: "slide",
          prevText: "",
          nextText: "",
          smoothHeight: true,
          directionNav: false,
          controlNav: false,
          slideshow: false
        });

        $('#modalTemp  .btn-prev,#modalTemp .btn-next').on('click', function(e) {
          e.preventDefault();
          var href = $(this).attr('href');

          modalSlider.flexslider(href);
          return false;
        });
      }

    });

    if ($('.homeslider.flexslider').length > 0) {
      var homeslider = $('.homeslider').flexslider({
        animation: "slide",
        prevText: "",
        nextText: "",
        smoothHeight: true,
        directionNav: false,
        controlNav: false,
        slideshow: false,
        start: function(slider) {
          $('.homeslider').find('.preloader').removeClass('loading');
          var cs = slider.find('.slide').eq(slider.currentSlide);
        },

        after: function(slider) {
          $('.homeslider').find('.preloader').removeClass('loading');
          var cs = slider.find('.slide').eq(slider.currentSlide);
        },

        before: function(slider) {
          $('.homeslider').find('.preloader').addClass('loading');
          var cs = slider.find('.slide').eq(slider.currentSlide);
        }
      });

      $('.homeslider .btn-prev,.homeslider .btn-next').on('click', function(e) {
        e.preventDefault();
        var href = $(this).attr('href');

        homeslider.flexslider(href);
        return false;
      });

    }

    if ($('.services-slider.flexslider').length > 0) {
      var sliderEl = $('.services-slider');
      var slider = $('.services-slider').flexslider({
        animation: "slide",
        prevText: "",
        nextText: "",
        smoothHeight: true,
        directionNav: false,
        controlNav: false,
        slideshow: false,
        start: function(slider) {
          var cs = sliderEl.find('.slide').eq(slider.currentSlide);
        },

        after: function(slider) {
          var cs = sliderEl.find('.slide').eq(slider.currentSlide);
        },

        before: function(slider) {
          var cs = sliderEl.find('.slide').eq(slider.currentSlide);
        }

      });

      $('.services-slider .btn-prev,.services-slider .btn-next').on('click', function(e) {
        e.preventDefault();
        var href = $(this).attr('href');

        slider.flexslider(href);
        return false;
      });
    }

    $('[data-placeholder]').focus(function() {
      var input = $(this);
      if (input.val() == input.attr('data-placeholder')) {
        input.val('');
      }
    }).blur(function() {
      var input = $(this);
      if (input.val() == '' || input.val() == input.attr('data-placeholder')) {
        input.addClass('placeholder');
        input.val(input.attr('data-placeholder'));
      }
    }).blur();

    $('[data-placeholder]').parents('form').submit(function() {
      $(this).find('[data-placeholder]').each(function() {
        var input = $(this);
        if (input.val() == input.attr('data-placeholder')) {
          input.val('');
        }
      });
    });

  });

  $('.goto-top').click(function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 2000);
  });

  $('body').scrollspy({target: '.nav-menu'});
//hashtag navigation address setup (deeplink)

  $('.nav-menu a').address($(this).attr('href'));
  $('.top-drop-menu').change(function() {
    var loc = ($(this).find('option:selected').val());

    $('.nav-menu a').address(loc);
// window.location = loc;
  });
  $.address.change(function(event) {

    var pageID = event.value.split('/')[1];

    if (pageID != '' && pageID.indexOf('.') === -1) {

      var el = $(".nav-menu [href=#" + pageID + "]");

      $('.nav-menu .active').removeClass('active');
      el.parent().addClass('active');
      $('select.nav option').each(function() {

        var val = $(this).val();

        if (val === "#" + pageID) {
          $('select.nav option:selected').removeAttr('selected');
          $(this).attr('selected', 'selected');
        }

      });

      scrollToSection("#" + pageID);
    } else {
      if (pageID.indexOf('.') > -1) {
        window.location = pageID;
      }
    }
  });

  $('select.nav').change(function() {
    var loc = ($(this).find('option:selected').val());

    scrollToSection(loc);
  });

  function scrollToSection(destSection) {

    $('html, body').stop().animate({
      scrollTop: $(destSection).offset().top
    }, 2000, 'easeInOutExpo');

  }

  $('.nav-menu a').bind('click', function(event) {

    event.preventDefault();
    var clickedMenu = $(this);
    $('.nav-menu .active').toggleClass('active');
    clickedMenu.parent().toggleClass('active');

    scrollToSection(clickedMenu.attr('href'));

  });

})(jQuery);



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
    // $('.logo').addClass('svg-white');
    // $('.logo').child().data("/images/logo.svg");
    // $("#svg-logo").attr("data", "/images/logo.svg");
    // console.log($("#svg-logo").attr("data"));
    // html("<object type='image/svg+xml' data='/images/logo.svg' id='logo'></object>");
  }
  else if ($(this).scrollTop() < 100)
  {
    nav_anchor.removeClass('narrow');
    // $('.logo').removeClass('svg-white');
    // $("#svg-logo").attr("data", "/images/logo_blue.svg");
    // $('.logo-holder .logo').html("<object type='image/svg+xml' data='/images/logo_blue.svg' id='logo'></object>");
  }
});


// Read scroll
$(document).on('ready', function(){
  var winHeight = $(window).height();
  var docHeight = $(document).height();
  var progressBar = $('#readScroll'), max, value;
  var max = docHeight - winHeight;
  $('#readScroll').attr('max', max);
  $(document).on('scroll', function(){
      value = $(window).scrollTop();
      $('#readScroll').attr('value', value);
  });
});

$('#article').readingTime();
