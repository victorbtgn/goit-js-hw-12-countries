import debounce from 'lodash.debounce';
import PNotify from './js/pnotify';

import searchRefs from './js/refs';
import fetchCountries from './js/fetch-countries';
import addMarkup from './js/addMarkup';

import './styles.css';

searchRefs.input.addEventListener('input', debounce(onTape, 500));

function onTape(event) {
  event.preventDefault();
  const searchQuery = event.target.value;

  if (searchQuery.length === 0) {
    searchRefs.list.innerHTML = '';
    return;
  }

  fetchCountries(searchQuery).then(addMarkup);
}
