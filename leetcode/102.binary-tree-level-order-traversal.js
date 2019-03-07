/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (46.72%)
 * Total Accepted:    338.8K
 * Total Submissions: 719.7K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the level order traversal of its nodes' values.
 * (ie, from left to right, level by level).
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
 * return its level order traversal as:
 *
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
 * ]
 *
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {
    return [];
  }
  root.l = 0;
  let output = [];
  let temp = [root];
  let cur;
  while (temp.length) {
    cur = temp.shift();
    if (!output[cur.l]) {
      output[cur.l] = [];
    }
    output[cur.l].push(cur.val);
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
