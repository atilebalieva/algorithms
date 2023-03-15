function log(s) {
  console.log(s);
}

/* Find the length of the last word. 
Example 1:
Input: s = "Hello World"
Output: 5
Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Example 3:
Input: s = "luffy is still joyboy"
Output: 6
*/

/* Solution 1

function lengthOfLastWord(s) {
  return s.trim().split(" ").at(-1).length;
}

 */

/* Solution 2 without any build-in methods 

function lengthOfLastWord(s) {
  let word = "";
  let wordArr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] != " ") {
      word += s[i];
    } else if (word.length >= 1) {
      wordArr.push(word);
      word = "";
    }
  }
  return wordArr[wordArr.length - 1].length;
}
*/

/* Solution 3 without trim() method

function lengthOfLastWord(s) {
  let deleteSpaces = s.split(" ").filter((item) => {
    return item.length > 1;
  });

  return deleteSpaces.at(-1).length;
}
*/
