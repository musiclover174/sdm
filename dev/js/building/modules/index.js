import { qs } from './helpers';

export default class Index {
  constructor(logoClass) {
    this.logoClass = logoClass;

    if (qs(logoClass)) this.logoAnimation();
  }

  logoAnimation() {
    let startTop = 25;
    let endTop = 20;
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
    });
  }
}
