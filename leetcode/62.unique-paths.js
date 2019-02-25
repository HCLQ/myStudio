/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 *
 * https://leetcode.com/problems/unique-paths/description/
 *
 * algorithms
 * Medium (46.11%)
 * Total Accepted:    258.1K
 * Total Submissions: 557.8K
 * Testcase Example:  '3\n2'
 *
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in
 * the diagram below).
 *
 * The robot can only move either down or right at any point in time. The robot
 * is trying to reach the bottom-right corner of the grid (marked 'Finish' in
 * the diagram below).
 *
 * How many possible unique paths are there?
 *
 *
 * Above is a 7 x 3 grid. How many possible unique paths are there?
 *
 * Note: m and n will be at most 100.
 *
 * Example 1:
 *
 *
 * Input: m = 3, n = 2
 * Output: 3
 * Explanation:
 * From the top-left corner, there are a total of 3 ways to reach the
 * bottom-right corner:
 * 1. Right -> Right -> Down
 * 2. Right -> Down -> Right
 * 3. Down -> Right -> Right
 *
 *
 * Example 2:
 *
 *
 * Input: m = 7, n = 3
 * Output: 28
 *
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 1
// var uniquePaths = function(m, n) {
//   let arr = []
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (!arr[i]) {
//         arr[i] = []
//       }
//       if (i === 0) {
//         arr[i][j] = 1
//       } else if (j === 0) {
//         arr[i][j] = 1
//       } else {
//         arr[i][j] = arr[i - 1][j] + arr[i][j - 1]
//       }
//     }
//   }
//   return arr[m - 1][n - 1]
// }
// 在 1中 发现 实际上每次只需要知道 i - 1, j 和 i , j - 1 两列的数据
// 因此不需要保存整个数组的数据 只需要保存 上两列的数据即可
// var uniquePaths = function(m, n) {
//   if (m > n) return uniquePaths(n, m) //  让保存的空间
//   let pre = new Array(m).fill(1)
//   let cur = new Array(m).fill(1)
//   let temp
//   for (let j = 1; j < n; j++) {
//     for (let i = 1; i < m; i++) {
//       cur[i] = cur[i - 1] + pre[i]
//       // cur[i][j] = cur[i-1][j]  +  cur[i][j-1]
//     }
//     temp = pre
//     pre = cur
//     cur = temp
//   }
//   return pre[m - 1]
// }
// best
var uniquePaths = function(m, n) {
  if (m > n) return uniquePaths(n, m)
  let cur = new Array(n).fill(1)
  for (let j = 1; j < n; j++) {
    for (let i = 1; i < m; i++) {
      cur[i] += cur[i - 1]
    }
  }
  return cur[m - 1]
}
// m和n最大到100 递归过多, 不可行
// var uniquePaths = function(m, n) {
//   let i = m - 1
//   let j = n - 1
//   let total = 0
//   go(0, 0)
//   return total
//   function go(r, d) {
//     if (r === i && d === j) {
//       total++
//       return
//     } else if (r < m && d < n) {
//       go(r + 1, d)
//       go(r, d + 1)
//     }
//   }
// }
