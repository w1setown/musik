// JavaScript
var menu = document.querySelector('.menu');

// Make the menu visible when the page loads
menu.classList.add('menu-top');

var initialMenuPosition;

// Calculate the initial position of the menu after the page has loaded
document.addEventListener('DOMContentLoaded', function() {
  initialMenuPosition = menu.offsetTop;
});

window.addEventListener('scroll', function() {
  if (window.scrollY <= initialMenuPosition) {
    menu.classList.add('menu-top');
    menu.classList.remove('show');
  } else {
    menu.classList.remove('menu-top');
  }
});

window.addEventListener('mousemove', function(event) {
  if (event.clientY < 50 && window.scrollY > initialMenuPosition) { // adjust the threshold as needed
    menu.classList.add('show');
  } else {
    menu.classList.remove('show');
  }
});