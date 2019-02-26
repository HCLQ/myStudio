/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 *
 * https://leetcode.com/problems/unique-paths-ii/description/
 *
 * algorithms
 * Medium (33.21%)
 * Total Accepted:    182.6K
 * Total Submissions: 549.5K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in
 * the diagram below).
 *
 * The robot can only move either down or right at any point in time. The robot
 * is trying to reach the bottom-right corner of the grid (marked 'Finish' in
 * the diagram below).
 *
 * Now consider if some obstacles are added to the grids. How many unique paths
 * would there be?
 *
 *
 *
 * An obstacle and empty space is marked as 1 and 0 respectively in the grid.
 *
 * Note: m and n will be at most 100.
 *
 * Example 1:
 *
 *
 * Input:
 * [
 * [0,0,0],
 * [0,1,0],
 * [0,0,0],
 * [0,1,0]
 * ]
 * Output: 2
 * Explanation:
 * There is one obstacle in the middle of the 3x3 grid above.
 * There are two ways to reach the bottom-right corner:
 * 1. Right -> Right -> Down -> Down
 * 2. Down -> Down -> Right -> Right
 *
 *
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid.length === 0) {
    return 0
  }
  let m = obstacleGrid.length
  let n = obstacleGrid[0].length
  let output = []
  for (let i = 0; i < m; i++) {
    output[i] = []
  }
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m; i++) {
      if (obstacleGrid[i][j] == 1) {
        output[i][j] = 0
      } else {
        if (i == 0) {
          if (j > 0) {
            output[i][j] = output[i][j - 1]
          } else {
            output[i][j] = 1
          }
        } else if (j == 0) {
          if (i > 0) {
            output[i][j] = output[i - 1][j]
          } else {
            output[i][j] = 1
          }
        } else {
          output[i][j] = output[i - 1][j] + output[i][j - 1]
        }
      }
    }
  }
  return output[m - 1][n - 1]
}
