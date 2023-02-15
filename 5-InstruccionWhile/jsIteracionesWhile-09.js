/*Agustin Di Leone
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	
	banderaDelPrimero = true;
	respuesta='si';

	while(respuesta == "Si" || respuesta == "SI" || respuesta == "si"){

		numeroIngresado = parseInt(prompt("Ingrese un numero"));

		while(isNaN(numeroIngresado)){
			numeroIngresado = parseInt(prompt("Error: Ingrese un numero"));
		}

		if(banderaDelPrimero){

			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = false

		}else if(numeroIngresado > numeroMaximo){

			numeroMaximo = numeroIngresado;

		}else if(numeroIngresado < numeroMinimo){

			numeroMinimo = numeroIngresado;
		}
		respuesta=prompt("desea continuar? SI/NO");
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo
}