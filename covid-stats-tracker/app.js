
const countriesSelect = document.getElementById("countries");
const xhr = "https://covid19.mathdro.id/api";
const countrySELECT = document.querySelector(".country-stats");
countriesSelect.addEventListener("change", e => {
  const countryCode = e.target.value;
  getStatistics(countryCode)
    .then(stats => {
      displayStatistics(stats);
    })
});
function getCountries() {
  return new Promise((resolve) => {
    fetch(`${xhr}/countries`)
      .then(data => data.json())
      .then(countries => {
        resolve(countries);
      })
  });
}
getCountries().then(data => {
  Object.entries(data.countries).forEach(country => {
    option = document.createElement("option");
    option.text = country[1].name;
    option.value = country[1].iso2;
    countriesSelect.add(option);
  });
});
function displayStatistics(stats) {
  const countryStats = `
          <div >
            <h2>Total Cases: ${stats.confirmed.value}</h2>              
          <div>
             <h2 >Confirmed:  ${stats.deaths.value}</h2>
          </div>
          </div>
            <h2 >Deaths: ${stats.recovered.value}</h2>
         </div>
         </div>
           <h5>Created By North Aims</h>
        </div>`;
  countrySELECT.innerHTML = countryStats;
}
function getStatistics(countryCode) {
  if (countryCode === "search for country") {
  } else {
    url = `${xhr}/countries/${countryCode}`;
  }
  return new Promise((resolve) => {
    fetch(url)
      .then(data => data.json())
      .then(stats => {
        resolve(stats);
      })
  });
}
