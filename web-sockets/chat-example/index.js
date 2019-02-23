var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(8585, function(){
  console.log('visit MofidChat on http://localhost:8585');
});