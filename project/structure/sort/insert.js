/**
 * 直接插入排序
 *
 * 5 4 3 2 1
 * 4 5 3 2 1
 * 3 4 5 2 1
 * 对每个数遍历
 * 往左查找比他小于等于的数,插入到该数的后面
 */
function insertSort(arr) {
  let length = arr.length
  let temp
  let j
  for (let i = 1; i < length; i++) {
    temp = arr[i]
    j = i
    while (j > 0 && arr[j - 1] > temp) {
      swap(j, j - 1)
      j--
    }
  }
  return arr
  function swap(i, j) {
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
}
