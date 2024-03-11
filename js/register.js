const spanClass = document.querySelector('.close_button');
const modal = document.querySelector('.modal');
spanClass.addEventListener("click", () => {
  modal.style.display = 'none';
});

const show_modal = () => {
  document.querySelector('.modal').style.display = "block";
    document.querySelector('.modal_content').style.display = "block";
    setTimeout(function() {
      console.log("test");
      window.open('index.html');
    }, 5000);
    alert('test');
}


document.getElementById('regForm').addEventListener('submit', (event) =>{
  event.preventDefault();
  console.log('run');
  const register_button = document.getElementById('register_button');
  register_button.addEventListener('click', show_modal());
  register_button();
  event.;
})

