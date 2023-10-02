a = window.prompt("Angka Pertama","0");
b = window.prompt("Angka Kedua","0");
c = window.prompt("Angka Ketiga","0");
d = window.prompt("Angka Keempat","0");
f = window.prompt("Angka Kelima","0");



var kotak1 = document.getElementById("angka1");
var kotak2 = document.getElementById("angka2");
var kotak3 = document.getElementById("angka3");
var kotak4 = document.getElementById("angka4");
var kotak5 = document.getElementById("angka5");
var terbesar = document.getElementById("terbesar");

kotak1.innerHTML = a
kotak2.innerHTML = b
kotak3.innerHTML = c
kotak4.innerHTML = d
kotak5.innerHTML = f

const refreshButton = document.getElementById("refreshButton");

refreshButton.addEventListener("click", function() {
    location.reload();
});


if (a>b && a>c && a>d && a>f)
{
    terbesar.innerHTML = a
}
else if (b>a && b>c && b>d && b>f)
{
    terbesar.innerHTML = b
}
else if (c>a && c>b && c>d && c>f)
{
    terbesar.innerHTML = c
}
else if (d>a && d>c && d>b && d>f)
{
    terbesar.innerHTML = d
}
else
{
    terbesar.innerHTML = f
}
