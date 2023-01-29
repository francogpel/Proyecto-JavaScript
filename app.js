


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
    
    function producto(nombre,precio,stock,categoria,codigo)   {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.categoria = categoria
        this.codigo = codigo
    }
    // FORMULARIO DE CARGA
    let capturarNombre = document.getElementById("nombre").value;
    let capturarPrecio = document.getElementById ("precio").value;
    let capturarStock = document.getElementById("stock").value;
    let capturarCategoria = document.getElementById("categoria").value;
    let capturarCodigo = document.getElementById("codigo").value;
    

    nuevoProducto = new producto(capturarNombre, parseFloat(capturarPrecio), parseInt(capturarStock), capturarCategoria, capturarCodigo)
    console.log(nuevoProducto)
    cargarProducto();

   
}



// ARRAY - DOM
const dataBase = []

function traerProductosLocalStorage()   {
    dataBase = JSON.parse(localStorage.getItem("producto"))
}

function cargarProducto()   {
    dataBase.push(nuevoProducto)
    console.log(dataBase)
    document.getElementById("tabla").innerHTML += '<tbody><td>'+ nuevoProducto.nombre +'</td><td>'+ "$" + nuevoProducto.precio +'</td><td>'+ nuevoProducto.stock +'</td><td>'+ nuevoProducto.categoria +'</td><td>'+ nuevoProducto.codigo +'</td></tbody>'

   localStorage.setItem("producto",JSON.stringify(dataBase));
}
// BOTON DE CARGA
const carga = document.getElementById("botonCargar")

// EVENTOS

const casilleros = document.getElementById("categoria")

carga.addEventListener("click", cargar)

let clickCargar = "click"
carga.addEventListener(clickCargar, cargar)

casilleros.addEventListener("click", () => {
    casilleros.style.backgroundColor = "#B9F3FC"
})


//  (BUSCAR PRODUCTOS)

     // FORMULARIO DE BUSQUEDA
     let buscarNombre = document.getElementById("buscarNombre").value;
     let buscarCodigo = document.getElementById("buscarCodigo").value;
     // BOTON DE BUSQUEDA
     const botonBuscar = document.getElementById("botonBuscar")

     

    botonBuscar.addEventListener("click", buscarProductos)

    function buscarProductos()
        {
            let porNombre = buscarNombre;
            let elProducto = buscarProducto(porNombre)
            if(elProducto != undefined)
            {
               
                     document.getElementById("tabla2").innerHTML += '<tbody><td>'+ elProducto.nombre +'</td><td>' + "$" + elProducto.precio +'</td><td>'+ elProducto.stock +'</td><td>'+ elProducto.categoria +'</td><td>'+ elProducto.codigo +'</td></tbody>'
               
            }
            else    {
                    alert("Producto no encontrado")
                }  
        }

function buscarProducto(porNombre)  {
          return dataBase.find((elProducto) => {
            return elProducto.capturarNombre == porNombre;
          })
}

