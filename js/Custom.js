$(document).ready(function () {
  // select2
  $('.select2').select2({
    minimumResultsForSearch: -1
  });
  //navbar ainmation
  $(window).scroll(function () {
    var appScroll = $(document).scrollTop();
    if ((appScroll > 2) && (appScroll < 99999999999)) {
      $(".navbar").addClass("navAnimate");
    };
    if ((appScroll > 0) && (appScroll < 20)) {
      $(".navbar").removeClass("navAnimate");
    };
  });


  $('.sideBtn').click(function () {
    $(this).toggleClass('active');
    $('.sideMenu').toggleClass('active');

  });

    // dynamically add current menu class to menu
    function dynamicCurrentMenuClass(selector) {
      let FileName = window.location.href.split("/").reverse()[0];
  
      selector.find("li").each(function () {
        let anchor = $(this).find("a");
        if ($(anchor).attr("href") == FileName) {
          $(this).addClass("current");
        }
      });
      // if any li has .current elmnt add class
      selector.children("li").each(function () {
        if ($(this).find(".current").length) {
          $(this).addClass("current");
        }
      });
      // if no file name return
      if ("" == FileName) {
        selector.find("li").eq(0).addClass("current");
      }
    }
  
    if ($(".main-menu .navigation").length) {
      // dynamic current class
      let mainNavUL = $(".main-menu .navigation");
      dynamicCurrentMenuClass(mainNavUL);
    }

    //Update Header Style and Scroll to Top
  function headerStyle() {
    if ($(".main-header").length) {
      var windowpos = $(window).scrollTop();
      var siteHeader = $(".main-header");
      var sticky_header = $(".main-header .sticky-header");
      if (windowpos > 120) {
        siteHeader.addClass("fixed-header");
        sticky_header.addClass("animated slideInDown");
      } else {
        siteHeader.removeClass("fixed-header");
        sticky_header.removeClass("animated slideInDown");
      }
    }
  }

  headerStyle();

  //Submenu Dropdown Toggle
  if ($(".main-header li.dropdown ul").length) {
    $(".main-header .navigation li.dropdown > a").append(
      '<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>'
    );
  }

  //Mobile Nav Hide Show
  if ($(".side-menu__block").length) {
    var mobileMenuContent = $(".main-header .nav-outer .main-menu").html();
    var mobileNavContainer = $(".mobile-nav__container");
    mobileNavContainer.append(mobileMenuContent);

    //Dropdown Button
    mobileNavContainer
      .find("li.dropdown .dropdown-btn")
      .on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("open");
        $(this).parent("a").parent("li").children("ul").slideToggle(500);
      });
    //Menu Toggle Btn
    $(".mobile-nav-toggler").on("click", function () {
      $(".side-menu__block").addClass("active");
    });

    $(".side-menu__block-overlay,.side-menu__toggler, .scrollToLink").on(
      "click",
      function (e) {
        $(".side-menu__block").removeClass("active");
        e.preventDefault();
      }
    );
  }

});
