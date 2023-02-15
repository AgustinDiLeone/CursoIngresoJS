/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let acumuladorPromedio;
	let cantidadNumeros;
	let acumuladorSuma;
	let acumulador;
	let respuesta;
	let numero;
	let numeroSuma;
	let numeroCantidad;

	acumuladorPromedio = 0;
	acumuladorSuma = 0;
	acumulador = 0
	cantidadNumeros = 0;
	numeroSuma = 0;
	numeroCantidad = 0;
	respuesta = "si";

	//numero = parseInt(prompt("Ingrese un numero"));

	while(respuesta == "Si" || respuesta == "SI" || respuesta == "si" ){

		numero = parseInt(prompt("Ingrese otro numero"));
		cantidadNumeros = numeroCantidad + 1;
		acumuladorSuma = acumulador + numeroSuma;
		respuesta = prompt("desea continuar?(no) para salir");
	}
	
	acumuladorPromedio = numeroSuma / cantidadNumeros;

	document.getElementById(txtIdSuma).value = acumuladorSuma;
	document.getElementById(txtIdPromedio).value = acumuladorPromedio;

}//FIN DE LA FUNCIÓN