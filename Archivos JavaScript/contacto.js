// MOSTRAMOS OFERTAS 
let mostramosOertas = memes.filter(function(asd) {
    return asd.oferta === true;
    
} ) 

// SUBE LA IMG
const contenedorIMGSubida = [{
    lalala: "asd"
}]

function imgSube () {
    console.log("asd")
}
function dale (){
    const laImgSubida = document.querySelector(".imgSubida")
    laImgSubida.forEach(img => {
        img.onclick=imgSube(() => {
            imgSube() 
            
        })
        
    });

}
dale()
console.log(contenedorIMGSubida)

        console.log(mostramosOertas)