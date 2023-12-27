// Write function RemoveExclamationMarks which removes
// all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s
    .split("")
    .filter((a) => a !== "!")
    .join("");
}

// Test
console.log(removeExclamationMarks("Hello World!"));
