## 常见的浏览器内核都有哪些？并介绍下你对内核的理解

- Trident: IE
- Gecko: FireFox
- WebKit: Chromium, Safari
- Blink: Chrome

## 说说你对 css 盒子模型的理解

- 标准盒模型: 其宽高为 content + 2 \* padding + 2 \* border
- IE 盒模型: 其宽高为 content

## 写一个获取当前 url 查询字符串中的参数的方法

```javascript
/**
 * @param {string} url
 * @return {object}
 */
function queryParams(url) {
  const queryStr = url.split("?")[1];
  if (!queryStr) return {};
  return queryStr.split("&").reduce((obj, str) => {
    const [k, v] = str.split("=");
    obj[k] = v;
    return obj;
  }, {});
}
```

## 网页应用从服务器主动推送到客户端有那些方式？

### websocket

### Comet

#### 基于 AJAX 长轮询

1. 客户端向服务器发送 AJAX 请求
2. 服务端阻塞请求直到与数据传递或超时才返回
3. 客户端处理响应并再次发起请求

#### 基于 iframe 长连接

在 iframe 页面嵌入隐藏帧, src 设置为一个长链接的请求
