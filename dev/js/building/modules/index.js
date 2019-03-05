import {
  qs,
  qsAll,
  fadeOut,
  fadeIn,
} from './helpers';

export default class Index {
  constructor(
    {
      logoClass,
      contactsTabClass,
      contactsBlockClass,
    },
  ) {
    this.logoClass = logoClass;
    this.contactsTabClass = contactsTabClass;
    this.contactsBlockClass = contactsBlockClass;

    if (qs(logoClass)) this.logoAnimation();
    if (qs(contactsTabClass)) this.tabsInit();
  }

  logoAnimation() {
    let startTop = 25;
    let endTop = 9;
    if (window.innerWidth < 1600) {
      startTop = 30;
      endTop = 25;
    }
    const logoEl = qs(this.logoClass);
    const bannerHeight = parseInt(getComputedStyle(qs('.js-banner')).height, 10);
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        const scrollPerc = (bannerHeight - window.scrollY) / bannerHeight;
        const nTop = startTop - (startTop - endTop) * (1 - scrollPerc);
        if (scrollPerc > 0) {
          logoEl.style.top = `${nTop}%`;
          logoEl.classList.remove('dark');
        } else {
          logoEl.classList.add('dark');
          logoEl.style.top = `${endTop}%`;
        }
      } else {
        logoEl.removeAttribute('style');
      }
    });

    window.addEventListener('resize', () => {
      let eventScroll;
      try {
        eventScroll = new Event('scroll');
      } catch (e) {
        eventScroll = document.createEvent('Event');
        eventScroll.initEvent('scroll', false, false);
      }
      window.dispatchEvent(eventScroll);
    })
  }

  tabsInit() {
    qsAll(this.contactsTabClass).forEach((btn) => {
      btn.addEventListener('click', () => {
        if (!btn.classList.contains('active')) {
          qs(`${this.contactsTabClass}.active`).classList.remove('active');
          fadeOut(qs(`${this.contactsBlockClass}.active`), 200, () => {
            qs(`${this.contactsBlockClass}.active`).classList.remove('active');
            btn.classList.add('active');
            fadeIn(qs(`${this.contactsBlockClass}[data-id="${btn.getAttribute('data-id')}"]`), 200, () => {
              qs(`${this.contactsBlockClass}[data-id="${btn.getAttribute('data-id')}"]`).classList.add('active');
            }, 'flex');
          });
        }
      })
    });
  }
}
