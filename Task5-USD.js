// AJAX call
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

// US dollar finder
function printCountriesUsingUSD(data) {
  console.log('Countries using US dollar as currency:');
  data.forEach(function (country) {
    if (country.currencies && country.currencies.USD) {
      var name = country.name.common;
      console.log(name);
    }
  });
}

// Main function
fetchData(printCountriesUsingUSD);
