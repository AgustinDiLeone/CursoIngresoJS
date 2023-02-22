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

}