/*
 * @lc app=leetcode id=95 lang=javascript
 *
 * [95] Unique Binary Search Trees II
 *
 * https://leetcode.com/problems/unique-binary-search-trees-ii/description/
 *
 * algorithms
 * Medium (34.61%)
 * Total Accepted:    128.6K
 * Total Submissions: 369.5K
 * Testcase Example:  '3'
 *
 * Given an integer n, generate all structurally unique BST's (binary search
 * trees) that store values 1 ... n.
 *
 * Example:
 *
 *
 * Input: 3
 * Output:
 * [
 * [1,null,3,2],
 * [3,2,null,1],
 * [3,1,null,null,2],
 * [2,1,3],
 * [1,null,2,null,3]
 * ]
 * Explanation:
 * The above output corresponds to the 5 unique BST's shown below:
 *
 * ⁠  1         3     3      2      1
 * ⁠   \       /     /      / \      \
 * ⁠    3     2     1      1   3      2
 * ⁠   /     /       \                 \
 * ⁠  2     1         2                 3
 *
 * 1 2 3
 * 1 3 2
 * 2 1 3
 * 2 3 1
 * 3 1 2
 * 3 2 1
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if (n === 0) {
    return [];
  }
  return maker(1, n);
  function maker(start, end) {
    let res = [];
    if (start > end) {
      return [null];
    }
    if (start == end) {
      return [new TreeNode(start)];
    }
    for (let i = start; i <= end; i++) {
      let left = maker(start, i - 1);
      let right = maker(i + 1, end);
      for (let l = 0, len1 = left.length; l < len1; l++) {
        for (let r = 0, len2 = right.length; r < len2; r++) {
          let node = new TreeNode(i);
          node.left = left[l];
          node.right = right[r];
          res.push(node);
        }
      }
    }
    return res;
  }
};
