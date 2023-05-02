let button = document.querySelector(".button");
let deleteButton = document.querySelector(".btn-dlt");
let empty = document.querySelector(".empty");

button.addEventListener("click", () => {
  localStorage.setItem("firstName", "Kamran");
  localStorage.setItem("lastName", "Agayev");
  localStorage.setItem("age", "23");
});
///////////////  1.1
console.log(`length ${localStorage.length}`);

//////////// 2

button.addEventListener("click", () => {
  
  for (let i = 0; i < localStorage.length; i++) {

    console.log(localStorage.key(i));

  }
});










///////// 3
button.addEventListener("click", () => {
   
  for (let i = 0; i < localStorage.length; i++) {

   console.log(localStorage.getItem(localStorage.key(i)));

  }
});


// /////////// 4
console.log( `4) ${localStorage.key(0)}`);


////// 4.1
let arr=[]
for (let i = 0; i < localStorage.length; i++) {
  let key =localStorage.key(i)
  let value =localStorage.getItem(key)
arr.push((localStorage.getItem(key)))
}
console.log(arr);

deleteButton.addEventListener("click",function(){

localStorage.removeItem("firstName")

})

empty.addEventListener("click",function(){

localStorage.clear()

})


