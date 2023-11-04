//  AJAX call
function fetchData(callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://restcountries.com/v3.1/all', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        callback(data);
      } else {
        console.error('Failed to fetch data');
      }
    }
  };
  xhr.send();
}

// top 10 populated countries
function printTopNPopulatedCountries(data, N) {
  data.sort((a, b) => (b.population || 0) - (a.population || 0)); // Sort by population in descending order
  var topN = data.slice(0, N); // Extract the top N countries

  console.log(`Top ${N} Populated Countries:`);
  topN.forEach(function (country, index) {
    var name = country.name.common;
    var population = country.population || 'N/A';
    console.log(`${index + 1}. ${name}: Population - ${population}`);
  });
}

var topN = 10;

// Main function
fetchData(function (data) {
  printTopNPopulatedCountries(data, topN);
});
