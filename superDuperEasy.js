// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a
// string it should return "Error".

function problem(x) {
  return typeof x === "number" ? x * 50 + 6 : "Error";
}

// Test
console.log(problem("hello"));
console.log(problem(1));
console.log(problem(5));
console.log(problem(0));
console.log(problem(-3));
console.log(problem(1.2));
console.log(problem(0.03));
