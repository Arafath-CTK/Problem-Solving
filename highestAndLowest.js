// In this little assignment you are given a string of space separated numbers,
// and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// // Ans - 1
// function highAndLow(numbers) {
//   let num = numbers.split(" ").map(Number);
//   let result = [];
//   let max = Math.max(...num);
//   let min = Math.min(...num);
//   result.push(max, min);
//   return result.join(" ");
// }

// Ans - 2
function highAndLow(numbers) {
  let num = numbers.split(" ");
  return Math.max(...num) + " " + Math.min(...num);
}

// Test
console.log(highAndLow("1 9 3 4 -5"));
