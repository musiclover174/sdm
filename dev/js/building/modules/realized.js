import { qs, qsAll } from './helpers';

export default class Realized {
  constructor(realizedElem) {
    this.realizedElem = realizedElem;

    this.realizedOpen();
  }

  realizedOpen() {
    qsAll(this.realizedElem).forEach((item) => {
      item.addEventListener('mouseenter', () => {
        qs('.js-realized-bg').style.backgroundImage = `url('${item.getAttribute('data-img')}')`;
      });

      item.addEventListener('click', (e) => {
        if (window.innerWidth >= 768) {
          $.fancybox.open({
            src: item.getAttribute('data-href'),
            type: 'ajax',
            opts: {
              i18n: {
                en: {
                  CLOSE: 'Закрыть',
                },
              },
              clickOutside: '',
              clickSlide: '',
              touch: 0,
              afterShow: () => {
                qs('.popup_realized').classList.add('show');
                setTimeout(() => {
                  qs('.popup_realized').classList.add('animation');
                }, 2000);
              },
            },
          });
          e.preventDefault();
        }
      });
    });
  }
}