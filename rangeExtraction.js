// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in
// the range by a dash, '-'. The range includes all integers in the interval including both
// endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns
// a correctly formatted string in the range format.

// Example:
// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

function solution(nums) {
  const result = [];
  let start = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] > 1) {
      // Check if the previous range had at least 3 numbers
      if (start !== nums[i - 1] && i - 1 - start >= 2) {
        result.push(`${start}-${nums[i - 1]}`);
      }
      start = nums[i];
    } else {
      // Include -6 and handle the last number
      if (i === nums.length - 1) {
        // Check if the range has at least 3 numbers
        if (i - start >= 2) {
          result.push(`${start}-${nums[i]}`);
        } else {
          // Add individual numbers for smaller ranges
          if (i === 1 || nums[i] !== nums[i - 1]) {
            result.push(`${nums[i]}`);
          }
        }
      }
    }
  }
  return result.join(",");
}

// Test
console.log(
  solution([
    -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
    19, 20,
  ])
);

//not completed