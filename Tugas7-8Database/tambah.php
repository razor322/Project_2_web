<?php
    include_once "koneksi.php";
    $nomor = $conn->query("SELECT MAX(no) as max FROM printer");
    $nomber = $nomor->fetch_assoc();
    $no = $nomber["max"]+1;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Printer</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container mt-5">
        <div class="col-md-6 offset-md-3">
            <h2 class="text-center mb-4">Input Data Printer</h2>
            <form  method="POST"> 
                <div class="form-group mt-2">
                    <label for="no">No:</label>
                    <input type="text" class="form-control" value="<?= $no?>" disabled id="no" name="no" required>
                </div>
                <div class="form-group mt-2">
                    <label for="nama_merek">Nama Merek:</label>
                    <input type="text" class="form-control" placeholder="Masukkan nama merek" id="nama_merek" name="nama_merek" required>
                </div>
                <div class="form-group mt-2">
                    <label for="warna">Warna:</label>
                    <input type="text" class="form-control" placeholder="Masukkan warna printer" id="warna" name="warna" required>
                </div>
                <div class="form-group mt-2">
                    <label for="jumlah">Jumlah:</label>
                    <input type="number" class="form-control" placeholder="Masukkan jumlah" id="jumlah" name="jumlah" required>
                </div>
                <div class="text-center mt-3">
                    <button type="submit" class="btn btn-primary btn-block w-25">Simpan</button>
                    <button type="reset" class="btn btn-secondary btn-block w-25">Ulang</button>
                    <a href="index.php" class="btn btn-danger btn-block w-25">Kembali</a>
                </div>
            </form>
            <?php

              if ($_SERVER["REQUEST_METHOD"] == "POST") {
               
                $nama_merek = $_POST["nama_merek"];
                $warna = $_POST["warna"];
                $jumlah = $_POST["jumlah"];

                $sql = "INSERT INTO printer (no, nama_merek, warna, jumlah) VALUES ('$no', '$nama_merek', '$warna', '$jumlah')";
                
                if ($conn->query($sql) === TRUE) {
                    echo "<script>alert('Data Berhasil Ditambahkan') </script>";
                    header("Location: index.php");
                } else {
                    echo "<script>alert('Data Gagal Ditambahkan".$conn->error."')</script>" ;
                }

              }

                
                $conn->close();
            ?>
        </div>
    </div>

<script src="bootstrap.bundle.min.js"></script>
</body>
</html>