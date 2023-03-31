function log(s) {
  console.log(s);
}
/* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true */

/* Solution 1
function containsDublicate(arr) {
  return arr.some((item, index) => {
    return arr.includes(item, index + 1);
  });
}
*/

/* Solution 2 without build in methods
function containsDublicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}
*/
