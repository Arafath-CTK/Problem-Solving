// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let matches = str.match(/[aeiou]/g);
  return matches ? matches.length : 0;
}

//Test
console.log(getCount("abracadabra"));
console.log(getCount("my pyx"));
