// In this kata, you will sort elements in an array by decreasing frequency of elements.
// If two elements have the same frequency, sort them by increasing value.

// solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
// -- We sort by highest frequency to lowest frequency.
// -- If two elements have same frequency, we sort by increasing value.

function solve1(arr) {
  let count = {};
  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]]) {
      count[arr[i]]++;
    } else {
      count[arr[i]] = 1;
    }
  }

  arr.sort((a, b) => {
    if (count[a] !== count[b]) {
      return count[b] - count[a];
    } else {
      return a - b;
    }
  });
  return arr;
}

function solve(arr) {
  const freqMap = arr.reduce(
    (acc, val) => ((acc[val] = (acc[val] || 0) + 1), acc),
    {}
  );
  arr.sort((a, b) => freqMap[b] - freqMap[a] || a - b);
  return arr;
}

// Test
console.log(solve([2, 3, 5, 3, 7, 9, 5, 3, 7]));
console.log(solve([1, 2, 3, 0, 5, 0, 1, 6, 8, 8, 6, 9, 1]));
console.log(solve([5, 9, 6, 9, 6, 5, 9, 9, 4, 4]));
