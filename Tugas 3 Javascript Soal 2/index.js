x = window.prompt("Angka Pertama", "0");
y = window.prompt("Angka Kedua", "0");
z = window.prompt("Angka Ketiga", "0");

var kotak1 = document.getElementById("angka1");
var kotak2 = document.getElementById("angka2");
var kotak3 = document.getElementById("angka3");
var tanda = document.getElementById("tanda");

const refreshButton = document.getElementById("refreshButton");

refreshButton.addEventListener("click", function() {
    location.reload();
});

if (x>=0 && y>=0 && z>=0)
{
       tanda.innerHTML = "+";
       tanda.classList.add("text-success");
}
else if (x<=0 && y<=0 && z<=0)
        {
          tanda.innerHTML =  "-";
          tanda.classList.add("text-danger");
        }
        else if (x>=0 && y<=0 && z<=0)
        {
          tanda.innerHTML =  "+";
          tanda.classList.add("text-success");
        }
        else if (x<=0 && y>=0 && z<=0)
        {
          tanda.innerHTML =  "+";
          tanda.classList.add("text-success");
        }
        else
        {
          tanda.innerHTML =  "-";
          tanda.classList.add("text-danger");

        }
