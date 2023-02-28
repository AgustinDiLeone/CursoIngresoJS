/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.

*/
/*
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

}*/
/* Hecho con switch
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

		switch(estadoCivil){
			case"viudo":
				if(edad > 17 ){
				contadorViudos = contadorViudos + 1;
				}
				if(sexo == "M"){
					contadorSolterosViudos = contadorSolterosViudos + 1;
				}
				break;
			case"soltero":
				if(sexo == "M"){
					contadorSolterosViudos = contadorSolterosViudos + 1;
					acumuladorSolteros = acumuladorSolteros + edad;
					contadorSolteros = contadorSolteros + 1;
		
				}
				break;
			case"casado":
				break;
		}
		if(edad > 59 && temperaturaCorporal > 38){
			adultosCalientes = adultosCalientes + 1;

		}

		respuesta = prompt('¿deseas ingresar otro pasajero? "Si"');
	}

	promedioSolteros = acumuladorSolteros / contadorSolteros;

	console.log("La persona con mas temperatura es " + PersonaCaliente);
	console.log("Hay " + contadorViudos + " personas mayores de edad viudos");
	console.log("Hay " + contadorSolterosViudos + " hombres solteros o viudos");
	console.log("Hay " + adultosCalientes + " personas de la tercera edad con mas de 38 de temperatura corporal");
	console.log("El promedio de edad de los hombres solteros es: " + promedioSolteros);

}*/

/*Parcial 2020 3 bis: /* "Mapa Mundi"
Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre America , Asia , Europa ,Africa y Oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico, millonario) en europa no hay paises pobre(validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50)
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i) que continente tiene mas habitantes.*/ 
/*
function mostrar()
{
	let continente;
	let nombre;
	let cantidadHabitantes;
	let pobreza;
	let temperaturaMinima;
	let contadorTemperaturaPar = 0;
	let contadorTemperaturaImpar = 0;
	let banderaHabitantes = true;
	let menorHabitantes;
	let nombreMenorHabitantes;
	let paisesCalientes = 0;
	let paisesFriosAmerica = 0;
	let contadorPaises = 0;
	let acumuladorHabitantes = 0;
	let promedioPaises;
	let acumuladoresHabitantesCaliente = 0;
	let promedioHabitantesCalientes;
	let banderaTemperaturaMinima = true;
	let paisTemperaturaMinima;
	let temperaturaMinimaIngresada;
	let habitantesAmerica = 0;
	let habitantesEuropa = 0;
	let habitantesAsia = 0;
	let habitantesAfrica = 0;
	let habitantesOceania = 0;
	let mensaje;

	for(let i = 0; i < 5; i++){
		continente= prompt("Ingrese el continente ( America , Asia , Europa ,Africa y Oceania)");
			while(continente != "America" && continente != "Asia" && continente != "Europa" && continente != "Africa" && continente != "Oceania"){
	
				continente = prompt("Error: Ingrese el continente ( America , Asia , Europa ,Africa y Oceania)");
			}
		nombre = prompt("Ingrese el pais ")
			while(!isNaN(nombre)){
				nombre = prompt("Error: Ingrese el pais");
			}
			contadorPaises = contadorPaises + 1;
		cantidadHabitantes = parseInt(prompt("Ingrese la cantidad de habitantes en millones (entre 1 y 7000 )"));
			while(isNaN(cantidadHabitantes) || cantidadHabitantes < 1 || cantidadHabitantes > 7000){
				cantidadHabitantes = parseInt(prompt("Error: Ingrese la cantidad de habitantes en millones (entre 1 y 7000 )"));
			}
			acumuladorHabitantes = acumuladorHabitantes + cantidadHabitantes;
		pobreza = prompt("Ingrese el nivel de pobresa entre (pobre, rico, millonario)");
      		while(pobreza != "pobre" && pobreza != "rico" && pobreza != "millonario"){

         		 pobreza = prompt("Error: Ingrese el el nivel de pobresa entre (pobre, rico, millonario)");
      		}
			while(continente == "Europa" && pobreza == "pobre"){

				pobreza = prompt("Error: Ingrese el el nivel de pobresa entre (pobre, rico, millonario)");
			}
		temperaturaMinima = parseFloat(prompt("Ingrese la temperaruta mínima que se registra en su territorio"));
			while(isNaN(temperaturaMinima) || temperaturaMinima < -50 || temperaturaMinima > 50){
				temperaturaMinima = parseFloat(prompt("Ingrese la temperaruta mínima que se registra en su territorio"));
			}
		if(temperaturaMinima % 2 == 0){
			contadorTemperaturaPar = contadorTemperaturaPar +1;
		}else if(continente == "Europa"){
			contadorTemperaturaImpar = contadorTemperaturaImpar +1;
		}
		if(banderaHabitantes || menorHabitantes < cantidadHabitantes){
			menorHabitantes = cantidadHabitantes;
			nombreMenorHabitantes = nombre;
			banderaHabitantes = false;
		}
		if(temperaturaMinima > 40){
			paisesCalientes = paisesCalientes + 1;
			acumuladoresHabitantesCaliente = acumuladoresHabitantesCaliente + cantidadHabitantes;

		}
		if(banderaTemperaturaMinima || temperaturaMinimaIngresada > temperaturaMinima){
			paisTemperaturaMinima = nombre;
			temperaturaMinimaIngresada = temperaturaMinima;

		}
		switch(continente){
			case"Africa":
				habitantesAfrica = habitantesAfrica + cantidadHabitantes;
				break;
			case"America":
				habitantesAmerica = habitantesAmerica + cantidadHabitantes;
				if( temperaturaMinima < 0){
					paisesFriosAmerica = paisesFriosAmerica + 1;
				}  
				break;
			case"Asia":
				habitantesAsia = habitantesAsia + cantidadHabitantes;
				break;
			case"Europa":
				habitantesEuropa = habitantesEuropa + cantidadHabitantes;
				break;
			case"Oceania":
				habitantesOceania = habitantesOceania + cantidadHabitantes;
				break;

		}

	}
	promedioPaises = acumuladorHabitantes / contadorPaises;
	promedioHabitantesCalientes = acumuladoresHabitantesCaliente / paisesCalientes;
	

	console.log("La cantidad de temperaturas pares son " + contadorTemperaturaPar);
	console.log("La cantidad de temperaturas impares de europa es " + contadorTemperaturaImpar);
	console.log("El nombre del pais con menos habitantes es " + nombreMenorHabitantes);
	console.log("la cantidad de paises que superan los 40 grados son " + paisesCalientes);
	console.log("la cantidad de paises de america que tienen menos de 0 grados son " + paisesFriosAmerica);
	console.log("El promedio de habitantes entre los paises ingresados es " + promedioPaises);
	console.log("el promedio de habitantes entre los paises que superan los 40 grados es " + promedioHabitantesCalientes);
	console.log("La temperatura mínima ingresada es: " + temperaturaMinimaIngresada + " y el nombre del pais que registro esta temperatura es " + paisTemperaturaMinima);
	console.log("El continente con mas habitantes es : " + mensaje)
}*/

