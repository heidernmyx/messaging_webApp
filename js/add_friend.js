
add_modal = document.querySelector('#add_modal');

add_friend_button = document.getElementById('add_friend_button');
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

  console.log(search_input);
  $.ajax({
    type: 'get',
    url: '../php/search_user.php',
    data: {key : search_user_input},
    success: (response) =>{
      $('#search_result_container').html(response);
      console.log(response);
    },
    error: (xhr,status, error) =>{
      console.log(xhr.responseText);
    }
  
  })
})



