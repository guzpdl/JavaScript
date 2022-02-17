let precioCarcasa = 1000
let precioAuricular = 2000
let precioCargador = 3000
let producto1 = 0;
let producto2 = 0;

let userName = prompt("ingrese su nombre")

let siOno = prompt(`Hola ${userName}. Desesas comprar accesorios de celular?`)

if (siOno == "si") {
    var respuesta1= prompt("Las opciones que tenemos son las siguientes : 1) carcasa. 2) auricular. 3) cargador")

    switch (respuesta1) {
        case "carcasa":
            alert(`Agregaste una ${respuesta1} valor $${precioCarcasa} al carrito`)
            producto1 = precioCarcasa
            break;
        case "auricular":
        alert(`Agregaste un ${respuesta1} valor $${precioAuricular} al carrito`)
            producto1 = precioAuricular
            break;
        case "cargador":
        alert(`Agregaste un ${respuesta1} valor $${precioCargador} al carrito`)
            producto1 = precioCargador
            break;
        default:
            alert("no tenemos ese producto")
            break;
    }
    
    let comprarOtroProducto = prompt("Desea comprar otro producto?")

    if (comprarOtroProducto == "si") {
        var respuesta2= prompt("Las opciones que tenemos son las siguientes : 1) carcasa. 2) auricular. 3) cargador")
        switch (respuesta2) {
            case "carcasa":
                alert(`Agregaste una ${respuesta2} valor $${precioCarcasa} al carrito`)
                producto2 = precioCarcasa
                break;
            case "auricular":
                alert(`Agregaste un ${respuesta2} valor $${precioAuricular} al carrito`)
                producto2 = precioAuricular
                break;
            case "cargador":
                alert(`Agregaste un ${respuesta2} valor $${precioCargador} al carrito`)
                producto2 = precioCargador
                break;
            default:
                alert("no tenemos ese producto")
                break;
        }
    } 

}else {
    alert(`Muchas gracias, saludos`)
}

let productosCarrito = `${respuesta1} y ${respuesta2}`
let totalCarrito = producto1 + producto2
alert(`El total de tu compra es de $ ${totalCarrito}. Corresponde a ${productosCarrito}`)