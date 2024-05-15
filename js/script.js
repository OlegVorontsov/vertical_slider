const burger = document?.querySelector('[data-burger]');
const burgerClose = document?.querySelector('[data-burger-close]');
const nav = document?.querySelector('[data-header__nav]');
const body = document.body;
const navItems = nav?.querySelectorAll('a');

window.addEventListener("DOMContentLoaded", function() {

    // search

    document.querySelector('#search-btn').addEventListener('click', function () {
      document.querySelector('#search-open').classList.toggle('search-active');
      document.querySelector('#search-btn').classList.toggle('search-active')
    });

    document.querySelector('#search-close').addEventListener('click', function () {
      document.querySelector('#search-open').classList.toggle('search-active');
      document.querySelector('#search-btn').classList.toggle('search-active')
    });
});

let center = [55.75846806898367,37.60108849999989];

function init() {
  let map = new ymaps.Map('map', {
    center: center,
    zoom: 17
  })

  let placemark = new ymaps.Placemark (center, {}, {
    iconLayout: 'default#image',
    iconImageHref: '/img/marker-icon.svg',
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -20]
  });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  //map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark);
}

ymaps.ready(init);

burger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burgerClose?.classList.toggle('header__burger-close--active');
  nav?.classList.toggle('nav--visible');
});

document.addEventListener('click', function handleClickOutsideBox(event) {
  if (nav.contains(event.target)) {
    body.classList.remove('stop-scroll');
    burgerClose?.classList.remove('header__burger-close--active');
    nav?.classList.remove('nav--visible');
  }
});

burgerClose?.addEventListener('click', () => {
  body.classList.remove('stop-scroll');
  burgerClose?.classList.remove('header__burger-close--active');
  nav?.classList.remove('nav--visible');
});

navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    burgerClose?.classList.remove('header__burger-close--active');
    nav?.classList.remove('nav--visible');
  });
});

