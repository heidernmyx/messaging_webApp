modal_profile_user = document.getElementById('modal_profile_user');
modal_profile_user.addEventListener('click', () =>{
  console.log('click');
  $('.profile_modal').css({'display' : 'inline-block'});
})

profile_modal_close = document.getElementById('profile_modal_close');
profile_modal_close.addEventListener('click', () =>{
  $('.profile_modal').hide();
});