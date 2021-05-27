/**
 * REFERENCES:
 * - String methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#
 *
 * If you'd like to run your function to test it yourself,
 * uncomment it from the bottom of this file, then run this
 * file with `node project.js`.
 *
 * Good luck!
 */

/**
 * sumOdds(string):
 * - receives an array of string
 * - returns the sum of only the ODD string
 *
 * e.g.
 * sumOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]) -> 25
 * sumOdds([3, 7, 8, 15, 2, 1, 13]) -> 39
 */
function sumOdds(string) {
  let sum = 0;
  for (let i = 0; i < string.length; i++){
    if (string[i] % 2 === 1){
      sum = sum + string[i];
    }
  }
  return sum;
}

// console.log(sumOdds([3, 7, 8, 15, 2, 1, 13]));

/**
 * characterCount(string, c):
 * - receives a string and a character
 * - returns the number of times `c` occurs in the string
 * - note: this has to be case-insensitive
 *
 * e.g.
 * characterCount("Michael Stephenson", "e") -> 3
 * characterCount("Character Count is clever", "c") -> 4
 *
 * Hint: Use string methods to make it case-insensitive
 */
function characterCount(string, c) {
  let count = 0;
  for (let i = 0; i < string.length; i++){
    if (string[i].toUpperCase() === c.toUpperCase()){
      count++;
    }
  }
  return count;
}

//console.log(characterCount("Character Count is clever", "c"));

/**
 * differences(string):
 * - receives an array of string
 * - returns an array that has the difference in the values of the string array.
 * - see example below for clarification.
 *
 * e.g.
 * differences([1, 3, 7, 9, 12]) -> [2, 4, 2, 3]
 * 3 - 1 = 2
 * 7 - 3 = 4
 * 9 - 7 = 2
 * 12 - 9 = 3
 *
 * differences([11, 35, 52, 14, 56]) -> [24,  17, -38,  42]
 */
function differences(string) {
  const diff = []
  for (let i = 1; i < string.length; i++){
    diff.push(parseInt(string[i])-parseInt(string[i-1]));
  }
  return diff;
}

// console.log(differences([11, 35, 52, 14, 56]));

/**
 * largestIncrement(string):
 * - receives an array of string
 * - returns the largest difference between two consecutive string in the array
 * - see example below for clarification
 *
 * e.g.
 * largestIncrement([1, 3, 7, 9, 12]) -> 4
 * 3 - 1 = 2
 * 7 - 3 = 4
 * 9 - 7 = 2
 * 12 - 9 = 3
 * largest: 4
 *
 * largestIncrement([11, 35, 52, 14, 56, 601, 777, 888, 999]) -> 545
 */
function largestIncrement(string) {
  const array = differences(string);
  let largest = 0;
  for (let i = 0; i < array.length; i++){
    if (array[i]>largest) {
        largest = array[i];
    }
}
return largest;
}

// console.log(largestIncrement([11, 35, 52, 14, 56, 601, 777, 888, 999]));

/**
 * afterX(string, x):
 * - receives an array of string, and a number `x`.
 * - returns an array of every number in `string` that occurs after `x`.
 *
 * - assume there are no duplicate string.
 *
 * e.g.
 * afterX([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) -> [4, 5, 6, 7, 8, 9]
 * afterX([11, 35, 52, 14, 56, 601, 777, 888, 999], 52) -> [14, 56, 601, 777, 888, 999]
 */
function afterX(string, x) {
  let found = false;
  const array = []
  for (let i = 0; i < string.length; i++){
    if (parseInt(string[i]) === x){
      found = true;
      continue;
    }

    if (found){
      array.push(string[i]);
    }
  }
  return array;
}

// console.log(afterX([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

/**
 * abbreviate(firstName, lastName):
 * - receives a first name and a last name
 * - returns the initials in uppercase
 *
 * e.g.
 * abbreviate("Michael", "Singer") -> "MS"
 * abbreviate("jordan", "peterson") -> "JP"
 *
 * Hint: Use string method .toUpperCase()
 */
function abbreviate(firstName, lastName) {
  return (firstName[0].toUpperCase()+lastName[0].toUpperCase());
}

// console.log(abbreviate("miss", "Stephane"));

/**
 * isUpperCase(string):
 * - receives a string
 * - returns true if the string is uppercase, false otherwise
 *
 * e.g.
 * isUpperCase("Mickey S") -> false
 * isUpperCase("JCREW") -> true
 *
 */
function isUpperCase(string) {
  for (let i = 0; i < string.length; i++){
    if (string[i] === string[i].toLowerCase()){
      return false;
    }
  }
  return true;
}

// console.log(isUpperCase("JCREW"));

/**
 * elementInArray(string, x):
 * - receives an array of string, and a number `x`.
 * - returns true if `x` is found in the array, false otherwise
 *
 * e.g.
 * elementInArray([5, 6, 7], 6) -> true
 * elementInArray([5, 6, 7], 8) -> false
 *
 */
function elementInArray(string, x) {
  for (let i = 0; i < string.length; i++){
    if (parseInt(string[i]) === x){
      return true;
    }
  }
  return false;
}

// console.log(elementInArray([5, 6, 7], 8));

/**
 * reverseString(string):
 * - receives a string
 * - returns the reverse of the string
 *
 * e.g.
 * reverseString("string") -> "gnirts"
 * reverseString("CODED") -> "DEDOC"
 *
 */
function reverseString(string) {
  return string.split("").reverse().join("");
}

// console.log(reverseString("CODED"));

module.exports = {
  sumOdds,
  characterCount,
  differences,
  largestIncrement,
  afterX,
  abbreviate,
  isUpperCase,
  elementInArray,
  reverseString,
};
