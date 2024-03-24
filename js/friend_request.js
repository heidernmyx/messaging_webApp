request_modal = document.querySelector('#request_modal');

header_request_button = document.getElementById('header_request_button');
header_request_button.addEventListener('click', () =>{
  // code for showing addfriend modal
  $(request_modal).css({
    'display': 'inline-block'
  });
  $.ajax({
    type: 'POST',
    url: '../php/friend_requests.php',
    data: {session_id: user_id},
    success: (response) =>{
      $('#request_user_info').html(response);
    }
  })
});

// !CLOSE MODAL
close_request_modal = document.querySelector('.close_request_modal');
close_request_modal.addEventListener('click', () =>{
  // instead of altering css properties
  // $('.add_modal').css({
  //   'display': 'none'
  // });
  // shorthand
  $(request_modal).hide();
});

document.addEventListener('click', (event) => {
  if (event.target.matches('#accept_button') || event.target.matches('#decline_button')) {
      var choice = event.target.id === 'accept_button' ? 'accept' :
      event.target.id === 'decline_button' ? 'decline' : null;
      var request_user_id = event.target.getAttribute('id_Of${choice}_user');
      console.log(request_user_id);
      $.ajax({
          type: 'get',
          url: '../php/friend_requests.php',
          data: {
              choice: choice,
              session_id: user_id,
              request_user_id: request_user_id
          },
          success: (response) => {
              console.log(response);
          },
          error: (xhr, status, error) => {
              console.log(xhr.responseText);
          }
      })
  }
});
