
add_modal = document.querySelector('#add_modal');

add_friend_button = document.getElementById('header_add_friend_button');
add_friend_button.addEventListener('click', () =>{
  // code for showing addfriend modal
  $(add_modal).css({
    'display': 'inline-block'
  });
});
add_modal_closeBtn = document.querySelector('.close');
add_modal_closeBtn.addEventListener('click', () =>{
  // instead of altering css properties
  // $('.add_modal').css({
  //   'display': 'none'
  // });
  // shorthand
  $(add_modal).hide();
});

// console.log(search_input);

// $.ajaxSetup({
//  headers: {
//    "X-CSRFToken": $('meta[name="csrf-token"]').attr("content")
//  }
// });



//after input => click search btn =>search
add_button_search = document.getElementById('add_button_search');
add_button_search.addEventListener('click', () =>{
search_user_input = document.getElementById('search_user_input').value.toString();

  $.ajax({
    type: 'get',
    url: '../php/search_user.php',
    data: {key : search_user_input},
    success: (response) =>{
      // ? show search results
      $('#search_result_container').html(response);
    },
    error: (xhr,status, error) =>{
      console.log(xhr.responseText);
    }
  })
})

document.addEventListener('click', (event) => {
  // Check if the clicked element has the id 'add_user_button'
  if (event.target && event.target.id === 'add_user_button') {
    var id_Ofadded_user = event.target.getAttribute('id_Ofadded_user');
      $.ajax({
          type: 'post',
          url: '../php/add_friend.php',
          data: { session_id: user_id,
                  id_Ofadded_user: id_Ofadded_user},
          success: (response) => {
            if (response == 'User is already added!') {
              alert(response);
            }else{
              alert(response);
            }
          },
          error: (xhr, status, error) => {
              console.log(xhr.responseText);
          }
      });
  }
});



