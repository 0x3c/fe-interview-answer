## [html] 怎样在页面上实现一个圆形的可点击区域？

### 1. area

`<area>` 可自定义点击区域的形状, 与 `<map>` 配合使用.

```html
<img usemap="#circle" height="50" width="50" />
<map name="circle">
  <area shape="circle" coords="25,25,25" href="other.html" />
</map>
```

### 2. 父元素 圆形

利用 css3 的 `border-radius` 属性, 创建一个圆形边框, 并设置 `overflow: hidden;`, 内部可点击区域就变成了圆形.

```html
<style>
  .parent {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    overflow: hidden;
    display: inline-flex;
  }
  .circle {
    flex: 1;
  }
</style>
<div class="parent">
  <a class="circle" href="other.html"></a>
</div>
```

## [css] 什么是 FOUC？你是如何避免 FOUC 的？

    FOUC (Flash of Unstyled Content)无样式内容闪烁. CSS未完全加载前, 会先渲染显示已经解析的 HTML 内容, 然后 CSS完全加载完成后, 导致页面重新渲染。

避免:

1. 不显示文档, 当文档加载完成再显示. 可先设置文档`opacity`或 `display`, 完档加载完成后设置为正常值.
2. 不使用 css 语法中的 @import, 用 link 标签引入.

## [js] 你理解的"use strict";是什么?使用它有什么优缺点？

严格模式是采用具有限制性 JavaScript 变体的一种方式, 从而使代码显示的脱离"马虎模式/稀松模式/懒散模式".
严格模式对正常的 JavaScript 语义做了以下更改:

1. 严格模式通过抛出错误来消除一些原有的静默错误
2. 严格模式修复了一些导致 JavaScript 引擎难以执行优化的缺陷: 有时候, 相同的代码, 严格模式运行的比非严格模式更快.
3. 严格模式禁用了在 ECMAScript 的未来版本中可能定义的一些语法.

优:

- 代码执行速度更快.
- 减少因静默失败被吞并的 bug, 减少怪异行为.
- 使代码更安全.

## [软技能] 你如何看待团建的？你们团建一般都怎么实施？

## 参考

[严格模式 - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)
