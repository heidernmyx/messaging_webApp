const response = document.createElement("i");
response.innerHTML = "Incorrect Username or Password";

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
        if (response === "success") {
          console.log(true);
        } else {
          console.log(false);
          if ($(window).width() < 1155) {
            // Apply styles for small screens
            $('#wrong_pass').css({
              'margin-top': '10px',
              'margin-bottom': '20px',
              'font-size': '12px',
            });
          };
          $('#wrong_pass').css({
            'color': 'gainsboro',
            'font-weight': 'bold',
            'margin': '10px',
          })
          $('#wrong_pass').html(response);
          
        }
      },
      error: function(xhr, status, error) {
        // Handle error
        console.error(xhr.responseText);
      }
    });
  });
});
