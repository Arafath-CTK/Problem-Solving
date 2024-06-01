// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (strs) {
  let prefix = "";
  let alphas = strs.map((a) => a.split(""));

  for (let i = 0; i < alphas[0].length; i++) {
    let count = 0;
    for (let j = 1; j < alphas.length; j++) {
      if (alphas[0][i] === alphas[j][i]) {
        count++;
      } else {
        break;
      }
    }
    if (count === alphas.length - 1) {
      prefix += alphas[0][i];
    } else {
      break;
    }
  }
  return prefix;
};

// test
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["cir", "car", "cor"]));
