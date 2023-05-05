// import { url } from "./api.js";

let URL = "https://northwind.vercel.app/api/suppliers";

let tbody = document.querySelector("tbody");

function createTable() {
  fetch(URL)
    .then((data1) => data1.json())
    .then((data2) => {
      data2.forEach((element) => {
        console.log("assa");
        let tr = document.createElement("tr");

        tr.innerHTML = `
        
        <td>${element.id}</td>
       <td>${element.companyName}</td>
       <td>${element.address?.city}</td>
       <td>${element.address?.country}</td>
       <td>${element.address?.phone}</td>
       
       <td><button>Delete</button></td>
  
    `;
        tbody.append(tr);
      });
    });
}
createTable();


