// #1  Print the number of integers in an array that are above the given input and 
// the number that are below, e.g. for the array [1, 5, 2, 1, 10] with input 6, print
//  “above: 1, below: 4”.
//////////////////////////////////////////////////////////////////////////////////////

//Set of numbers
const numbers = [26, 14, 7, 88, 5, 44, 21, 49, 61, 50, 92, 100]; 
 
//Prompts user to enter a number
let input =prompt('Enter a number between 1-100: ') 

//Counts numbers greater than input
let aboveInput = [];
for(let i = 0; i < numbers.length; i++) {
  if(numbers[i] > input) {
    aboveInput.push(numbers[i]);
  }
}

//Counts numbers less than input
let belowInput = [];
for(let i = 0; i < numbers.length; i++) {
  if(numbers[i] < input) {
    belowInput.push(numbers[i]);
  }
}

//Results
console.log('There is/are ' + aboveInput.length + ' magic number/s greater than ' + input + '!');
console.log('There is/are ' + belowInput.length + ' magic number/s less than ' + input + '!');