// Complete the solution so that it returns true if the first argument(string)
// passed in ends with the 2nd argument (also a string).

// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
  return ending === "" ? true : str.slice(-ending.length) === ending;
  //   return str.endsWith(ending);
}

// Test
console.log(solution("abc", "bc"));
console.log(solution("abc", "d"));
console.log(solution("abc", ""));
