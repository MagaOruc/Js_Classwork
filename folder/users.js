let boxes = document.querySelector(".boxes");
let addBtn = document.querySelector(".addBtn");
let allUsers = JSON.parse(localStorage.getItem("data")) ?? [];

addBtn.addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5500/singup.html";
});


  const box = document.createElement("div");
  allUsers.forEach((element) => {
    box.innerHTML += `

            <div class="card m-2" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title text-center ">User</h5>
                  <p class="card-text">name:${element.name}]</p>
                  <p class="card-text">email:${element.email}</p>
                  <button class="bt btn-danger">Delete</button>
                </div>
              </div>

`;
    boxes.append(box);
  });

