var mongoose = require('mongoose'),
Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

var producto_schema = new Schema({
	nombre: String,
	descripcion: String,
	precio: String
});

prod_model = mongoose.model('producto', producto_schema, 'producto');
module.exports = {
	show: function(req, res){
		prod_model.find({}, function(err,items){
			if(!err){
				res.send(items);
			}else{
				return console.log(err);
			}
		});
	},
	create: function(req,res){

	},
	update: function(req,res){

	},
	delete: function(req,res){

	},
};