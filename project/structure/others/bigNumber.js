// 大数的四则运算

//--------相乘---------
/**
 * 模拟乘法O(n^2)
 *      9  8
 *   ×  2  1
 *-----------
 *     (9)(8)  <---- 第1趟: 98×1的每一位结果
 * (18)(16)     <---- 第2趟: 98×2的每一位结果
 *-----------
 * 0    1  2   <-----结果数组的位置对应
 *(18)(25)(8)  <---- 这里就是相对位的和，还没有累加进位
 * 结论第i和第j位相乘的结果是进到i+j位上
 * @param {string} num1
 * @param {string} num2
 */
function multiply(num1, num2) {
  num1 = num1.split('')
  num2 = num2.split('')
  let result = []
  for (let i = num1.length - 1; i > -1; i--) {
    for (let j = num2.length - 1; j > -1; j--) {
      result[i + j] = (result[i + j] || 0) + num1[i] * num2[j]
    }
  }
  let length = result.length
  // 处理进位
  for (let i = length - 1; i > 0; i--) {
    if (result[i] >= 10) {
      result[i - 1] += Math.floor(result[i] / 10)
      result[i] = result[i] % 10
    }
  }
  // 处理高位有0的情况
  for (let i = 0; i < length; i++) {
    if (result[i] === 0) {
      delete result[i]
    } else {
      break
    }
  }
  // "0000" -> "" 应该返回 "0"
  return result.join('') || '0'
}

/**
 * Karatsuba算法O(n^log2(3))
 * @param {string} num1
 * @param {string} num2
 */
function multiply2(num1, num2) {
  if (num1 < 10 || num2 < 10) return num1 * num2
  let size1 = num1.length
  let size2 = num2.length
  let mid = Math.floor(Math.max(size1, size2) / 2)

  let a = num1.slice(0, size1 - mid)
  let b = num1.slice(size1 - mid)
  let c = num2.slice(0, size2 - mid)
  let d = num2.slice(size2 - mid)

  let z2 = multiply2(a, c)
  let z0 = multiply2(b, d)
  let z1 = multiply2(+a + +b, +c + +d) - z0 - z2

  return z2 * Math.pow(10, 2 * mid) + z1 * Math.pow(10, mid) + z0
}
