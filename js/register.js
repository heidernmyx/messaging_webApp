const spanClass = document.querySelector('.close_button');
const modal = document.querySelector('.modal');
spanClass.addEventListener("click", () => {
  modal.style.display = 'none';
});


// modal.style.display = "block";
// document.querySelector('.modal_content').style.display = "block";



  const register_button = document.getElementById('register_button');
  register_button.addEventListener("click", () =>{
    
    setTimeout(() => {
      // window.open('index.html');
      // proceed to login page after register and showing modal
      // window.location.href = "../index.html";
    }, 3000);
  });
  // const show_modal = () => {
    
  // }

// const response = document.createElement('i');
// response.innerHTML = "Username is already taken";

// $(document).ready(function() {
//   $('#regForm').submit(function(event) {
//     event.preventDefault();
//     // Serialize form data
//     var formData = $(this).serialize();
//     $.ajax({
//       type: 'POST',
//       url: '../php/register.php', // URL of your backend PHP script
//       data: formData,
//       success: function(response) {
//         if(response === "unavailable") {
//           $('#prompt').html(response);
//           console.log(true);
//           console.log('unavailable');
//         }
//         else{
//           console.log(response);
//           console.log(false);
//         }
//       },
//       error: function(xhr, status, error) {
//         // Handle error
//         console.error(xhr.responseText);
//       }
//     });
//   });
// });