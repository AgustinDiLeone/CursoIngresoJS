function mostrar()
{
	let contadorPar;
	let numeroIngresado;

	contadorPar = 0;

	numeroIngresado = parseInt(prompt("Ingresa un numero"));
		while(isNaN(numeroIngresado)){
			numeroIngresado = parseInt(prompt("Error: Ingresa un numero"));

		}

	for(let i = 1; i < numeroIngresado; i++){
				
		if(i % 2  == 0){

			console.log("Es un nuemro par: " + i);
			contadorPar = contadorPar + 1;

		}

	}

	console.log("Hay: " + contadorPar + " numeros pares")

}

