function Producto (idProducto, nombreProducto, stockProducto, precioProducto, descuentoProducto, categoriaProducto, imgProducto){
    this.id = idProducto;
    this.nombre = nombreProducto;
    this.stock = stockProducto;
    this.precio = precioProducto;
    this.descuento = descuentoProducto;
    this.categoria = categoriaProducto;
    this.img = imgProducto;


}

let contador = 0


const producto1 = new Producto(1, "Carcasa Silicona Iphone 12 Mini - Blue Navy", 50, 1099, 0.80, "Carcasas", "/img/productos/carcasa-silicone-case-iphone-12-mini.jpg") 
const producto2 = new Producto(2, "Carcasa Silicona Iphone SE 2020 - Yellow", 50, 990, 0.80, "Carcasas", "")
const producto3 = new Producto(3, "Cascasa Silicona Iphone X - Sandia", 50, 880, 0.80, "Carcasas", "")
const producto4 = new Producto(4, "Auriculares Iphone Lightning conector", 50, 710, 0.85, "Auriculares", "")
const producto5 = new Producto(5, "AirPods (2nd generation)", 50, 5540, 0.95, "Auriculares", "")
const producto6 = new Producto(6, "Vidrio templado Iphone 11", 50, 190, 1, "Vidrios", "")
const producto7 = new Producto(7, "Adaptador 20W entrada USB-C", 50, 1100, 0.90, "Cargadores", "")
const producto8 = new Producto(8, "Cable cargador USB-C a Lightning de 1 metro", 50, 650, 0.90, "Cargadores", "")
const producto9 = new Producto(9, "Cable cargador USB a Lightning de 2 metros", 50, 720, 0.90, "Cargadores", "")


const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9]






for (const producto of productos){
    let contenedor = document.createElement("div");

    contenedor.innerHTML = `<div class = "card">
                            <img src=${producto.img}/> 
                            <h3> Producto: ${producto.nombre}</h3>
                            <p> Precio: ${producto.precio}</p>
                            <button id="botonAgregar">Agregar</button></div>`; //por que no trae la img??
    
    document.body.prepend(contenedor);

    let boton = document.getElementById("botonAgregar")
boton.addEventListener("click", agregarAlCarrito)
function agregarAlCarrito(){
    console.log("se agrego al carrito " + producto.nombre)
} 



    
}
    
