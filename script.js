//Assignment : Form Validation
//Author : Geetanjali Pawase


// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,

let submitButton = document.getElementById('submit');

// <input type="text" id="fullname">,

let fullName = document.getElementById('fullname');

// <input type="text" id="email">

let email = document.getElementById('email');

// <textarea id="message"></textarea>

let message = document.getElementById('message');

// Declare variable that will store regular expression for email

let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).

function handleForm() {       
    
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    // Declare array that will store the errors
    
    let userinput = {};
    let errors = [];


/* 
    +-----------+    
    | FULL NAME |
    +-----------+
*/
    // Check if fullname is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors".
    // End your conditional here.
    
    if (fullName.value !== '') {
            
        userinput.fullname = fullName.value;
        
    } else {
        
        errors.push('Full Name is missing!');
    }


/*
    +-------+    
    | EMAIL | 
    +-------+
*/
    // Check if email is not empty.
       // Check if email is valid.
       // If so:
          // Pass the collected value
          // to your object "data".
       // Otherwise:
          // Create a corresponding error-message
          // and add it to your array "errors".
       // End your nested conditional here.
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your outer conditional here.
    
    if (email.value !== '') {
        
        if (emailPattern.test(email.value)) {
            
            userinput.email = email.value;
            
        } else {
            
            errors.push('Invalid email!');
        }
        
    } else {
        
        errors.push('Email is missing!');
    }
    

/*  +---------+    
    | MESSAGE | 
    +---------+
*/
    // Check if message is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your conditional here.
    
    if (message.value !== '') {
           
            userinput.message = message.value;
        
        } else {
            
            errors.push('Message is missing!');
    }


    
/*  +-----------------+
    | FEEDBACK/ERRORS |
    +-----------------+
*/
    // Check if there is anything in array errors
       // If so: 
       // Print it in JavaScript console.
    // Otherwise:
       // Print the data in JavaScript console.
       // Clear text-fields
    // End your conditional here.
    
    if (errors.length === 0) {
        
        console.log('COLLECTED DATA', userinput);
    
    } else {
        
        console.log('ERRORS', errors);
    }


// Close your function here
}

// Register your form to "click" event.
submitButton.addEventListener('click', handleForm);