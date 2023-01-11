// FUNCION CONSTRUCTORA (PRODUCTOS)

class bebidas   {
    constructor(nombre,precio,stock)   {
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}
}

// PRODUCTOS
let producto1 = new bebidas("coca-cola 1L",400,10)
let producto2 = new bebidas("fernet branca 450ml",950,5)
let producto3 = new bebidas("sprite 2.25L",650,10)

console.log(producto1)