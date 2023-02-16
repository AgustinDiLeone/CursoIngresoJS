/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numeroIngresado;
	let sumaPositivos;
	let sumaNegativos;
	let contadorPositivos;
	let contadorNegativos;
	let contadorCeros;
	let contadorPares;
	let promedioNegativos;
	let promedioPositivos;
	let diferenciaPositivosNegativos;

	contadorCeros = 0;
	contadorNegativos = 0;
	contadorPares = 0;
	sumaNegativos = 0;
	sumaPositivos = 0;
	contadorPositivos = 0;

	respuesta="si";

	while(respuesta == "Si" || respuesta == "SI" || respuesta == "si" ){

		numeroIngresado = parseInt(prompt("Ingrese un numero"));

		while(isNaN(numeroIngresado)){
			numeroIngresado = parseInt(prompt("Error: Ingrese un numero"));
		}

		if(numeroIngresado > 0){

			sumaPositivos = sumaPositivos + numeroIngresado;
			contadorPositivos = contadorPositivos + 1;

		}else if(numeroIngresado < 0){

			sumaNegativos = sumaNegativos + numeroIngresado;
			contadorNegativos = contadorNegativos + 1;

		}else{

			contadorCeros = contadorCeros + 1;
		}
		if(numeroIngresado % 2 == 0){

			contadorPares = contadorPares +1
		}
			
		promedioPositivos = sumaPositivos / contadorPositivos;
		promedioNegativos =  sumaNegativos / contadorNegativos;
		diferenciaPositivosNegativos = sumaPositivos - sumaNegativos;

		if(isNaN(promedioNegativos)){

			promedioNegativos = 0;
		}
		if(isNaN(promedioPositivos)){
			promedioPositivos = 0;
		}

		respuesta = prompt("deseas ingresar otro numero? SI/NO");
	
	}//fin del while

	document.write("la suma de negativos es :" + sumaNegativos + "<br>");
	document.write("la suma de positivos es :" + sumaPositivos + "<br>");
	document.write("la cantidad de positivos es :" + contadorPositivos + "<br>");
	document.write("la cantidad de negativos es :" + contadorNegativos + "<br>");
	document.write("la cantidad de ceros es :" + contadorCeros + "<br>");
	document.write("la cantidad de los pares es :" + contadorPares + "<br>");
	document.write("el promedio de positivos es :" + promedioPositivos + "<br>");
	document.write("el promedio de negativos es :" + promedioNegativos + "<br>");
	document.write("la diferencia entre poritivos y negativos es: " + diferenciaPositivosNegativos + "<br>");

}//FIN DE LA FUNCIÓN