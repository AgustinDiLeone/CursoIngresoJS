//Agustin Di Leone

function mostrar()
{
	let edad;
	let mensaje;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad == 15){

	mensaje = "niña bonita";
	
	}else {
		mensaje = "no ha ingresado un 15";
	}
	alert(mensaje);
}

/* operadores relacionales o condicionales
< menor
> mayor
<= menor o igual >=mayor o igual
== igual
!= distinto

operadores logicos
&& y logica
|| o logica
! negacion 
*/