"use strict"

let div = document.createElement('div');
document.body.append(div);
div.classList.add('date')
let date = new Date;
let hours = String(date.getHours());
let minutes = String(date.getMinutes());
let seconds = String(date.getSeconds());
hours = (hours < 10) ? 0 + hours : hours;
minutes = (minutes < 10) ?  0 + minutes : minutes;
seconds = (seconds < 10) ?  0 + seconds : seconds;
div.innerText = `${hours} : ${minutes} : ${seconds}`;
let tooltip = document.createElement('div');
tooltip.className = "tooltip";
tooltip.innerHTML = "Tooltip";

let clock = document.querySelector('.date');
let timeoutID;
clock.onmouseover = function() {
  timeoutID = setTimeout(showTooltip, 300);
}
function showTooltip() {
  document.body.append(tooltip);
}
clock.onmouseout = function() {
  tooltip.remove();
  clearTimeout(timeoutID);
}