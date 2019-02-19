/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 *
 * https://leetcode.com/problems/divide-two-integers/description/
 *
 * algorithms
 * Medium (16.00%)
 * Total Accepted:    177.6K
 * Total Submissions: 1.1M
 * Testcase Example:  '10\n3'
 *
 * Given two integers dividend and divisor, divide two integers without using
 * multiplication, division and mod operator.
 *
 * Return the quotient after dividing dividend by divisor.
 *
 * The integer division should truncate toward zero.
 *
 * Example 1:
 *
 *
 * Input: dividend = 10, divisor = 3
 * Output: 3
 *
 * Example 2:
 *
 *
 * Input: dividend = 7, divisor = -3
 * Output: -2
 *
 * Note:
 *
 *
 * Both dividend and divisor will be 32-bit signed integers.
 * The divisor will never be 0.
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of
 * this problem, assume that your function returns 231 − 1 when the division
 * result overflows.
 *
 *
 */
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const max = Math.pow(2, 32) / 2 - 1
const min = -Math.pow(2, 32) / 2
var divide = function(dividend, divisor) {
  let result = 0
  let sigin = (dividend < 0) ^ (divisor < 0) ? -1 : 1
  dividend = dividend < 0 ? -dividend : dividend
  divisor = divisor < 0 ? -divisor : divisor
  if (divisor === 1 || divisor === -1) {
    return dealResult(dividend)
  }
  if (dividend == divisor) {
    result = 1
  } else if (dividend < divisor) {
    return 0
  } else {
    let muti = 1
    let temp
    let powValue
    while (dividend >= divisor) { //注意等于 会漏算1个
      muti = 1
      temp = divisor
      powValue = temp << 1
      // powValue可能会溢出
      while (dividend > powValue && powValue < max && powValue > 0) {
        temp = powValue
        muti = muti << 1
        powValue = temp << 1
      }
      dividend -= temp
      result += muti
    }
  }
  return dealResult(result)

  function dealResult(res) {
    res = sigin > 0 ? res : ~(res - 1)
    if (res < min) {
      return min
    }
    if (res > max) {
      return max
    }
    return res
  }
}
