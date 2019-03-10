/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
 *
 * https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/
 *
 * algorithms
 * Medium (40.83%)
 * Total Accepted:    221.6K
 * Total Submissions: 537.8K
 * Testcase Example:  '[1,2,5,3,4,null,6]'
 *
 * Given a binary tree, flatten it to a linked list in-place.
 *
 * For example, given the following tree:
 *
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   5
 * ⁠/ \   \
 * 3   4   6
 *
 *
 * The flattened tree should look like:
 *
 *
 * 1
 * ⁠\
 * ⁠ 2
 * ⁠  \
 * ⁠   3
 * ⁠    \
 * ⁠     4
 * ⁠      \
 * ⁠       5
 * ⁠        \
 * ⁠         6
 *
 *        1
 *     2
 *   3   4
 * 5
 *      [1,2,null,3,4,5]
 *
 *        5
 *     1     6
 *         3     7
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
// will do better
// ✔ Accepted
//   ✔ 225/225 cases passed (68 ms)
//   ✔ Your runtime beats 79.76 % of javascript submissions
//   ✔ Your memory usage beats 41.03 % of javascript submissions (35.5 MB)
var flatten = function(root) {
  if (!root) {
    return root;
  }
  let temp = new TreeNode();
  dfs(root);
  function dfs(node) {
    if (node) {
      let right = node.right;
      temp.right = node;
      temp = node;
      dfs(node.left);
      node.left = null;
      dfs(right);
    }
  }
};
// 理解错了 还做了排序 实际只需要深度遍历成序列
// var flatten = function(root) {
//   if (!root) {
//     return root;
//   }
//   let header = new TreeNode();
//   let temp = [root];
//   let node;
//   while ((node = temp.shift())) {
//     node.left && temp.push(node.left);
//     node.right && temp.push(node.right);
//     node.left = null;
//     node.right = null;
//     let h = header;
//     while (h) {
//       if ((h.right && node.val < h.right.val) || !h.right) {
//         node.right = h.right;
//         h.right = node;
//         break;
//       } else {
//         h = h.right;
//       }
//     }
//   }
// };
