/*Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.


Parameters: takes in a string- no numbers
Return:returns the same string without vowels
Example: easter returns str
Psuedocode: Replace all vowels with blank space and return the result. no spaces 
*/
function disemvowel(str) {
    const noVowels= str.replace(/[aeiou]/gi, '')
      return noVowels;
  }