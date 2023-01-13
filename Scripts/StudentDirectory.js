

function Student(){
    fetch('https://aishaallforoneapi.azurewebsites.net/NewApi/GetStudentByFirstName/Aisha')
      .then((response) => response.text())
      .then((data) => console.log(data));
    }
  
Student();