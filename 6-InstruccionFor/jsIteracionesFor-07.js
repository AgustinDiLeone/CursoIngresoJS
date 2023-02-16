function mostrar()
{
	let contadorDivisores;
	let numeroIngresado;

	contadorDivisores = 0;

	numeroIngresado = parseInt(prompt("Ingresa un numero"));
		while(isNaN(numeroIngresado)){
			numeroIngresado = parseInt(prompt("Error: Ingresa un numero"));

		}

	for(let i = 0; i < numeroIngresado; i++){
				
		if(numeroIngresado % i == 0){

			console.log("Los numeros divisores son: " + i);
			contadorDivisores = contadorDivisores + 1;

		}

	}

	console.log("Hay: " + contadorDivisores + " numeros divisores")

}//FIN DE LA FUNCIÓN