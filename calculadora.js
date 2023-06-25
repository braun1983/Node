const prompt = require('prompt-sync')();

function entraNumero() {
    console.log ("Calculadora");

    var operacao = prompt('Que operação deseja fazer? (*, /, +, -): ');
    if (operacao =="*" || operacao=="/" || operacao == "+"|| operacao== "-"){
    var num1 = parseInt(prompt('Digite o primeiro ncelarúmero: '));
    var num2 = parseInt(prompt('Digite o segundo número: '));
    checaOperacao(operacao, num1, num2);

} else{
    console.log ("Operação Inválida!");
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
            console.log('Operação inválida:');
    }
}

function pergunta (){
    const pergunta = prompt("Deseja continuar? (S/N)");

    if (pergunta.toLowerCase()==='s'){
        entraNumero();
    }else{
        console.log('Programa finalizado')
    }

}

entraNumero();
pergunta();

