## HTML 全局属性(global attribute)有哪些（包含 H5）?

```jaavscript
Object.keys(HTMLElement.prototype); // HTMLElement 原型上的所有可枚举属性.
```

## 在页面上隐藏元素的方法有哪些?

- 设置不显示: `display: none;`
- 隐藏: `visibility: hidden;`
- 透明度: `opacity: 0;`
- 将元素移动到视口之外( 定位, 负 margin, translate 平移).
- 元素元素高为 0.
- 翻转元素, 沿 X/Y 轴旋转到看不见: `transform: rotateY(90deg);` / `transform: rotateX(90deg);`

## 去除字符串中最后一个指定的字符?

```javascript
/**
 * @param {string} str
 * @param {string} char
 * @return {string}
 */
function delLastChar(str, char) {
  var arr = str.split("");
  return (arr.splice(str.lastIndexOf(char), 1), arr).join("");
}
```
