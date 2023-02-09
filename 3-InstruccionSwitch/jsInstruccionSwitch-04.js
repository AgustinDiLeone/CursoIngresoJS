//Agustin Di Leone

function mostrar()
{
	let mesDelAño;
	let mensaje;

	mesDelAño = document.getElementById("txtIdMes").value; 

	switch(mesDelAño){
		case"Abril":
		case"Junio":
		case"Septiembre":
		case"Noviembre":
			mensaje = "Tiene 30 dias";
			break;
		case"Febrero":
			mensaje = "Tiene 28 dias";
			break;
		default:
			mensaje = "Tiene 31 dias";
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN