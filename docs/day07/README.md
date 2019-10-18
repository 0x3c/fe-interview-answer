## iframe 框架都有哪些优缺点

### 优点

- 页面程序分离, 便于代码拆分复用
- `iframe` 刷新不影响主页面, 可实现局部刷新

### 缺点

- `iframe` 阻塞主页面的 `windown.onload`
- 增加资源请求

## 简述你对 bfc 规范的理解

    bfc - 块格式化上下文(Block Formatting Context), 对应的有 IFC
    时CSS渲染的一部分, 在渲染块盒子时会创建该上下文. 该上下文内部与外部互不干扰.

### 形成条件

与 `display: block;` 无关

- 根元素 `<html>`
- 浮动元素(`float` 不为 `none`)
- 绝对定位元素(`position` 为 `absolute` / `fixed`)
- 行内块元素(`display: inline-block`)
- 弹性元素(`display` 为 `flex` / `inline-flex` 元素的直接子元素)
- 网格元素(`display` 为 `grid` / `inline-grid` 元素的直接子元素)
- `overflow` 非 `visible` (默认值) 的块元素
- `display` 为 `flow-root` 的元素
- `contain` 为 `layout` / `content` / `paint`的元素
- 多列容器
- `column-span` 为 `all` 的元素始终会创建一个新的 BFC
- 表格单元格
- 表格标题
- 匿名表格单元格元素(`display` 为 `table`/ `table-row`/ `table-row-group`/ `table-header-group`/ `table-footer-group`/ `inline-table`)

### BFC 特性

- BFC 是页面上的独立容器, BFC 内部与外部互不干扰
- 计算 BFC 的高度时，浮动子元素也参与计算
- BFC 的区域不会与 float 的元素区域重叠

### 应用场景

- 解决子元素浮动, 父元素坍塌. 可设置父元素为 `BFC`, 使浮动子元素参与计算.
- 解决`margin` 合并.
- 解决文字环绕在 `float` 元素四周. 为文字容器创建 `BFC` 块

## 统计某一字符或字符串在另一个字符串中出现的次数

```javascript
/**
 * @param {string} str
 * @param {string} target
 * @return {number}
 */
function count(str, target) {
  var n = 0,
    index = -1;
  while (index) {
    index = str.indexOf(target, index) + 1;
    index && n++;
  }
  return n;
}
```
