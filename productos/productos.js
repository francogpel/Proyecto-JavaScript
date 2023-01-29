// FUNCION CONSTRUCTORA (PRODUCTOS)

class productos  {
     // atributos
    nombre; 
    precio;
    categoria;
    stock;
    codigo;

    constructor(nombre,precio,stock,categoria,codigo)   {
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
    this.categoria = categoria
    this.codigo = codigo

}
}

// const DEPOSITO = []

// // PRODUCTOS
// DEPOSITO.push(new productos("coca-cola 1L",400,10,"bebidas","00000001"))
// DEPOSITO.push(new productos("fernet branca 450ml",950,5,"bebidas","00000002"))
// DEPOSITO.push(new productos("sprite 2.25L",650,10,"bebidas","00000003"))

// DEPOSITO.push(new productos("malboro 10",350,15,"cigarrillos","00000004"))
// DEPOSITO.push(new productos("phillip 10",370,5,"cigarrillos","00000005"))
// DEPOSITO.push(new productos("parliament",500,10,"cigarrillos","00000006"))


// // FILTER
// const arrayFilter = DEPOSITO.filter((productos) => productos.categoria === "bebidas")

// arrayFilter.forEach((productos) => console.log(productos))



