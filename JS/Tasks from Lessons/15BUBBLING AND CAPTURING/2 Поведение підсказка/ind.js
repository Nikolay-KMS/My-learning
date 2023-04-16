"use strict"

// При наведении мыши на элемент с атрибутом data-tooltip, над ним должна показываться подсказка и скрываться при переходе на другой элемент.

document.addEventListener('mouseover', (event)=> {
  if(event.target.tagName !== 'BUTTON') {
    return
  };
  let div = document.createElement('div');
  div.innerHTML = event.target.dataset.tooltip;
  div.classList.add('tooltip');
  event.target.append(div);

  let coords = event.target.getBoundingClientRect();
  div.style.top = (coords.y - div.offsetHeight > 0) ?  `${coords.y - div.offsetHeight -5}px` :
                                                       `${coords.y + event.target.offsetHeight + 5}px`;
  let xSize = (coords.x + (event.target.offsetWidth - div.offsetWidth) / 2);
  div.style.left = ( xSize > 5 ) ?  `${xSize}px` : '0px';
});

document.addEventListener('mouseout', (event)=> {
  if(event.target.tagName !== 'BUTTON') {
    return
  };
  document.querySelector('.tooltip').remove();
});