// function MadLib(){
//     fetch('')
//       .then((response) => response.text())
//       .then((data) => console.log(data));
//     }
  
//   MadLib();



let Madlipinput1 = document.getElementById("Madlipinput1");
let Madlipinput2 = document.getElementById("Madlipinput2");
let Madlipinput3 = document.getElementById("Madlipinput3");
let Madlipinput4 = document.getElementById("Madlipinput4");
let Madlipinput5 = document.getElementById("Madlipinput5");
let Madlipinput6 = document.getElementById("Madlipinput6");
let Madlipinput7 = document.getElementById("Madlipinput7");
let Madlipinput8 = document.getElementById("Madlipinput8");
let Madlipinput9 = document.getElementById("Madlipinput9");
let Madlipinput10 = document.getElementById("Madlipinput10");

let madlipReturned = document.getElementById("madlipReturned");
let madlipBtn = document.getElementById("madlipBtn");


madlipBtn.addEventListener("click", function () {
  GetData()
})

function GetData() {
  fetch("https://aishaallforoneapi.azurewebsites.net/NewApi/Mad/" 
  + Madlipinput1.value + 
  "/" + Madlipinput2.value +
   "/" + Madlipinput3.value + 
   "/" + Madlipinput4.value + 
   "/" + Madlipinput5.value + 
   "/" + Madlipinput6.value + 
   "/" + Madlipinput7.value + 
   "/" + Madlipinput8.value + 
   "/" + Madlipinput9.value + 
   "/" + Madlipinput10.value).then(
    response => response.text()).then(
      data => madlipReturned.textContent = data
    )
}
