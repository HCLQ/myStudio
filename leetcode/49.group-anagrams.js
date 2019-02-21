/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 *
 * https://leetcode.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (44.35%)
 * Total Accepted:    292.9K
 * Total Submissions: 658.1K
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * Given an array of strings, group anagrams together.
 *
 * Example:
 *
 *
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * Output:
 * [
 * ⁠ ["ate","eat","tea"],
 * ⁠ ["nat","tan"],
 * ⁠ ["bat"]
 * ]
 *
 * Note:
 *
 *
 * All inputs will be in lowercase.
 * The order of your output does not matter.
 *
 *
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let group = {}
  let current
  let key
  for (let i = 0, length = strs.length; i < length; i++) {
    current = strs[i]
    key = mergeSort(current.split('')).join('')
    if (group[key]) {
      group[key].push(current)
    } else {
      group[key] = [current]
    }
  }
  return Object.values(group)
}
function mergeSort(arr) {
  let temp = []
  return sort(arr, 0, arr.length - 1)
  function sort(arr, lo, hi) {
    if (lo < hi) {
      const mid = Math.floor((lo + hi) / 2)
      sort(arr, lo, mid)
      sort(arr, mid + 1, hi)
      merge(arr, lo, mid, hi)
    }
    return arr
  }

  function merge(arr, lo, mid, hi) {
    let k = 0
    let i = lo
    let j = mid + 1
    while (true) {
      if (arr[i] < arr[j]) {
        temp[k++] = arr[i++]
        if (i > mid) {
          while (j <= hi) temp[k++] = arr[j++]
          break
        }
      } else {
        temp[k++] = arr[j++]
        if (j > hi) {
          while (i <= mid) temp[k++] = arr[i++]
          break
        }
      }
    }

    k = 0
    while (lo <= hi) arr[lo++] = temp[k++]
  }
}
