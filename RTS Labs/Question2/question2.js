//Set variable to users input
let lastName = prompt('Enter your last name: ');
function right_two(lastName) {
  if (lastName.length > 2) //check name is more than 2 letter
    {
      //return last 2 letters + the beginning of the name minus the last 2 letters
      return lastName.slice(-2) + lastName.slice(0, -2); 
    }
return lastName;
}
console.log('Wait! Theres no way that "' + (right_two(lastName)) + '" could be right...');