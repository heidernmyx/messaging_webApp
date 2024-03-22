<?php

include '../include/connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET'){
  $search_input = $_GET['key'];

  echo json_encode($search_input);
  $sql = "SELECT
    `user_id`,
    `username`
  FROM
      `tbl_accounts`
  WHERE
    `username` = :search_input
    ";
    
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':search_input',$search_input, PDO::PARAM_STR);
    $stmt->execute();

  $result = $stmt->fetch(PDO::FETCH_ASSOC);



}

?>

