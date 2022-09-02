const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  console.log('Requesting data from URL...');
  //requesting breed name
  request("https://api.thecatapi.com/v1/breeds/search?name=" + breedName, (error, response, body) => {
    //catch error
    if (error) {
      callback(error, null);
      return;
    }
    //parse body into javascript object
    const data = JSON.parse(body);
    let breed = data[0];
    if (breed) {
      callback(null, breed.description);

    //if breed does not exist write message
    } else {
      callback("unable to find a breed for", null);
      return;
    }

    console.log(typeof data);
    console.log(typeof body);
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  });
};

module.exports = { fetchBreedDescription };