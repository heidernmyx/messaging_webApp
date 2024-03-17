// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



var searchField = document.getElementById('searchInput').addEventListener('focus', function() {
  document.querySelector('#searchInput').placeholder = 'Search...';
  document.querySelector('label').textContent = 'Find users';
});
document.getElementById('searchInput').addEventListener('blur', function() {
let str = document.getElementById('searchInput').value;
  if (isEmpty(str)) {
      document.querySelector('label').style.display = 'inline-block';
      document.querySelector('.label').textContent = '';
      document.getElementById('searchInput').placeholder = '';
      console.log('ni gana');
  }
console.log('wani gana');

}
);
function isEmpty(str) {
return str.trim() === "";
}