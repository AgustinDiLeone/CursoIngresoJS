/*Agustin Di leone
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let datoSueldo;
	let mensaje;
	let porcentaje;
	let porcentajeAplicado;

	porcentaje = 10;
	datoSueldo = document.getElementById("txtIdSueldo").value;
	datoSueldo = parseInt(datoSueldo);
	porcentajeAplicado = datoSueldo*porcentaje/100;
	resultado = datoSueldo + porcentajeAplicado;

	document.getElementById("txtIdResultado").value = resultado;

}
