/*
 * @lc app=leetcode id=654 lang=javascript
 *
 * [654] Maximum Binary Tree
 *
 * https://leetcode.com/problems/maximum-binary-tree/description/
 *
 * algorithms
 * Medium (71.77%)
 * Total Accepted:    65.5K
 * Total Submissions: 90.9K
 * Testcase Example:  '[3,2,1,6,0,5]'
 *
 *
 * Given an integer array with no duplicates. A maximum tree building on this
 * array is defined as follow:
 *
 * The root is the maximum number in the array.
 * The left subtree is the maximum tree constructed from left part subarray
 * divided by the maximum number.
 * The right subtree is the maximum tree constructed from right part subarray
 * divided by the maximum number.
 *
 *
 *
 *
 * Construct the maximum tree by the given array and output the root node of
 * this tree.
 *
 *
 * Example 1:
 *
 * Input: [3,2,1,6,0,5]
 * Output: return the tree root node representing the following tree:
 *
 * ⁠     6
 * ⁠   /   \
 * ⁠  3     5
 * ⁠   \    /
 * ⁠    2  0
 * ⁠      \
 * ⁠       1
 *
 *
 *
 * Note:
 *
 * The size of the given array will be in the range [1,1000].
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  return makeTree(nums)
}
function makeTree(arr) {
  if (arr && arr.length) {
    let { max, index } = findMax(arr)
    let rootNode = new TreeNode(max)
    rootNode.left = makeTree(arr.slice(0, index))
    rootNode.right = makeTree(arr.slice(index + 1))
    return rootNode
  }
  return null
}
function findMax(arr) {
  let max = -Infinity
  let index = -1
  arr.forEach((v, i) => {
    if (v > max) {
      max = v
      index = i
    }
  })
  return {
    max,
    index
  }
}
