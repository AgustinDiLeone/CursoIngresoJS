/*Agustin Di Leone
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	let mensaje;

	numeroIngresado = parseFloat(prompt("ingrese un número entre 0 y 9."));

	while(isNaN(numeroIngresado)||numeroIngresado < 0 || numeroIngresado > 9){
		alert("Error: Ingrese un numero entre 0 y 9 unicamente")
		numeroIngresado = parseFloat(prompt("ingrese un número entre 0 y 9."));
	}
	
	mensaje = "Felicitaciones ingresaste el: " + numeroIngresado + " un numero correcto";

	document.getElementById("txtIdNumero").value = (mensaje);
}//FIN DE LA FUNCIÓN