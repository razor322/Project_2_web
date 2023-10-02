var num1, num2;

var kotak1 = document.getElementById("angka1");
var kotak2 = document.getElementById("angka2");
var operator = document.getElementById("operator");

const refreshButton = document.getElementById("refreshButton");

refreshButton.addEventListener("click", function() {
    location.reload();
});

num1 = window.prompt("Angka Pertama", "0");
num2 = window.prompt("Angka Kedua", "0");

kotak1.innerHTML = num1;
kotak2.innerHTML = num2;
                                                 
if(parseInt(num1, 10) > parseInt(num2, 10)) 
  { 
    operator.innerHTML = ">"
  }   
else
  if(parseInt(num2, 10) > parseInt(num1, 10)) 
  {
    operator.innerHTML = "<"
  }                  
else
  {
    operator.innerHTML = "="
  }
