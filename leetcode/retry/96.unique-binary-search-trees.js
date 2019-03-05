/*
 * @lc app=leetcode id=96 lang=javascript
 *
 * [96] Unique Binary Search Trees
 *
 * https://leetcode.com/problems/unique-binary-search-trees/description/
 *
 * algorithms
 * Medium (44.84%)
 * Total Accepted:    185.6K
 * Total Submissions: 411.4K
 * Testcase Example:  '3'
 *
 * Given n, how many structurally unique BST's (binary search trees) that store
 * values 1 ... n?
 *
 * Example:
 *
 *
 * Input: 3
 * Output: 5
 * Explanation:
 * Given n = 3, there are a total of 5 unique BST's:
 *
 * ⁠  1         3     3      2      1
 * ⁠   \       /     /      / \      \
 * ⁠    3     2     1      1   3      2
 * ⁠   /     /       \                 \
 * ⁠  2     1         2                 3
 *
 *
 */
/**
 * @param {number} n
 * @return {number}
 */
// 设函数 f (i,n)为 以i为root的 1- i-1为左子树 i+i - n为右子树的二叉树总数
// g(n) = f(1,n) + f(2,n) + ...f(n,n)
// [1,2,3,4,5,6,7] 设此时 f(3,6) 相当于g(2)*g(4)
// f(i, n) = g(i-1) * g(n-i)	1 <= i <= n 
// g(n) = g(0) * g(n-1) + g(1) * g(n-2) + … + g(n-1) * g(0)
var numTrees = function(n) {
  let G = [0, 1];
  for (let i = 2; i <= n; ++i) {
    for (let j = 1; j <= i; ++j) {
      G[i] += G[j - 1] * G[i - j];
    }
  }
  return G[n];
};
