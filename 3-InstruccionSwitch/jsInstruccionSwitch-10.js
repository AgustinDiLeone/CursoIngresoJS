//Agustin Di Leone

function mostrar()
{
	let estacionIngresada;
	let mensaje;
	let destinoIngresado;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(estacionIngresada){
		case"Invierno":
			switch(destinoIngresado){
				case"Bariloche":
					mensaje = "Se viaja";
					break;
				case"Cataratas":
				case"Cordoba":
				case"Mar del plata":
					mensaje = "No se viaja";
					break;
				}
			break;
		case"Verano":
			switch(destinoIngresado){
				case"Bariloche":
				case"Cordoba":
					mensaje = "No se viaja";
					break;
				case"Cataratas":
				case"Mar del plata":
					mensaje = "Se viaja";
					break;
				}
			break;
		case"Otoño":
				switch(destinoIngresado){
					case"Bariloche":
					case"Cordoba":
					case"Cataratas":
					case"Mar del plata":
						mensaje = "Se viaja";
						break;
					}
			break;
		case"Primavera":
				switch(destinoIngresado){
					case"Bariloche":
						mensaje = "No se viaja";
						break;
					case"Cordoba":
					case"Cataratas":
					case"Mar del plata":
						mensaje = "Se viaja";
						break;
					}
			break;
	}

	alert(mensaje);

}