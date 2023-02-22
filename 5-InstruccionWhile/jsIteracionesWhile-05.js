/*Agustin Di Leone
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;

	sexoIngresado = prompt("ingrese 'f' para femenino ó 'm' para masculino .");
	
	while(!isNaN(sexoIngresado) || !(sexoIngresado == "f" || sexoIngresado == "m" || sexoIngresado == "F" || sexoIngresado == "M")){

		sexoIngresado = prompt("Error: ingrese 'f' para femenino ó 'm' para masculino .");
	}
	
	mensaje = "Ingresaste el sexo " + sexoIngresado;
	document.getElementById("txtIdSexo").value = mensaje; 

}//FIN DE LA FUNCIÓN