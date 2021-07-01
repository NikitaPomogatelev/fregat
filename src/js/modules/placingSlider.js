import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination} from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

const placingSlider = () => {
 
  // console.log(activeIndex);
    const placingSwiper = new Swiper('.placing-slider', {
        slidesPerView: 3,
        loop: true,
        pagination: {
          el: '.placing__content .swiper-pagination',
          type: 'progressbar',
        },
        navigation: {
          nextEl: '.placing-button-next',
          prevEl: '.placing-button-prev',
        },
        breakpoints: {
          // when window width is >= 300px
          300: {
            slidesPerView: 1,
            spaceBetween: 5
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }      
      });

      const allIndex = document.querySelectorAll('.placing-slider .swiper-slide[data-swiper-slide-index]');
      let maxIndex = 0;

      allIndex.forEach(el => {
        let a = el.getAttribute('data-swiper-slide-index');
        if(a > maxIndex) {
          return maxIndex = a;
        }
      });
      
      
      const sliderCurrent = document.querySelector('.placing .slider-pagination__current');
      const sliderTotal = document.querySelector('.placing .slider-pagination__total');

      const printSlideIndex = (selector, value) => {
        if(value >= 0 && value < 10) {
          selector.innerHTML = `0${value}`;
        } else {
          selector.innerHTML = `${value}`;
        }
      };

      printSlideIndex(sliderCurrent, placingSwiper.realIndex + 1);
      printSlideIndex(sliderTotal, +maxIndex + 1);

      placingSwiper.on('slideChange', function (i) {
        printSlideIndex(sliderCurrent, placingSwiper.realIndex + 1);
        printSlideIndex(sliderTotal, +maxIndex + 1);

      });
}




export default placingSlider;