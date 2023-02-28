/*Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total*/
/*
function mostrar()
{
	let producto;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let contadorAlcohol;
	let acumuladorAlcohol;
	let acumuladorJabon;
	let contadorBarbijo;
	let acumuladorBarbijo;
	let contadorJabon;
	let mensaje;
	let promedioCompra;

	let banderaJabon;
	let jabonCaro;
	let cantidadCara;
	let fabricanteCaro;

	contadorAlcohol = 0;
	acumuladorJabon  = 0;
	acumuladorBarbijo = 0;
	contadorJabon = 0;
	acumuladorAlcohol = 0;
	contadorBarbijo = 0;
	banderaJabon = true;
	jabonCaro = 0;

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
				if(banderaJabon || precio > jabonCaro){
					jabonCaro = precio;
					cantidadCara = cantidad;
					fabricanteCaro = fabricante;
					banderaJabon = false;
				}
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
	

	console.log("El jabon mas caro es del fabricante " + fabricanteCaro + " y compro " + cantidadCara + " unidades");
	console.log("El tipo con mayor unidades es el" + mensaje + " y su promedio es " + promedioCompra);
	console.log("Se compraron " + acumuladorBarbijo + " unidades de barbijos en total");
}*/

//Agustin Di Leone
/*
Recu 2020 1 bis: "Jugando al Doctor" 
De 7 personas que ingresan al hospital se deben tomar y validar los siguientes datos:
nombre, altura, peso y sexo.
a)Informar la cantidad de personas de sexo femenino. 
b)La altura promedio en total de pacientes.
c)El nombre del hombre con menos peso(si lo hay).
d)De la persona no binaria, el más flaco. 
Pedir datos por prompt y mostrar por document.write o console.log*/

function mostrar()
{
	let nombre;
	let altura;
	let peso;
	let sexo;
	let contadorFemenino = 0;
	let acumuladorAltura = 0;
	let contadorPacientes = 0;
	let promedioAltura;
	let hombreLiviano;
	let nombreHombreLiviano;
	let banderaHombre = true;
	let banderaNoB = true;
	let nombreNoBliviano;
	let NoBLiviano;




	for(let i = 0; i < 7; i++){
		nombre = prompt("Ingrese su nombre");
			while(!isNaN(nombre)){
				nombre = prompt("Error: Ingrese su nombre");
			}
		altura = parseFloat(prompt("Ingrese su altura en mts"));
			while(isNaN(altura) || altura < 0.5 || altura > 2.5){
				altura = parseFloat(prompt("Ingrese su altura en mts"));
			}

		peso = parseFloat(prompt("Ingrese su peso"));
			while(isNaN(peso) || peso < 3 || peso > 200){
				peso = parseFloat(prompt("Ingrese su peso"));
			}

		sexo = prompt('Ingrese su sexo: "F"para femenino , "M" para masculino o "noB" para no binario ');
			while(sexo != "F" && sexo != "M" && sexo != "noB"){
				sexo = prompt('Error: Ingrese su sexo: "F"para femenino , "M" para masculino o "noB" para no binario');
			}
		switch(sexo){
			case"F":
				contadorFemenino = contadorFemenino + 1;
				break;
			case"M":
				if(banderaHombre || hombreLiviano > peso){
					hombreLiviano = peso;
					nombreHombreLiviano = nombre;
					banderaHombre = false;
				}
				break;
			case"noB":
				if(banderaNoB || NoBLiviano > peso){
					nombreNoBliviano = nombre;
					NoBLiviano = peso;
					banderaNoB = false;
				}
				break;


		}

		acumuladorAltura = acumuladorAltura + altura;
		contadorPacientes = contadorPacientes + 1;
    
    }

	promedioAltura = acumuladorAltura / contadorPacientes;

	if(contadorFemenino == 0){
		console.log("No hay mujeres");
	}else{
		console.log("Se registraron " + contadorFemenino + " mujeres");
	}

	console.log("El promedio de altura de los pacientes es " + promedioAltura);

	if(banderaHombre){
		console.log("No se ingresaron hombres");
	}else{
		console.log("El hombre mas liviano se llama " + nombreHombreLiviano + " y pesa " + hombreLiviano);
	}
	if(banderaNoB){
		console.log("No se ingresaron personas no Binarias");
	}else{
		console.log("La persona no Binaria mas liviana se llama " + nombreNoBliviano + " y pesa " + NoBLiviano);
	}



}
