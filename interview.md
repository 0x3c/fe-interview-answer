## call/apply 区别？谁性能更好?

参数在三个以内, 性能差不多; 参数在三个以上, call 性能更好.

## 实现(5).add(3).minus(2), 使其输出结果为 6.

```javascript
Number.prototype.add = function(n) {
  return this + n;
};
Number.prototype.minus = function(n) {
  return this - n;
};
(5).add(3).minus(2); // 6
```

## 箭头函数与普通函数的区别? 构造函数可使用 new 生成实例, 那么箭头函数可以吗, 为什么?

    1. 箭头函数语法更简洁
    2. 箭头函数没有自身的 this, this 指向函数所在上下文, 使用 call/apply 无法改变 this
    3. 没有 arguments
    4. 无法使用 new 操作(箭头函数没有 prototype)

## 如何把一个字符串的大小写取反, 例 'AbC' 变 'aBc'.

## 实现一个字符串匹配方法, 从字符串 S 中查找, 是否存在字符串 T, 若存在则返回位置, 否则返回 -1。(不能基于 indexOf/includes 等内置方法)

## 验证字符串是否是合法的 url

```javascript
// URL 协议组成: protocol + domain name + ?port + ?path + ?parameter + ?anchor
```
