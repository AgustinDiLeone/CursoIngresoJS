function mostrar()
{
	let x;
	let mensaje;

	x = Math.floor(Math.random()*10)+1;
	if (x >= 9){

		mensaje = "EXCELENTE"
	}else{

		if(x >= 4){

			mensaje = "APROBÓ"
		}else{

			mensaje = "Vamos, la proxima se puede"
		}

	}
	
	alert(x + " " + mensaje);
	
}