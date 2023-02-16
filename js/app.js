
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
// tabla producto tbody
const tablaDeposito = document.getElementById("prod")

// ELEMENTOS DEL FORMULARIO 2 (busqueda)
const selectProducto = document.getElementById("selectProducto")
const buscarCodigo = document.getElementById("buscarCodigo");
// boton de busqueda
const botonBuscar = document.getElementById("botonBuscar");
// boton de busqueda por codigo
const botonBuscar2 = document.getElementById("botonBuscar");
// tabla-2
const tablaBusca = document.getElementById("tabla-2");
// option
const prodSelec = document.getElementById("prodSeleccionado")
// boton vaciar
const btnVaciar = document.getElementById("vaciar");
// tbody
const tabla = document.getElementById("items")
// total
const TOTAL = document.getElementById("total")


// CARGA DE PRODUCTOS
// DEPOSITO.push(new producto("coca-cola 1L",400,10,"bebidas","00000001"))
// DEPOSITO.push(new producto("Fernet branca",1200,5,"bebidas","00000002"))
// DEPOSITO.push(new producto("sprite 2.25L",600,20,"bebidas","00000003"))
// DEPOSITO.push(new producto("gancia",750,10,"bebidas","00000004"))

// productos nuevos
function cargar()
    {
     const nuevoProducto = new producto(cargarNombre.value, parseFloat(cargarPrecio.value), parseInt(cargarStock.value), cargarCategoria.value, cargarCodigo.value)
    console.log(nuevoProducto)
    cargarProducto();

  function cargarProducto()   {
     DEPOSITO.push(nuevoProducto)
     console.log(DEPOSITO)
     document.getElementById("prod").innerHTML += '<tbody id=prod><td>'+ nuevoProducto.nombre +'</td><td>'+ "$" + nuevoProducto.precio +'</td><td>'+ nuevoProducto.stock +'</td><td>'+ nuevoProducto.categoria +'</td><td>'+ nuevoProducto.codigo +'</td></tbody>'
     document.getElementById("selectProducto").innerHTML += '<option id=prodSeleccionado>'+ nuevoProducto.nombre +'</option>'

     localStorage.setItem("productos",JSON.stringify(DEPOSITO));
    }    
    
    }


//  botonCargar.addEventListener("click", cargar )
 let clickCargar = "click"
 botonCargar.addEventListener(clickCargar, cargar)



// CARGAR PRODUCTOS DESDE EL LOCALSTORAGE
window.onload = function() {
  if (localStorage.getItem("productos")) {
    DEPOSITO = JSON.parse(localStorage.getItem("productos"));
    cargarTablaDeposito();
  }
};

// FUNCIÓN PARA CARGAR LA TABLA DEL DEPOSITO
function cargarTablaDeposito() {
  let tablaDepositoHTML = "";
  for (let i = 0; i < DEPOSITO.length; i++) {
    let producto = DEPOSITO[i];
    tablaDepositoHTML +=
      "<tr><td>" +
      producto.nombre +
      "</td><td>" +
      "$" +
      producto.precio +
      "</td><td>" +
      producto.stock +
      "</td><td>" +
      producto.categoria +
      "</td><td>" +
      producto.codigo +
      "</td></tr>";
  }
  tablaDeposito.innerHTML = tablaDepositoHTML;
}






// BOTON VACIAR STOCK
const vaciarStock = document.getElementById("vaciarStock")

