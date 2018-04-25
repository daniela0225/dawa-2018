function diaMes(mes){
	var date = new Date();
	switch(mes){
		case 1:
			console.log("Enero");
			break;
		case 2:
			console.log("Febrero");
			break;
		case 3:
			console.log("Marzo");
			break;
		case 4:
			console.log("Abril");
			break;
		case 5: 
			console.log("Mayo");
			break;
		case 6:
			console.log("Junio");
			break;
		case 7:
			console.log("Julio");
			break;
		case 8:
			console.log("Agosto");
			break;
		case 9:
			console.log("Setiembre");
			break;
		case 10:
			console.log("Octubre");
			break;
		case 11:
			console.log("Noviembre");
			break;
		case 12:
			console.log("Diciembre");
			break;
		default: 
			console.log('Error, No existe mes'); 
			break;
	}

	var primerDia = new Date(date.getFullYear(), date.getDay(), 1);
	var ultimoDia = new Date(date.getFullYear(), date.getDay() +1, 0 );
	console.log("El primer dia es: " + primerDia.getDate());
	console.log("El ultimo dia: " + ultimoDia.getDate());
}

diaMes(1);