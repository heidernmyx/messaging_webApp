<?php

include '../include/connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

  $sql = "SELECT
  added_by,
  added_user
FROM
  tbl_add
WHERE
  added_by = :user_session AND added_user = :id_Ofadded_user
";

  $stmt = $conn->prepare($sql);
  $stmt->bindParam(':user_session', $_POST['session_id'], PDO::PARAM_INT);
  $stmt->bindParam(':id_Ofadded_user', $_POST['id_Ofadded_user'], PDO::PARAM_INT);
  $stmt->execute();

  $result = $stmt->fetch(PDO::FETCH_ASSOC);

  if ($result) {
    echo json_encode('User is already added!');
  }
  else{
    $sql = "INSERT INTO tbl_add(
      added_by,
      added_user
  )
  VALUES(
    :user_session,
    :id_Ofadded_user
  )";
  
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':user_session', $_POST['session_id'], PDO::PARAM_INT);
    $stmt->bindParam(':id_Ofadded_user', $_POST['id_Ofadded_user'], PDO::PARAM_INT);
    $stmt->execute();
    
    echo json_encode('User added');
  }

}
