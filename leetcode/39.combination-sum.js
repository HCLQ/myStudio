/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 *
 * https://leetcode.com/problems/combination-sum/description/
 *
 * algorithms
 * Medium (46.30%)
 * Total Accepted:    301K
 * Total Submissions: 648.2K
 * Testcase Example:  '[2,3,6,7]\n7'
 *
 * Given a set of candidate numbers (candidates) (without duplicates) and a
 * target number (target), find all unique combinations in candidates where the
 * candidate numbers sums to target.
 *
 * The same repeated number may be chosen from candidates unlimited number of
 * times.
 *
 * Note:
 *
 *
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 *
 *
 * Example 1:
 *
 *
 * Input: candidates = [2,3,6,7], target = 7,
 * A solution set is:
 * [
 * ⁠ [7],
 * ⁠ [2,2,3]
 * ]
 *
 *
 * Example 2:
 *
 *
 * Input: candidates = [2,3,5], target = 8,
 * A solution set is:
 * [
 * [2,2,2,2],
 * [2,3,3],
 * [3,5]
 * ]
 *              2             3       5
 *       2      3     5    3     5         5
 *    2  3  5
 *  2 3 5
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let output = []
  let max = candidates.length
  candidates.sort((a,b) => a-b)
  deep(0)
  return output
  function deep(i, sum = 0, arr = []) {
    while (i < max) {
      if (sum + candidates[i] === target) {
        arr.push(candidates[i])
        output.push(arr)
        return
      } else if (sum + candidates[i] < target) {
        deep(i, sum + candidates[i], [...arr, candidates[i]])
        i++
      } else {
        return
      }
    }
  }
}
