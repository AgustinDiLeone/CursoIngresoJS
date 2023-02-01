/*Agustin Di leone
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()/*
{
	let datoDividendo;
	let datoDivisor;
	let numDividendo;
	let numDivisor;
	let resultado;
	let mensaje;

	datoDividendo = document.getElementById("txtIdNumeroDividendo").value;
	datoDivisor = document.getElementById("txtIdNumeroDivisor").value;

	numDividendo = parseInt(datoDividendo);
	numDivisor = parseInt(datoDivisor);
	resultado = numDividendo % numDivisor;
	mensaje = 'El resto en ' + resultado;

	alert(mensaje);

}
*/
{   /*
	Ejercicio 8.bis: Ingresar dos numeros por id
	Se pide:
	mostrar por alert:
	a) La suma de los dos numeros
	b) El promedio de los numeros
	c) El modulo de los numeros (el primero en modulo del segundo)*/

	let datoUno;
	let datoDos;
	let resultadoSuma;
	let resultadoPromedio;
	let resultadoModulo

	datoUno = document.getElementById("txtIdNumeroDividendo").value;
	datoDos = document.getElementById("txtIdNumeroDivisor").value;
	
	datoUno = parseInt(datoUno);
	datoDos = parseInt(datoDos);

	resultadoSuma = datoUno+datoDos;
	resultadoPromedio = resultadoSuma/2;
	resultadoModulo = datoUno % datoDos;

	alert("La suma de los numeros da "+resultadoSuma);
	alert("El promedio de los numeros es " +resultadoPromedio);
	alert('El modulo de los numeros es ' +resultadoModulo)

}