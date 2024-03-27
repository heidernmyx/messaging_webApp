
unfriend_modal = document.querySelector('#unfriend_modal');

header_unfriend_button = document.getElementById('header_unfriend_button');
header_unfriend_button.addEventListener('click', () =>{
  $(unfriend_modal).css({'display': 'inline-block'});
})

unfriend_modal_close = document.getElementById('close_unfriend_modal');
unfriend_modal_close.addEventListener('click', () =>{
  $(unfriend_modal).css({'display': 'none'});
});




// * search input function inside unfriend modal

modal_unfriend_search_button = document.getElementById('modal_unfriend_search_button');
modal_unfriend_search_button.addEventListener('click', () =>{
  $.ajax({
    type: 'post',
    url: '../php/unfriend_modal_search.php',
    data: {input : $('#unfriend_search_input').val()},
    success: (response) =>{
      $('#friend_user_info').html(response);
    },
    error: (xhr, status, error) =>{
      console.log(xhr.responseText);
    }
  })
});





// Attach the event listener to a parent element that exists in the DOM
$(document).on('click', '#unfriend_user', (event) => {
  console.log(true);
  
  let unfriend_uid = event.target.getAttribute('data-unfriend_user_id');
  let unfriend_uname = event.target.dataset.friend_username;
  if (confirm('Are you sure to unfriend ' + unfriend_uname + '?') == true) {
    $.ajax({
      type: 'post',
      url: '../php/unfriend.php',
      data: {
        unfriend_uid: unfriend_uid,
      },
      success: (response) => {
        console.log(response);
        $(`.dp_username_asRow[friend_id='${unfriend_uid}']`).remove();
      },
      error: (xhr, status, error) => {
        console.log(xhr.responseText);
      }
    })
  }
});
