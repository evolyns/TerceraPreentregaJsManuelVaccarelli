const contacto = document.querySelector(".contacto")
const tituloContacto = document.querySelector(".tituloContacto")
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

tituloContacto.innerHTML = `
<div class=" container  mt-5 ">
♥ para que no tape al contacto ♥
</div>
<div class=" container tituloContactoStyle   w-50 mt-5 ">
<div class =" row    " >
<div class=" col-md-12  d-flex justify-content-center   ">
<h1 class=" fs-1" > Contacto</h1>

</div>

</div>  
</div>
`
function inicioContacto () {

contacto.innerHTML = `
    <div class="container contactoForm w-50 ">
<div class="row  contacto d-flex justify-content-center recuadroRow ">
<div class="col-md-6 w-100 ">
        <div class="mb-3">
            <label for="nombre" class="form-label ">Nombre  (obligatorio) </label>
            <input type="email" class="form-control  cntLetrasContenedor  " id="nombre" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Direccion de email (obligatorio)</label>
            <input type="email" class="form-control tieneArroba "  id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
              <label for="Asunto" class="form-label">Asunto</label>
                <input type="text" class="form-control cntLetrasContenedorAsunto" id="Asunto" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text"></div>
                </div>
                <div class="mb-3">
                <label for="mensaje" class="form-label">Mensaje</label>
                <input type="email"   class="form-control mensajeContacto " id="mensaje" aria-describedby="emailHelp">
                </div>
                </div>
                <div class="row d-flex justify-content-center">
                <div class="col-md-2 d-flex justify-content-center ">
                <input type="submit"  value="Enviar"  onclick= validarFormulario(event) >
                </div>
                </div> 
        </div>
        </div>
        `
    }
    inicioContacto ()

    const pieDePagina = document.querySelector(".pieDePagina")
    pieDePagina.innerHTML = `
    <section class="d-flex justify-content-center footer  justify-content-lg-between p-4 ">
    <div class="me-5 d-none d-lg-block ">
      <span>La mejor pagina de memes</span>
    </div>
</section>
    
    `
/////////////////////////////////////////////////////////////////////////////////
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

let primeraValidacion = false
let segundaValidacion = false
let TerceraValidacion = false



const cntLetrasContenedor = document.querySelector(".cntLetrasContenedor")
function validarcntLetrasNombre (){
    const cntLetras  = cntLetrasContenedor.value
    if (cntLetras.length <= 2 || cntLetras.indexOf("@") != -1 || cntLetras.length >25 ){
        alert("debes ingresar un nombre valido")
 cntLetrasContenedor.value = ""
        }
    else{
        primeraValidacion = true
    }
    }


    const tieneArroba = document.querySelector(".tieneArroba")
function validarArroba () {
    const validamosArroba = tieneArroba.value
    if (validamosArroba.indexOf("@") === -1 )  {
        if (validamosArroba.length < 7 || validamosArroba.length >= 7  ){
            console.log( validamosArroba.indexOf("@"))
            alert("mail no valido")
        }
        
    }
    if (validamosArroba.indexOf("@") != -1 )  {
        if (validamosArroba.length < 7  ){
            console.log( validamosArroba.indexOf("@"))
            alert("mail no  valido")
            }
    }
    if (validamosArroba.indexOf("@") != -1 )  {
        if (validamosArroba.length > 7 ){
            console.log( validamosArroba.indexOf("@"))
            }
            segundaValidacion = true
        }
    else{
        console.log( validamosArroba.indexOf("@"))
        }
    
}

const cntLetrasContenedorAsunto = document.querySelector(".cntLetrasContenedorAsunto")
function validarAsunto (){
    const validamosAsunto = cntLetrasContenedorAsunto.value
console.log(validamosAsunto)
if (validamosAsunto.length <= 2 ){
    alert("El asunto tiene que tener al menos 2 caracteres")
    cntLetrasContenedorAsunto.value = `  ` 
    
}
if (validamosAsunto.length >25){
    alert("el asunto no puede superar un maximo de 25 caracteres")
    cntLetrasContenedorAsunto.value = `  ` 

}
else {
    TerceraValidacion = true
}
}

function validarFormulario (event ){
    event.preventDefault()
 validarcntLetrasNombre ()
 validarArroba ()   
validarAsunto ()
if ( primeraValidacion === true && segundaValidacion === true && TerceraValidacion === true ){

    alert("Gracias por escribirnos.")
    cntLetrasContenedor.value = `  `
    tieneArroba.value = ` ` 
cntLetrasContenedorAsunto.value = ` `
}
}