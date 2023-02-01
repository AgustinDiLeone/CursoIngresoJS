/*1.Agustin Di Leone
Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let mensaje;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;
	
    precioUno = parseInt(precioUno)
    precioDos = parseInt(precioDos)
    precioTres = parseInt(precioTres)
    mensaje = 'La suma de los productos da ' + (precioUno + precioDos + precioTres)

    alert(mensaje)
	
}
function Promedio () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let resultado
    let mensaje;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;
	
    precioUno = parseInt(precioUno)
    precioDos = parseInt(precioDos)
    precioTres = parseInt(precioTres)
    resultado = (precioUno + precioDos + precioTres)/3 
    mensaje = 'El promedio de los productos es ' + resultado

    alert(mensaje)
		
}
function PrecioFinal () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let resultado
    let mensaje;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;
	
    precioUno = parseInt(precioUno)
    precioDos = parseInt(precioDos)
    precioTres = parseInt(precioTres)
    resultado = (precioUno + precioDos + precioTres)*1.21
    mensaje = 'El precio final es ' + resultado

    alert(mensaje)


}