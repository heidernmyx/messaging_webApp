setTimeout(() => {
  
$(document).ready(() =>{

  let bond = {
    sender_id: user_id,
    recipient_id: 6
  };
  // do {
  //   console.log(true);
  //   setTimeout(() => {
  //     fetch_messages(bond); 
  //   }, 5000);
  // }while (true);
  fetch_messages(bond);
console.log(bond.sender_id);

});
function fetch_messages (param) {
  $.ajax({
    type: "POST",
    url: "../php/fetch_messages.php",
    data: param,
    success: (response) => {

      console.log(response);
      $('#message_placements').html(response);
      
      // let message_container = document.getElementById('message_placements');
      // response.forEach(function(message) {
      //   // Create a div element for each message
      //   var messageElement = document.createElement('div');
      //   messageElement.className = 'message';

      //   // Create a paragraph element for the message content
      //   var messageContent = document.createElement('p');
      //   messageContent.innerHTML = `<strong>From:</strong> ${message.sent_by}`;
      //   // Append the message content to the message element
      //   messageElement.appendChild(messageContent);

      //   // Append the message element to the message container
      //   messageContainer.appendChild(messageElement);
      // });

  //     const messages = response[0];
  //     let message_container = document.getElementById('message_placements');
  // messages.forEach(function(message) {
  //   // Create a div element for each message
  //   var messageElement = document.createElement('div');
  //   messageElement.className = 'message';

  //   // Create paragraph elements for the message details
  //   var sentByElement = document.createElement('p');
  //   sentByElement.innerHTML = `<strong>From:</strong> ${message.sent_by}`;
  //   messageElement.appendChild(sentByElement);

  //   var sentToElement = document.createElement('p');
  //   sentToElement.innerHTML = `<strong>To:</strong> ${message.sent_to}`;
  //   messageElement.appendChild(sentToElement);

  //   var timeSentElement = document.createElement('p');
  //   timeSentElement.innerHTML = `<strong>Time Sent:</strong> ${message.time_sent}`;
  //   messageElement.appendChild(timeSentElement);

  //   // Append the message element to the message container
  //   message_container.appendChild(messageElement);
  // });
      

    },
    error: function(xhr, status,error) {
      console.log(xhr, responseText);
    }
  });
}

}, 1);