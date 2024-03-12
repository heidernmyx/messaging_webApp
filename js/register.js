const spanClass = document.querySelector('.close_button');
const modal = document.querySelector('.modal');
spanClass.addEventListener("click", () => {
  modal.style.display = 'none';
});

const show_modal = () => {
  modal.style.display = "block";
    document.querySelector('.modal_content').style.display = "block";
    setTimeout(function() {
      console.log("test");
      // window.open('index.html');
      

      window.location.href = "../index.html";

    }, 3000);
}


const regForm =document.getElementById('regForm').addEventListener('submit', (event) =>{
  event.preventDefault();
  console.log('run');
  const register_button = document.getElementById('register_button');
  register_button.addEventListener('click', show_modal());
  register_button.click();
})

