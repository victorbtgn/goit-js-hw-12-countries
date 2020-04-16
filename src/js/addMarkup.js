import oneCountryTemplate from '../templates/one-country.hbs';
import tenCountryTemplate from '../templates/ten-countries.hbs';
import searchRefs from '../js/refs';

import PNotify from './pnotify';

const addMarkup = arr => {
  searchRefs.list.innerHTML = '';

  if (arr.status === 404) {
    PNotify.error({
      text: 'Ups, this country not found, try again.',
    });
    return;
  }

  if (arr.length === 1) {
    searchRefs.list.innerHTML = oneCountryTemplate(arr[0]);
  }

  if (arr.length > 1 && arr.length <= 10) {
    const markup = arr.reduce((acc, item) => {
      const listItem = tenCountryTemplate(item);
      acc += listItem;
      return acc;
    }, '');

    searchRefs.list.insertAdjacentHTML('beforeend', markup);
  }

  if (arr.length > 10) {
    PNotify.notice({
      title: 'Too many matches found.',
      text: 'Enter a more specific query!',
    });
  }
};

export default addMarkup;
