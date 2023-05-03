const body = document.querySelector('body');
const label = document.querySelector('h4');
const leftColor = document.querySelector('.left');
const rightColor = document.querySelector('.right');
const container = document.querySelector('.container');

/////////////////////////////
body.style.background = `linear-gradient(to right, ${leftColor.value}, ${rightColor.value})`;

const changeTheBackground = function () {
  body.style.background = `linear-gradient(to right, ${leftColor.value}, ${rightColor.value})`;

  label.textContent = body.style.background;
};

container.addEventListener('input', changeTheBackground);
