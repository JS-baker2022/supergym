import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';

const sectionClassName = 'juri__swiper';
const reviewsContainer = document.querySelector(`.${sectionClassName}`);

const initJuriSwiper = () => {
  if (reviewsContainer) {
    return new Swiper(`[data-swiper="${sectionClassName}"]`, {
      modules: [Navigation, Pagination],
      grabCursor: true,
      speed: 600,
      slidesPerView: 1,
      spaceBetween: 300,

      navigation: {
        prevEl: `[data-slider-prev-button="${sectionClassName}"]`,
        nextEl: `[data-slider-next-button="${sectionClassName}"]`,
      },
    });
  }

  return null;
};

export {initJuriSwiper};
