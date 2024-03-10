const spanClass = document.querySelector('.close_button');
const modal = document.querySelector('.modal');
spanClass.addEventListener("click", () => {
  modal.style.display = 'none';
});


const register_button = document.getElementById('register_button');
  register_button.addEventListener('click', () => {
  document.querySelector('.modal').style.display = "";
})
