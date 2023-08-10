let inputTxt = document.getElementById("email");
let submit = document.getElementById("submit");
let error = document.getElementById("error_message");
let container = document.getElementById("container");
let success = document.getElementById("success");
let Dismiss = document.getElementById("Dismiss");
Dismiss.onmouseover = function () {
  Dismiss.style.background = "hsl(4, 100%, 67%)";
};
submit.addEventListener("click", function (e) {
  let emailValid = false;
  let emailFormat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputTxt.value.match(emailFormat)) {
    emailValid = true;
    container.style.display = "none";
    error.style.display = "none";
    inputTxt.style.backgroundColor = "rgb(128, 243, 128)";
    inputTxt.style.border = "2px solid green";
    inputTxt.style.color = "none";
  } else {
    error.style.display = "block";
    inputTxt.style.backgroundColor = "hsl(3, 80%, 86%)";
    
  }
  inputTxt.style.color = "none";
  inputTxt.style.backgroundColor = "none"
  if ((emailValid = false)) {
    e.preventDefault();
  }


});
Dismiss.addEventListener("click", function () {
  container.style.display = "flex";
});
