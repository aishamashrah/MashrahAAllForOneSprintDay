
//    function Odd(){
//     fetch('https://ulisesallforone.azurewebsites.net/All4One/even/15')
//       .then((response) => response.text())
//       .then((data) => console.log(data));
//     }
  
// Odd();

//    function isChecks(){
//     fetch("https://aishaallforoneapi.azurewebsites.net/NewApi/OddOrEven/")
//     let num = document.getElementById('evenOdds').value;
//     // alert(num);
//     if((num%2) == 0){
//     document.getElementById('showMssgs').innerHTML = "Number "+num+"  is an even number";
//     }
//     else{
//     document.getElementById('showMssgs').innerHTML = " "+num+"  is not an even number";
//     }
   
//      if(num === ""){
//     document.getElementById('showMssgs').innerHTML = "";
//     }
//    }
 let evenOddinput = document.getElementById("evenOddinput");

let ReturnedNum = document.getElementById("ReturnedNum");
let evenOddBtn = document.getElementById("evenOddBtn");


evenOddBtn.addEventListener("click", function () {
  GetData()
})

function GetData() {
  fetch("https://aishaallforoneapi.azurewebsites.net/NewApi/OddOrEven/" + evenOddinput.value).then(
    response => response.text()).then(
      data => ReturnedNum.textContent = data
    )
}