// importamos los paquetes necesarios
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//configuramos nuestra app para usar BodyParser()
//el cual nos permitira obtener data enviada por POST

app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 5000; //configurar nuestro puerto

app.use("/", function(req, res, next){
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers','Content-Type, Authorization, Content-Length, X-Requested-with');
	next();
	

});
app.options("/*", function(req, res, next){
	res.sendStatus(200);
});

//Rutas para nuestra api
const router = express.Router();

//Ruta de prueba para ver si todo funciona (accesible por GET http://localhost:5000/api)
router.get('/', function(req, res){
	res.json({message: 'Bienvenido a nuestra api'});
});

//Registrando nuestras Rutas

//todas las rutas tendran el prefijo /api
app.use('/api', router);

//nos conectamos a nuestra base de datos
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dawa_blog');
mongoose.Promise = global.Promise;

//Iniciamos el servidor
app.listen(port);
console.log('La magia sucede en el puerto ' + port);