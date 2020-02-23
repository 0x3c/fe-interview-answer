## [html] 说说你对属性 data-的理解

`data-*` 为自定义属性, css 中`attr()` 可获取其值. DOM 可通过 getAttribute()/setAttribute() 获取/设置自定义属性, 但不能通过 js 属性获取/设置, 如 `HTMLElement['data-src']`.

## [css] 你有用过 CSS 预处理器吗？喜欢用哪个？原理是什么？

为 css 赋予可编程特性. 使用一套语法规则来获取可编程特性, 通过编译输出为 css 代码.

## [js] 如何快速让一个数组乱序，写出来

```javascript
/**
 * @param {number[]} arr
 * @return {number[]}
 */
function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5);
}
```

## [软技能] 你经历过老板要求兼容 IE 吗？IE 几？有什么感悟？
