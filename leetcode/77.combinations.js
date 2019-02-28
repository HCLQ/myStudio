/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 *
 * https://leetcode.com/problems/combinations/description/
 *
 * algorithms
 * Medium (45.66%)
 * Total Accepted:    185.3K
 * Total Submissions: 403.3K
 * Testcase Example:  '4\n2'
 *
 * Given two integers n and k, return all possible combinations of k numbers
 * out of 1 ... n.
 *
 * Example:
 *
 *
 * Input: n = 4, k = 2
 * Output:
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 *
 *
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let arr = []
  let output = []
  com(1)
  return output

  function com(start) {
    if (arr.length === k) {
      output.push(arr.slice())
      return
    }
    for (let i = start; i <= n; i++) {
      arr.push(i)
      com(i + 1)
      arr.pop()
    }
  }
}
