<?php

include "../include/connection.php";

if ($_SERVER['REQUEST_METHOD'] == 'GET'){
  $search_input = '%' . $_GET['key'] . '%';

  // echo json_encode($search_input);
  $sql = "SELECT
    `user_id`,
    `username`
  FROM
      `tbl_accounts`
  WHERE
    `username` LIKE :search_input
    ";
    
  $stmt = $conn->prepare($sql);
  $stmt->bindParam(':search_input',$search_input, PDO::PARAM_STR);
  $stmt->execute();

  while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){

    $result = $row;

    echo "<div class='user_info'>
    <div class='dp_username_asRow'>
      <div class='dp_username_container'>
        <div class='search_result_dp'><img src='../assets/images/gwapo.jpg' alt=''></div>
        <div style='width: 1vw;'></div>
        <div class='search_result_username'>
          <strong id='username_placeholder'>".$result['username']."</strong>
        </div>
      </div>
      <div class='id_container'>
        <div id='user_id_placeholder'>Unique ID: ".$result['user_id']."</div>
      </div>
      <div class='add_user_button_container'>
        <button id='add_user_button' id_Ofadded_user='".$result['user_id']."'>Add Friend</button>
      </div>
    </div>
  </div><hr>";
  }

}
?>

