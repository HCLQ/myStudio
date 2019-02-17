/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 *
 * https://leetcode.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (34.12%)
 * Total Accepted:    245.6K
 * Total Submissions: 694.6K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * Given an array nums of n integers and an integer target, find three integers
 * in nums such that the sum is closest to target. Return the sum of the three
 * integers. You may assume that each input would have exactly one solution.
 *
 * Example:
 *
 *
 * Given array nums = [-1, 2, 1, -4], and target = 1.
 * [-4, -1, 1, 2, 3, 4, 5]
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 *
 * [13,2,0,-14,-20,19,8,-5,-13,-3,20,15,20,5,13,14,-17,-7,12,-6,0,20,-19,-1,-15,-2,8,-2,-9,13,0,-3,-18,-9,-9,-19,17,-14,-19,-4,-16,2,0,9,5,-7,-4,20,18,9,0,12,-1,10,-17,-11,16,-13,-14,-3,0,2,-18,2,8,20,-15,3,-13,-12,-2,-19,11,11,-10,1,1,-10,-2,12,0,17,-19,-7,8,-19,-17,5,-5,-10,8,0,-12,4,19,2,0,12,14,-9,15,7,0,-16,-5,16,-12,0,2,-16,14,18,12,13,5,0,5,6]\n-59
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let length = nums.length
  if (length <= 3) {
    return nums.reduce((total, v) => total + v, 0)
  }
  let arr = mergeSort(nums)
  let max = length - 2
  let last = length - 1
  let i = 0
  let lo = i + 1
  let hi = max + 1
  let closest
  let output = {
    closest: Infinity,
    sum: Infinity
  }
  let sum
  while (i < max) {
    if (i === 0 || arr[i] !== arr[i - 1]) {
      lo = i + 1
      hi = last
      while (lo < hi) {
        sum = arr[i] + arr[lo] + arr[hi]
        closest = Math.abs(sum - target)
        if (closest < output.closest) {
          output.closest = closest
          output.sum = sum
        //   while (lo < hi && arr[lo] === arr[lo + 1]) lo++
        //   while (lo < hi && arr[hi] === arr[hi - 1]) hi--
        } else if (sum < target) {
          lo++
        } else {
          hi--
        }
      }
    }
    i++
  }
  return output.sum
}
function mergeSort(array) {
  let temp = []
  return sort(array)
  function sort(arr, lo = 0, hi = arr.length - 1) {
    if (lo < hi) {
      const mid = Math.floor((lo + hi) / 2)
      sort(arr, lo, mid)
      sort(arr, mid + 1, hi)
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
    i = lo
    while (i <= hi) arr[i++] = temp[k++]
  }
}
//---- best
var threeSumClosest = function(nums, target) {
  let closest = null;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
      let first = nums[i];
      let l = i + 1;
      let r = nums.length - 1;
      while (l < r) {
          let sum = first + nums[l] + nums[r];
          if (sum === target) {
              return target;
          } else if (sum < target) {
              l++;
          } else {
              r--;
          }
          if (
              closest === null ||
              Math.abs(target - sum) < Math.abs(target - closest)
          ) {
              closest = sum;
          }
      }
      while (nums[i] === nums[i + 1]) {
          i++;
      }
  }
  return closest;
};