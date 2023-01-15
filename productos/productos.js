// FUNCION CONSTRUCTORA (PRODUCTOS)

class productos   {
     // atributos
    nombre; 
    precio;
    categoria;
    stock;

    constructor(nombre,precio,categoria,stock)   {
    this.nombre = nombre
    this.precio = precio
    this.categoria = categoria
    this.stock = stock


}
}

const DEPOSITO = []

// PRODUCTOS
DEPOSITO.push(new productos("coca-cola 1L",400,"bebidas",10))
DEPOSITO.push(new productos("fernet branca 450ml",950,"bebidas",5))
DEPOSITO.push(new productos("sprite 2.25L",650,"bebidas",10))

DEPOSITO.push(new productos("malboro 10",350,"cigarrillos",15))
DEPOSITO.push(new productos("phillip 10",370,"cigarrillos",5))
DEPOSITO.push(new productos("parliament",500,"cigarrillos",10))


// FILTER
const arrayFilter = DEPOSITO.filter((productos) => productos.categoria === "bebidas")

arrayFilter.forEach((productos) => console.log(productos))