function MadLib(){
    fetch('')
      .then((response) => response.text())
      .then((data) => console.log(data));
    }
  
  MadLib();