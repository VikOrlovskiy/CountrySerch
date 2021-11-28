import './css/styles.css';
import CountriesApiService from './js/fetchCountries';
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
  console.log(e.target.value);
  countriesApiService.value = e.target.value;
  countriesApiService.fetchCountries().then(countries => {
    createCountyCard(countries);
  });
}
// ======================================================
function createCountyCard(countries) {
  return countries.map(({ name, capital, population, flags, languages }) => {
    // Refs.list.innerHTML = { name, capital, population, flags, languages };
    return console.log({ name, capital, population, flags, languages });
  });
}
