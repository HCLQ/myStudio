/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Medium (54.69%)
 * Total Accepted:    411.8K
 * Total Submissions: 747.7K
 * Testcase Example:  '[1,null,2,3]'
 *
 * Given a binary tree, return the inorder traversal of its nodes' values.
 *
 * Example:
 *
 *
 * Input: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 *
 * Output: [1,3,2]
 *
 * Follow up: Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let output = [];
  traversal(root)
  return output;
  function traversal(node) {
    if (node) {
      traversal(node.left);
      output.push(node.val);
      traversal(node.right);
    }
  }
};
