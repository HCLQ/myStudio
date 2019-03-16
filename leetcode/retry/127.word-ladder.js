/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 *
 * https://leetcode.com/problems/word-ladder/description/
 *
 * algorithms
 * Medium (22.67%)
 * Total Accepted:    236.1K
 * Total Submissions: 1M
 * Testcase Example:  '"hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]'
 *
 * Given two words (beginWord and endWord), and a dictionary's word list, find
 * the length of shortest transformation sequence from beginWord to endWord,
 * such that:
 *
 *
 * Only one letter can be changed at a time.
 * Each transformed word must exist in the word list. Note that beginWord is
 * not a transformed word.
 *
 *
 * Note:
 *
 *
 * Return 0 if there is no such transformation sequence.
 * All words have the same length.
 * All words contain only lowercase alphabetic characters.
 * You may assume no duplicates in the word list.
 * You may assume beginWord and endWord are non-empty and are not the same.
 *
 *
 * Example 1:
 *
 *
 * Input:
 * beginWord = "hit",
 * endWord = "cog",
 * wordList = ["hot","dot","dog","lot","log","cog"]
 *
 * Output: 5
 *
 * Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" ->
 * "dog" -> "cog",
 * return its length 5.
 *
 *
 * Example 2:
 *
 *
 * Input:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log"]
 *
 * Output: 0
 *
 * Explanation: The endWord "cog" is not in wordList, therefore no possible
 * transformation.
 *
 *
 *
 *
 */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) {
    return 0;
  }
  let reached = [beginWord];
  let a = 'a'.charCodeAt(0);
  let z = 'z'.charCodeAt(0);
  let length = 1;
  // 两个都遍历完
  while (!reached.includes(endWord)) {
    let temp = [];
    for (let cur of reached) {
      for (let i = 0, l = cur.length; i < l; i++) {
        let arr = cur.split('');
        for (let j = a; j <= z; j++) {
          arr[i] = String.fromCharCode(j);
          let index = wordList.indexOf(arr.join(''));
          if (index > -1) {
            temp.push(wordList.splice(index, 1)[0]);
            if (!wordList.length) {
              break;
            }
          }
        }
      }
    }
    length++;
    if (temp.length === 0) {
      return 0;
    }
    reached = temp;
  }
  return length;
};
