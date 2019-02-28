import { qs } from './helpers';

export default class Filter {
  constructor(filterEl, filterBtnEl) {
    this.filterEl = qs(filterEl);
    this.filterBtnEl = qs(filterBtnEl);

    this.eventListeners();
  }

  eventListeners() {
    this.filterBtnEl
      .addEventListener('click', () => this.filterEl.classList.toggle('open'));
  }
}
