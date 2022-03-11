// /******************************************************
//  *                         FUNCIONES
//  ********************************************************/

// // Se declara la funcion (function declaration)
// //Se usa la palabra reservada function "nombre de la funcion" (parametros) {"cuerpo de la funcion"}.

// // para que se ejecute la funcion hay que llamarla. Se llama con el nombre de la funcion y el ().

// function saludar (nombre) {
//     console.log('Bienvenido ' + nombre);
// }

// saludar('Juan');
// saludar('Carlos');


// // function expression
// //Se crea una variable = a una funcion y despues se llama con el nombre de la variable. EJEMPLO:

// const cliente = function(nombreCliente) {
//     console.log(`Mostrando los datos del cliente: ` + nombreCliente);
// }

// cliente("Juan")

// // Cuando utilizamos function expression, siempre hay que declarar las funciones, antes de utilizarlas (llamarlas).
// // en las function declaration, no importa si no la declaraste antes de usarla.

// ////

// // function actividad (nombre,actividad) {
// //     console.log(`La persona ${nombre}, está realizando la actividad ${actividad}`);
// // }

// // actividad("Juan", "Aprender JavasCript");
// // actividad("Pedro", "Durmiendo");

// //Si no se le pasa ningun parametro, toma el que esta x default (pone undefined si no se definió). 
// // actividad();


// const actividad = function(nombre = "walter", actividad = "boludeando") {
//     console.log(`La persona ${nombre}, está realizando la actividad ${actividad}`);
// }

// actividad()

// // Al no recibir parametros cuando llamamos a la variable actividad, toma los ue estan x default = walter y boludeando)

// // Si le pasamos parametros, toma los q le pasamos.
// actividad("carlos" , "durmiendo");


// // ARROW FUNCTION
// // () => {}

// const viajando = (destino, duracion) => {
//     return `Viajando a la ciudad de: ${destino} por ${duracion}`
    
// }

// let viaje = viajando("Paris" , "9 dias")

// console.log(viaje);

// /*********************************************
//  *                OBJETOS
//  **********************************************/

//  OBJETO LITERAL
// Las claves de un objeto se llaman propiedades
// Clave seria dentro del objeto: el nombre y juan seria el valor.
// const persona = {
//     nombre: "Juan",
//     profesion: "Desarrollador Web",
//     edad: 30
// }

// console.log(persona);
// //Para acceder a un valor en particular, por ejemplo a la profesion del objeto persona, se hace asi:

// console.log(persona.profesion);

// Tambien puede ser que un objeto dentro de una propiedad tenga otro objeto, por ej nombre:

// let personaa = {
//     nombre: {
//         primer: "Guzman",
//         segundo: "Jose",
//     },
//     profesion: "Desarrollador Web",
//     edad: 30
// }
// console.log(personaa.nombre);
// // Para acceder a una propiedad dentro del objeto nombre:
// console.log(personaa.nombre.primer);


//OBJECT CONSTRUCTOR
// Crear objeto con la funcion constructora

// function Funcionarios (nombre, puesto ,edad) {
//     this.nombre = nombre;
//     this.puesto = puesto;
//     this.edad = edad;
// }

// Crear una nueva tarea:
// const funcionario1 = new Funcionarios ("Pedro","Gerente","48");
// const funcionario2 = new funcionarios ("Juan","Jefe","36");
// const funcionario3 = new funcionarios ("Laura","Asistente","26");
// const funcionario4 = new funcionarios ("Luis","Asistente","23");

// console.log(funcionario1);
// console.log(funcionario2.nombre);
// console.log(funcionario3.puesto);
// console.log(funcionario4.edad);


// // Para unir valores en un objeto usamos Object Literal Enhacement.
// const banda = "metallica";
// const genero = "Heavy" ;
// const canciones =  ["master", "seek","enter sandman"];

// // Si queremos unir estos tres en un objeto :
// const metallica = {banda, genero, canciones};
// console.log(metallica);

// //METODOS O FUNCIONES EN UN OBJETO
// //Funciones dentro de un objeto

// const personaje = {
//     nombre : "Juan",
//     trabajo : "Web developer",
//     edad: 30,
//     musica: true,
//     mostrarInformacion() {
//         console.log(`${this.nombre} es ${this.trabajo} y su edad es de ${this.edad}`);
//     }

// }
// personaje.mostrarInformacion();




//////////              METODOS           ////////////////////
// Un metodo es una función que esta intimamente relacionada con un objeto. Es una funcion que tiene el objeto

///////////////            CLASES       ////////////////////////
// dentro de la clase, está el constructor de objetos y las funciones relacionadas a los objetos (metodos)

// class Productos {

