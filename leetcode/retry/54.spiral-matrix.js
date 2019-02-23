/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 *
 * https://leetcode.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (29.44%)
 * Total Accepted:    207.5K
 * Total Submissions: 703.1K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * Given a matrix of m x n elements (m rows, n columns), return all elements of
 * the matrix in spiral order.
 *
 * Example 1:
 *
 *
 * Input:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 4, 5, 6 ],
 * ⁠[ 7, 8, 9 ]
 * ]
 * Output: [1,2,3,6,9,8,7,4,5]
 *
 *
 * Example 2:
 *
 * Input:
 * [
 * ⁠ [1, 2, 3, 4],
 * ⁠ [5, 6, 7, 8],
 * ⁠ [9,10,11,12]
 * ]
 *  0   1   2   3   4   5    6   7   8   9  10  11
 * 0,0 0,1 0,2 0,3 1,3 2,3 2,2 2,1 2,0 1,0 1,1 1,2
 * Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 *
[1, 2, 3, 4],
[5, 6, 7, 8],
[9,10,11,12],
[13,14,15,16]
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix.length) {
    return []
  }
  let rows = matrix.length - 1
  let columns = matrix[0].length - 1
  if (rows == 0) {
    return matrix[0]
  }
  if (columns == 0) {
    return matrix.map((arr) => arr[0])
  }
  let output = []
  goRight(0, 0, rows, columns)
  return output

  function goRight(r, c, rMax, cMax) {
    let clength = cMax
    let rlength = rMax - 1
    while (clength >= 0) {
      output.push(matrix[r][c++])
      clength--
    }
    c--
    r++
    while (rlength >= 0) {
      output.push(matrix[r++][c])
      rlength--
    }
    r--
    rMax--
    cMax--
    c--
    if (rMax > 0 && cMax > 0) {
      goLeft(r, c, rMax, cMax)
    } else if (rMax > 0) {
      while (rMax >= 0) {
        output.push(matrix[r--][c])
        rMax--
      }
    } else {
      while (cMax >= 0) {
        output.push(matrix[r][c--])
        cMax--
      }
    }
  }

  function goLeft(r, c, rMax, cMax) {
    let clength = cMax
    let rlength = rMax - 1
    while (clength >= 0) {
      output.push(matrix[r][c--])
      clength--
    }
    c++
    r--
    while (rlength >= 0) {
      output.push(matrix[r--][c])
      rlength--
    }
    r++
    rMax--
    cMax--
    c++
    if (rMax > 0 && cMax > 0) {
      goRight(r, c, rMax, cMax)
    } else if (rMax > 0) {
      while (rMax >= 0) {
        output.push(matrix[r++][c])
        rMax--
      }
    } else {
      while (cMax >= 0) {
        output.push(matrix[r][c++])
        cMax--
      }
    }
  }
}
