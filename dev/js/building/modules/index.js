import { qs } from './helpers';

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
    const endPoint = 180;
    const logoEl = qs(this.logoClass);
    let bannerHeight = parseInt(getComputedStyle(qs('.js-banner')).height, 10);
    const wayStart = bannerHeight / 2;
    window.addEventListener('scroll', () => {
      const scrollPerc = (bannerHeight - endPoint - window.scrollY) / bannerHeight;
      const nTop = bannerHeight / 2 - (wayStart - endPoint) * (1 - scrollPerc);
      if (scrollPerc > 0 && nTop > 180) {
        logoEl.style.top = `${nTop}px`;
        logoEl.classList.remove('dark');
      } else {
        logoEl.classList.add('dark');
      }
    });

    window.addEventListener('resize', () => {
      bannerHeight = parseInt(getComputedStyle(qs('.js-banner')).height, 10);
    })
  }

  tabsInit() {

  }
}
