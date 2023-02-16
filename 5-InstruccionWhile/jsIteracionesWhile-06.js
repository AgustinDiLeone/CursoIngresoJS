//Agustin Di Leone

function mostrar()
{	
	let promedio;
	let cantidadNumeros;
	let acumulador;
	let numero;

	promedio = 0;
	acumulador = 0
	cantidadNumeros = 0;
	i = 0;

	while(i < 5){
		numero = parseInt(prompt("Ingrese un numero"));
		i = i + 1;
		while(isNaN(numero)){

			numero = parseInt(prompt("Erro: Ingrese otro numero"));
		}

		cantidadNumeros = cantidadNumeros + 1;
		acumulador = acumulador + numero;	
	}
	
	promedio = acumulador / cantidadNumeros;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN

