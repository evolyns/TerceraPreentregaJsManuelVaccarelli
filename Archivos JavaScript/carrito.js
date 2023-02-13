

// INICIO NAV 
const barraNav = document.querySelector(".barraNav")
barraNav.innerHTML = ` <div class="container-fluid  ">
<div class="collapse  navbar-collapse d-flex  justify-content-between  " id="navbarSupportedContent">
  <ul class="navbar-nav  mb-2 mb-lg-0  ">
    <li class="nav-item   ">
      <a class="nav-link text-white " href="index.html"><h2>Home</h2></a>
    </li>
    <li class="nav-item">
      <a class="nav-link  text-white " href="productos.html"> <h2>Productos</h2></a>
    </li>
    <li class="nav-item">
      <a class="nav-link  text-white" href="carrito.html"><h2>Carrito</h2></a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-white " href="contacto.html"><h2>Contacto</h2></a>
    </li>
  </ul>
  <div class=" ml" > MODO
  <input type="checkbox"   class=" m-5">
  </div>
</div>
</div> `
// FIN NAV 
/////////////////////////////////////////////////////////////////////////////////

// INICIO TITULO CARRITO 
const tituloCarrito = document.querySelector(".tituloCarrito")
tituloCarrito.innerHTML = `
<div class="col-md-12" >
<h1> Carrito de compras 
</h1>
<h3> Aqui podras visualizar todos los memes elegidos para la compra </h3>
</div>
`
// FIN TITULO CARRITO 

/////////////////////////////////////////////////////////////////////////////////

// INICIO MODO OSCURO 
const revisaElLocal = ( ) =>{
  const m = localStorage.getItem("modo"),
        isNull = !m;
  if (isNull) {
    localInsert("modo", "claro" )
  }
};

let cuerpo = document.body;
cuerpo.onload = () => {
cuerpo.classList.add("botonModoClaro");

const botonModo = document.querySelector("input[type='checkbox']"),
   modoAlmacenado = localStorage.getItem("modo");
   console.log(modoAlmacenado)
 if( ! modoAlmacenado){
    localInsert("modo","claro")
    
   } 
  if(modoAlmacenado === "oscuro"){
    cuerpo.classList.replace("botonModoClaro","botonModoOscuro")
    botonModo.checked = true

  }

botonModo.onclick = (e) => {
  cuerpo.classList.replace(
    e.target.checked ? "botonModoClaro" : "botonModoOscuro",
    e.target.checked ? "botonModoOscuro" : "botonModoClaro"
  )
localInsert ("modo",(e.target.checked ? "oscuro" : "claro" ) )
}
}


    

const localInsert = (clave, valor) => {
localStorage.setItem(clave, valor);
console.log(localStorage)
};

// FIN MODO OSCURO 

/////////////////////////////////////////////////////////////////////////////////////////

function obtenerSube(clave) {
  return JSON.parse(localStorage.getItem("carrito"));
}
console.log(JSON.parse(localStorage.getItem("carrito")));

let carrito = obtenerSube("carrito");
console.log(carrito);
/////////////////////////
const contenedorBloqueDeTodoElCarrito = document.querySelector(".contieneAlCarritoModoVacio")
let contieneCarritoBooleano = false;

if (  carrito != undefined){
  contieneCarritoBooleano = true;
}
function empiezaElCarrito (){
  
  if (contieneCarritoBooleano){
    contenedorBloqueDeTodoElCarrito.classList.remove("contieneAlCarritoModoVacio")
    console.log(contenedorBloqueDeTodoElCarrito)
    contenedorBloqueDeTodoElCarrito.classList.add(".contieneAlCarritoModoLleno")
  }
  
}
/////////////////////////


function memesCarrito(array) {

  const nodos = array.reduce((acc, memes) => {
    return (
      acc +
      ` 
      <div class=" card cardRelleno  col-lg-3 col-md-3  bordeCard p-2  m-4 mt-3 " style ="width:20rem">       
      <div class="container-img    ">
          <img width="300" height =" 300" src=${memes.img} alt=${memes.name}  class="   card-img-bottom" >
          </div>
          <div class="cardFondoTexto" >
          <div class"card-body  " >
          
          <h2 class=" card-title cardPrecio ">
          Precio: ${memes.precio}
          </h2>
          
          <h3 class="card-subtitle" > + <span class="cardCategoria">${memes.edad}</span>
           </h3>
          
          <h3 >#<span class="cardHastahg ">${memes.hashtag}</span>  
          </h3>

          </div>
          </div>
          <div> 
          <button class="card-carrito  btnBorrar" id="borrar-${memes.id}">Quitar</button>   
          </div>
      </div>
        `
    );
  }, "");
empiezaElCarrito()

  return nodos;
}
const contenedorCarrito = document.querySelector(".contieneAlCarrito");
contenedorCarrito.innerHTML = memesCarrito(obtenerSube(carrito));


const editarCarrito = () => {
  const elementoCarrito = document.querySelectorAll(".card-carrito");
  for (let i = 0; i < elementoCarrito.length; i++) {
    elementoCarrito[i].onclick = () => {
      const recortar = elementoCarrito[i].id.slice(7);
      console.log(recortar)
      const filtrar = carrito.filter((filtrado, index) => {
        return filtrado.id != recortar;
      });
      console.log(filtrar);
      carrito = filtrar;
      localStorage.setItem("carrito", JSON.stringify(carrito));
      contenedorCarrito.innerHTML = memesCarrito(carrito);
      editarCarrito();
    };
  }
};

editarCarrito();

// COMPRAR Y BORRRAR CARRITO 
let logueado = localStorage.getItem("logueado")
function comprarCarrito (){
  if ( logueado){

    Toastify({
      text: "This is a toast",
      className: "info",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
        innerHeight: "200px"
      }
    }).showToast();
    localStorage.removeItem("carrito");
    carrito = [];
    contenedorCarrito.innerHTML = ` `
    precioTotal ()
    contieneCarritoBooleano = false;
  }
  else if (!logueado){
   window.location.href="logeo.html"
  }
    console.log(logueado)
}
function borrarCarrito (){
  localStorage.clear();
  carrito = [];
  contenedorCarrito.innerHTML = ` `
  precioTotal ()
  contieneCarritoBooleano = false;
}
  



// MOSTRAR PRECIO TOTAL 
const mostrarTotal = document.querySelector(".mostrarTotal")
let total =  0
function precioTotal () {
  if( total == 0){
console.log("asd")
    obtenerSube(carrito).forEach(element => {
        total = element.precio + total
        console.log(total)
        
      });
      mostrarTotal.innerHTML = ` Monto Total $  ${total} `
    }
    else {
      mostrarTotal.innerHTML = ` Monto Total $  0 `

    }
}
precioTotal ()
