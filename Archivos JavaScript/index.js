let carrito = [];

const tituloIndex = document.querySelector(".tituloIndex");
tituloIndex.innerHTML = ` 
<div class="col-md-12"> 
<h1>Argen Meme Land </h1> 
</div> 
<div class="col-md-12"> 
<h2> Los mejores memes</h2>
</div>
`;
/////////////////////////////////////////////////////////////////////////////////
// let mostramosOertas = memes.filter(function (oferta) {
//   return oferta.oferta === true;
// });

const contenedorOfertas = document.querySelector(".ofertas");
function ofertas(array) {
  const nodos = array.reduce((acc, memes) => {
    return (
      acc +
      `
         
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
    );
  }, "");
  return nodos;
}

// contenedorOfertas.innerHTML = ofertas(mostramosOertas);

/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////

// FUNCIONES

const sube = (clave, valor) => {
  return localStorage.setItem(clave, JSON.stringify(valor));
};
const pusheamos = (array, value) => {
  array.push(value);
};

const buscarMeme = (producto, array) => {
  return array.find((product) => {
    return product.id === Number(producto);
  });
};

const obtenerSube = (clave) => {
  return JSON.parse(localStorage.getItem(clave));
};
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////

// COMPRAMOS MEMES

const agregarAlCarrito = (memes) => {
  const botonesComprarMemes = document.querySelectorAll(".botonComprar");
  botonesComprarMemes.forEach((boton) => {
    boton.onclick = () => {
      const devolverCarrito = localStorage.getItem("carrito");
      console.log(devolverCarrito);

      if (devolverCarrito != null) {
        carrito = JSON.parse(devolverCarrito);
      }
      const recortarId = boton.id.slice(7);
      const producto = buscarMeme(recortarId, memes);
      if (producto.agregado === false ) {
        producto.agregado = true;
        pusheamos(carrito, producto);
        sube("carrito", carrito);
      }
    };
  });
};
agregarAlCarrito();

// carrito = carritoActualizado
/////////////////////////////////////////////////////////////////////////////////////////
function filtrarData(arr) {
  let mostramosOertas = arr.filter(function (oferta) {
    return oferta.oferta === true;
  });
  return mostramosOertas;
}
fetch("../Archivos JavaScript/memes.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.memes);
    const ofertasMemes = filtrarData(data.memes);
    contenedorOfertas.innerHTML = ofertas(ofertasMemes);
    agregarAlCarrito(data.memes);
  });
