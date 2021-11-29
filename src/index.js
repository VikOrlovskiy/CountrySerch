import './css/styles.css';
import CountriesApiService from './js/fetchCountries';
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
  console.log(e.target.value);
  Refs.list.innerHTML = '';
  countriesApiService.value = e.target.value;
  countriesApiService.fetchCountries().then(countries => {
    createCountyCard(countries);
  });
}
// ======================================================
function createCountyCard(countries) {
  console.log(countries);
  return countries.map(({ name, capital, population, flags, languages }) => {
    console.log(typeof countryCard({ name, capital, population, flags, languages }));
    Refs.list.insertAdjacentHTML(
      'afterbegin',
      countryCard({ name, capital, population, flags, languages }),
    );
  });
}
