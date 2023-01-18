localStorage.clear()

  let carrito = []

  const contenedor = document.querySelector(".contenedor")
  function memeshtml  ( array ) {
    const nodos = array.reduce(( acc, memes ) => {
        return acc + ` 
        <div class="card  border-3 text-center  ">       
            <div class="container-img  ">
                <img src=${memes.img} alt=${memes.name} width="550" height="550" class="" >
            </div>
            <h2>
                ${memes.name}
            </h2>
            <h3>
                Precio: ${memes.precio}
            </h3>
            <h3>
                categoria: ${memes.edad}
            </h3>  
            <div> 
            <button class="botonComprar" id="button-${memes.id}"  > Añadir al carrito </button>
            </div>
        </div>     
        `
    }, "")
    return nodos

    
}
console.log(memes)
contenedor.innerHTML = memeshtml(memes)


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

const carritoActualizado = obtenerSube("carrito") || []
carrito = carritoActualizado