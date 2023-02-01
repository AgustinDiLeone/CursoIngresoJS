/*Agustin Di leone
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//declaro variable
	let datoIngresado 
	let cajita
	
	//pido el dato
	datoIngresado = prompt ("Ingresar datos") 

	cajita = datoIngresado

	//Acceder a la cajita                             Dentro de la caja
	document.getElementById("txtIdNombre").value = cajita

  // ENTRADA mostrarDato = document.getElementById("txtIdNombre").value;
  // SALIDA document.getElementById("txtIdNombre").value; = mostrarDato 


}

