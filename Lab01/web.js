var http = require('http'),

fs = require('fs');

var html = fs.readFileSync('./acme.html');

http.createServer(function(solicitud,respuesta){
	
	respuesta.write(html);

}).listen(8080);