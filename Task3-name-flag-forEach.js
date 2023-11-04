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

// Name, \flag 
function processCountryData(data) {
  data.forEach(function (country) {
    var name = country.name.common;
    var capital = country.capital ? country.capital[0] : 'N/A';
    var flag = country.flags ? country.flags.svg : 'N/A';

    console.log('Name: ' + name);
    console.log('Capital: ' + capital);
    console.log('Flag: ' + flag);
    console.log('-------------------');
  });
}

// Main function
fetchData(processCountryData);
