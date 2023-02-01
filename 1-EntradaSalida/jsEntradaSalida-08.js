/*Agustin Di leone
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
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

	/*pueden obviarese las variables numDividiendo y numDivisor
	y conservar datoDivisor y datoDividiendo ya que al hacer parseInt
	se cambia  directamente su valor*/
	
}
