
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


 botonCargar.addEventListener("click", cargar )
 let clickCargar = "click"
 botonCargar.addEventListener(clickCargar, cargar)



    // guardar productos en el localStorage
localStorage.setItem("productos",JSON.stringify(DEPOSITO));


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
    // actualizarTablaDeposito()

}


function actualizarTablaCarrito()  {
    tabla.innerHTML = "";
    TOTAL.innerText = 0;
     carrito.forEach((item) =>   {
         newRow(item);

     });
}



// FUNCION MOSTRAR PRODUCTOS EN CARRITO (SECUNDARIA)

function cargarCarrito()    {
    const productSeleccionado = new item(selectProducto.value)
    console.log(productSeleccionado)
    cargarCarritoTabla()

    function cargarCarritoTabla()   {
        carrito.push(productSeleccionado)
        console.log(carrito)
        document.getElementById("items").innerHTML += '<tbody id=items><td>'+ productSeleccionado.nombre +'</td><td>'+ "$" + productSeleccionado.precio +'</td><td>'+ productSeleccionado.cantidad +'</td><td>'+ "X" +'</td></tbody>'
    
        localStorage.setItem("Carrito",JSON.stringify(carrito));
        
    }
}
botonBuscar.addEventListener("click", cargarCarrito )
let clickBusca = "click"
botonBuscar.addEventListener(clickBusca, cargarCarrito)

localStorage.setItem("Carrito",JSON.stringify(carrito));



// botonBuscar.addEventListener('submit', (e) =>
// {
//   e.preventDefault(); ///no refresh
//   const productoSeleccionado = DEPOSITO[selectProducto.value];
//   if (carrito.find((item) => {return item.producto.nombre === productoSeleccionado.nombre}) === undefined)
//   {
//     const nuevoItem = new item(productoSeleccionado,1);
//     carrito.push(nuevoItem);
//     localStorage.setItem('Carrito',JSON.stringify(carrito)); 
//     newRow(nuevoItem);
//   }

// });


//  function newRow(item)   {
//       const fila = document.createElement("tr");
//       let td = document.createElement('td');
//       const posCarrito = carrito.indexOf(item);

//       td.textContent = item.producto.nombre;
//       fila.appendChild(td);

//       td = document.createElement('td');
//       td.textContent = item.producto.precio;
//       fila.appendChild(td);

//       td = document.createElement('td');
//       td.textContent = item.cantidad;
//       fila.appendChild(td);
//      masUidades.onclick = () => {
//          carrito[posCarrito].cantidad++;
//          actualizarTablaCarrito();
//          localStorage.setItem('carrito',JSON.stringify(carrito));
//      }

//      menosUidades.onclick = () => {
//          if (carrito[posCarrito].cantidad > 1)
//          {
//              carrito[posCarrito].cantidad--;
//          }
//          else
//          {
//            carrito.splice(posCarrito,1);
//          }
//           actualizarTablaCarrito();
//          localStorage.setItem("carrito",JSON.stringify(carrito));
//      }

//      td.appendChild(masUidades);
//      td.appendChild(menosUidades);
    

//      td = document.createElement("td");
//      td.textContent = item.producto.precio;

//     fila.appendChild(td);

//      const botonQuitar = document.createElement("button");
//      botonQuitar.className = "btn btn-danger";
//      botonQuitar.innerText = "Eliminar";
  
//      botonQuitar.onclick = () => 
//      {
//          carrito.splice(posCarrito,1);
//          actualizarTablaCarrito();
//          localStorage.setItem("Carrito",JSON.stringify(carrito));
//      }
    
//      td = document.createElement("td")
//      td.appendChild(botonQuitar);
//      fila.appendChild(td);
//      tabla.appendChild(fila);

//      TOTAL.innerText = carrito.reduce((acumulador,item) => acumulador + item.producto.precio * item.cantidad,0);

//  }



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



