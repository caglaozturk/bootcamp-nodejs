// 1. import the 'xmlhttprequest' module to make the 'xmlhttprequest' function available
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// 2. Create a new XMLHttpRequest object
let request = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/users";

// 3. Configure it: GET-request for the URL
request.open('GET', url);

// 4. Send the request over the network
request.send();

// 5. This will be called after the response is received
request.onload = function() {
  if (request.status != 200) { // analyze HTTP status of the response
    console.log(`Error ${request.status}: ${request.statusText}`); // e.g. 404: Not Found
  } else { // show the result
    console.log(JSON.parse(request.responseText)) // response is the server response
  }
};

// 6. Request failed
request.onerror = function() {
  console.log("Request failed");
};