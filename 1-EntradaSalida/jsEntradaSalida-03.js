/* Agustin Di leone
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombreIngresado; //declaracion de variable
	let mensaje;
	//nombreIngresado = txtIdNombre.value; SOLO PARA GOOGLE

	//                 HTML      trae el elemento del ID   el valor
	nombreIngresado = document.getElementById("txtIdNombre").value; 

	mensaje = "usted ha ingresado el nombre: " + nombreIngresado;

	alert(mensaje);

}


