/*Agustin Di Leone

4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

  >ArgentinaLuz
 FelipeLamparas
 JeLuz
 HazIluminacion
 JeLuz
 Osram*/

function CalcularPrecio () 
{
    let cantidadLamparitas;
    let marca;
    let precio;
    let precioBruto;
    let precioFinal;
    let mensaje;
    let ingresosBrutos;
    let mensajeIngresosBrutos;


    cantidadLamparitas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    precio = 35;
    precioBruto = cantidadLamparitas * precio; 

    if (cantidadLamparitas >= 6){
        precioFinal = precioBruto-(precioBruto*50)/100;
        mensaje = "El precio final es de " + precioFinal;
    }else if (cantidadLamparitas == 5 && marca == "ArgentinaLuz"){
        precioFinal = precioBruto-(precioBruto*40)/100;
        mensaje = "El precio final es de " + precioFinal;
    
    }else if (cantidadLamparitas == 5 && marca != "ArgentinaLuz"){
        precioFinal = precioBruto-(precioBruto*30)/100;
        mensaje = "El precio final es de " + precioFinal;

    }else if (cantidadLamparitas == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas")){
        precioFinal = precioBruto-(precioBruto*25)/100;
        mensaje = "El precio final es de " + precioFinal;

    }else if (cantidadLamparitas == 4 ){
        precioFinal = precioBruto-(precioBruto*20)/100;
        mensaje = "El precio final es de " + precioFinal;

    }else if (cantidadLamparitas == 3 && marca == "ArgentinaLuz"){
        precioFinal = precioBruto-(precioBruto*15)/100;
        mensaje = "El precio final es de " + precioFinal;

    }else if (cantidadLamparitas == 3 && marca == "FelipeLamparas"){
        precioFinal = precioBruto-(precioBruto*10)/100;
        mensaje = "El precio final es de " + precioFinal;

    }else if (cantidadLamparitas == 3) {
        precioFinal = precioBruto-(precioBruto*5)/100;
        mensaje = "El precio final es de " + precioFinal;
    }
    
    
    document.getElementById("txtIdprecioDescuento").value = mensaje;

    if (precioFinal >= 120){

        ingresosBrutos = precioFinal * 10 /100;
        mensajeIngresosBrutos = "Usted pago " + ingresosBrutos + " de IIBB.";
        alert(mensajeIngresosBrutos);
    }    
 	
}