//     constructor(nombrePP,categoriaPP,precioPP,stockPP,validoPP){
//         this.nombre = nombrePP,
//         this.categoria = categoriaPP,
//         this.precio = precioPP,
//         this.stock = stockPP,
//         this.disonible = validoPP
//     }

//     comprar(cantidad){
//         this.stock = this.stock - cantidad
//         console.log(`Compraste ${cantidad} ${this.nombre}, te salió ${this.precio*cantidad}`);
//     }
// }

// const producto1 = new Productos("Remera","Nike",3000,10,true)
// const producto2 = new Productos("Pantalon","Adidas",6000,5,true)
// console.log(producto1);
// console.log(producto2);


// SE LE PUEDE PASAR LOS PARAMETROS COMO UN OBJETO (METODO RORO) y esto sirve para cuando ingresemos un nuevo producto, poder ingresar los datos en cualquier orden:

// class Productos {

//     constructor({nombrePP,
//         categoriaPP,
//         precioPP,
//         stockPP = 0,
//         validoPP = true // le puedo poner un valor por defecto, si no le pongo sale undefined
//     }) {
//         this.nombre = nombrePP,
//         this.categoria = categoriaPP,
//         this.precio = precioPP,
//         this.stock = stockPP,
//         this.disponible = validoPP
//     }

//     comprar(cantidad){
//         this.stock = this.stock - cantidad
//         console.log(`Compraste ${cantidad} ${this.nombre}, te salió ${this.precio*cantidad}`);
//     }
// }
// //forma de ingresar un nuevo productos sin RORO
// const producto1 = new Productos("Remera","Nike",3000,10,true)

// // con RORO
// const producto3 = new Productos({
//     stockPP: 30,
//     categoriaPP: "umbro",
//     nombrePP: "championes",
//     precioPP:3000,
//     validoPP: true
// })

// console.log(producto3);


// /***************************************************************
//  *                             ARRAY
//  ***************************************************************/

// console.log("-----------------------------------------------");

// // // //Declaracion de lista --- con los [ ]   --- cada elemendo va separado por ,
// let superMercado = ["pera", "manzana", "queso", "jamon", "cerveza"];
// console.log(superMercado);

// //Para agregar un elemento a la lista: (los agrega al final)
// superMercado.push("leche","agua")
// console.log(superMercado);

// //Para agregar un elemento a la lista al principio:
// superMercado.unshift("tomate","naranja")

// console.log(superMercado);

// // Para ver la longitud de la lista
// console.log(superMercado.length);

// // Para ver un elemento en particular de la lista (en este caso la posicion 2(PERA), tener en cuenta que arranca a contar desde el 0)
// console.log(superMercado[2]);


// let ferreteria = ["tornillos","madera"]
// console.log(ferreteria);

// // Para unir dos listas:
// let listaDefinitiva = superMercado.concat(ferreteria)
// console.log(listaDefinitiva);

// //Para cortar una lista (te trae el elemento 2, 3 y 4 --- incluye el 2, excluye el 5):
// let listaReducida = listaDefinitiva.slice(2,5)
// console.log(listaReducida);


// // Para seleccionar elementos de la lista, podemos cortar partes y despues crear una lista nueva concatenando las listas que cortamos.  listaDefinitiva.length= va hasta el final de la lista
// let lista1 =  listaDefinitiva.slice(0,3)
// let lista2 =  listaDefinitiva.slice(8,listaDefinitiva.length)
// let lista3 = lista1.concat(lista2)
// console.log(lista3);

// // /*************************************************************
// //  *  METODOS PARA RECORRER UN ARRAY DE OBJETOS
// //  ************************************************************/

// class Producto {

//     constructor(nombre, precio) {
//     this.nombre = nombre;
//     this.precio = precio;
//     }
// }

// let listaSupermercado = [];

// listaSupermercado.push(new Producto("Tornillo", 1300))
// listaSupermercado.push(new Producto("Pera", 200))
// listaSupermercado.push(new Producto("Banana", 130))
// listaSupermercado.push(new Producto("Jamon", 150))
// listaSupermercado.push(new Producto("Jamon", 150))
// listaSupermercado.push(new Producto("Jamon", 150))


// // Con For
// for (let i = 0; i<listaSupermercado.length; i++) {
//     console.log(listaSupermercado[i])
// }

// // For of
// // Creando una constante llamada obj que guarda el valor de cada elemento de la lista de supermercado
// for (const obj of listaSupermercado){
//     console.log(obj);
// }

// let obje = {nombre:"tomate" , precio:200}

// // For in
// for (const prop in obje) {
//     console.log(prop);
// }

// // foreach() -- este es el q mas se usa, mas practico.
// // "para cada elemento del array"

// listaSupermercado.forEach(obj => {
//     console.log(obj);
//     // console.log(obj.nombre);
//     // console.log(obj.precio);
// })


