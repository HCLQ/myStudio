/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 *
 * https://leetcode.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (38.89%)
 * Total Accepted:    218.8K
 * Total Submissions: 561.2K
 * Testcase Example:  '[1,1,2]'
 *
 * Given a collection of numbers that might contain duplicates, return all
 * possible unique permutations.
 *
 * Example:
 *
 *
 * Input: [1,1,2]
 * Output:
 * [
 * ⁠ [1,1,2],
 * ⁠ [1,2,1],
 * ⁠ [2,1,1]
 * ]
 *
 * [0,0,1,9]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let length = nums.length
  let result = []
  let map = {}
  nums.sort((a, b) => a - b)
  dfs(0)
  return result
  function dfs(start) {
    if (start === length) {
      //  待优化,但可行
      let key = nums.toString()
      if (!map[key]) {
        result.push(nums.slice())
        map[key] = 1
      }
    } else {
      for (let i = start; i < length; i++) {
        // 
        if (i !== start && (nums[i] === nums[i - 1] || nums[i] === nums[start])) {
            continue
        }
        swap(start, i)
        dfs(start + 1)
        swap(start, i)
      }
    }
  }
  function swap(i, j) {
    ;[nums[i], nums[j]] = [nums[j], nums[i]]
  }
}
