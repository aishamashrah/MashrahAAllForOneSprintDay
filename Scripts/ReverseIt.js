// function Reverse(){
//     fetch('https://aishaallforoneapi.azurewebsites.net/NewApi/Reverse/123')
//       .then((response) => response.text())
//       .then((data) => console.log(data));
//     }
  
// Reverse();


let input1 = document.getElementById("Reverseinput");

let helloReturn = document.getElementById("ReverseReturn");
let addingBtn = document.getElementById("ReverseBtn");


ReverseBtn.addEventListener("click", function () {
  GetData()
})

function GetData() {
  fetch("https://ulisesallforone.azurewebsites.net/All4One/reverse/" + Reverseinput.value).then(
    response => response.text()).then(
      data => ReverseReturn.textContent = data
    )
}