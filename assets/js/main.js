// Mobile Menu
function burger(){
  var burger = document.getElementById('burger');
  var links = document.getElementById('links');
  var quit = document.getElementById('quit');
  burger.style.padding = '16px 16px 200vw 200vw';
  links.style.display = 'flex';
  quit.style.display = 'inline';
}

function quit(){
  var burger = document.getElementById('burger');
  var links = document.getElementById('links');
  var quit = document.getElementById('quit');
  var autoQuit = document.getElementByClassName('menu-item');
  burger.style.padding = '16px 16px 32px 32px';
  links.style.display = 'none';
  quit.style.display = 'none';
}

function closeMenu() {
  var burger = document.getElementById('burger');
  var links = document.getElementById('links');
  var quit = document.getElementById('quit');
  var autoQuit = document.getElementByClassName('menu-item');
  burger.style.padding = '16px 16px 32px 32px';
  links.style.display = 'none';
  quit.style.display = 'none';
}

document.getElementsByClassName.('.menu-item').addEventlistener('click', closeMenu);
document.getElementByClassName.addEventlistener

// Smooth Scroll
  var scroll = new SmoothScroll('a[href*="#"]');
