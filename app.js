//Setting variables
const from = document.querySelector('#from input'),
    sendForm = document.querySelector('#email-form'),
    to = document.querySelector('#to input'),
    subject = document.querySelector('#subject input'),
    message = document.querySelector('#mess textarea'),
    resetBtn = document.querySelector('#resetBtn'),
    sendBtn = document.querySelector('#submitBtn');


    //Setting up Event Listners
    eventListener();

function eventListener(){
   //Disabling Button onLoad
document.addEventListener('DOMContentLoaded', appInit)    
   
   from.addEventListener('blur', validateForm);
    to.addEventListener('blur', validateForm);
    subject.addEventListener('blur', validateForm);
    message.addEventListener('blur', validateForm);
    resetBtn.addEventListener('click', resetForm);
    sendForm.addEventListener('submit', sendEmail);

}


//Setting up Functions

//App Init creation
function appInit(){
    //disable send button
    sendBtn.disabled=true;
}



function validateForm(){
let errors;

//validate the Length of the inputs
validateLength(this);

if(this.type == 'email'){
    validateEmail(this);
}

//Returning and Rechecking erros if there are any

errors = document.querySelectorAll('.error');
//checking if inputs are empty 
if(from.value && to.value && subject.value && message.value !== ""){
    if(errors.length === 0){

        sendBtn.disabled = false;
    }
}
}


function validateLength(field){
    if(field.value.length > 0){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }

    else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}



function validateEmail(field){
    let emailText = field.value;
    // validating the @ sign
    if(emailText.indexOf('@'&& '.com') !== -1){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
        
    }
    else {
       field.style.borderBottomColor = 'red';
       field.classList.add('error'); 
       
    }
}

//Reseting Form

function resetForm(){
   sendForm.reset();           
}




function sendEmail(e){
    e.preventDefault();

    //sendForm.reset();   

    

  // show the GIFs

  const spinner = document.querySelector('#spinner img'),
  Mail = document.querySelector('#mail img');
  Mail.style.display = 'none';
  spinner.style.display = "block";
  Mail.style.marginLeft= "12em";
  spinner.style.marginLeft= "12em";
  //hiding spinner
  setTimeout( ()=> {
     spinner.style.display = "none";
     }, 3000);

     // showing Mail sent 
     setTimeout( ()=> {
        Mail.style.display = "block";
     
        }, 3000);

        
     //mention out values
     let Details =`
     From: ${document.querySelector('#from input').value}
      To: ${document.querySelector('#to input').value}
     Subject: ${document.querySelector('#subject input').value}
     Message: ${document.querySelector('#mess textarea').value}
     `;
     
    //Setting up into Storage
     saveIntoStorage(Details);

       
     // Calling out the @media query in here since its working only in this function

     function myFunction(a) {
        if (a.matches) {
            spinner.style.marginLeft= "10em";
            Mail.style.marginLeft= "10em";
        }
      }
      
      var a = window.matchMedia("(max-width: 1110px)")
      myFunction(a)
      a.addListener(myFunction)


      function myFunction(b) {
        if (b.matches) {
            spinner.style.marginLeft= "8em";
            Mail.style.marginLeft= "8em";
        }
      }
      
      var b = window.matchMedia("(max-width: 1040px)")
      myFunction(b)
      b.addListener(myFunction)


      function myFunction(c) {
        if (c.matches) {
            spinner.style.marginLeft= "6em";
            Mail.style.marginLeft= "6em";
        }
      }
      
      var c = window.matchMedia("(max-width: 930px)")
      myFunction(c)
      c.addListener(myFunction)


      function myFunction(d) {
        if (d.matches) {
            spinner.style.marginLeft= "4em";
            Mail.style.marginLeft= "4em";
        }
      }
      
      var d = window.matchMedia("(max-width: 780px)")
      myFunction(d)
      d.addListener(myFunction)


      function myFunction(e) {
        if (e.matches) {
            spinner.style.marginLeft= "2em";
            Mail.style.marginLeft= "2em";
        }
      }
      
      var e = window.matchMedia("(max-width: 680px)")
      myFunction(e)
      e.addListener(myFunction)


      function myFunction(f) {
        if (f.matches) {
            spinner.style.marginLeft= "0em";
            Mail.style.marginLeft= "0em";
        }
      }
      
      var f = window.matchMedia("(max-width: 540px)")
      myFunction(f)
      f.addListener(myFunction)


      function myFunction(g) {
        if (g.matches) {
            spinner.style.marginLeft= "-1em";
            Mail.style.marginLeft= "-1em";
        }
      }
      
      var g = window.matchMedia("(max-width: 450px)")
      myFunction(g)
      g.addListener(myFunction)


      function myFunction(h) {
        if (h.matches) {
            spinner.style.width= "5em";
            Mail.style.width= "5em";
            spinner.style.marginLeft= "1em";
            Mail.style.marginLeft= "1em";
        }


        function myFunction(i) {
            if (i.matches) {

                spinner.style.marginLeft= "0em";
                Mail.style.marginLeft= "0em";
            }


      }
      
      var i = window.matchMedia("(max-width: 350px)")
      myFunction(i)
      i.addListener(myFunction)


}

//End of @media query WE DONE!!!!

}

//Pushing Details into Storage
function saveIntoStorage(Details){
      
    localStorage.setItem('Details', JSON.stringify(Details));

    
}


