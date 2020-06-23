altura = window.innerHeight;
largura = window.innerWidth;

document.getElementById("img-div").style.backgroundImage = "url(https://source.unsplash.com/" + largura + "x" + altura +")";

bomSquare = document.getElementById("bom")

function updateSizes(){
    bomInfo = `<p>height: ${window.innerHeight}<br> width: ${window.innerWidth}</p>`
    bomInfo += `<p> history: ${window.history.length}</p>`
    bomInfo += `<p> screen width: ${window.screen.width} <br> screen height: ${window.screen.height}</p>`

    bomSquare.innerHTML = bomInfo;
}

updateSizes()
/*
    numeroAleatorio = (Math.floor(Math.random() * 9));
    letrasRepositorio = ['A', 'B', 'C', 'D', 'E', 'F', 'A', 'B', 'C'];
    
    letraAleatoria = letrasRepositorio[numeroAleatorio]
    //random color in hexadecimal
    corAleatoria = `#${numeroAleatorio}${letraAleatoria}${numeroAleatorio}${letraAleatoria}${letraAleatoria}${numeroAleatorio}`
    
    console.log(corAleatoria)
    document.getElementById("random-background").style.backgroundColor = corAleatoria;
*/


