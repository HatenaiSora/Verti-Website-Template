let hamburgerButton = document.getElementById('hamburger');
let mainMenu = document.getElementById('main-menu');

let closemenuButton = document.getElementById('close');

hamburgerButton.addEventListener('click', function() {
  mainMenu.style.display = 'block';
});

closemenuButton.addEventListener('click', function() {
  mainMenu.style.display = 'none';
});
