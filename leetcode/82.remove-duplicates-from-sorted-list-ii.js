/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * algorithms
 * Medium (32.04%)
 * Total Accepted:    168.6K
 * Total Submissions: 524.1K
 * Testcase Example:  '[1,2,3,3,4,4,5]'
 *
 * Given a sorted linked list, delete all nodes that have duplicate numbers,
 * leaving only distinct numbers from the original list.
 *
 * Example 1:
 *
 *
 * Input: 1->2->3->3->3->4->4->5
 * Output: 1->2->5
 *
 *
 * Example 2:
 *
 *
 * Input: 1->1->1->2->3
 * Output: 2->3
 *
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head || !head.next) {
    return head;
  }
  head = find(head, null);
  let i = head;
  while (i && i.next) {
    i.next = find(i.next, i.val);
    i = i.next;
  }
  return head;

  function find(i, pre) {
    if (!i) {
      return i;
    }
    while (i.next && (pre === i.val || i.next.val === i.val)) {
      pre = i.val;
      i = i.next;
    }
    if (i.val === pre) {
      return null;
    }
    return i;
  }
};
