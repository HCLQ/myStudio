/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 *
 * https://leetcode.com/problems/spiral-matrix-ii/description/
 *
 * algorithms
 * Medium (45.07%)
 * Total Accepted:    126.7K
 * Total Submissions: 280.4K
 * Testcase Example:  '3'
 *
 * Given a positive integer n, generate a square matrix filled with elements
 * from 1 to n2 in spiral order.
 *
 * Example:
 *
 *
 * Input: 3
 * Output:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 8, 9, 4 ],
 * ⁠[ 7, 6, 5 ]
 * ]
 *
 *
[
  [ 1,  2,  3,  4, 5],
  [16, 17, 18, 19, 6],
  [15, 24, 25, 20, 7],
  [14, 23, 22, 21, 8],
  [13, 12, 11, 10, 9],
]
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let output = []
  for (let i = 0; i < n; i++) output.push([])
  let c1 = 0
  let c2 = n - 1
  let r1 = 0
  let r2 = n - 1
  let i = 1
  while (r1 <= r2 && c1 <= c2) {
    for (let c = c1; c <= c2; c++) output[r1][c] = i++
    for (let r = r1 + 1; r <= r2; r++) output[r][c2] = i++
    if (c2 > c1 && r2 > r1) {
      for (let c = c2 - 1; c > c1; c--) output[r2][c] = i++
      for (let r = r2; r > r1; r--) output[r][c1] = i++
    }
    r1++
    r2--
    c1++
    c2--
  }
  return output
}
