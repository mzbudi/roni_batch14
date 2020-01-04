



<?php

$server = "localhost";
$username = "root";
$password = "";
$database = "db_batch14";

$koneksi = mysqli_connect($server, $username, $password, $database) or die("Koneksi ke database gagal");

$querySelect = mysqli_query($koneksi, "SELECT cashier.name as cashier, product.name as product, category.name as category, product.price as price FROM ((product INNER JOIN cashier ON product.id_cashier = cashier.id) INNER JOIN category ON product.id_category = category.id)");

// $row = mysqli_fetch_assoc($querySelect);

// var_dump($row);

?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Document</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
<div style="box-shadow: 0px 3px gray;">
    <nav class="navbar navbar-expand-lg navbar-light ml-auto" style="background-color:white;">

        <a class="nav-link" href='#'><img src='#' width="30" height="30" class="d-inline-block align-top" alt=""></a>
        <div class="collapse navbar-collapse" id="navbarNav" >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href='#'>ARKADEMY COFFEE SHOP<span class="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
        <div>
        <a href="add.php" class="btn btn-danger" style="background-color: pink;">Add</a>
        </div>
      </nav>
      
    </div>
<div class="container">
<form action="" style='margin-top: 10px;'>
  <div class="form-group">
    <label for="formGroupExampleInput">Nama</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nama">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Product</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Product">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Category</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Category">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Product</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Price">
  </div>
  <div class="form-group">
    <input type="submit" value="Edit" placeholder="Price">
  </div>
  </form>
    
</div>

<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>
</html>


