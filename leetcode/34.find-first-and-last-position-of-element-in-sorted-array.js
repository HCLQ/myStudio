/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 *
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (32.86%)
 * Total Accepted:    264.2K
 * Total Submissions: 803.2K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * Given an array of integers nums sorted in ascending order, find the starting
 * and ending position of a given target value.
 *
 * Your algorithm's runtime complexity must be in the order of O(log n).
 *
 * If the target is not found in the array, return [-1, -1].
 *
 * Example 1:
 *
 *
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 *
 * Example 2:
 *
 *
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let length = nums.length
  let lo = 0
  let hi = length - 1
  if (length > 1) {
    // 这里要 <= 防止漏掉lo == hi时的 mid值判断
    while (lo <= hi) {
      // 去重的时候要lo< hi 如果 lo === hi时 而lo+1又和lo相同又往后走导致lo>hi了 则又漏了判断
      while (lo < hi && nums[lo] === nums[lo + 1]) lo++
      while (lo < hi && nums[hi] === nums[hi - 1]) hi--
      let mid = Math.floor((lo + hi) / 2)
      let midV = nums[mid]
      if (midV === target) {
        let left = mid
        let right = mid
        while (left > 0 && nums[left] === nums[left - 1]) left--
        while (right < length - 1 && nums[right] === nums[right + 1]) right++
        return [left, right]
      } else if (midV < target) {
        lo = mid + 1
      } else {
        hi = mid - 1
      }
    }
  } else if (nums[0] === target) {
    return [0, 0]
  }

  return [-1, -1]
}