vaciarStock.onclick = () =>
{
 Swal.fire(
  {
    title:`Esta a punto de eliminar todo el stock, continuar?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: "Confirmar",
    cancelButtonText: "Cancelar"
  }
 ).then( (result) => {
    if (result.value)
    {
      DEPOSITO = [];
      localStorage.setItem('productos',JSON.stringify(DEPOSITO));
      actualizarTablaDeposito();
      Swal.fire(
        {
          title: "Deposito vacio!",
          icon: "success"
        }
      );
    }
 })
}

function actualizarTablaDeposito()  {
    tablaDeposito.innerHTML = "";
    
}






// SELECCIONADO DE PRODUCTOS

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
    actualizarTablaDeposito()

}


function actualizarTablaCarrito()  {
    tabla.innerHTML = "";
    TOTAL.innerText = 0;
     carrito.forEach((item) =>   {
         newRow(item);

     });
}






// FUNCION MOSTRAR PRODUCTOS EN CARRITO 

document.getElementById("items").addEventListener("click", function(event) {
  if (event.target.id === "eliminarProducto") {
    const nombreProducto = event.target.parentNode.parentNode.firstChild.textContent;
    const indexProducto = carrito.findIndex(producto => producto.nombre === nombreProducto);
    carrito.splice(indexProducto, 1);
    event.target.parentNode.parentNode.remove();
    localStorage.setItem("Carrito", JSON.stringify(carrito));
  }
});


 carrito = JSON.parse(localStorage.getItem("Carrito")) || [];

class Item {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
  
  TOTAL() {
    return this.cantidad * this.producto.precio
}
}

function cargarCarrito() {
  const selectProducto = document.getElementById("selectProducto");
  const productoSeleccionado = new Item(selectProducto.value, selectProducto.dataset.precio, 1);

  const productoEnCarrito = carrito.find(producto => producto.nombre === productoSeleccionado.nombre);

  if (productoEnCarrito) {
    productoEnCarrito.precio;
    productoEnCarrito.cantidad++;
  } else {
    carrito.push(productoSeleccionado);
  }

  mostrarCarrito();
  guardarCarritoEnLocalStorage();
}

function mostrarCarrito() {
  const tablaItems = document.getElementById("items");
  tablaItems.innerHTML = "";

  carrito.forEach(producto => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${producto.nombre}</td>
      <td>$${producto.precio}</td>
      <td>${producto.cantidad}</td>
      <td><button class="btn btn-danger" data-producto="${producto.nombre}">Quitar</button></td>
    `;

    tablaItems.appendChild(fila);
  });
}

function guardarCarritoEnLocalStorage() {
  localStorage.setItem("Carrito", JSON.stringify(carrito));
}

function eliminarProductoDelCarrito(nombreProducto) {
  carrito = carrito.filter(producto => producto.nombre !== nombreProducto);
  mostrarCarrito();
  guardarCarritoEnLocalStorage();
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarCarrito();

  const botonBuscar = document.getElementById("botonBuscar");
  botonBuscar.addEventListener("click", cargarCarrito);

  const tablaItems = document.getElementById("items");
  tablaItems.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
      const nombreProducto = e.target.dataset.producto;
      eliminarProductoDelCarrito(nombreProducto);
    }
  });
});






// BOTON VACIAR CARRITO

btnVaciar.onclick = () =>
{
 Swal.fire(
  {
    title:`Esta a punto de vaciar el carrito, continuar?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: "Confirmar",
    cancelButtonText: "Cancelar"
  }
 ).then( (result) => {
    if (result.value)
    {
      carrito = [];
      localStorage.setItem('Carrito',JSON.stringify(carrito));
      actualizarTablaCarrito();
      Swal.fire(
        {
          title: "Carrito vacio!",
          icon: "success"
        }
      );
    }
 })
}






// API DE DIVISAS
// DOLAR OFI

fetch('https://api.exchangerate-api.com/v4/latest/USD?apikey=3f2a05c0d856fca32f2538da')
  .then(response => response.json())
  .then(data => {
    let rate = data.rates.ARS;
    document.getElementById('exchange-rate').innerHTML = `1 USD OFICIAL = $ ${rate} ARS`;
  })
  .catch(error => console.error(error));

  // DOLAR CRIPTO

  fetch('https://api.exchangerate-api.com/v4/latest/USD?apikey=3f2a05c0d856fca32f2538da')
  .then(response => response.json())
  .then(data => {
    let rate = data.rates.ARS;
    let blueRate = rate * 195 / 100; 
    document.getElementById('exchange-rate-blue').innerHTML = `1 USD BLUE = $ ${blueRate.toFixed(2)} ARS`;
  })
  .catch(error => console.error(error));



  // EURO

  fetch('https://api.exchangerate-api.com/v4/latest/EUR?apikey=3f2a05c0d856fca32f2538da')
  .then(response => response.json())
  .then(data => {
    let rate = data.rates.ARS;
    document.getElementById('exchange-rate-euro').innerHTML = `1 EUR = $ ${rate} ARS`;
  })
  .catch(error => console.error(error));

  // REAL

  fetch('https://api.exchangerate-api.com/v4/latest/BRL?apikey=3f2a05c0d856fca32f2538da')
  .then(response => response.json())
  .then(data => {
    let rate = data.rates.ARS;
    document.getElementById('exchange-rate-real').innerHTML = `1 REAL = $ ${rate} ARS`;
  })
  .catch(error => console.error(error));






