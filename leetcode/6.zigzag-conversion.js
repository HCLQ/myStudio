/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 *
 * https://leetcode.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (30.43%)
 * Total Accepted:    282.1K
 * Total Submissions: 926.9K
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number
 * of rows like this: (you may want to display this pattern in a fixed font for
 * better legibility)
 *
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 *
 *
 * And then read line by line: "PAHNAPLSIIGYIR"
 *
 * Write the code that will take a string and make this conversion given a
 * number of rows:
 *
 *
 * string convert(string s, int numRows);
 *
 * Example 1:
 *
 *
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 *
 * Example 2:
 *
 *
 * Input: s = "PAYPAL ISHIRI NG", numRows = 4
 * Output: "PIN ALSIGYAH RPI"
 *
 * Explanation:
 *
 * P     I     N
 * A   L S   I G
 * Y A   H R
 * P     I
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let totalLength = s.length
  if (numRows === 1 || totalLength < 2) {
    return s
  }
  // 以一整列和到下一整列之间的斜数据为一组
  // 每组中单独的的列项
  let gapColoumn = numRows - 2
  // 每组的总个数
  let groupLength = numRows + gapColoumn
  let times = totalLength / (numRows + gapColoumn)
  // 总共分了几个组
  let temp = parseInt(times)
  if (times > temp) {
    times = temp + 1
  }
  let strings = s.split('')

  let arr = []
  let lastRow = numRows - 1
  let val
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j <= times; j++) {
      // 整列中的数
      add(groupLength * j + i)
      if (i > 0 && i < lastRow) {
        // 分列中的数
        add(groupLength * (j + 1) - i)
      }
    }
  }
  return arr.join('')

  function add(i) {
    val = strings[i]
    if (val) {
      arr.push(val)
    }
  }
}

// ----best-----
// // P A Y P A L I S H I R  I  N  G
// // 0 1 2 3 4 5 6 7 8 9 10 11 12 13

// // P I N  | A L S I  G  | Y A H R  | P I
// // 0 6 12 | 1 5 7 11 13 | 2 4 8 10 | 3 9
// //        |             |          |
    
// // 1st row = # rows
// // 2nd row = # rows 

// // how many columns? 
// // 14 % 4 = 2  ---> last col has 2
// // floor(14 / 4 ) = 3 --> 3 columns



// // 14 % 3 = 2 --> last col has 2
// // floor (14/3) = 4 --> 4 columns
// // 


// first do cols of n + (n-2) 

// 4 + (4-2) = 6

// 0   p   i   n   // 0, 6, 12       i%6 == 0
// 1   a   s   g  // 1, 7, 13         i%6 == 1
// 2   y   h      // 2, 8              i%6 ==2
// 3   p   i     // 3, 9              i%6==3

//     a   r
//     l   i
    
 // place zigzags
// n =4
//     4 -- row 1 r = n-3 ---> addAmt =  2 (n-1-r) = 2(2)
//     2 -- row 2 r = n-2 ---> addAmt = 2 (n-1-r) = 2(1)
// -2 each time (go two closer to each other)
// a -> l 
// y -> a

// rows 1->n-1: add n to find next idx, -2 each time
/*
var convert = function(s, numRows) {
    if (numRows == 1) return s
    
    let numLongRows = numRows + (numRows-2)
    let ans = ''
    let addAmt = numRows
    
    for (let r = 0; r < numRows; r++) {
        let addAmt = 2 * (numRows - 1 - r)
        for (let i = r; i < s.length; i+=numLongRows) {
            // if (i % numLongRows == r) {
                ans += s[i]
                if (r != 0 && r != numRows-1) {
                    let j = i + addAmt
                    if (j < s.length) ans += s[j]
                }
            // }
        }
    }
    return ans
};
*/