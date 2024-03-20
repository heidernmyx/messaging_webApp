<?php

include '../include/connection.php';

//currently in session
$user_id = $_POST['sender_id'];
$friend_id = 6;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $sql = "SELECT
  sent_by,
  sent_to,
  message_content,
  time_sent
FROM
  `tbl_messages`
WHERE 
  sent_by = :sent_by AND
  sent_to = :sent_to
ORDER BY
  time_sent asc";
  $stmt = $conn->prepare($sql);
  $stmt->bindParam(':sent_by', $user_id, PDO::PARAM_INT);
  $stmt->bindParam(':sent_to', $friend_id, PDO::PARAM_INT);
  $stmt->execute();

  // $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

  while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    // echo "dColumn 1: " . $row['sent_by'] .
    
    //   ", Column 2: " . $row['sent_to'] .
    //   $row['message_content'] . "<br>";
    // echo "
    // <div style='display: flex'>
    //       <div id='image_container'>
    //         <img id='friend_dp' src='../assets/images/pikachu-pixel.gif'alt='image'>
    //       </div>
    //       <div id='friend_name'>amegha's_username</div>
    //       <div>.$row[message_content].</div>
    //     </div><br>
    // ";
    
}
  // echo json_encode(array($messages));
}
?>
<div class="class">

</div>
