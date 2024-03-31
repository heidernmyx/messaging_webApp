
// make the panel appear
  $('#floating_container').click(function() {
    if(conversation_id_selected !== undefined) {
      $('#hidden_panel').css({'display': 'inline-block'});
      setTimeout(() => {
        $('#hidden_panel_content').css({'right': '27px'});
      }, 100);
    }
    else{
      alert('No conversation selected');
    }
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


