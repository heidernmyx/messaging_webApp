
add_modal = document.getElementById('add_modal');

add_friend_button = document.getElementById('add_friend_button');
add_friend_button.addEventListener('click', () =>{
  // code for show addfriend modal
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

window.onclick = addEventListener('click', (event) => {
  if(add_modal.style.display =='inline-block') {
    console.log(true);
    // window.onclick = addEventListener('click', (event) => {
      // $(add_modal).hide();
    // })
  }
})


