var nomes = [];
var nota1 = [];
var nota2 = [];

function calcularMedia(n1, n2) {
    var media = (n1 + n2) / 2;
    return media;
}

function resultado(media) {
    var resultado = '';
    if(media >= 7.0) {
        resultado = 'Aprovado';
    } else {
        resultado = 'Reprovado';
    }
    return resultado;
}

var alunos = parseInt(prompt('Informe a quantidade de alunos'));

for(var i = 1; i <= alunos; i++) {
    nomes[i] = prompt(`Digite o nome do aluno ${i}`);
    nota1[i] = parseInt(prompt('Digite a primeira nota'));
    nota2[i] = parseInt(prompt('Digite a segunda nota'));

    var media = calcularMedia(nota1[i], nota2[i]);

    document.write(`${nomes[i]} - 1º nota: ${nota1[i]} - 2º nota: ${nota2[i]}<br>`);
    document.write(`A média do ${nomes[i]} é ${media}, resultado: ${resultado(media)}<br>`);
}