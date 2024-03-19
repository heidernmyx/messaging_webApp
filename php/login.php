<?php

include '../include/connection.php' ;
session_start();

// ? Backend processes for login

$username_input = $_POST['username'];
$password_input = $_POST['password'];


// check username and password
$sql = "SELECT `user_id`, `username`, `password` FROM `tbl_accounts` WHERE username = :username AND password = :password";

$stmt = $conn->prepare($sql);
$stmt->bindParam(':username', $username_input);
$stmt->bindParam(':password', $password_input);
$stmt->execute();
$result = $stmt->fetch(PDO::FETCH_ASSOC);


$_SESSION['user_id'] = '';
$_SESSION['username'] = '';

if ($result) {
  if($username_input == $result['username'] && $password_input == $result['password']) {
    $_SESSION['log_in'] = true;
    $_SESSION['user_id'] = $result['user_id'];
    $_SESSION['username'] =  $result['username'];
    echo "success";
  }
} else {
    echo "Incorrect Username or Password";
}

