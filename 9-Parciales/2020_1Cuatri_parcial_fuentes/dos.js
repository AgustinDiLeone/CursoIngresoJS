/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/

function mostrar()
{
  let producto;
  let cantidad;
  let precio;
  let descuento;
  let precioBruto;
  let precioFinal;
  let precioTotal;
  let bolsaCara;
  let productoCaro;
  let acumuladorCal;
  let acumuladorCemento;
  let acumuladorArena;
  let mensajeUno;
  let bandera;
  let cantidadBolsas;
  let mensaje;

  respuesta = "si";
  precioBruto = 0;
  bolsaCara = 0;
  acumuladorArena = 0;
  acumuladorCal = 0;
  acumuladorCemento = 0;
  bandera = true;



  while(respuesta == "Si" || respuesta == "SI" || respuesta == "si" ){
    producto = prompt("Ingrese un producto de construccion");
      while(producto != "arena" && producto != "cal" && producto != "cemento"){
        producto = prompt("Error: Ingrese un producto de construccion");
      }
    cantidad = parseInt(prompt("Ingrese la cantidad del producto"));
      while(isNaN(cantidad) || cantidad < 1 || cantidad > 100000){
        cantidad = parseInt(prompt("Error: Ingrese la cantidad del producto"));
      }
    precio = parseFloat(prompt("Ingrese el precio del producto"));
      while(isNaN(precio)|| precio < 1 || precio > 10000000){
        precio = parseFloat(prompt("Eror: Ingrese el precio del producto"));
      }
      
      switch(producto){
        case"arena":
          acumuladorArena = acumuladorArena + cantidad;
          break;

        case"cal":
          acumuladorCal = acumuladorCal + cantidad;
          break;

        case"cemento":
          acumuladorCemento = acumuladorCemento + cantidad;
          break;

      }
      if(bandera || bolsaCara < precio){

        bolsaCara = precio;
        productoCaro = producto;
        bandera = false;

      }
      precioTotal = precio * cantidad;
      precioBruto = precioBruto + precioTotal;
      
    respuesta = prompt("deseas ingresar otro producto? SI/NO");

  }

  cantidadBolsas = acumuladorArena + acumuladorCal + acumuladorCemento;
  if(cantidadBolsas > 29){
    descuento = -25

  }else if(cantidadBolsas > 9){
    descuento = -15

  }else{
    descuento = 0
  }
  
  precioFinal = precioBruto + (precioBruto * descuento / 100);

  if(acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento){
    mensajeUno = "la arena"
  }else if(acumuladorCal > acumuladorCemento && acumuladorCal >= acumuladorArena){
    mensajeUno = "la cal"
  }else{
    mensajeUno = "el cemento"
  }

  

  if(descuento != 0){
    mensaje = "El importe total con descuento es: " + precioFinal;
  }else{
    mensaje = "No se aplico descuento";
  }
  console.log("El importe total sin descuento es: " + precioBruto);
  console.log(mensaje)
  console.log("El tipo con mas cantidad de bolsas es " + mensajeUno);
  console.log("El tipo mas caro es: " + productoCaro);
  
}

