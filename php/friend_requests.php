<?php

include '../include/connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $sql = "SELECT
	  add_id,
    added_by,       
    request_from.username as added_by_username,
    added_user
FROM
	tbl_add
JOIN
	tbl_accounts request_from on added_by = request_from.user_id
WHERE added_user = :user_session
  ";

  $stmt = $conn->prepare($sql);
  $stmt->bindParam(':user_session', $_POST['session_id'], PDO::PARAM_INT);
  $stmt->execute();

  
  while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

    $result = $row;
    echo "<div class='dp_username_asRow' add_id=".$result['add_id'].">
    <div class='dp_username_container'>
      <div class='requests_dp'>
        <img src='../assets/images/gwapo.jpg' alt='user_profile_image'>
      </div>
      <div class='requests_username'>
        <strong id='username_placeholder'>".$result['added_by_username']."</strong>
      </div>
    </div>
    <div class='accept_button_container'>
      <button id='accept_button' id_Ofaccepted_user=".$result['added_by'].">Accept</button>
      <button id='decline_button' id_Ofdeclined_user=".$result['added_by'].">Decline</button>
    </div>
  </div><hr>";
  }
}

if ($_SERVER['REQUEST_METHOD'] == 'GET' && $_GET['choice'] == 'accept') {
//   $sql = "INSERT INTO `tbl_contacts`(
//       user_id
//       friend_id)
//       VALUES(
//         :user_session,
//         :added_friend
// )";
//   $stmt = $conn->prepare($sql);
//   $stmt->bindParam('user_session', $_POST['session_id'], PDO::PARAM_INT);
//   $stmt->bindParam('added_friend', $_POST['request_user_id'], PDO::PARAM_INT);
//   $stmt->execute();

//   $sql = "INSERT INTO `tbl_contacts`(
//     user_id
//     friend_id)
//     VALUES(
//       :added_friend,
//       :user_session
// )";
// $stmt = $conn->prepare($sql);
// $stmt->bindParam('user_session', $_POST['session_id'], PDO::PARAM_INT);
// $stmt->bindParam('added_friend', $_POST['request_user_id'], PDO::PARAM_INT);
// $stmt->execute();
echo json_encode("accepted", $_POST['id_Ofdeclined_user']);

}

if ($_SERVER['REQUEST_METHOD'] == 'GET' && $_GET['choice'] == 'decline') {
  echo json_encode("Friend Request Declined");
}
