// Take 2 strings s1 and s2 including only letters from a to z.
// Return a new sorted string, the longest possible, containing distinct letters -
// each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  let s3 = [...s1, ...s2];
  return s3
    .filter((a, b) => s3.indexOf(a) === b)
    .sort()
    .join("");
}

// Test
let a = "xyaabbbccccdefww";
let b = "xxxxyyyyabklmopq";
console.log(longest(a, b));
