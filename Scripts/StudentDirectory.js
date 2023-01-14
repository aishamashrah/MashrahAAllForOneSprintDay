

// function Student(){
//     fetch('https://aishaallforoneapi.azurewebsites.net/NewApi/GetStudentByFirstName/Aisha')
//       .then((response) => response.text())
//       .then((data) => console.log(data));
//     }
  
// Student();


let studentinput = document.getElementById("studentinput");
let StudentBtn = document.getElementById("StudentBtn");
//
let studentsreturn = document.getElementById("studentsreturn");




StudentBtn.addEventListener("click", function () {
  GetData()
 
})

function GetData() {
  fetch("https://aishaallforoneapi.azurewebsites.net/NewApi/GetStudentByFirstName/" + studentinput.value ).then(
    response => response.json()).then(
      data => {studentsreturn.textContent = "Student first Name : " + data.firstName + "Student last Name : " +  data.lastName + data.slackName
      }
    )
}

