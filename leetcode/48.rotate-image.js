/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 *
 * https://leetcode.com/problems/rotate-image/description/
 *
 * algorithms
 * Medium (46.47%)
 * Total Accepted:    222.8K
 * Total Submissions: 478.4K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * You are given an n x n 2D matrix representing an image.
 *
 * Rotate the image by 90 degrees (clockwise).
 *
 * Note:
 *
 * You have to rotate the image in-place, which means you have to modify the
 * input 2D matrix directly. DO NOT allocate another 2D matrix and do the
 * rotation.
 *
 * Example 1:
 *
 *
 * Given input matrix =
 * [
 * ⁠ [1,2,3],
 * ⁠ [4,5,6],
 * ⁠ [7,8,9]
 * ],
 *
 * rotate the input matrix in-place such that it becomes:
 * [
 * ⁠ [7,4,1],
 * ⁠ [8,5,2],
 * ⁠ [9,6,3]
 * ]
 *
 *
 * Example 2:
 * old                    new
 * 0,0 0,1 0,2 0,3        3,0  2,0   1,0   0,0
 * 1,0 1,1 1,2 1,3   ==>  3,1  2,1   1,1   0,1
 * 2,0 2,1 2,2 2,3        3,2  2,2   1,2   0,2
 * 3,0 3,1 3,2 3,3        3,3  2,3   1,3   0,3
 *
 * 得出规律 new[i,j] = old[n-j,i]
 * 继续   new[n-j,i] = old[n-i, n-j]
 * 继续   new[n-i, n-j] = old[n-(n-j),n-i] = old[j,n-i]
 * 继续   new[j,n-i] = old[n-(n-i),j] = old[i,j]
 * Given input matrix =
 * [
 * ⁠ [ 5, 1, 9,11],    
 * ⁠ [ 2, 4, 8,10],    
 * ⁠ [13, 3, 6, 7],    
 * ⁠ [15,14,12,16]     
 * ],
 *
 * rotate the input matrix in-place such that it becomes:
 * [
 * ⁠ [15,13, 2, 5],
 * ⁠ [14, 3, 4, 1],
 * ⁠ [12, 6, 8, 9],
 * ⁠ [16, 7,10,11]
 * ]
 *
 *
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let n = matrix.length - 1
  let store = {}
  let key
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      // 可优化到继续推导
      key = n - j + ',' + i
      store[i + ',' + j] = matrix[i][j]
      if (typeof store[key] !== 'undefined') {
        matrix[i][j] = store[key]
      } else {
        matrix[i][j] = matrix[n - j][i]
      }
    }
  }
}