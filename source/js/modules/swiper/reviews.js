import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';

const sectionClassName = 'reviews__swiper';
const reviewsContainer = document.querySelector(`.${sectionClassName}`);

const initReviewsSwiper = () => {
  if (reviewsContainer) {
    return new Swiper(`[data-swiper="${sectionClassName}"]`, {
      modules: [Navigation, Pagination],
      slidesPerView: 'auto',
      centeredSlides: true,
      grabCursor: true,
      speed: 600,
      spaceBetween: 300,

      navigation: {
        prevEl: `[data-slider-prev-button="${sectionClassName}"]`,
        nextEl: `[data-slider-next-button="${sectionClassName}"]`,
      },
    });
  }

  return null;
};

export {initReviewsSwiper};
