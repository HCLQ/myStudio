/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
 *
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * algorithms
 * Medium (40.20%)
 * Total Accepted:    197K
 * Total Submissions: 486.3K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the zigzag level order traversal of its nodes'
 * values. (ie, from left to right, then right to left for the next level and
 * alternate between).
 *
 *
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 *
 *
 * return its zigzag level order traversal as:
 *
 * [
 * ⁠ [3],
 * ⁠ [20,9],
 * ⁠ [15,7]
 * ]
 * 0 1 2 3 4 5 6
 *       n
 *    /     \
 * 2n + 1    2n+2
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) {
    return [];
  }
  root.l = 0;
  let temp = [root];
  let output = [];
  let cur;
  while (temp.length) {
    cur = temp.shift();
    if (!output[cur.l]) {
      output[cur.l] = [];
    }
    if (cur.l % 2) {
      output[cur.l].unshift(cur.val);
    } else {
      output[cur.l].push(cur.val);
    }
    if (cur.left) {
      cur.left.l = cur.l + 1;
      temp.push(cur.left);
    }
    if (cur.right) {
      cur.right.l = cur.l + 1;
      temp.push(cur.right);
    }
  }
  return output;
};
