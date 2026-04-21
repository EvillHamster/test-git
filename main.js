const button = document.querySelector('.btn')
const text = document.querySelector('.title')
button.addEventListener('click', () => {
  console.log("клик был");
  if (button.textContent === 'вкл') {
    text.classList.add('on')
    text.classList.remove('off')
    button.textContent = 'выкл'
    button.style.backgroundColor='green'

  } else {
    text.classList.add('off')
    text.classList.remove('on')
    button.textContent = 'вкл'
    button.style.backgroundColor='red'
  }
})