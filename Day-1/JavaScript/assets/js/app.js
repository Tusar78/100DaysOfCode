let number = 0;

const incrementBtn = document.querySelector('#increment-btn');

const display = document.getElementById('display');

console.log(display);

incrementBtn.addEventListener('click', () => {
  display.textContent = number++
})