// https://swiperjs.com/get-started#installation
//import Swiper from 'swiper';
//import {Navigation, Pagination} from "swiper/modules";
//import 'swiper/css';

import { initTabs } from './vendor/tabs/init-tabs';
import { initAccordions } from './vendor/accordion/init-accordion';
import { initReviewsSwiper } from './modules/swiper/reviews';
import { initJuriSwiper } from './modules/swiper/juri';
import { initVideo } from './modules/video';

window.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('load', () => {
    initTabs();
    initAccordions();
    initVideo();
    initReviewsSwiper();
    initJuriSwiper();
  });
});


// new Swiper ('.reviews__swiper', {
//   slidesPerView: 'auto',
//   centeredSlides: true,
//   spaceBetween: 500,
//   speed: 500,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

// new Swiper ('.juri__swiper', {
//   centeredSlides: true,
//   speed: 500,
//   loop: true,
//   breakpoints: {
//     320: {
//       slidesPerView: 'auto',
//       spaceBetween: 200,
//       navigation: {
//         enabled: false,
//       },
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 40,
//       navigation: {
//         enabled: true,
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     },
//     1366: {
//       slidesPerView: 4,
//       spaceBetween: 40
//     }
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
