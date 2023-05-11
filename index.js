const prompt = require('prompt-sync')();
/* TODO: Checar operação antes de receber os números. */
function entraNumero() {
    console.log ("Calculadora");
    var operacao = prompt('Que operação deseja fazer? (*, /, +, -)');
    validacaoOperacao(operacao);
    var num1 = parseInt(prompt('Digite o primeiro número: '));
    var num2 = parseInt(prompt('Digite o segundo número: '));
    checaOperacao(operacao, num1, num2);
}

function validacaoOperacao(operacao){
 if (operacao !== "+" && operacao !== "-" && operacao !=="*" && operacao !=="/"){
 
 throw new Error("Operação Inválida!");
 }
 
}

function somar(num1, num2) {
    return num1 + num2;
}

function subtrair(num1, num2) {
    return num1 - num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function checaOperacao(operacao, num1, num2) {
    switch (operacao) {
        case '*':
            console.log(multiplicar(num1, num2));
            break;

        case '/':
            console.log(dividir(num1, num2));
            break;

        case '+':
            console.log(somar(num1, num2));
            break;

        case '-':
            console.log(subtrair(num1, num2));
            break;

        default:
            console.log('Operação inválida');
    }
}

function pergunta (){
    const pergunta = prompt("Deseja continuar? (S/N)");
    if (pergunta=='S' || pergunta=='s'){
        entraNumero();
    }else{
        console.log('Programa finalizado')
    }

}
entraNumero();
pergunta();

