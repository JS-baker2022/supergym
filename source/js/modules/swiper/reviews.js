import Swiper from 'swiper';

const sectionClassName = 'reviews__swiper';
const reviewsContainer = document.querySelector(`.${sectionClassName}`);

const initReviewsSwiper = () => {
  if (reviewsContainer) {
    return new Swiper(`[data-reviews-swiper="${sectionClassName}"]`, {
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

export {initReviewsSwiper};
