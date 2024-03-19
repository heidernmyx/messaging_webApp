

const current_dateTime = new Date().toLocaleString();
var message_content = document.getElementById('message_content').innerText;

var message_data= { 
  sender_id: user_id,
  sender: username,
  // ! user_id of reciever
  recipient_id: 6,
  content: message_content,
  date: current_dateTime
}
console.log(false);
const send_button = document.getElementById("send_button");
send_button.addEventListener("click", () =>{
  $.ajax({
    type: "POST",
    url: "../php/send_message.php",
    data: message_data,
    success: (response) =>{
      console.log(response);
    },
    error: function(xhr, status, error) {
      // Handle error
      console.error(xhr.responseText);
    },
    // dataType: JSON
  });
})
