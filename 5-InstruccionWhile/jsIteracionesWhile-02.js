/*Agustin Di Leone
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
/*
function mostrar()
{
	let contador;

	contador = 10;

	while(contador > 0){
		
		alert(contador);
		contador = contador - 1;
	}

	alert("llegaste a 1");

}//FIN DE LA FUNCIÓN*/

// while 2 bis: Ingresar 5 números, y determinar la cantidad de números que son mayores que 10 
//y menores 20 (inclusive en ambos casos)
/*
function mostrar()
{
	let numero;
	let cantidad;
	let i;

	i = 0; 
	cantidad = 0;

	while(i < 5){
		numero = parseFloat(prompt("Ingrese un numero"));
		i = i + 1;

		while(isNaN(numero)){
			numero = parseFloat(prompt("Error: Ingrese un numero valido"))
		}
		if(numero >= 10 && numero <= 20){
		cantidad = cantidad + 1;
		}
	}
		
	console.log("Ingresaste " + cantidad + " de numeros entre el 10 y el 20 ")
}*/


/*While 2 bis bis: Ingresar numeros hasta que el usuario quiera. 
Determinar la cantidad de números que son mayores que 10 
y menores 20 (inclusive en ambos casos). 
También el promedio de los números que cumplen la condición anterior.*/

function mostrar()
{
	let numero;
	let respuesta;
	let promedio;
	let promedioFinal;

	cantidad = 0;
	respuesta = "si";
	promedio = 0;

	while(respuesta == "Si" || respuesta == "SI" || respuesta == "si" ){

		numero = parseInt(prompt("Ingrese un numero"));

		while(isNaN(numero)){
			numero = parseInt(prompt("Error: Ingrese un numero"));
		}
		if(numero >= 10 && numero <= 20){
			cantidad = cantidad + 1;
			promedio = promedio + numero
			
		}
		
		promedioFinal = promedio / cantidad
		respuesta = prompt("deseas ingresar otro numero? SI/NO");
	}

	console.log("Ingresaste " + cantidad + " de numeros entre el 10 y el 20 ");
	console.log("El promedio de los numeros entre el 10 y 20 es: " + promedioFinal);
		
}