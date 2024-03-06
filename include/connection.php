<?php
$servername = "localhost";
$username = "root";
$password = "";

try {
  $conn = new PDO("mysql:host=$servername;dbname=mess_db", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  // ! test connection
  // echo '
  //   <script>
  //     alert ("connected");
  //     console.log("Connected");
  //   </script>
  // ';
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
  die();  
}


// // Database credentials
// $servername = "localhost"; // Change to your database server
// $username = "username"; // Change to your database username
// $password = "password"; // Change to your database password
// $dbname = "database"; // Change to your database name

// Create connection
// $conn = new mysqli($servername, $username, $password, "mess_db");

// // Check connection
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }


?>