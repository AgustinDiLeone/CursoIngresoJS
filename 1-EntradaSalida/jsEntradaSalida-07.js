/*Agustin Di leone
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
	let numUno;
	let numDos;
	let datoUno;
	let datoDos;
	let resultado;
	let mensaje;

	datoUno = document.getElementById("txtIdNumeroUno").value;
	datoDos = document.getElementById("txtIdNumeroDos").value;

	numUno = parseInt(datoUno);
	numDos = parseInt(datoDos);
	resultado = numUno + numDos;
	mensaje = 'El resultado es ' + resultado;

	alert( mensaje);	
}

function restar()
{
	let numUno;
	let numDos;
	let datoUno;
	let datoDos;
	let resultado;
	let mensaje;

	datoUno = document.getElementById("txtIdNumeroUno").value;
	datoDos = document.getElementById("txtIdNumeroDos").value;

	numUno = parseInt(datoUno);
	numDos = parseInt(datoDos);
	resultado = numUno - numDos;
	mensaje = 'El resultado es ' + resultado;
	
	alert( mensaje);
	
}

function multiplicar()
{ 
	let numUno;
	let numDos;
	let datoUno;
	let datoDos;
	let resultado;
	let mensaje;

	datoUno = document.getElementById("txtIdNumeroUno").value;
	datoDos = document.getElementById("txtIdNumeroDos").value;

	numUno = parseInt(datoUno);
	numDos = parseInt(datoDos);
	resultado = numUno * numDos;
	mensaje = 'El resultado es ' + resultado;
	
	alert( mensaje);
	
}

function dividir()
{
	let numUno;
	let numDos;
	let datoUno;
	let datoDos;
	let resultado;
	let mensaje;

	datoUno = document.getElementById("txtIdNumeroUno").value;
	datoDos = document.getElementById("txtIdNumeroDos").value;

	numUno = parseInt(datoUno);
	numDos = parseInt(datoDos);
	resultado = numUno / numDos;
	mensaje = 'El resultado es ' + resultado;
	
	alert( mensaje);
	
}

