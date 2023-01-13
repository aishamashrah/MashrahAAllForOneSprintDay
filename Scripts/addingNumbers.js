
let numberInput1 = document.getElementById("numberInput1");
let numberInput2 = document.getElementById("numberInput2");
let ReturnedNum = document.getElementById("ReturnedNum");
let NumSubBtn = document.getElementById("NumSubBtn");

//console.log(nameInput, helloReturn, helloSubBtn);
let savedInput = "";
let sayHelloUrl = "";
NumSubBtn.addEventListener("click", function () {
// helloApi(numberInpt)
addingnum()
})
function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            ReturnedNum.textContent = data
            console.log(data)
        }
    )
}
function helloApi(numberInpt){
    
    if(numberInpt.value.match(letters)){
        savedInput = numberInpt.value;
        sayHelloUrl = "https://aishaallforoneapi.azurewebsites.net/NewApi/Adding/" + numberInput1+"/"+numberInput2;
        urlCall(sayHelloUrl)
    }else{
        ReturnedNum.textContent = "Enter a valid respsonse";
    }
}

console.log(sayHelloUrl)
 
let numUrl ="";

function addingnum(){
    let num1 = numberInput1.value;
    let num2 = numberInput2.value;
    numUrl = "https://aishaallforoneapi.azurewebsites.net/NewApi/Adding/" + num1+"/"+num2;
    urlCall(numUrl)

}
