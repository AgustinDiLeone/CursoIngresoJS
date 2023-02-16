/*Agustin Di Leone
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
/*function mostrar()
{
	let numero;

	numero = 1;

	while(numero <= 10){

		alert("El numero es: " + numero);
		numero = numero + 1;

	}

	alert("llegaste a 10");
}//FIN DE LA FUNCIÓN */

//While 1 bis- edad y nombre , informar el nombre de la persona mas vieja y la mas joven
function mostrar()
{
	let edad;
	let nombre;
	let banderaDelPrimero;
	let respuesta;
	let edadMaximo;
	let edadMinima;
	let nombreMayor;
	let nombreMenor;
	let mensajeFinal;
	
	banderaDelPrimero = true
	respuesta='si';

	while(respuesta == "Si" || respuesta == "SI" || respuesta == "si"){

		nombre = prompt("Ingrese su nombre")
		edad = parseInt(prompt("Escriba su edad"))

		while(isNaN(edad) || edad < 0 || edad > 123){
			edad = parseInt(prompt("Error: Escriba su edad "));
		}
		while(!isNaN(nombre)){

			nombre = prompt("Error: Escriba su nombre ")
		}

		if(banderaDelPrimero){

			edadMaximo = edad;
			edadMinima = edad;
			nombreMayor = nombre
			nombreMenor = nombre
			banderaDelPrimero = false
		}
		else if(edad < edadMaximo){
			nombreMayor = nombre
			edadMaximo = edad

		}else if(edad < edadMinima){

			edadMinima = edad
			nombreMenor = nombre
		}

		respuesta = prompt("desea continuar? SI/NO");

	}

	document.write("La persona mayor se llama " + nombreMayor + " y tiene " + edadMaximo + " años" + "<br>");
	document.write("La persona menor se llama " + nombreMenor + " y tiene " + edadMinima + " Años")

}