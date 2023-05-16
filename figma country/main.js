let row = document.querySelector(".all-cards");
let search = document.querySelector("#search");

fetch("https://restcountries.com/v2/all")
  .then((res) => res.json())
  .then((data) => createData(data));

function createData(arr) {
  row.innerHTML = "";
  arr.forEach((element) => {
    row.innerHTML += `
          <div class="col col-3">
                    <div class="card">
                      <div class="img">
                        <img src="${element.flags.svg}" alt="" />
                      </div>
                      <div class="textdiv">
                        <span><b>${element.name}</b></span>
                        <p>Popolation:${element.population}</p>
                        <p>Region:${element.region}</p>
                        <p>Capital:${element.capital}</p>
                      </div>
                    </div>
                  </div>
          
         `;
  });
}

search.addEventListener("input", function (e) {
  axios(`https://restcountries.com/v2/all`).then((res) => {
    let filtered = res.data.filter((item) => {
      return item.name
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase());
    });
    createData(filtered);
  });
});

let darkButton = document.querySelector(".darkBtn");
let section = document.querySelector(".sec1");

darkButton.addEventListener("click", function () {
  console.log("worked");

  if (section.classList.contains("light")) {
    section.classList.replace("light","dark");
  } else if (section.classList.contains("dark")) {
    section.classList.replace("dark","light");
    section.classList.add("dark");


  }
});
