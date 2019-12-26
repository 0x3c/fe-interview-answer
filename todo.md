## 移动端布局

## 高清图方案

## 0.5px

## 模块加载机制

### commonjs

### amd

## react diff 算法

## React setState

setState 在 React 的自生事件循环之类为异步; 在之外为同步, 如 setTimeout / 原生事件循环。

```javascript
class App extends Component {
  state = {
    count: 0
  };
  componentDidMount() {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
    setTimeout(() => {
      this.setState({ count: this.state.count + 1 });
      console.log(this.state.count);
      this.setState({ count: this.state.count + 1 });
      console.log(this.state.count);
    }, 0);
  }
  render() {
    <h1>{this.state.count}</h1>;
  }
}

// 输出为 0 0 2 3
```

## React Fiber

fiber reconciliation, 拆分, 优先级, requestIdleCallback

React 16 之前, reconciler(stack reconciler) 采用自顶向下递归, 从根组件/更新组件开始, 更新整个子树. 当组件树越来越大, 递归遍历成本会越高, 持续占用主线程, 主线程上的布局、动画等周期任务/交互响应无法立即处理.

?? 在 stack reconciler 下, DOM 的更新时同步的, 在 VDOM 的对比过程中, 发现一个 instance 更新, 会立即执行 DOM 操作。

React 16 之前更新: diff,对比 `prevInstance` 和 `nextInstance`, 找出差异. -> patch, 将差异队列更新到真实 DOM 节点。

## webpack 原理

## node 基础

## html

## css

## js 基础
