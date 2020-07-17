
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Question #1
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

////////////////////////////////////////////////////////////////////////////////////

//Set variable to users input
let lastName = document.getElementById("name").value;
function right_two(lastName) {
  if (lastName.length > 1) //check name is more than 1 letter
    {
      //return last 2 letters + the beginning of the name minus the last 2 letters
      return lastName.slice(-2) + lastName.slice(0, -2); 
    }
return lastName;
}
console.log('Wait! Theres no way that "' + (right_two(lastName)) + '" could be right...');


//////////////////////////////////////////////////////////////////////////////////////////////////////

let lastName = '';
function fn1() {
    lastName = prompt('Enter your last name: ')
    return lastName;
    
  }
  console.log(lastName);

  function right_two(lastName) {
    if (lastName.length > 1) //check name is more than 1 letter
      {
        //return last 2 letters + the beginning of the name minus the last 2 letters
        return lastName.slice(-2) + lastName.slice(0, -2); 
      }
  return lastName;
  }

  console.log('Wait! Theres no way that "' + (right_two(lastName)) + '" could be right...');