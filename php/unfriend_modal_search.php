<?php

include '../include/connection.php';

session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

  $search_input = '%' . $_POST['input'] . '%';

  $sql = "SELECT
	tbl_contacts.friend_id,
    tbl_accounts.username
FROM
    `tbl_contacts`
JOIN tbl_accounts on tbl_contacts.friend_id = tbl_accounts.user_id 
WHERE
    tbl_contacts.user_id = :session_id and tbl_accounts.username LIKE :search_input";

  $stmt = $conn->prepare($sql);
  $stmt->bindParam(':session_id',$_SESSION['user_id'], PDO::PARAM_INT);
  $stmt->bindParam(':search_input',$search_input, PDO::PARAM_STR);
  $stmt->execute();

  while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

    $result = $row;
    
    echo "
    <div class='dp_username_asRow' friend_id='".$result['friend_id']."'>
              <div class='dp_username_container'>
                <div class='friend_dp'>
                  <img src='../assets/images/gwapo.jpg' alt='user_profile_image'>
                </div>
                <div class='friend_username'>
                  <strong id='username_placeholder'>".$result['username']."</strong>
                </div>
              </div>
              <div class='unfriend_button_container'>
                <button id='unfriend_user' data-unfriend_user_id='".$result['friend_id']."' data-friend_username='".$result['username']."'>Unfriend</button>
              </div>
            </div>";

  }


}