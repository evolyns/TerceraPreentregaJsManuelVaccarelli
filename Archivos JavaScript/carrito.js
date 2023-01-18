const obtenerSube = ( clave ) => {
    return JSON.parse(localStorage.getItem("carrito"))
}
console.log(JSON.parse(localStorage.getItem("carrito")))

 let carrito = obtenerSube("carrito")
console.log(carrito)

function memesCarrito  ( array ) {
    const nodos = array.reduce(( acc, element ) => {
        return acc + ` 
        <div> <img src = ${element.img}>   </div>
        <div class=" card card-carrito" id="card-${element.id}">                   
        <h2>
        ${element}
        </h2>    
        <h3>
        ${element.precio}
        </h3>    
        <button class="boton-carrito" id="borrar-${element.id}">Quitar</button>     
            </div>     
            `
    }, "")
return nodos

    
}
const contenedorCarrito = document.querySelector(".contieneAlCarrito")
    contenedorCarrito.innerHTML = memesCarrito(obtenerSube(carrito))

    const editarCarrito = () => {
        const elementoCarrito = document.querySelectorAll(".card-carrito")
        for (let i = 0; i < elementoCarrito.length; i++){
            elementoCarrito[i].onclick = () => {
                const recortar = elementoCarrito[i].id.slice(5)            
                const filtrar = carrito.filter( (filtrado, index) => {
                    return filtrado.id != recortar
                })
                console.log(filtrar)
                carrito = filtrar
                localStorage.setItem("carrito", JSON.stringify(carrito)) 
                contenedorCarrito.innerHTML = memesCarrito(carrito)    
                editarCarrito()      
            }
        }
    }
    
    editarCarrito()