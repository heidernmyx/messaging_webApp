



const send_button = document.getElementById('send_button');
send_button.addEventListener("click", () =>{
  let current_dateTime = new Date().toLocaleString();
  let message_content = document.querySelector('#input_message').value;

  let message_data= { 
    sender_id: user_id,
    // sender: username,
    // ! user_id of reciever
    recipient_id: 6,
    message_content: message_content,
    date: current_dateTime
  }
  console.log(message_data.sender_id);
  $.ajax({
    type: "POST",
    url: "../php/send_message.php",
    data: message_data,
    success: (response) =>{
      console.log(response);
      console.log(message_data);
    },
    error: function(xhr, status, error) {
      // Handle error
      console.error(xhr.responseText);
    },
    // dataType: JSON
  });
})
