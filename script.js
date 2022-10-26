let pattern =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let emailField = document.getElementById("email-field");
let message = document.querySelector(".validation");
let emailSec = document.getElementById("validation-sec");
let emailFieldSec = document.getElementById("email-field-sec");

function validateEmail() {
  if (emailField.value.match(pattern)) {
    message.style.display = "none";
    console.log("123");
    return true;
  } else {
    message.style.display = "block";
    console.log("123");
    return false;
  }
}

function validateEmailSec() {
  if (emailFieldSec.value.match(pattern)) {
    emailSec.style.display = "none";
    console.log("123");
    return true;
  } else {
    emailSec.style.display = "block";
    console.log("123");
    return false;
  }
}
