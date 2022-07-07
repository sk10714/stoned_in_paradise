"use strict";

//==================
//手機版 PC版 menu nav
//==================
//定義視窗寬度的變數
var windowWidth = $(window).width(); //進網頁直接執行一次 判斷

if (windowWidth >= 768) {
  //大於等於768執行
  // $('nav>ul>li').hover(function(){}, function(){})
  $('nav>ul>li').hover(function () {
    //滑鼠滑入執行
    $(this).find('.submenu').addClass('active');
  }, function () {
    //滑鼠滑出執行
    $(this).find('.submenu').removeClass('active');
  });
} else {
  //小於768執行
  $('#btn-nav-switch').on('click', function () {
    $('nav').toggleClass('active');
    $('span').toggleClass('active');
  }); //btn-nav-switch end

  $('nav>ul>li').on('click', function () {
    $(this).find('.submenu').toggleClass('.active');
  }); //nav>ul>li end
} //windowWidth>=768 end
//每一次縮放視窗的時候執行


$(window).resize(function () {
  //widthWidth在每次縮放視窗寬度時，換上當前的視窗寬度的數值
  windowWidth = $(window).width();

  if (windowWidth >= 768) {
    //大於等於768執行
    //$('nav>ul>li').hover(function(){}, function(){})
    $('nav>ul>li').hover(function () {
      //滑鼠滑入執行
      $(this).find('.submenu').addClass('active');
    }, function () {
      //滑鼠滑出執行
      $(this).find('.submenu').removeClass('active');
    });
  } else {
    //小於768執行
    $('#btn-nav-switch').on('click', function () {
      $('nav').toggleClass('active');
    }); //btn-nav-switch end

    $('nav>ul>li').on('click', function () {
      $(this).find('.submenu').toggleClass('active');
    }); //nav>ul>li end
  } //windowWith>=768 end

}); //window resize end
//faq

$('.faq-title').click(function (e) {
  $(this).find('.btn-faq').toggleClass('open');
  $(this).siblings('.faq-title-p').slideToggle();
  $(this).toggleClass('text-title_color');
  $(this).parent().siblings().find('.faq-title-p').slideUp();
  $(this).parent().siblings().find('.faq-title').removeClass('text-title_color');
  $(this).parent().siblings().find('.btn-faq').removeClass('open');
}); //輪播

$('.exterior-child').prepend($('.exterior-child>img').last().clone());
$('.exterior-child').append($('.exterior-child>img').eq(1).clone());
var currentNum = 1;
var parentWidth = $('.exterior').width();
var imgLength = $('.exterior-child>img').length; //子層個數

var childTotalWidth = parentWidth * imgLength; //父層寬度*子層個數

$('.exterior-child').css({
  'margin-left': -parentWidth * currentNum
});
$('.exterior-child').width(childTotalWidth); //子層總寬 ＝ 父層寬度*子層個數（進到畫面讀一次）

$('.exterior-child>img').width(parentWidth); //子層下的圖片寬 = 父層寬度

for (var i = 0; i < imgLength - 3; i++) {
  $('.indicator>li.active').after('<li></li>');
}

$(window).resize(function () {
  arentWidth = $('.exterior').width();
  childTotalWidth = parentWidth * imgLength;
  $('.exterior-child').css({
    'margin-left': -parentWidth * currentNum
  });
  $('..exterior-child').width(childTotalWidth);
  $('..exterior-child>img').width(parentWidth);
}); //window resize end 

$('.right-arrow').on('click', function () {
  if (currentNum == imgLength - 1) {} else {
    currentNum = currentNum + 1;
    common();
  }
}); //.right-arrow end

$('.left-arrow').on('click', function () {
  if (currentNum == 0) {} else {
    currentNum = currentNum - 1;
    common();
  } //if currentNum == 1 end

}); //.left-arrow end

$('.indicator>li').on('click', function () {
  currentNum = $(this).index() + 1;
  common();
}); //.indiactor>li end

function common() {
  $('.exterior-child').animate({
    'margin-left': -parentWidth * currentNum
  }, function () {
    if (currentNum == imgLength - 1) {
      currentNum = 1;
    }

    if (currentNum == 0) {
      currentNum = imgLength - 2;
    }

    $('.child').css({
      'margin-left': -parentWidth * currentNum
    });
    $('.indicator>li').eq(currentNum - 1).addClass('active');
    $('.indicator>li').eq(currentNum - 1).siblings().removeClass('active');
  }); //callback end           
} // common() end


setInterval(function () {
  $('.right-arrow').click();
}, 3000); //點小圖換大圖

$('.sub-product img').click(function (e) {
  $('.main-product ').attr('src', $(this).attr('src'));
  $(this).addClass('active');
  $(this).parent().siblings().find('img').removeClass('active');
});