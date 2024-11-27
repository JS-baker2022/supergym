// https://swiperjs.com/get-started#installation
//import Swiper from 'swiper';
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import { initTabs } from './vendor/tabs/init-tabs';
import { initAccordions } from './vendor/accordion/init-accordion';
import { initReviewsSwiper } from './modules/swiper/reviews';
import { initVideo } from './modules/video';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initTabs();
    initAccordions();
    initVideo();
    initReviewsSwiper();
  });
});
