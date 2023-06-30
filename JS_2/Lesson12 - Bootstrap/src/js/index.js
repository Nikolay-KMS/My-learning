"use strict"



document.querySelectorAll('#popoverButton')
  .forEach(popover => {
    new bootstrap.Popover(popover)
  })

let tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
console.log(tooltipTriggerList);
tooltipTriggerList = [...tooltipTriggerList]
tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

console.log(tooltipTriggerList);
