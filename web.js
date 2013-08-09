var express = require('express');

var app = express.createServer(express.logger());

var fs = require("fs");
var fileName = "index.html";

var content;

fs.readFile(fileName, function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;
});

app.get('/', function(request, response) {
  response.send(content.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
