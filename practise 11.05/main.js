let box = document.querySelector(".boxes");

function getData() {
  box.innerHTML = "";

  fetch(" http://localhost:3000/blogs")
    .then((res) => res.json())
    .then((data) =>
      data.forEach((element) => {
        box.innerHTML += `
    <div class="box">
    <h2>${element.title}</h2>
    <p>
     ${element.body.slice(0, 100)}...<a href="details.html?id=${
          element.id
        }" >Read More</a>
    </p>
    <span>written by:${element.author}</span><br /><br />
    <button class="deleteBtn" onclick=deleteBtn(${element.id})  id=${
          element.id
        } >Delete</button>

    </div>
    
    `;
      })
    );
}
getData();

function deleteBtn(id) {
  // console.log(id);
  fetch(`http://localhost:3000/blogs/${id}`, {
    method: "DELETE",
  }).then(() => {
    getData();
  });
  document.querySelector(`#${id}`).closest("box").remove();
}
