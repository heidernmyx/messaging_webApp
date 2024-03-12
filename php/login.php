<?php

include '../include/connection.php' ;

// ? Backend processes for login

$username_input = $_POST['username'];
$password_input = $_POST['password'];


// check username and password
$sql = "SELECT * FROM `tbl_accounts` WHERE username = :username AND password = :password";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':username', $username_input);
$stmt->bindParam(':password', $password_input);
$stmt->execute();
$result = $stmt->fetch(PDO::FETCH_ASSOC);

if ($result) {
  if($username_input == $result['username'] && $password_input == $result['password']) {
    echo "success";
  }
} else {
    echo "Incorrect Username or Password";
}





