var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var subjectError = document.getElementById('subject-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');


function validateName() {
    var name=document.getElementById('contact-name').value.trim();  

    if (name.length==0) {
        nameError.innerHTML='Name is Required';
        nameError.style.color='red'
        return false;
    }
    
    if (name.length<4) {
        nameError.innerHTML='Minimum length is 4';
        nameError.style.color='red'
        return false;
    }

    if (!name.match(/^[A-Za-z ]*$/)){
        nameError.innerHTML='Enter a valid name';
        nameError.style.color='red'
        return false;
    }
    
    nameError.innerHTML='Name is valid';
    nameError.style.color='green'
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value.trim();
    if (email.length==0) {
        emailError.innerHTML='Email is Required';
        emailError.style.color='red'
        return false;
    }

    if (!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailError.innerHTML='Email is Invalid';
        emailError.style.color='red'
        return false;
    }
    emailError.innerHTML='Email is valid';
    emailError.style.color='green'
    return true;
}
function validateSubject() {
    var subject=document.getElementById('contact-subject').value.trim();
    var Required=4;
    var left=Required - subject.length;
    
    if(left>0){
        subjectError.innerHTML =left+ 'more character Required';
        subjectError.style.color='red'
        return false;
    
    }
    subjectError.innerHTML='Message is valid';
    subjectError.style.color='green'
    return true; 
    
}

function validateMessage() {
    var message =document.getElementById('contact-message').value.trim();
    var Required=15;
    var left=Required - message.length;
    
    if(left>0){
        messageError.innerHTML =left+ 'more character Required';
        messageError.style.color='red'
        return false;
    
    }
    messageError.innerHTML='Message is valid';
    messageError.style.color='green'
    return true;    
    
}