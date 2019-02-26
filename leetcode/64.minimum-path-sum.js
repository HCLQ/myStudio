/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 *
 * https://leetcode.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (45.26%)
 * Total Accepted:    208.4K
 * Total Submissions: 458.4K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * Given a m x n grid filled with non-negative numbers, find a path from top
 * left to bottom right which minimizes the sum of all numbers along its path.
 *
 * Note: You can only move either down or right at any point in time.
 *
 * Example:
 *
 *
 * Input:
 * [
 * [1,3,1],
 * ⁠ [1,5,1],
 * ⁠ [4,2,1]
 * ]
 * Output: 7
 * Explanation: Because the path 1→3→1→1→1 minimizes the sum.
 *
 *
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let m = grid.length
  let n = grid[0].length
  if (m === 0) {
    return 0
  }
  if (m === 1) {
    return grid[0].reduce((total, v) => total + v)
  }
  if (n === 1) {
    return grid.reduce((total, arr) => total + arr[0], 0)
  }
  let output = [[grid[0][0]]]
  for (let i = 1; i < m; i++) {
    output.push([output[i - 1][0] + grid[i][0]])
  }
  for (let j = 1; j < n; j++) {
    output[0][j] = output[0][j - 1] + grid[0][j]
  }
  let top
  let left
  for (let j = 1; j < n; j++) {
    for (let i = 1; i < m; i++) {
      top = output[i - 1][j]
      left = output[i][j - 1]
      output[i][j] = Math.min(top, left) + grid[i][j]
    }
  }
  return output[m - 1][n - 1]
}
