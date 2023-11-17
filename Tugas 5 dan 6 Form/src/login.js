// validation.js

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('loginForm');
  
    form.addEventListener('submit', function (event) {
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
  
      if (username.length != 0 || password.length != 0) {
        
        if (username == "admin@admin.com" && password == "12345"  ) {
            alert("Anda Berhasil Login!!")
        } else {
            event.preventDefault();
            salahIsi('Email atau password salah');
        }
      }else{
            event.preventDefault();
            salahIsi('Email atau password masih kosong');
      }
    });
  
    
    function salahIsi(message) {
      var salah = document.getElementById('kesalahan');
      salah.innerHTML = message;
      salah.style.display = 'block';
    }
  });
  