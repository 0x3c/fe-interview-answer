## [html] 你了解什么是无障碍 web（WAI）吗？在开发过程中要怎么做呢？

- 标签语义化, 使用符合语义的标签
- 键盘可访问性, 切换焦点, 激活, 选择
- 使用 ARIA 为各元素添加语义

## [css] 请描述 css 的权重计算规则

W3C 规范中权重的计算用 a, b, c, d 表示, 权重由高到低, 不可越级.

- a 内联样式
- b id 选择器
- c 类, 伪类, 属性选择器
- d 元素, 伪元素选择器
- 通配选择器, 关系选择器权重为 0, 但比无权重强.
- !important 高于内联
- 相同权重, 后者居上

## [js] 写一个获取数组的最大值、最小值的方法

```javascript
function max() {
  return Math.max.apply(null, arguments);
}

function min() {
  return Math.min.apply(null, arguments);
}
```

## [软技能] 在工作中能让你最有成就感的是什么？并介绍下你最得意的作品吧
