// EMPIEZA CARROUSEL 

// const swiper = new Swiper(".mySwiper", {
//     effect: "cube",
//     grabCursor: true,
//     cubeEffect: {
//       shadow: true,
//       slideShadows: true,
//       shadowOffset: 20,
//       shadowScale: 0.94,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//     },
//   });
//   TERMINA CARROUSEL 
// EL TITULO
// const cubo = document.querySelector(".atrodenCubo")
// const nodoCubo = `
// <div class="text-center mt-5  " > 
// <h1 class="h1">
// Argen Meme Land
// </h1>
// <h4 class="mt-2 mb-3" >
//  Memes de calidad al mejor precio
// </h4> 
// </div>
// `
// cubo.innerHTML = nodoCubo
// OFERTAS



const contenedor = document.querySelector(".contengoMemes")
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
  contenedor.innerHTML = memeshtml(memes)
// console.log(memes)