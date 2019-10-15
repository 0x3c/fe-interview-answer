## label 都有哪些作用？并举相应的例子说明

- 与表单元素关联, 当点击 `label` 时, 也会触发关联的表单元素 focus/click

```html
<!-- 点击label时, input 会聚焦 -->
<label for="username">用户名:</label>
<input id="username" placeholder="请输入用户名" />
```

## 用 css 创建一个三角形，并简述原理

    border 由四边组成, 每个边为三角形. 将其它三个边设为透明, 只显示一个边即可.

```html
<style>
  .trangle {
    display: inline-block;
    border-color: red;
    border-width: 20px;
    border-style: solid;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
  }
</style>

<body>
  <div class="trangle"></div>
</body>
```

## 写一个去除制表符和换行符的方法

```javascript
/**
 * @param {string} str
 * @return {string}
 */
function removeEmpty(str) {
  return str.replace(/[\t\v\n\r\f]/g, "");
}
```
