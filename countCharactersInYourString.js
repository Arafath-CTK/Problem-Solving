// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count1(string) {
  let result = {};
  for (let i = 0; i < string.length; i++) {
    let count = 0;
    for (let j = 0; j < string.length; j++) {
      if (string[i] === string[j]) {
        count++;
      }
    }
    result[string[i]] = count;
  }
  return result;
}

function count2(string) {
  let result = {};
  string
    .split("")
    .forEach((element) =>
      result[element] ? result[element]++ : (result[element] = 1)
    );
  return result;
}

// const count = require("lodash").countBy;

// Test
console.log(count1("abc"));
console.log(count1("aabcccCCdeeeff"));
console.log(count1(""));
