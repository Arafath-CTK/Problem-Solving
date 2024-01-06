// Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      count++;
      i--;
    }
  }
  for (let j = 1; j <= count; j++) {
    arr.push(0);
  }
  return arr;
}

function moveZeros1(arr) {
  return [...arr.filter((x) => x !== 0), ...arr.filter((x) => x === 0)];
}

// Test
let a = [false, 1, 0, 0, 1, 2, 0, 1, 3, "a"];
let b = [9, +0, 9, 1, 2, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0];
console.log(moveZeros(a));
console.log(moveZeros(b));
