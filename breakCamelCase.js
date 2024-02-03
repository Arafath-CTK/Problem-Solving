// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  if (string === "") {
    return "";
  } else {
    result = "";
    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        result += " " + string[i];
      } else {
        result += string[i];
      }
    }
    return result;
  }
}

function solution2(string) {
  return [...string]
    .map((element) => {
      if (element === element.toUpperCase()) {
        element = " " + element;
      }
      return element;
    })
    .join("");
}

// Test
console.log(solution2("camelCasing"));
console.log(solution2("identifier"));
console.log(solution2(""));
