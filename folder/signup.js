let submitbtn = document.querySelector(".subBtn");
let checkbox = document.querySelector(".check");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let allInput = document.querySelectorAll("input");

submitbtn.disabled = true;

username.addEventListener("input", function () {
    repeater()
});
email.addEventListener("input", function () {
    repeater()
});
password.addEventListener("input", function () {
    repeater()
});
checkbox.addEventListener("input", function () {
    repeater()
});

function repeater() {
  if (username.value && email.value && password.value && checkbox.checked) {
    submitbtn.disabled = false;
  } else {
    submitbtn.disabled = true;
  }
}

let array = JSON.parse(localStorage.getItem("data")) ??[]
submitbtn.addEventListener("click", function(){

     let obj={
        name:username.value,
        email:email.value,
        id:Date.now(),
     }

    array.push(obj) 

    localStorage.setItem("data", JSON.stringify(array))

    window.location.href="http://127.0.0.1:5500/users.html"


})
