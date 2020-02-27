## [html] 解释下你对 GBK 和 UTF-8 的理解？并说说页面上产生乱码的可能原因

GBK 是双字节编码, 包含所有中文字符; utf-8 是国际编码, 对英文用 1 字节编码, 中文则采用 3 字节编码. 若网站对象为中国, 则采用 GBK 编码可节省空间.

乱码是因为浏览器使用的解码规则和页面编码规则不匹配导致.

## [css] 说说你对 z-index 的理解

z-index 指定当前元素在所在层叠上下文中的层叠水平. 当相同层叠上下文中的元素发生重叠时, 决定了其在 z 轴的显示顺序(层叠水平大的在上).

层叠上下文创建:

- html 根元素会创建一个根层叠上下文
- relative/absolute 定位元素并指定 z-index, 会创建指定层级的层叠上下文.
- fixed/sticky 定位元素会创建 z-index:auto 的层叠上下文.
- 只指定 z-index, 会创建一个层叠水平为 0 的层叠上下文.
- grid/flex 元素并指定 z-index, 会创建指定层级的层叠上下文.
- 指定其他 css3 属性会创建层叠水平为 0 的层叠上下文. 如 `isolation:isolate;`, `filter` 非 `none`, `transform` 非 `none`, `opacity` 非 1, `mix-blend-mode` 非 `normal`, `will-change: opacity/transform/isolation/filter/mix-blend-mode`

## [js] 说说 bind、call、apply 的区别？并手写实现一个 bind 的方法

call/apply 改变函数上下文并执行, call 函数参数为序列, apply 函数参数为数组; bind 将函数执行上下文绑定到某个对象并返回这个新函数.

```javascript
function bindWith(fn, target) {
  return function(...args) {
    return fn.apply(target, args);
  };
}
```

## [软技能] 你对 Git 的 branch 及工作流的理解是什么？
