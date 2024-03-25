


// load friend list after login
$(document).ready(() => {
  $.ajax({
      type: 'POST',
      url:  '../php/load_friend_list.php',
      data: { session_id: user_id },
      // dataType: 'json',
      success: (response) => {
          console.log(response);
          $('.friend_list_user_asRow').html(response);
          
      },
      error: (xhr, status, error) => {
          console.log(error.responseText);
      }
  });
});

// ? contains selected friend's uid
let conversation_selected;

document.addEventListener('click', (event) => {
  if (event.target.id === 'fetch_friend_data') {
    console.log(true);
    conversation_selected = event.target.getAttribute('data-fetch_friend_list_uid');
    username = event.target.getAttribute('data-fetch_friend_list_uname');
    $('#friend_name_placeholder').html(username);
    // Add your additional functionality here
    console.log('Conversation selected:', conversation_selected);
  }
});


