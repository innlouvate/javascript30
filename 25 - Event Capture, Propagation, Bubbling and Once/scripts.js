const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation(); //stop bubbling up events
}

divs.forEach(div => div.addEventListener('click', logText, {
  capture: true //trigger on capture
 }));

button.addEventListener('click', () => {
  console.log('Click!!!');
}, {
  once: true
});
