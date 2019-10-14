## 页面导入样式时，使用 link 和@import 有什么区别

- link 是 HTML 标签, 通过 rel 指定为 stylesheet 可加载 css 资源文件, 可指定 rel 为其它类 型其它用途; @import 是 css 中 @ 规则, 只能加载 css.
- link 在页面载入时同时加载; @import 需要在页面完全载入后加载.
- link  可通过 js 操作动态插入样式; @import 不能.
- link 没有兼容问题; @import 不兼容 IE5 以下

## 圣杯布局和双飞翼布局的理解和区别，并用代码实现

    上中下三栏, 上下全宽.
    中间三栏布局, 两侧宽固定, 中间宽度自适应.
    中间部分高度为三栏中最高区域的高度.

### 圣杯布局

圣杯布局 html 结构

```html
<header></header>
<div class="container">
  <div class="center"></div>
  <div class="left"></div>
  <div class="right"></div>
</div>
<footer></footer>
```

#### 浮动 + 定位

    三栏浮动, 父容器全宽, 设置padding为左右两栏空出位置, content 区域为内容区域, 两侧则通过margin + 相对定位移动到相应位置.

```css
header,
footer {
  height: 70px;
  background-color: lightblue;
}
.container {
  padding-left: 200px;
  padding-right: 250px;
}

.container > div {
  position: relative;
  float: left;
  height: 300px;
}
footer {
  clear: both;
}
.center {
  width: 100%;
  background-color: yellowgreen;
}
.left {
  width: 200px;
  margin-left: -100%;
  left: -200px;
  background-color: red;
}
.right {
  width: 250px;
  margin-right: -250px;
  background-color: red;
}
```

### 双飞翼布局

双飞翼布局 html 结构

```html
<header></header>
<div class="center">
  <div class="inner"></div>
</div>
<div class="left"></div>
<div class="right"></div>
<footer></footer>
```

#### 通过 浮动 + 定位

    三栏浮动, 中栏元素全宽, 中栏内容区域设置margin-left,margin-right 空出左右两栏位置, 并通过盒模型流动性自适应剩余宽度. 左右两栏通过margin-left 移动到相应位置.

```css
header,
footer {
  height: 70px;
  background-color: lightblue;
}
.left,
.center,
.right {
  float: left;
  height: 300px;
}
.center {
  width: 100%;
}
.inner {
  margin-left: 200px;
  margin-right: 250px;
  height: 300px;
}
.left {
  width: 200px;
  background-color: red;
  margin-left: -100%;
}
.right {
  width: 250px;
  background-color: yellow;
  margin-left: -250px;
}
footer {
  clear: both;
}
```

## 用递归算法实现，数组长度为 5 且元素的随机数在 2-32 间不重复的值

```javascript
var arr = [];
function generateNums(from, to, len, nums) {
  if (nums.length === len) return nums;
  nums.push(from + Math.floor(Math.random() * (to - from + 1)));
  generateNums(from, to, len, nums);
}
generateNums(2, 32, 5, arr);
```
