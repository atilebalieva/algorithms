function log(s) {
  console.log(s);
}

/* Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once. 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters. */

const string = "leetcode";

const s = "aisal";

function reverseVowels(str) {
  let arrOfvowels = ["a", "e", "i", "o", "u", "U", "O", "I", "E", "A"];

  const vowels = str.split("").filter((letter) => {
    if (arrOfvowels.includes(letter)) return letter;
  });

  const name = str
    .split("")
    .map((item) => {
      log(item);
      // return arrOfvowels.includes(item) ? (item = vowels.pop()) : item;
    })
    .join("");

  log(name);
}

log(reverseVowels("aisal"));
