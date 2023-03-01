/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
 Tipo validad("arena";"cal";"cemento") 
Cantidad de bolsas(0-300),
Precio por bolsa (más de cero y menor a 10000 ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 15 bolsas en total tenes 10% de descuento sobre el total a pagar.
Si compro más de 45 bolsas en total tenes 30% de descuento sobre el total a pagar.
a)El importe total a pagar , bruto sin descuento y...
b)el importe total a pagar con descuento(solo si corresponde)
d)Informar la bolsa mas cara de Cal y la mas barata de Cemento.
e)Cuantas bolsas de arena se compraron en total, y el promedio por compra.*/
/*
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
*/
/*Agustin Di Leone
Recu 2020 2 bis: /* "El cine"
De un cine se deben ingresar una cantidad indeterminada 
de venta de entradas diaria, validando los
siguientes datos:
nombre de película, precio, cantidad de entradas, tipo(3D o 4D)
a)El nombre de la película más cara de tipo 4D.
b)Informar el precio total de la venta del día.
c)El nombre de la película con menos cantidad de entradas.
d)El tipo de pelicula más vista y la cantidad de entradas. 
e)El nombre de la pelicula más barata en 3D. */

function mostrar()
{
  let nombre;
  let precioProducto;
  let cantidadEntradas;
  let tipo;
  let respuesta = "Si";
  let acumulador3D = 0;
  let acumulador4D = 0;
  let pelicula4DCara;
  let nombrePeliculaCara;
  let acumuladorVentas = 0;
  let banderaCantidadEntradas = true;
  let menosEntradas;
  let peliculaMenosEntradas;
  let peliculaBarata;
  let nombrePeliculaBarata;


  while(respuesta == "Si"){
    nombre = prompt("Ingrese su nombre");
      while(!isNaN(nombre)){
          nombre = prompt("Error: Ingrese su nombre");
      }
    precioProducto = parseFloat(prompt("Ingrese el importe del producto"));
      while(isNaN(precioProducto) || precioProducto < 1 || precioProducto > 10000){

          precioProducto = parseFloat(prompt("Error: Ingrese el importe del producto"));
      }
    cantidadEntradas = parseInt(prompt("Ingrese la cantidad de entradas deseadas"));
      while(isNaN(cantidadEntradas) || cantidadEntradas < 1 || cantidadEntradas > 50){
          cantidadEntradas = parseInt(prompt("Error: Ingrese la cantidad de entradas deseadas"));
      }
    tipo = prompt('Ingrese el tipo de pelicula: "3D" o "4D"');
      while(tipo != "3D" && tipo != "4D" ){
          tipo = prompt('Error: Ingrese el tipo de pelicula: "3D" o "4D"');
      }
    switch(tipo){
      case"3D":
        if(acumulador3D == 0 || peliculaBarata > precioProducto){
          peliculaBarata = precioProducto;
          nombrePeliculaBarata = nombre;
        }
        acumulador3D = acumulador3D + cantidadEntradas;
        break;
      case"4D":
        if(acumulador4D == 0 || pelicula4DCara < precioProducto){
          pelicula4DCara = precioProducto;
          nombrePeliculaCara = nombre;
        }
        acumulador4D = acumulador4D + cantidadEntradas;
        break;

    }
    acumuladorVentas = acumuladorVentas + (cantidadEntradas * precioProducto)

    if(banderaCantidadEntradas || menosEntradas < cantidadEntradas){
      menosEntradas = cantidadEntradas;
      peliculaMenosEntradas = nombre;

    }


    respuesta = prompt("Si deseas agregar otra venta, ingrese 'Si'");
  }

  if(pelicula4DCara > 0){
    console.log("La pelicula 4D mas cara es " + nombrePeliculaCara);
  }else{
    console.log("No se ingresaron peliculas 4D");
  }
  
  console.log("El precio total de las ventas del dia es: " + acumuladorVentas);
  console.log("La pelicula con menos cantidad de entadas es " + peliculaMenosEntradas);

  if(acumulador3D > acumulador4D){
      console.log("El tipo de pelicula mas vista es la 3D con " + acumulador3D + " entradas vendidas" )
  }else if(acumulador4D > acumulador3D){
    console.log("El tipo de pelicula mas vista es la 4D con " + acumulador4D + " entradas vendidas" )
  }else{
    console.log("Se vendieron la misma cantidad de entradas 4D que de 3D");
  }

  if(acumulador3D == 0){
    console.log("No se ingresaron peliculas en 3D");
  }else{
    console.log("La pelicula mas barata del tipo 3D es " + nombrePeliculaBarata);
  }

}
