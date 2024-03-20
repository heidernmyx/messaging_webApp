<?php

include '../include/connection.php';

if ($_SERVER['REQUEST_METHOD'] == POST) {
  $sql = "SELECT
  `sent_by`,
  `sent_to`
FROM
  `tbl_messages`
ORDER BY
  `time_sent` ASC";
  $stmt = $conn->prepare($sql);
  
}
