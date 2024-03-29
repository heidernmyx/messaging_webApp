$(document).ready(function() {
  $('#floating_container').click(function() {
    $('#hidden_panel').css({'display': 'inline-block'});
    setTimeout(() => {
      $('#hidden_panel_content').css({'right': '27px'});
    }, 100);
  });
});


$('#hidden_panel').click((event) =>{
  // click = event.target.id;
  if(event.target.id == 'hidden_panel') {
    $('#hidden_panel_content').css({'right':'-440px'});
    setTimeout(() => {
      $('#hidden_panel').css({'display':'none'});
    }, 300);
  }
})


