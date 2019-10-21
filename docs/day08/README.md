## 简述下 html5 的离线储存原理，同时说明如何使用?

注册 `service worker`, `service worker` 可以拦截特定目录下的资源请求并自定义响应

## 清除浮动的方式有哪些及优缺点?

### 1. 父元素清除

使父元素满足 BFC, BFC 计算高度时, 浮动子元素也参与计算.

### 2. 伪元素清除

 父元素 `::after` 设置 `display: block; content: ""; clear: both;`.

### 3. 在父容器内最下方添加新元素

在父容器内最下方添加新元素, 并设置样式 `clear: both;`. 但会增加存在多余 dom 元素.

## 写一个加密字符串的方法

```javascript
/**
 * @param {string} str
 * * @return {string}
 */
function encode(str) {
  return btoa(encodeURIComponent(str));
}
/**
 * @param {string} str
 * @return {string}
 */
function decode(str) {
  return decodeURIComponent(atob(str));
}
```
