## [html] 为什么 HTML5 只需要写<!DOCTYPE HTML>就可以？

HTML5 之前基于 SGML, SGML 需要指定 DTD 解析文档, 可通过`<!DOCTYPE>`指定要使用的 DTD, 若不写则会进入怪异模式; HTML5 不基于 SGML, 不需要指明 DTD, 其`<!DOCTYPE>`只有一种: `<!DOCTYPE html>`.

## [css] position:fixed;在 ios 下无效该怎么办？

避免外层容器滚动, 让滚动发生在内部容器中.

```html
<style>
  body {
    overflow: hidden;
  }
  main {
    overflow-y: scroll; /* 滚动发生在内部 */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 40px; /* 腾出 footer 高度 */
  }
  footer {
    height: 40px;
    position: fixed;
    bottom: 0;
  }
</style>
<body>
  <main></main>
  <footer></footer>
</body>
```

## [js] 什么是闭包？优缺点分别是什么？

当函数可以记住并访问所在词法作用域。

优点

- 隐藏变量, 防止变量被篡改, 模块化

缺点

- 闭包在处理速度和内存消耗方面对脚本性能有负面影响

## [软技能] 你最喜欢用哪些编辑器？喜欢它的理由是什么？

VSCode

- 代码开源, 社区强大, 插件丰富
- 轻量级
- 原生支持 ts 类型检查
- 跨平台
