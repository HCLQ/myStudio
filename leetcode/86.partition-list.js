/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
 *
 * https://leetcode.com/problems/partition-list/description/
 *
 * algorithms
 * Medium (36.09%)
 * Total Accepted:    152.9K
 * Total Submissions: 421.3K
 * Testcase Example:  '[1,4,3,2,5,2]\n3'
 *
 * Given a linked list and a value x, partition it such that all nodes less
 * than x come before nodes greater than or equal to x.
 *
 * You should preserve the original relative order of the nodes in each of the
 * two partitions.
 *
 * Example:
 *
 *
 * Input: head = 1->4->3->2->5->2, x = 3
 * Output: 1->2->2->4->3->5
 *
 * 4 2 3 1 5  4
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let less;
  let big;
  let bigHead;
  let i = head;
  while (i) {
    if (i.val >= x) {
      if (!bigHead) {
        bigHead = i;
        big = i;
      } else {
        big.next = i;
        big = big.next;
      }
    } else {
      if (!less) {
        head = i;
        less = i;
      } else {
        less.next = i;
        less = less.next;
      }
    }
    i = i.next;
  }
  if (big) {
    big.next = null;
  }
  if (less) {
    less.next = bigHead;
  }
  return head;
};
