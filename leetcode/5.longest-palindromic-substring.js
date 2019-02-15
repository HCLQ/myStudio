/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (26.38%)
 * Total Accepted:    466.6K
 * Total Submissions: 1.8M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 * 
 * Example 1:
 * 
 * 
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "cbbd"
 * Output: "bb"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
//----learned-----
var longestPalindrome = function (s){
    let strings = s.split('')
    let maxLength = s.length -1
    if(maxLength<1){
        return s
    }
    let longestLength = 0
    let start = 0
    let i =0
    let left
    let right
    let tempLength
    while(i<maxLength){
        left = i
        right = i
        // 从i开始一直往右查找直到不重复的位置n为止
        while((right < maxLength)&&strings[right] === strings[right+1]){
            right++
        }
        // 下一次循环开始的位置
        i = right + 1
        // 此时left和right之间的都是完全相等的,只需要比较right往右以及left往左的内容判断是否每个相等
        while((right < maxLength)&&(left > 0)&&strings[left-1] === strings[right+1]){
            left--
            right++
        }

        tempLength = right - left + 1
        if (longestLength < tempLength){
            longestLength = tempLength
            start = left
        }
    }
    return s.slice(start, start + longestLength)
}



// -- first success----
// var longestPalindrome = function(s) {
//     if (!s){
//         return ''
//     }
//     let maxLength = s.length
//     if(maxLength<=1){
//         return s
//     }
//     let length = maxLength
//     let sub
//     let start
//     while(length > 1){
//         start = 0
//         while((start + length) <= maxLength){
//             sub = s.slice(start, start + length)
//             if (isPalindromic(sub)){
//                 return sub
//             }
//             start++
//         }
//         length--
//     }
//     return s[0]
// };
// function isPalindromic(s){
//     if(!s){
//         return false
//     }
//     let i = 0;
//     let length = s.length;
//     let middle = parseInt(length/2);
//     for(; i<= middle ; i++){
//         if (s[i] !== s[length - i - 1]){
//             return false
//         }
//     }
//     return true
// }

/* ------------- best------------
https://articles.leetcode.com/longest-palindromic-substring-part-ii/
var longestPalindrome = function(s) {
    let len = s.length;
    let start = 0;
    let end = 0;
    let i = 0;
    let left;
    let right;
    let array = s.split('');
    //Strings of one or two letters are always paladromes
    if(s.length < 2) {
        return s;
    }
    for(i; i < len;) {
        left = i;
        right = i;
        
        //Break if we reach the end of the array
        if(len - i <= 0) {
            break;
        }
        //While the string repeats itself to the right, we increase right bound
        while (right < (len - 1) && array[right + 1] === array[right]) {
            right++;
        }
        //i indicates current position in array
        i = right + 1;
        
        //If we're in bounds of the array, right becomes the center point and we expand on both sides
        while (right < (len - 1) && left > 0 && array[right + 1] === array[left - 1]) {
            right++;
            left--;
        }
        let distance = right - left + 1;
        //Set the end point on the right based on the current location we are in in the array
        if(end < distance) {
            end = distance;
            start = left;
        }
    }
    
    //Use the start and end points to return the substring
        return s.substr(start, end);
};
*/