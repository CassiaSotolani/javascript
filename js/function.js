function calcularMedia(valor1, valor2) {
    var media = (valor1 + valor2) / 2;
    return media;
}
console.log(calcularMedia(9, 6));

// podemos atribuir uma function a uma variável, dessa forma a variável se torna a function
function saudacao() {
    var saudacao = 'Olá, mundo!';
    return saudacao;
}
var s = saudacao;
console.log(s);

// function anonima
var soma = function(n1, n2) {
    return n1 + n2;
}
console.log(soma(2, 6));

// arrow function
var soma = (n1, n2) => {
    return n1 + n2;
}
console.log(soma(20, 6));