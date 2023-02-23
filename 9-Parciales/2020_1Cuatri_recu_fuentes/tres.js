/*Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.*/

function mostrar()
{
	let nombre;
	let nacionalidad;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let respuesta;

	let banderaTemperatura;
	let temperaturaMayor;
	let personaNacionalidadCaliente;

	let contadorSolterosMayores;

	let contadorSolterasViudas;

	let adultosCalientes;

	let acumuladorCasadas;
	let contadorCasadas;
	let promedioCasadas;

	banderaTemperatura = true;
	contadorSolterosMayores = 0;
	contadorSolterasViudas = 0;
	adultosCalientes = 0;
	respuesta = "Si"

	while(respuesta == "Si"){
		nombre = prompt("Ingrese su nombre");
			while(!isNaN(nombre)){
				nombre = prompt("Error: Ingrese su nombre");
			}
		nacionalidad = prompt("Ingrese su nacionalidad");
			while(!isNaN(nacionalidad)){
				nacionalidad = prompt("Error: Ingrese su nacionalidad");
			}
		edad = parseInt(prompt("Ingrese su edad"));
			while(isNaN(edad) || edad < 1 || edad > 123){
				edad = parseInt(prompt("Error: Ingrese su edad"));
			}
		sexo = prompt('Ingrese su sexo: "F"para femenino o "M" para masculino');
			while(sexo != "F" && sexo != "M"){
				sexo = prompt('Error: Ingrese su sexo: "F"para femenino o "M" para masculino');
			}
		estadoCivil = prompt('Ingrese su estado civil: "soltero", "casado" o "viudo"');
			while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo"){
				estadoCivil = prompt('Error: Ingrese su estado civil: "soltero", "casado" o "viudo"');
			}
		temperaturaCorporal = parseFloat(prompt("Ingrese su temperatura corporal"));
			while(isNaN(temperaturaCorporal) || temperaturaCorporal < 30 || temperaturaCorporal > 45){
				temperaturaCorporal = parseFloat(prompt("Error: Ingrese su temperatura corporal"));
			}

		if(banderaTemperatura || temperaturaMayor < temperaturaCorporal){
			temperaturaMayor = temperaturaCorporal
			personaNacionalidadCaliente = nacionalidad;
			banderaTemperatura = false;
		}

		switch(estadoCivil){
			case"viudo":
				if(sexo == "F"){
					contadorSolterasViudas = contadorSolterasViudas + 1;
				}
				break;
			case"soltero":
				if(sexo == "F"){
					contadorSolterasViudas = contadorSolterasViudas + 1;
				}
				if(edad > 17 ){
					contadorSolterosMayores = contadorSolterosMayores + 1;
					}
				break;
			case"casado":
				if(sexo == "F"){
					acumuladorCasadas = acumuladorCasadas + edad;
					contadorCasadas = contadorCasadas + 1;
				}
				break;
		}
		if(edad > 59 && temperaturaCorporal > 38){
			adultosCalientes = adultosCalientes + 1;

		}

		respuesta = prompt('¿deseas ingresar otro pasajero? "Si"');
	}

	promedioCasadas = acumuladorCasadas / contadorCasadas;

	console.log("La persona con mas temperatura es de nacionalidad " + personaNacionalidadCaliente);
	console.log("Hay " + contadorSolterosMayores + " personas mayores de edad solteros");
	console.log("Hay " + contadorSolterasViudas + " mujeres solteras o viuds");
	console.log("Hay " + adultosCalientes + " personas de la tercera edad con mas de 38 de temperatura corporal");
	console.log("El promedio de edad de los hombres solteros es: " + promedioCasadas);
}
