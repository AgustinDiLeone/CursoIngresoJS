/*Agustin Di leone
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()/*
{ 
	let importe;
	let resultado;

	importe  =document.getElementById("txtIdImporte").value;
	resultado = importe-(importe*25/100);

	document.getElementById("txtIdResultado").value = resultado;
	
}*/

/*Ejercicio 10.bis: Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
pedirle al usuario un % de descuento y mostrar el importe en el cuadro de texto "RESULTADO"*/
{
	let importe;
	let resultado;
	let descuento;

	importe  =document.getElementById("txtIdImporte").value;
	descuento = prompt ("¿Cuánto descuento aplicas?");
	importe = parseInt(importe)
	descuento = parseInt(descuento)

	resultado = importe-(importe*descuento/100)

	document.getElementById("txtIdResultado").value = resultado;

}
