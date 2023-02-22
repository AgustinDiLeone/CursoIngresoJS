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
	let cantidadProducto;
	let promedio;
	let cantidadJabon;

	banderaAlcohol = true;
	cantidadAlcoholBarato = 0;
	fabricanteAlcoholBarato = "No hay";
	precioAlcoholBarato = 0;
	banderaCantidad = true;
	cantidadProducto = 0;
	cantidadJabon  = 0;

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

		if(banderaAlcohol && producto == "alcohol"){
			precioAlcoholBarato = precio;
			cantidadAlcoholBarato = cantidad;
			fabricanteAlcoholBarato = fabricante;
			banderaAlcohol = false;
			
		}else if(producto == "alcohol" && precio < precioAlcoholBarato){
			precioAlcoholBarato = precio;
			cantidadAlcoholBarato = cantidad;
			fabricanteAlcoholBarato = fabricante;
			
		}
		if(cantidadProducto < cantidad){
			cantidadProducto = cantidad;
			promedio = precio / cantidadProducto;

		}
		if(producto == "jabon"){

			cantidadJabon = cantidadJabon + cantidad;
		}

		
	}

	console.log("El alcohol mas barato es: " + fabricanteAlcoholBarato + " comprando " + cantidadAlcoholBarato + " unidades");
	console.log("El promedio de la compra con mayor unidades es: " + promedio);
	console.log("Hay " + cantidadJabon + " unidades de jabon en total");

}