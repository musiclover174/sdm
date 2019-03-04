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
    const logoEl = qs(this.logoClass);
    let bannerHeight = parseInt(getComputedStyle(qs('.js-banner')).height, 10);
    window.addEventListener('scroll', () => {
      const scrollPerc = (bannerHeight - window.scrollY) / bannerHeight;
      const nTop = 25 - 9 * (1 - scrollPerc);
      if (scrollPerc > 0) {
        logoEl.style.top = `${nTop}%`;
        logoEl.classList.remove('dark');
      } else {
        logoEl.classList.add('dark');
        logoEl.style.top = '16%';
      }
    });

    window.addEventListener('resize', () => {
      bannerHeight = parseInt(getComputedStyle(qs('.js-banner')).height, 10);
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
