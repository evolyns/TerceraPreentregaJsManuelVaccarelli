// INICIO NAV 
const barraNav = document.querySelector(".barraNav")
barraNav.innerHTML = ` <div class="container-fluid  ">
<div class="collapse  navbar-collapse d-flex  justify-content-between  " id="navbarSupportedContent">
  <ul class="navbar-nav  mb-2 mb-lg-0  ">
    <li class="nav-item   ">
      <a class="nav-link text-white " href="index.html"><h2>Home</h2></a>
    </li>
  </ul>
</div>
</div> `
// FIN NAV 
/////////////////////////////////////////////////////////////////////////////////
const ingreso = document.querySelector(".ingreso")
const nombreLogeo = document.querySelector(".nombreLogeado")
const passwordLogeo = document.querySelector(".passwordLogeado")
console.log(nombreLogeo && passwordLogeo)
// ingreso.innerHTML = `

// <div class="text-center" >
// <h1> Logeate para poder comprar memes  </h1>
// </div>
//     <div class="container mb-5 contactoForm w-50 ">
// <div class="row  contacto d-flex justify-content-center recuadroRow ">
// <div class="col-md-4 w-100 ">
// <label for="nombre" class=" form-label ">Usuario
// <div class="mb-1 nombreLogeado ">
// <input type="text" class="  form-control  nombre " id="nombre" aria-describedby="usuario">
// </div>
// <label for="inputPassword" class="col-sm-2 col-form-label  ">Password</label>
// <div class="col-md-4">
// </label>
            
// <input type="password" class="form-control passwordLogeado inputPassword " id="inputPassword"> 
//  </div>
            
            
            
//             <div class="mt-2" >
//             <button onclick="logearse(event)" > Ingresar  </button>
//             </div>
              
//         </div>
//         </div>
//         `;

        
const valorNombre = nombreLogeo.value
let valorPassword = passwordLogeo.value
function logearse (event) {
    event.preventDefault()
    if (
        nombreLogeo.value === "laranaolga" &&
        passwordLogeo.value === "celular"
        ) {
            localStorage.setItem("logueado" , true)
            window.location.href = "carrito.html";
        }
        // localStorage.getItem("logueado")
        // if (localStorage.key("logueado") === true) {
        // }
        // console.log("asd")   
        }


