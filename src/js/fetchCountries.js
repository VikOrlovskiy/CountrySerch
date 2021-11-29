import Notiflix from 'notiflix';
export default class DataFetch {
  constructor() {
    this.searchValue = '';
    console.log(this.searchValue);
  }
  fetchCountries() {
    const URL = `https://restcountries.com/v3.1/name/${this.searchValue}?fields=name,capital,population,flags,languages,`;
    return fetch(URL)
      .then(response => response.json())
      .then(countries => {
        if (countries.status === 404) {
          return Notiflix.Notify.failure(`"Oops, there is no country with that name"`);
        } else if (countries.length > 10) {
          return Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        }
        return countries;
      })
      .catch(e => {
        Notiflix.Notify.failure(`"Oops, there is no country with that name"`);
      });
  }
  get value() {
    return this.searchValue;
  }
  set value(country) {
    this.searchValue = country;
  }
}
