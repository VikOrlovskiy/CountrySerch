import './css/styles.css';
import CountriesApiService from './js/fetchCountries';
import countriesCard from './templates/countries';
import countryCard from './templates/country';
// =====================================================
const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
const Refs = {
  input: document.getElementById('search-box'),
  list: document.querySelector('.country-list'),
  div: document.querySelector('.country-info'),
};
// ======================================================
Refs.input.addEventListener('input', debounce(updateValue, DEBOUNCE_DELAY));
const countriesApiService = new CountriesApiService();

function updateValue(e) {
  Refs.list.innerHTML = '';
  Refs.div.innerHTML = '';
  countriesApiService.value = e.target.value.trim();

  countriesApiService.fetchCountries().then(countries => {
    createCountyCard(countries);
  });
}
// ======================================================
function createCountyCard(countries) {
  return countries.map(({ name, capital, population, flags, languages }) => {
    console.log({ languages });
    if (countries.length === 1) {
      return Refs.div.insertAdjacentHTML(
        'afterbegin',
        countryCard({ name, capital, population, flags, languages }),
      );
    }
    Refs.list.insertAdjacentHTML(
      'afterbegin',
      countriesCard({ name, capital, population, flags, languages }),
    );
  });
}
