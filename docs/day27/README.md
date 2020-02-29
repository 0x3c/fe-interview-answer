## [html] 说说你对影子(Shadow)DOM 的了解

`Shadow DOM` 内部有自己的 DOM Tree, 是一种将 HTML, CSS 封装起来的结构, 常用于自定义元素.

## [css] 怎样修改 chrome 记住密码后自动填充表单的黄色背景？

通过内阴影改变背景色

```css
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 3px 100px #eee inset;
}
```

## [js] 说说你对 arguments 的理解，它是数组吗？

arguments 不是数组, 它是类数组, arguments[Symbol.iterator] 实现了可迭代协议, 故可以用 `...`, `for ... of` 操作符.

## [软技能] 你为什么离职呢？
