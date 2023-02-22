function mostrar()
{
	let contadorDivisores;
	let numeroIngresado;

	contadorDivisores = 0;

	numeroIngresado = parseInt(prompt("Ingresa un numero"));
		while(isNaN(numeroIngresado)){
			numeroIngresado = parseInt(prompt("Error: Ingresa un numero"));

		}
        
	for(let i = 1; i < numeroIngresado; i++){
				
		if(numeroIngresado % i == 0){

		    contadorDivisores = contadorDivisores + 1;

		}
        if(contadorDivisores == 2){

		    console.log(numeroIngresado + " es primo");

		}else{

            console.log(numeroIngresado + " no es primo");
        }

	}

}//FIN DE LA FUNCIÓN