


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
// todo: fetch the id of selected convo
let uid_ofSelected_convo;
let conversation_id_selected ;




document.addEventListener('click', (event) => {
  if (event.target.id.includes('fetch_friend_data')) {
    button = event.target.id;
    uid_ofSelected_convo = event.target.getAttribute('data-fetch_friend_list_uid');
    username = event.target.getAttribute('data-fetch_friend_list_uname');

    // ? setValue = method dir(fetch_msgs)
    setValue(event.target.dataset.fetch_friend_list_id_convo);
    // conversation_selected_id = event.target.dataset.fetchFriendListIdConvo;
    
    $('#friend_name_placeholder').html(username);
    // Add your additional functionality here
    console.log('uid convo selected:', uid_ofSelected_convo);
    console.log('convo id:',conversation_id_selected);
  }
});


