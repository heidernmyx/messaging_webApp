<?php

include '../include/connection.php';

// $conn = new PDO();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $sender_id = $_POST['sender_id'];
  // $sender_username = $_POST['sender'];
  $recipient_id = $_POST['recipient_id'];
  $message = $_POST['message_content'];
  // $date_sent = $_POST['date'];
  

  // $sql = "INSERT INTO `tbl_messages`(
  //   `sent_by`,
  //   `sent_to`,
  //   `message_content`,
  //   `time_sent`
  // )
  // VALUES(
  //   ':sender_id',
  //   ':recipient_id',
  //   ':message',
  //   ':date_sent',
  // )'";

  $sql = "INSERT INTO `tbl_messages`(
    sent_by,
    sent_to,
    message_content
)
VALUES(
    :sender_id,
    :recipient_id,
    :message
)";

  $stmt=$conn->prepare($sql);
  // bindparam(value, var, pdo_type)
  $stmt->bindParam(':sender_id', $sender_id, PDO::PARAM_INT);
  $stmt->bindParam(':recipient_id', $recipient_id, PDO::PARAM_INT);
  $stmt->bindParam(':message', $message, PDO::PARAM_STR);
  // $stmt->bindParam(':date_sent', $date_sent, PDO::PARAM_STR);
  $stmt->execute();

  echo "message sent";
  
}
