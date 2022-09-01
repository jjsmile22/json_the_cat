const myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

const breedName = myArgs[0];

const request = require('request');

const fetchPagePutIntoDoc = function(breedName) {
  console.log('Requesting data from URL...');
  //requesting breed name
  request("https://api.thecatapi.com/v1/breeds/search?name=" + breedName, (error, response, body) => {
  //catch error  
  if (error) {
      return console.log("error:", error);
    }
  //parse body into javascript object
    const data = JSON.parse(body);
    let breed = data[0];
    if (breed) {
      console.log(breed.description);
  //if breed does not exist write message
    } else {
      console.log("unable to find a breed for" + breedName);
      return;
    }


    console.log(typeof data);
    console.log(typeof body);


    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    
  });
};

fetchPagePutIntoDoc(breedName);