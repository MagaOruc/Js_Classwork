

function common(){
    fetch("https://jsonplaceholder.typicode.com/todos")
  .then((data1) => data1.json())
  .then((data2) => console.log(data2));
}
common()

  function compleatedTrue(){
    fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data2) => {
    let updated = data2.filter((el) => el.completed);
    console.log(updated);
  });
  }compleatedTrue()

function forId(){
    fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    let userId = json.filter((element) => element.userId==2);
    console.log(userId);
  });
}forId()
