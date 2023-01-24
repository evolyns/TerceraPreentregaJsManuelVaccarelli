let mostramosOertas = memes.filter(function(asd) {
    return asd.oferta === true;
    
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

