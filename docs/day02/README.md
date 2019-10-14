## html 的元素有哪些（包含 h5）?

区分出行内元素、块级元素、空元素并在后面简要标注下作用。

### 行内元素

- span
- lable
- a
- td
- i
- strong
- em
- ...

### 块级元素

- html
- body
- main
- header
- section
- footer
- aside
- nav
- article
- div
- h1 - h6
- p
- ...

### 空元素

## css3 有哪些新增的特性?

- 圆角/阴影
- flexbox
- 2d/3d 变换
- 过渡动画
- 自定义动画
- 伪元素
- ...

## 写一个方法去掉字符串中的空格

要求传入不同的类型分别能去掉前、后、前后、中间的空格

- 难点在去掉中间的空格, 中间空格条件: 空格前/后均有非空格, 可通过**先行断言** + **后行断言**匹配空格并替换.
- **先行断言** `/(?<=\S)\s+/`
- **后行断言** `/\s+(?=\S)/`

```javascript
/**
 * @param {string} str
 * @param {string} type
 */
function trim(str, type = "all") {
  var regexMap = {
    left: /^\s+/,
    right: /\s+$/,
    center: /(?<=\S)\s+(?=\S)/g,
    both: /(^\s+)|(\s+$)/,
    all: /\s/g
  };
  var reg = regexMap[type];
  if (!reg) {
    throw new TypeError("type is invalid");
  }
  return str.replace(regexMap[type], "");
}
```
