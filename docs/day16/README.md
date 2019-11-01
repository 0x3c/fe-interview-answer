### [html] 元素的 alt 和 title 有什么区别？

- 属性`alt` 是在图片加载失败时的代替信息。
- 属性 `title` 是元素的提示信息, 当鼠标悬浮到元素显示的信息。

### [css] 请描述 margin 边界叠加是什么及解决方案

**外边距合并/折叠** (**margin collapsing**)有以下三种情况

1. 相邻兄弟元素, 合并发生在前一个元素的下边距和后一个元素的上边距.
2. 父元素和第一个/最后一个子元素, 合并发生在父元素的上边距和第一个元素的上边距(父元素的下边距和第一个元素的下边距).
3. 空的块级元素(元素自身合并), 合并发生在元素的上边距和下边距.

计算规则

1. 外边距 a, b 均为非负数, 合并外边距为 max(a, b).
2. 外边距 a, b 符号相反, 合并外边距为 a + b.
3. 外边距 a, b 均为负数, 合并外边距为 min(a, b).

### [js] 返回到顶部的方法有哪些？把其中一个方法出来

1. scroll()

```javascript
Element.scroll(); // 用于在给定元素中滚动到指定坐标

// 若滚动发生在 html 内
window.scroll(0, 0);
// or
document.documentElement.scroll(0, 0);
```

2. scrollTo()

```javascript
Element.scrollTo(); // 用于在给定元素中滚动到指定坐标
```

3. scrollBy()

```javascript
Element.scrollBy(); // 用于在给定元素中滚动一段指定距离
```

4. scrollIntoView()

```javascript
Element.scrollIntoView(); // 使给定元素滚动到浏览器窗口的可视区域
```

5. 锚点 `#`

在顶部设置锚点, 并通过地址访问回到该锚点

```html
<body id="also-top">
  <header id="top">Header</header>
  <main>
    <ul>
      <li>列表</li>
      ...
      <li>列表</li>
    </ul>
  </main>
  <a href="#top"> 回到顶部</a>
  <a href="#also-top"> 回到顶部</a>
  <a href="#">也可以回到顶部</a>
  <footer>Footer</footer>
</body>
```

6. scrollTop

scrollTop 属性可设置/获取元素内容的垂直滚动像素

```javascript
Element.scrollTop;
// 若滚动发生在 html 内
document.documentElement.scrollTop = 0;

// 若滚动发生在 body 内
document.body.scrollTop = 0;
```

### [软技能] 你在的公司有没有做代码审查（CodeReview）？如果有是怎么做的？如果没有你觉得应该怎么做才更好？

小公司没有, 一味地追求研发速度, 代码质量参差不齐。活在自己的代码里很难进步。
