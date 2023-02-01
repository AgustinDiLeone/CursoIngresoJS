/*Agustin Di leone
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
/*
{
	let nombrePersona;
    let edadPersona;
    let mensaje;

	nombrePersona = document.getElementById("txtIdNombre").value;
	edadPersona = document.getElementById("txtIdEdad").value;
	mensaje = "Usted se llama " + nombrePersona + " y tiene " + edadPersona + " años";
	
	alert(mensaje);
}*/

{
	let nombrePersona;
    let edadPersona;
	let apellidoPersona
    let mensaje;

	nombrePersona = document.getElementById("txtIdNombre").value;
	edadPersona = document.getElementById("txtIdEdad").value;
	apellidoPersona = prompt("¿Cuál es su apellido?")
	mensaje = apellidoPersona + ", usted se llama " + nombrePersona + " y tiene " + edadPersona + " años";
	
	alert(mensaje);


}

