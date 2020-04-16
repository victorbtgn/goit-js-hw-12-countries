import oneCountryTemplate from '../templates/one-country.hbs';
import tenCountryTemplate from '../templates/ten-countries.hbs';
import searchRefs from '../js/refs';

import PNotify from './pnotify';

const addMarkup = arr => {
  searchRefs.list.innerHTML = '';

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
    PNotify.error({
      title: 'Too many matches found.',
      text: 'Enter a more specific query!',
    });
  }
};

export default addMarkup;
