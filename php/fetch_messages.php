<?php

include '../include/connection.php';

session_start();

try {

  // Check if conversation_id and recipient_id are set and not null
  if (isset($_POST['conversation_id']) && isset($_POST['sender_id']) && isset($_POST['recipient_id'])) {
    $conversation_id = $_POST['conversation_id'];
    $user_id = $_POST['sender_id'];
    $friend_id = $_POST['recipient_id'];

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
      WHERE m.conversation_id = :conversation_id
      ORDER BY time_sent
";

      $stmt = $conn->prepare($sql);
      $stmt->bindParam(':conversation_id', $conversation_id, PDO::PARAM_INT);
      $stmt->execute();

      // Check if there are rows returned
      if ($stmt->rowCount() > 0) {
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
          // Output message HTML
          echo "
            <div>
              <div style='display: flex; margin-top: 10px'>
                <div id='image_container' style='display: flex'>
                  <img id='friend_dp' src='../assets/images/pikachu-pixel.gif' alt='image'>
                  <div id='username_and_message'>
                    <div style='font-size: 13px'>
                      <strong>".$row['sent_by']."</strong>
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
      } else {
        // No messages found for the given conversation ID
        echo "";
      }
    }
  }
} catch (Exception $exception) {
  // Handle any exceptions here
  echo "";
}




