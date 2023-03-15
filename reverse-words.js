function log(s) {
  console.log(s);
}

/* Given a string s, reverse the order of characters in each word within a sentence while still 
preserving whitespace and initial word order.

Example 1:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:
Input: s = "God Ding"
Output: "doG gniD"

1 <= s.length <= 5 * 104
s contains printable ASCII characters.
s does not contain any leading or trailing spaces.
There is at least one word in s.
All the words in s are separated by a single space.
 */

let string = "   c Let's take    LeetCode contest";

/* function reverseString(s) {
  let arr = s.split(" ");
  let reverseArr = [];
  let word = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i].length - 1; j >= 0; j--) {
      word += arr[i][j];
    }
    reverseArr.push(word);
    word = "";
  }
  return reverseArr.join(" ");
} */

/* function reverseString(s) {
  return s
    .split(" ")
    .map((word) => {
      return word.split("").reverse().join("");
    })
    .join(" ");
} */
let string2 = "Ding   Dong";

// function reverseString(s) {
//   let item = "";
//   let arrOfString = [];

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== " ") {
//       item += s[i];
//     } else if (s[i] === " " && item.length >= 1) {
//       arrOfString.push(item);
//       item = "";
//     } else {
//       item = s[i];
//       arrOfString.push(item);
//       item = "";
//     }
//   }
//   log(arrOfString);
// }

log(reverseString(string2));
