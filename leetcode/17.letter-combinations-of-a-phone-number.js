/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 *
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (40.10%)
 * Total Accepted:    340.4K
 * Total Submissions: 848.2K
 * Testcase Example:  '"23"'
 *
 * Given a string containing digits from 2-9 inclusive, return all possible
 * letter combinations that the number could represent.
 *
 * A mapping of digit to letters (just like on the telephone buttons) is given
 * below. Note that 1 does not map to any letters.
 *
 *
 *
 * Example:
 *
 *
 * Input: "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 *
 *
 * Note:
 *
 * Although the above answer is in lexicographical order, your answer could be
 * in any order you want.
 *
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
let letters = [
  '',
  '',
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
  ['m', 'n', 'o'],
  ['p', 'q', 'r', 's'],
  ['t', 'u', 'v'],
  ['w', 'x', 'y', 'z']
]
var letterCombinations = function(digits) {
  if (!digits || digits.length === 1) {
    return letters[digits] || []
  }
  const groups = digits.split('').map((key) => letters[key])

  return groups.reduce(combine)
  function combine(a, b) {
    let out = []
    for (let i = 0, length = a.length; i < length; i++) {
      for (let j = 0, length2 = b.length; j < length2; j++) {
        out.push(a[i] + b[j])
      }
    }
    return out
  }
}
// -----best-----
var letterCombinations = function(digits) {
  if (digits.length === 0) return []
  let combinations = ['']
  const digitToCharsMap = {
    2: 'abc'.split(''),
    3: 'def'.split(''),
    4: 'ghi'.split(''),
    5: 'jkl'.split(''),
    6: 'mno'.split(''),
    7: 'pqrs'.split(''),
    8: 'tuv'.split(''),
    9: 'wxyz'.split('')
  }

  digits.split('').forEach((digit) => {
    const possibleChars = digitToCharsMap[digit]
    const newCombinations = []
    combinations.forEach((combination) => {
      possibleChars.forEach((char) => {
        newCombinations.push(combination + char)
      })
    })

    combinations = newCombinations
  })

  return combinations
}
