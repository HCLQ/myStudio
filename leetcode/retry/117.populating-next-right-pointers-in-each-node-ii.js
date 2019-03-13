/*
 * @lc app=leetcode id=117 lang=javascript
 *
 * [117] Populating Next Right Pointers in Each Node II
 *
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/description/
 *
 * algorithms
 * Medium (33.32%)
 * Total Accepted:    171.7K
 * Total Submissions: 511.1K
 * Testcase Example:  '{"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":null,"right":null,"val":4},"next":null,"right":{"$id":"4","left":null,"next":null,"right":null,"val":5},"val":2},"next":null,"right":{"$id":"5","left":null,"next":null,"right":{"$id":"6","left":null,"next":null,"right":null,"val":7},"val":3},"val":1}'
 *
 * Given a binary tree
 *
 *
 * struct Node {
 * ⁠ int val;
 * ⁠ Node *left;
 * ⁠ Node *right;
 * ⁠ Node *next;
 * }
 *
 *
 * Populate each next pointer to point to its next right node. If there is no
 * next right node, the next pointer should be set to NULL.
 *
 * Initially, all next pointers are set to NULL.
 *
 *
 *
 * Example:
 *
 *
 *
 *
 * Input:
 * {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":null,"right":null,"val":4},"next":null,"right":{"$id":"4","left":null,"next":null,"right":null,"val":5},"val":2},"next":null,"right":{"$id":"5","left":null,"next":null,"right":{"$id":"6","left":null,"next":null,"right":null,"val":7},"val":3},"val":1}
 *
 * Output:
 * {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":{"$id":"4","left":null,"next":{"$id":"5","left":null,"next":null,"right":null,"val":7},"right":null,"val":5},"right":null,"val":4},"next":{"$id":"6","left":null,"next":null,"right":{"$ref":"5"},"val":3},"right":{"$ref":"4"},"val":2},"next":null,"right":{"$ref":"6"},"val":1}
 *
 * Explanation: Given the above binary tree (Figure A), your function should
 * populate each next pointer to point to its next right node, just like in
 * Figure B.
 *
 *
 *
 *
 * Note:
 *
 *
 * You may only use constant extra space.
 * Recursive approach is fine, implicit stack space does not count as extra
 * space for this problem.
 *
 */
/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 *
                1
            2   -   3
 *       4  -  5    -   6
      7                   8
    

                -1
        -7              9
                 -1          -7 
                     8    -9
 */
/**
 * @param {Node} root
 * @return {Node}
 */
/**
 * Your runtime beats 33.88 % of javascript submissions
  ✔ Your memory usage beats 5 % of javascript submissions (68.8 MB)
 */
var connect = function(root) {
  if (!root) {
    return root;
  }
  let pre = root;
  let cur;
  let right;
  let left;
  while (pre) {
    cur = pre;
    while (cur) {
      if (cur.left) {
        cur.left.next = cur.right;
        // console.info(cur.left.val + ' -> ' + (cur.right ? cur.right.val : 'null'));
      }
      if (cur.next) {
        right = cur.next.left || cur.next.right;
        left = cur.right ? cur.right : cur.left ? cur.left : left;
        if (left) {
          left.next = right;
          //   console.info('cur: ' + cur.val, left.val + ' -> ' + (right ? right.val : 'null'));
        }
      }
      cur = cur.next;
    }
    left = null;
    while (!pre.left && !pre.right && pre.next) pre = pre.next;
    pre = pre.left || pre.right;
  }
  return root;
};
// var connect = function(root) {
//   let parent = root;
//  while (parent !== null) {
//      let dummyNode = new TreeLinkNode(0);
//      let currentChild = dummyNode;  
//      while (parent !== null) {
//          if (parent.left !== null) {
//              currentChild.next = parent.left;
//              currentChild = parent.left;
//          }
//          if (parent.right !== null) {
//              currentChild.next = parent.right;
//              currentChild = parent.right;
//          }
//          parent = parent.next;
//      }
//      parent = dummyNode.next;
//  }
// };