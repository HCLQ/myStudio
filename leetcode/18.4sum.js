/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 *
 * https://leetcode.com/problems/4sum/description/
 *
 * algorithms
 * Medium (29.51%)
 * Total Accepted:    208.5K
 * Total Submissions: 706.3K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * Given an array nums of n integers and an integer target, are there elements
 * a, b, c, and d in nums such that a + b + c + d = target? Find all unique
 * quadruplets in the array which gives the sum of target.
 *
 * Note:
 *
 * The solution set must not contain duplicate quadruplets.
 *
 * Example:
 *
 *
 * Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
 *
 * A solution set is:
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 *
 *
 * // wrong [-1,0,1,2,-1,-4]\n-1
 * [-4,-1,-1,0,1,2]
 * [-3,-2,-1,0,0,1,2,3]\n0
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  let length = nums.length
  if (length < 4) {
    return []
  }
  nums = mergeSort(nums)
  if (length === 4) {
    return nums.reduce((t, n) => t + n) === target ? [nums] : []
  }
  let output = []
  let last = length - 1
  let sum
  let j
  let lo
  let hi
  for (let i = 0; i < length - 3; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      for (let j = i + 1; j < length - 2; j++) {
        // 1次错在不只是i要优化重复 j也要优化重复
        if (j === i + 1 || nums[j] !== nums[j - 1]) {
          //  输给best的2个优化点
          //   if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
          //     break
          //   }
          //   if (nums[i] + nums[j] + nums[last] + nums[last - 1] < target) {
          //     continue
          //   }
          lo = j + 1
          hi = last
          while (lo < hi) {
            sum = nums[i] + nums[j] + nums[lo] + nums[hi]
            if (sum === target) {
              output.push([nums[i], nums[j], nums[lo], nums[hi]])
              while (lo < hi && nums[lo] === nums[lo + 1]) lo++
              while (lo < hi && nums[hi] === nums[hi - 1]) hi--
              lo++
              hi--
            } else if (sum > target) {
              hi--
            } else {
              lo++
            }
          }
        }
      }
    }
  }
  return output
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
    i = lo
    k = 0
    while (i <= hi) arr[i++] = temp[k++]
  }
}

// --best---
/*
var fourSum = function(nums, target) {
    const result = [];
    nums.sort((a, b) => a - b);
    for (let i=0; i<nums.length-3; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        for (let j=i+1; j<nums.length-2; j++) {
            if (j > i + 1 && nums[j] === nums[j-1]) {
                continue;
            }
            if (nums[i] + nums[j] + nums[j+1] + nums[j+2] > target) {
                break;
            }
            if (nums[i] + nums[j] + nums[nums.length-2] + nums[nums.length-1] < target) {
                continue;
            }
            let left = j + 1, right = nums.length - 1;
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    result.push([ nums[i], nums[j], nums[left], nums[right] ]);
                    while (nums[left] === nums[left+1] && left < right) {
                        left++;
                    }
                    while (nums[right] === nums[right-1] && left < right) {
                        right--;
                    }
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return result;
};

*/
