/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 *
 * https://leetcode.com/problems/subsets/description/
 *
 * algorithms
 * Medium (50.57%)
 * Total Accepted:    329.9K
 * Total Submissions: 648K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a set of distinct integers, nums, return all possible subsets (the
 * power set).
 *
 * Note: The solution set must not contain duplicate subsets.
 *
 * Example:
 *
 *
 * Input: nums = [1,2,3]
 * Output:
 * [
 * ⁠ [3],
 * [1],
 * [2],
 * [1,2,3],
 * [1,3],
 * [2,3],
 * [1,2],
 * []
 * ]
 *
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums = []) {
  let arr = []
  let output = [[]]
  let maxLength = nums.length
  let curlength = maxLength
  while (curlength > 0) {
    combine(0)
    curlength--
  }
  return output
  function combine(start) {
    if (arr.length === curlength) {
      return output.push(arr.slice())
    }
    for (let i = start; i < maxLength; i++) {
      arr.push(nums[i])
      combine(i + 1)
      arr.pop()
    }
  }
}
