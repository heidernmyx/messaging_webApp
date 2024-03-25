
let user_id = '';
let username = '';

// ?ajax request to fetch session vars
$(document).ready(() => {
  setTimeout(() => {
    $.ajax({
      url: "../php/session.php",
      type: "GET",
      dataType: "JSON",
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
  }, 1000);
});

// $(document).ready(function() {
//   $('#loginForm').submit(function(event) {
//     event.preventDefault();
//     var formData = $(this).serialize();
//     $.ajax({
//       type: 'POST',
//       url: 'php/login.php', 
//       data: formData,
//       success: function(response) {

//       },
//       error: function(xhr, status, error) {
//         console.error(xhr.responseText);
//       }
//     });
//   });
// });


