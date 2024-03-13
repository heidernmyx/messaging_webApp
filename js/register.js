const spanClass = document.querySelector('.close_button');
const modal = document.querySelector('.modal');
spanClass.addEventListener("click", () => {
  modal.style.display = 'none';
});


// document.querySelector('.modal_content').style.display = "block";



  const register_button = document.getElementById('register_button');
  register_button.addEventListener("click", () =>{
    
    
  });
  // const show_modal = () => {
    
  // }



$(document).ready(function() {
  $('#regForm').submit(function(event) {
    event.preventDefault();
    var formData = $(this).serialize();
    $.ajax({
      type: 'POST',
      url: '../php/register.php', // URL of your backend PHP script
      data: formData,
      success: function(response) {
        // response = response.toString().slice(0,-2);
        $('#prompt').html('');

        // ? return to stop terminate ajax req
        if(response === "Username and Email is already taken!") {
          prompt(response);
          return;
        }
        else if (response === "Username is unavailable") {
          prompt(response);
          return;
        }
        else if (response === "Email is already registered") {
          prompt(response);
          return;
        }
        else{
          $('.modal').css({
            'display': 'block'
          }),
          $('.modal_content').css({
            'display': 'block'
          }),
          
          setTimeout(() => {
            window.location.href = "../index.html";
            // proceed to login page after register and showing modal
          }, 3000);
        }
        
      },
      error: function(xhr, status, error) {
        // Handle error
        console.error(xhr.responseText);
      }
    });
  });
});
//call method upon submit
        // ? response param here come from if and elifs
const prompt = (response) => {
  document.getElementById('prompt').innerHTML = "";
  $('#prompt').html(response);
  $('#prompt').css({
    'color': 'gainsboro',
    'font-weight': 'bold',
    'margin': '10px',
  })
}