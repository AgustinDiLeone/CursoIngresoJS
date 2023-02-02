/*2. Agustin Di Leone	
Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let alambreLargo;
    let alambreAncho;
    let resultado;
    let mensaje;

    alambreLargo = document.getElementById("txtIdLargo").value;
    alambreAncho = document.getElementById("txtIdAncho").value;
    alambreLargo = parseFloat(alambreLargo);
    alambreAncho = parseFloat(alambreAncho);
    resultado = ((alambreLargo*2)+(alambreAncho*2))*3;

    console.log("Se necesitara " +resultado+ " metros de alambre ");
   
}

function Circulo () 
{ 
    let alambreRadio;
    let resultado;
    let mensaje;

    alambreRadio = document.getElementById("txtIdRadio").value;
    alambreRadio = parseFloat(alambreRadio);
    resultado = 3.14*2*alambreRadio;

    console.log("Se necesitaran " + resultado + " metros de alambre");
}
function Materiales () 
{
    let alambreLargo;
    let alambreAncho;
    let superficie;
    let resultadoCemento;
    let resultadoCal
    let mensaje;

    terrenoLargo = document.getElementById("txtIdLargo").value;
    terrenoAncho = document.getElementById("txtIdAncho").value;
    terrenoLargo = parseFloat(terrenoLargo);
    terrenoAncho = parseFloat(terrenoAncho);
    superficie = terrenoAncho*terrenoLargo;
    resultadoCemento = superficie*2;
    resultadoCal = superficie*3;

    console.log("Se necesitaran " +resultadoCemento+ " bolsas de cemento y " +resultadoCal +" bolsas de cal");
	
}