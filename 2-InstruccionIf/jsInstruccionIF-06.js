//Agustin Di Leone

function mostrar()
{
	let edad;
	let mensaje;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18)
	{
		mensaje = "Sos mayor de edad";
	} else{
		if (edad >= 13 && edad <= 17){

		mensaje = "Sos adolescente";
		
		}else{
	
		mensaje = "Sos un niño";
		}
	}
	alert(mensaje);

}