const utils = require('../lib/utils');
const User = require('../models/user.js');

const exposedFields = [
	'username',
	'name',
	'email'
];

module.exports = {
	signup: (req,res,next)=>{
		var user = new User({
			...req.body
		});
		user
			.save()
			.then(result => {
				const token = utils.generateToken({
					_id: result['_doc']['_id'],
					name: result['_doc']['name'],
					username: result['_doc']['username'],
					email: result['_doc']['email']
				});
				const exposeData = utils.getCeanUser(result['_doc']);
				res.status(200).json({
					message: 'User succesfully singup!',
					data: exposeData,
					token: token
				});
			})
			.catch(err=>{
				console.log(err);
				res.status(500).json({
					error:err
				});
			});
	},
	
	create: (req, res, next) => {
		var user = new User({
			...req.body
		});
		user
			.save()
			.then(results => {
				res.status(200).json({
					message: 'User succesfully created!',
					data: {
						...results['_doc']
					}
				});
			})
			.catch(err => {
				console.log(err);
				res.status(500).json({
					error:err
				});
			});
	},
	find: (req,res,next) => {
		User.find()
			.select(exposedFields.join(' '))
			.exec()
			.then(docs => {
				const response = {
					count: docs.length,
					data: docs.map(doc => {
						return {
							...doc['_doc']
						};
					})
				};
				res.status(200).json(response);
			})
			.catch(err=>{
				console.log(err);
				res.status(500).json({
					error:err
				});
			});
	},
	findOne: (req,res,next)=>{
		const id = req.params.id;
		Plan.findById(id)
			.exec()
			.then(doc => {
				if(doc){
					res.status(200).json({
						data: doc['_doc'],
					});
				} else {
					res.status(404).json({message: 'No valid entry found for provided ID'});
				}
			})
			.catch(err =>{
				console.log(err);
				res.status(500).json({
					error:err
				});
			});
	},
	update: (req,res,next) => {
		const id = req.params.id;
		let updateParams ={
			...req.body
		};
		User.update({_id: id},{$set: updateParams})
			.exec()
			.then(result => {
				res.status(500),json({
					error:err
				});
			});
	},
	delete: (req,res,next) => {
		const id = req.params.id;
		User.remove(_id: id})
			.exec()
			.then(result => {
				res.status(200).json({
					message: 'User deleted!'
				});
			})
			.catch(err => {
				console.log(err);
				res.status(500).json({
					error:err
				});
			});
	}
}