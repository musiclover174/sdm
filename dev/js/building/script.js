import {
  resizeWatcher, elemVisCheck, qsAll, qs, getStyle, eventsDispatcher,
} from './modules/helpers';

import Index from './modules/index';
import Burger from './modules/burger';
import Popup from './modules/popup';
// import Contacts from './modules/contacts';
import Forms from './modules/forms';
import Sticky from './modules/sticky';

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

  if (qs('[data-popup]')) {
    window.popup = new Popup('[data-popup]');
  }

  // if (qs('.js-contacts-map')) {
  //   const contacts = new Contacts('map');
  //   contacts.init();
  // }

  if (qs('.js-gallery')) {
    lightGallery(qs('.js-gallery'), {
      selector: '.gallery__elem-href',
      thumbnails: true,
    });
  }

  if (qsAll('form').length) Forms.init();

  if (qs('.js-sticky')) {
    const sticky = new Sticky();
  }

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
