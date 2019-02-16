/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (23.19%)
 * Total Accepted:    473.1K
 * Total Submissions: 2M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the
 * sum of zero.
 *
 * Note:
 *
 * The solution set must not contain duplicate triplets.
 *
 * Example:
 *
 *
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 *
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 *
 * [-4, -1, -1, 0, 1, 2]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let length = nums.length
  if (length < 3) {
    return []
  }
  // js排序坑..不一定是数字从小到大
  nums = nums.sort((a, b) => a - b)
  let max = length - 2
  let last = max + 1
  let res = []
  let current
  let sum
  for (let i = 0; i < max; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let left = i + 1
      let right = last
      current = nums[i]
      while (left < right) {
        sum = nums[left] + nums[right]
        if (sum + current == 0) {
          res.push([current, nums[left], nums[right]])
          while (left < right && nums[left] === nums[left + 1]) left++
          while (left < right && nums[right] === nums[right - 1]) right--
          left++
          right--
        } else if (sum < -current) {
          left++
        } else {
          right--
        }
      }
    }
  }
  return res
}

// ---- best--- 排序很重要!
/*
var threeSum = function(nums) {
  var result = []
  if (nums == null || nums.length < 3) return result

  mergeSort(nums) //.sort(function(a,b){ return a - b; });

  for (var i = 0, l = nums.length - 2; i < l; i++) {
    if (i == 0 || nums[i] > nums[i - 1]) {
      var j = i + 1
      var k = nums.length - 1

      while (j < k) {
        if (nums[i] + nums[j] + nums[k] == 0) {
          result.push([nums[i], nums[j], nums[k]])

          j++
          k--

          //handle duplicate here
          while (j < k && nums[j] == nums[j - 1]) j++
          while (j < k && nums[k] == nums[k + 1]) k--
        } else if (nums[i] + nums[j] + nums[k] < 0) {
          j++
        } else {
          k--
        }
      }
    }
  }

  return result
}

var mergeSort = function(array) {
  function merge(arr, aux, lo, mid, hi) {
    var i = lo
    var j = mid + 1
    var k = lo
    while (true) {
      if (arr[i] <= arr[j]) {
        aux[k++] = arr[i++]
        if (i > mid) {
          do aux[k++] = arr[j++]
          while (j <= hi)
          break
        }
      } else {
        aux[k++] = arr[j++]
        if (j > hi) {
          do aux[k++] = arr[i++]
          while (i <= mid)
          break
        }
      }
    }
  }

  function sortarrtoaux(arr, aux, lo, hi) {
    if (hi < lo) return
    if (hi == lo) {
      aux[lo] = arr[lo]
      return
    }
    var mid = Math.floor(lo + (hi - lo) / 2)
    sortarrtoarr(arr, aux, lo, mid)
    sortarrtoarr(arr, aux, mid + 1, hi)
    merge(arr, aux, lo, mid, hi)
  }

  function sortarrtoarr(arr, aux, lo, hi) {
    if (hi <= lo) return
    var mid = Math.floor(lo + (hi - lo) / 2)
    sortarrtoaux(arr, aux, lo, mid)
    sortarrtoaux(arr, aux, mid + 1, hi)
    merge(aux, arr, lo, mid, hi)
  }

  function merge_sort(arr) {
    var aux = arr.slice(0)
    sortarrtoarr(arr, aux, 0, arr.length - 1)
    return arr
  }

  return merge_sort(array)
}
*/
