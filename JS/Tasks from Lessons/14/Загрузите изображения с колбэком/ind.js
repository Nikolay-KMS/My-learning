"use strict"

let sources = ["https://en.js.cx/images-load/1.jpg",
"https://en.js.cx/images-load/2.jpg",
"https://en.js.cx/images-load/3.jpg"];

function preloadImages(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    let img = document.createElement('img');
    img.src = arr[i]; 
    document.body.append(img);
  };
  let imgAll = document.querySelectorAll('img');
  console.log(imgAll);
  let count = 0;
  for (let i = 0; i < imgAll.length; i++) {
    imgAll[i].onload = () => {
      count++;
    };
    imgAll[i].onerror = () => {
      count++;
    };
  };
  callback();
};

let callback = () => {
  console.log('Done');
}

preloadImages(sources, testLoaded);

for (let i = 0; i < sources.length; i++) {
  sources[i] += '?' + Math.random();
}
console.log(sources);

function testLoaded() {
  let widthSum = 0;
  for (let i = 0; i < sources.length; i++) {
    let img = document.createElement('img');
    img.src = sources[i];
    widthSum += img.width;
  }
  console.log(widthSum);
}
testLoaded();