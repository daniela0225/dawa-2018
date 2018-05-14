import React, {Component} from 'react';
import classes from './Calculadora.css';

export default class Calculadora extends Component{

	state = {
			valor1 : 0,
			valor2 : 0,
			resul : 0
		}

	onChangeNumber = (num) => {
		if(num.target.id == "valor1"){
			this.setState({
				valor1: parseFloat(num.target.value)
			});
		}else if (num.target.id == "valor2"){
			this.setState({
				valor2: parseFloat(num.target.value)
			});
		}
		console.log(this.state);
	}


	sumar = () => {
		this.setState({
			resul:this.state.valor1 + this.state.valor2
		});
		console.log(this.state);
	}
	
	restar = () => {
		this.setState({
			resul:this.state.valor1 - this.state.valor2
		});
	}
	
	multiplicar = () => {
		this.setState({
			resul:this.state.valor1 * this.state.valor2
		});
	}

	dividir = () => {
		this.setState({
			resul: this.state.valor1 / this.state.valor2
		});	
	}

	porcentaje = () =>{
		this.setState({
			resul: (this.state.valor1/100)*this.state.valor2
		});
	}



	render(){	

			return (

			<div className={classes.Contador}>
			<h1>Calculadora</h1>
			<p>Valor 1: <input  id="valor1" onChange={this.onChangeNumber}/></p>
			<p>Valor 2: <input  id="valor2" onChange={this.onChangeNumber}/></p>

			<p>Resultado: <input  value={this.state.resul}/></p>
			
			<button onClick={this.sumar}>Sumar</button>
			<button onClick={this.restar}>Restar</button>
			<button onClick={this.dividir}>Dividir</button>
			<button onClick={this.multiplicar}>Multiplicar</button>
			<button onClick={this.porcentaje}>Porcentaje</button>


			</div>
			)
	}
}