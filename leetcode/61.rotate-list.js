/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
 *
 * https://leetcode.com/problems/rotate-list/description/
 *
 * algorithms
 * Medium (26.35%)
 * Total Accepted:    176.8K
 * Total Submissions: 668.9K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, rotate the list to the right by k places, where k is
 * non-negative.
 *
 * Example 1:
 *
 *
 * Input: 1->2->3->4->5->NULL, k = 2
 * Output: 4->5->1->2->3->NULL
 * Explanation:
 * rotate 1 steps to the right: 5->1->2->3->4->NULL
 * rotate 2 steps to the right: 4->5->1->2->3->NULL
 *
 * 1 -> 2 - > 3
 *          |
 *      5 < - 4
 * Example 2:
 *
 *
 * Input: 0->1->2->NULL, k = 4
 * Output: 2->0->1->NULL
 * Explanation:
 * rotate 1 steps to the right: 2->0->1->NULL
 * rotate 2 steps to the right: 1->2->0->NULL
 * rotate 3 steps to the right: 0->1->2->NULL
 * rotate 4 steps to the right: 2->0->1->NULL
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 *
 */
/**
 *
 * myPoint:
 * 长度为n 逆时针走k  = 顺时针走 n - k%n
 * 假定i->头 j->尾 尾连上头 i 和 j一起往前位移   n - k%n处 此时的 j 就是新的尾 i 是新的头 j指向设为null
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head || !head.next) {
    return head
  }
  let i = head
  let count = 1
  while (i.next) {
    i = i.next
    count++
  }
  i.next = head
  count -= k % count

  while (count) {
    head = head.next
    i = i.next
    count--
  }
  i.next = null
  return head
}