// // Buscadores de JS
// console.log(listaSupermercado);
// // Find - me trae un objeto
// let buscadorUnico = listaSupermercado.find(obj => obj.nombre == "Tornillo")
// console.log(buscadorUnico);

// // Filter me trae una coleccion de objetos

// let search = "Jamon"
// let buscadorMultiple = listaSupermercado.filter(obj => obj.nombre == search)
// console.log(buscadorMultiple);

// let buscadorPorPrecio = listaSupermercado.filter(obj => obj.precio < 1500)
// console.log(buscadorPorPrecio);



// // /*************************************************************
// //  *                          STORAGE y JSON
// //  ************************************************************/

// // TODA LA INFORMACION QUE SE GUARDA EN EL LOCALSTORAGE SE GUARDA EN STRING -TEXTO PLANO (JSON)

// // LocalStorage - Los datos almacenados en el localStorage se almacenan en el navegador de forma indefinida ( o hasta que se borren los datos de navegacion del browser.)
// // SessionStorage - Los datos se almacenan hasta que se cierra la ventana.


// // Guardar un dato en LocalStorage = localStorage.setItem(clave,valor)

// localStorage.setItem("saludo", "Hola Mundo")

// // Tomar un dato del LocalStorage = localStorage.setItem(clave,valor)

// localStorage.getItem("saludo")

// // Guardar un dato en sessionStorage = sessionStorage.setItem(clave,valor)

// sessionStorage.setItem("temporal", 2021)

// // Guardar un dato en sessionStorage = sessionStorage.getItem(clave,valor)

// sessionStorage.getItem("temporal")

// // SI GUARDAMOS ALGO EN EL LOCALSTORAGE DE UN HTML, PODEMOS ACCEDER DESDE OTRO HTML (SIEMPRE QUE SEA DESDE EL MISMO IP:PUERTO)


// class Productos {

//     constructor ({nombre,precio,categoria}) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.categoria = categoria;
//     }
// }

// let producto1 = new Productos({
//     nombre:"Remera",
//     precio:2000,
//     cateogria:"Prendas superiores"})

//     console.log(producto1);

// // NO PODEMOS GUARDAR UN OBJETO EN EL LOCALSTORAGE, TENEMOS QUE PASARLA A TEXTO PLANO (JSON)
// // PARA PODER GUARDARLO.

// // Para pasar de objeto a JSON = JSON.stringify(objeto)

// localStorage.setItem("producto",JSON.stringify(producto1))


// // Cuando guardamos el dato en el localstorage tuvimos que pasarlo a string
// // Cuando vamos a tomar el objeto, lo obtenemos como string.
// //Para traerlo y poder manipularlo, tenemos que hacer el proceso inverso:
// // para pasar de JSON a OBJETO = JSON.parse(json)

// JSON.parse(localStorage.getItem("producto"))
// console.log(JSON.parse(localStorage.getItem("producto")));


// // /*************************************************************
// //  *                          DOM
// //  ************************************************************/

// // Entrar por ID - getElementById()
// console.log(document.getElementById("unico"))
// //ME TRAE SOLO UN OBJETO HTML (EL ID ES UNICO, NO SE PUEDE REPETIR)


// // Entrar por CLASE - getElementsByClassName()
// console.log(document.getElementsByClassName("clase1"))
// //ME TRAE UN ARRAY DE OBJEROS HTML(COLECCION DE TODOS LOS ELEMENTOS QUE TIENEN ESA CLASE)


// //Entrar por ETIQUETA -getElementsByTagName()
// console.log(document.getElementsByTagName("p"))
// //ME TRAE UN ARRAY DE OBJEROS HTML

// //para seleccionar un elemento del array (el array contiene todos los p del documento)
// //lo seleccionamos por la posicion en el array
// console.log(document.getElementsByTagName("p")[3])


// // para modificar el texto de ese elemento en particular:

// document.getElementsByTagName("p")[3].textContent = "Este es el nuevo texto"


// //querySelector

// // document.querySelector("")
// //Dentro del parentesis se selecciona como en CSS
// //Solamente me trae un elemento - el primero q me encuentra
// console.log(document.querySelector("#unico"));
// console.log(document.querySelector(".clase1"));
// console.log(document.querySelector("p"));

// // Para traer todos los elementos = document.querySelectorAll("")
// console.log(document.querySelectorAll("p"));



// //
// // cambiar contenido
// document.getElementById("unico").textContent = "Este es el nuevo contenido" 

// // cambiar estilo a algo
// //document.getElementById("unico").style.color = "pink"

// // ocultar
// // document.getElementById("unico").style.display = "none"

// // Agregar una clase con JS
// //document.getElementById("unico").setAttribute("clave "","valor")
// document.getElementById("unico").setAttribute("class", "truco")





