


// VARIABLES
let producto
let unidades
let valor
let sumaTotal
let descuentos
let abonar
const porcentajeDescontado = 0.30
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

descuentos = sumaTotal * porcentajeDescontado
if(descuentos == sumaTotal * porcentajeDescontado)  {
    alert(" Aplicando un descuento del 30%.")
}

abonar = sumaTotal - descuentos
if (abonar == sumaTotal - descuentos) {
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
document.write("<br> Descuento del 30%:-$" + descuentos)
document.write("<br> El total a abonar es de: $" + abonar)

