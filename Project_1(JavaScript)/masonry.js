// let elem = document.querySelector('.gallery-pictures');
// let iso = new Isotope( elem, {
//   // layoutMode: 'cellsByRow',
//   itemSelector: '.grid-item',
//   // percentPosition: true,
//   // layoutMode: 'masonry',
//   layoutMode: 'packery',
//   // masonry: {
//     packery: {
//     columnWidth: 50,
//     gutter: 20,
//     // columnWidth: 380,
//     // gutter: 10,

//   }
// });

// const container = document.querySelector('.gallery-pictures');
// const msnry = new Masonry( container, {
//   columnWidth: 111,
//   itemSelector: '.grid-item',
//   gutter: 20,
// });

function masonryGallery() {
  const container = document.querySelector('.gallery-pictures');
const msnry = new Masonry( container, {
  columnWidth: 111,
  itemSelector: '.grid-item',
  gutter: 20,
});
}
masonryGallery()