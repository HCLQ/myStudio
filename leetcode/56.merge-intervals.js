/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 *
 * https://leetcode.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (34.63%)
 * Total Accepted:    303.1K
 * Total Submissions: 873K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * Given a collection of intervals, merge all overlapping intervals.
 *
 * Example 1:
 *
 *
 * Input: [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into
 * [1,6].
 *
 *
 * Example 2:
 *
 *
 * Input: [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 *
 */
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  let length = intervals.length
  if (length <= 1) {
    return intervals
  }
  intervals.sort((a,b) => a.start - b.start)
  let i = 0
  let j
  let a = intervals[i]
  let b
  while (a) {
    j = 0
    b = intervals[j]
    while (b) {
      if (a === b) {
        b = intervals[++j]
        if (!b) {
          break
        }
      }
      if (!(a.start > b.end || a.end < b.start)) {
        intervals.splice(j, 1)
        a.start = Math.min(a.start, b.start)
        a.end = Math.max(a.end, b.end)
      } else {
        j++
      }
      b = intervals[j]
    }
    a = intervals[++i]
  }
  return intervals
}
