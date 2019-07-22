import { 
  qs,
  qsAll,
  fadeIn,
  fadeOut,
} from './helpers';

export default class Contacts {
  constructor(mapElem, tabClass, blockClass) {
    this.el = qs(mapElem);

    this.tabs = qsAll(tabClass);
    this.tabClass = tabClass;
    this.blockClass = blockClass;

    if (this.el) ymaps.ready(this.init.bind(this));
    if (this.tabs) this.tabsInit();
  }

  init() {
    const pinCoord = this.el.getAttribute('data-center').split(':');
    const officeCoord = this.el.getAttribute('data-office').split(':');

    this.myMap = new ymaps.Map(this.el, {
      center: [parseFloat(pinCoord[0]), parseFloat(pinCoord[1])],
      zoom: 17,
      controls: ['zoomControl'],
    });

    this.myMap.behaviors.disable('scrollZoom');

    const { locations } = this.el.dataset;
    locations.split(', ').forEach((item) => {
      const coords = item.split(':');

      const HouseMarker = new ymaps.Placemark(
        [parseFloat(coords[0]), parseFloat(coords[1])], {}, {
          iconLayout: 'default#image',
          iconImageSize: [38, 16],
          iconImageHref: '/img/pin.png',
          iconImageOffset: [-32, -8],
        },
      );
      this.myMap.geoObjects.add(HouseMarker);
    });

    const OfficeMarker = new ymaps.Placemark(
      [parseFloat(officeCoord[0]), parseFloat(officeCoord[1])], {}, {
        iconLayout: 'default#image',
        iconImageSize: [38, 16],
        iconImageHref: '/img/office-pin.png',
        iconImageOffset: [-32, -8],
      },
    );
    this.myMap.geoObjects.add(OfficeMarker);
  }

  tabsInit() {
    const t = this;

    this.tabs.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (!btn.classList.contains('active')) {
          qs(`${this.tabClass}.active`).classList.remove('active');
          fadeOut(qs(`${this.blockClass}.active`), 200, () => {
            qs(`${this.blockClass}.active`).classList.remove('active');
            btn.classList.add('active');
            fadeIn(qs(`${this.blockClass}[data-id="${btn.getAttribute('data-id')}"]`), 200, () => {
              qs(`${this.blockClass}[data-id="${btn.getAttribute('data-id')}"]`).classList.add('active');
              if (t.myMap) {
                const btnCoords = btn.getAttribute('data-coords').split(':');
                t.myMap.setCenter([parseFloat(btnCoords[0]), parseFloat(btnCoords[1])], 17);
              }
            }, 'flex');
          });
        }
      })
    });
  }
}
