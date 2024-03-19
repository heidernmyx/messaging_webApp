<?php

session_start();

// * if true = there's a session
// * currentyly on going

if ($_SESSION['log_in']){
  $session_data = array(
    "username" => $_SESSION['username'],
    "user_id" => $_SESSION['user_id'],
  );
  echo json_encode($session_data);
}
else{
  echo json_encode(array('error' => 'No login data found'));
}