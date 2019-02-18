/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
 *
 * https://leetcode.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (42.84%)
 * Total Accepted:    276.6K
 * Total Submissions: 644.8K
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given a linked list, swap every two adjacent nodes and return its head.
 *
 * You may not modify the values in the list's nodes, only nodes itself may be
 * changed.
 *
 *
 *
 * Example:
 *
 *
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 * i  j
 * 1->2->3->4
 * j  i
 * 2->1->4->3
 *       i  j
 * 2->1->4->3
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
var swapPairs = function(head) {
  if (!head||!head.next) {
    return head
  }
  let newHead = head.next
  let i = head
  let j
  let pre
  while (i) {
    j = i.next
    if (j) {
      if (pre){
        pre.next = j
      }
      i.next = j.next
      j.next = i
    }
    pre = i
    i = i.next
  }
  return newHead
}
