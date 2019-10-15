## html5 的文件离线储存怎么使用，工作原理是什么?

`AppCache` 被废弃, 使用 `Service Workers` 代替

### Service Workers

注册 service worker 脚本文件, service worker 会被自动安装并激活. service worker 可拦截 指定 scope 中的资源请求并自定义响应, 使得在离线状态下任然可以工作.

## css 选择器有哪些？哪些属性可以继承?

### 选择器

- 基本选择器
  - ID 选择器 `#root`
  - class 选择器 `.nav`
  - tag 选择器 `div`
  - 属性选择器 `[attr="data-"]`
  - 通用选择器 `*`
- 组合选择器
  - 后代选择器 ``
  - 子代选择器 `>`
  - 一般兄弟选择器 `~`
  - 紧邻兄弟选择器 `+`
- 伪类选择器 `:active`
- 伪元素选择器 `::first-letter`

### 常见可继承属性

- 文本
  - color: 文本颜色
  - direction: 文本书写方向
  - line-height: 行高
  - text-align: 文本水平对齐
  - text-ident: 文本缩进
- 字体
  - font-family: 字体
  - font-size: 字体大小
  - font-style: 字体风格
- 可见性:
  - visibility: 隐藏
  - opacity: 透明度
- ...

## 写一个方法把下划线命名转成大驼峰命名

```javascript
/**
 * @param {string} str
 * @return {string}
 */
function toCamel(str) {
  return str.replace(/[a-z]_([a-z])/g, (match, $1) => $1.toUpperCase());
}
```
