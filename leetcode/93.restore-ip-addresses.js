/*
 * @lc app=leetcode id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 *
 * https://leetcode.com/problems/restore-ip-addresses/description/
 *
 * algorithms
 * Medium (30.55%)
 * Total Accepted:    130.2K
 * Total Submissions: 424.1K
 * Testcase Example:  '"25525511135"'
 *
 * Given a string containing only digits, restore it by returning all possible
 * valid IP address combinations.
 *
 * Example:
 *
 *
 * Input: "25525511135"
 * Output: ["255.255.11.135", "255.255.111.35"]
 *
 *
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  if (!s || s.length < 4) {
    return [];
  }
  let num;
  let output = [];
  let temp = [];
  let length = s.length;
  combine(0);
  return output;
  function combine(start) {
    if (temp.length === 4) {
      if (start >= length) {
        output.push(temp.slice().join('.'));
      }
      return;
    }
    for (let j = 1; j <= 3 && j + start - 1 < length; j++) {
      num = valid(start, j);
      if (num) {
        temp.push(num);
        combine(start + j);
        temp.pop();
      } else {
        return;
      }
    }
  }
  function valid(i, j) {
    let str = +s.substr(i, j)+"";
    if (str.length === j && str < 256) {
      return str;
    }
  }
};
