<?php


include '../include/connection.php';

session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

  $sql = "SELECT
    contact_id,
    friend_id,
    conversation_id,
    tbl_accounts.username
  FROM
    tbl_contacts
  JOIN tbl_accounts on tbl_contacts.friend_id = tbl_accounts.user_id
  WHERE
    tbl_contacts.user_id = :session_id
      ";

  $stmt = $conn->prepare($sql);
  $stmt->bindParam(':session_id', $_SESSION['user_id'],PDO::PARAM_INT);
  $stmt->execute();

  while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

    $result = $row;

    $html = "<div class='_asButton' id='fetch_friend_data' 
    data-fetch_friend_list_id_convo='" . $result['conversation_id'] . "'
    data-fetch_friend_list_uid='" . $result['friend_id'] . "'
    data-fetch_friend_list_uname='" . $result['username'] . "'>
    <div class='friend_list_dp_username_container' id='fetch_friend_data' 
        data-fetch_friend_list_uid='" . $result['friend_id'] . "'
        data-fetch_friend_list_uname='" . $result['username'] . "'
        data-fetch_friend_list_id_convo='" . $result['conversation_id'] . "'
        >
        <div class='friend_list_profileImg'>
            <img src='../assets/images/cat-nyan-cat.gif' alt='user_profile_image'>
        </div>
        <div class='requests_username'>
            <strong id='friend_list_username_placeholder'>" . $result['username'] . "</strong>
        </div>
    </div>
</div>";

    
    echo ($html);
    
  }

}