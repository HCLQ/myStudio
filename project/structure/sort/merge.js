//
var myMergeSort = function(array) {
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
    // 哪边的小就放哪边的到填充数组中,升序
    while (true) {
      if (arr[i] <= arr[j]) {
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
    // 将所有的放回原数组
    k = 0
    i = lo
    while (i <= hi) arr[i++] = temp[k++]
  }
  let temp = []
  return sort(array)
}

// to learn
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
