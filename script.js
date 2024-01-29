
// Function: creates a new paragraph and appends it to the bottom of the HTML body.

function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
  }
  
/*
  Step 1. Get references to all the buttons on the page in an array format.
  Step 2. Loop through all the buttons and add a click event listener to each one.
*/

// Step 1
  const buttons = document.querySelectorAll("button");
 
// Step 2
  for (const button of buttons) {
    button.addEventListener("click", createParagraph);
  }

//  When any button is pressed, the createParagraph() function will be run.