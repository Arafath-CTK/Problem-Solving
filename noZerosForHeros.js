// Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros1(n) {
  if (n === 0) {
    return n;
  }

  let removeZero = (numArray) => {
    if (numArray[numArray.length - 1] !== 0) {
      return numArray;
    }
    numArray.pop();
    return removeZero(numArray);
  };

  let digitArray = Array.from(String(Math.abs(n)), Number);
  let resultNum = Number(removeZero(digitArray).join(""));

  return n < 0 ? -resultNum : resultNum;
}

function noBoringZeros2(n) {
  if (n === 0) return 0;

  let removeZero = (num) => {
    if (num % 10 !== 0) return num;

    return removeZero((num /= 10));
  };

  return removeZero(n);
}

function removeTrailingZeros(num) {
  if (num === 0) return 0; // Special case for zero

  // Convert number to string, remove trailing zeros using regex, and convert back to number
  return Number(num.toString().replace(/0+$/, ""));
}

// Test
console.log(noBoringZeros2(1450));
console.log(noBoringZeros2(960000));
console.log(noBoringZeros2(1050));
console.log(noBoringZeros2(-1050));
console.log(noBoringZeros2(0));
