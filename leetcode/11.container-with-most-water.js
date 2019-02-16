/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 *
 * https://leetcode.com/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (42.17%)
 * Total Accepted:    311.1K
 * Total Submissions: 737.4K
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * Given n non-negative integers a1, a2, ..., an , where each represents a
 * point at coordinate (i, ai). n vertical lines are drawn such that the two
 * endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together
 * with x-axis forms a container, such that the container contains the most
 * water.
 *
 * Note: You may not slant the container and n is at least 2.
 *
 *
 *
 *
 *
 * The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In
 * this case, the max area of water (blue section) the container can contain is
 * 49.
 *
 *
 *
 * Example:
 *
 *
 * Input: [1,8,6,2,5,4,8,3,7]
 * Output: 49
 *
 */
/**
 * @param {number[]} height
 * @return {number}
 */
// 想到要双指针,但不清楚为何这么遍历,猜测如下:
// 纵观全局, 左和右的组合里 会有 矮矮 矮高 高矮 矮矮 四种组合
// 两边都是矮的面积肯定没有必要计算 因为大概率面积不大
// 所以每次都是必然左边或右边必然有一处已是遍历中最高的存在与另一边的遍历组合计算最大面积, 取所以计算中最大的值就是最大面积
// 
var maxArea = function(height) {
  let length = height.length
  let left = 0
  let right = length - 1
  let max = 0
  while (right > left) {
    max = Math.max(max, getArea())
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return max
  function getArea() {
    return (right - left) * Math.min(height[right], height[left])
  }
}
