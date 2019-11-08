## [html] 请描述 HTML 元素的显示优先级

TODO

## [css] 要让 Chrome 支持小于 12px 的文字怎么做？

Chrome 限制字体最小为 12px, 小于 12px 则取值为 12px. 需要文字看起来小于 12px:

- 使用图片代替.
- 按倍率缩小, `transform: scale(xRate, yRate)`.

## [js] 写一个验证身份证号的方法

组成: 6 位地址码 + 8 位出生日期码 + 3 位数字顺序码 + 1 位数字校验码

```javascript
/**
 *
 * @param {number[]} ids
 * @return {string}
 */
function check(ids) {
  let sum = 0;
  for (let i = 0; i < ids.length; i++) {
    // 加权因子 Wi = 2^(n-1) % 11
    const wi = 2 ** (18 - 1 - i) % 11;
    sum += wi * ids[i];
  }
  let mod = sum % 11;
  mod = (12 - mod) % 11;
  if (mod === 10) return "X";
  return String(mod);
}

/**
 *
 * @param {string} ids
 * @return {ConstrainBoolean}
 */
function isValid(ids) {
  if (!/^(\d{6})(\d{8})(\d{3})(\d|X)$/i.test(ids)) {
    return false;
  }
  const {
    $1: areaDigit,
    $2: birthDigit,
    $3: sequenceDigit,
    $4: checkDigit
  } = RegExp;

  const checkCode = check(ids.slice(0, 17).split(""));
  if (checkCode !== checkDigit) {
    return false;
  }

  // 省略对地址码、出生日期码的校验

  // if (!checkArea(areaDigit)) {
  //   return false;
  // }
  // if (!checkBirth(birthDigit)) {
  //   return false;
  // }

  return true;
}
```

## [软技能] 你会手写原生 js 代码吗？

Of course!

## 参考

[中华人民共和国公民身份号码 - 维基百科，自由的百科全书](https://zh.wikipedia.org/wiki/中华人民共和国公民身份号码)
