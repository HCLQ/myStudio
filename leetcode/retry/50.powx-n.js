/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 *
 * https://leetcode.com/problems/powx-n/description/
 *
 * algorithms
 * Medium (27.44%)
 * Total Accepted:    287K
 * Total Submissions: 1M
 * Testcase Example:  '2.00000\n10'
 *
 * Implement pow(x, n), which calculates x raised to the power n (xn).
 *
 * Example 1:
 *
 *
 * Input: 2.00000, 10
 * Output: 1024.00000
 *
 *
 * Example 2:
 *
 *
 * Input: 2.10000, 3
 * Output: 9.26100
 *
 *
 * Example 3:
 *
 *
 * Input: 2.00000, -2
 * Output: 0.25000
 * Explanation: 2-2 = 1/22 = 1/4 = 0.25
 *
 *
 * Note:
 *
 *
 * -100.0 < x < 100.0
 * n is a 32-bit signed integer, within the range [−231, 231 − 1]
 *
 *
 */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0 || x === 1) {
    return 1
  }
  let m = n > 0 ? n : -n
  if (x === -1) {
    return m % 2 === 0 ? 1 : -1
  }
  let ans = 1
  while (m > 0) {
    if ((m & 1) == 1) {
      ans *= x
    }
    m >>= 1
    x *= x
  }
  // 越界了
  if (ans === 1) {
    return 0
  }
  return n < 0 ? 1 / ans : ans
}
