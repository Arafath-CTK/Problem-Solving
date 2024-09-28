// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

function reverseLetter1(str) {
  return str
    .match(/[a-zA-Z]/g)
    .reverse()
    .join("");
}

function reverseLetter2(str) {
  return str.split("").filter((char)=> /[a-zA-Z]/g.test(char)).reverse().join("")
}

// Test
console.log(reverseLetter1("krishan"));
console.log(reverseLetter1("ultr53o?n"));
console.log(reverseLetter2("krishan"));
console.log(reverseLetter2("ultr53o?n"));
