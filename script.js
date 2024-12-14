const menu = document.querySelector('.menu');
const btn = document.querySelector('#bars');

btn.addEventListener('click', () => {
  menu.classList.toggle('active');
});