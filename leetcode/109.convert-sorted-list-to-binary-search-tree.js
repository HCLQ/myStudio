/*
 * @lc app=leetcode id=109 lang=javascript
 *
 * [109] Convert Sorted List to Binary Search Tree
 *
 * https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/description/
 *
 * algorithms
 * Medium (39.32%)
 * Total Accepted:    165.6K
 * Total Submissions: 417.2K
 * Testcase Example:  '[-10,-3,0,5,9]'
 *
 * Given a singly linked list where elements are sorted in ascending order,
 * convert it to a height balanced BST.
 *
 * For this problem, a height-balanced binary tree is defined as a binary tree
 * in which the depth of the two subtrees of every node never differ by more
 * than 1.
 *
 * Example:
 *
 *
 * Given the sorted linked list: [-10,-3,0,5,9],
 *
 * One possible answer is: [0,-3,9,-10,null,5], which represents the following
 * height balanced BST:
 *
 * ⁠     0
 * ⁠    / \
 * ⁠  -3   9
 * ⁠  /   /
 * ⁠-10  5
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
// 核心在于快慢指针 因为是顺序的链表 要平衡 只需要找到链表的中间值作为root
var sortedListToBST = function(head) {
  if (!head) {
    return null;
  }
  return maker(head, null);

  function maker(header, tail) {
    if (header === tail) {
      return null;
    }
    // 快慢指针遍历链表, 快的每次走2步 慢的走一步 这样当快的到末尾时 慢的正好是中心位置
    let fast = header;
    let slow = header;
    while (fast !== tail && fast.next !== tail) {
      slow = slow.next;
      fast = fast.next.next;
    }
    let root = new TreeNode(slow.val);
    root.right = maker(slow.next, tail);
    root.left = maker(header, slow);
    return root;
  }
};
