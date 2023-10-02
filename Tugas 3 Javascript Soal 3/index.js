x = window.prompt("Angka Pertama", "0");
y = window.prompt("Angka Kedua", "0");
z = window.prompt("Angka Ketiga", "0");

var kotak1 = document.getElementById("angka1");
var kotak2 = document.getElementById("angka2");
var kotak3 = document.getElementById("angka3");

var urut1 = document.getElementById("urut1");
var urut2 = document.getElementById("urut2");
var urut3 = document.getElementById("urut3");

const refreshButton = document.getElementById("refreshButton");

refreshButton.addEventListener("click", function() {
    location.reload();
});

kotak1.innerHTML = x
kotak2.innerHTML = y
kotak3.innerHTML = z

if (x>y && x>z)
{
        if (y>z)
        {
            urut1.innerHTML = x
            urut2.innerHTML = y
            urut3.innerHTML = z
        }
        else
        {
            urut1.innerHTML = x
            urut2.innerHTML = z
            urut3.innerHTML = y
        }
}
else if (y>x && y >z)
{
        if (x>z)
        {
            urut1.innerHTML = y
            urut2.innerHTML = x
            urut3.innerHTML = z
        }
        else
        {
            urut1.innerHTML = y
            urut2.innerHTML = z
            urut3.innerHTML = x
        }
}
else if (z>x && z>y)
{
        if (x>y)
        {
            urut1.innerHTML = z
            urut2.innerHTML = x
            urut3.innerHTML = y
        }
        else
        {
            urut1.innerHTML = z
            urut2.innerHTML = y
            urut3.innerHTML = x
        }
}        
