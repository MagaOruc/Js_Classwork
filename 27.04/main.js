let nameInput = document.querySelector("#name");
let surnameInput = document.querySelector("#surname");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let checkbox = document.querySelector("#checkbox");
let radio = document.querySelectorAll("#radio");
let submit = document.querySelector("#submit");

nameInput.addEventListener("focus", function () {
  this.style.background = "gray";
});
nameInput.addEventListener("blur", function () {
  this.style.background = "transparent";
});

surnameInput.addEventListener("mouseover", function () {
  this.style.background = "red";
});
surnameInput.addEventListener("mouseout", function () {
  this.style.background = "transparent";
});

emailInput.addEventListener("blur", function () {
  this.style.background = "transparent";
});

emailInput.addEventListener("contextmenu", function () {
  this.style.background = "blue";
});

passwordInput.addEventListener("focus", function () {
  passwordInput.value = "12345678";
});

passwordInput.addEventListener("blur", function () {
  passwordInput.value = "";
});

checkbox.addEventListener("click", function () {
  this.style.accentColor = "blue";

  if (checkbox.checked) {
    checked.style.visibility = "visible";
  } else {
    checked.style.visibility = "hidden";
  }
});

radio.forEach((item) => {
  item.addEventListener("click", function () {
    this.style.accentColor = "blue";
    alert("Thanks");
  });
});

submit.disabled = "true";

checkbox.addEventListener("click", function () {
  if (
    nameInput.value &&
    surnameInput.value &&
    emailInput.value &&
    checkbox.checked
  ) {
    submit.removeAttribute("disabled");
  } else {
    submit.disabled = "true";
  }
});
nameInput.required = true;
surnameInput.required = true;
emailInput.required = true;
// passwordInput.required = true;

// submit.addEventListener("submit", function () {
//   if (
//     nameInput.value &&
//     surnameInput.value &&
//     emailInput.value &&
//     checkbox.checked
//   ) {
//     submit.removeAttribute("disabled");
//   } else {
//     submit.disabled = "true";
//   }
// });
