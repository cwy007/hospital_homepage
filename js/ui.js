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

/**
 * ui-slidder
 * 1. 左右箭头需要能控制翻页
 * 2. 翻页的时候，进度点，要联动进行focus
 * 3. 翻到第三页的时候，下一页需要回到 第一页，翻到第一页的时候，同理
 * 4. 进度点，在点击的时候，需要切换到对应的页面
 * 5. 没有（进度点点击、翻页操作）的时候需要进行自动滚动
 * 6. 滚动过程中，屏蔽其他操作（自动滚动、左右翻页、进度点点击）
 * 7. 高级-无缝滚动
 * */
$.fn.UiSlider = function() {
  var ui         = $(this),
      wrap       = $('.ui-slider-wrap'),
      btn_prev   = $('.ui-slider-arrow .left', ui),
      btn_next   = $('.ui-slider-arrow .right', ui),
      items      = $('.ui-slider-wrap .item', ui),
      tips       = $('.ui-slider-process .item', ui),
      current    = 0,
      size       = items.size(),
      width      = items.eq(0).width(),
      enableAuto = true;

  // 设置自动滚动感应（如果鼠标在 wrap 中，不要自动滚动）
  ui.on('mouseover', function() {
    enableAuto = false;
  }).on('mouseout', function() {
    enableAuto = true;
  });

  // 具体操作
  wrap
  .on('move_prev', function() {
    if (current <= 0) {
      current = size;
    }
    current -= 1;
    wrap.triggerHandler('move_to', current);
  })
  .on('move_next', function() {
    if (current >= size - 1) {
      current = -1;
    }
    current += 1;
    wrap.triggerHandler('move_to', current);
  })
  .on('move_to', function(evt, index) {
    wrap.css('left', index*width * (-1));
    tips.removeClass('item_focus').eq(index).addClass('item_focus');
  })
  .on('auto_move', function() {
    setInterval(function() {
      enableAuto && wrap.triggerHandler('move_next');
    }, 5000);
  })
  .triggerHandler('auto_move');

  btn_prev.on('click', function() {
    wrap.triggerHandler('move_prev');
  });
  btn_next.on('click', function(){
    wrap.triggerHandler('move_next');
  });
  tips.on('click', function() {
    current = $(this).index();
    wrap.triggerHandler('move_to', current);
  });
}

// 页面的脚本逻辑
$(function() {
  $('.ui-search').UiSearch();
  $('.ui-slider').UiSlider();
});
