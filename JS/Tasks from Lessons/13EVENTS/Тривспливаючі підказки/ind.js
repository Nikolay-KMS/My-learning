"use strict"

let tooltipElem;
document.onmouseover = function(event) {
  let target = event.target;
  let tooltipText = target.dataset.tooltip;
  if(!tooltipText) return;
  tooltipElem = document.createElement('div');
  tooltipElem.innerText = tooltipText;
  tooltipElem.className = 'tooltip';
  document.body.append(tooltipElem);
  let coords = target.getBoundingClientRect();
  let left = (coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2);
  let top = coords.top - tooltipElem.offsetHeight -5 ;
  if(top < 0) {
    top = coords.top + target.offsetHeight + 5;
  } 
  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';
};

document.onmouseout = function(event) {
  if( tooltipElem ) {
    tooltipElem.remove();
  };
};