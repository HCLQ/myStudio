/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 *
 * https://leetcode.com/problems/permutations/description/
 *
 * algorithms
 * Medium (53.02%)
 * Total Accepted:    335.4K
 * Total Submissions: 631K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a collection of distinct integers, return all possible permutations.
 *
 * Example:
 *
 *
 * Input: [1,2,3]
 * Output:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let result = []
  dfs(nums, [])
  return result
  function dfs(chose, arr) {
    if (chose.length === 0) {
      return result.push(arr.slice())
    }
    // 有优化空间, 用一个数组完成
    for (let i = 0, length = chose.length; i < length; i++) {
      arr.push(chose[i])
      let temp = chose.slice()
      temp.splice(i, 1)
      dfs(temp, arr)
      arr.pop()
    }
  }
}
