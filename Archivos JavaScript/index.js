// EMPIEZA CARROUSEL 

const swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
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

const ofertass = document.querySelector(".ofertas")


//   }
//   ( meme => meme.oferta === true );
// return 
//   `  <h4>
//   asd  dsa ${memes.name} + esdad ${memes.edad}
//   </h4>
  
//   `
  ofertass.innerHTML= mostramoOfertas
  console.log(mostramoOfertas)
// }

mostrarOfertas(memes)


