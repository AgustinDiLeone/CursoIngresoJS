/* Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
/*
function mostrar()
{
	let producto;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let banderaAlcohol;
	let cantidadAlcoholBarato;
	let fabricanteAlcoholBarato;
	let precioAlcoholBarato;
	let banderaCantidad;
	let contadorAlcohol;
	let acumuladorAlcohol;
	let acumuladorJabon;
	let contadorBarbijo;
	let acumuladorBarbijo;
	let contadorJabon;
	let mensaje;
	let promedioCompra;

	banderaAlcohol = true;
	cantidadAlcoholBarato = 0;
	fabricanteAlcoholBarato = "No hay";
	precioAlcoholBarato = 0;
	banderaCantidad = true;
	contadorAlcohol = 0;
	acumuladorJabon  = 0;
	acumuladorBarbijo = 0;
	contadorJabon = 0;
	acumuladorAlcohol = 0;
	contadorBarbijo = 0;

	for(let i = 0; i < 5; i++){
		producto = prompt("Ingrese un producto de prevención de contagio");
			while(!(producto == "barbijo" || producto == "jabon" || producto == "alcohol")){

				producto = prompt("Error: Ingrese un producto de prevención de contagio");
			}
		precio = parseFloat(prompt("Ingrese el precio del producto"));
			while(isNaN(precio) || precio < 100 || precio > 300){

				precio = parseFloat(prompt("Error: Ingrese el precio del producto"));
			}
		cantidad = parseInt(prompt("Ingrese la cantidad del producto"));
			while(isNaN(cantidad) || cantidad < 1 || cantidad > 1000){

				cantidad = parseInt(prompt("Error: Ingrese la cantidad del producto"));
			}
		marca = prompt("Ingrese la marca del producto");
		fabricante = prompt("Ingrese el fabricante del producto");

		switch(producto){
			case"alcohol":		
				if(banderaAlcohol || precio < precioAlcoholBarato){
					precioAlcoholBarato = precio;
					cantidadAlcoholBarato = cantidad;
					fabricanteAlcoholBarato = fabricante;
					banderaAlcohol = false;
					
				}
				contadorAlcohol = contadorAlcohol + 1;
				acumuladorAlcohol = acumuladorAlcohol + cantidad;
				break;
		
			case"barbijo":
				contadorBarbijo = contadorBarbijo + 1;
				acumuladorBarbijo = acumuladorBarbijo + cantidad;
				break;

			case"jabon":
				contadorJabon = contadorJabon + 1;
				acumuladorJabon = acumuladorJabon + cantidad;
				break;
		}

		
	}

	if(acumuladorAlcohol > acumuladorJabon && acumuladorAlcohol > acumuladorBarbijo){
		promedioCompra = acumuladorAlcohol/contadorAlcohol;
		mensaje = " alcohol"
	}else if(acumuladorJabon > acumuladorBarbijo && acumuladorBarbijo >= acumuladorAlcohol){
		promedioCompra =  acumuladorJabon/contadorBarbijo;
		mensaje = " jabon"
	}else{
		promedioCompra =  acumuladorBarbijo/contadorBarbijo;
		mensaje = " barbijo"
	}

	console.log("El alcohol mas barato es: " + fabricanteAlcoholBarato + " comprando " + cantidadAlcoholBarato + " unidades");
	console.log("El tipo con mayor unidades es el" + mensaje + " y su promedio es " + promedioCompra);
	console.log("Hay " + acumuladorJabon + " unidades de jabon en total");

}/*
/*
Parcial 1 2020 bis: /"Super chino" Se pide el ingreso de mercadería de un supermercado , 
hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)

informar SOLO SI HAY
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del mas caro de todos los productos
c) el NOMBRE del mas barato de los elaborados
d)el tipo de mercadería que mas aparece
e)el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado/
*/

