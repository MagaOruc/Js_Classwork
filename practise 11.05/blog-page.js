// const { json } = require("body-parser");
// const { add } = require("lodash");

let form = document.querySelector("form");
let title = document.querySelector("#title");
let bodyInput = document.querySelector("#body");
let select = document.querySelector("#authors");

// let addBtn = document.querySelector(".addBtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let obj = {
    title: title.value,
    body: bodyInput.value,
    author: select.value,
  };

  fetch("http://localhost:3000/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  window.location = "index.html";
});
