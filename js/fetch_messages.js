// Define the function to fetch messages with a promise
function fetchMessages(param) {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "POST",
      url: "../php/fetch_messages.php",
      data: param,
      success: (response) => {
        $('#message_placements').html(response);
        resolve(); // Resolve the promise when the AJAX request is successful
      },
      error: function(xhr, status, error) {
        console.error(xhr.responseText);
        reject(error); // Reject the promise if there's an error
      }
    });
  });
}

// Define the initial empty object bond
let bond = {};

// Define the function to set the new value
function setValue(value) {
  conversation_id_selected = value;
  console.log(conversation_id_selected);
  if (_onchange) {
    _onchange(value)
  }
}

// Define the function to handle the new value and fetch messages
function newValue(value) {
  console.log('selected conversation changed:', value);
  bond = {
    ...bond, // Retain previous data
    conversation_id: conversation_id_selected,
    sender_id: user_id,
    recipient_id: uid_ofSelected_convo
  };
  console.log(bond);
  fetchMessages(bond)
    .then(() => {
      console.log('Messages fetched successfully');
    })
    .catch((error) => {
      console.error('Error fetching messages:', error);
    });
}

// Assign the newValue function to the _onchange variable
let _onchange = newValue;

// Call the newValue function initially
newValue();

// Set up an interval to call the fetchMessages function every 5 seconds with the existing bond object
setInterval(() => {
  fetchMessages(bond)
    .then(() => {
      console.log('Messages fetched successfully');
    })
    .catch((error) => {
      console.error('Error fetching messages:', error);
    });
}, 5000); // 5000 milliseconds = 5 seconds
