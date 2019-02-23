/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 *
 * https://leetcode.com/problems/next-permutation/description/
 *
 * algorithms
 * Medium (29.96%)
 * Total Accepted:    210.8K
 * Total Submissions: 703.1K
 * Testcase Example:  '[1,2,3]'
 *
 * Implement next permutation, which rearranges numbers into the
 * lexicographically next greater permutation of numbers.
 *
 * If such arrangement is not possible, it must rearrange it as the lowest
 * possible order (ie, sorted in ascending order).
 *
 * The replacement must be in-place and use only constant extra memory.
 *
 * Here are some examples. Inputs are in the left-hand column and its
 * corresponding outputs are in the right-hand column.
 *
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 * 这题是找寻给定的数组的 所有可能排序中 最近的比给定的数大的那个数
 * 1,2,3 有[1,3,2] [2,1,3] 等组合 1,3,2最接近
 *
 * 123451  123541
 * 1513142  1513214
 * 13245   13254
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let temp = []
  mergeSort(nums, switchNums(nums))
  return nums

  function switchNums(nums) {
    let length = nums.length
    // 从尾部查找, 找第一个降序的 i - 1
    for (let i = length - 1; i > -1; i--) {
      if (i - 1 > -1) {
        if (nums[i] > nums[i - 1]) {
          for (let j = length - 1; j > i - 1; j--) {
            // 从尾部找 找第一个比 i - 1大的和他互换, 同时要把i-1之后的全部排序成升序即是最小的数
            if (nums[j] > nums[i - 1]) {
              // 交换
              ;[nums[j], nums[i - 1]] = [nums[i - 1], nums[j]]
              return i
            }
          }
        }
      }
    }
  }

  function mergeSort(arr, lo = 0, hi = arr.length - 1) {
    if (lo < hi) {
      const mid = Math.floor((lo + hi) / 2)
      mergeSort(arr, lo, mid)
      mergeSort(arr, mid + 1, hi)
      merge(arr, lo, mid, hi)
    }
    return arr
  }
  function merge(arr, lo, mid, hi) {
    let i = lo
    let j = mid + 1
    let k = 0
    while (true) {
      if (arr[i] < arr[j]) {
        temp[k++] = arr[i++]
        if (i > mid) {
          while (j <= hi) temp[k++] = arr[j++]
          break
        }
      } else {
        temp[k++] = arr[j++]
        if (j > hi) {
          while (i <= mid) temp[k++] = arr[i++]
          break
        }
      }
    }
    k = 0
    while (lo <= hi) arr[lo++] = temp[k++]
  }
}
