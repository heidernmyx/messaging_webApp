document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById('profile_and_username_container');
  const popupMenu = document.getElementById('popup_menu');

  container.addEventListener('click', function(event) {
    // Calculate popup menu position based on mouse click
    const posX = event.clientX;
    const posY = event.clientY + container.clientHeight;

    // Show popup menu at calculated position
    popupMenu.style.display = 'block';
    popupMenu.style.top = posY + 'px';
    popupMenu.style.left = posX + 'px';
  });

  // Close the popup menu when clicking outside of it
  document.addEventListener('click', function(event) {
    if (!popupMenu.contains(event.target) && event.target !== container) {
      popupMenu.style.display = 'none';
    }
  });
});

console.log('yawa');