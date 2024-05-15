const main = new Splide( '#main-slider', {
  height   : '787px',
  type       : 'fade',
  heightRatio: 0.5,
  pagination : false,
  arrows     : false,
  cover      : true,
} );

const thumbnails = new Splide('#thumbnail-carousel', {
  direction: 'ttb',
  height   : '712px',
  wheel    : true,
  rewind          : true,
  fixedWidth      : 68,
  fixedHeight     : 102,
  isNavigation    : true,
  gap             : 20,
  focus           : 'center',
  pagination      : false,
  cover           : true,
  dragMinThreshold: {
    mouse: 4,
    touch: 10,
  },
  breakpoints : {
    640: {
      fixedWidth  : 66,
      fixedHeight : 38,
    },
  },
})

main.sync( thumbnails );
main.mount();
thumbnails.mount();



