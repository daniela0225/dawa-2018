var express = require('express')
var app = express()

 app.use('/', express.static('/oficial'))
 app.use(express.static('oficial'))

 app.get('/', function(req, res){
 	res.send('Hola mundo! en Express :)')
 })
 app.use(function(req, res, next){
 	res.status(404).send("Eso no existe!")
 })
 app.use(function(err, req, res, next){
 	console.error(err.stack)
 	res.status(500).send('Algo salio mal!')
 })



 app.listen(3000, function(){
 	console.log('Aplicacion de ejempl escuchando en el puerto 3000!')
 });