/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
 *
 * https://leetcode.com/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (33.85%)
 * Total Accepted:    179.2K
 * Total Submissions: 526.5K
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * Reverse a linked list from position m to n. Do it in one-pass.
 *
 * Note: 1 ≤ m ≤ n ≤ length of list.
 *
 * Example:
 *
 *
 * Input: 1->2->3->4->5->NULL, m = 2, n = 4
 * Output: 1->4->3->2->5->NULL
 *      pre  c
 * n -> 1 -> 2 -> 3 -> 4 ->5 -> null
 * n -> 1 -> 3 -> 2 -> 4 ->5 -> null
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  if (m == n || !head || !head.next) {
    return head;
  }
  let newHead = new ListNode();
  newHead.next = head;
  let pre = newHead;
  let cur = head;
  let k = m;
  k--;
  while (k > 0) {
    pre = cur;
    cur = cur.next;
    k--;
  }
  pre.next = reverseList(cur, n - m);
  return newHead.next;

  function reverseList(i, time) {
    let head = i;
    let preH = i;
    let temp;
    while (i && i.next && time > 0) {
      time--;
      preH = i.next;
      temp = preH.next;
      preH.next = head;
      i.next = temp;
      head = preH;
    }
    return head;
  }
};
