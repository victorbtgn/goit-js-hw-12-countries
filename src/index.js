import debounce from 'lodash.debounce';

import searchRefs from './js/refs';
import fetchCountries from './js/fetch-countries';
import addMarkup from './js/addMarkup';

import './styles.css';

searchRefs.input.addEventListener('input', debounce(onTape, 500));

function onTape(event) {
  event.preventDefault();
  const value = event.target.value;

  if (value.length === 0) {
    searchRefs.list.innerHTML = '';
    return;
  }

  fetchCountries(value).then(addMarkup);
}
