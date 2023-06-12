var cateto_adjacente = document.querySelector("#cateto__adjacente")
var angulo = document.querySelector("#angulo")

var btn = doc

function calcula_tangente(graus){
    var radianos= graus *(Math.PI/180)
    var tangente =Math.tan(radianos)
    var cateto_oposto = tangente*cateto_adjacente
    console.log(cateto_oposto)
}

calcula_tangente(angulo)