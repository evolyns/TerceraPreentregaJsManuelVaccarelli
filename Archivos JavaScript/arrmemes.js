





//  const memes = [{
//   "id":1,
//   "name" :"del expresi" ,
//   "edad": "16+",
//   "hashtag":"politicos",
// "img": "https://i.pinimg.com/originals/17/86/38/1786384b0cf766483a57b19bfc44789a.jpg",
//   "precio": 150,
//   "oferta": true,
// },
// {
//   "id":2,
//   "name" :"ronaldo" ,
//   "edad": "16+",
//   "hashtag":"futbol",
//   "img": "https://scontent.feze7-1.fna.fbcdn.net/v/t1.6435-9/165718975_287810109413522_6749314127021214609_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEm5TLAhfIuaJNtRSj1KDlJl7oT8QslOp2XuhPxCyU6ncy-S6GqsRYb9Zacj6nZaz-BTFslhPwj4gjn8snLRBGE&_nc_ohc=ybTsGROtyd0AX9_APIJ&_nc_ht=scontent.feze7-1.fna&oh=00_AfDgQM-TsDxokjtQGEPaQ_TOM74stG-XfelyTA5O0yJ8Fg&oe=63FA68AE",
//   "precio": 150,
//   "oferta": true,
// }, 
// {
//   "id":3,
//   "name" :"puede que no sea muy listo" ,
//   "edad": "16+",
//   "hashtag":"forest",
//   "img": "https://scontent.feze7-1.fna.fbcdn.net/v/t39.30808-6/326281858_730882005433768_1024985781349623922_n.jpg?stp=dst-jpg_p180x540&_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFwXUc82_J98ghaHdDAgDuWwrxDKAbR4V_CvEMoBtHhX4CHagZcmBanwuUZmlSmdGorazYNs51Z7BTmUGT-CQJQ&_nc_ohc=P04PphPErBMAX90ftBu&tn=FiSlzwz7lxGRnOUM&_nc_ht=scontent.feze7-1.fna&oh=00_AfBc6Z30SAWgUYeCTPnd8NjsXvJSO4GEzXlOKpvtVWpB9w&oe=63D79004",
//   "precio": 150,
//   "oferta": true,
// },
// {"id":4,
//   "name" :" Fue el pollo" ,
//   "edad": "16+",
//   "hashtag":"Animales",
//   "img": "https://i.pinimg.com/originals/17/86/38/1786384b0cf766483a57b19bfc44789a.jpg",
//   "precio": 200,
//   "oferta": false,
// }, 
//  {"id":5,
// "name" :" Fue el pollo" ,
// "edad": "16+",
// "hashtag":"Animales",
// "img": "https://scontent.feze7-1.fna.fbcdn.net/v/t39.30808-6/324748607_3347385725589952_1060085291412718204_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGxhBCsOnyOtUfRC6kO64oO8WKfuMEJHELxYp-4wQkcQmHlq1EgAcUqZSuC1x9PEWsNBulJF2SVUjKgRNf1-mjE&_nc_ohc=Dst0GeJDB_MAX-2lrJH&tn=FiSlzwz7lxGRnOUM&_nc_ht=scontent.feze7-1.fna&oh=00_AfDEGQG0viuow-0rSAauv5IRpOCip1OXAjyHSEh8EBLQdQ&oe=63D7E53E",
// "precio": 200,
// "oferta": false,
// },
// {
//   "id":6,
//   "name" :"fastidio" ,
//   "edad": "12+",
//   "hashtag":"fastidio",
// "img": "https://i.pinimg.com/originals/17/86/38/1786384b0cf766483a57b19bfc44789a.jpg",
//   "precio": 150,
//   "oferta": true,
// }]
// let carrito = []


// // export default memes 
const mostrarTotal = document.querySelector(".mostrarTotal")
let total =  0
function precioTotal () {
obtenerSube(carrito).forEach(element => {
    total = element.precio + total
    console.log(total)
    
  });
  mostrarTotal.innerHTML = ` Monto Total $  ${total} `
}