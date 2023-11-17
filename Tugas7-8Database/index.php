<?php
    include_once "koneksi.php";
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
    <h2 class="text-center mb-4">Data Printer</h2>

   

    <table class="table table-bordered">
        <thead>
            <tr>
                <th scope="col">No</th>
                <th scope="col">Nama Merek</th>
                <th scope="col">Warna</th>
                <th scope="col">Jumlah</th>
            </tr>
        </thead>
        <tbody>
            <?php

            $sql = "SELECT * FROM printer";
            $result = $conn->query($sql);

          
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    echo "<tr>";
                    echo "<td>" . $row["no"] . "</td>";
                    echo "<td>" . $row["nama_merek"] . "</td>";
                    echo "<td>" . $row["warna"] . "</td>";
                    echo "<td>" . $row["jumlah"] . "</td>";
                    echo "</tr>";
                }
            } else {
                echo "<tr><td colspan='4'>Tidak ada data</td></tr>";
            }

            $conn->close();
            ?>
        </tbody>
    </table>

    <div class="text-center mb-3">
        <a href="tambah.php" class="btn btn-success">Tambah Data</a>
    </div>
</div>


<script src="bootstrap.bundle.min.js"></script>
</body>
</html>