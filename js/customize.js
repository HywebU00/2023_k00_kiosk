// 自行加入的JS請寫在這裡
$(function () {
  //書籍資料書籍資料
  $('.bookinformation_btn').click(function () {
    $('#bookinformation').fadeIn();
    $('body').addClass('fixed');
  });
  $('.lightboxstyle_block .close').click(function () {
    $('#bookinformation').fadeOut();
    $('body').removeClass('fixed');
  });
  $('.overlay').click(function () {
    $('#bookinformation').fadeOut();
    $('body').removeClass('fixed');
  });
});
