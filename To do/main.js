let add = document.querySelector(".btn");
let input = document.querySelector("#todo-input");
let ul = document.querySelector(".list-group");

let todoArr = JSON.parse(localStorage.getItem("local")) ?? [];

add.addEventListener("click", function (e) {
  let obj = {
    text: input.value,
    id: Date.now(),
  };

  todoArr.push(obj);

  localStorage.setItem("local", JSON.stringify(todoArr));

  repeat();
});


function repeat() {
  ul.innerHTML = "";
  todoArr.forEach((element) => {
    ul.innerHTML += `
    <li
    class="list-group-item list-group-item-success my-2 d-flex justify-content-between align-items-center rounded"
  >
  <input type="checkbox" name="" id="">
  
    <span>${element.text}</span>
    <div>
      <button type="button" class="btn btn-success" onclick=editTodo(${element.id}>
        Edit
      </button>
      <button type="button" class="btn btn-danger" onclick=removeTodo(${element.id})>
        Delete
      </button>
    </div>
  </li>
    `;
  });
}

function removeTodo(id) {
  todoArr = todoArr.filter((item) => item.id != id);
  localStorage.setItem("local", JSON.stringify(todoArr));
  repeat();
}

// function editTodo(id) {
// console.log("
















");
  todoArr.find((el)=>el.id == id ? input.value= element.text :12)
  localStorage.setItem("local", JSON.stringify(todoArr));
  repeat();
}

repeat();
