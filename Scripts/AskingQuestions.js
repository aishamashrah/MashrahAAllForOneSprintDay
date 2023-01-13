


  let askingInpt1 = document.getElementById("askingInpt1");
  let askingInpt2 = document.getElementById("askingInpt2");
  let ReturnedQ = document.getElementById("ReturnedQ");
  let askingbtn = document.getElementById("askingBtn");
  
  
  askingBtn.addEventListener("click", function(){
    GetData()
  })
  
  function GetData(){
        fetch("https://aishaallforoneapi.azurewebsites.net/NewApi/Asking/" + askingInpt1.value + "/" + askingInpt2.value).then(
        response => response.text()).then(
          data => ReturnedQ.textContent = data
        )
      }
    

// let nameInput1 = document.getElementById("askingInpt1");
// let nameInput2 = document.getElementById("askingInpt2");
// let helloReturn = document.getElementById("ReturnedQ");
// let helloSubBtn = document.getElementById("askingbtn");



// let savedInput = "";
// let sayHelloUrl = "";
// // askingbtn.addEventListener("click", function () {
// // // helloApi(numberInpt)
// // Askingnum()
// // })
// // function urlCall(url) {
// //     fetch(url).then(
// //         response => response.text()
// //     ).then(
// //         data => {
// //             ReturnedNum.textContent = data
// //             console.log(data)
// //         }
// //     )
// // }
// // function helloApi(askingInpt1){
    
// //     if(askingInpt1.value.match(letters)){
// //         savedInput = numberInpt.value;
// //         sayHelloUrl = "https://aishaallforoneapi.azurewebsites.net/NewApi/Adding/" + askingInpt1+"/"+askingInpt2;
// //         urlCall(sayHelloUrl)
// //     }else{
// //         ReturnedNum.textContent = "Enter a valid respsonse";
// //     }
// // }

// // console.log(sayHelloUrl)
 
// // let numUrl ="";

// // function Askingnum(){
// //     let num1 = askingInpt1.value;
// //     let num2 = askingInpt2.value;
// //     numUrl = "https://aishaallforoneapi.azurewebsites.net/NewApi/Asking/" + num1+"/"+num2;
// //     urlCall(numUrl)

// // }

      
// // async function loadQuestion(){
// //     const APIUrl = 'https://aishaallforoneapi.azurewebsites.net/NewApi/Adding';
// //     const result = await fetch(`${APIUrl}`)
// //     const data = await result.json();
// //     _result.innerHTML = "";
// //     showQuestion(data.results[0]);
// // }
// // console.log(loadQuestion);

// askingbtn.addEventListener("click", function () {
//     // helloApi(numberInpt)
//     askingq()
//     })


//     function urlCall(url) {
//         fetch(url).then(
//             response => response.text()
//         ).then(
//             data => {
//                 ReturnedNum.textContent = data
//                 console.log(data)
//             }
//         )
//     }
//     console.log(sayHelloUrl)
 
// let numUrl ="";

// function Askingq(){
//     let num1 = askingInpt1.value;
//     let num2 = askingInpt2.value;
//     numUrl = "https://aishaallforoneapi.azurewebsites.net/NewApi/Asking/" + num1+"/"+num2;
//     urlCall(numUrl)

// }