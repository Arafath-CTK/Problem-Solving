// Write a function that takes an array of strings as an argument and returns a sorted array
// containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths,
// so you will not have to decide how to order multiple strings of the same length.

function sortByLength(array) {
  let temp;
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i].length > array[i + 1].length) {
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
  return array;
}

let sortByLength1 = (array) => array.sort((a, b) => a.length - b.length);

// Test
console.log(sortByLength1(["Telescopes", "Glasses", "Eyes", "Monocles"]));
