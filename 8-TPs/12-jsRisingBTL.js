/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let sueldoBruto;
	let legajo;
	let nacionalidad;

	edadIngresada = parseInt(prompt("Ingrese su edad"))
		while(isNaN(edadIngresada) || edadIngresada < 0 || edadIngresada > 120){

			edadIngresada = parseInt(prompt("Error: Ingrese su edad"));
		}
	sexoIngresado = prompt("Ingrese su sexo: M(masculino) o F(femenino)")
		while(!( sexoIngresado == "F" || sexoIngresado == "M")){

			sexoIngresado = prompt("Error: Ingrese su sexo: M(masculino) o F(femenino)")
		}
	estadoCivilIngresado = prompt("Ingrese su Estado civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos")
		while(isNaN(estadoCivilIngresado) || estadoCivilIngresado < 1 || estadoCivilIngresado > 4){

			estadoCivilIngresado = prompt("Error: Ingrese su> Estado civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos")
		}
	sueldoBruto = parseInt(prompt("Ingrese su sueldo bruto"))
		while(isNaN(sueldoBruto) || sueldoBruto < 8000 || sueldoBruto > 100000000){

			sueldoBruto = parseInt(prompt("Error: Ingrese su sueldo bruto"));
		}
	legajo = parseInt(prompt("Ingrese su numero de legajo"))
		while(isNaN(legajo) ||legajo < 1000 || legajo >= 10000){

			legajo = parseInt(prompt("Error: Ingrese su numero de legajo"));
		}
	nacionalidad = prompt("Ingrese su Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados")
		while(!( nacionalidad == "A" || nacionalidad == "E" || nacionalidad == "N" )){

			nacionalidad = prompt("Error: Ingrese su Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados")
		}


	 document.getElementById("txtIdEdad").value = edadIngresada
	 document.getElementById("txtIdSexo").value = sexoIngresado
	 document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado
	 document.getElementById("txtIdSueldo").value = sueldoBruto
	 document.getElementById("txtIdLegajo").value = legajo
	 document.getElementById( "txtIdNacionalidad").value = nacionalidad

}
