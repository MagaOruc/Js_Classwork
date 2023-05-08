let base_url="https://northwind.vercel.app/api/orders"

let allCards=document.querySelector(".cards")
let editBtn=document.querySelector(".fa-pen")
let deleteBtn=document.querySelector(".fa-trash-can")

async function createData(){
    await fetch(`${base_url}`)
    .then((res)=>res.json())
    .then((data)=> {
    const newData = data.filter(el=>el.shipAddress.country == "USA" )
      
    
      
    newData.forEach(element => {
        allCards.innerHTML +=`
        <div class="col-5 card ">
               
        <h3 class="m-2">${element.shipAddress.city}</h3>
        <span class="m-2">${element.shipAddress.country}</span>
    
      <i class="fa-solid fa-pen"></i>
    <i class="fa-solid fa-trash-can"></i>
        </div>
          ` 
    });
});
}
createData()
    
async function deleteUser(userId){
    await fetch(`
    
    `)
}
  
    