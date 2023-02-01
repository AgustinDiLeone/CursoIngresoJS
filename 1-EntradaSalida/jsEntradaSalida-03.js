/* Agustin Di leone
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/

function mostrar()

/*
{
	let nombreIngresado; //declaracion de variable
	let mensaje;
	//nombreIngresado = txtIdNombre.value; SOLO PARA GOOGLE

	//                 HTML      trae el elemento del ID   el valor
	nombreIngresado = document.getElementById("txtIdNombre").value; 

	mensaje = "usted ha ingresado el nombre: " + nombreIngresado;

	alert(mensaje);

}
*/
/*Ejercicio 3.bis: Ingresar descripción (por prompt) y precio de un producto (por id).
El programa deberá mostrar por alert la descripción del producto 
junto al precio aumentado en un 30%. 
Pueden utilizar el html del ejercicio 3 para resolverlo. */
{
	let descripcion;
	let precio;
	let precioFinal;

	descripcion = prompt("Describa el producto");
	precio = document.getElementById("txtIdNombre").value; 
	precio = parseInt(precio);
	precioFinal= (precio+2);

	alert (descripcion+ " y cuesta " + precioFinal);

}


