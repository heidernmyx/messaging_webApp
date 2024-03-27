// Add click event listener to the logout button
$("#logout").click(function() {
  // Send AJAX request to logout.php
  $.ajax({
      url: "../logout/logout.php", // Corrected URL to PHP file
      type: "POST",
      dataType: "json",
      success: function(response) {
          // Check if logout was successful
          if (response.success) {
              // Redirect to login page or perform any other action
              alert("Logout successful");
              window.location.href = "../index.html";

          } else {
              // Handle logout failure
              console.error("Logout failed.");
          }
      },
      error: function(xhr, status, error) {
          // Handle AJAX errors
          console.error("AJAX error:", error);
      }
  });
});
