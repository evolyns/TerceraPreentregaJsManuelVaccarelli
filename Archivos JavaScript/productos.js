const memes = [{
    "id":1,
    "name" :"del expresi" ,
    "edad": "16+",
    "hashtag":"politicos",
  "img": "https://i.pinimg.com/originals/17/86/38/1786384b0cf766483a57b19bfc44789a.jpg",
    "precio": 150,
    "oferta": true,
  },
  {
    "id":2,
    "name" :"ronaldo" ,
    "edad": "16+",
    "hashtag":"futbol",
  "img": "https://scontent.faep8-1.fna.fbcdn.net/v/t39.30808-6/311864806_591579729319548_7834394980903977996_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEWL-SM87oipD7-AVKnhGKcyNbQrbJvVYDI1tCtsm9VgJIqSGyZxNDjHB-W5lY2fz09P9q-ZrdEt8-lINjC_EHJ&_nc_ohc=PuavvoPEJ6UAX8AVOpv&_nc_ht=scontent.faep8-1.fna&oh=00_AfBCDKFh2Nq5YTKzk_InWBlx4xFVpim6OVDpQgdFUFpsIA&oe=63BDE7D7",
    "precio": 150,
    "oferta": true,
  }, 
  {
    "id":3,
    "name" :"puede que no sea muy listo" ,
    "edad": "16+",
    "hashtag":"forest",
  "img": "https://scontent.faep8-1.fna.fbcdn.net/v/t39.30808-6/311521513_3414476482114379_8360658833246704240_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGyTEnh-YCDWtS7hE_5SmrpijAJcV_rsUSKMAlxX-uxRCshAqMG6biBng-VkrMWe8uWsbghWVNhMaLX0SEMGGT-&_nc_ohc=TFxuwj4qMkEAX_qX7IB&_nc_ht=scontent.faep8-1.fna&oh=00_AfAPthTmXKOIk3m4LUSXaQcUcPZiP5b3Vmlv1rtVtDz-ug&oe=63BE185B",
    "precio": 150,
    "oferta": true,
  },
  {"id":4,
    "name" :" Fue el pollo" ,
    "edad": "16+",
    "hashtag":"Animales",
  "img": "https://scontent.faep8-3.fna.fbcdn.net/v/t39.30808-6/312659918_523542923115316_7376322183286623953_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH_MrS43r4DnmyZEiXabkRXhP3fn9XnGLSE_d-f1ecYtEUeDl4oVLiD8G3H5SmZsJuC1xxXl_9yWCJk1mLeEJc4&_nc_ohc=D1z4GV1pXfwAX_e6Cem&_nc_ht=scontent.faep8-3.fna&oh=00_AfAKKatDNlChgT0VRJK2A_1hZLLpxunL6NXOPtH0cfGQkg&oe=63BEF932",
    "precio": 200,
    "oferta": false,
  }, 
   {"id":5,
  "name" :" Fue el pollo" ,
  "edad": "16+",
  "hashtag":"Animales",
"img": "https://scontent.faep8-1.fna.fbcdn.net/v/t39.30808-6/311437685_795918228188266_8587131830243345305_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5cd70e&_nc_eui2=AeEaj7WFW_HqKlcVncvbQMvTKIKaGvcBzCQogpoa9wHMJFAcObjUKHq5dPDU9jbgeB7d4ylmjL4UfYl4noEYBoNm&_nc_ohc=SRtDOj45ZmgAX9LWp5m&_nc_ht=scontent.faep8-1.fna&oh=00_AfBVM5EMTd9wu6VF1ExcmxACpDESdGFazQrBSImx8bfX-Q&oe=63BDD73B",
  "precio": 200,
  "oferta": false,
},
  {
    "id":6,
    "name" :"fastidio" ,
    "edad": "12+",
    "hashtag":"fastidio",
  "img": "https://scontent.faep8-1.fna.fbcdn.net/v/t39.30808-6/311595007_3406940172868010_8247396082135684936_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFQZchqHxmeCuNCOPhbLDnyYGs2IndHsjFgazYid0eyMdqbvoklgSDkWnfTxwM6ZVF1HJBXblNwm5F8PfktLmYz&_nc_ohc=qhgqIO-_QgsAX_w-Db-&_nc_ht=scontent.faep8-1.fna&oh=00_AfAoEVSR-FJDk_pyzko22Jm-EoGjqnlVUgu053X6hPf3Wg&oe=63BD83CD",
    "precio": 150,
    "oferta": true,
  }]

  let carrito = []

  function memeshtml  ( array ) {
    const contenedor = document.querySelector(".contenedor")
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

    
    contenedor.innerHTML = nodos
}

memeshtml(memes)

// FUNCIONES 

const pusheamos = ( array, value) =>{
    array.push(value)
}

const sube = (clave, valor ) => {
    return localStorage.setItem (clave, JSON.stringify(valor))
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
            const recortarId = boton.id.slice(5)
            const producto = buscarMeme(recortarId, memes)
            pusheamos(carrito, producto)
            sube("carrito", carrito)
            console.log(recortarId)
            console.log(carrito)
        }
    })
}
agregarAlCarrito()
const carritoActualizado = obtenerSube("carrito") || []
carrito = carritoActualizado