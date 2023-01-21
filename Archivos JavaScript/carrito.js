const obtenerSube = (clave) => {
  return JSON.parse(localStorage.getItem("carrito"));
};
console.log(JSON.parse(localStorage.getItem("carrito")));

let carrito = obtenerSube("carrito");
console.log(carrito);

function memesCarrito(array) {
  const nodos = array.reduce((acc, element) => {
    return (
      acc +
      ` 
        <div class=" col-md-3  imagenMemeEnCarrito" > <img src = ${element.img} class=" w-100"  >   
        <div class=" text-danger "  id="card-${element.id}">                   
        <h2>
        ${element.name}
        </h2>    
        <h3>
        ${element.precio}
        </h3>    
        <button class="card-carrito" id="borrar-${element.id}">Quitar</button>     
        </div>     
        </div>
        `
    );
  }, "");
  return nodos;
}
const contenedorCarrito = document.querySelector(".contieneAlCarrito");
contenedorCarrito.innerHTML = memesCarrito(obtenerSube(carrito));

const editarCarrito = () => {
  const elementoCarrito = document.querySelectorAll(".card-carrito");
  for (let i = 0; i < elementoCarrito.length; i++) {
    elementoCarrito[i].onclick = () => {
      const recortar = elementoCarrito[i].id.slice(7);
      const filtrar = carrito.filter((filtrado, index) => {
        return filtrado.id != recortar;
      });
      console.log(filtrar);
      carrito = filtrar;
      localStorage.setItem("carrito", JSON.stringify(carrito));
      contenedorCarrito.innerHTML = memesCarrito(carrito);
      editarCarrito();
    };
  }
};

editarCarrito();
