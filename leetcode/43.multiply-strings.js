/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 *
 * https://leetcode.com/problems/multiply-strings/description/
 *
 * algorithms
 * Medium (29.82%)
 * Total Accepted:    181.9K
 * Total Submissions: 609.3K
 * Testcase Example:  '"2"\n"3"'
 *
 * Given two non-negative integers num1 and num2 represented as strings, return
 * the product of num1 and num2, also represented as a string.
 *
 * Example 1:
 *
 *
 * Input: num1 = "2", num2 = "3"
 * Output: "6"
 *
 * Example 2:
 *
 *
 * Input: num1 = "123", num2 = "456"
 * Output: "56088"
 *
 *
 * Note:
 *
 *
 * The length of both num1 and num2 is < 110.
 * Both num1 and num2 contain only digits 0-9.
 * Both num1 and num2 do not contain any leading zero, except the number 0
 * itself.
 * You must not use any built-in BigInteger library or convert the inputs to
 * integer directly.
 *
 *
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  num1 = num1.split('')
  num2 = num2.split('')
  let max = 110
  let length1 = num1.length
  let length2 = num2.length
  let c = []
  for (let i = 0; i < length1; i++) {
    for (let j = 0; j < length2; j++) {
      c[i + j] = (c[i + j] || 0) + num1[i] * num2[j]
    }
  }
  for (let k = length1 + length2 - 1; k > 0; k--) {
    if (c[k] >= 10) {
      c[k - 1] += Math.floor(c[k] / 10)
      c[k] %= 10
    }
  }
  for (let i = 0; i < c.length; i++) {
    if (c[i] === 0) {
      delete c[i]
    } else {
      break
    }
  }
  return c.join('') || "0"
}
