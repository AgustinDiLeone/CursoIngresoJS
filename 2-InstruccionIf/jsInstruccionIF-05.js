//Agustin Di Leone

function mostrar()
{
	let edad; 
	let mensaje;
	
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad < 13 || edad > 17){
		mensaje = "No sos adolescente"
		alert(mensaje);
	}
}