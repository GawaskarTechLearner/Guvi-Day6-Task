
function fetchCountryData(callback) {
  const apiUrl = "https://restcountries.com/v3.1/all";

  // Ajax call
  const xhr = new XMLHttpRequest();
  xhr.open("GET", apiUrl, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Parse the JSON response
      const countries = JSON.parse(xhr.responseText);
      callback(countries);
    }
  };
  xhr.send();
}

 // Asia Filter
function filterCountriesByRegion(countries) {
  const asiaCountries = countries.filter(country => country.region === "Asia");
  console.log(asiaCountries);
}

// Main Function
fetchCountryData(filterCountriesByRegion);
