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
  
}*/
/*Parcial 2020 2 bis: /"La veterinaria" pedir el ingreso de 10 mascotas
validar
tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
raza: si es perro (pastor, toy, callejero) y 
si gato (siamés, turco, Peterbald , generico) 
y si es de tipo "otros" o pájaro , pedir solo un texto
Edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100 , para pájaro 1 de 50
nombre (no se permite solo numero)
mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza*/

function mostrar()
{

  let tipoMascota;
  let razaMascota;
  let edadMascota;
  let nombreMascota;
  let banderaNombregato;
  let banderaNombreotros;
  let banderaNombrePajaro;
  let banderaNombrePerro;
  let perroViejo;
  let gatoViejo;
  let pajaroViejo;
  let otroViejo;
  let perroEdadViejo;
  let gatoEdadViejo;
  let pajaroEdadViejo;
  let otroEdadViejo;
  let contadorSiames = 0;
  let contadorTurco = 0;
  let contadorPeterbald = 0;
  let contadorGenerico = 0;
  let acumuladorSiames = 0;
  let acumuladorTurco = 0;
  let acumuladorPeterbald = 0;
  let acumuladorGenerico = 0;
  let promedio;
  let mensaje;

  banderaNombrePerro = true;
  banderaNombregato = true;
  banderaNombrePajaro = true;
  banderaNombreotros = true;

    
  
  for(let i = 0; i < 10; i++){

    nombreMascota = prompt("Ingrese el nombre de su mascota ")
      while(!isNaN(nombreMascota)){
        nombreMascota = prompt("Error: Ingrese el nombre de su mascota");
      }
    tipoMascota = prompt("Ingrese el tipo de mascota( gato , perro , pájaro y otros)");
      while(tipoMascota != "gato" && tipoMascota != "perro" && tipoMascota != "pajaro" && tipoMascota != "otros"){

          tipoMascota = prompt("Error: Ingrese el tipo de mascota( gato , perro , pájaro y otros)");
      }
    switch(tipoMascota){
      case"perro":
        razaMascota = prompt("Ingrese su raza (pastor, toy, callejero) ");
          while(razaMascota != "pastor" && razaMascota != "toy" && razaMascota != "callejero"){

          razaMascota = prompt("Error: Ingrese su raza (pastor, toy, callejero) ");
        }
        edadMascota = parseInt(prompt("Ingrese la edad de su mascota"));
          while(isNaN(edadMascota) || edadMascota < 1 || edadMascota > 20){
              edadMascota = parseInt(prompt("Error: Ingrese la edad de su mascota"));
          }

        if(banderaNombrePerro || perroEdadViejo < edadMascota){
          perroEdadViejo = edadMascota ;
          perroViejo = nombreMascota ;
          banderaNombrePerro = false;
    
        }
        break;

      case"gato":
        razaMascota = prompt("Ingrese su raza (siames, turco, Peterbald , generico) ");
          while(razaMascota != "siames" && razaMascota != "Peterbald" && razaMascota != "generico"){

          razaMascota = prompt("Error: Ingrese su raza (siames, turco, Peterbald , generico)");
        }
        edadMascota = parseInt(prompt("Ingrese la edad de su mascota"));
          while(isNaN(edadMascota) || edadMascota < 1 || edadMascota > 20){
              edadMascota = parseInt(prompt("Error: Ingrese la edad de su mascota"));
          }
        if(banderaNombregato || gatoEdadViejo < edadMascota){
            gatoEdadViejo = edadMascota ;
            gatoViejo = nombreMascota ;
            banderaNombregato = false;
      
          }
          switch(razaMascota){
            case"siames":
              contadorSiames = contadorSiames + 1;
              acumuladorSiames = acumuladorSiames + edadMascota;
              break;
            case"Peterbald":
              contadorPeterbald = contadorPeterbald + 1;
              acumuladorPeterbald = acumuladorPeterbald + edadMascota;    
              break;
  
            case"turco":
              contadorTurco = contadorTurco + 1;
              acumuladorTurco = acumuladorTurco + edadMascota;
              break;
            case "generico":
              contadorGenerico = contadorGenerico + 1;
              acumuladorGenerico = acumuladorGenerico + 1;
              break;
          }
        break;
      case "otros":
        razaMascota = prompt("Ingrese su animal/raza");
          while(!isNaN(razaMascota)){
            razaMascota = prompt("Error: Ingrese su animal/raza");
          }
        edadMascota = parseInt(prompt("Ingrese la edad de su mascota"));
          while(isNaN(edadMascota) || edadMascota < 1 || edadMascota > 100){
              edadMascota = parseInt(prompt("Error: Ingrese la edad de su mascota"));
          }
        if(banderaNombreotros || otroEdadViejo < edadMascota){
            otroEdadViejo = edadMascota ;
            otroViejo = nombreMascota ;
            banderaNombrePerro = false;
      
          }
        
        break;
      case "pajaro":
        razaMascota = prompt("Ingrese su animal/raza");
          while(!isNaN(razaMascota)){
            razaMascota = prompt("Error: Ingrese su animal/raza");
          }
        edadMascota = parseInt(prompt("Ingrese la edad de su mascota"));
          while(isNaN(edadMascota) || edadMascota < 1 || edadMascota > 50){
              edadMascota = parseInt(prompt("Error: Ingrese la edad de su mascota"));
          }
        if(banderaNombrePajaro || pajaroEdadViejo < edadMascota){
          pajaroEdadViejo = edadMascota ;
          pajaroViejo = nombreMascota ;
          banderaNombrePerro = false;
    
          }
        break;
    }
    if(contadorTurco > contadorGenerico && contadorTurco > contadorSiames && contadorTurco > contadorPeterbald){
        mensaje = "Turco";
        promedio = acumuladorTurco / contadorTurco;
    }else if(contadorGenerico > contadorSiames && contadorGenerico > contadorPeterbald && contadorGenerico >= contadorTurco){
        mensaje = "Generico";
        promedio = acumuladorGenerico / contadorGenerico;
    }else if(contadorSiames > contadorPeterbald && contadorSiames >= contadorTurco && contadorSiames >= contadorGenerico){
        mensaje = "siames";
        promedio = acumuladorSiames / contadorSiames;
    }else{
      mensaje = "peterbald";
      promedio = acumuladorPeterbald / contadorPeterbald;
    }


  }
  console.log("El perro mas viejo se llama " + perroViejo);
  console.log("El gato mas viejo se llama " + gatoViejo);
  console.log("El pajaro mas viejo se llama " + pajaroViejo);
  console.log("El animal clasificado 'otro' mas viejo es " + otroViejo);
  console.log("La raza de gatos que mas animales tiene es " + mensaje);
  console.log("En promedio esta raza de gatos viven " + promedio + " años");

}
