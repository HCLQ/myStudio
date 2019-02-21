// 折半查找
// 必须数组有序
/**
 *
 *
 * [0, 1,2,3,4,5,6] 2
 *
 * lo = 0 hi = 6 mid = 3
 * lo = 0 hi = 2 mid = 1
 * lo = 2 hi = 2 mid = 2
 *
 */
function halfSearch(arr, target) {
  let length = arr.length
  let lo = 0
  let hi = length - 1
  let mid
  while (lo <= hi) {
    mid = Math.floor((lo + hi) / 2)
    if (target === arr[mid]) {
      return mid
    } else if (target > arr[mid]) {
      lo = mid + 1
    } else {
      hi = mid - 1
    }
  }
  return -1
}
