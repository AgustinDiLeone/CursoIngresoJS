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
  let precioTotalFinal;
  let precioConjunto;
  let cantidadMayor;
  let bolsaCara;
  let productoCaro;
  let productoMayor;

  respuesta = "si";
  precioBruto = 0;
  precioTotalFinal = 0;
  cantidadMayor = 0;
  bolsaCara = 0;


  while(respuesta == "Si" || respuesta == "SI" || respuesta == "si" ){
    producto = prompt("Ingrese un producto de construccion");
      while(!(producto == "arena" || producto == "cal" || producto == "cemento")){
        producto = prompt("Error: Ingrese un producto de construccion");
      }
    cantidad = parseInt(prompt("Ingrese la cantidad del producto"));
      while(isNaN(cantidad)){
        cantidad = parseInt(prompt("Error: Ingrese la cantidad del producto"));
      }
    precio = parseFloat(prompt("Ingrese el precio del producto"));
      while(isNaN(cantidad)){
        precio = parseFloat(prompt("Eror: Ingrese el precio del producto"));
      }
      if(cantidad > 30){
        descuento = 25

      }else if(cantidad > 10){
          descuento = 15

      }else{
        descuento = 0
      }
      precioConjunto = precio * cantidad;
      precioBruto = precioBruto + precioConjunto;
      precioFinal = precioConjunto - (precioConjunto * descuento / 100);
      precioTotalFinal = precioTotalFinal + precioFinal;

      if(cantidad > cantidadMayor){

        cantidadMayor = cantidad;
        productoMayor = producto;

      }
      if(bolsaCara < precio){

        bolsaCara = precio;
        productoCaro = producto;

      }


      respuesta = prompt("deseas ingresar otro producto? SI/NO");
  }

  console.log("El importe total sin descuento es: " + precioBruto);
  console.log("El importe total con descuento es: " + precioTotalFinal);
  console.log("El tipo con mas cantidad de bolsas es: " + productoMayor);
  console.log("El tipo mas caro es: " + productoCaro);

}
