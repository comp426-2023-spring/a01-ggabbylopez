// Require http module
var http = require('http');
// Require fs module
var fs = require('fs');
// Require minimist module (make sure you install this one via npm).
var minimist = require('minimist');
// Use minimist to process one argument `--port=` on the command line after `node server.js`.
var args = minimist(process.argv.slice(2),{
    int: 'port'
})
// Define a const `port` using the argument from the command line. 
// Make this const default to port 3000 if there is no argument given for `--port`.
tempPort = 3000;
const hostname = '127.0.0.1';
if (args.port != True){
    tempPort = args.port;
}
const port = tempPort;
// Use the fs module to create an arrow function using `fs.readFile`.

// Use the documentation for the Node.js `fs` module. 
// The function must read a file located at `./public/index.html` and do some stuff with it.
// The stuff that should be inside this function is all below.


// If there is an error, put it on the console error and return. 
// Do not be nice about exiting.
fs.readFile("./public/index.html", 'utf8', (err,data) => {
    if (err){
        console.log(err);
        return;
    }





// Define a const `server` as an arrow function using http.createServer. 
// Use the documentation for the node.js http module. 
// The function should have three responses: 
// 1. status code 200, 
// 2. set a header with content type `text/html`, and 
// 3. end with the data that you are reading in from ./public/index.html.

const server = http.createServer((req,response) => {
   response.statusCode = 200;
   response.setHeader('Content-Type', 'text/html');
    response.end(data);
});




// Start the `server` const listening on the port defined by argument in your `port` const. 
// Put the exact message `Server listening on port ${port}` on the console log. 
server.listen(port, hostname, () => {
console.log('Server running on port ${port}');
});

});
// That's it! You're all done!
