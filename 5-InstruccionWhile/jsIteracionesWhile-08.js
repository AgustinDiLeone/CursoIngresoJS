/*Agustin Di Leone
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let acumuladorSuma;
	let respuesta;
	let multiplicacionNegativos;

	acumuladorSuma = 0;
	multiplicacionNegativos = 1;
	respuesta='si';

	while(respuesta == "Si" || respuesta == "SI" || respuesta == "si" ){

		numero = parseInt(prompt("Ingrese un numero"));

		while(isNaN(numero)){
			numero = parseInt(prompt("Error: Ingrese un numero"));
		}
		if(numero > 0){

			acumuladorSuma = acumuladorSuma + numero;
		}else{

			multiplicacionNegativos = multiplicacionNegativos * numero;
		}
		
		respuesta = prompt("deseas ingresar otro numero? SI/NO");
	}
	
	document.getElementById("txtIdSuma").value = acumuladorSuma;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN