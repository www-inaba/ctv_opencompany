import "swiper/css/bundle";
import "swiper/css";
import Swiper from "swiper/bundle";
import $ from "jquery";
import Responsive from "../modules/_Responsive";

$(function () {
  if ($("[data-slider='solution']")) {
    function createThumbnailSwiper() {
      return new Swiper('[data-slider="solutionThumbnail"]', {
        slidesPerView: 7,
        freeMode: true,
      });
    }
    let thumbnailSwiper = createThumbnailSwiper();

    function createSolutionSwiper() {
      return new Swiper('[data-slider="solution"]', {
        loop: false,
        thumbs: {
          swiper: thumbnailSwiper,
        },
        navigation: {
          nextEl: '[data-slider-button="solution-next"]',
          prevEl: '[data-slider-button="solution-prev"]',
        },
      });
    }
    let solutionSwiper = createSolutionSwiper();

    new Responsive({
      pc: function () {
        if (!solutionSwiper && !thumbnailSwiper) {
          thumbnailSwiper = createThumbnailSwiper();
          solutionSwiper = createSolutionSwiper();
          $(".solutionSlider_list").matchHeight();
        }
      },
      sp: function () {
        if (solutionSwiper && thumbnailSwiper) {
          thumbnailSwiper.destroy();
          solutionSwiper.destroy();
          thumbnailSwiper = solutionSwiper = undefined;
          $(".solutionSlider_list").matchHeight({ remove: true });
        }
      },
    });
  }
});
