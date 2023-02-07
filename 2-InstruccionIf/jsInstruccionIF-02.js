//Agustin Di Leone

function mostrar()
{
	let edad;
	let mensaje;
	
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18){

		mensaje = "Sos mayor de edad";
	}

	alert(mensaje);
	

}