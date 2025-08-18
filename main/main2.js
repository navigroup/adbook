(function ($) {
    "use strict";
  
    // Preloader (if the #preloader div exists)
    $(window).on('load', function () {
      if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function () {
          $(this).remove();
        });
      }
    });
  
    // Back to top button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
    $('.back-to-top').click(function(){
      $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
      return false;
    });
  
    // Initiate the wowjs animation library
    new WOW().init();
  
    // Header scroll class
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
      } else {
        $('#header').removeClass('header-scrolled');
      }
    });
  
    if ($(window).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    }
  
    // Smooth scroll for the navigation and links with .scrollto classes
    $('.main-nav a, .mobile-nav a, .scrollto').on('click', function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        if (target.length) {
          var top_space = 0;
  
          if ($('#header').length) {
            top_space = $('#header').outerHeight();
  
            if (! $('#header').hasClass('header-scrolled')) {
              top_space = top_space - 40;
            }
          }
  
          $('html, body').animate({
            scrollTop: target.offset().top - top_space
          }, 1500, 'easeInOutExpo');
  
          if ($(this).parents('.main-nav, .mobile-nav').length) {
            $('.main-nav .active, .mobile-nav .active').removeClass('active');
            $(this).closest('li').addClass('active');
          }
  
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('.mobile-nav-overly').fadeOut();
          }
          return false;
        }
      }
    });
  
    // Navigation active state on scroll
    var nav_sections = $('section');
    var main_nav = $('.main-nav, .mobile-nav');
    var main_nav_height = $('#header').outerHeight();
  
    $(window).on('scroll', function () {
      var cur_pos = $(this).scrollTop();
    
      nav_sections.each(function() {
        var top = $(this).offset().top - main_nav_height,
            bottom = top + $(this).outerHeight();
    
        if (cur_pos >= top && cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
          main_nav.find('a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('active');
        }
      });
    });
  
    // jQuery counterUp (used in Whu Us section)
    $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 1000
    });
      
      
      // setInterval(function() {
      //   $('[data-toggle="counter-up"]').counterUp({
      //       delay: 10,
      //       time: 1000
      //   });
      //   }, 5000);
  
    // Porfolio isotope and filter
    $(window).on('load', function () {
      var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item'
      });
      $('#portfolio-flters li').on( 'click', function() {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');
    
        portfolioIsotope.isotope({ filter: $(this).data('filter') });
      });
    });
  
    // Testimonials carousel (uses the Owl Carousel library)
    $(".testimonials-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      items: 1
    });
  
    // Clients carousel (uses the Owl Carousel library)
    $(".clients-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      responsive: { 0: { items: 3 }, 768: { items: 3 }, 900: { items: 3 }
      }
    });


    /*메인 영상 배경 효과 적용*/
    $(window).scroll(function(){
			var scrT = $(window).scrollTop();
      
      // scrT == $(document).height() - $(window).height() 스크롤 바닥일 때 설정
			if(scrT < 200){
				$('header .top').css({background:"#transparent"});
        $('.float').css({transition:"1s"});
        $('.float').css({display:"none"});
				// $('header .top .menu-btn button').css({color:"#fff"});
				$('#wrap').css({padding:"0px"});
			} 
        else {
				// $('header .top').css({transition:"1s"});
				// $('header .top .menu-btn button').css({color:"#141414"});
				// $('header .top').css({background:"#fff"});
				$('#wrap').css({padding:"64px 0"});
        $('.float').css({transition:"1s"});
        $('.float').css({display:"inline"});
			}
		  })

      var words = ['다이어트는','의지 싸움이 아닙니다','올바른 다이어트란','나에게 쉬운 건강한 습관을','꾸준히 지속하는 것입니다.','다이어트도','속도보다 방향이 중요합니다','올바른 다이어트의 시작', 'CUT & CUT DIET'],
      part,
      i = 0,
      offset = 0,
      len = words.length,
      forwards = true,
      skip_count = 0,
      skip_delay = 15,
      speed = 60;
  var wordflick = function () {
    setInterval(function () {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      }
      else {
        if (offset == 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      part = words[i].substr(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        }
        else {
          offset--;
        }
      }
      $('.word').text(part);
    },speed);
  };
  
  $(document).ready(function () {
    wordflick();
  });

  })(jQuery);
  
  