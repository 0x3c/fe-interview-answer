### [html] title 与 h1 的区别、b 与 strong 的区别、i 与 em 的区别？

`<title>` 为文档标题, 一个文档只有一个 `<title>` 标签生效; `<h1>` 为文章标题,可有多个, 嵌套 `<section>` 会降级.

`<b>` 文字加粗; `strong` 文字加粗并加强语气, 消除歧义.

`<i>` 斜体; `<em>` 斜体并强调文本内容.

### [css] style 标签写在 body 前和 body 后的区别是什么？

放在 body 前, 元素在渲染时会根据既定的样式渲染出来; 放在 body 后, 元素渲染时会以默认样式堆叠出来, 并在 style 加载完成后重新渲染.

### [js] 写一个数组去重的方法（支持多维数组）

```javascript
/**
 * 元素为非数组则直接对数组去重
 * 元素为数组则对元素去重
 * @param {array} arr
 * @return {array}
 */
function uniqueArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      arr[i] = uniqueArr(arr[i]);
    }
  }
  return Array.from(new Set(arr));
}
```

### [软技能] 对于加班你是怎么看的？

高效率的工作需要有更多自由时间。
