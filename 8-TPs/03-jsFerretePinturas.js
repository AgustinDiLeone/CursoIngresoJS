/*3. Agustin Di Leone
Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperatura;
    let resultado;
    let mensaje;

    temperatura = document.getElementById("txtIdTemperatura").value;
    temperatura = parseFloat(temperatura);
    resultado = (temperatura-32)*(5/9);
    mensaje= temperatura+ " Fahrenheit son "+resultado+ (" Centígrados");

    console.log (mensaje);
}

function CentigradosFahrenheit () 
{  
    let temperatura;
    let resultado;
    let mensaje;

    temperatura = document.getElementById("txtIdTemperatura").value;
    temperatura = parseFloat(temperatura);
    resultado = (temperatura*1.8)+32;
    mensaje= temperatura+ " Centígrados son "+resultado+ " Fahrenheit";

    console.log (mensaje);
	
}
