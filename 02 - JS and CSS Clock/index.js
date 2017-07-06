const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const secDegrees = (seconds / 60 * 360) +90;
  const minDegrees = (minutes / 60 * 360) +90;
  const hourDegrees = (hours / 12 * 360) +90;
  secondHand.style.transform = `rotate(${secDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
