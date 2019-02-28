import { qsAll, qs } from './helpers';

export default class Forms {
  static init() {
    const inputs = qsAll('.common__input, .common__textarea');
    const forms = qsAll('form');
    const digitsInput = qsAll('.js-digits');
    const phones = qsAll('.js-phone');

    function emptyCheck(event) {
      if (event.target.value.trim() === '') {
        event.target.classList.remove('notempty');
      } else {
        event.target.classList.add('notempty');
      }
    }

    if (inputs.length) {
      inputs.forEach((item) => {
        item.addEventListener('keyup', emptyCheck);
        item.addEventListener('blur', emptyCheck);
      });
    }

    const phoneMasks = [];
    phones.forEach((phone) => {
      phoneMasks.push(new IMask(phone, {
        mask: '+{7}(000)000-00-00',
      }));
    });

    const date = qs('.js-date');
    const dateMask = new IMask(date, {
      mask: Date,
      min: new Date(),
      max: new Date(2030, 0, 1),
    });

    if (qsAll('.js-common-file').length) {
      const commonFile = qsAll('.js-common-fileinput');
      const commonFileDelete = qsAll('.js-common-filedelete');

      commonFile.forEach((fileInp) => {
        fileInp.addEventListener('change', () => {
          const el = fileInp.nextElementSibling;
          const path = fileInp.value.split('\\');
          let pathName = path[path.length - 1].split('');

          if (pathName.length >= 20) {
            pathName = `${pathName.slice(0, 18).join('')}...`;
          } else {
            pathName = pathName.join('');
          }

          el.textContent = pathName;
          el.classList.add('choosed');
        });
      });

      commonFileDelete.forEach((fileDelete) => {
        fileDelete.addEventListener('click', () => {
          const el = fileDelete.previousElementSibling;
          const fileInput = fileDelete.previousElementSibling.previousElementSibling;

          el.textContent = el.getAttribute('data-default');
          fileInput.value = '';
          el.classList.remove('choosed');
        });
      });
    }

    if (forms.length) {
      forms.forEach((form) => {
        form.addEventListener('submit', (e) => {
          if (!Forms.checkForm(form)) {
            e.preventDefault();
            e.stopPropagation();
            form.classList.add('warning');
          }
        });
      });
    }

    if (digitsInput.length) {
      digitsInput.forEach((digitInput) => {
        digitInput.addEventListener('keydown', (e) => {
          const validArr = [46, 8, 9, 27, 13, 110, 190];

          if (validArr.indexOf(e.keyCode) !== -1
            || (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true))
            || (e.keyCode === 67 && (e.ctrlKey === true || e.metaKey === true))
            || (e.keyCode === 88 && (e.ctrlKey === true || e.metaKey === true))
            || (e.keyCode >= 35 && e.keyCode <= 39)) {
            return;
          }

          if ((e.shiftKey
              || (e.keyCode < 48 || e.keyCode > 57))
              && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
          }
        });
      });
    }
  }

  static checkForm(form) {
    let checkResult = true;
    const warningElems = form.querySelectorAll('.warning');
    const formElems = qsAll('input, textarea, select', form);
    const agreementElems = qsAll('input[name^=agreement]', form);

    form.classList.remove('warning');

    if (warningElems.length) {
      warningElems.forEach(warningElem => warningElem.classList.remove('warning'));
    }

    if (formElems.length) {
      formElems.forEach((elem) => {
        let re;
        if (elem.getAttribute('data-req')) {
          switch (elem.getAttribute('data-type')) {
            case 'tel':
              re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
              if (!re.test(elem.value)) {
                elem.classList.add('warning');
                checkResult = false;
              }
              break;
            case 'email':
              re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
              if (!re.test(elem.value)) {
                elem.classList.add('warning');
                checkResult = false;
              }
              break;
            case 'file':
              if (elem.value.trim() === '') {
                elem.parentNode.classList.add('warning');
                checkResult = false;
              }
              break;
            default:
              if (elem.value.trim() === '') {
                elem.classList.add('warning');
                checkResult = false;
              }
              break;
          }
        }
      });
    }

    if (agreementElems.length) {
      agreementElems.forEach((item) => {
        if (!item.checked) {
          item.classList.add('warning');
          checkResult = false;
        }
      });
    }

    return checkResult;
  }
}
