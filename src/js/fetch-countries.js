function fetchCountries(name) {
  const url = `https://restcountries.eu/rest/v2/name/${name}`;

  return fetch(url)
    .then(res => res.json())
    .then(data => data);
}

export default fetchCountries;
