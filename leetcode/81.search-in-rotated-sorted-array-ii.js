/*
 * @lc app=leetcode id=81 lang=javascript
 *
 * [81] Search in Rotated Sorted Array II
 *
 * https://leetcode.com/problems/search-in-rotated-sorted-array-ii/description/
 *
 * algorithms
 * Medium (32.49%)
 * Total Accepted:    157.8K
 * Total Submissions: 485.4K
 * Testcase Example:  '[2,5,6,0,0,1,2]\n0'
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown
 * to you beforehand.
 *
 * (i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).
 *
 * You are given a target value to search. If found in the array return true,
 * otherwise return false.
 *
 * Example 1:
 *
 *
 * Input: nums = [2,5,6,0,0,1,2], target = 0
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [2,5,6,0,0,1,2], target = 3
 * Output: false
 *
 * Follow up:
 *
 *
 * This is a follow up problem to Search in Rotated Sorted Array, where nums
 * may contain duplicates.
 * Would this affect the run-time complexity? How and why?
 *  0 1 2 3 4 5 6 7
 * [4,5,6,7,1,1,2,3] 2
 *  1 1 2 3 4 5 6 7
 *
 * [5,6,7,1,2,3,4] 3
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let length = nums.length;
  let k = 0;
  for (let i = 1; i < length; i++) {
    if (nums[i] < nums[i - 1]) {
      k = i;
    }
  }
  let left = k;
  let right = length - 1 + k;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    midV = nums[mid % length];
    if (midV === target) {
      return true;
    } else if (midV > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};
