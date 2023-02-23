/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
 Tipo validad("arena";"cal";"cemento") 
Cantidad de bolsas(0-300),
Precio por bolsa (más de cero y menor a 10000 ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 15 bolsas en total tenes 10% de descuento sobre el total a pagar.
            Si compro más de 45 bolsas en total tenes 30% de descuento sobre el total a pagar.
                a)
                El importe total a pagar , bruto sin descuento y...
                b)
                el importe total a pagar con descuento(solo si corresponde)
                d)
                Informar la bolsa mas cara de Cal y la mas barata de Cemento.
                e)
                Cuantas bolsas de arena se compraron en total, y el promedio por compra.*/

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
  let acumuladorCal;
  let acumuladorCemento;
  let acumuladorArena;
 // let mensajeUno;
  let banderaCal;
  let cantidadBolsas;
  let mensaje;
  let bolsaBarata;
  let banderaCemento;
  let contadorArenaPrecio;
  let promedioArena;

  respuesta = "si";
  precioBruto = 0;
  bolsaCara = 0;
  acumuladorArena = 0;
  acumuladorCal = 0;
  acumuladorCemento = 0;
  banderaCal = true;
  banderaCemento = true;
  bolsaBarata = 0;
  contadorArenaPrecio = 0;
 



  while(respuesta == "Si" || respuesta == "SI" || respuesta == "si" ){
    producto = prompt("Ingrese un producto de construccion");
      while(producto != "arena" && producto != "cal" && producto != "cemento"){
        producto = prompt("Error: Ingrese un producto de construccion");
      }
    cantidad = parseInt(prompt("Ingrese la cantidad del producto"));
      while(isNaN(cantidad) || cantidad < 0 || cantidad > 100000){
        cantidad = parseInt(prompt("Error: Ingrese la cantidad del producto"));
      }
    precio = parseFloat(prompt("Ingrese el precio del producto"));
      while(isNaN(precio) || precio < 0 || precio > 10000){
        precio = parseFloat(prompt("Eror: Ingrese el precio del producto"));
      }
      
      switch(producto){
        case"arena":
          acumuladorArena = acumuladorArena + cantidad;
          contadorArenaPrecio = contadorArenaPrecio + precio;
          break;

        case"cal":
          acumuladorCal = acumuladorCal + cantidad;
          if(banderaCal || bolsaCara < precio){
            bolsaCara = precio;
            banderaCal = false;
    
          }
          break;

        case"cemento":
          acumuladorCemento = acumuladorCemento + cantidad;
          if(banderaCemento || bolsaBarata > precio){
            bolsaBarata = precio;
            banderaCemento = false;
          break;
          }
      }
      
      precioTotal = precio * cantidad;
      precioBruto = precioBruto + precioTotal;
      
    respuesta = prompt("deseas ingresar otro producto? SI/NO");

  }

  cantidadBolsas = acumuladorArena + acumuladorCal + acumuladorCemento;
  if(cantidadBolsas > 44){
    descuento = -30

  }else if(cantidadBolsas > 14){
    descuento = -10

  }else{
    descuento = 0
  }
  precioFinal = precioBruto + (precioBruto * descuento / 100);

  /*
  if(acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento){
    mensajeUno = "la arena"
  }else if(acumuladorCal > acumuladorCemento && acumuladorCal >= acumuladorArena){
    mensajeUno = "la cal"
  }else{
    mensajeUno = "el cemento"
  }*/
  promedioArena = contadorArenaPrecio / acumuladorArena ;

  
  if(descuento != 0){
    mensaje = "El importe total con descuento es: " + precioFinal;
  }else{
    mensaje = "No se aplico descuento";
  }
  console.log("El importe total sin descuento es: " + precioBruto);
  console.log(mensaje);
  console.log("La bolsa de cal mas cara cuesta " + bolsaCara);
  console.log("La bolsa de cemento mas barata cuesta " + bolsaBarata);
  //console.log("El tipo con mas cantidad de bolsas es " + mensajeUno);
  console.log("La cantidad de bolsas de arena que se compraron fueron: " + acumuladorArena);
  console.log("El promedio de compra es de: " + promedioArena );
  
}

