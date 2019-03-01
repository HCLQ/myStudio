/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 *
 * https://leetcode.com/problems/word-search/description/
 *
 * algorithms
 * Medium (30.20%)
 * Total Accepted:    251.8K
 * Total Submissions: 829.2K
 * Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
 *
 * Given a 2D board and a word, find if the word exists in the grid.
 *
 * The word can be constructed from letters of sequentially adjacent cell,
 * where "adjacent" cells are those horizontally or vertically neighboring. The
 * same letter cell may not be used more than once.
 *
 * Example:
 *
 *
 * board =
 * [
 * ⁠ ['A','B','C','E'],
 * ⁠ ['S','F','C','S'],
 * ⁠ ['A','D','E','E']
 * ]
 *
 * Given word = "ABCCED", return true.
 * Given word = "SEE", return true.
 * Given word = "ABCB", return false.
 *
 *
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const find = (i, j, k) => {
      if(i < 0 || j < 0 || j >= (board[0]||[]).length || i >= board.length || board[i][j] !== word[k]) return false;

      if(k === word.length - 1) return true;

      board[i][j] = null;
      if([[0, 1], [0, -1], [1, 0], [-1, 0]]
         .some(([a, b]) => find(i + a, j + b, k + 1))) {
          return true;
      }
      
      board[i][j] = word[k];

      return false;
  }

  for (const i of board.keys()) {
      for (const j of board[i].keys()) {
          if(find(i, j, 0)) {
              return true;
          }
      }
  }

  return false;
};
