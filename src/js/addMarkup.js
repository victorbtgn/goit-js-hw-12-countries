import oneCountryTemplate from '../templates/one-country.hbs';
import tenCountryTemplate from '../templates/ten-countries.hbs';
import searchRefs from '../js/refs';

import PNotify from 'pnotify/dist/es/PNotify.js';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons.js';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
PNotify.defaults.styling = 'material';
PNotify.defaults.icons = 'material';

const addMarkup = arr => {
  if (arr.length === 1) {
    const markup = oneCountryTemplate(arr[0]);

    searchRefs.list.insertAdjacentHTML('beforeend', markup);
  }

  if (arr.length > 1 && arr.length <= 10) {
    const markup = arr.reduce((acc, item) => {
      const listPoint = tenCountryTemplate(item);
      acc += listPoint;
      return acc;
    }, '');

    searchRefs.list.insertAdjacentHTML('beforeend', markup);
  }

  if (arr.length > 10) {
    PNotify.alert({
      text: 'Too many matches found, enter a more specific query!',
    });
  }
};

export default addMarkup;
