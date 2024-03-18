

$(document).ready(function() {
  $('#loginForm').submit(function(event) {
    event.preventDefault();

    var formData = $(this).serialize();
    $.ajax({
      type: 'POST',
      url: 'php/login.php', 
      data: formData,
      success: function(response) {
      },
      error: function(xhr, status, error) {
        console.error(xhr.responseText);
      }
    });
  });
});
