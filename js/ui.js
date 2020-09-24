// ui-search 定义
$.fn.UiSearch = function() {
  var ui = $(this);

  $('.ui-search-selected', ui).on('click', function() {
    $('.ui-search-select-list').toggle();
    return false;
  });

  $('.ui-search-select-list a', ui).on('click', function() {
    $('.ui-search-selected').text($(this).text());
  });

  $('body').on('click', function() {
    $('.ui-search-select-list').hide();
  });
}

// 页面的脚本逻辑
$(function() {
  $('.ui-search').UiSearch();
});
