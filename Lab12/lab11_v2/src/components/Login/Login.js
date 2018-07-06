import React,{Component} from 'react';
import {redirect} from 'react-router';

import axios from '../../axios-dawa';

import Button from '../UI/Button/Button'
import Spinner from '../UI/Spinner/Spinner';
import Input from '../UI/Input/Input';

import { updateObject, checkValidity } from '../../shared/utility';

class Login extends Component{
	state = {
		loginForm: {
			username: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'User Name'

				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			password: {
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'Password'
				},
				value: '',
				validation: {
					required: true,
					minLength: 6
				},
				valid: false,
				touched: false
			}
		},
		error: false,
		loading: false,
		formIsValid: false,
		isAuthenticated: false
	}
	submitHandler = (event) => {
		event.preventDefault();
		const formData = {};
		for (let formElementIdentifier in this.state.loginForm){
			formData[FormElementIdentifier] = this.state.loginForm[formElementIdentifier].value;

		}
		this.setState({loading: true, error: false});
		axios.post('user/signin', formData)
			.them(response => {
				localStorage.setItem
			})
	}
}