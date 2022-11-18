let pattern =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let emailField = document.getElementById("email-field");
let message = document.querySelector(".validation");
let emailSec = document.getElementById("validation-sec");
let emailFieldSec = document.getElementById("email-field-sec");
const signIn = document.querySelector("#signin");
const loginBlock = document.querySelector(".login");
const container = document.querySelector(".container");
const close = document.querySelector("#close");
const btn = document.querySelector("#btn");
const mail = document.querySelector("#mail-input");
const pass = document.querySelector(".pass");

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

signIn.addEventListener("click", function () {
  loginBlock.style.display = "block";
});

close.addEventListener("click", function () {
  loginBlock.style.display = "none";
  mail.value = "";
  pass.value = "";
  document.querySelector("#mail-error").style.display = "none";
  document.querySelector("#pass-error").style.display = "none";
});

btn.addEventListener("click", function () {
  if (mail.value && pass.value) {
    loginBlock.style.display = "none";
    mail.value = "";
    pass.value = "";
    document.querySelector("#mail-error").style.display = "none";
    document.querySelector("#pass-error").style.display = "none";
  } else if (!mail.value) {
    document.querySelector("#mail-error").style.display = "block";
  } else if (!pass.value) {
    document.querySelector("#pass-error").style.display = "block";
  }
});
