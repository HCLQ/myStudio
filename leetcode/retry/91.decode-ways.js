/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 *
 * https://leetcode.com/problems/decode-ways/description/
 *
 * algorithms
 * Medium (21.77%)
 * Total Accepted:    238.2K
 * Total Submissions: 1.1M
 * Testcase Example:  '"12"'
 *
 * A message containing letters from A-Z is being encoded to numbers using the
 * following mapping:
 *
 *
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 *
 *
 * Given a non-empty string containing only digits, determine the total number
 * of ways to decode it.
 *
 * Example 1:
 *
 *
 * Input: "12"
 * Output: 2
 * Explanation: It could be decoded as "AB" (1 2) or "L" (12).
 *
 *
 * Example 2:
 *
 *
 * Input: "226"
 * Output: 3
 * Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2
 * 6).
 *
 * 226
 * 22 6
 * 2 26
 *
 * 2222
 * 2 2 2 2
 * 22 2 2
 * 22 22
 * 2 22 2
 * 2 2 22
 */
/**
 * @param {string} s
 * @return {number}
 */
// var numDecodings = function(s) {
//   if (!s || +s === 0) {
//     return 0;
//   }
//   let count = 1;
//   let length = s.length - 1;
//   countStr(0, '');
//   return count;

//   function countStr(start) {
//     for (let i = start; i < length; i++) {
//       if (s[i] + s[i + 1] <= 26) {
//         count++;
//         countStr(i + 2);
//       }
//     }
//   }
// };
var numDecodings = function(s) {
  let length = s.length;
  let way2 = 1;
  let way1 = s[length - 1] === '0' ? 0 : 1;
  let cur = way1;
  for (let i = length - 2; i >= 0; i--) {
    if (s[i] === '0') {
      cur = 0;
    } else {
      cur = (s[i] + s[i + 1]) < 27 ? way1 + way2 : way1;
    }
    way2 = way1;
    way1 = cur;
  }
  return cur;
};
