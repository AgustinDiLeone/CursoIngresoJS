//Agustin Di Leone

function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado){
		case"Bariloche":
		mensaje = "Hace frio";
		break;
	case"Cataratas":
		mensaje = "Hace calor";
		break;
	case"Mar del plata":
		mensaje = "Hace calor";
		break;
	case"Ushuaia":
		mensaje = "Hace frio";
		break;

	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN