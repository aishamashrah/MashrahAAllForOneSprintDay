
  let comparingInpt1 = document.getElementById("comparingInpt1");
  let comparingInpt2 = document.getElementById("comparingInpt2");
  let ReturnedNum = document.getElementById("ReturnedNum");
  let comparingBtn= document.getElementById("comparingBtn");
  
  
  comparingBtn.addEventListener("click", function(){
    GetData()
  })
  
  function GetData(){
        fetch("https://aishaallforoneapi.azurewebsites.net/NewApi//comparing/" + comparingInpt1.value + "/" + comparingInpt2.value).then(
        response => response.text()).then(
          data => ReturnedNum.textContent = data
        )
      }