<?php

include '../include/connection.php';

session_start();

//currently in session
$user_id = $_POST['sender_id'];
$friend_id = 6;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $sql = "SELECT
  m.message_id,
  sender.username AS sent_by,
  receiver.username AS sent_to,
  m.message_content,
  m.time_sent
FROM
  tbl_messages m
JOIN
  tbl_accounts sender ON m.sent_by = sender.user_id
JOIN
  tbl_accounts receiver ON m.sent_to = receiver.user_id

  WHERE  m.sent_by = :sent_by and m.sent_to = :sent_to
  
";
  $stmt = $conn->prepare($sql);
  $stmt->bindParam(':sent_by', $user_id, PDO::PARAM_INT);
  $stmt->bindParam(':sent_to', $friend_id, PDO::PARAM_INT);
  $stmt->execute();

  // $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
  while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    // echo "dColumn 1: " . $row['sent_by'] .
    $result = $row;
    
      ", Column 2: " . $row['sent_to'] .
      $row['message_content'] . "<br>";
    if ($result['sent_by']== $_SESSION['user_id']) {
      
    }
    echo "
    <div>
      <div style='display: flex; margin-top: 10px'>
        <div id='image_container' style='display: flex'>
          <img id='friend_dp' src='../assets/images/pikachu-pixel.gif'alt='image'>
          <div id='username_and_message'>
            <div style='font-size: 13px'>
              <strong>".$result['sent_by']."</strong>
            </div>
          <div style='height: 6px'></div> 
          <div id='message'>".$row['message_content']."</div>
        </div>
        </div>
      </div>
    </div>  
    <div style='height: 2vh'></div>
    ";
}
  // echo json_encode(array($messages));
}
?>

