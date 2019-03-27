import { qs } from "./helpers";

export default class Sticky {
  constructor(topSpacing = 20, bottomSpacing = 20) {
    this.ts = topSpacing;
    this.bs = bottomSpacing;

    if (qs('.js-sticky').classList.contains('news-side')) {
      this.ts = 130;
    }

    this.init();
    this.addEventsListener();
  }

  init() {
    this.sidebar = new StickySidebar('.js-sticky', {
      containerSelector: '.js-sticky-container',
      innerWrapperSelector: '.js-sticky-inner',
      topSpacing: this.ts,
      bottomSpacing: this.bs,
    });
  }

  addEventsListener() {
    window.addEventListener('resize', () => {
      this.sidebar.updateSticky();
    });
  }
}
