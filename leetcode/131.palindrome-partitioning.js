/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 *
 * https://leetcode.com/problems/palindrome-partitioning/description/
 *
 * algorithms
 * Medium (39.31%)
 * Total Accepted:    155.5K
 * Total Submissions: 389K
 * Testcase Example:  '"aab"'
 *
 * Given a string s, partition s such that every substring of the partition is
 * a palindrome.
 *
 * Return all possible palindrome partitioning of s.
 *
 * Example:
 *
 *
 * Input: "aab"
 * Output:
 * [
 * ⁠ ["aa","b"],
 * ⁠ ["a","a","b"]
 * ]
 *
 */
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  if (!s) {
    return s
  }
  const max = s.length - 1
  let output = []
  let temp = []
  backTrack(0)
  return output
  function backTrack(left) {
    if (temp.length && left > max) {
      output.push(temp.slice())
    }
    for (let i = left; i <= max; i++) {
      if (isPalind(s, left, i)) {
        if (left == i) {
          temp.push(s[i])
        } else {
          temp.push(s.substring(left, i + 1))
        }
        backTrack(i + 1)
        temp.pop()
      }
    }
  }
}

function isPalind(str, l, r) {
  if (l === r) {
    return true
  }
  while (l <= r) {
    if (str[l] !== str[r]) {
      return false
    }
    l++
    r--
  }
  return true
}
