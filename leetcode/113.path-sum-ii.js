/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
 *
 * https://leetcode.com/problems/path-sum-ii/description/
 *
 * algorithms
 * Medium (39.20%)
 * Total Accepted:    214.6K
 * Total Submissions: 543.2K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,5,1]\n22'
 *
 * Given a binary tree and a sum, find all root-to-leaf paths where each path's
 * sum equals the given sum.
 *
 * Note: A leaf is a node with no children.
 *
 * Example:
 *
 * Given the below binary tree and sum = 22,
 *
 *
 * ⁠     5
 * ⁠    / \
 * ⁠   4   8
 * ⁠  /   / \
 * ⁠ 11  13  4
 * ⁠/  \    / \
 * 7    2  5   1
 *
 *
 * Return:
 *
 *
 * [
 * ⁠  [5,4,11,2],
 * ⁠  [5,8,4,5]
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
 * @param {number} sum
 * @return {number[][]}
 */
// 头一次
// ✔ Accepted
//   ✔ 114/114 cases passed (76 ms)
//   ✔ Your runtime beats 86.26 % of javascript submissions
//   ✔ Your memory usage beats 76.27 % of javascript submissions (37.2 MB)
var pathSum = function(root, sum) {
  let output = [];
  dfs(root, 0, []);
  return output;

  function dfs(node, total, arr) {
    if (node) {
      total += node.val;
      if (total === sum) {
        if (!node.left && !node.right) {
          output.push([...arr, node.val]);
        }
      }
      arr.push(node.val);
      dfs(node.left, total, arr);
      dfs(node.right, total, arr);
      arr.pop();
    }
  }
};
