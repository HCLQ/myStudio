/**
 * 快速排序
 * 初始以某一个数为基准 n = lo/mid/hi都可以,  将基准数和末尾位置的数交换
 * (选择三者中折中的效果最好,可以将后续分割成大小较为相等的2等分,若最小或最大,则可能造成分割完一边空一边是全部,排序效率不高,均等分效率最高)
 * (一般直接基准和末尾元素交换即可, 但此时可以进一步优化, 可以对3选择的3个值直接排序, 选中间的为基准,同时先排序他们3个值后放回, 将基准值和倒数第2个值交换, 因为此时最后一个值必定大于基准值)
 * 设lo = 0, hi = length - 2;
 * lo++往右查找 hi-- 往左查找
 * lo每次找到比n大的值则停止 直到 hi 找到比n 小的值 则交换 lo 和 hi的值
 * 不断重复直到 lo > hi 处
 * 交换n和lo所处的值i, 此时分为2边,lo的左边都是比n小的,hi右边都是比n大的
 * 递归左边[left,i - 1]和右边[i+1,right]
 *
 *
 */
function quickSort(arr, lo = 0, hi = arr.length - 1) {
  if (lo < hi) {
    let i = split(arr, lo, hi)
    quickSort(arr, lo, i - 1)
    quickSort(arr, i + 1, hi)
  }
  return arr
}
function split(arr, lo, hi) {
  let standValue = findStand(arr, lo, hi)
  let i = lo
  let j = hi - 2
  while (true) {
    while (arr[i] < standValue) i++
    while (arr[j] > standValue) j--
    if (i >= j) {
      swap(arr, i, hi - 1)
      return i
    } else {
      swap(arr, i, j)
    }
  }
}
function findStand(arr, lo, hi) {
  const mid = Math.floor((lo + hi) / 2)
  if (arr[lo] > arr[mid]) swap(arr, lo, mid)
  if (arr[mid] > arr[hi]) swap(arr, mid, hi)
  if (arr[lo] > arr[mid]) swap(arr, lo, mid)
  swap(arr, mid, hi - 1)
  return arr[hi - 1]
}
function swap(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}
