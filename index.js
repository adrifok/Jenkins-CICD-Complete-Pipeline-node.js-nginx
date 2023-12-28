var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write("Here I'm in Cloud");  //write a response to the client
  res.end(); //end the response
}).listen(3000); //the server object listens on port 3000

