/* It would be nice to have the following ArrayUtil object containing useful methods to manage arrays:

const arr = [1, 2, 3];

const min = ArrayUtil.min(arr); output 1
const max = ArrayUtil.max(arr); output 3
const avg = ArrayUtil.avg(arr); output 2
const sum = ArrayUtil.sum(arr); output 6

The given array is not changed.
const rev = ArrayUtil.reverse(arr); output [3, 2, 1]

Replaces the first value by the second one. The original array is updated.
ArrayUtil.replace([1, 2, 3, 2], 2, 0); output [1, 0, 3, 0]

Replaces all elements by the given value. The original array is updated.
ArrayUtil.fill([1, 2, 3], 0); output [0, 0, 0]

Implement ArrayUtil, without using built-in methods. */

/* Solution 
const ArrayUtil = {
  fill: function (arr, num) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = num;
    }
    return arr;
  },
  replace: function (arr, curNum, newNum) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === curNum) arr[i] = newNum;
    }
    return arr;
  },
  sum: function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },
  min: function (arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) min = arr[i];
    }
    return min;
  },

  max: function (arr) {
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
      if (max < arr[i]) max = arr[i];
    }
    return max;
  },

  avr: function (arr) {
    return ArrayUtil.sum(arr) / arr.length;
  },
      
  reverse: function(arr) {
   const out = [];
   for (let i = arr.length - 1, j = 0; i >= 0; i--, j++) {
      out[j] = arr[i];
   }
   return out;
   },
};
*/
