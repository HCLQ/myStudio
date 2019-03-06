/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
 *
 * https://leetcode.com/problems/validate-binary-search-tree/description/
 *
 * algorithms
 * Medium (25.16%)
 * Total Accepted:    361K
 * Total Submissions: 1.4M
 * Testcase Example:  '[2,1,3]'
 *
 * Given a binary tree, determine if it is a valid binary search tree (BST).
 *
 * Assume a BST is defined as follows:
 *
 *
 * The left subtree of a node contains only nodes with keys less than the
 * node's key.
 * The right subtree of a node contains only nodes with keys greater than the
 * node's key.
 * Both the left and right subtrees must also be binary search trees.
 *
 *
 * Example 1:
 *
 *
 * Input:
 * ⁠   2
 * ⁠  / \
 * ⁠ 1   3
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * ⁠   5
 * ⁠  / \
 * ⁠ 1   4
 * / \
 * 3   6
 * Output: false
 * Explanation: The input is: [5,1,4,null,null,3,6]. The root node's
 * value
 * is 5 but its right child's value is 4.
 * [10,5,15,null,null,6,20] false
 *
 * [2,1,3,null,null,2,4]
 * 'root: 2 l:1 r:3\nroot: 1\nroot: 3 l:2 r:4\nroot: 2\nroot: 4'
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *
 *
 */
// let a = {
//   val: 5,
//   right: {
//     val: 6,
//     right: {
//       val: 7,
//       right: null,
//       left: null
//     },
//     left: { val: 3, right: null, left: null }
//   },
//   left: { val: 1, right: null, left: null }
// };
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  return f(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
  function f(root, min, max) {
    if (!root) {
      return true;
    }
    return inRange(root.val, min, max) && f(root.left, min, root.val) && f(root.right, root.val, max);
  }

  function inRange(v, start, end) {
    return v > start && v < end;
  }
};
