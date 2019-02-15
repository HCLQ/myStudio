/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (30.45%)
 * Total Accepted:    750.1K
 * Total Submissions: 2.5M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example:
 * 
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if (!l1&&!l2){
        return new listNode(0);
    }
    if (!l1){
        return l2;
    }
    if (!l2){
        return l1;
    }

    let addition = 0;
    let newVal;
    let output = new listNode(0);
    let newNode = output
    while((l1 && l2) || addition){
        newVal = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + addition;
        if (newVal >= 10){
            addition = parseInt(newVal/10);
            newVal = newVal%10;
        } else {
            addition = 0
        }
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
        newNode.next = new listNode(newVal)
        newNode = newNode.next
    }

    let last = l1 || l2
    if(last){
        newNode.next = last
    }
    return output.next
};

function listNode(val){
    this.val = val;
    this.next = null;
}
