/*
 * @lc app=leetcode id=60 lang=javascript
 *
 * [60] Permutation Sequence
 *
 * https://leetcode.com/problems/permutation-sequence/description/
 *
 * algorithms
 * Medium (32.06%)
 * Total Accepted:    128.4K
 * Total Submissions: 399K
 * Testcase Example:  '3\n3'
 *
 * The set [1,2,3,...,n] contains a total of n! unique permutations.
 *
 * By listing and labeling all of the permutations in order, we get the
 * following sequence for n = 3:
 *
 *
 * "123"
 * "132"
 * "213"
 * "231"
 * "312"
 * "321"
 *
 *
 * Given n and k, return the kth permutation sequence.
 *
 * Note:
 *
 *
 * Given n will be between 1 and 9 inclusive.
 * Given k will be between 1 and n! inclusive.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 3, k = 3
 * Output: "213"
 *
 *
 * Example 2:
 *
 *
 * Input: n = 4, k = 9
 * Output: "2314"
 *
 * n = 4 时, 设 k = 14
 * 数列为 1 2 3 4
 * 全部数列为 i 和其他 n - 1 个数的组合, 3个数列则又 3！种可能, 因此可可以看成全数列有 4 * 3！种
 * 要找第14个数列, 从0数,必定是为 13/3! = 2 位的数为首位的时候, 此时确定首位是 3
 * 其余数列为 1 2 4 共有 3 * 2!种可能，此时k应该是13 - 2*3! = 1
 * 应该找 k/(n - 2)! => 1 / 2!  = 0 第二位置是 1
 * 此时还剩下 2 4 共有 2 * 1!种可能, 此时k剩余 1 - 0 * 2! =  1
 * 应该继续找 k / (n - 3)! => 1/1! = 1 第3位置是 4
 *
 * 因此最终应该是 3 1 4 2
 *
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let N = [0, 1, 2]
  for (let i = 3; i < n; i++) {
    N[i] = i * N[i - 1]
  }
  let nums = []
  for (let i = 1; i <= n; i++) {
    nums.push(i)
  }
  let output = ''
  let j
  k-- // 序号从0开始
  for (let i = 1; i < n; i++) {
    j = Math.floor(k / N[n - i])
    output += nums[j]
    nums.splice(j, 1)
    k -= j *  N[n - i]
  }
  return output + nums[0]
}
