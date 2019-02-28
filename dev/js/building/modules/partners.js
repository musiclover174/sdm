export default class Partners {
  constructor(partnersEl, partnersElPerv, partnersElNext) {
    this.partnersEl = partnersEl;
    this.partnersElPerv = partnersElPerv;
    this.partnersElNext = partnersElNext;

    this.init();
  }

  init() {
    const partnersSlider = new Swiper(this.partnersEl, {
      spaceBetween: 13,
      slidesPerView: 2,
      loop: true,
      speed: 800,
      navigation: {
        nextEl: '.js-partners-next',
        prevEl: '.js-partners-prev',
      },
      breakpoints: {
        999: {
          slidesPerView: 1,
        },
      },
    });
  }
}
