

// Function to make an HTTP request
function fetchPopulationData(callback) {
  const apiUrl = "https://restcountries.com/v3.1/all";

  // Make the HTTP request
  const xhr = new XMLHttpRequest();
  xhr.open("GET", apiUrl, true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      // Parse the JSON response
      const countries = JSON.parse(xhr.responseText);
      callback(countries);
    } else {
      console.error("Error: Unable to fetch data from the API.");
    }
  };
			 
 

  xhr.send();
											 
																			   
							 
}

// Population Filter
function filterCountriesByPopulation(countries) {
  const populationThreshold = 200000; // 2 lakhs


  const countriesWithLowPopulation = countries.filter(country => country.population < populationThreshold);
  console.log(countriesWithLowPopulation);
}

// Call the fetchCountryData function on page load

fetchPopulationData(filterCountriesByPopulation);
