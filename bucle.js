var http = require('http');

var manejador = function(solicitud,respuesta){
	var i = 0;
	while(true){
		console.log(i+'-->');
		i++
	}
	
};

var servidor = http.createServer(manejador);

servidor.listen(8080);