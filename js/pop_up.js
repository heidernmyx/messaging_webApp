const container = document.getElementById('container_asButton');
const popupMenu = document.getElementById('popup_menu');

container.addEventListener('click', (event) => {

  popupMenu.style.display = 'block';
  popupMenu.style.top = event.clientY + 'px';
  popupMenu.style.left = event.clientX + 'px';
});

document.addEventListener('click', function(event) {

  if (!popupMenu.contains(event.target) && event.target !== container) {
    popupMenu.style.display = 'none';
  }
});
