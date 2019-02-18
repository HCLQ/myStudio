/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 *
 * https://leetcode.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (52.81%)
 * Total Accepted:    296.4K
 * Total Submissions: 560.6K
 * Testcase Example:  '3'
 *
 *
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 *
 *
 *
 * For example, given n = 3, a solution set is:
 *
 *
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 *
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n === 0) {
    return ['']
  }
  if (n === 1) {
    return ['()']
  }
  let output = []
  function makeBracket(str = '', leftCount = 0, rightCount = 0) {
    if (leftCount === n && rightCount === n) {
      output.push(str)
    }
    if (leftCount < n) {
      makeBracket(str + '(', leftCount + 1, rightCount)
    }
    if (rightCount < leftCount) {
      makeBracket(str + ')', leftCount, rightCount + 1)
    }
  }
  makeBracket()
  return output
}
