// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input
// and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing.
// The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:
// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

// (Use the English alphabet with 26 letters!)

function findMissingLetter(arrayOfLetters) {
  for (let i = 0; i < arrayOfLetters.length - 1; i++) {
    if (arrayOfLetters[i + 1].charCodeAt(0) - arrayOfLetters[i].charCodeAt(0) > 1) {
      return String.fromCharCode(arrayOfLetters[i].charCodeAt(0) + 1);
    }
  }
}

// Test
console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
console.log(findMissingLetter(["O", "Q", "R", "S"]));
