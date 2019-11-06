## [html] 说说你对 html 中的置换元素和非置换元素的理解

可替换元素展现内容不由当前文档样式影响. 非替换元素则可以通过 CSS 修改器样式;

常见的替换元素有:

- `<iframe>`
- `<embed>`
- `<video>`
- `<img>`
- `type` 为 `image` 的 `<input>`

## [css] css 的属性 content 有什么作用呢？有哪些场景可以用到？

CSS `content` 用于在元素的 `::before` `::after` 伪元素中插入内容.
一般可用于 字体图标, 清除浮动.

- 添加伪元素

## [js] "attribute"和"property"有什么不同？

DOM 对象中的 `attribute` 和 `property`, `attribute` 与 `HTML` 相关, `property` 与 DOM 对象相关;
区别如下:

1. `attribute` 通过 `getAttribute(name)` 获取值, `setAttribute(name,value)`设置值; `property` 则以常规 JS 对象操作.
2. `attribute` 值与 `HTML` 代码中属性值一致, 即使该值不合法; `property` 值 与 `HTML` 实际使用的值一致。
3. `attribute` 可自定义; `property` 不可自定义.(在 `HTML` 标签内书写自定义属性, `attribute` 可访问到, 但 `property` 值为 `undefined`)

## [软技能] 最近都流行些什么？你经常会浏览哪些网站？

flutter;

github, leetcode, juejin, zhihu, google, 相关技术文档

## 参考链接

[可替换元素 - CSS（层叠样式表） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Replaced_element)
