## [html] js 放在 html 的<body>和<head>有什么区别？

html 自上而下依次执行, js 执行会阻止 DOM 树生成, 若为非异步脚本放在 `<head>` 中, 会增加白屏时间;  若为异步脚本, 则无影响.

## [css] 说说浏览器解析 CSS 选择器的过程？

浏览器对 CSS 解析是自上而下, 自右而左.  从左往右解析会大量的遍历与回溯, 从右往左一开始则排除了大多元素, 每次向上匹配即可.

## [js] 你对 new 操作符的理解是什么？手动实现一个 new 方法

new 操作会执行以下几步:

- 创建一个对象
- 对象[[ProtoType]] 指向构造函数 prototype
- this 指向该对象
- 执行函数
- 如果函数没有返回一个引用值则返回该对象

```javascript
function newFn(C, ...args) {
  const o = Object.create(C.prototype);
  const o2 = C.apply(o, args);
  return o2 instanceof Object ? o2 : o;
}
```

## [软技能] 前端工程师这个职位你是怎么样理解的？聊聊它的前景？
