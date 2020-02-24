## [html] 请说说`<script>`、`<script async>`和`<script defer>`的区别

对于内嵌的 `<script>`, 三者表现一致. 如果用于引用外部脚本, HTMLParser 解析时 遇到`<script>` 会暂停解析, 等待 script 下载完毕并执行完毕, 再执行之后的代码; `<script async>` 则会异步的下载, 直至下载完毕立即执行; `<script defer>` 也会异步的下载, 但不会下载完毕立即执行, 而是等到 DCL 事件再执行.

如下图所示:

![dads](https://camo.githubusercontent.com/3cfc9c7f3ff4185cd5c2d9d40c03e942b98c6dfd/68747470733a2f2f692e737461636b2e696d6775722e636f6d2f77664c38322e706e67)

## [css] 在页面中的应该使用奇数还是偶数的字体？为什么呢？

应使用偶数, 偶数更容易和 web 设计的其他部分构成比例关系; 常用设计软件中预设字体为偶数; 偶数字体更符合设计标准(汉字对称).

## [js] 写一个判断设备来源的方法

```javascript
function getDevType(ua) {
  if (/android/gi.test(ua)) {
    return "android";
  }
  if (/iphone|ipad|ipod|itouch/gi.test(ua)) {
    return "ios";
  }
  ...
}
```

## [软技能] 说说你工作中遇到过比较难的技术问题是什么？是如何解决的？
