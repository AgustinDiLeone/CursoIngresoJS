/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.

*/

function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let respuesta;

	let banderaTemperatura;
	let temperaturaMayor;
	let PersonaCaliente;

	let contadorViudos;

	let contadorSolterosViudos;

	let adultosCalientes;

	let acumuladorSolteros;
	let contadorSolteros;
	let promedioSolteros;

	banderaTemperatura = true;
	contadorViudos = 0;
	contadorSolterosViudos = 0;
	adultosCalientes = 0;
	contadorSolteros = 0;
	acumuladorSolteros = 0;
	respuesta = "Si"

	while(respuesta == "Si"){
		nombre = prompt("Ingrese su nombre");
			while(!isNaN(nombre)){
				nombre = prompt("Error: Ingrese su nombre");
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
			PersonaCaliente = nombre;
			banderaTemperatura = false;
		}
		if(edad > 17 && estadoCivil == "viudo"){
			contadorViudos = contadorViudos + 1;

		}
		if(sexo == "M" && (estadoCivil == "soltero" || estadoCivil == "viudo" )){
			contadorSolterosViudos = contadorSolterosViudos + 1;

		}
		if(edad > 59 && temperaturaCorporal > 38){
			adultosCalientes = adultosCalientes + 1;

		}if(sexo == "M" && estadoCivil == "soltero"){
			acumuladorSolteros = acumuladorSolteros + edad;
			contadorSolteros = contadorSolteros + 1;

		}

		promedioSolteros = acumuladorSolteros / contadorSolteros;

		respuesta = prompt('¿deseas ingresar otro pasajero? "Si"');
	}

	console.log("La persona con mas temperatura es " + PersonaCaliente);
	console.log("Hay " + contadorViudos + " personas mayores de edad viudos");
	console.log("Hay " + contadorSolterosViudos + " hombres solteros o viudos");
	console.log("Hay " + adultosCalientes + " personas de la tercera edad con mas de 38 de temperatura corporal");
	console.log("El promedio de edad de los hombres solteros es: " + promedioSolteros);

}
