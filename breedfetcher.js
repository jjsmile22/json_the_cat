const myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

const breedName = myArgs[0];

const request = require('request');

// const fs = require('fs');

const fetchPagePutIntoDoc = function(breedName) {
  console.log('Requesting data from URL...');
  request("https://api.thecatapi.com/v1/breeds/search?name=" + breedName, (error, response, body) => {
  if (error){
    return console.log("error:",  error)
  }
    const data = JSON.parse(body);
    let breed = data[0]
    if (breed) {
      console.log(breed.description)
    } else {
      console.log("unable to find a breed for" + breedName)
      return;
    }
    
    
    console.log(typeof data);
    console.log(typeof body);
    
    
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // Print the HTML for the Google homepage.

    // const textToAppend = body;

    // fs.appendFile(`./data/${fileName}.txt`, textToAppend, err => {
    //   if (err) {
    //     console.error(err);
    //   }
    //   console.log('Data appended to file');
    //   console.log(`Downloaded and saved ${textToAppend.length} bytes to ${fileName}`)
    // });
  });
};

fetchPagePutIntoDoc(breedName);