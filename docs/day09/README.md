## 浏览器内多个标签页之间的通信方式有哪些?

### BroadcastChannel

```html
<!-- foo.html -->
<h1>Foo</h1>
<script>
  const bc1 = new BroadcastChannel("broadcast");
  bc1.onmessage = e => {
    console.log(e.data);
  };
</script>

<!-- bar.html -->
<h1>Bar</h1>
<script>
  const bc2 = new BroadcastChannel("broadcast");
  bc2.postMessage("Hello Foo, I'm bar");
</script>
```

### localStorage

```javascript
window.onstorage = e => {
  // 非当前页修改 localStorage 时触发
  // storage changed
};
```

### websocket(可跨域)

标签页通过 websocket 连接到服务器, 间接通信.

### SharedWorker

SharedWorker 可被多个 window 共同使用(必须同源))

```javascript
// sharedworker.js
let data;
self.onconnect = function(e) {
  const port = e.ports[0];
  port.onmessage = evt => {
    if (evt.data === "get") {
      evt.postMessage(data);
    } else {
      data = evt.data;
    }
  };
};
```

```html
<!-- foo.html -->
<h1>Foo</h1>
<button id="send">send Foo</button>
<script>
  const sw = new SharedWorker("sharedworker.js");
  sw.port.addEventListener("message", e => {
    console.log("received: " + e.data);
  });
  sw.port.start();
  send.addEventListener(
    "click",
    () => {
      sw.port.postMessage("Foo");
    },
    false
  );
</script>
```

```html
<!-- bar.html -->
<h1>Bar</h1>
<button id="send">send Bar</button>
<script>
  const sw = new SharedWorker("sharedworker.js");
  sw.port.addEventListener("message", e => {
    console.log("received: " + e.data);
  });
  sw.port.start();
  send.addEventListener(
    "click",
    () => {
      sw.port.postMessage("Bar");
    },
    false
  );
</script>
```

## 简述下你理解的优雅降级和渐进增强

### 优雅降级

优雅降级, 向下(后)兼容. 一开始针对低版本浏览器构建页面, 完成基本功能. 再针对高版本浏览器做更丰富的交互、体验.

### 渐进增强

向上(前)兼容. 一开始就构建一个完整网站, 再针对部分不支持的内容做兼容处理. 如 css hack, javascript polyfill.

## 写一个判断数据类型的方法

```javascript
/**
 * @param {any} target
 * @return {string}
 */
function getType(target) {
  return Object.prototype.toString
    .call(target)
    .replace(/\[\w+ (\w+)\]/, (matched, $1) => $1)
    .toLowerCase();
}
```
