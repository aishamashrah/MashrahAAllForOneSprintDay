
// let nameInput = document.getElementById("nameInput");


// let helloSubBtn = document.getElementById("helloReturn");




// nameInput.addEventListener('click',function(){
//      getData()
// })
// function getData(){
//     fetch("https://localhost:7294/NewApi/Hello/Aisha").then(
//         response => response.json()
//     ).then(
//         data => helloSubBtn.nameInput = data.slip.aisha
//     )
// }






let nameInput = document.getElementById("nameInput");

let helloReturn = document.getElementById("helloReturn");
let helloSubBtn = document.getElementById("helloSubBtn");

//console.log(nameInput, helloReturn, helloSubBtn);
let savedInput = "";
let sayHelloUrl = "";
helloSubBtn.addEventListener("click", function () {
helloApi(nameInput)
})
function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            helloReturn.textContent = data
            console.log(data)
        }
    )
}
function helloApi(nameInput){
    var letters = /^[A-Za-z]+$/;
    if(nameInput.value.match(letters)){
        savedInput = nameInput.value;
        sayHelloUrl = "https://aishaallforoneapi.azurewebsites.net/NewApi/Hello/" + savedInput;
        urlCall(sayHelloUrl)
    }else{
        helloReturn.textContent = "Enter a valid respsonse";
    }
}
