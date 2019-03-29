import {
  resizeWatcher, elemVisCheck, qsAll, qs, getStyle, eventsDispatcher,
} from './modules/helpers';

import Index from './modules/index';
import Burger from './modules/burger';
// import Contacts from './modules/contacts';
import Forms from './modules/forms';
// import Share from './modules/share';
import Sticky from './modules/sticky';
// import Realized from './modules/realized';
// import Filter from './modules/filter';
// import Slider from './modules/slider';
// import Partners from './modules/partners';

document.addEventListener('DOMContentLoaded', () => {

  const headerEl = qs('.js-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight / 3) {
      headerEl.classList.add('fixed');
    } else {
      headerEl.classList.remove('fixed');
    }
  });

  if (qsAll('.h-anim').length) elemVisCheck();

  if (qs('.js-burger')) {
    const burger = new Burger(qs('.js-burger'));
  }

  if (document.body.classList.contains('index')) {
    const index = new Index(
      {
        logoClass: '.js-logo',
        contactsTabClass: '.js-contacts-tab',
        contactsBlockClass: '.js-contacts-block',
      },
    );
  }

  // if (qs('.js-realized-elem')) {
  //   const realized = new Realized('.js-realized-elem');
  // }

  // if (qs('.js-contacts-map')) {
  //   const contacts = new Contacts('map');
  //   contacts.init();
  // }

  if (qsAll('form').length) Forms.init();

  // if (qsAll('.js-share').length) {
  //   qsAll('.js-share').forEach((shBtn) => {
  //     shBtn.addEventListener('click', (e) => {
  //       e.preventDefault();
  //     });
  //   });
  //   window.share = new Share();
  // }

  // if (qsAll('.js-typecar')) {
  //   const typeCar = new Swiper('.js-typecar', {
  //     speed: 800,
  //     slidesPerView: 1,
  //     spaceBetween: 10,
  //     loop: true,
  //     autoHeight: true,
  //     navigation: {
  //       nextEl: '.js-typecar .swiper-button-next',
  //       prevEl: '.js-typecar .swiper-button-prev',
  //     },
  //   });
  // }

  if (qs('.js-sticky')) {
    const sticky = new Sticky();
  }

  // if (qs('.js-filter')) {
  //   const filter = new Filter('.js-filter', '.js-filter-open');
  // }

  // if (qs('.js-slider')) {
  //   const slider = new Slider('.js-slider', '.js-slider-thumbs');
  // }

  // if (qs('.js-partners-carousel')) {
  //   const partners = new Partners('.js-partners-carousel', '.js-partners-prev', '.js-partners-next');
  // }

  // if (qs('.js-company-paper')) {
  //   qs('.js-company-paper').addEventListener('click', () => qs('.js-company-openpaper').click());
  // }

  window.onload = () => {
    document.body.classList.add('load');
    eventsDispatcher();
  };

  window.addEventListener('resize', () => {
    const mainEl = qs('main');
    mainEl.removeAttribute('style');
    const hMain = parseInt(getStyle(mainEl).height, 10);
    const hFooter = parseInt(getStyle(qs('.footer')).height, 10);

    if (hMain + hFooter < window.innerHeight) {
      mainEl.style.height = `${window.innerHeight - hFooter}px`;
    }
  });

  resizeWatcher();
});
