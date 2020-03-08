## [html] 网页上的验证码是为了解决什么问题？说说你了解的验证码种类有哪些

- 防爬虫
- 身份验证, 放置他人盗用信息
- 降低服务器压力

## [css] 描述下你所了解的图片格式及使用场景

- None

## [js] 写一个方法判断字符串是否为回文字符串

```javascript
function isPalindrome(str) {
  let lp = 0,
    rp = str.length - 1;
  while (lp <= rp) {
    if (str[lp++] != str[rp--]) return false;
  }
  return true;
}
```

## [软技能] 解释下 CRLF 是什么？

- CR, 回车符(`\r`, ascii 码为`0x0d`)
- LF, 换行符(`\n`, ascii 码为`0x0a`)
