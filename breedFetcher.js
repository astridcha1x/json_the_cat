const request = require('request');

// --------------------- //

const fetchBreedDescription = function(breed, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(url, (error, response, body) => {

    if (error) {
      callback(`Failed to obtain data: ${error} ` + null);
    }

    const data = JSON.parse(body);
    const breedData = data[0];

    if (breedData) {
      callback(null,breedData.description);
    } else {
      callback(`Failed to find breed: ${error} ` + null);
    }

  });

};

module.exports = {fetchBreedDescription};