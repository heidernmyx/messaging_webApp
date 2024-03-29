
$(document).ready(function() {
  $('#loginForm').submit(function(event) {
    event.preventDefault();
    var formData = $(this).serialize();
    $.ajax({
      type: 'POST',
      url: 'php/login.php',
      data: formData,
      success: function(response) {
        if (response === "success") {
          window.location.href = 'html/dashboard.html';
        } else {
          console.log(false);
          if ($(window).width() < 1155) {
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
