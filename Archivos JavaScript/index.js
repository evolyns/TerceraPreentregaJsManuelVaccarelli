const tituloIndex = document.querySelector(".tituloIndex")
tituloIndex.innerHTML = ` 
<div class="col-md-12"> 
<h1>Argen Meme Land </h1> 
</div> 
<div class="col-md-12"> 
<h2> Los mejores memes</h2>
</div>
`
/////////////////////////////////////////////////////////////////////////////////
let mostramosOertas = memes.filter(function(oferta) {
    return oferta.oferta === true;
    
} ) 

const contenedorOfertas = document.querySelector(".ofertas")
function ofertas  ( array ) {
    const nodos = array.reduce(( acc, ofertas ) => {
        return acc + ` 
        
        <div class=" p-2 m-4   col-md-3 text-center rounded ">       
        <h2 class="  text-bg-light text-dark rounded w-100 h-0  " >
            ${ofertas.name}
            </h2>
            <div class="  ">
                <img width="400" height =" 400" src=${ofertas.img} alt=${ofertas.name} class="w-100 rounded " >
                </div  >
                <h3>
                Precio: ${ofertas.precio}
            </h3>
            <h3>
            categoria: ${ofertas.edad}
            </h3>  
            <div class="botonComprar  d-flex justify-content-end " > 
            <button class="botonComprar" id="button-${ofertas.id}"  > Añadir al carrito </button>
            </div>     
            </div>
            `
        }, "")
        return nodos
        
        
    }
    contenedorOfertas.innerHTML = ofertas(mostramosOertas)
    console.log(memes)

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