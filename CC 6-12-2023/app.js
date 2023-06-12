// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).



//first, start with a conditional to determine if num is less than 12
function calculateFactorial(n) {
    if (n < 0 || n > 12) {
        throw new RangeError('Input out of range');
    }
    //Base case: if n is 0 or 1, return 1 
    if (n === 0 || n === 1) {
        return 1;
    }

    let factorial = 1;

    //loop to calculate factorial
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}