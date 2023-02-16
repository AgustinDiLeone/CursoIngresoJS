/*Agustin Di Leone
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
/*
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
}*/

/*
While 9 bis: Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
El menor de los pares y el mayor de los negativos ...(solo si hay)*/

function mostrar()
{
	let numero;
	let respuesta;
	let bandera;
	let maximo;
	let minimo;
	let banderaPar;
	let menorPar;
	let banderaNegativo; 
	let maximoNegativo;

	respuesta='si';
	bandera = true;
	banderaPar = true;
	banderaNegativo = true;

	while(respuesta == "Si" || respuesta == "SI" || respuesta == "si" ){

		numero = parseInt(prompt("Ingrese un numero"));

		while(isNaN(numero)){
			numero = parseInt(prompt("Error: Ingrese un numero"));
		}
		if(bandera){

			maximo = numero;
			minimo = numero;
			bandera = false

		}else if(numero > maximo){

			maximo = numero;

		}else if(numero < minimo){

			minimo = numero;
		}
		if(numero % 2 == 0){
			if(banderaPar || menorPar > numero){
				menorPar = numero;
				banderaPar = false;
			}
		}
		if(numero < 0){
			if(banderaNegativo || maximoNegativo < numero){
				maximoNegativo = numero;
				banderaNegativo = false;
			}
		}
		
		respuesta = prompt("deseas ingresar otro numero? SI/NO");
	}

	document.write("El numero maximo es: " + maximo + "<br>");
	document.write("El numero minimo es: " + minimo + "<br>");
	document.write("El menor numero par es: "+ menorPar + "<br>");
	document.write("El maximo numero negativo es: " + maximoNegativo);
}