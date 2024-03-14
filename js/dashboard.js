var searchField = document.getElementById('searchInput').addEventListener('focus', function() {
    document.querySelector('#searchInput').placeholder = 'Search...';
    document.querySelector('label').textContent = 'Find users';
});
document.getElementById('searchInput').addEventListener('blur', function() {
  let str = document.getElementById('searchInput').value;
    if (isEmpty(str)) {
        document.querySelector('label').style.display = 'inline-block';
        // document.querySelector('.label').textContent = '';
        document.getElementById('searchInput').placeholder = '';
        console.log('ni gana');
    }
console.log('wani gana');

}
);
function isEmpty(str) {
  return str.trim() === "";
}