
let user_id = '';
let username = '';

// ?ajax request to fetch session vars

window.addEventListener('load', function() {
  $(document).ready(() => {
    $.ajax({
      url: "../php/session.php",
      type: "GET",
      // data: 
      dataType: 'json',
      success: function (response) {
        user_id = response.user_id;
        username = response.username;
        $("#username_placeholder").html(username);
      },
      error: function (xhr, status, error) {
        console.error("Error fetching session data:", error);
        alert("Error fetching session data.");
      }
    });
  });
  console.log('Module loaded');
});

// module.exports = {user_id};



