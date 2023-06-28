
const btn = document.querySelector("#btn_calcula");
btn.addEventListener("click", calcula_tangente);

function calcula_tangente(){
    
    const cateto_adjacente = document.querySelector("#cateto__adjacente")
    const angulo = document.querySelector("#angulo")
    
    const graus = angulo.value
    const cat_adjacente = cateto_adjacente.value

    const radianos= graus *(Math.PI/180)
    const tangente =Math.tan(radianos)
    const cateto_oposto = tangente*cat_adjacente
        escreveResultado(cateto_oposto)
}

function escreveResultado(resultado){
    const resultado_saida = document.querySelector("#resultado")

    resultado_saida.value = resultado;

}