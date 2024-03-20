
$(document).ready(() =>{

  let sort_msg = {
    sender_id: user_id,
    recipient_id: 6
  };
  do {
    console.log(true);
    setTimeout(() => {
      fetch_messages(); 
    }, 1000);
  }while (true);

});

function fetch_messages () {
console.log(true);
    $.ajax({
      type: "POST",
      url: "../php/fetch_messages.php",
      success: (response) => {
        console.log(true);
      },
      error: function(xhr, status,error) {
        console.log(xhr, responseText);
      }
    });
  }