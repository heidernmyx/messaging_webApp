// const span = document.getElementsByClassName('.close');

// if(span){
//   console.log('true1');
//   if (modal) {
//     console.log('true2');
//   }
// }
// span.addEventListener('click', () =>{
//   modal.style.display = none;
//   alert('clicked');
// })
// const span = document.getElementById('#close');
let span = document.getElementById('#close');
console.log(span);
if (span) {
  console.log(true);
}
else{
  console.log("error");
}

// span.addEventListener('click', function () {
//   close();
// })

// const close = () => {
//   const modal = document.querySelector('modal').style.display = "none";
// }


let modal = document.querySelector('.modal');
span.addEventListener("click", () =>{
  modal.style.display = 'none'; // Make sure 'none' is enclosed in quotes
  alert('clicked');
});
