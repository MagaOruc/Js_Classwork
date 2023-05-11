let id = new URLSearchParams(window.location.search).get("id");

let body = document.querySelector(".body");
let title = document.querySelector(".title");
let author = document.querySelector(".author");
let btn = document.querySelector(".goback");

fetch(`http://localhost:3000/blogs/${id}`)
  .then((res) => res.json())
  .then((data) => {
    body.innerHTML = data.body;
    title.innerHTML = data.title;
    author.innerHTML = data.author;
  });

btn.addEventListener("click", function () {
  window.location = "index.html";
});
