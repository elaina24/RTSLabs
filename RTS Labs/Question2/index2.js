function right_two() {
    //Set variable to users input
  
  let lastName = document.getElementById("name").value;
    //check name is more than 1 letter
    if (lastName.length > 2) {
        //return last 2 letters + the beginning of the name minus the last 2 letters
        lastName =  lastName.slice(-2) + lastName.slice(0, -2); 
      }
  
  
  document.getElementById("enterName").addEventListener("click", write);
  
  function write(){
      if (lastName.length > 2) {
          document.getElementById("textOutput").innerHTML='Wait! Theres no way that "' + (lastName) + '" could be right...';
      }
          else {
              document.getElementById("textOutput").innerHTML ='Sorry, your name is too short. Lucky you!';
          }
      }
  
      setTimeout(function(){
          document.getElementById("name").innerHTML="";
          document.getElementById("textOutput").value="";
      },5000);
      }

