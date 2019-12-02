## [html] 谈谈你对 input 元素中 readonly 和 disabled 属性的理解

当 `<input>` 设置为 `<readonly>` 时, 元素可聚焦, 不响应输入(`<radio>`/`<checkbox>` 除外), 但响应事件; 当 `<input>` 设置为 `disabled` 时, 元素被禁用, 不可聚焦, 不响应所有事件;

## [css] 说说你对 line-height 是如何理解的？

`line-height` 用于设置多行元素的空间量. 对于块级元素, 它指定元素的最小高度; 对于非替换 inline 元素, 它用于计算行盒的高度.

推荐使用纯数字作为值(实际值为**当前元素**字体大小 \* 数字), 不会在继承时子元素产生不确定的结果.

## [js] 写一个方法验证是否为中文

只需要确定中文字符对应的编码范围即可.

## [软技能] 来说说你对重绘和重排的理解，以及如何优化？

页面渲染的完整流水线为： `JS/DOM -> CSSOM -> layout -> paint -> composite`.

当修改 DOM 布局信息时，会触发完整的渲染流水线 -- 重排.

当修改 DOM 颜色等信息时，会跳过 layout -- 重绘.

重排比重绘多一步渲染过程, 渲染代价大. 当页面结构复杂时, 可能会出现卡顿/动画不流畅.

可通过 [CSS Triggers](http://csstriggers.com/) 查询 DOM 属性修改 与渲染流水线的关系.

优化建议:

- 减少 DOM 操作.
- 多次 DOM 操作合拼为单词操作.
- 虚拟 DOM.
- 使用 CSS 动画, CSS 动画会跳过 layout、 paint.

## 参考

[line-height - CSS（层叠样式表） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height)
[UAX #38: Unicode Han Database (Unihan)](https://www.unicode.org/reports/tr38/#BlockListing)
[CSS Triggers](http://csstriggers.com/)
