

// conversation_id_selected

setValue = (value) =>{
  conversation_id_selected = value;
  console.log(conversation_id_selected);
  if(_onchange) {
    _onchange(value)
  }
}

newValue = (value) =>{
  console.log('selected conversation changed: ', value);
  setTimeout(() => {
    
    $(document).ready(() =>{
    
      let bond = {
        conversation_id : conversation_id_selected,
        sender_id: user_id,
        recipient_id: uid_ofSelected_convo
      };
      console.log(bond);
      fetch_messages(bond);
    
    });
    function fetch_messages (param) {
      $.ajax({
        type: "POST",
        url: "../php/fetch_messages.php",
        data: param,
        success: (response) => {
          $('#message_placements').html(response);
        },
        error: function(xhr, status,error) {
          console.log(xhr, responseText);
        }
      });
    }
    
    }, 100);
}
_onchange = newValue;