// // Insertar un elemento dentro del div con id="aca"
// // 1ero creo el elemento que quiero inyectar y asignarle un espacio de memoria (con una constante - variable)
// const h2 = document.createElement("h2")


// //darle un atributo al elemento que cree ( en este caso le vamos a dar un id)
// h2.setAttribute("id","elementoAgregado")


// //Darle contenido al elemento que cree
// h2.textContent = "Elemento nuevo"
// console.log(h2);

// //selecciono el div y le agrego el h2 que creamos (div es el padre, h2 es hijo del div)
// //Para seleccionar = document.getElementById("id del elemento que seleccionamos")
// //para agregarle el hijo = .appendChild("elemento que agregamos")
// document.getElementById("aca").appendChild(h2)





// // // Ocultar elementos del index

// document.getElementById("unico").style.display = "none"


// //Formularios

// class Producto {
    
//     constructor({nombre,categoria,precio,stock}){
//         this.nombre = nombre;
//         this.categoria = categoria;
//         this.precio = precio;
//         this.stock = stock;
//     }
// }

// const guardarDatos = () => {

//     const producto = new Producto (
//         {
//             nombre : document.getElementById("nombre").value,
//             categoria : document.getElementById("categoria").value,
//             precio : document.getElementById("precio").value,
//             stock : document.getElementById("stock").value,
//         })

//         const productoAgregadoPadre = document.createElement("div")

//         const nombreProductoAgregado = document.createElement("h3")
//         nombreProductoAgregado.textContent = producto.nombre
//         productoAgregadoPadre.appendChild(nombreProductoAgregado)

//         const categoriaProductoAgregado = document.createElement("h4")
//         categoriaProductoAgregado.textContent = producto.categoria
//         productoAgregadoPadre.appendChild(categoriaProductoAgregado)

//         const precioProductoAgregado = document.createElement("h5")
//         precioProductoAgregado.textContent = producto.precio
//         productoAgregadoPadre.appendChild(precioProductoAgregado)

//         document.getElementById("productosAgregados").appendChild(productoAgregadoPadre)

//     return producto
// }


// document.getElementById("btn").addEventListener("click", () => {
//     guardarDatos()
// }   )





// let precioCarcasa = 1000
// let precioAuricular = 2000
// let precioCargador = 3000
// let producto1 = 0;
// let producto2 = 0;

// let userName = prompt("ingrese su nombre")
// let userLastName = prompt("Ingrese su apellido")

// function saludo(nombre, apellido){
//     alert("Bienvenido a la mejor tienda de accesorios para celular, " + nombre + " " + apellido + "!")
// }

// saludo(userName, userLastName)



// let siOno = prompt(`Desesas comprar accesorios de celular?`)

// if (siOno == "si") {
//     var respuesta1= prompt("Las opciones que tenemos son las siguientes : 1) carcasa. 2) auricular. 3) cargador")

//     switch (respuesta1) {
//         case "carcasa":
//             alert(`Agregaste una ${respuesta1} valor $${precioCarcasa} al carrito`)
//             producto1 = precioCarcasa
//             break;
//         case "auricular":
//         alert(`Agregaste un ${respuesta1} valor $${precioAuricular} al carrito`)
//             producto1 = precioAuricular
//             break;
//         case "cargador":
//         alert(`Agregaste un ${respuesta1} valor $${precioCargador} al carrito`)
//             producto1 = precioCargador
//             break;
//         default:
//             alert("no tenemos ese producto")
//             break;
//     }
    
//     let comprarOtroProducto = prompt("Desea comprar otro producto?")

//     if (comprarOtroProducto == "si") {
//         var respuesta2= prompt("Las opciones que tenemos son las siguientes : 1) carcasa. 2) auricular. 3) cargador")
//         switch (respuesta2) {
//             case "carcasa":
//                 alert(`Agregaste una ${respuesta2} valor $${precioCarcasa} al carrito`)
//                 producto2 = precioCarcasa
//                 break;
//             case "auricular":
//                 alert(`Agregaste un ${respuesta2} valor $${precioAuricular} al carrito`)
//                 producto2 = precioAuricular
//                 break;
//             case "cargador":
//                 alert(`Agregaste un ${respuesta2} valor $${precioCargador} al carrito`)
//                 producto2 = precioCargador
//                 break;
//             default:
//                 alert("no tenemos ese producto")
//                 break;
//         }
//     } 

// }else {
//     alert(`Muchas gracias, saludos`)
// }

// let productosCarrito = `${respuesta1} y ${respuesta2}`
// let totalCarrito = producto1 + producto2
// alert(`El total de tu compra es de $ ${totalCarrito}. Corresponde a ${productosCarrito}`)