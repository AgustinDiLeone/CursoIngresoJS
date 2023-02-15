/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let acumuladorPromedio;
	let cantidadNumeros;
	let acumuladorSuma;
	let respuesta;
	let numero;
	let numeroSuma;

	acumuladorPromedio = 0;
	acumuladorSuma = 0;
	cantidadNumeros = 0;
	numeroSuma = 0;
	respuesta = "si";

	while(respuesta == "Si" || respuesta == "SI" || respuesta == "si" ){

		numero = parseInt(prompt("Ingrese un numero"));
		cantidadNumeros = cantidadNumeros + 1;
		while(isNaN(numero)){
			numero = parseInt(prompt("Error: Ingrese un numero"));
		}
		
		acumuladorSuma = acumuladorSuma + numero;
		respuesta = prompt("deseas ingresar otro numero? SI/NO");
	}
	
	acumuladorPromedio = acumuladorSuma / cantidadNumeros;

	document.getElementById("txtIdSuma").value = acumuladorSuma;
	document.getElementById("txtIdPromedio").value = acumuladorPromedio;

}//FIN DE LA FUNCIÓN