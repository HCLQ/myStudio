/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 *
 * https://leetcode.com/problems/triangle/description/
 *
 * algorithms
 * Medium (38.13%)
 * Total Accepted:    171.3K
 * Total Submissions: 445.2K
 * Testcase Example:  '[[2],[3,4],[6,5,7],[4,1,8,3]]'
 *
 * Given a triangle, find the minimum path sum from top to bottom. Each step
 * you may move to adjacent numbers on the row below.
 *
 * For example, given the following triangle
 *
 *
 * [
 * ⁠    [2],
 * ⁠   [3,4],
 * ⁠  [6,5,7],
 * ⁠ [4,1,8,3]
 * ]
 *
 *
 * The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
 *
 * Note:
 *
 * Bonus point if you are able to do this using only O(n) extra space, where n
 * is the total number of rows in the triangle.
 *
 * 
 * ✔ 43/43 cases passed (60 ms)
   ✔ Your runtime beats 84.19 % of javascript submissions
   ✔ Your memory usage beats 41.67 % of javascript submissions (35 MB)
 */
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  if(!triangle){
    return 0;
  }  
  let totalRows = triangle.length;
  if (totalRows === 0) {
    return 0;
  }
  let row;
  let last = triangle[0];
  for (let i = 1; i < totalRows; i++) {
    row = triangle[i];
    for (let j = 0, length = row.length; j < length; j++) {
        if(j === 0){
            row[j] += last[j]
        } else if(j === length - 1){
            row[j] += last[j - 1]
        } else {
            row[j] += Math.min(last[j - 1], last[j]);
        }
    }
    last = row;
  }

  if (last.length === 0) {
    return 0;
  }

  return last.reduce((a, b) => (a < b ? a : b)) || 0;
};
