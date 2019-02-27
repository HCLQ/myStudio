/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 *
 * https://leetcode.com/problems/set-matrix-zeroes/description/
 *
 * algorithms
 * Medium (38.80%)
 * Total Accepted:    189.9K
 * Total Submissions: 487.9K
 * Testcase Example:  '[[1,1,1],[1,0,1],[1,1,1]]'
 *
 * Given a m x n matrix, if an element is 0, set its entire row and column to
 * 0. Do it in-place.
 *
 * Example 1:
 *
 *
 * Input:
 * [
 * [1,1,1],
 * [1,0,1],
 * [1,1,1]
 * ]
 * Output:
 * [
 * [1,0,1],
 * [0,0,0],
 * [1,0,1]
 * ]
 *
 *
 * Example 2:
 *
 *
 * Input:
 * [
 * [0,1,2,0],
 * [3,4,5,2],
 * [1,3,1,5]
 * ]
 * Output:
 * [
 * [0,0,0,0],
 * [0,4,5,0],
 * [0,3,1,0]
 * ]
 *
 *
 * Follow up:
 *
 *
 * A straight forward solution using O(mn) space is probably a bad idea.
 * A simple improvement uses O(m + n) space, but still not the best
 * solution.
 * Could you devise a constant space solution?
 *
 *
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let m = matrix.length
  if (m == 0) {
    return matrix
  }
  let n = matrix[0].length
  let iZero = 0
  let jZeror = {}
  let cur
  for (let i = 0; i < m; i++) {
    iZero = 0
    for (let j = 0; j < n; j++) {
      cur = matrix[i][j]
      if (cur === 0) {
        if (!jZeror[j]) {
          for (let k = i - 1; k >= 0; k--) {
            matrix[k][j] = 0
          }
        }
        jZeror[j] = 1
        if (!iZero) {
          iZero = 1
          for (let k = j - 1; k >= 0; k--) {
            matrix[i][k] = 0
          }
        }
      } else if (iZero || jZeror[j]) {
        matrix[i][j] = 0
      }
    }
  }
  return matrix
}
