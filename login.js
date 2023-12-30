var email=document.forms['form']['email'];
var password=document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventlistener('textInput', email_Verify);
password.addEventlistener('textInput', pass_Verify);
function validate(){
  if(email.value.length < 6){
    email.style.border = "1px solid red";
    email_error.style.display="block";
    email.focus();
    return false;
  }
  if(passwordl.value.length < 9){
    password.style.border = "1px solid red";
    pass_error.style.display="block";
    password.focus();
    return false;
  }
}
function email_Verify(){
  if(password.value.length >= 5)
  {
    password.style.border = "1px solid silver";
    pass_error.style.display = "none";
    return true;
  }
}