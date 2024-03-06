<?php
    include './include/connection.php';
  ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- ! Login page -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link rel="stylesheet" href="css/login.css">
  <link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet'>
</head>
<body>
  
  
    <div id="container">
      <div id="login">
        <h2>Login</h2> 
      </div>
      <div>
        <img id="logo" src="./assets/images/userImage.png" alt="">
      </div>
      <form action="php/login.php" method="post">
        <div id="">
          <label class="textfield_label" for="username">Username: </label><br><div class="spacer"></div>
          <input type="text" name="username" id="username" placeholder="Enter Username" required>
        <br> <br>
          <label class="textfield_label" for="password">Password: </label><br><div class="spacer"></div>
            <input type="password" name="password" id="password" placeholder="Enter Password" required>
        </div>
        <div style="height: 20px;"></div>
        <button id="login_button" name="login_button" >Log In</button>
        <div id="newSpacer" style="height: 30px"></div>
        <label class="register" id="register" style="color: gainsboro; font-size: 15;">Don't have an account yet? 
        <a class="register" id="register_href" href="./html/register.html">Register here</a>
        </label>
      </form>
    </div>
    
</body>
</html>