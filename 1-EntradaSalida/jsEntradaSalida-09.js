/*Agustin Di leone
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let datoSueldo 
	let mensaje

	datoSueldo = document.getElementById("txtIdSueldo").value;
	datoSueldo = parseInt(datoSueldo);
	resultado = datoSueldo*1.10;

	document.getElementById("txtIdResultado").value = resultado;

}
