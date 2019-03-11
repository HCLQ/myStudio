/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 *
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (39.12%)
 * Total Accepted:    203K
 * Total Submissions: 512.5K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * Given preorder and inorder traversal of a tree, construct the binary tree.
 *
 * Note:
 * You may assume that duplicates do not exist in the tree.
 *
 * For example, given
 *
 *
 * preorder = [3,9,20,15,7]
 * inorder = [9,3,15,20,7]
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
 *          3
 *      4       5
 *   6       7      8
 *
 * pn: [3,4,6,5,7,8]
 * in: [6,4,3,7,5,8]
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder || !inorder) {
    return null;
  }
  let pLength = preorder.length;
  if (pLength < 1) {
    return null;
  }
  return make(0, 0, inorder.length - 1);
  function make(pLeft, iLeft, iRight) {
    if (pLeft > pLength - 1 || iLeft > iRight) {
      return null;
    }
    let rootValue = preorder[pLeft];
    let root = new TreeNode(rootValue);
    let index = inorder.indexOf(rootValue);
    root.left = make(pLeft + 1, iLeft, index - 1);
    // 跳过左子树的节点
    root.right = make(pLeft + index - iLeft + 1, index + 1, iRight);
    return root;
  }
};
