## viewport 常见设置都有哪些?

`name` 为 `viewport` 的 `meta` 标签, 其 `content` 为一对对键值对组成的逗号分隔的字符串.

| property      | value                | description      |
| ------------- | -------------------- | ---------------- |
| width         | number/device-width  | 设置视口的宽度   |
| height        | number/device-height | 设置视口的高度   |
| initial-scale | number               | 初始缩放倍数     |
| minimum-scale | number               | 最小缩小倍数     |
| maximum-scale | number               | 最大放大倍数     |
| user-scalable | boolean              | 是否允许用户缩放 |

## 对比下 px、em、rem 有什么不同?

px 逻辑像素点, 相对于显示器屏幕分辨率而言.
em 是相对当前元素 `font-size` 大小

```css
.box {
  font-size: 12px;
  padding: 1em; /* 12px */
}
```

rem 是相对根元素 `font-size` 的单位

```css
html {
  font-size: 10px;
}
.box {
  width: 10rem; /* 100px */
  font-size: 1.6rem; /* 16px */
}
```

## 简要描述下什么是回调函数并写一个例子出来

将处理函数交给第三方机构调用, 无法确定调用时机, 调用参数.

```javascript
function doSomethingCool() {
  console.log("Hi, I'm doing something cool");
}
function eat(foods, callback) {
  // eating

  // after
  callback(foods);
}
eat("banana", doSomethingCool);
```
