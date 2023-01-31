let carrito = []
let DEPOSITO = []

// ELEMENTOS DEL FORMULARIO 1 (carga)
const cargarNombre = document.getElementById("nombre");
const cargarPrecio = document.getElementById ("precio");
const cargarStock = document.getElementById("stock");
const cargarCategoria = document.getElementById("categoria");
const cargarCodigo = document.getElementById("codigo");
// boton de carga
const botonCargar = document.getElementById("botonCargar")
// tabla 1
const tablaCarga = document.getElementById("tabla-1");

// ELEMENTOS DEL FORMULARIO 2 (busqueda)
const selectProducto = document.getElementById("selectProducto")
const buscarCodigo = document.getElementById("buscarCodigo");
// boton de busqueda
const botonBuscar = document.getElementById("botonBuscar");
// tabla-2
const tablaBusca = document.getElementById("tabla-2");
// tbody
const tabla = document.getElementById("items")
// total
const TOTAL = document.getElementById("total")


// CARGA DE PRODUCTOS
DEPOSITO.push(new producto("coca-cola 1L",400,10,"bebidas","00000001"))
DEPOSITO.push(new producto("Fernet branca",1200,5,"bebidas","00000002"))
DEPOSITO.push(new producto("sprite 2.25L",600,20,"bebidas","00000003"))
DEPOSITO.push(new producto("gancia",750,10,"bebidas","00000004"))

// productos nuevos
function cargar()
    {
     const nuevoProducto = new producto(cargarNombre.value, parseFloat(cargarPrecio.value), parseInt(cargarStock.value), cargarCategoria.value, cargarCodigo.value)
    console.log(nuevoProducto)
    cargarProducto();

  function cargarProducto()   {
     DEPOSITO.push(nuevoProducto)
     console.log(DEPOSITO)
     document.getElementById("tabla-1").innerHTML += '<tbody><td>'+ nuevoProducto.nombre +'</td><td>'+ "$" + nuevoProducto.precio +'</td><td>'+ nuevoProducto.stock +'</td><td>'+ nuevoProducto.categoria +'</td><td>'+ nuevoProducto.codigo +'</td></tbody>'
 
     localStorage.setItem("producto",JSON.stringify(DEPOSITO));
    }    
    }


 botonCargar.addEventListener("click", cargar )
 let clickCargar = "click"
 botonCargar.addEventListener(clickCargar, cargar)



    // guardar productos en el localStorage
localStorage.setItem("productos",JSON.stringify(DEPOSITO));




// BUSQUEDA DE PRODUCTOS

window.addEventListener("DOMContentLoaded", traerItemStock)

function popularDropdown()  {
        // mostrar productos en SELECT
        DEPOSITO.forEach((producto) => {
            const  option = document.createElement("option");
            option.innerText = `${producto.nombre}`;
            option.value = DEPOSITO.indexOf(producto)
            selectProducto.appendChild(option)
    
        });
}

function traerItemStock () {
    // traer los productos del localStorage
    DEPOSITO = JSON.parse(localStorage.getItem("productos")) || []
    popularDropdown()
    carrito = JSON.parse(localStorage.getItem("carrito")) || []
    actualizarTablaCarrito()
    

}

function actualizarTablaCarrito()  {
    tabla.innerHTML = "";
    TOTAL,innerText = 0;
    carrito.forEach((item) =>   {
        newRow(item);

    });
}

function newRow(item)   {
    const fila = document.createElement("tr")
    let td = document.createElement('td');
    const posCarrito = carrito.indexOf(item);

    td.textContent = item.producto.nombre;
    fila.appendChild(td);

    td.textContent = item.producto.precio;
    fila.appendChild(td);

    td.textContent = item.cantidad;
    fila.appendChild(td);

    const masUidades = document.createElement('button');
    masUidades.className = 'btn btn-primary';
    masUidades.innerText = '+';

    const menosUidades = document.createElement('button');
    menosUidades.className = 'btn btn-primary';
    menosUidades.innerText = '+';

    masUidades.onclick = () => {
        carrito[posCarrito].cantidad++;
        actualizarTablaCarrito();
        localStorage.setItem('carrito',JSON.stringify(carrito));
    }

    menosUidades.onclick = () => {
        if (carrito[posCarrito].cantidad > 1)
        {
            carrito[posCarrito].cantidad--;
        }
        else
        {
          carrito.splice(posCarrito,1);
        }
         actualizarTablaCarrito();
        localStorage.setItem('carrito',JSON.stringify(carrito));
    }
    td.appendChild(masUidades);
    td.appendChild(menosUidades);
    fila.appendChild(td);


    const botonQuitar = document.createElement('button');
    botonQuitar.className = 'btn btn-danger';
    botonQuitar.innerText = 'Eliminar';
  
    botonQuitar.onclick = () => 
    {
        carrito.splice(posCarrito,1);
        actualizarTablaCarrito();
        localStorage.setItem('carrito',JSON.stringify(carrito));
    }
    td = document.createElement('td')
    td.appendChild(botonQuitar);
    fila.appendChild(td);
    tabla.appendChild(fila);

    TOTAL.innerText = carrito.reduce((acumulador,item) => acumulador + item.producto.precio * item.cantidad,0);

}


// mostrar producto en tabla-2
botonBuscar.addEventListener('submit', (e) =>
{
  e.preventDefault(); ///no refresh
  const productoSeleccionado = stock[selectProducto.value];
  if (carrito.find((item) => {return item.producto.nombre === productoSeleccionado.nombre}) === undefined)
  {
    const nuevoItem = new item(productoSeleccionado,1);
    carrito.push(nuevoItem);
    localStorage.setItem('carrito',JSON.stringify(carrito)); 
    newRow(nuevoItem);
  }

});






