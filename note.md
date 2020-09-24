# 笔记

## jQuery return false

调用return false，它实际完成了3件事：

- event.preventDefault()
- event.stopPropagation() 事件不能冒泡到上一级DOM
- 停止回调函数执行并立即返回。

<https://www.cnblogs.com/suizhikuo/p/jquery-return-false.html>

## $.fn.UiSearch

通过 $.fn.UiSearch 给jQuery对象添加方法

`$('.ui-search').UiSearch();`

jQuery 插件模式开发UI组件
