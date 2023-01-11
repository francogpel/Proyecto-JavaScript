


// VARIABLES
let producto
let unidades
let valor
let sumaTotal
let descuentos
let abonar
const IVA = 0.21
let reiniciar = producto

function saludo()   {
    let inicio = "BIENVENIDO, COMENCEMOS TU PRESUPUESTO!!!"
    alert(inicio)
}

saludo()

// VALORES
while(reiniciar != 0)    {
    
producto = prompt("Ingrese el nombre del producto a presupuestar")
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
    alert(" Aplicando impuestos (IVA)")
}

abonar = sumaTotal + descuentos
if (abonar == sumaTotal + descuentos) {
    alert(" El total a abonar es de: $" + abonar)
}
   
    alert(" Presupuesto finalizado ")
    reiniciar = prompt(" Ingrese 0 para visualizar los detalles del presupuesto \n Ingrese 1 para presupuestar otro producto" )
}

// DETALLES
document.write("<br> TU PRESUPUESTO")
document.write("<br> Producto: " + producto)
document.write("<br> Unidades: " + unidades)
document.write("<br> Precio unitario: $" + valor)
document.write("<br> Total $" + sumaTotal)
document.write("<br> IVA:+$" + descuentos)
document.write("<br> El total a abonar es de: $" + abonar)



// FUNCION CONSTRUCTORA (PRODUCTOS)
// function product(nombre,precio,stock)   {
//     this.nombre = nombre
//     this.precio = precio
//     this.stock = stock
// }

// PRODUCTOS
// let producto1 = new product("coca-cola 1L",400,10)
// let producto2 = new product("fernet branca 450ml",950,5)
// let producto3 = new product("sprite 2.25L",650,10)

