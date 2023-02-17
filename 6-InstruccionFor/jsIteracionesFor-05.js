/*
function mostrar()
{
	let repetir;

	for(let i = 0; i < 1000; i++){

		repetir = prompt("para cortar ingrese el numero '9'");
		if(repetir == "9"){
			 break;
		}
	}


}//FIN DE LA FUNCIÓN*/

/*For 5 bis, Realizar el programa que permita el ingreso de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m” o "b") de 7 alumnos, informar por console.log: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
d) La cantidad de alumnos desaprobados (nota < 4)*/

	function mostrar()
	{
		let notas;
		let sexo;
		let acumulador;
		let cantidad;
		let promedio;
		let banderaMenor;
		let notaBaja;
		let sexoBajo;
		let contadorMasculino;
		let cantidadDesaprobados;

		acumulador = 0;
		cantidad = 0;
		banderaMenor = true;
		contadorMasculino = 0;
		cantidadDesaprobados = 0;


		for(let i = 0; i < 7; i++){
			notas = parseInt(prompt("Ingrese su nota"));
				while(notas < 0 || notas > 10){

					notas = parseInt(prompt("Error: Ingrese su nota"));
				}
			sexo = prompt('Ingrese su sexo “f” o “m” o "b"');
				while(!(sexo == "f" || sexo == "m" || sexo == "b")){

					sexo = prompt('Error: Ingrese su sexo “f” o “m” o "b"')
				}
			acumulador = acumulador + notas;
			cantidad = cantidad + 1;
			promedio = acumulador / cantidad;

			if(banderaMenor){
				notaBaja = notas;
				sexoBajo = sexo;
				banderaMenor = false;

			}else if(notas < notaBaja){

				notaBaja = notas;
				sexoBajo = sexo;
			}
			if(sexo == "m" && notas >= 6){

				contadorMasculino = contadorMasculino + 1;
			}
			if(notas < 4){

				cantidadDesaprobados = cantidadDesaprobados + 1;
			}

		}

	
		console.log("El promedio de las notas es: " + promedio);
		console.log("La nota mas baja es un: " + notaBaja + " y esta nota es de un: " + sexoBajo);
		console.log("La cantidad de alumnos masculinos promocionados son:" + contadorMasculino)
		console.log("La cantidad de desaprobados fue: " + cantidadDesaprobados)
	}