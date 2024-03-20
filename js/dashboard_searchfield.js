
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('focus', () => {
  searchInput.placeholder = "Search...";
  // alert("nigana");
});
searchInput.addEventListener('blur', function() {
  if (this.value === '') {
      searchInput.placeholder = ' ';
  }
});
