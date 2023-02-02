let carrito = [];

fetch("../Archivos JavaScript/memes.json")
.then(res => res.json())
.then(data => {
  console.log(data.memes)
  contenedor.innerHTML = memeshtml(data.memes)
  agregarAlCarrito(data.memes);


})

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
/////////////////////////////////////////////////////////////////////////////////////////

const tituloProductos = document.querySelector(".tituloProductos")
tituloProductos.innerHTML = ` 
<div class=" container  mt-5 ">
♥ para que no tape al contacto ♥
</div>
<div class=" container tituloContactoStyle   w-50 mt-5 ">
<div class =" row    " >
<div class=" col-md-12  d-flex justify-content-center   ">
<h1 class=" fs-1 text-center " > Aqui encontraras los mejores memes </h1>

</div>

</div>  
</div>`

/////////////////////////////////////////////////////////////////////////////////////////


// MODO OSCURO 
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


/////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////


// MOSTRAMOS MEMES A LA VENTA 

const contenedor = document.querySelector(".contenedor")
function memeshtml  ( array ) {
    const nodos = array.reduce(( acc, memes ) => {
        return acc + `
         
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
                <button class="botonComprar botonComprarHome  " id="button-${memes.id}"  > Añadir al carrito </button>
                </div>
            </div>
            `
        }, "")
        return nodos
        
        
    }
    
/////////////////////////////////////////////////////////////////////////////////////////
 

/////////////////////////////////////////////////////////////////////////////////////////

// FUNCIONES 

const sube = (clave, valor ) => {
    return localStorage.setItem (clave, JSON.stringify(valor))
}
const pusheamos = ( array, value) =>{
    array.push(value)
}



const buscarMeme = ( producto, array) => {
    return array.find( product => {
        return product.id === Number(producto)
    })
}

const obtenerSube = ( clave ) => {
    return JSON.parse(localStorage.getItem(clave))
}
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////

// COMPRAMOS MEMES

const agregarAlCarrito = (memes) => {
    const botonesComprarMemes = document.querySelectorAll(".botonComprar");
    botonesComprarMemes.forEach((boton) => {
      boton.onclick = () => {
        console.log("atroden")
        const devolverCarrito = localStorage.getItem("carrito");
        if (devolverCarrito != null ){
            carrito = JSON.parse(devolverCarrito)
        }
        const recortarId = boton.id.slice(7);
        console.log(recortarId)
        const producto = buscarMeme(recortarId, memes);
        if (producto.agregado != true) {
            producto.agregado = true;
        pusheamos(carrito, producto);
        sube("carrito", carrito);
        Toastify({
          text: "Agregado al carrito",
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "bottom", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: false, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to top,  #000000  , #2D2D2D )",
          },
          onClick: function(){} // Callback after click
        }).showToast();
        
        }
      };
    });
  };
  agregarAlCarrito();

// carrito = carritoActualizado


/////////////////////////////////////////////////////////////////////////////////////////

