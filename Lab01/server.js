var http = require('http');
var express = require('express'); 
var app = express();
fs = require('fs');

app.get('/',function(request,response){
	fs.readFile('./index.html', function(error, html){
		response.write(html);
		response.end();
		console.log('INDEX');
	});
	});
app.get('/nosotros.html',function(request,response){
	fs.readFile('./nosotros.html', function(error, html){
		response.write(html);
		response.end();
		console.log('Pagina Nosotros');
	});
	});
app.get('/servicios.html',function(request,response){
	fs.readFile('./servicios.html', function(error, html){
		response.write(html);
		response.end();
		console.log('pagina Sericios');
	});
	});
app.get('/clientes.html',function(request,response){
	fs.readFile('./clientes.html', function(error, html){
		response.write(html);
		response.end();
		console.log('pagina Clientes');
	});
	});
app.get('/contacto.html',function(request,response){
	fs.readFile('./contacto.html', function(error, html){
		response.write(html);
		response.end();
		console.log('Pagina Contacto');
	});
	});
app.listen(8080, function(){
		console.log('Servicio iniciado');
});