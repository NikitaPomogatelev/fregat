import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const heroSlider = () => {
    const heroSwiper = new Swiper('.hero', {
        loop: true,
        autoplay: {
          delay: 6500
        },
        speed: 900,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.hero-button-next',
          prevEl: '.hero-button-prev',
        },
      
      });
}

export default heroSlider;