
function Producto (nombreProducto, stockProducto, precioProducto, descuentoProducto, categoriaProducto){
    this.nombre = nombreProducto;
    this.stock = stockProducto;
    this.precio = precioProducto;
    this.descuento = descuentoProducto;
    this.categoria = categoriaProducto

    // this.venta = function(cantidadComprada){
    //     this.stock -= cantidadComprada
    //     console.log("El stock del producto " + this.nombre + " es de " + this.stock)
    // }
}

let contador = 0


const producto1 = new Producto("Carcasa Silicona Iphone 12 Mini - Blue Navy", 50, 1099, 0.80, "Carcasas")
const producto2 = new Producto("Carcasa Silicona Iphone SE 2020 - Yellow", 50, 990, 0.80, "Carcasas")
const producto3 = new Producto("Cascasa Silicona Iphone X - Sandia", 50, 880, 0.80, "Carcasas")
const producto4 = new Producto("Auriculares Iphone Lightning conector", 50, 710, 0.85, "Auriculares")
const producto5 = new Producto("AirPods (2nd generation)", 50, 5540, 0.95, "Auriculares")
const producto6 = new Producto("Vidrio templado Iphone 11", 50, 190, 1, "Vidrios")
const producto7 = new Producto("Adaptador 20W entrada USB-C", 50, 1100, 0.90, "Cargadores")
const producto8 = new Producto("Cable cargador USB-C a Lightning de 1 metro", 50, 650, 0.90, "Cargadores")
const producto9 = new Producto("Cable cargador USB a Lightning de 2 metros", 50, 720, 0.90, "Cargadores")


const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9]



for (const producto of productos){
    let contenedor = document.createElement("div");

    contenedor.innerHTML = 
     `<h3> Producto: ${producto.nombre}</h3>
                            <p> Precio: ${producto.precio}</p>
                            <button>Agregar</button>`;
    
    document.body.prepend(contenedor);

    
}
    
//     // Constructor
//     function Item(name, price, count) {
//       this.name = name;
//       this.price = price;
//       this.count = count;
//     }
    
//     // Save cart
//     function guardarCarrito() {
//       sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
//     }
    
//       // Load cart
//     function loadCart() {
//       cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
//     }
//     if (sessionStorage.getItem("shoppingCart") != null) {
//       loadCart();
//     }
    
  
//     // =============================
//     // Propiedades
//     // =============================
//     let obj = {};
    
//     // Add to cart
//     obj.addItemToCart = function(name, price, count) {
//       for(var item in cart) {
//         if(cart[item].name === name) {
//           cart[item].count ++;
//           guardarCarrito();
//           return;
//         }
//       }
//       var item = new Item(name, price, count);
//       cart.push(item);
//       guardarCarrito();
//     }
//     // Set count from item
//     obj.setCountForItem = function(name, count) {
//       for(var i in cart) {
//         if (cart[i].name === name) {
//           cart[i].count = count;
//           break;
//         }
//       }
//     };
//     // Remove item from cart
//     obj.removeItemFromCart = function(name) {
//         for(var item in cart) {
//           if(cart[item].name === name) {
//             cart[item].count --;
//             if(cart[item].count === 0) {
//               cart.splice(item, 1);
//             }
//             break;
//           }
//       }
//       guardarCarrito();
//     }
  
//     // Remove all items from cart
//     obj.removeItemFromCartAll = function(name) {
//       for(var item in cart) {
//         if(cart[item].name === name) {
//           cart.splice(item, 1);
//           break;
//         }
//       }
//       guardarCarrito();
//     }
  
//     // Clear cart
//     obj.clearCart = function() {
//       cart = [];
//       guardarCarrito();
//     }
  
//     // Count cart 
//     obj.totalCount = function() {
//       var totalCount = 0;
//       for(var item in cart) {
//         totalCount += cart[item].count;
//       }
//       return totalCount;
//     }
  
//     // Total cart
//     obj.totalCart = function() {
//       var totalCart = 0;
//       for(var item in cart) {
//         totalCart += cart[item].price * cart[item].count;
//       }
//       return Number(totalCart.toFixed(2));
//     }
  
//     // List cart
//     obj.listCart = function() {
//       var cartCopy = [];
//       for(i in cart) {
//         item = cart[i];
//         itemCopy = {};
//         for(p in item) {
//           itemCopy[p] = item[p];
  
//         }
//         itemCopy.total = Number(item.price * item.count).toFixed(2);
//         cartCopy.push(itemCopy)
//       }
//       return cartCopy;
//     }
  
//     // cart : Array
//     // Item : Object/Class
//     // addItemToCart : Function
//     // removeItemFromCart : Function
//     // removeItemFromCartAll : Function
//     // clearCart : Function
//     // countCart : Function
//     // totalCart : Function
//     // listCart : Function
//     // guardarCarrito : Function
//     // loadCart : Function
//     return obj;
//   })();
  
  
//   // *****************************************
//   // Eventos
//   // ***************************************** 
//   // Add item
//   $('.add-to-cart').click(function(event) {
//     event.preventDefault();
//     var name = $(this).data('name');
//     var price = Number($(this).data('price'));
//     shoppingCart.addItemToCart(name, price, 1);
//     displayCart();
//   });
  
//   // Clear items
//   $('.clear-cart').click(function() {
//     shoppingCart.clearCart();
//     displayCart();
//   });
  
  
//   function displayCart() {
//     var cartArray = shoppingCart.listCart();
//     var output = "";
//     for(var i in cartArray) {
//       output += "<tr>"
//         + "<td>" + cartArray[i].name + "</td>" 
//         + "<td>(" + cartArray[i].price + ")</td>"
//         + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
//         + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
//         + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
//         + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
//         + " = " 
//         + "<td>" + cartArray[i].total + "</td>" 
//         +  "</tr>";
//     }
//     $('.show-cart').html(output);
//     $('.total-cart').html(shoppingCart.totalCart());
//     $('.total-count').html(shoppingCart.totalCount());
//   }
  
//   // Delete item button
  
//   $('.show-cart').on("click", ".delete-item", function(event) {
//     var name = $(this).data('name')
//     shoppingCart.removeItemFromCartAll(name);
//     displayCart();
//   })
  
  
//   // -1
//   $('.show-cart').on("click", ".minus-item", function(event) {
//     var name = $(this).data('name')
//     shoppingCart.removeItemFromCart(name);
//     displayCart();
//   })
//   // +1
//   $('.show-cart').on("click", ".plus-item", function(event) {
//     var name = $(this).data('name')
//     shoppingCart.addItemToCart(name);
//     displayCart();
//   })
  
//   // Item count input
//   $('.show-cart').on("change", ".item-count", function(event) {
//      var name = $(this).data('name');
//      var count = Number($(this).val());
//     shoppingCart.setCountForItem(name, count);
//     displayCart();
//   });
  
//   displayCart();
  