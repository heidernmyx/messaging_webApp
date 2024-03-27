$(document).ready(function() {
  // Make AJAX request to check session
  $.ajax({
      url: "../check_session/check_session.php",
      type: "GET",
      dataType: "json",
      success: function(response) {
          if (response.success) {
              // Session is active, do nothing
              console.log("Session active.");
          } else {
              // Session is not active, redirect to login page
              console.log("Session not active, redirecting to login page...");
              window.location.href = "../index.html";
          }
      },
      error: function(xhr, status, error) {
          console.error("Error fetching session data:", error);
          // Handle error, redirect to login page
          window.location.href = "../index.html";
      }
  });
});