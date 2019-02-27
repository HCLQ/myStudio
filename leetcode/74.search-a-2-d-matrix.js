/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 *
 * https://leetcode.com/problems/search-a-2d-matrix/description/
 *
 * algorithms
 * Medium (34.63%)
 * Total Accepted:    206.2K
 * Total Submissions: 594.9K
 * Testcase Example:  '[[1,3,5,7],[10,11,16,20],[23,30,34,50]]\n3'
 *
 * Write an efficient algorithm that searches for a value in an m x n matrix.
 * This matrix has the following properties:
 *
 *
 * Integers in each row are sorted from left to right.
 * The first integer of each row is greater than the last integer of the
 * previous row.
 *
 *
 * Example 1:
 *
 *
 * Input:
 * matrix = [
 * ⁠ [1,   3,  5,  7],
 * ⁠ [10, 11, 16, 20],
 * ⁠ [23, 30, 34, 50]
 * ]
 * target = 3
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input:
 * matrix = [
 * ⁠ [1,   3,  5,  7],
 * ⁠ [10, 11, 16, 20],
 * ⁠ [23, 30, 34, 50]
 * ]
 * target = 13
 * Output: false
 *
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let r = matrix.length
  if (r == 0) {
      return false
  }
  let c = matrix[0].length
  let rangeArr
  for (let i = 0; i < r; i++) {
    if (target === matrix[i][0]) {
      return true
    } else if (target > matrix[i][0]) {
      rangeArr = matrix[i]
    }
  }
  if (rangeArr) {
    if (target === rangeArr[c - 1]) {
      return true
    } else if (target < rangeArr[c - 1]) {
      let left = 1
      let right = c - 1
      let mid
      let midV
      while (right >= left) {
        mid = Math.floor((left + right) / 2)
        midV = rangeArr[mid]
        if (target == midV) {
          return true
        } else if (target < midV) {
          right = mid - 1
        } else {
          left = mid + 1
        }
      }
    }
  }
  return false
}
