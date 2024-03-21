setTimeout(() => {
  
$(document).ready(() =>{

  let bond = {
    sender_id: user_id,
    recipient_id: 6
  };
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