<?php
$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "data"; 


$conn = new mysqli($servername, $username, $password);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

$sqlCreateDatabase = "CREATE DATABASE IF NOT EXISTS $dbname";
if ($conn->query($sqlCreateDatabase) === TRUE) {
    echo "<script>console.log('Berhasil Membuat Database atau Database sudah ada')</script>";
} else {
    echo "<script>console.log('Gagal Membuat Database".$conn->error."')</script>";
}

$conn->select_db($dbname);

$sqlCreateTable = "CREATE TABLE IF NOT EXISTS printer (
    no INT PRIMARY KEY,
    nama_merek VARCHAR(20),
    warna VARCHAR(10),
    jumlah INT(10)
)";
if ($conn->query($sqlCreateTable) === TRUE) {
    echo "<script>console.log('Berhasil Membuat Tabel printer atau Tabel sudah ada')</script>";
} else {
    echo "<script>console.log('Gagal Membuat Tabel".$conn->error."')</script>";
}

?>
