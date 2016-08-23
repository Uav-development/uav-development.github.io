jQuery(function($) {

    // Hamburger menu toggle

    $('.hamburger').click(function(){
      $('body').toggleClass("menu-open");
    });

    // Add fullwidth class to gallery thumbs if less than 6

    $('.imageGallery').each(function(){
      if ($(this).children('div').length <= 6) {
        $(this).children('div').addClass('fullwidth-mobile');
      }
    });

    // Cart mobile

    function cartdisplay() {
      if (Number($('#wsite-mini-cart .wsite-subtotal-wrapper .wsite-price').text()) > 0 ) {
        $('#wsite-mini-cart').addClass('full');
        $('#footer-wrap').addClass('footer-full');
      }
      else {
        $('#wsite-mini-cart').removeClass('full');
        $('#footer-wrap').removeClass('footer-full');
      }
    }

    setTimeout(function() { cartdisplay(); }, 1000);

    $('.wsite-product-button, #wsite-com-product-add-to-cart, .wsite-product-item .wsite-remove-button').on('click', function(){
      setTimeout(function() { cartdisplay(); }, 800);
    });


  // Swipe gallery function

  var swipeGallery = function(){
    setTimeout(function(){
        var touchGallery = document.getElementsByClassName("fancybox-wrap")[0];
        var mc = new Hammer(touchGallery);
        mc.on("panleft panright", function(ev) {
          if (ev.type == "panleft") {
            $("a.fancybox-next").trigger("click");
        }
        else if (ev.type == "panright") {
            $("a.fancybox-prev").trigger("click");
        }
        swipeGallery();
    });
    }, 500);
  }

  setTimeout(function() {
    var login = $("#member-login").clone(true);
    login.appendTo("#navmobile .wsite-menu-default");    
  }, 500);

  // Initiate Swipe function on touch devices

  if ('ontouchstart' in window) {
    $("body").addClass("touch");
    $("body").on( "click", "a.w-fancybox", function() {
      swipeGallery();
    });
  }

  // Sticky Nav

  var navCheck = function() {
    if ($("body").width() > 1024) {
      $('body:not(.wsite-native-mobile-editor, .wsite-checkout-page) #nav').waypoint('sticky');
    }
    else {
      setTimeout(function(){ $('body:not(.wsite-native-mobile-editor, .wsite-checkout-page) #header-wrap').waypoint('sticky'); }, 500);
    }
  }

  navCheck();

  var timeout;

  $(window).on('resize', function(e) {

    clearTimeout(timeout);
    timeout = setTimeout(function() {

      $('.stuck').waypoint('unsticky');

      navCheck();

    }, 300);

  });



  // Storefront category list mobile menu
  var sidebar = $('.wsite-com-sidebar'),
      categories =  $("#wsite-com-hierarchy");

  sidebar.click(function(){
    sidebar.hasClass('sidebar-expanded') ? null : sidebar.addClass('sidebar-expanded');
  });

  categories.prepend('<a id="close" href="#">CLOSE</a>');
  $('#close').click(function(e){
    e.preventDefault();
    setTimeout(function() {sidebar.removeClass('sidebar-expanded');}, 50);
  });


});