function mostrar()
{
	let tipoProducto;
	let nombreProducto;
	let importeProducto;
	let procedenciaProducto;
	let pesoProducto;
	let respuesta;

	let banderaComestible;
	let pesadoComestible;
	let comestiblePesado;

	let banderaCaro;
	let caroProducto;
	let precioCaro;

	let banderaElaborados;
	let baratoElaborado;
	let precioBaratoElaborados;

	let contadorLimpieza;
	let contadorComestible;
	let contadorOtros;
	let mensaje;

	let cantidadProcedencia;
	let contadorImportado;
	let contadorNacional;
	let contadorElaborados;
	let porcentajesElaborados;

	let acumuladorPesoLimpieza;
	let acumuladorPesoComestible;
	let acumuladorPesoOtros;
	let promedioPesoLimpieza;
	let promedioPesoComestibles;
	let promedioPesoOtros;

	respuesta = "Si"
	banderaComestible = true;
	pesadoComestible = "No hay";
	banderaCaro = true;
	caroProducto = "No hay";
	banderaElaborados = true;

	contadorLimpieza = 0;
	contadorComestible = 0;
	contadorOtros = 0;

	acumuladorPesoLimpieza = 0;
	acumuladorPesoComestible = 0;
	acumuladorPesoOtros = 0;

	contadorImportado = 0;
	contadorNacional = 0;
	contadorElaborados = 0;

	while(respuesta == "Si"){
		tipoProducto = prompt("Ingrese un tipo de mercaderia (limpieza , comestible u otros)");
			while(!isNaN(tipoProducto) && tipoProducto != "limpieza" && tipoProducto != "comestible" && tipoProducto != "otros"){

				tipoProducto = prompt("Error: Ingrese un tipo de mercaderia (limpieza , comestible u otros)");
			}
		nombreProducto = prompt("Ingrese el nombre del producto");
		importeProducto = parseFloat(prompt("Ingrese el importe del producto"));
			while(isNaN(importeProducto) || importeProducto < 1 || importeProducto > 1000){

				importeProducto = parseFloat(prompt("Error: Ingrese el importe del producto"));
			}
		procedenciaProducto = prompt("Ingrese la procedencia de la mercaderia (importado, nacional o elaborado)");
			while(procedenciaProducto != "importado" && procedenciaProducto != "nacional" && procedenciaProducto != "elaborado"){

				procedenciaProducto = prompt("Error: Ingrese la procedencia de la mercaderia (importado, nacional o elaborado)");
			}
		pesoProducto = parseFloat(prompt("Ingrese el peso del producto"));
			while(isNaN(pesoProducto) || pesoProducto < 1 || pesoProducto > 29){

				pesoProducto = parseFloat(prompt("Error: Ingrese el peso del producto"));
			}
		switch(tipoProducto){
			case"limpieza":
				contadorLimpieza = contadorLimpieza + 1;
				acumuladorPesoLimpieza = acumuladorPesoLimpieza + pesoProducto;
				break;

			case"comestible":
				contadorComestible = contadorComestible + 1;
				acumuladorPesoComestible = acumuladorPesoComestible + pesoProducto;
				if(banderaComestible || comestiblePesado < pesoProducto){
					comestiblePesado = pesoProducto;
					pesadoComestible = nombreProducto;
					banderaComestible = false;
				}
				break;
			case "otros":
				acumuladorPesoOtros = acumuladorPesoOtros + pesoProducto;
				contadorOtros = contadorOtros + 1;
				break;

		}
		if(banderaCaro || precioCaro < importeProducto){
			precioCaro = importeProducto;
			caroProducto = nombreProducto;
			banderaCaro = false;
		}
		switch(procedenciaProducto){
			case"elaborado":
				contadorElaborados = contadorElaborados + 1;
				if(banderaElaborados || precioBaratoElaborados > importeProducto){
					precioBaratoElaborados = importeProducto;
					baratoElaborado = nombreProducto;
					banderaElaborados = false;
				}
				break;
			case"importado":
				contadorImportado = contadorImportado + 1;
				break;
			case"nacional":
				contadorNacional = contadorNacional + 1
				break;
		}

		respuesta = prompt("Si desea seguir ingresando mercaderia: Ingrese 'Si'")
		
	}

	if(contadorComestible > contadorLimpieza && contadorComestible > contadorOtros){
		mensaje = "los comestibles"
	}else if(contadorLimpieza > contadorOtros && contadorLimpieza >= contadorComestible){
		mensaje = "los de limpieza"
	}else{
		mensaje = "otros"
	}
	
	cantidadProcedencia = contadorElaborados + contadorImportado + contadorNacional;
	porcentajesElaborados = (contadorElaborados / cantidadProcedencia) * 100;
 
	promedioPesoLimpieza = acumuladorPesoLimpieza / contadorLimpieza;
	promedioPesoComestibles = acumuladorPesoComestible / contadorComestible;
	promedioPesoOtros = acumuladorPesoOtros / contadorOtros;

	console.log("El comestible mas pesado es " + pesadoComestible);
	console.log("El producto mas caro es " + caroProducto);
	console.log("El produucto mas baratos de los elaborados es " + baratoElaborado);
	console.log("El tipo de mercaderia que mas aparece son " + mensaje);
	console.log("El " + porcentajesElaborados + " porciento de los productos son elaborados");
	console.log("El promedio es de " + promedioPesoComestibles + " kg de productos comestbles");
	console.log("El promedio es de " + promedioPesoLimpieza + " kg de productos de limpieza");
	console.log("El promedio es de " + promedioPesoOtros + " kg de productos 'otros' ");

}