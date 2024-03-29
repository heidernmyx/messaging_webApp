$(document).ready(function() {
  $('#floating_container').click(function() {
    $('#hidden_panel').css({'display': 'inline-block'});
    $('#hidden_panel_content').css({'right': '27'});
  });
});


$('#hidden_panel').click((event) =>{
  // click = event.target.id;
  if(event.target.id == 'hidden_panel') {
    $('#hidden_panel').css({'display':'none'});
    $('#hidden_panel_content').css({'right':'-440'});
  }
  
})


