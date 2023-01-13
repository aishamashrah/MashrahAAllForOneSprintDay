// function Restaurant(){
//     fetch('https://aishaallforoneapi.azurewebsites.net/NewApi/pick/3')
//       .then((response) => response.text())
//       .then((data) => console.log(data));
//     }
  
// Restaurant();

let pickinput = document.getElementById("pickinput");
let pickinput1 = document.getElementById("pickinput1");
let pickinput2 = document.getElementById("pickinput2");


let pickBtn = document.getElementById("pickBtn");


pickBtn.addEventListener("click", function () {
  GetData() 
   GetData1() 
   GetData2() 
})



function GetData() {
  fetch("https://aishaallforoneapi.azurewebsites.net/NewApi/pick/" + pickinput.value).then(
    response => response.text()).then(
      data => Returnedpick.textContent = data
    )
}
function GetData1() {
  fetch("https://aishaallforoneapi.azurewebsites.net/NewApi/pick/" + pickinput1.value).then(
    response => response.text()).then(
      data => Returnedpick.textContent = data
    )
}
function GetData2() {
  fetch("https://aishaallforoneapi.azurewebsites.net/NewApi/pick/" + pickinput2.value).then(
    response => response.text()).then(
      data => Returnedpick.textContent = data
    )
}