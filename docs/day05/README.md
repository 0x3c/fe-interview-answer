## 简述超链接 target 属性的取值和作用

| value     | desc                                                             |
| --------- | ---------------------------------------------------------------- |
| `_blank`  | 从新窗口/标签打开链接                                            |
| `_self`   | 从当前框架/窗口打开链接                                          |
| `_parent` | 从当前框架的父级框架打开链接, 若 `a` 标签在顶层, 则效果同`_self` |
| `_top`    | 从顶层框架打开链接                                               |

## CSS3 新增伪类有哪些并简要描述

| name                    | desc                                                                                  |
| ----------------------- | ------------------------------------------------------------------------------------- |
| `:nth-child(n))`        | 匹配父元素下的第 n 个元素(正序)                                                       |
| `:nth-last-child()`     | 匹配父元素下的第 n 个元素(倒序)                                                       |
| `:nth-of-type(n))`      | 匹配父元素下的同种标签类型的第 n 个元素(正序, 元素先按元素类别排序, 不同元素分别匹配) |
| `:nth-last-of-type(n))` | 匹配父元素下的同种标签类型的第 n 个元素(同上, 倒序)                                   |
| `:first-child`          | 匹配父元素下的第一个元素                                                              |
| `:last-child`           | 匹配父元素下的最后一个元素                                                            |
| `:first-of-type`        | 匹配父元素下的同种标签类型的第一个元素                                                |
| `:last-of-type`         | 匹配父元素下的同种标签类型的最后一个元素                                              |
| `:only-child`           | 匹配作为父元素下的唯一元素的元素                                                      |
| `:only-of-type`         | 匹配作为父元素下同种标签类型里的唯一元素的元素                                        |
| `:empty`                | 匹配子元素为空的元素                                                                  |
| `:not(p)`               | 匹配非 `p` 元素                                                                       |
| `:checked`              | 匹配单选/复选框被选中的元素                                                           |

## 写一个把字符串大小写切换的方法

```javascript
/**
 * @param {string} str
 * @return {string}
 */
function convert(str) {
  var res = "";
  for (var chr of str) {
    var code = chr.charCodeAt();
    if (code >= 65 && code <= 90) {
      code += 32;
    } else if (code >= 97 && code <= 122) {
      code -= 32;
    } else {
    }
    res += String.fromCharCode(code);
  }
  return res;
}
```
