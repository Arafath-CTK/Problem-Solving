// Given a number N. Find the minimum number of operations required to reach N starting from 0. 
// You have 2 operations available: Double the number, Add one to the number

// Example 1:
// Input:
// N = 8
// Output: 4
// Explanation:
// 0 + 1 = 1 --> 1 + 1 = 2 --> 2 * 2 = 4 --> 4 * 2 = 8.

// You don't need to read input or print anything. Your task is to complete the function minOperation()
// which accepts an integer N and return number of minimum operations required to reach N from 0

let minOperation = (n) => {
    let count = 0
    let check = (number) => {
        if(number === 0){
            return;
        }
        if(n%2 === 0){
            n = n/2
            count++
        } else {
            n = n-1
            count++
        }
        check(n)
    }
    check(n)
    return count;
}

console.log(minOperation(15))