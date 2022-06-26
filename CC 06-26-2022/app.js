
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(arr) {
    var sum = arr.reduce(function (acc, num) {
        return acc + Number(num);
    }, 0);

    return sum;
}

