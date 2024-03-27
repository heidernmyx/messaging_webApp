<?php

include '../include/connection.php';

session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $sql = "DELETE FROM `tbl_contacts` 
  WHERE user_id = :session_id and friend_id = :friend_id  
  ";

  $stmt = $conn->prepare($sql);
  $stmt->bindParam(':session_id', $_SESSION['user_id'], PDO::PARAM_INT);
  $stmt->bindParam(':friend_id', $_POST['unfriend_uid'], PDO::PARAM_INT);
  $stmt->execute();

  $sql = "DELETE FROM `tbl_contacts` 
  WHERE user_id = :friend_id and friend_id = :session_id  
  ";

  $stmt = $conn->prepare($sql);
  $stmt->bindParam(':session_id', $_SESSION['user_id'], PDO::PARAM_INT);
  $stmt->bindParam(':friend_id', $_POST['unfriend_uid'], PDO::PARAM_INT);
  $stmt->execute();

  echo "success";

}
