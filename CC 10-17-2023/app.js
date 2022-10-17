// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.



//use sort method, get the 1st string from sorted arr, convert str into arr of characters, concatenate , return concatenartion

function twoSort(s) {
    s.sort();
    const firstString = s[0];
    const charArray = firstString.split('');
    const concatenateString = charArray.join('***');
    return concatenateString;
}