/*Agustin Di leone
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numUno;
	let numDos;
	let datoUno;
	let datoDos; 
	let mensaje;

	datoUno = document.getElementById("txtIdNumeroUno").value;
	datoDos = document.getElementById("txtIdNumeroDos").value;

	//Transformamos el dato ingresado en un numero
	numUno = parseInt(datoUno);
	numDos = parseInt(datoDos);

	/*Los parentesis para marcar jerarquias 
	porque primero se tiene que realizar la suma */
	mensaje = 'La suma es ' + (numUno + numDos);

	/*Otra opcion es generar una nueva variable que sea la suma
	suma = (numUno + numDos)*/

	alert(mensaje);
	
}

