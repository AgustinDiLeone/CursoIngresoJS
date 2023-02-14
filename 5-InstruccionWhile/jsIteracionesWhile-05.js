/*Agustin Di Leone
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;

	sexoIngresado = prompt("ingrese f ó m .");
	
	while(!(sexoIngresado == "f" || sexoIngresado == "m")){

		alert("Ingresaste un sexo incorrecto");
		sexoIngresado = prompt("ingrese f ó m .");
	}
	
	mensaje = "Ingresaste el sexo " + sexoIngresado;
	document.getElementById("txtIdSexo").value = mensaje; 

}//FIN DE LA FUNCIÓN