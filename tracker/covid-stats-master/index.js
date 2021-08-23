
const countrySelect = document.getElementById("countries");
const Xhr = "https://covid19.mathdro.id/api";

function getCountries() {
  return new Promise((resolve) => {
    fetch(`${Xhr}/countries`)
      .then(data => data.json())
      .then(countries => {
        resolve(countries);
      })
  });
}

getCountries().then(data => {
  Object.entries(data.countries).
  forEach(country => {
    option = document.createElement("option");
    option.text = country[1].name;
    option.value = country[1].iso2;
    countrySelect.add(option);
  });
  console.log(countries)
});
