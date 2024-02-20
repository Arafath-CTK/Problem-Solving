// Write a function named first_non_repeating_letter† that takes a string input, and returns
// the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the
// letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character,
// but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("");

// † Note: the function is called firstNonRepeatingLetter for historical reasons, but your
// function should handle any Unicode character.

function firstNonRepeatingLetter(s) {
  let chars = s.toLowerCase().split("");
  for (let i = 0; i < chars.length; i++) {
    let count = 0;
    for (let j = 0; j < chars.length; j++) {
      if (chars[i] === chars[j]) {
        count++;
      }
    }
    if (count === 1) {
      return s[i];
    }
  }
  return "";
}

// Test
console.log(firstNonRepeatingLetter("a"));
console.log(firstNonRepeatingLetter("stress"));
console.log(firstNonRepeatingLetter("moonmen"));
