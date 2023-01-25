// localStorage.clear()





/////////////////////////////////////////////////////////////////////////////////////////
// MODO OSCURO 
function enableDarkMode (){

    let cuerpo = document.body;
    const fondoTarjeta = document.querySelectorAll(".fondoTarjeta")
            cuerpo.classList.toggle("botonModoOscuro");
            fondoTarjeta.classList.toggle("fondoTarjeta");
        }
/////////////////////////////////////////////////////////////////////////////////////////








let carrito = []

/////////////////////////////////////////////////////////////////////////////////////////
// MOSTRAMOS MEMES A LA VENTA 

const contenedor = document.querySelector(".contenedor")
function memeshtml  ( array ) {
    const nodos = array.reduce(( acc, memes ) => {
        return acc + `
         
        <div class=" card col-md-6 p-2 text-dark " style ="width:20rem">       
            <div class="container-img  ">
                <img width="400" height =" 400" src=${memes.img} alt=${memes.name}  class="   card-img-bottom" >
                </div>
                <div class"card-body" >
                <h2 class=" card-title">
                ${memes.name}
                </h2>
                <h3 class=" card-subtitle" >
                Precio: ${memes.precio}
                </h3>
                <h3>
                categoria: ${memes.edad}
                </h3>  
                </div>
                <div> 
                <button class="botonComprar" id="button-${memes.id}"  > Añadir al carrito </button>
                </div>
            </div>     
            `
        }, "")
        return nodos
        
        
    }
    contenedor.innerHTML = memeshtml(memes)
    console.log(memes)
    
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

const agregarAlCarrito =() => {
    const botonesComprarMemes = document.querySelectorAll(".botonComprar")
    botonesComprarMemes.forEach(boton => {
        boton.onclick =() =>{
            const recortarId = boton.id.slice(7)
            console.log(recortarId)
            const producto = buscarMeme(recortarId,memes)
            pusheamos(carrito, producto)
            sube("carrito", carrito)
            console.log(carrito)
        }
    })
}
agregarAlCarrito()


const carritoActualizado = JSON.parse(localstorage.getItem("carrito")) || [] 
carrito = carritoActualizado


/////////////////////////////////////////////////////////////////////////////////////////
