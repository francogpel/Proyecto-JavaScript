


// VARIABLES
const fecha = new Date ()
let producto
let unidades
let valor
let sumaTotal
let descuentos
let abonar
const IVA = 0.21
let reiniciar = producto

function saludo()   {
    let inicio = "BIENVENIDO!!!"
    alert(inicio)
}

saludo()

// VALORES
while(reiniciar != 0)    {
    
producto = prompt("Ingrese el nombre del producto a facturar")
if (producto == "" )  {
    alert("No ingreso el producto")
}
else {
    alert(" El producto ingresado es: " + producto)
}

unidades = prompt("Ingrese la cantidad de unidades")
if (unidades == "" )  {
    alert("No ingreso la cantidad")
}
else {
    alert(" La cantidad de unidades ingresada es: " + unidades)
}

valor = prompt(" Ingrese el valor del producto")
if (unidades == "" )  {
    alert("No ingreso ningun valor")
}
else {
    alert(" El valor del producto ingresado es: $" + valor)
}

sumaTotal = unidades * valor
if (sumaTotal == unidades * valor)  {
    alert(" La suma total de " + unidades + " unidades es: $" + sumaTotal)
}

descuentos = sumaTotal * IVA
if(descuentos == sumaTotal * IVA)  {
    // alert(" Aplicando impuestos (IVA)")
}

abonar = sumaTotal + descuentos
if (abonar == sumaTotal + descuentos) {
    alert(" TOTAL (+ IVA) : $" + abonar)

}
    reiniciar = prompt(" FACTURACION FINALIZADA \n Ingrese 0 para visualizar los detalles de la factura \n Ingrese 1 para facturar otro producto" )
}


// DETALLES
document.write("<br> DETALLES")
document.write("<br> fecha: " + fecha.toLocaleString())
document.write("<br> Producto: " + producto)
document.write("<br> Unidades: " + unidades)
document.write("<br> Precio unitario: $" + valor)
document.write("<br> Suma total $" + sumaTotal)
document.write("<br> IVA:+$" + descuentos)
document.write("<br> Total: $" + abonar)

// (CARGAR PRODUCTOS)

function cargar() {
    
    function producto(nombre,precio,stock,categoria)   {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.categoria = categoria
        
    }
    let capturarNombre = document.getElementById("nombre").value;
    let capturarPrecio = document.getElementById("precio").value;
    let capturarStock = document.getElementById("stock").value;
    let capturarCategoria = document.getElementById("categoria").value;
    
    nuevoProducto = new producto(capturarNombre, capturarPrecio, capturarStock, capturarCategoria)
    console.log(nuevoProducto)
    cargarProducto();
}

// ARRAY 
const dataBase = []
function cargarProducto()   {
    dataBase.push(nuevoProducto)
    console.log(dataBase)
    document.getElementById("tabla").innerHTML += '<tbody><td>'+ nuevoProducto.nombre +'</td><td>'+ "$" + nuevoProducto.precio +'</td><td>'+ nuevoProducto.stock +'</td><td>'+ nuevoProducto.categoria +'</td></tbody>'
}

