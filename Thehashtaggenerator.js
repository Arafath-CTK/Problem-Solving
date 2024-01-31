// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
  return str.split("").filter((e) => e !== " ").length < 140 &&
    str.split("").filter((e) => e !== " ").length > 0
    ? `#${str
        .trim()
        .split(" ")
        .filter((currentValue) => currentValue !== "")
        .map(
          (currentValue) =>
            currentValue.slice(0, 1).toUpperCase() +
            currentValue.slice(1).toLowerCase()
        )
        .join("")}`
    : false;
}

// Test
console.log(generateHashtag(" Hello there thanks for trying my Kata"));
console.log(generateHashtag("    Hello     World   "));
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
console.log(generateHashtag(" ".repeat(200)));
console.log(generateHashtag(""));
