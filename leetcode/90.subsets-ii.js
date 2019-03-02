/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 *
 * https://leetcode.com/problems/subsets-ii/description/
 *
 * algorithms
 * Medium (41.23%)
 * Total Accepted:    188.5K
 * Total Submissions: 455.1K
 * Testcase Example:  '[1,2,2]'
 *
 * Given a collection of integers that might contain duplicates, nums, return
 * all possible subsets (the power set).
 *
 * Note: The solution set must not contain duplicate subsets.
 *
 * Example:
 *
 *
 * Input: [1,2,2]
 * Output:
 * [
 * ⁠ [2],
 * ⁠ [1],
 * ⁠ [1,2,2],
 * ⁠ [2,2],
 * ⁠ [1,2],
 * ⁠ []
 * ]
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  if (nums.length < 2) {
    return nums.length === 0 ? [[]] : [[], nums];
  }
  nums.sort((a, b) => a - b);
  let output = [nums, []];
  let temp = [];
  let length = nums.length;
  let max = length - 1;
  while (max > 0) {
    combine(0);
    max--;
  }
  return output;

  function combine(start) {
    if (temp.length === max) {
      output.push(temp.slice());
      return;
    }
    for (let i = start; i < length; i++) {
      temp.push(nums[i]);
      combine(i + 1);
      temp.pop();
      while (i < length - 1 && nums[i] === nums[i + 1]) i++;
    }
  }
};
