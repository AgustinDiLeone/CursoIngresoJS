function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado){
		case"Bariloche":
			mensaje = "Se encuentra al Sur de nuestro pais";
			break;
		case"Cataratas":
			mensaje = "Se encuentra al Este de nuestro pais";
			break;
		case"Mar del plata":
			mensaje = "Se encuentra al Este de nuestro pais";
			break;
		case"Ushuaia":
			mensaje = "Se encuentra al Sur de nuestro pais";
			break;

	}


	alert(mensaje);

}//FIN DE LA FUNCIÓN