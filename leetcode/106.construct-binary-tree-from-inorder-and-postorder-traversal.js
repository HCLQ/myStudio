/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
 *
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (37.67%)
 * Total Accepted:    142.3K
 * Total Submissions: 373.7K
 * Testcase Example:  '[9,3,15,20,7]\n[9,15,7,20,3]'
 *
 * Given inorder and postorder traversal of a tree, construct the binary tree.
 *
 * Note:
 * You may assume that duplicates do not exist in the tree.
 *
 * For example, given
 *
 *
 * inorder = [9,3,15,20,7]
 * postorder = [9,15,7,20,3]
 *
 * Return the following binary tree:
 *
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
// 和先序遍历反过来 从末尾找根
var buildTree = function(inorder, postorder) {
  if (!inorder || !inorder.length) {
    return null;
  }
  return maker(postorder.length - 1, 0, inorder.length - 1);
  function maker(pRight, iLeft, iRight) {
    if (pRight < 0 || iLeft > iRight) {
      return null;
    }
    const root = new TreeNode(postorder[pRight]);
    const index = inorder.indexOf(postorder[pRight]);
    root.left = maker(pRight - (iRight - index + 1), iLeft, index - 1);
    root.right = maker(pRight - 1, index + 1, iRight);
    return root;
  }
};
