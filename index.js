let menu = document.querySelector('.menu');
let nav = document.querySelector('nav');

menu.addEventListener('click', () => {
  if (nav.style.width == '80%') {
    menu.src = './assets/images/icon-menu.svg'
    nav.style.width = '0%';
  }
  else {
    menu.src = './assets/images/icon-menu-close.svg'
    nav.style.width = '80%';
  }
});