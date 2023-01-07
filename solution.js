window.onload = () => {
  // Code your solution here...

  /*
  * Hint: Whenever you're modifying the DOM, you need to reference a node (HTML element).
  *       Try and target all the squares and figure out how to assign an event listener
  *       to handle 'click' events
  * */

  // const squares = ...?


  // Similarly for the reset button, reference it and figure out what to do when
  // a click event occurs for the button

  // const buttonNode = ...?
 
 const playerO = 'O'
 const playerX = 'X'

   
  //Access the array to get index
  let arraySquare = document.getElementsByClassName("square")
  
  for (let i = 0; i < arraySquare.length; i++) {
   arraySquare[i].addEventListener('click', function(){
     if(arraySquare[i].innerHTML == "" || arraySquare[i].innerHTML == "O")
          arraySquare[i].innerHTML = playerX;
     else 
          arraySquare[i].innerHTML = playerO;
      
  })
  
}


 
const resetBtn = document.getElementById("reset-btn")

resetBtn.addEventListener('click', restartButton)

 function restartButton(){
  
  for (let i = 0; i < arraySquare.length; i++) {

     arraySquare[i].innerHTML = "";
    
     
  }; 
  
}
 

};