// Only Odds

// create a JS code that accepts an array of numbers and returns a new array with only the odd numbers from the original array.
// if there is only one odd number return an array with that single value

// define the array and the numbers we will be testing
// define what were going to use to filter out the odd numbers to make it easier to console log
// creat a filter that will find if n is even and then remove it

// let numbers = [2, 4, 6, 8, 10, 11, 12];

// let oddNumbers = numbers.filter((n) => n % 2);
// // if n is even n%2 will filter it out so we only have odd numbers

// console.log(oddNumbers);

// Reverse Array

// using a for loop create a code that creates a new array in reverse order
// create an array and loop through it from the the last item to the first item and push those items to a new array

// let num = [1, -1, 2, -3, 5, -8, 13];
// const reversedNum = [];

// for (let i = num.length - 1; i >= 0; i--) {
//   let indexValue = num[i];
//   reversedNum.push(indexValue);
// }
// console.log(reversedNum);

// create an array and use the .reverse() method to reverse it

// const num = [1, -1, 2, -3, 5, -8, 13];
// num.reverse();
// console.log(num);

// FizzBuzz
// create code that prints each number from 1 to 100 on a new line
// for each multiple of 3 print 'Fizz' instead of the number
// multiples of 5 will print 'Buzz' instead of the number
// if its a multiple of 5 and 3 print "FizzBuzz" instead of the number
// set index to 1
// set the loop to go starting at index of 1, if i is less than 101 it will go so we end up with 1-100
// if i % 15 = 0  then we can console fizzbuzz
// if % 3 === we can do fizz
// and if % 5 we can just do buzz, otherwise we will just print the number

// for (let i = 1; i < 101; i++) {
//   if (i % 15 === 0) console.log("FizzBuzz");
//   else if (i % 3 === 0) console.log("Fizz");
//   else if (i % 5 === 0) console.log("Buzz");
//   else console.log(i);
// }

// Vowel versus Consonant

// create a JS code that accepts a string of lowercase letters print the word followed by how man consnsants and vowels it has
// a e i o u are the vowels and everything else is a consonant
// will need a tracker for both vowels and consonants

// define the variable that we will use for the example words
// create variables for vowel and consonant counting and set them to 0
// for loop through the word and if it equals any of the vowels add 1 to the vowel counter
// else if its a letter between a & z but not one of the specified vowels it will count for consonants

const word = "onomonopia";
// const vowels = ["a", "e", "i", "o", "u"];
let vowelCount = 0;
let consCount = 0;

for (let i = 0; i < word.length; i++) {
  if (
    word[i] === "e" ||
    word[i] === "a" ||
    word[i] === "u" ||
    word[i] === "o" ||
    word[i] === "i"
  ) {
    vowelCount++;
  } else if (word[i] >= "a" && word[i] <= "z") {
    consCount++;
  }
}
console.log(
  word + " has " + consCount + " consonants and " + vowelCount + " vowels"
);
