//const { Swal } = require("../../clase14/sweetalert2.all.min");

let carrito = [] ///aqui iran los items del carrito
let stock = [] ///aqui iran los productos

////traerme los elementos del dom
const tabla = document.getElementById('items');
const selectProductos = document.getElementById('productos')
const btnAgregar = document.getElementById('agregar');
const btnDescuento = document.getElementById('btnDescuento');
const btnOrdenar = document.getElementById('ordenar');
const btnVaciar = document.getElementById('vaciar');
const total = document.getElementById('total');


///ejecutar una vez para cargar el localStorage con stock

stock.push(new Producto('cafe', 600));
stock.push(new Producto('te', 400));
stock.push(new Producto('medialuna', 80));
stock.push(new Producto('tostado',1000));
stock.push(new Producto('licuado de fruta', 850));
stock.push(new Producto('jugo de naranja', 500));
stock.push(new Producto('pinta', 750));
stock.push(new Producto('dona', 200));
stock.push(new Producto('cookie', 250));
stock.push(new Producto('scon',150));

localStorage.setItem('stock',stock);
 



allEventListeners();


function allEventListeners()
{
  ////agregamos un escuchador del evento cuando el DOM se carga
  window.addEventListener('DOMContentLoaded', traerItems);

  btnVaciar.addEventListener('click', vaciarCarrito);

  ///event listener de agregar un producto al carrito
  btnAgregar.addEventListener('submit', (e) =>
  {
    e.preventDefault(); ///evito el refresque
    const productoSelected = stock[selectProductos.value];
    ///me fijo si el item ya fue insertado en el carrito
    if (carrito.find((item) => {return item.producto.nombre === productoSelected.nombre}) === undefined)
    {
      const nuevoItem = new Item(productoSelected,1);
      carrito.push(nuevoItem);
      localStorage.setItem('carrito',JSON.stringify(carrito)); ///actualizo el localstorage con el nuevo elemento agregado
      newRow(nuevoItem);
    }

  });

}


function popularDropdown()
{
  ///cargamos el dropdown
  stock.forEach((producto) => {
    const option = document.createElement('option');
    option.innerText = `${producto.nombre} : ${producto.precio}`;
    option.value = stock.indexOf(producto); ///con esto nos guiamos para saber que objeto del array selecciona! 
    selectProductos.appendChild(option);
  });
}


function traerItems()
{
  ///traer los productos del localStorage
  ///si no hay nada inicializara stock en vacio []
  stock = JSON.parse(localStorage.getItem('stock')) || []
  popularDropdown();
  carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  actualizarTablaCarrito();  

}


/* ///guardo el array en el localStorage
localStorage.setItem('stock',JSON.stringify(stock)); */


function actualizarTablaCarrito()
{
  tabla.innerHTML = '';
  total.innerText = 0;
  carrito.forEach((item) => {
    newRow(item);
  });
}



function newRow(item)
{
  const row = document.createElement('tr'); ///creo la fila
  let td = document.createElement('td');
  const posCarrito = carrito.indexOf(item);
  td.textContent = item.producto.nombre;
  row.appendChild(td);
  
  td = document.createElement('td');
  td.textContent = item.cantidad;
  row.appendChild(td);

  const incrementar = document.createElement('button');
  incrementar.className = 'btn btn-primary';
  incrementar.innerText = '+';


  const descontar = document.createElement('button');
  descontar.className = 'btn btn-primary';
  descontar.innerText = '-';
  
  ///agregamos los eventlisteners a los botones recien creados
  incrementar.onclick = () => {
      carrito[posCarrito].cantidad++;
      actualizarTablaCarrito();
      localStorage.setItem('carrito',JSON.stringify(carrito));
  }

  descontar.onclick = () => {
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

  td.appendChild(incrementar);
  td.appendChild(descontar);
  row.appendChild(td);



  td = document.createElement('td');
  td.textContent = item.producto.precio;

  row.appendChild(td);


  const btnEliminar = document.createElement('button');
  btnEliminar.className = 'btn btn-danger';
  btnEliminar.innerText = 'Eliminar';

  btnEliminar.onclick = () => 
  {
      carrito.splice(posCarrito,1); //posicion y cantidad de elementos
      actualizarTablaCarrito();
      localStorage.setItem('carrito',JSON.stringify(carrito));
  }

  td = document.createElement('td')
  td.appendChild(btnEliminar);
  row.appendChild(td);
  tabla.appendChild(row); ///le agrego al tbody una nueva fila

  ///calculo el total que tengo ahora
  
  total.innerText = carrito.reduce((acumulador,item) => acumulador + item.producto.precio * item.cantidad,0);
}




function vaciarCarrito()
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
      localStorage.setItem('carrito',JSON.stringify(carrito));
      actualizarTablaCarrito();
      Swal.fire(
        {
          title: "Carrito vaciado!",
          icon: "success"
        }
      );
    }
 })
}



/* 
  faltaria -> ordenar el carrito (sort del array y actualizar tabla)
           -> aplicar un descuento al total del carrito

*/