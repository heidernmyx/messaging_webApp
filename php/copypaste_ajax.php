$(document).ready(function() {
  $('#loginForm').submit(function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Serialize form data
    var formData = $(this).serialize();

    // Send AJAX request
    $.ajax({
      type: 'POST',
      url: 'php/login.php', // URL of your backend PHP script
      data: formData,
      success: function(response) {
        // success code block
      },
      error: function(xhr, status, error) {
        // Handle error
        console.error(xhr.responseText);
      }
    });
  });
});
