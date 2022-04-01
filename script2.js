let carts = document.querySelectorAll(".anadir-carrito");

function Producto (idProducto, nombreProducto, stockProducto, precioProducto, descuentoProducto, categoriaProducto, imgProducto, cantidadEnCarrito){
    this.id = idProducto;
    this.nombre = nombreProducto;
    this.stock = stockProducto;
    this.precio = precioProducto;
    this.descuento = descuentoProducto;
    this.categoria = categoriaProducto;
    this.img = imgProducto;
    this.enCarrito = cantidadEnCarrito;
}


const producto1 = new Producto(1, "Carcasa Silicona Iphone 12 Mini - Blue Navy", 50, 1099, 0.80, "Carcasas", "../img/productos/carcasa-silicone-case-iphone-12-mini.jpg", 0) 
const producto2 = new Producto(2, "Carcasa Silicona Iphone SE 2020 - Yellow", 50, 990, 0.80, "Carcasas", "../img/productos/carcasa-silicone-case-iphone-se-2020-amarillo.jpg", 0)
const producto3 = new Producto(3, "Cascasa Silicona Iphone X - Sandia", 50, 880, 0.80, "Carcasas", "../img/productos/carcasa-silicone-case-iphone-x-sandia.png", 0)
const producto4 = new Producto(4, "Auriculares Iphone Lightning conector", 50, 710, 0.85, "Auriculares", "../img/productos/auriculares-lightning-iphone.jpg", 0)
const producto5 = new Producto(5, "AirPods (2nd generation)", 50, 5540, 0.95, "Auriculares", "../img/productos/air-pods-iphone.jpg", 0)
const producto6 = new Producto(6, "Vidrio templado Iphone 11", 50, 190, 1, "Vidrios", "../img/productos/vidrio-templado-iphone.jpg", 0)
const producto7 = new Producto(7, "Adaptador 20W entrada USB-C", 50, 1100, 0.90, "Cargadores", "../img/productos/adaptador-cargador-iphone.jpg", 0)
const producto8 = new Producto(8, "Cable cargador USB-C a Lightning de 1 metro", 50, 650, 0.90, "Cargadores", "../img/productos/cable-cargador-1mt-usbc.jpg", 0)
const producto9 = new Producto(9, "Cable cargador USB a Lightning de 2 metros", 50, 720, 0.90, "Cargadores", '../img/productos/cable-cargador-2mt-USB.jpg', 0)


const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9]








for (let i=0; i < carts.length; i++){
    carts[i].addEventListener("click", () => {
        cartNumbers(productos[i]);
        costoTotalCarrito(productos[i])
    })
}

function onLoadCartNumbers(){

    let productNumbers = localStorage.getItem("cartNumbers")
    if (productNumbers){
        document.querySelector(".icono-carrito span").textContent = productNumbers;

    }

}



function cartNumbers(producto) {
    
    let productNumbers = localStorage.getItem("cartNumbers")
    
    productNumbers = parseInt(productNumbers)

    if (productNumbers){

        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector(".icono-carrito span").textContent = productNumbers + 1;
    } else { 
        localStorage.setItem("cartNumbers", 1);
        document.querySelector(".icono-carrito span").textContent = 1;
    }
    
    setItems(producto);

          
}

function setItems(producto){
    let itemsCarrito = localStorage.getItem("productosEnCarrito")
    itemsCarrito = JSON.parse(itemsCarrito)

    if(itemsCarrito != null){

        if(itemsCarrito[producto.id] == undefined){
            itemsCarrito = {
                ...itemsCarrito, [producto.id]: producto
            }
        }
        itemsCarrito[producto.id].enCarrito += 1
    } else{
        producto.enCarrito = 1

        itemsCarrito = {
        [producto.id]: producto
        }

    }

   

    

    
    localStorage.setItem("productosEnCarrito", JSON.stringify(itemsCarrito) )
}

function costoTotalCarrito(producto) {
    console.log("El costo del productos es", producto.precio);
    let costoCarrito = localStorage.getItem("costoTotalCarrito")
    
    console.log("el costo del carrito es", costoCarrito)

    if(costoCarrito != null){
        costoCarrito = parseInt(costoCarrito)
        localStorage.setItem("costoTotalCarrito", costoCarrito + producto.precio)

    } else {
        localStorage.setItem("costoTotalCarrito", producto.precio)
    }

    

}


onLoadCartNumbers();

