/*
 * @lc app=leetcode id=130 lang=javascript
 *
 * [130] Surrounded Regions
 *
 * https://leetcode.com/problems/surrounded-regions/description/
 *
 * algorithms
 * Medium (21.98%)
 * Total Accepted:    135.9K
 * Total Submissions: 611.3K
 * Testcase Example:  '[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]'
 *
 * Given a 2D board containing 'X' and 'O' (the letter O), capture all regions
 * surrounded by 'X'.
 *
 * A region is captured by flipping all 'O's into 'X's in that surrounded
 * region.
 *
 * Example:
 *
 *
 * X X X X
 * X O O X   1,1  1,2   2,2  3,1
 * X X O X
 * X O X X
 *
 *
 * After running your function, the board should be:
 *
 *
 * X X X X
 * X X X X
 * X X X X
 * X O X X
 *
 *
 * Explanation:
 *
 * Surrounded regions shouldn’t be on the border, which means that any 'O' on
 * the border of the board are not flipped to 'X'. Any 'O' that is not on the
 * border and it is not connected to an 'O' on the border will be flipped to
 * 'X'. Two cells are connected if they are adjacent cells connected
 * horizontally or vertically.
 *
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  let rows = board.length
  if (rows < 2) {
    return
  }
  let columns = board[0].length
  if (columns < 2) {
    return
  }

  for (let i = 0; i < rows; i++) {
    marker(i, 0)
    marker(i, columns - 1)
  }
  for (let j = 0; j < columns; j++) {
    marker(0, j)
    marker(rows - 1, j)
  }

  for(let i = 0; i<rows; i++){
    for(let j = 0; j<columns;j++){
      if(board[i][j] === '*'){
        board[i][j] = 'O'
      }else if(board[i][j] === 'O'){
        board[i][j] = 'X'
      }
    }
  }

  function marker(i, j) {
    if (i < 0 || i > rows || j < 0 || j > columns || board[i][j] !== 'O') {
      return
    }
    board[i][j] = '*'
    if (i > 0 && board[i - 1][j] === 'O') {
      marker(i - 1, j)
    }
    if (i < rows - 1 && board[i + 1][j] === 'O') {
      marker(i + 1, j)
    }
    if (j > 0 && board[i][j - 1] === 'O') {
      marker(i, j - 1)
    }
    if (j < columns - 1 && board[i][j + 1] === 'O') {
      marker(i, j + 1)
    }
  }
}
