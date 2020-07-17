
function findNumbers() {

const numbers = [26, 14, 7, 88, 5, 44, 21, 49, 61, 50, 92, 100]; 

let input = document.getElementById("user-num").value;
let submitButton = document.getElementById("submit-num");
let messageArea1 = document.getElementById("message1");
let messageArea2 = document.getElementById("message2");

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


document.getElementById("submit-num").addEventListener("click", write);

function write(){
    if (input > 0 && input < 101) {
    document.getElementById("message1").innerHTML = 'There is/are ' + aboveInput.length + ' magic number/s greater than ' + input + '!';
    document.getElementById("message2").innerHTML = 'There is/are ' + belowInput.length + ' magic number/s less than ' + input + '!';
    

    }
    else  {
		// Nothing entered or our of range.
        document.getElementById("message1").innerHTML ='Please enter a number 1-100';
        document.getElementById("message2").innerHTML="";
            
    }
}

 //Resets message and input
 setTimeout(function(){
    document.getElementById("message1").innerHTML="";
    document.getElementById("message2").innerHTML="";
    document.getElementById("user-num").value="";
},5000);

}

// End of findNumbers function 


