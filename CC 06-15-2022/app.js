// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"


function isAnagram(word1, word2) {
    const sortedWord1 = word1.toLowerCase().split('').sort().join('');
    const sortedWord2 = word2.toLowerCase().split('').sort().join('');

    return sortedWord1 === sortedWord2;
}

