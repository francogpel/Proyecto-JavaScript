class item  {
    // atributos
    producto;
    cantidad;

    constructor(producto, cantidad) {
        this.producto = producto
        this.cantidad = cantidad
    }

    TOTAL() {
        return this.cantidad * this.producto.precio
    }
}